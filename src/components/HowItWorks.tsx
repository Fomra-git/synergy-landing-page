import { steps } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section className="bg-cloud py-7 sm:py-9 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-accent">The Process</span>
        <h2 className="mt-1.5 text-[26px] leading-tight sm:text-3xl lg:text-4xl">How It Works</h2>

        {/* Mobile / tablet: vertical timeline */}
        <div className="mt-5 flex flex-col lg:hidden">
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex gap-3.5 pb-6.5 last:pb-0">
              {i !== steps.length - 1 && (
                <span className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-line" aria-hidden />
              )}
              <div className="z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-navy font-display text-[15px] font-bold text-white">
                {i + 1}
              </div>
              <div>
                <h4 className="text-[14.5px] font-bold text-navy">{step.title}</h4>
                <p className="mt-0.5 text-[12.5px] leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="mt-10 hidden lg:grid lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              {i !== steps.length - 1 && (
                <span className="absolute left-[calc(50%+28px)] right-[calc(-50%+28px)] top-6 h-0.5 bg-line" aria-hidden />
              )}
              <div className="relative z-10 mx-auto flex size-12 items-center justify-center rounded-full bg-navy font-display text-base font-bold text-white">
                {i + 1}
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-base font-bold text-navy">{step.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
