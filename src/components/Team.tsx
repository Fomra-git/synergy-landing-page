import { team } from "@/lib/data";

export default function Team() {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-accent">Meet The Team</span>
        <h2 className="mt-1.5 text-[26px] leading-tight sm:text-3xl lg:text-4xl">Your Care Team</h2>

        <div className="mt-5 grid grid-cols-2 gap-3.5 sm:gap-5 lg:mt-10 lg:grid-cols-4 lg:gap-6">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="mb-2 flex aspect-square items-center justify-center rounded-2xl bg-linear-to-br from-steel to-blue font-display text-2xl font-bold text-white shadow-soft lg:text-3xl">
                {member.initials}
              </div>
              <h4 className="text-[13.5px] font-bold text-navy lg:text-base">{member.name}</h4>
              <p className="mt-0.5 text-[11.5px] text-ink-soft lg:text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
