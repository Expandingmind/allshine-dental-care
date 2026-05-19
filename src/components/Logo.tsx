import Link from "next/link";
import Image from "next/image";

type Props = {
  /** Rendered height in px on screens ≥ sm. Logo is rendered as a square. */
  size?: number;
  /** Rendered height in px below sm. Defaults to size * 0.7. */
  mobileSize?: number;
  className?: string;
};

/**
 * The source PNG has a wide cream margin baked in. We render it into a
 * fixed-size square container with overflow-hidden and scale the image so
 * the actual mark + wordmark fill the box, cropping that empty cream margin.
 */
export function Logo({ size = 96, mobileSize, className = "" }: Props) {
  const mobile = mobileSize ?? Math.round(size * 0.7);
  const cssVars = {
    ["--logo-h" as string]: `${mobile}px`,
    ["--logo-h-sm" as string]: `${size}px`,
  } as React.CSSProperties;

  return (
    <Link
      href="/"
      aria-label="Allshine Dental Care home"
      className={`group relative block h-[var(--logo-h)] w-[var(--logo-h)] overflow-hidden transition-transform duration-500 hover:scale-[1.02] sm:h-[var(--logo-h-sm)] sm:w-[var(--logo-h-sm)] ${className}`}
      style={cssVars}
    >
      <Image
        src="/logo.png"
        alt="Allshine Dental Care"
        fill
        sizes={`${Math.max(size, mobile)}px`}
        priority
        className="scale-[1.4] object-cover"
      />
    </Link>
  );
}
