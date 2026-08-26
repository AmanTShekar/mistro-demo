"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";
import { site, waDefaultMessage, waLink } from "@/lib/site";
import { Icon } from "./Icon";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sessionStorage.getItem("mv-intro")) return;
    rootRef.current?.querySelectorAll<HTMLElement>(".hero-rise").forEach((el) => {
      el.classList.remove("hero-rise");
      el.style.animationDelay = "";
    });
  }, []);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      const y = Math.min(window.scrollY * 0.25, 320);
      el.style.transform = `translate3d(0, ${y}px, 0) scale(1.1)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={rootRef} className="relative flex min-h-svh items-end overflow-hidden bg-ink">
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/hero.svg"
          alt="Morning mist drifting over the valleys of Vattavada"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/10 to-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-36 sm:px-8 md:pb-28 lg:pb-32">
        <p className="hero-rise text-[11px] font-semibold uppercase tracking-[0.42em] text-cloud/80 sm:text-xs" style={{ animationDelay: "150ms" }}>
          {site.address.locality.toUpperCase()} · KERALA
        </p>
        <h1 className="mt-5 max-w-3xl font-display font-medium text-hero text-cloud">
          <span className="hero-rise block" style={{ animationDelay: "300ms" }}>Wake up</span>
          <span className="hero-rise block italic text-moss-soft" style={{ animationDelay: "420ms" }}>above the clouds.</span>
        </h1>
        <p className="hero-rise mt-6 max-w-xl text-lead text-cloud/85" style={{ animationDelay: "560ms" }}>
          A small, quiet resort tucked into the misty hills of {site.address.locality} — spotless valley-view rooms and private cottages, kept ready for slow mornings.
        </p>

        <div className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ animationDelay: "700ms" }}>
          <Link
            href="/stays"
            transitionTypes={["nav-forward"]}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-moss px-7 py-4 text-sm font-semibold text-cloud shadow-lift transition-all duration-300 hover:bg-moss-deep"
          >
            Explore our stays
            <Icon name="arrowRight" className="size-4" />
          </Link>
          <a
            href={waLink(waDefaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cloud/50 px-7 py-4 text-sm font-semibold text-cloud backdrop-blur-sm transition-all duration-300 hover:border-cloud hover:bg-cloud/10"
          >
            <Icon name="whatsapp" className="size-4" />
            Enquire on WhatsApp
          </a>
        </div>

        <div className="hero-rise mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-cloud/75" style={{ animationDelay: "840ms" }}>
          <span className="flex items-center gap-2">
            <span className="flex text-gold" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="size-4" />
              ))}
            </span>
            <strong className="font-semibold text-cloud">{site.rating}</strong> from {site.reviewCount}+ guests
          </span>
          <span className="hidden h-4 w-px bg-cloud/30 sm:block" aria-hidden="true" />
          <span>Since {site.established}</span>
          <span className="hidden h-4 w-px bg-cloud/30 sm:block" aria-hidden="true" />
          <span>{site.geo.lat}° N, {site.geo.lng}° E — 1,600 m up</span>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-cloud/70 md:block" aria-hidden="true">
        <Icon name="chevronDown" className="size-6 animate-cue" />
      </div>
    </section>
  );
}
