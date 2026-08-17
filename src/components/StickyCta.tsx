import { PHONE_TEL, WHATSAPP_URL } from "@/lib/data";
import { IconPhone, IconWhatsapp } from "./icons";

export default function StickyCta() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 flex shadow-[0_-6px_20px_rgba(0,0,0,0.12)] lg:hidden">
        <a href={`tel:${PHONE_TEL}`} className="flex flex-1 items-center justify-center gap-2 bg-navy py-2.5 text-sm font-extrabold text-white">
          <IconPhone className="size-4.5 fill-current" />
          Call Now
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] py-2.5 text-sm font-extrabold text-white"
        >
          <IconWhatsapp className="size-4.5" />
          WhatsApp Us
        </a>
      </div>

      <a
        href={`tel:${PHONE_TEL}`}
        aria-label="Call Now"
        className="fixed bottom-6 left-6 z-50 hidden size-14 items-center justify-center rounded-full bg-navy text-white shadow-lg transition-transform hover:scale-105 lg:flex"
      >
        <IconPhone className="size-6 fill-current" />
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Us"
        className="fixed bottom-6 right-6 z-50 hidden size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 lg:flex"
      >
        <IconWhatsapp className="size-6" />
      </a>
    </>
  );
}
