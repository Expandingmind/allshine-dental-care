import Link from "next/link";

type Props = {
  size?: number;
  /** "dark" = dark wordmark (use on light backgrounds). "light" = cream wordmark (use on dark backgrounds). */
  variant?: "dark" | "light";
  className?: string;
};

export function Logo({ size = 44, variant = "dark", className = "" }: Props) {
  const wordmark = variant === "dark" ? "text-brand-900" : "text-cream-50";
  const sub = variant === "dark" ? "text-brand-700" : "text-brand-200";

  return (
    <Link
      href="/"
      aria-label="Allshine Dental Care home"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <svg
        viewBox="0 0 60 60"
        width={size}
        height={size}
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M 30 8 c 9 0 13 5 13 12 c 0 6 -2 14 -3 20 c -2 6 -3 16 -8 16 c -3 0 -3 -8 -6 -8 s -3 8 -6 8 c -5 0 -6 -10 -8 -16 c -1 -6 -3 -14 -3 -20 c 0 -7 4 -12 13 -12 z M 22 16 q 8 -4 16 0"
          fill="none"
          stroke="#b8801a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g transform="translate(48 12)" fill="#b8801a">
          <path d="M 0 -5 L 1.3 -1.3 L 5 0 L 1.3 1.3 L 0 5 L -1.3 1.3 L -5 0 L -1.3 -1.3 Z" />
        </g>
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-bold tracking-tight ${wordmark}`}>
          Allshine
        </span>
        <span className={`mt-1 font-display text-[11px] uppercase tracking-[0.18em] ${sub}`}>
          Dental Care
        </span>
      </span>
    </Link>
  );
}
