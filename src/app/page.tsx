import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StayCard from "@/components/StayCard";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Watermark from "@/components/Watermark";
import PageTransition from "@/components/PageTransition";
import { Icon } from "@/components/Icon";
import { distances, site, waDefaultMessage, waLink } from "@/lib/site";
import { stays } from "@/lib/stays";

const stats = [
  { value: `${site.rating} / 5`, label: "Guest rating" },
  { value: `${new Date().getFullYear() - site.established}+ yrs`, label: "Of quiet hosting" },
  { value: `${stays.length}`, label: "Room & cottage types" },
  { value: "1,600 m", label: "Above sea level" },
];

const amenities = [
  { icon: "wifi", title: "Free Wi-Fi", desc: "Fast enough for calls, slow enough to forget." },
  { icon: "car", title: "Free Parking", desc: "Safe on-site parking right at your door." },
  { icon: "dining", title: "In-house Dining", desc: "Home-style Kerala meals on request." },
  { icon: "droplet", title: "24×7 Hot Water", desc: "Hot showers even on the coldest misty nights." },
  { icon: "mountain", title: "Valley Views", desc: "Every stay opens onto the hills." },
  { icon: "flame", title: "Bonfire Evenings", desc: "Firelight, stories and cardamom tea." },
  { icon: "trees", title: "Guided Tea Walks", desc: "Walk the estate rows with our host." },
  { icon: "shield", title: "Doctor on Call", desc: "Help is always a phone call away." },
] as const;

const hygiene = [
  { icon: "check", text: "Sanitised before every check-in" },
  { icon: "check", text: "Fresh linen & towels, every day" },
  { icon: "droplet", text: "Filtered drinking water in-room" },
];

const galleryTeaser = [
  { src: "/images/g-01.svg", alt: "Still lake reflecting the hills" },
  { src: "/images/g-03.svg", alt: "Road winding through tea gardens" },
  { src: "/images/g-05.svg", alt: "Sunrise over the ridge line" },
  { src: "/images/g-04.svg", alt: "Pines wrapped in drifting mist" },
];

const testimonials = [
  {
    quote:
      "The quietest sleep we've had in years. Woke up to clouds literally below the balcony — my kids still talk about it.",
    name: "Divya & family",
    city: "Bengaluru",
  },
  {
    quote:
      "Spotless rooms, genuinely warm people, and the tea-garden cottage is exactly like the photos. Booked again before we left.",
    name: "Rahul Nair",
    city: "Kochi",
  },
  {
    quote:
      "We planned everything over one WhatsApp chat. Candlelit dinner at Cloud Nine was the highlight of our honeymoon.",
    name: "Sneha & Aditya",
    city: "Mumbai",
  },
];

const faqs = [
  {
    q: "How do I book a room or cottage?",
    a: "Everything runs through WhatsApp for speed — tap any 'Enquire' button, tell us your dates and stay, and we'll confirm availability within minutes. Phone calls work too.",
  },
  {
    q: "What are the check-in and check-out times?",
    a: "Check-in is from 1:00 pm and check-out is by 11:00 am. Arriving early or leaving late? Message us — we'll hold your room or store luggage whenever we can.",
  },
  {
    q: "Is food available at the resort?",
    a: "Yes. We serve home-style Kerala meals (veg and non-veg) on request, plus breakfast. The Cloud Nine cottage includes a breakfast hamper. There are good restaurants in Munnar town, about 15 minutes away.",
  },
  {
    q: "How do we reach the resort?",
    a: `We're ${distances[0].km} km from Munnar town and about ${distances[4].km} km from Cochin International Airport. Send us a message after booking and we'll share exact location pins and can arrange a taxi pickup.`,
  },
  {
    q: "Is the resort suitable for children and elders?",
    a: "Very much. The Family Mist Suite is made for kids, all common paths are gently stepped, and our team is around round the clock. Do note the hillside setting means some slopes.",
  },
];

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Hero />

      <section className="border-b border-line bg-cloud">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-y-8 px-5 py-10 sm:px-8 md:grid-cols-4 md:py-12">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <p className="font-display text-3xl font-medium text-moss sm:text-4xl">{s.value}</p>
              <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.18em] text-slate">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <div className="relative">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/images/about.svg"
                  alt={`A cottage at ${site.name} above the morning mist`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={200} className="absolute -bottom-6 -right-2 hidden w-48 sm:block lg:-right-8 lg:w-56">
              <div className="rounded-2xl border border-line bg-cloud p-5 shadow-lift">
                <p className="font-display text-4xl font-medium text-moss">Est. {site.established}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate">
                  Family-run since the beginning — you’ll likely be welcomed by name.
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <SectionHeading
              align="left"
              kicker="Welcome to Mistro"
              title="A quiet corner above the tea gardens"
            />
            <Reveal delay={120}>
              <p className="mt-5 leading-relaxed text-slate">
                Mistro isn’t a big hotel — and that’s the point. A handful of rooms and cottages spread across a
                hillside property, run by a small team that genuinely cares. Everything is kept spotless, breakfast is
                 cooked to order, and the loudest thing you’ll hear is the wind in the eucalyptus.
              </p>
              <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {hygiene.map((h) => (
                  <li key={h.text} className="flex items-start gap-3 text-sm text-ink">
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-moss-soft text-moss">
                      <Icon name={h.icon} className="size-3.5" />
                    </span>
                    {h.text}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <Link
                  href="/stays"
                  transitionTypes={["nav-forward"]}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-moss transition-colors hover:text-moss-deep"
                >
                  See where you’ll stay
                  <Icon name="arrowRight" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <span className="font-display text-lg italic text-slate">— The Mathew family, your hosts</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist/60 section-y">
        <Watermark text="STAY" />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker="Stay with us"
            title="Rooms & cottages, each with its own mood"
            sub="Four ways to stay — pick a bright valley room, bring the whole family, hide among the tea rows, or disappear entirely."
          />
          <div className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 md:grid md:snap-none md:grid-cols-2 md:overflow-visible xl:grid-cols-4">
            {stays.map((stay, i) => (
              <Reveal key={stay.slug} delay={i * 90} className="w-[82%] shrink-0 snap-center sm:w-[55%] md:w-auto">
                <StayCard stay={stay} priority={i === 0} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex justify-center">
            <Link
              href="/stays"
              transitionTypes={["nav-forward"]}
              className="inline-flex items-center gap-2 rounded-full border border-moss px-7 py-3.5 text-sm font-semibold text-moss transition-all duration-300 hover:bg-moss hover:text-cloud"
            >
              Compare all stays
              <Icon name="arrowRight" className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-moss-deep py-20 text-cloud lg:py-28">
        <Watermark dark text="COMFORT" />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            dark
            kicker="The Mistro way"
            title="Simple comforts, done properly"
            sub="No gimmicks — just the things that make a mountain stay feel easy."
          />
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((a, i) => (
              <Reveal key={a.title} delay={(i % 4) * 80}>
                <div className="group flex items-start gap-4">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-cloud/20 text-moss-soft transition-colors duration-300 group-hover:border-cloud group-hover:bg-cloud group-hover:text-moss-deep">
                    <Icon name={a.icon} className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{a.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-cloud/65">{a.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden section-y">
        <Watermark text="VIEWS" />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="left"
              kicker="Postcards"
              title="Mornings here look like this"
            />
            <Reveal delay={150}>
              <Link
                href="/gallery"
                transitionTypes={["nav-forward"]}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-moss transition-colors hover:text-moss-deep"
              >
                Open full gallery
                <Icon name="arrowRight" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
            {galleryTeaser.map((g, i) => (
              <Reveal key={g.src} delay={i * 90}>
                <Link
                  href="/gallery"
                  transitionTypes={["nav-forward"]}
                  className="group relative block aspect-square overflow-hidden rounded-xl border border-line"
                  aria-label={`Open gallery — ${g.alt}`}
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist/60 section-y">
        <Watermark text="STORIES" />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading kicker="Guest book" title="People leave slower than they arrive" />
          <Testimonials items={testimonials} />
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <SectionHeading
            kicker="Good to know"
            title="Questions guests ask us"
          />
          <Faq items={faqs} />
        </div>
      </section>

      <section className="section-y-b">
        <div className="mx-auto grid w-full max-w-7xl items-stretch gap-8 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-center rounded-3xl border border-line bg-cloud p-8 shadow-card sm:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-moss">Find us</p>
              <h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
                Up the hill, past the last tea stall
              </h2>
              <address className="mt-5 not-italic leading-relaxed text-slate">
                {site.address.street},<br />
                {site.address.locality}, {site.address.region} — {site.address.postalCode}
              </address>
              <ul className="mt-7 space-y-2.5 text-sm text-slate">
                {distances.map((d) => (
                  <li key={d.place} className="flex items-center justify-between gap-4 border-b border-line pb-2.5 last:border-0">
                    <span>{d.place}</span>
                    <span className="font-semibold text-ink">{d.km} km</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-moss px-6 py-3 text-sm font-semibold text-cloud transition hover:bg-moss-deep"
                >
                  <Icon name="mapPin" className="size-4" />
                  Get directions
                </a>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:border-moss hover:text-moss"
                >
                  <Icon name="phone" className="size-4" />
                  Call us
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <iframe
              title={`Map showing ${site.name}, Munnar`}
              src={site.mapsEmbedUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[380px] w-full rounded-3xl border border-line shadow-card"
            />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-24 text-center text-cloud lg:py-32">
        <Image src="/images/g-05.svg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink/80" />
        <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display font-medium leading-tight text-display">
              The kettle’s on.<br />
              <span className="italic text-moss-soft">The mist is free.</span>
            </h2>
            <p className="mt-5 text-cloud/75">
              Tell us your dates and we’ll take care of the rest — usually within minutes.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={waLink(waDefaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-moss px-7 py-4 text-sm font-semibold text-cloud shadow-lift transition hover:bg-moss-deep"
              >
                <Icon name="whatsapp" className="size-4" />
                Plan my stay on WhatsApp
              </a>
              <Link
                href="/stays"
                transitionTypes={["nav-forward"]}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cloud/50 px-7 py-4 text-sm font-semibold text-cloud transition hover:bg-cloud/10"
              >
                Browse stays first
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
