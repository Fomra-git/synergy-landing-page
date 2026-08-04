import { reviews } from "@/lib/data";
import { IconPlay, IconStar } from "./icons";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cloud py-10 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-accent">Real Results</span>
        <h2 className="mt-1.5 text-[26px] leading-tight sm:text-3xl lg:text-4xl">What Our Patients Say</h2>

        <div className="mt-5 grid gap-6 lg:mt-8 lg:grid-cols-[1.1fr_1.4fr] lg:items-center lg:gap-10">
          <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-[18px] bg-linear-to-br from-navy to-blue shadow-lifted lg:aspect-[4/3.2]">
            <button
              type="button"
              aria-label="Play testimonial video"
              className="flex size-14 items-center justify-center rounded-full bg-white/95 shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-transform hover:scale-105 lg:size-16"
            >
              <IconPlay className="ml-1 size-5.5 fill-accent lg:size-6" />
            </button>
            <span className="absolute bottom-3 left-3.5 text-[12.5px] font-bold text-white">
              ▶ Watch: Rekha&rsquo;s recovery story, 3:12
            </span>
          </div>

          <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1 lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="w-[250px] shrink-0 rounded-2xl border border-line bg-white p-3.5 shadow-soft lg:w-auto"
              >
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex size-8.5 items-center justify-center rounded-full bg-cloud text-[13px] font-extrabold text-navy">
                    {r.initial}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-navy">{r.name}</div>
                    <div className="flex gap-0.5 text-[#F2A600]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <IconStar key={i} className="size-2.5 fill-[#F2A600] stroke-[#F2A600]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[12.5px] leading-relaxed text-ink-soft">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
