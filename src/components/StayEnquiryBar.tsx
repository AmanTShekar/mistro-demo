import { site, waLink } from "@/lib/site";
import type { Stay } from "@/lib/stays";
import { Icon } from "./Icon";

export default function StayEnquiryBar({ stay }: { stay: Stay }) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cloud/95 px-4 pt-3 lg:hidden"
      style={{ paddingBottom: "calc(12px + env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-xl items-center justify-between gap-4">
        <div className="shrink-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate">From</p>
          <p className="font-display text-lg font-medium leading-tight text-ink">
            ₹{stay.price.toLocaleString("en-IN")}
            <span className="ml-1 text-xs font-normal text-slate">/ night</span>
          </p>
        </div>
        <a
          href={waLink(
            `Hello ${site.name}! I'd like to enquire about the ${stay.name}.\nDates: \nGuests: `
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-moss px-5 py-3.5 text-sm font-semibold text-cloud shadow-card transition hover:bg-moss-deep"
        >
          <Icon name="whatsapp" className="size-4" />
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}
