import { IconGoogle, IconStar } from "./icons";
import BookingForm from "./BookingForm";

export default function Hero() {
  return (
    <section id="top" className="bg-white lg:bg-linear-to-br lg:from-navy lg:via-blue lg:to-accent">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-6 lg:py-4">
        {/* Gradient panel + overlay copy */}
        <div className="relative h-[190px] overflow-hidden bg-linear-to-br from-navy via-blue to-accent sm:h-[360px] lg:h-[440px] lg:bg-none">
          <div className="absolute inset-0 z-[2] flex flex-col items-center justify-start gap-2 px-5 pt-8 pb-3 text-center sm:gap-4 sm:pt-11 sm:pb-5 lg:justify-center lg:py-5">
            <h1 className="max-w-none whitespace-nowrap text-[clamp(14px,4.5vw,26px)] font-extrabold leading-tight text-white sm:max-w-sm sm:whitespace-normal sm:text-4xl lg:max-w-md lg:text-[44px]">
              Chennai&rsquo;s Most Trusted Physio Center
            </h1>

            <div className="flex items-stretch justify-center gap-1.5 sm:gap-3">
              <div className="flex flex-col items-center justify-center rounded-lg border border-line bg-white px-2 py-1.5 text-center shadow-soft sm:rounded-xl sm:px-4 sm:py-2.5">
                <span className="font-display text-xs font-extrabold text-accent sm:text-lg">15,000+</span>
                <span className="text-[8px] font-semibold leading-tight text-ink-soft sm:text-[10.5px]">
                  Happy Patients
                </span>
              </div>

              <div className="flex items-center gap-1.5 rounded-lg border border-line bg-white px-2.5 py-1.5 shadow-soft sm:gap-2.5 sm:rounded-xl sm:px-4 sm:py-2.5">
                <IconGoogle className="size-4 shrink-0 sm:size-6" />
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-extrabold text-navy sm:text-base">4.9</span>
                    <span className="inline-flex gap-0.5 text-[#F2A600]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <IconStar key={i} className="size-2 fill-[#F2A600] stroke-[#F2A600] sm:size-3" />
                      ))}
                    </span>
                  </div>
                  <div className="text-[8px] leading-tight text-ink-soft sm:text-[10.5px]">
                    from 500+ Google Reviews
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center rounded-lg border border-line bg-white px-2 py-1.5 text-center shadow-soft sm:rounded-xl sm:px-4 sm:py-2.5">
                <span className="font-display text-xs font-extrabold text-accent sm:text-lg">14+ Yrs</span>
                <span className="text-[8px] font-semibold leading-tight text-ink-soft sm:text-[10.5px]">
                  Healing Experience
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form, floated up over the hero */}
        <div className="relative z-10 mx-auto -mt-14 w-full max-w-[480px] px-4 sm:px-6 sm:-mt-8 lg:mt-0 lg:max-w-[440px] lg:px-0">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
