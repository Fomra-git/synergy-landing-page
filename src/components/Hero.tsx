import Image from "next/image";
import { IconGoogle, IconStar } from "./icons";
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

          <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center gap-5 px-5 text-center sm:gap-6 lg:px-10">
            <h1 className="max-w-xs text-[26px] font-extrabold leading-tight text-white sm:max-w-sm sm:text-4xl lg:max-w-md lg:text-[44px]">
              Chennai&rsquo;s Most Trusted Physio Center
            </h1>

            <div className="w-full max-w-[300px] rounded-2xl bg-white/95 p-4 shadow-lifted backdrop-blur-sm sm:max-w-xs sm:p-5">
              <p className="text-base font-extrabold text-accent sm:text-lg">
                Trusted by 15,000+ Happy Patients
              </p>

              <div className="mt-3 flex items-center justify-center gap-2.5 rounded-xl border border-line bg-white px-3 py-2.5">
                <IconGoogle className="size-6 shrink-0" />
                <div className="text-left">
                  <span className="text-base font-extrabold text-navy">4.9</span>{" "}
                  <span className="inline-flex gap-0.5 align-middle text-[#F2A600]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <IconStar key={i} className="size-3 fill-[#F2A600] stroke-[#F2A600]" />
                    ))}
                  </span>
                  <div className="text-[11px] leading-tight text-ink-soft">from 500+ Google Reviews</div>
                </div>
              </div>

              <div className="mt-4 flex justify-center gap-6 sm:gap-8">
                <div>
                  <span className="block font-display text-lg text-accent">15,000+</span>
                  <span className="text-[11px] font-semibold text-ink-soft">Happy Patients</span>
                </div>
                <div>
                  <span className="block font-display text-lg text-accent">14+ Yrs</span>
                  <span className="text-[11px] font-semibold text-ink-soft">Healing Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form, floated up over the hero */}
        <div className="relative z-10 mx-auto -mt-10 w-full max-w-[520px] px-4 sm:px-6 sm:-mt-14 lg:mt-0 lg:max-w-none lg:px-0">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
