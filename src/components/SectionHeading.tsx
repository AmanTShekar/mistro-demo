import Reveal from "./Reveal";

export default function SectionHeading({
  kicker,
  title,
  sub,
  align = "center",
  dark = false,
}: {
  kicker: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const alignCls = align === "center" ? "mx-auto items-center text-center" : "items-start text-left";
  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignCls}`}>
      <span className={`mb-5 block h-px w-12 ${dark ? "bg-cloud/40" : "bg-moss/60"}`} aria-hidden="true" />
      <p className={`text-[11px] font-semibold uppercase tracking-[0.42em] ${dark ? "text-moss-soft/80" : "text-moss"}`}>
        {kicker}
      </p>
      <h2 className={`mt-3 font-display font-medium text-h2 ${dark ? "text-cloud" : "text-ink"}`}>
        {title}
      </h2>
      {sub ? (
        <p className={`mt-4 text-lead ${dark ? "text-cloud/75" : "text-slate"}`}>{sub}</p>
      ) : null}
    </Reveal>
  );
}
