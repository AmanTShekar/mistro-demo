import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { distances, site } from "@/lib/site";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description:
    "Reach Mistro Vattavada over WhatsApp or phone, find us on the map, and plan your drive from Kochi, Munnar, or Top Station.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const cards = [
    {
      icon: "whatsapp",
      label: "WhatsApp (fastest)",
      value: site.whatsappDisplay,
      href: `https://wa.me/${site.whatsappNumber}`,
      external: true,
    },
    {
      icon: "phone",
      label: "Call us",
      value: site.phoneDisplay,
      href: `tel:${site.phoneHref}`,
    },
    {
      icon: "mail",
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: "globe",
      label: "On Google",
      value: "See reviews & photos",
      href: site.gbpUrl,
      external: true,
    },
  ] as const;

  return (
    <PageTransition>
      <PageHero
        kicker="Contact"
        title="Say hello — we reply fast"
        sub="Questions about dates, food, directions or anything else? WhatsApp is the quickest way to reach us."
        image="/images/g-06.svg"
      />

      <section className="section-y">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[380px_1fr] lg:gap-12">
          <div className="space-y-4">
            <Reveal>
              <ul className="space-y-4">
                {cards.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      {...("external" in c && c.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center gap-4 rounded-2xl border border-line bg-cloud p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-moss/40"
                    >
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-moss-soft text-moss transition-colors duration-300 group-hover:bg-moss group-hover:text-cloud">
                        <Icon name={c.icon} className="size-5" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-slate">{c.label}</span>
                        <span className="mt-0.5 block font-semibold text-ink group-hover:text-moss">{c.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-line bg-cloud p-6">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate">
                  <Icon name="mapPin" className="size-4 text-moss" />
                  Where we are
                </p>
                <address className="mt-3 not-italic leading-relaxed text-slate">
                  {site.address.street},<br />
                  {site.address.locality}, {site.address.region} — {site.address.postalCode}
                </address>
                <ul className="mt-4 space-y-2 border-t border-line pt-4 text-sm">
                  {distances.slice(0, 3).map((d) => (
                    <li key={d.place} className="flex items-center justify-between gap-4">
                      <span className="text-slate">{d.place}</span>
                      <span className="font-semibold text-ink">{d.km} km</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cloud transition hover:bg-moss-deep"
                >
                  <Icon name="mapPin" className="size-4" />
                  Open in Google Maps
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>

      <section className="section-y-b">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <iframe
              title={`Map showing ${site.name}, ${site.address.locality}`}
              src={site.mapsEmbedUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full rounded-3xl border border-line shadow-card md:h-[480px]"
            />
          </Reveal>
        </div>
      </section>
      </PageTransition>
  );
}
