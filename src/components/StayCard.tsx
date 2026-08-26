import Image from "next/image";
import Link from "next/link";
import type { Stay } from "@/lib/stays";
import { site, waLink } from "@/lib/site";
import { Icon } from "./Icon";

export default function StayCard({ stay, priority = false }: { stay: Stay; priority?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-cloud shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
      <Link
        href={`/stays/${stay.slug}`}
        transitionTypes={["nav-forward"]}
        className="relative block aspect-[4/3] overflow-hidden"
        aria-label={stay.name}
      >
        <Image
          src={stay.image}
          alt={stay.name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 82vw, (max-width: 1280px) 45vw, 24vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-cloud/90 px-3 py-1.5 text-xs font-semibold text-ink backdrop-blur-sm">
          ₹{stay.price.toLocaleString("en-IN")} onwards
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-ink/55 px-3 py-1.5 text-xs font-medium text-cloud backdrop-blur-sm">
          {stay.kind}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-medium text-ink transition-colors duration-300 group-hover:text-moss">
          <Link href={`/stays/${stay.slug}`} transitionTypes={["nav-forward"]}>{stay.name}</Link>
        </h3>
        <ul className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate">
          <li className="flex items-center gap-1.5">
            <Icon name="users" className="size-4" />
            {stay.guests}
          </li>
          <li className="flex items-center gap-1.5">
            <Icon name="size" className="size-3.5" />
            {stay.size}
          </li>
          <li className="flex items-center gap-1.5">
            <Icon name="bed" className="size-4" />
            {stay.bed}
          </li>
        </ul>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate">{stay.short}</p>

        <div className="mt-auto flex items-center justify-between pt-5">
          <Link
            href={`/stays/${stay.slug}`}
            transitionTypes={["nav-forward"]}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-moss transition-colors hover:text-moss-deep"
          >
            View details
            <Icon name="arrowRight" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href={waLink(`Hello ${site.name}! I'd like to enquire about the ${stay.name} (${stay.tagline}).`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${stay.name} on WhatsApp`}
            className="inline-flex size-9 items-center justify-center rounded-full border border-line text-moss transition-all duration-300 hover:border-moss hover:bg-moss hover:text-cloud"
          >
            <Icon name="whatsapp" className="size-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
