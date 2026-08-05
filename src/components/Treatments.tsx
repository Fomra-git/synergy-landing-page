"use client";

import Image from "next/image";
import { treatments } from "@/lib/data";
import { useBookingModal } from "@/context/BookingModalContext";

export default function Treatments() {
  const { open: openBooking } = useBookingModal();

  return (
    <section id="treatments" className="bg-cloud py-10 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-accent">What We Treat</span>
        <h2 className="mt-1.5 text-[26px] leading-tight sm:text-3xl lg:text-4xl">Our Treatments</h2>
        <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-soft">
          Evidence-based rehab programs tailored to your recovery, not a generic protocol.
        </p>
      </div>

      <div className="no-scrollbar mt-5 flex gap-3 overflow-x-auto px-4 pb-2 sm:px-6 lg:mx-auto lg:mt-8 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-8 xl:grid-cols-6">
        {treatments.map((t) => (
          <div
            key={t.title}
            className="relative w-[190px] shrink-0 transition-transform hover:-translate-y-1 lg:w-auto"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line shadow-soft">
              <Image
                src={t.image}
                alt={t.title}
                fill
                sizes="(min-width: 1024px) 16vw, 190px"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-x-2.5 bottom-2.5 rounded-xl bg-white/95 px-2.5 py-2 text-center shadow-[0_4px_14px_rgba(18,49,75,0.18)] backdrop-blur-sm">
              <span className="text-[12.5px] font-bold leading-snug text-navy">{t.title}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 flex justify-center gap-1.5 lg:hidden">
        <span className="size-1.5 rounded-full bg-line" />
        <span className="size-1.5 rounded-full bg-line" />
        <span className="size-1.5 rounded-full bg-line" />
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
