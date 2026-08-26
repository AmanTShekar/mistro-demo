"use client";

import { useState } from "react";
import { site, waLink } from "@/lib/site";
import { stays } from "@/lib/stays";
import { Icon } from "./Icon";

const inputCls =
  "w-full rounded-xl border border-line bg-fog px-4 py-3 text-sm text-ink placeholder:text-slate/60 transition focus:border-moss focus:outline-none focus:ring-2 focus:ring-moss/20";

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Hello ${site.name}! I'd like to enquire about a stay.`,
      ``,
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Check-in: ${data.get("date") || "Flexible"}`,
      `Guests: ${data.get("guests")}`,
      `Interested in: ${data.get("stay")}`,
      `Message: ${data.get("message") || "-"}`,
    ];
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-cloud p-6 shadow-card sm:p-8">
      <h2 className="font-display text-2xl font-medium text-ink">Send an enquiry</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate">
        Fill this in and it opens WhatsApp with your details pre-typed — no accounts, no waiting.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate">Your name</span>
          <input required name="name" autoComplete="name" placeholder="e.g. Arun Menon" className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate">Phone</span>
          <input
            required
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="e.g. 98470 00000"
            className={inputCls}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate">Check-in date</span>
          <input name="date" type="date" className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate">Guests</span>
          <select name="guests" defaultValue="2" className={inputCls}>
            {["1", "2", "3", "4", "5", "6+"].map((n) => (
              <option key={n} value={n}>
                {n} guest{n === "1" ? "" : "s"}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate">Interested in</span>
          <select name="stay" defaultValue="Not sure yet" className={inputCls}>
            {stays.map((stay) => (
              <option key={stay.slug} value={stay.name}>
                {stay.name}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet — help me choose</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate">Message</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Anything we should know — dates flexible, celebrating something, food preferences…"
            className={`${inputCls} resize-none`}
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-moss px-7 py-4 text-sm font-semibold text-cloud shadow-card transition-all duration-300 hover:bg-moss-deep sm:w-auto"
      >
        <Icon name="whatsapp" className="size-4" />
        {sent ? "Opening WhatsApp…" : "Send via WhatsApp"}
      </button>
      <p className="mt-3 text-xs text-slate">Typically replied within a few minutes, 8 am – 10 pm.</p>
    </form>
  );
}
