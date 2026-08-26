export default function Watermark({
  text,
  dark = false,
}: {
  text: string;
  dark?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`watermark pointer-events-none absolute -top-6 right-0 select-none font-display font-semibold leading-none ${
        dark ? "watermark-dark" : ""
      }`}
    >
      {text}
    </span>
  );
}
