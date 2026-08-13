"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { IconChevronLeft, IconChevronRight } from "./icons";

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
  const offset = canLoop ? visible : 0;
  const extended = canLoop
    ? [...items.slice(-visible), ...items, ...items.slice(0, visible)]
    : items;
  const extLen = extended.length;
  const centerOffset = Math.floor(visible / 2);

  const [index, setIndex] = useState(offset);
  const [withTransition, setWithTransition] = useState(true);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    onActiveChange?.(((index - offset) % n + n) % n);
  }, [index, n, offset, onActiveChange]);

  useEffect(() => {
    if (!canLoop || paused) return;
    const id = setInterval(() => {
      // Skip ticks while the tab is backgrounded: setInterval keeps firing
      // (throttled) even when hidden, but the CSS transitionend that
      // normally corrects the looped index for wraparound doesn't reliably
      // fire without a real paint — left unguarded, index drifts far out of
      // range and the strip renders scrolled off-screen once the tab is
      // visible again.
      if (!pausedRef.current && document.visibilityState === "visible") setIndex((i) => i + 1);
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
      setIndex(target + offset);
    },
    [pauseWithTimer, offset],
  );

  const step = useCallback(
    (dir: 1 | -1) => {
      pauseWithTimer();
      setWithTransition(true);
      setIndex((i) => i + dir);
    },
    [pauseWithTimer],
  );

  useEffect(() => {
    onReady?.({ goTo });
  }, [onReady, goTo]);

  const handleTransitionEnd = () => {
    if (!canLoop) return;
    if (index >= n + offset) {
      setWithTransition(false);
      setIndex(index - n);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setWithTransition(true));
      });
    } else if (index < offset) {
      setWithTransition(false);
      setIndex(index + n);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setWithTransition(true));
      });
    }
  };

  // Single-card mode (mobile) has no side gutter for an overlaid arrow to
  // sit in without covering the card's own text — so it gets dedicated
  // space outside the card instead of overlapping it. Multi-card mode
  // (desktop grid) keeps the original inside-overlay placement.
  const outside = visible === 1;

  return (
    <div
      className={`relative ${outside ? "" : "overflow-hidden"} ${className}`.trim()}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onPointerDown={pauseWithTimer}
      onTouchStart={pauseWithTimer}
    >
      <div className={outside ? "overflow-hidden px-9" : ""}>
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
            const originalIndex = canLoop ? ((i - offset) % n + n) % n : i;
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

      {canLoop && (
        <>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous"
            className={`absolute top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white shadow-[0_2px_10px_rgba(18,49,75,0.25)] transition-colors hover:bg-accent-dark ${
              outside ? "left-0 size-8" : "left-2 size-9"
            }`}
          >
            <IconChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next"
            className={`absolute top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white shadow-[0_2px_10px_rgba(18,49,75,0.25)] transition-colors hover:bg-accent-dark ${
              outside ? "right-0 size-8" : "right-2 size-9"
            }`}
          >
            <IconChevronRight className="size-5" />
          </button>
        </>
      )}
    </div>
  );
}
