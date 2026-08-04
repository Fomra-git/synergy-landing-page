import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/data";
import { IconCalendar, IconWhatsapp, IconGoogle, IconStar } from "./icons";
import BookingForm from "./BookingForm";

export default function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8 lg:py-14">
        {/* Media + overlay copy */}
        <div className="relative h-[440px] overflow-hidden sm:h-[500px] lg:h-[620px] lg:rounded-[28px]">
          <Image
            src="/images/hero-physio.jpeg"
            alt="Synergy physiotherapist treating a patient's back"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[50%_25%]"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0a1a28]/25 via-[#0a1a28]/45 to-[#091826]/95" />

          <div className="absolute inset-0 z-[2] flex flex-col justify-end px-4 pb-6 sm:px-6 lg:px-10 lg:pb-10">
            <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#8FC1FF]">
              Chennai&rsquo;s Trusted Physio Clinic
            </span>
            <h1 className="mt-1.5 text-[26px] leading-tight text-white sm:text-4xl lg:text-[44px]">
              Move Without Pain.
              <br />
              Live Without <span className="text-[#7CB4FF]">Limits.</span>
            </h1>
            <p className="mt-2 max-w-[38ch] text-[12.5px] leading-relaxed text-white/85 sm:text-sm lg:text-base">
              Expert physiotherapy for pain relief, injury recovery and better mobility &mdash; across 5 Chennai
              locations.
            </p>

            <span className="mt-3 inline-flex w-fit items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-[11.5px] font-semibold leading-relaxed text-white backdrop-blur-sm">
              Anna Nagar<span className="mx-1.5 opacity-45">&bull;</span>T Nagar
              <span className="mx-1.5 opacity-45">&bull;</span>Adyar
              <span className="mx-1.5 opacity-45">&bull;</span>Mogappair
              <span className="mx-1.5 opacity-45">&bull;</span>Vepery
            </span>

            <div className="mt-3.5 flex gap-2.5 sm:max-w-md">
              <a
                href="#bookForm"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-3 text-[12.5px] font-extrabold text-white shadow-[0_8px_20px_-6px_rgba(14,107,224,0.55)] transition-colors hover:bg-accent-dark"
              >
                <IconCalendar className="size-4" />
                Book Appointment
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-white px-4 py-3 text-[12.5px] font-extrabold text-navy transition-colors hover:bg-white/90"
              >
                <IconWhatsapp className="size-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Form + trust content */}
        <div className="mx-auto mt-4 w-full max-w-[520px] px-4 sm:px-6 lg:mt-0 lg:max-w-none lg:px-0">
          <BookingForm />

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
            <div className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-3 py-2 shadow-soft">
              <IconGoogle className="size-5 shrink-0" />
              <div>
                <span className="text-sm font-extrabold text-navy">4.9</span>{" "}
                <span className="text-[13px] text-[#F2A600]">
                  <IconStar className="inline size-3 -translate-y-px fill-[#F2A600] stroke-[#F2A600]" />
                  <IconStar className="inline size-3 -translate-y-px fill-[#F2A600] stroke-[#F2A600]" />
                  <IconStar className="inline size-3 -translate-y-px fill-[#F2A600] stroke-[#F2A600]" />
                  <IconStar className="inline size-3 -translate-y-px fill-[#F2A600] stroke-[#F2A600]" />
                  <IconStar className="inline size-3 -translate-y-px fill-[#F2A600] stroke-[#F2A600]" />
                </span>
                <div className="text-[11px] leading-tight text-ink-soft">from 500+ Google Reviews</div>
              </div>
            </div>

            <div className="flex gap-5 text-navy sm:gap-8">
              <div>
                <span className="block font-display text-lg text-accent">15,000+</span>
                <span className="text-[11px] font-semibold text-ink-soft">Happy Patients</span>
              </div>
              <div>
                <span className="block font-display text-lg text-accent">14+ Yrs</span>
                <span className="text-[11px] font-semibold text-ink-soft">Healing Experience</span>
              </div>
              <div>
                <span className="block font-display text-lg text-accent">5</span>
                <span className="text-[11px] font-semibold text-ink-soft">Chennai Locations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
