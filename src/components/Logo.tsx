import Link from "next/link";
import Image from "next/image";

type Props = {
  /** Height in px. Width auto-scales (logo is square). */
  size?: number;
  /** Optional mobile size override. */
  mobileSize?: number;
  className?: string;
};

export function Logo({ size = 96, mobileSize, className = "" }: Props) {
  const cssVars = {
    ["--logo-h" as string]: `${mobileSize ?? Math.round(size * 0.7)}px`,
    ["--logo-h-sm" as string]: `${size}px`,
  } as React.CSSProperties;

  return (
    <Link
      href="/"
      aria-label="Allshine Dental Care home"
      className={`group inline-flex items-center transition-transform duration-500 hover:scale-[1.02] ${className}`}
      style={cssVars}
    >
      <Image
        src="/logo.png"
        alt="Allshine Dental Care"
        width={size * 2}
        height={size * 2}
        priority
        className="h-[var(--logo-h)] w-auto rounded-xl sm:h-[var(--logo-h-sm)]"
      />
    </Link>
  );
}
