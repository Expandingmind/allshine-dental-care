import Link from "next/link";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "dark" ? "text-slate-900" : "text-white";
  const sub = variant === "dark" ? "text-brand-700" : "text-brand-100";
  return (
    <Link
      href="/"
      aria-label="Allshine Dental Care home"
      className="group inline-flex items-center gap-2"
    >
      <span
        aria-hidden
        className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 shadow-sm"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
          <path d="M12 2.6c2.7 0 4 1.5 5.7 1.5 1.6 0 2.9 1.1 2.9 3.4 0 2.6-1 4.6-1.5 6.7-.6 2.4-1.3 7.2-3.7 7.2-1.7 0-1.9-2.5-3.4-2.5s-1.7 2.5-3.4 2.5c-2.4 0-3.1-4.8-3.7-7.2C4.4 12 3.4 10 3.4 7.5c0-2.3 1.3-3.4 2.9-3.4C8 4.1 9.3 2.6 12 2.6Z" />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`text-base font-bold tracking-tight ${text}`}>
          Allshine <span className={sub}>Dental Care</span>
        </span>
        <span className={`text-[10px] uppercase tracking-[0.2em] ${variant === "dark" ? "text-slate-500" : "text-white/70"}`}>
          Family &amp; Cosmetic Dentistry
        </span>
      </span>
    </Link>
  );
}
