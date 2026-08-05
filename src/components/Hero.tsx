import { IconGoogle, IconStar } from "./icons";
import BookingForm from "./BookingForm";

export default function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8 lg:py-14">
        {/* Gradient panel + overlay copy */}
        <div className="relative h-[320px] overflow-hidden bg-linear-to-br from-navy via-blue to-accent sm:h-[360px] lg:h-[440px] lg:rounded-[28px]">
          <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center gap-3 px-5 py-5 text-center sm:gap-4 lg:px-10">
            <h1 className="max-w-xs text-[26px] font-extrabold leading-tight text-white sm:max-w-sm sm:text-4xl lg:max-w-md lg:text-[44px]">
              Chennai&rsquo;s Most Trusted Physio Center
            </h1>

            <div className="w-full max-w-[240px] rounded-xl bg-white/95 p-3 shadow-lifted backdrop-blur-sm sm:max-w-[260px] sm:p-3.5">
              <p className="text-xs font-extrabold text-accent sm:text-sm">
                Trusted by 15,000+ Happy Patients
              </p>

              <div className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-2.5 py-1.5">
                <IconGoogle className="size-4.5 shrink-0" />
                <div className="text-left">
                  <span className="text-sm font-extrabold text-navy">4.9</span>{" "}
                  <span className="inline-flex gap-0.5 align-middle text-[#F2A600]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <IconStar key={i} className="size-2.5 fill-[#F2A600] stroke-[#F2A600]" />
                    ))}
                  </span>
                  <div className="text-[9.5px] leading-tight text-ink-soft">from 500+ Google Reviews</div>
                </div>
              </div>

              <div className="mt-2 flex justify-center gap-4 sm:gap-5">
                <div>
                  <span className="block font-display text-sm text-accent">15,000+</span>
                  <span className="text-[9.5px] font-semibold text-ink-soft">Happy Patients</span>
                </div>
                <div>
                  <span className="block font-display text-sm text-accent">14+ Yrs</span>
                  <span className="text-[9.5px] font-semibold text-ink-soft">Healing Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form, floated up over the hero */}
        <div className="relative z-10 mx-auto -mt-6 w-full max-w-[520px] px-4 sm:px-6 sm:-mt-8 lg:mt-0 lg:max-w-none lg:px-0">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
