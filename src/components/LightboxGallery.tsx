"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Icon } from "./Icon";

export type GalleryItem = {
  src: string;
  alt: string;
  cat: string;
};

export default function LightboxGallery({ items }: { items: GalleryItem[] }) {
  const cats = useMemo(
    () => ["All", ...Array.from(new Set(items.map((i) => i.cat)))],
    [items]
  );
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? items : items.filter((i) => i.cat === filter)),
    [items, filter]
  );

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (index === null) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, prev, next]);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photos">
        {cats.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setFilter(cat);
              setIndex(null);
            }}
            aria-pressed={filter === cat}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 ${
              filter === cat
                ? "border-moss bg-moss text-cloud shadow-card"
                : "border-line bg-cloud text-ink hover:border-moss/50 hover:text-moss"
            }`}
          >
            {cat}
          </button>
        ))}
        <span className="ml-auto hidden self-center text-xs text-slate sm:block">
          {filtered.length} photo{filtered.length === 1 ? "" : "s"}
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {filtered.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Open photo: ${item.alt}`}
            className="group relative aspect-square overflow-hidden rounded-xl border border-line bg-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
            />
            <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/70 to-transparent p-3 pt-8 text-left text-xs font-medium text-cloud opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {item.alt}
            </span>
          </button>
        ))}
      </div>

      {index !== null && filtered[index] ? (
        <div
          className="fixed inset-0 z-[70] flex flex-col bg-ink/95 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="flex items-center justify-between text-cloud">
            <p className="text-xs tracking-widest text-cloud/60">
              {index + 1} / {filtered.length}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close viewer"
              className="inline-flex size-10 items-center justify-center rounded-full border border-cloud/30 transition hover:bg-cloud/10"
            >
              <Icon name="x" className="size-5" />
            </button>
          </div>

          <figure className="flex min-h-0 flex-1 flex-col items-center justify-center gap-4 py-4">
            <div className="relative h-full w-full max-w-4xl flex-1">
              <Image
                src={filtered[index].src}
                alt={filtered[index].alt}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="text-sm text-cloud/80">{filtered[index].alt}</figcaption>
          </figure>

          <div className="flex items-center justify-center gap-4 pb-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="inline-flex size-11 rotate-90 items-center justify-center rounded-full border border-cloud/30 text-cloud transition hover:bg-cloud/10"
            >
              <Icon name="chevronDown" className="size-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="inline-flex size-11 -rotate-90 items-center justify-center rounded-full border border-cloud/30 text-cloud transition hover:bg-cloud/10"
            >
              <Icon name="chevronDown" className="size-5" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
