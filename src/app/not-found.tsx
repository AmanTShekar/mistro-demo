import Link from "next/link";

import PageTransition from "@/components/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <section className="flex min-h-svh flex-col items-center justify-center bg-fog px-6 text-center pt-24 pb-16">
      <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-moss">Lost in the mist</p>
      <h1 className="mt-4 font-display text-7xl font-medium text-ink sm:text-8xl">404</h1>
      <p className="mt-4 max-w-md leading-relaxed text-slate">
        This trail doesn’t lead anywhere. The page you’re looking for has drifted off with the clouds.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-moss px-7 py-3.5 text-sm font-semibold text-cloud transition hover:bg-moss-deep"
        >
          Back to the resort
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-line bg-cloud px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-moss hover:text-moss"
        >
          Contact us
        </Link>
      </div>
      </section>
    </PageTransition>
  );
}
