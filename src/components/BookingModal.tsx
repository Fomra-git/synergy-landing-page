"use client";

import { useBookingModal } from "@/context/BookingModalContext";
import { IconClose } from "./icons";
import BookingForm from "./BookingForm";

export default function BookingModal() {
  const { isOpen, close } = useBookingModal();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={close}
    >
      <div className="relative w-full max-w-[440px]" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={close}
          aria-label="Close booking form"
          className="absolute -top-11 right-0 flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <IconClose className="size-5" />
        </button>
        <div className="max-h-[85vh] overflow-y-auto rounded-[20px]">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
