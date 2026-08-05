"use client";

import { treatments } from "@/lib/data";
import { useBookingModal } from "@/context/BookingModalContext";
import { IconTreatment } from "./icons";

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
            className="w-[150px] shrink-0 overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-transform hover:-translate-y-1 hover:shadow-lifted lg:w-auto"
          >
            <div className={`relative flex h-27 items-center justify-center bg-linear-to-br ${t.gradient}`}>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
              <IconTreatment name={t.icon} className="relative z-10 size-10 stroke-white" />
            </div>
            <h4 className="px-3 py-3.5 text-[13px] font-bold leading-snug text-navy">{t.title}</h4>
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
