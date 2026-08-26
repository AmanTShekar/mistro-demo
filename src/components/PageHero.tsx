import Image from "next/image";
import Reveal from "./Reveal";

export default function PageHero({
  kicker,
  title,
  sub,
  image,
}: {
  kicker: string;
  title: string;
  sub?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[46svh] items-end overflow-hidden bg-ink pt-28">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/70" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8 md:pb-16">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-cloud/70">{kicker}</p>
          <h1 className="mt-3 max-w-2xl font-display font-medium text-display text-cloud">
            {title}
          </h1>
          {sub ? (
            <p className="mt-4 max-w-xl text-lead text-cloud/80">{sub}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
