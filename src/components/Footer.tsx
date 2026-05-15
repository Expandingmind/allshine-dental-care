"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig, formatAddress } from "@/lib/site-config";
import { Logo } from "./Logo";

const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/contact", key: "contact" },
] as const;

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="section grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo size={140} mobileSize={100} />
          <p className="mt-4 max-w-sm text-sm text-brand-200">{t.footer.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
            >
              <IgIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
            >
              <FbIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            {t.footer.quickLinks}
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link href={item.href} className="text-brand-200 transition hover:text-white">
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            {t.footer.contact}
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-brand-200">
            <li>{formatAddress()}</li>
            <li>
              <a href={siteConfig.phoneHref} className="hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section flex flex-wrap items-center justify-between gap-2 py-5 text-xs text-brand-300">
          <span>
            &copy; {year} {siteConfig.name}. {t.footer.rights}
          </span>
          <span>Made with care in Miami.</span>
        </div>
      </div>
    </footer>
  );
}

function IgIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.6 1.6-1.6h1.7V4.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10.9H7.7V14h2.6v8h3.2Z" />
    </svg>
  );
}
