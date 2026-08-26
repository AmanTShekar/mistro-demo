"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, waDefaultMessage, waLink } from "@/lib/site";
import { Icon } from "./Icon";

function Wordmark({ light }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex flex-col leading-none" aria-label={`${site.name} — home`}>
      <span
        className={`font-display text-[22px] font-semibold tracking-tight transition-colors ${
          light ? "text-cloud group-hover:text-cloud/80" : "text-ink group-hover:text-moss"
        }`}
      >
        {site.name.split(" ")[0]}
      </span>
      <span className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.42em] ${light ? "text-cloud/70" : "text-slate"}`}>
        Munnar
      </span>
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isHome = pathname === "/";
  const solid = scrolled || !isHome;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const headerTone = open
    ? "border-b border-transparent bg-transparent text-ink"
    : solid
      ? "border-b border-line bg-cloud text-ink shadow-[0_12px_32px_-24px_rgb(35_48_42/0.45)]"
      : "border-b border-transparent text-cloud";

  const bar =
    "absolute left-1/2 h-[1.5px] w-[18px] -translate-x-1/2 rounded-full bg-current transition-all duration-300 ease-out will-change-transform";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${headerTone}`}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 md:h-20">
          <Wordmark light={!solid && !open} />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                transitionTypes={item.href === "/" ? ["nav-back"] : ["nav-forward"]}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`group relative py-2 text-sm font-medium tracking-wide transition-opacity ${
                  isActive(item.href) ? "opacity-100" : "opacity-75 hover:opacity-100"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-current transition-transform duration-300 ${
                    isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${site.phoneHref}`}
              className={`hidden items-center gap-2 text-sm font-medium opacity-80 transition-all duration-300 hover:opacity-100 xl:flex ${
                open ? "pointer-events-none opacity-0" : ""
              }`}
            >
              <Icon name="phone" className="size-4" />
              {site.phoneDisplay}
            </a>
            <a
              href={waLink(waDefaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden items-center gap-2 rounded-full bg-moss px-5 py-2.5 text-sm font-semibold text-cloud shadow-sm transition-all duration-300 hover:bg-moss-deep hover:shadow-md sm:inline-flex ${
                open ? "pointer-events-none translate-y-1 opacity-0" : ""
              }`}
            >
              <Icon name="whatsapp" className="size-4" />
              Enquire
            </a>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative inline-flex size-10 items-center justify-center rounded-full border border-current/20 text-current transition-colors duration-300 hover:bg-current/10 lg:hidden"
            >
              <span className={`${bar} ${open ? "top-[19px] rotate-45" : "top-[14px]"}`} />
              <span className={`${bar} top-[19px] ${open ? "scale-x-0 opacity-0" : "opacity-100"}`} />
              <span className={`${bar} ${open ? "top-[19px] -rotate-45" : "top-[24px]"}`} />
            </button>
          </div>
        </div>
      </header>

      <div
        className="fixed inset-0 z-[45] flex flex-col bg-fog lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        style={{
          clipPath: open
            ? "circle(150% at calc(100% - 3rem) 2rem)"
            : "circle(0% at calc(100% - 3rem) 2rem)",
          transition: "clip-path 700ms cubic-bezier(0.22, 0.61, 0.36, 1)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <nav
          className="flex flex-1 flex-col justify-center gap-1 px-8 pt-16"
          aria-label="Mobile"
          onClick={() => setOpen(false)}
        >
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              transitionTypes={item.href === "/" ? ["nav-back"] : ["nav-forward"]}
              style={{ transitionDelay: open ? `${180 + i * 80}ms` : "0ms" }}
              className={`group flex items-center justify-between border-b border-line py-5 transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <span className="font-display text-4xl font-medium text-ink transition-colors group-hover:text-moss sm:text-5xl">
                {item.label}
              </span>
              <Icon
                name="arrowRight"
                className="size-5 text-moss transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          ))}
        </nav>

        <div
          className={`px-8 pb-12 pt-4 transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: open ? "520ms" : "0ms" }}
        >
          <a
            href={waLink(waDefaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-moss px-6 py-4 text-base font-semibold text-cloud transition hover:bg-moss-deep"
          >
            <Icon name="whatsapp" className="size-5" />
            Enquire on WhatsApp
          </a>
          <p className="mt-5 text-center text-sm text-slate">
            {site.phoneDisplay} · {site.address.locality}, {site.address.region}
          </p>
        </div>
      </div>
    </>
  );
}
