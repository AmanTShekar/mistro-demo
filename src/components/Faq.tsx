"use client";

import { useState } from "react";
import { Icon } from "./Icon";

export type FaqItem = {
  q: string;
  a: string;
};

export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="mt-10 space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={`rounded-2xl border bg-cloud px-6 transition-all duration-500 ${
              isOpen ? "border-moss/30 shadow-card" : "border-line"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left font-semibold text-ink"
            >
              {item.q}
              <span
                className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                  isOpen ? "bg-moss text-cloud" : "bg-mist text-moss"
                }`}
              >
                <Icon
                  name="chevronDown"
                  className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-500 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-6 text-sm leading-relaxed text-slate">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
