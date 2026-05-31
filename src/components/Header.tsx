"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig, formatAddress, directionsUrl } from "@/lib/site-config";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";

const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/contact", key: "contact" },
] as const;

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream-100 shadow-sm">
      {/* Top utility bar — desktop only. Mobile uses the quick-actions row instead. */}
      <div className="hidden bg-brand-800 text-white md:block">
        <div className="section flex flex-wrap items-center justify-between gap-y-2 py-2 text-xs sm:text-sm">
          <div className="hidden items-center gap-6 md:flex">
            <span className="inline-flex items-center gap-2">
              <PinIcon className="h-4 w-4 text-brand-200" />
              {formatAddress()}
            </span>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 transition hover:text-brand-200"
            >
              <PhoneIcon className="h-4 w-4 text-brand-200" />
              {siteConfig.phoneDisplay}
            </a>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <Link
              href={siteConfig.bookingUrl}
              className="inline-flex items-center gap-2 rounded-full bg-cream-100 px-4 py-1.5 text-xs font-semibold text-brand-900 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md hover:-translate-y-0.5"
            >
              <CalendarIcon className="h-4 w-4" />
              {t.nav.bookAppointment}
            </Link>
            <LanguageToggle />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-slate-100">
        <div className="section flex items-center justify-between py-3">
          <Logo size={140} mobileSize={180} />

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <a href={siteConfig.phoneHref} className="ml-2 btn-primary">
              <PhoneIcon className="mr-2 h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="border-t border-slate-100 lg:hidden">
            <nav className="section flex flex-col gap-1 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                >
                  {t.nav[item.key]}
                </Link>
              ))}
              <a
                href={siteConfig.phoneHref}
                className="mt-2 btn-primary justify-center"
              >
                {siteConfig.phoneDisplay}
              </a>
              <div className="mt-3 flex items-center justify-center">
                <div className="rounded-full bg-brand-900 px-1 py-1">
                  <LanguageToggle />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Mobile quick-actions row — Direction / Phone / Appointment (Pembroke-style) */}
      <div className="bg-brand-800 text-white md:hidden">
        <div className="grid grid-cols-3 divide-x divide-white/10">
          <a
            href={directionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1.5 py-3 transition active:bg-white/5"
          >
            <PinIcon className="h-5 w-5 text-accent-400" />
            <span className="text-[13px] font-medium">{t.nav.direction}</span>
          </a>
          <a
            href={siteConfig.phoneHref}
            className="flex flex-col items-center justify-center gap-1.5 py-3 transition active:bg-white/5"
          >
            <PhoneIcon className="h-5 w-5 text-accent-400" />
            <span className="text-[13px] font-medium">
              {siteConfig.phoneDisplay}
            </span>
          </a>
          <Link
            href={siteConfig.bookingUrl}
            className="flex flex-col items-center justify-center gap-1.5 py-3 transition active:bg-white/5"
          >
            <CalendarIcon className="h-5 w-5 text-accent-400" />
            <span className="text-[13px] font-medium">{t.nav.appointment}</span>
          </Link>
        </div>
      </div>

      {/* Announcement banner — brown divider, Pembroke-style */}
      <div className="bg-brand-700 text-white">
        <div className="section py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.18em] sm:text-xs">
          {t.header.banner}
        </div>
      </div>
    </header>
  );
}

function PinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
