export default function Loading() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-fog" role="status" aria-label="Loading">
      <div className="flex flex-col items-center gap-4">
        <span className="relative flex size-12">
          <span className="absolute inset-0 animate-ping rounded-full bg-moss/25" />
          <span className="relative inline-flex size-12 items-center justify-center rounded-full bg-moss-soft">
            <svg viewBox="0 0 24 24" className="size-5 text-moss" fill="currentColor" aria-hidden="true">
              <path d="m3 19 6.5-11L13 14l2.5-4L21 19Z" />
            </svg>
          </span>
        </span>
        <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-slate">Vattavada</p>
      </div>
    </div>
  );
}
