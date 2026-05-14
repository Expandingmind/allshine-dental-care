import Link from "next/link";
import Image from "next/image";

type Props = {
  /** Rendered height in px. Width auto-scales (logo is square). */
  size?: number;
  className?: string;
};

export function Logo({ size = 56, className = "" }: Props) {
  return (
    <Link
      href="/"
      aria-label="Allshine Dental Care home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Allshine Dental Care"
        width={size * 2}
        height={size * 2}
        priority
        style={{ height: size, width: "auto" }}
        className="rounded-lg"
      />
    </Link>
  );
}
