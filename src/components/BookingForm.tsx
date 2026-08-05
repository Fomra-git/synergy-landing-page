"use client";

import { useState, type FormEvent } from "react";
import { branches, painAreas } from "@/lib/data";
import { IconChevronDown } from "./icons";

const inputClasses =
  "w-full rounded-xl border-[1.5px] border-line bg-[#FBFDFE] px-3 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20";

const selectClasses = `${inputClasses} appearance-none pr-9`;

function Select({
  id,
  name,
  children,
}: {
  id: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <select id={id} name={name} defaultValue="" className={selectClasses}>
        {children}
      </select>
      <IconChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-ink-soft" />
    </div>
  );
}

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value.trim();
    if (!name.trim() || !phone) return;
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div
        id="bookForm"
        className="rounded-[20px] border border-line bg-white p-8 text-center shadow-lifted"
      >
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
      id="bookForm"
      onSubmit={handleSubmit}
      className="rounded-[20px] border border-line bg-white p-4 pb-3.5 shadow-lifted sm:p-6"
    >
      <h3 className="text-center text-lg text-navy">Request Your Appointment</h3>
      <p className="mb-3 border-b border-line pb-3 text-center text-[11.5px] text-ink-soft">
        Get a callback within 15 minutes
      </p>

      <div className="mb-2">
        <label htmlFor="name" className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-navy">
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

      <div className="mb-2 grid grid-cols-2 gap-2.5">
        <div>
          <label htmlFor="phone" className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-navy">
            Phone number
          </label>
          <input id="phone" name="phone" type="tel" placeholder="98XXXXXXXX" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="age" className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-navy">
            Age
          </label>
          <input id="age" name="age" type="number" placeholder="Age" min={1} max={110} className={inputClasses} />
        </div>
      </div>

      <div className="mb-2">
        <label htmlFor="pain" className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-navy">
          Area of pain
        </label>
        <Select id="pain" name="pain">
          <option value="">Select area</option>
          {painAreas.map((area) => (
            <option key={area}>{area}</option>
          ))}
        </Select>
      </div>

      <div className="mb-3">
        <label htmlFor="branch" className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-navy">
          Preferred branch
        </label>
        <Select id="branch" name="branch">
          <option value="">Select branch</option>
          {branches.map((b) => (
            <option key={b.name}>{b.name}</option>
          ))}
        </Select>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-accent px-5 py-3.5 text-[15px] font-bold text-white shadow-[0_8px_20px_-6px_rgba(14,107,224,0.45)] transition-transform hover:bg-accent-dark active:scale-[0.97]"
      >
        Confirm My Appointment
      </button>
    </form>
  );
}
