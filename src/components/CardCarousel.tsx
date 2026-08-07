"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export interface CardCarouselApi {
  goTo: (index: number) => void;
}

interface CardCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  getKey: (item: T) => string;
  visible?: number;
  showEmphasis?: boolean;
  autoplayDelay?: number;
  resumeDelay?: number;
  paused?: boolean;
  onActiveChange?: (index: number) => void;
  onReady?: (api: CardCarouselApi) => void;
  className?: string;
}

export default function CardCarousel<T>({
  items,
  renderItem,
  getKey,
  visible = 3,
  showEmphasis = true,
  autoplayDelay = 3200,
  resumeDelay = 4000,
  paused = false,
  onActiveChange,
  onReady,
  className = "",
}: CardCarouselProps<T>) {
  const n = items.length;
  const canLoop = n > visible;
  const extended = canLoop ? [...items, ...items.slice(0, visible)] : items;
  const extLen = extended.length;
  const centerOffset = Math.floor(visible / 2);

  const [index, setIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    onActiveChange?.(index % n);
  }, [index, n, onActiveChange]);

  useEffect(() => {
    if (!canLoop || paused) return;
    const id = setInterval(() => {
      if (!pausedRef.current) setIndex((i) => i + 1);
    }, autoplayDelay);
    return () => clearInterval(id);
  }, [canLoop, autoplayDelay, paused]);

  useEffect(() => () => resumeTimer.current && clearTimeout(resumeTimer.current), []);

  const pauseWithTimer = useCallback(() => {
    pausedRef.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, resumeDelay);
  }, [resumeDelay]);

  const goTo = useCallback(
    (target: number) => {
      pauseWithTimer();
      setWithTransition(true);
      setIndex(target);
    },
    [pauseWithTimer],
  );

  useEffect(() => {
    onReady?.({ goTo });
  }, [onReady, goTo]);

  const handleTransitionEnd = () => {
    if (index === n) {
      setWithTransition(false);
      setIndex(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setWithTransition(true));
      });
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`.trim()}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onPointerDown={pauseWithTimer}
      onTouchStart={pauseWithTimer}
    >
      <div
        onTransitionEnd={handleTransitionEnd}
        className="flex"
        style={{
          width: `${(extLen / visible) * 100}%`,
          transform: `translateX(-${index * (100 / extLen)}%)`,
          transition: withTransition ? "transform 500ms ease-out" : "none",
        }}
      >
        {extended.map((item, i) => {
          const isCenter = canLoop ? i - index === centerOffset : i === centerOffset;
          const originalIndex = i >= n ? i - n : i;
          return (
            <div
              key={`${getKey(item)}-${i}`}
              className={`shrink-0 ${visible > 1 ? "px-2.5" : ""}`.trim()}
              style={{ width: `${100 / extLen}%` }}
            >
              <div
                className={`h-full transition-transform duration-500 ${
                  showEmphasis ? (isCenter ? "scale-100" : "scale-[0.94]") : ""
                }`.trim()}
              >
                {renderItem(item, originalIndex)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
