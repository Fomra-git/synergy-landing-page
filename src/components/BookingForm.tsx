"use client";

import { useState, type FormEvent } from "react";
import { branches, painAreas } from "@/lib/data";
import { IconChevronDown } from "./icons";

const inputClasses =
  "w-full rounded-xl border-[1.5px] border-line bg-[#FBFDFE] px-3 py-2 text-sm text-ink placeholder:text-ink-soft/60 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20 sm:py-2.5";

const selectClasses = `${inputClasses} appearance-none pr-9`;

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

      <div className="mb-1.5 sm:mb-2">
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

      <div className="mb-1.5 grid grid-cols-2 gap-2.5 sm:mb-2">
        <div>
          <label htmlFor="phone" className="mb-0.5 block text-[11px] font-bold uppercase tracking-wide text-navy sm:mb-1">
            Phone number
          </label>
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
