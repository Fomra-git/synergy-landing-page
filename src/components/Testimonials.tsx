import { reviews } from "@/lib/data";
import { IconStar } from "./icons";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cloud py-10 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-accent">Real Results</span>
        <h2 className="mt-1.5 text-[26px] leading-tight sm:text-3xl lg:text-4xl">Hear It From Our Patients</h2>

        <div className="no-scrollbar mt-5 flex gap-3 overflow-x-auto pb-1 lg:mt-8 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible">
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
    </section>
  );
}
