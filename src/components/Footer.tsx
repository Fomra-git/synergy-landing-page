import Image from "next/image";
import { PHONE_TEL, PHONE_DISPLAY, WHATSAPP_URL, navLinks, branches } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-3 bg-navy pb-8 pt-9 text-[#cfdbe4] lg:pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-10">
          <div>
            <Image
              src="/images/logo.png"
              alt="Synergy Healthcare & Wellness"
              width={168}
              height={64}
              className="mb-3.5 h-8 w-auto brightness-0 invert"
            />
            <p className="max-w-sm text-xs leading-relaxed text-[#9fb2c1]">
              Synergy Healthcare &amp; Wellness &mdash; Chennai&rsquo;s trusted physiotherapy clinic. 5 locations,
              14+ years of clinical experience, 15,000+ patients healed.
            </p>
            <div className="mt-3.5 flex flex-wrap gap-3.5 text-xs">
              <a href={`tel:${PHONE_TEL}`} className="hover:text-white">
                Call Us
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp
              </a>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms
              </a>
            </div>
          </div>

          <div className="mt-7 lg:mt-0">
            <h5 className="text-xs font-bold uppercase tracking-wide text-white/70">Explore</h5>
            <ul className="mt-3 flex flex-col gap-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[#cfdbe4] hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 lg:mt-0">
            <h5 className="text-xs font-bold uppercase tracking-wide text-white/70">Locations</h5>
            <ul className="mt-3 flex flex-col gap-2.5 text-sm">
              {branches.map((branch) => (
                <li key={branch.name} className="text-[#cfdbe4]">
                  {branch.name}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-semibold text-white">{PHONE_DISPLAY}</p>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-[11px] text-[#7f95a6] lg:mt-10">
          &copy; 2026 Synergy Healthcare &amp; Wellness. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
