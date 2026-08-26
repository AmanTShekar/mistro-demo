"use client";

import { usePathname } from "next/navigation";
import { site, waDefaultMessage, waLink } from "@/lib/site";
import { Icon } from "./Icon";

export default function WhatsAppFloat() {
  const pathname = usePathname();
  const onStayDetail =
    pathname.startsWith("/stays/") && pathname.split("/").filter(Boolean).length === 2;

  if (onStayDetail) return null;

  return (
    <a
      href={waLink(waDefaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${site.name} on WhatsApp`}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 md:bottom-7 md:right-7"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-ink px-4 py-2 text-xs font-medium text-cloud opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Chat with us
      </span>
      <span className="relative inline-flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_14px_30px_-10px_rgb(37_211_102/0.7)] transition-transform duration-300 group-hover:scale-105">
        <span className="absolute inset-0 rounded-full bg-[#25d366] animate-pulse-ring" aria-hidden="true" />
        <Icon name="whatsapp" className="relative size-7" />
      </span>
    </a>
  );
}
