"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

export type Testimonial = {
  quote: string;
  name: string;
  city: string;
};

export default function Testimonials({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragX = useRef<number | null>(null);

  useEffect(() => {
    if (paused || items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 5400);
    return () => clearInterval(t);
  }, [paused, items.length]);

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + items.length) % items.length);

  const current = items[index];

  return (
    <div
      className="relative mx-auto mt-14 max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={(e) => {
        dragX.current = e.clientX;
      }}
      onPointerUp={(e) => {
        if (dragX.current === null) return;
        const delta = e.clientX - dragX.current;
        if (Math.abs(delta) > 48) go(delta < 0 ? 1 : -1);
        dragX.current = null;
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Guest reviews"
    >
      <figure key={index} className="anim-slide-in flex min-h-[300px] flex-col rounded-2xl border border-line bg-cloud p-8 shadow-card sm:p-10">
        <div className="flex items-center justify-between">
          <span className="text-moss/40">
            <Icon name="quote" className="size-9" />
          </span>
          <span className="flex text-gold" aria-label="Rated 5 out of 5">
            {Array.from({ length: 5 }).map((_, s) => (
              <Icon key={s} name="star" className="size-4" />
            ))}
          </span>
        </div>
        <blockquote className="mt-6 flex-1 font-display text-xl leading-relaxed text-ink/90 sm:text-2xl">
          “{current.quote}”
        </blockquote>
        <figcaption className="mt-8 flex items-center justify-between border-t border-line pt-5">
          <div>
            <p className="text-sm font-semibold text-ink">{current.name}</p>
            <p className="text-xs text-slate">{current.city}</p>
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate">
            {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </p>
        </figcaption>
      </figure>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous review"
          className="inline-flex size-10 rotate-90 items-center justify-center rounded-full border border-line text-ink transition hover:border-moss hover:text-moss"
        >
          <Icon name="chevronDown" className="size-4" />
        </button>
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to review ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-400 ${
                i === index ? "w-7 bg-moss" : "w-1.5 bg-line hover:bg-slate/50"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next review"
          className="inline-flex size-10 -rotate-90 items-center justify-center rounded-full border border-line text-ink transition hover:border-moss hover:text-moss"
        >
          <Icon name="chevronDown" className="size-4" />
        </button>
      </div>
    </div>
  );
}
