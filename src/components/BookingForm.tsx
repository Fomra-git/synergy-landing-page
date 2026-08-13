"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { branches, countryCodes, flagUrl, painAreas } from "@/lib/data";
import { IconChevronDown } from "./icons";

const inputClasses =
  "w-full rounded-xl border-[1.5px] border-line bg-[#FBFDFE] px-3 py-2 text-sm text-ink placeholder:text-ink-soft/60 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20 sm:py-2.5";

const selectClasses = `${inputClasses} appearance-none pr-9`;

function CountryCodeSelect({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const selected = countryCodes.find((c) => c.dial === value) ?? countryCodes[0];

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex h-full w-[68px] items-center gap-1 rounded-xl border-[1.5px] border-line bg-[#FBFDFE] py-2 pl-2 pr-1 text-sm text-ink focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20 sm:py-2.5"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={flagUrl(selected.iso)} alt="" className="h-3 w-4.5 shrink-0 rounded-[2px] object-cover" />
        <span className="truncate">{selected.dial}</span>
        <IconChevronDown className="ml-auto size-3.5 shrink-0 text-ink-soft" />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Country code"
          className="absolute left-0 top-full z-20 mt-1 max-h-56 w-60 overflow-y-auto rounded-xl border border-line bg-white py-1 shadow-lifted"
        >
          {countryCodes.map((c) => (
            <li key={c.iso}>
              <button
                type="button"
                role="option"
                aria-selected={c.dial === value}
                onClick={() => {
                  onChange(c.dial);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2 px-3 py-1.5 text-left text-[13px] hover:bg-cloud ${
                  c.dial === value ? "bg-accent/5 font-semibold text-navy" : "text-ink"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={flagUrl(c.iso)} alt="" className="h-3 w-4.5 shrink-0 rounded-[2px] object-cover" />
                <span className="flex-1 truncate">{c.name}</span>
                <span className="shrink-0 text-ink-soft">{c.dial}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Select({
  id,
  name,
  required,
  children,
}: {
  id: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <select id={id} name={name} required={required} defaultValue="" className={selectClasses}>
        {children}
      </select>
      <IconChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-ink-soft" />
    </div>
  );
}

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [loadedAt] = useState(() => Date.now());

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!name.trim() || submitting) return;

    if (phone.length !== 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    const formData = new FormData(form);
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          countryCode,
          phone,
          age,
          pain: formData.get("pain"),
          branch: formData.get("branch"),
          company: formData.get("company"),
          loadedAt,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      form.reset();
      setCountryCode("+91");
      setPhone("");
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-[20px] border border-line bg-white p-8 text-center shadow-lifted">
        <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-accent/10 text-2xl">
          ✅
        </div>
        <h3 className="text-lg text-navy">Thank you, {name.split(" ")[0] || "there"}!</h3>
        <p className="mt-1 text-sm text-ink-soft">
          Our team will call you shortly to confirm your appointment.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm font-semibold text-accent hover:text-accent-dark"
        >
          Book another slot
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[20px] border border-line bg-white p-3 pb-2.5 shadow-lifted sm:p-6"
    >
      <h3 className="text-center text-base text-navy sm:text-lg">Request Your Appointment</h3>
      <p className="mb-1.5 border-b border-line pb-1.5 text-center text-[11.5px] text-ink-soft sm:mb-3 sm:pb-3">
        No Spam. Your details used only to confirm your slot.
      </p>

      {/* Honeypot: hidden from real users, bots tend to fill every field. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute left-[-9999px] top-auto size-px opacity-0"
      />

      <div className="mb-1.5 grid grid-cols-[1fr_64px] gap-2.5 sm:mb-2">
        <div>
          <label htmlFor="name" className="mb-0.5 block text-[11px] font-bold uppercase tracking-wide text-navy sm:mb-1">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="age" className="mb-0.5 block text-[11px] font-bold uppercase tracking-wide text-navy sm:mb-1">
            Age
          </label>
          <input
            id="age"
            name="age"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Age"
            required
            value={age}
            onChange={(e) => setAge(e.target.value.replace(/\D/g, "").slice(0, 2))}
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mb-1.5 sm:mb-2">
        <label htmlFor="phone" className="mb-0.5 block text-[11px] font-bold uppercase tracking-wide text-navy sm:mb-1">
          Phone number
        </label>
        <div className="flex gap-1.5">
          <CountryCodeSelect value={countryCode} onChange={setCountryCode} />
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{10}"
            maxLength={10}
            minLength={10}
            placeholder="98XXXXXXXX"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
            className={`${inputClasses} min-w-0 flex-1`}
          />
        </div>
      </div>

      <div className="mb-1.5 sm:mb-2">
        <label htmlFor="pain" className="mb-0.5 block text-[11px] font-bold uppercase tracking-wide text-navy sm:mb-1">
          Area of pain
        </label>
        <Select id="pain" name="pain" required>
          <option value="">Select area</option>
          {painAreas.map((area) => (
            <option key={area}>{area}</option>
          ))}
        </Select>
      </div>

      <div className="mb-2 sm:mb-3">
        <label htmlFor="branch" className="mb-0.5 block text-[11px] font-bold uppercase tracking-wide text-navy sm:mb-1">
          Preferred branch
        </label>
        <Select id="branch" name="branch" required>
          <option value="">Select branch</option>
          {branches.map((b) => (
            <option key={b.name}>{b.name}</option>
          ))}
        </Select>
      </div>

      {error && <p className="mb-2 text-center text-[12.5px] font-semibold text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-xl bg-accent px-5 py-3 text-[15px] font-bold text-white shadow-[0_8px_20px_-6px_rgba(14,107,224,0.45)] transition-transform hover:bg-accent-dark active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-70 sm:py-3.5"
      >
        {submitting ? "Submitting…" : "Confirm My Appointment"}
      </button>
    </form>
  );
}
