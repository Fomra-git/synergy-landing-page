import Image from "next/image";
import {
  PHONE_TEL,
  PHONE_DISPLAY,
  EMAIL,
  HEADQUARTERS_ADDRESS,
  navLinks,
  branches,
  footerServices,
  socialLinks,
} from "@/lib/data";
import { IconFacebook, IconInstagram, IconLink, IconMail, IconPhone, IconPin, IconYoutube } from "./icons";

const socialIcons = { YouTube: IconYoutube, Facebook: IconFacebook, Instagram: IconInstagram };

export default function Footer() {
  return (
    <footer className="mt-3 bg-[#f1f7ff] pb-8 pt-9 text-black lg:pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[1.1fr_0.9fr_0.9fr_1.2fr] lg:gap-8">
          <div>
            <Image
              src="/images/logo.png"
              alt="Synergy Healthcare & Wellness"
              width={168}
              height={64}
              className="h-14 w-auto"
            />
            <div className="mt-4 flex items-center gap-4">
              {socialLinks.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="text-navy transition-colors hover:text-accent"
                  >
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-7 lg:mt-0">
            <h5 className="text-base font-bold text-navy">Explore</h5>
            <ul className="mt-3 flex flex-col gap-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="flex items-center gap-2 text-black/75 hover:text-accent">
                    <IconLink className="size-3.5 shrink-0 text-accent" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 lg:mt-0">
            <h5 className="text-base font-bold text-navy">Our Branches</h5>
            <ul className="mt-3 flex flex-col gap-2.5 text-sm">
              {branches.map((branch) => (
                <li key={branch.name} className="flex items-center gap-2 text-black/75">
                  <IconPin className="size-3.5 shrink-0 text-accent" />
                  {branch.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 lg:mt-0">
            <h5 className="text-base font-bold text-navy">Find Us Here</h5>
            <div className="mt-3 flex flex-col gap-2.5 text-sm">
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 text-black/75 hover:text-accent">
                <IconPhone className="size-3.5 shrink-0 text-accent" />
                {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-black/75 hover:text-accent">
                <IconMail className="size-3.5 shrink-0 text-accent" />
                {EMAIL}
              </a>
              <div className="flex items-start gap-2 text-black/75">
                <IconPin className="mt-0.5 size-3.5 shrink-0 text-accent" />
                <span>
                  <span className="font-bold text-navy">Headquarters</span> - {HEADQUARTERS_ADDRESS}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 lg:mt-12">
          <h5 className="text-base font-bold text-navy">Our Services</h5>
          <p className="mt-3 text-[13px] leading-relaxed text-black/75">
            {footerServices.map((service, i) => (
              <span key={service}>
                {service}
                {i < footerServices.length - 1 && <span className="mx-2 text-black/30">|</span>}
              </span>
            ))}
          </p>
        </div>

        <div className="mt-8">
          <h5 className="text-base font-bold text-navy">Policies</h5>
          <ul className="mt-3 flex flex-col gap-2.5 text-sm">
            <li>
              <a href="#" className="flex items-center gap-2 text-black/75 hover:text-accent">
                <IconLink className="size-3.5 shrink-0 text-accent" />
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 text-black/75 hover:text-accent">
                <IconLink className="size-3.5 shrink-0 text-accent" />
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 text-black/75 hover:text-accent">
                <IconLink className="size-3.5 shrink-0 text-accent" />
                Refunds and Cancellation
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 text-[11px] text-black/60">
          &copy; 2026 Synergy Healthcare and Wellness All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
