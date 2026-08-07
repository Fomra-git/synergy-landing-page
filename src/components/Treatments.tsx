"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { treatments, type Treatment } from "@/lib/data";
import { useBookingModal } from "@/context/BookingModalContext";
import CardCarousel from "./CardCarousel";

function TreatmentCard({ t, eager }: { t: Treatment; eager?: boolean }) {
  return (
    <div className="relative transition-transform hover:-translate-y-1">
      <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-line shadow-soft">
        <Image
          src={t.image}
          alt={t.title}
          fill
          sizes="(min-width: 1024px) 25vw, 190px"
          loading={eager ? "eager" : "lazy"}
          className="object-cover"
        />
      </div>
      <div className="absolute inset-x-2.5 bottom-2.5 rounded-xl bg-white/95 px-2.5 py-2 text-center shadow-[0_4px_14px_rgba(18,49,75,0.18)] backdrop-blur-sm">
        <span className="text-[12.5px] font-bold leading-snug text-navy">{t.title}</span>
      </div>
    </div>
  );
}

const AUTOPLAY_DELAY = 3200;
const RESUME_DELAY = 4000;

const mobileTreatments = [...treatments, treatments[0]];

export default function Treatments() {
  const { open: openBooking } = useBookingModal();
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const settleTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [active, setActive] = useState(0);

  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const track = trackRef.current;
    const item = track?.children[index] as HTMLElement | undefined;
    if (!track || !item) return;
    track.scrollTo({ left: item.offsetLeft, behavior });
  }, []);

  const pauseAutoplay = useCallback(() => {
    pausedRef.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      const track = trackRef.current;
      if (!track || pausedRef.current) return;
      if (track.scrollWidth <= track.clientWidth + 1) return;
      const next = active + 1;
      scrollToIndex(next);
      setActive(next);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(id);
  }, [active, scrollToIndex]);

  useEffect(
    () => () => {
      resumeTimer.current && clearTimeout(resumeTimer.current);
      settleTimer.current && clearTimeout(settleTimer.current);
    },
    [],
  );

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    let closest = 0;
    let closestDist = Infinity;
    Array.from(track.children)
      .slice(0, mobileTreatments.length)
      .forEach((child, i) => {
        const dist = Math.abs((child as HTMLElement).offsetLeft - track.scrollLeft);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
    setActive(closest);

    if (settleTimer.current) clearTimeout(settleTimer.current);
    settleTimer.current = setTimeout(() => {
      if (closest === treatments.length) {
        scrollToIndex(0, "instant");
        setActive(0);
      }
    }, 120);
  }, [scrollToIndex]);

  return (
    <section id="treatments" className="bg-cloud py-7 sm:py-9 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-accent">What We Treat</span>
        <h2 className="mt-1.5 text-[26px] leading-tight sm:text-3xl lg:text-4xl">Our Treatments</h2>
        <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-soft">
          Evidence-based rehab programs tailored to your recovery, not a generic protocol.
        </p>
      </div>

      <div
        ref={trackRef}
        onScroll={handleScroll}
        onPointerDown={pauseAutoplay}
        onTouchStart={pauseAutoplay}
        onMouseEnter={pauseAutoplay}
        className="no-scrollbar mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-4 pb-2 sm:px-6 lg:hidden"
      >
        {mobileTreatments.map((t, i) => (
          <div key={`${t.title}-${i}`} className="relative w-[190px] shrink-0 snap-start">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-line shadow-soft">
              <Image
                src={t.image}
                alt={t.title}
                fill
                sizes="190px"
                loading={i < 2 ? "eager" : "lazy"}
                className="object-cover"
              />
            </div>
            <div className="absolute inset-x-2.5 bottom-2.5 rounded-xl bg-white/95 px-2.5 py-2 text-center shadow-[0_4px_14px_rgba(18,49,75,0.18)] backdrop-blur-sm">
              <span className="text-[12.5px] font-bold leading-snug text-navy">{t.title}</span>
            </div>
          </div>
        ))}
        <div className="w-[70vw] shrink-0" aria-hidden="true" />
      </div>

      <div className="mt-3 flex flex-wrap justify-center gap-1.5 px-4 lg:hidden">
        {treatments.map((t, i) => (
          <button
            key={t.title}
            type="button"
            aria-label={`Go to ${t.title}`}
            onClick={() => {
              pauseAutoplay();
              scrollToIndex(i);
              setActive(i);
            }}
            className={`size-1.5 rounded-full transition-colors ${
              i === active % treatments.length ? "bg-accent" : "bg-line"
            }`}
          />
        ))}
      </div>

      <div className="mx-auto mt-8 hidden max-w-7xl lg:block lg:px-8">
        <CardCarousel
          items={treatments}
          getKey={(t) => t.title}
          renderItem={(t, i) => <TreatmentCard t={t} eager={i < 3} />}
        />
      </div>

      <div className="mt-4 text-center lg:mt-8">
        <button
          type="button"
          onClick={openBooking}
          className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_8px_20px_-6px_rgba(14,107,224,0.45)] transition-colors hover:bg-accent-dark"
        >
          Book Appointment
        </button>
      </div>
    </section>
  );
}
