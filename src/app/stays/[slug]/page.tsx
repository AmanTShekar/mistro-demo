import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import StayCard from "@/components/StayCard";
import StayEnquiryBar from "@/components/StayEnquiryBar";
import { Icon } from "@/components/Icon";
import { site, waLink } from "@/lib/site";
import { stays } from "@/lib/stays";
import PageTransition from "@/components/PageTransition";

export function generateStaticParams() {
  return stays.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const stay = stays.find((s) => s.slug === slug);
  if (!stay) return {};
  return {
    title: `${stay.name} — ${site.name}`,
    description: stay.short,
    alternates: { canonical: `/stays/${stay.slug}` },
    openGraph: {
      title: `${stay.name} · ${site.name}`,
      description: stay.short,
      images: [{ url: stay.image }],
    },
  };
}

export default async function StayDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stay = stays.find((s) => s.slug === slug);
  if (!stay) notFound();

  const others = stays.filter((s) => s.slug !== stay.slug).slice(0, 3);
  const enquireMsg = `Hello ${site.name}! I'd like to enquire about the ${stay.name}.\nDates: \nGuests: `;

  return (
    <PageTransition>
      <section className="pt-28 md:pt-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-slate">
            <Link
              href="/stays"
              transitionTypes={["nav-back"]}
              className="transition hover:text-moss"
            >
              Stays
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink">{stay.name}</span>
          </nav>

          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <h1 className="max-w-2xl font-display font-medium text-display text-ink">
                {stay.name}
              </h1>
              <p className="mt-4 max-w-xl font-display text-lg italic text-slate">{stay.tagline}</p>
            </Reveal>
            <Reveal delay={140} className="shrink-0">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate">
                {[
                  { icon: "users", text: stay.guests },
                  { icon: "bed", text: stay.bed },
                  { icon: "size", text: stay.size },
                  { icon: "mountain", text: stay.view },
                ].map((m) => (
                  <li key={m.text} className="flex items-center gap-1.5">
                    <Icon name={m.icon} className="size-4 text-moss" />
                    {m.text}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200} className="mt-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line shadow-lift sm:aspect-video">
              <Image
                src={stay.image}
                alt={`${stay.name} at ${site.name}`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_360px] lg:gap-14">
          <div>
            <Reveal>
              <h2 className="font-display font-medium text-h2 text-ink">About this stay</h2>
              {stay.description.map((para) => (
                <p key={para.slice(0, 24)} className="mt-4 leading-relaxed text-slate">
                  {para}
                </p>
              ))}
            </Reveal>

            <Reveal delay={100}>
              <h3 className="mt-12 font-display font-medium text-h3 text-ink">What makes it special</h3>
              <ul className="mt-5 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {stay.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-ink">
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-moss-soft text-moss">
                      <Icon name="check" className="size-3.5" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={160}>
              <h3 className="mt-12 font-display font-medium text-h3 text-ink">In every stay</h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {stay.amenities.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-line bg-cloud px-4 py-2 text-xs font-medium text-ink"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={120}>
              <div className="rounded-2xl border border-line bg-cloud p-7 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate">From</p>
                <p className="mt-1 font-display text-4xl font-medium text-ink">
                  ₹{stay.price.toLocaleString("en-IN")}
                  <span className="ml-1 align-middle text-sm font-normal text-slate">/ night</span>
                </p>
                <p className="mt-1 text-xs text-slate">Taxes included · Breakfast addable</p>

                <a
                  href={waLink(enquireMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-moss px-6 py-4 text-sm font-semibold text-cloud transition hover:bg-moss-deep"
                >
                  <Icon name="whatsapp" className="size-4" />
                  Enquire on WhatsApp
                </a>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-line px-6 py-4 text-sm font-semibold text-ink transition hover:border-moss hover:text-moss"
                >
                  <Icon name="phone" className="size-4" />
                  {site.phoneDisplay}
                </a>

                <dl className="mt-7 space-y-3 border-t border-line pt-5 text-xs text-slate">
                  <div className="flex justify-between gap-4">
                    <dt>Check-in</dt>
                    <dd className="font-semibold text-ink">1:00 pm</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Check-out</dt>
                    <dd className="font-semibold text-ink">11:00 am</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Free cancellation</dt>
                    <dd className="font-semibold text-ink">72 hrs before</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>ID proof</dt>
                    <dd className="font-semibold text-ink">Required at check-in</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="bg-mist/60 section-y">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">Also consider</h2>
          <div className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 md:grid md:snap-none md:grid-cols-3 md:overflow-visible">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i * 90} className="w-[82%] shrink-0 snap-center sm:w-[55%] md:w-auto">
                <StayCard stay={other} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <StayEnquiryBar stay={stay} />
    </PageTransition>
  );
}
