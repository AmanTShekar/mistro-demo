import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import StayCard from "@/components/StayCard";
import { Icon } from "@/components/Icon";
import { site, waDefaultMessage, waLink } from "@/lib/site";
import { stays } from "@/lib/stays";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Rooms & Cottages",
  description:
    "Valley-view rooms and private tea-garden cottages in Munnar — from ₹3,499/night. Spotless, quiet and enquiry-ready over WhatsApp.",
  alternates: { canonical: "/stays" },
};

export default function StaysPage() {
  return (
    <PageTransition>
      <PageHero
        kicker="Stays"
        title="Four rooms to disappear into"
        sub="Every stay is different — but all of them face the hills, sleep like a cloud and get cleaned like grandma is visiting."
        image="/images/g-02.svg"
      />

      <section className="section-y">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2 xl:grid-cols-4">
          {stays.map((stay, i) => (
            <Reveal key={stay.slug} delay={i * 90}>
              <StayCard stay={stay} priority={i < 2} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y-b">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-moss-deep p-8 text-cloud sm:p-12 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h2 className="font-display font-medium text-h2">
                  Travelling as a group? Take the whole place.
                </h2>
                <p className="mt-3 leading-relaxed text-cloud/75">
                  With only a handful of stays, we often host one family or friend group at a time. Ask about
                  full-property bookings for weddings-after-the-wedding, reunions and team retreats.
                </p>
              </div>
              <a
                href={waLink(waDefaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cloud px-7 py-4 text-sm font-semibold text-moss-deep transition hover:bg-mist"
              >
                <Icon name="whatsapp" className="size-4" />
                Ask about group rates
              </a>
            </div>
          </Reveal>

          <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-slate">
            Prices are per night including taxes; breakfast can be added on request. Children under 6 stay free.
            Not sure which stay fits?{" "}
            <Link href="/contact" className="font-semibold text-moss hover:text-moss-deep">
              Talk to us
            </Link>{" "}
            — we’ll match you in minutes.
          </p>
          <p className="sr-only">{site.name}, {site.address.locality}</p>
        </div>
      </section>
    </PageTransition>
  );
}
