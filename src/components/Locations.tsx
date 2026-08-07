"use client";

import { useState } from "react";
import Image from "next/image";
import { branches } from "@/lib/data";
import { IconPin } from "./icons";

export default function Locations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeBranch = branches[activeIndex];

  return (
    <section id="locations" className="py-8 sm:py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-accent">Find Us</span>
        <h2 className="mt-1.5 text-[26px] leading-tight sm:text-3xl lg:text-4xl">Locate us</h2>
        <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-soft">
          Walk in or book ahead &mdash; a clinic near you, every day of the week.
        </p>

        <div className="mt-5 lg:mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-line shadow-soft lg:h-full lg:min-h-[360px]">
            <Image
              key={activeBranch.name}
              src={activeBranch.image}
              alt={`Synergy Healthcare & Wellness — ${activeBranch.name}`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-3.5 flex flex-col gap-2 lg:mt-0">
            {branches.map((branch, i) => (
              <div
                key={branch.name}
                role="button"
                tabIndex={0}
                onClick={() => setActiveIndex(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIndex(i);
                  }
                }}
                aria-pressed={i === activeIndex}
                className={`flex cursor-pointer items-center justify-between rounded-xl border px-3.5 py-3 transition-colors lg:px-5 lg:py-4 ${
                  i === activeIndex
                    ? "border-accent bg-accent/5"
                    : "border-line bg-cloud hover:border-accent/40"
                }`}
              >
                <span className="text-[13.5px] font-bold text-navy lg:text-base">{branch.name}</span>
                <div className="flex items-center gap-3.5 lg:gap-5">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${branch.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-[11.5px] font-bold text-navy hover:text-accent"
                  >
                    <IconPin className="size-3.5" />
                    Get Directions
                  </a>
                  <a
                    href={`tel:${branch.phone}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-[11.5px] font-bold text-accent hover:text-accent-dark"
                  >
                    Call &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
