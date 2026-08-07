"use client";

import { useState } from "react";
import Image from "next/image";
import { branches, navLinks } from "@/lib/data";
import { useBookingModal } from "@/context/BookingModalContext";
import { IconMenu, IconClose, IconPushPin } from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { open: openBooking } = useBookingModal();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <a href="#top" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Synergy Healthcare & Wellness"
            width={168}
            height={64}
            className="h-10 w-auto sm:h-11"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-navy/80 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openBooking}
            className="rounded-xl bg-accent px-3 py-2.5 text-xs font-bold text-white shadow-soft transition-colors hover:bg-accent-dark sm:px-4 sm:text-sm"
          >
            Book Appointment
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-cloud text-navy lg:hidden"
          >
            {open ? <IconClose className="size-4.5" /> : <IconMenu className="size-4.5" />}
          </button>
        </div>
      </div>

      <nav
        className={`overflow-hidden bg-cloud transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-72" : "max-h-0"
        }`}
      >
        <div className="flex flex-col border-t border-line px-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3 text-sm font-semibold text-navy last:border-b-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="grid grid-cols-5 gap-1 border-t border-line px-2 py-1.5 sm:flex sm:justify-center sm:gap-2 sm:px-6 sm:py-2 lg:px-8">
        {branches.map((branch) => (
          <a
            key={branch.name}
            href="#locations"
            className="flex min-w-0 items-center justify-center gap-0.5 rounded-full border border-line bg-cloud px-0.5 py-1.5 text-navy transition-colors hover:border-accent hover:text-accent sm:gap-1 sm:px-3"
          >
            <IconPushPin className="size-3 shrink-0 sm:size-4" />
            <span className="truncate text-[9.5px] font-semibold sm:text-[12.5px]">{branch.name}</span>
          </a>
        ))}
      </div>
    </header>
  );
}
