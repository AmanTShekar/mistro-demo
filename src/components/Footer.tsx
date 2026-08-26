import Link from "next/link";
import { nav, site, waDefaultMessage, waLink } from "@/lib/site";
import { stays } from "@/lib/stays";
import { Icon } from "./Icon";

export default function Footer() {
  return (
    <footer className="bg-ink text-cloud/80">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:py-20">
        <div>
          <p className="font-display text-2xl font-semibold text-cloud">{site.name}</p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.42em] text-cloud/50">
            {site.address.locality} · {site.address.region}
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cloud/65">
            A small, quiet resort above the tea gardens — clean rooms, private cottages and misty mornings since {site.established}.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={waLink(waDefaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex size-10 items-center justify-center rounded-full border border-cloud/20 transition hover:border-moss hover:bg-moss hover:text-cloud"
            >
              <Icon name="whatsapp" className="size-4" />
            </a>
            {site.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="inline-flex size-10 items-center justify-center rounded-full border border-cloud/20 transition hover:border-moss hover:bg-moss hover:text-cloud"
              >
                <Icon name={s.icon} className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cloud/40">Explore</p>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-cloud">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Our stays">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cloud/40">Our Stays</p>
          <ul className="mt-5 space-y-3 text-sm">
            {stays.map((stay) => (
              <li key={stay.slug}>
                <Link href={`/stays/${stay.slug}`} className="transition hover:text-cloud">
                  {stay.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cloud/40">Find Us</p>
          <address className="mt-5 space-y-3 text-sm not-italic text-cloud/65">
            <p>
              {site.address.street},<br />
              {site.address.locality}, {site.address.region} {site.address.postalCode}
            </p>
            <p>
              <a href={`tel:${site.phoneHref}`} className="transition hover:text-cloud">
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="transition hover:text-cloud">
                {site.email}
              </a>
            </p>
          </address>
          <a
            href={site.gbpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-cloud/20 px-4 py-2 text-xs font-medium transition hover:border-moss hover:text-cloud"
          >
            <Icon name="globe" className="size-4" />
            Review us on Google
          </a>
        </div>
      </div>

      <div className="border-t border-cloud/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-cloud/45 sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Mist over tea gardens, always.</p>
        </div>
      </div>
    </footer>
  );
}
