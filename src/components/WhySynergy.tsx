import { differentiators } from "@/lib/data";
import { IconHeart, IconStar, IconClock, IconShieldCheck } from "./icons";

const icons = [IconHeart, IconStar, IconClock, IconShieldCheck];

export default function WhySynergy() {
  return (
    <section id="why" className="py-8 sm:py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-accent">Why Synergy</span>
        <h2 className="mt-1.5 text-[26px] leading-tight sm:text-3xl lg:text-4xl">Care Built Around You</h2>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-10 lg:grid-cols-4 lg:gap-6">
          {differentiators.map((d, i) => {
            const Icon = icons[i];
            return (
              <div
                key={d.title}
                className="rounded-2xl border border-line bg-white p-4 shadow-soft transition-shadow hover:shadow-lifted sm:p-5 lg:p-6"
              >
                <div className="mb-2.5 flex size-9 items-center justify-center rounded-lg bg-accent/10 text-accent lg:size-11">
                  <Icon className="size-5 lg:size-6" />
                </div>
                <h4 className="text-sm font-bold text-navy lg:text-base">{d.title}</h4>
                <p className="mt-1 text-[12.5px] leading-relaxed text-ink-soft lg:text-sm">{d.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
