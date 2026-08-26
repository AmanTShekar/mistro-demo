"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

type Phase = "hidden" | "in" | "out";

export default function Intro() {
  const [phase, setPhase] = useState<Phase>("hidden");

  useEffect(() => {
    if (sessionStorage.getItem("mv-intro")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sessionStorage.setItem("mv-intro", "1");
      return;
    }

    sessionStorage.setItem("mv-intro", "1");
    const raf = requestAnimationFrame(() => {
      setPhase("in");
      document.documentElement.style.overflow = "hidden";
    });

    const t1 = setTimeout(() => setPhase("out"), 1500);
    const t2 = setTimeout(() => {
      document.documentElement.style.overflow = "";
      setPhase("hidden");
    }, 2300);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[90] flex items-center justify-center bg-fog ${
        phase === "out" ? "intro-exit" : ""
      }`}
    >
      <div className="flex flex-col items-center">
        <p
          className="hero-rise font-display text-4xl font-medium text-ink sm:text-5xl"
          style={{ animationDelay: "120ms" }}
        >
          {site.name.split(" ")[0]}
        </p>
        <span
          className="mt-3 block h-px w-24 bg-moss/70"
          style={{ animation: "line-grow 800ms cubic-bezier(0.22,0.61,0.36,1) both 350ms", transformOrigin: "center" }}
        />
        <p
          className="hero-rise mt-3 text-[10px] font-semibold uppercase tracking-[0.5em] text-slate"
          style={{ animationDelay: "480ms" }}
        >
          {site.address.locality} · {site.address.region}
        </p>
      </div>
    </div>
  );
}
