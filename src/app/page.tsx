"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function HomePage() {
  const { t } = useLanguage();
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-white">
        <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl" />
        <div className="section grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="eyebrow">{t.home.heroEyebrow}</p>
            <h1 className="h-display mt-4">{t.home.heroTitle}</h1>
            <p className="mt-5 max-w-lg text-lg text-slate-600">
              {t.home.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                {t.home.heroCtaPrimary}
              </Link>
              <Link href="/services" className="btn-secondary">
                {t.home.heroCtaSecondary}
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-300 to-brand-700 shadow-xl">
              <div className="flex h-full items-end p-8">
                <div className="rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                    {t.home.heroEyebrow}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">
                    {t.home.aboutTitle}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-xl md:block">
              <p className="text-3xl font-bold text-brand-700">15+</p>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                years of trusted care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-20">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">{t.home.featuresEyebrow}</p>
            <h2 className="h-display mt-3">{t.home.featuresTitle}</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <CheckIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-brand-50/60 py-20">
        <div className="section grid items-center gap-12 md:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-tr from-brand-200 to-brand-500" />
          <div>
            <p className="eyebrow">{t.home.aboutEyebrow}</p>
            <h2 className="h-display mt-3">{t.home.aboutTitle}</h2>
            <p className="mt-4 text-slate-600">{t.home.aboutBody}</p>
            <Link href="/about" className="btn-primary mt-6">
              {t.home.aboutCta}
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="bg-white py-20">
        <div className="section">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">{t.home.servicesEyebrow}</p>
              <h2 className="h-display mt-3">{t.home.servicesTitle}</h2>
            </div>
            <Link href="/services" className="btn-secondary">
              {t.home.servicesCta}
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.list.slice(0, 6).map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-slate-100 bg-white p-6 transition hover:border-brand-200 hover:bg-brand-50/50"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-100 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-white">
                  <ToothIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS TEASER */}
      <section className="bg-brand-950 py-20 text-white">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
              {t.home.testimonialsEyebrow}
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {t.home.testimonialsTitle}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.testimonials.list.slice(0, 3).map((q) => (
              <figure
                key={q.name}
                className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
              >
                <div className="flex gap-0.5 text-accent-400">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm text-brand-100">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-white">
                  {q.name}
                  <span className="ml-2 font-normal text-brand-300">
                    · {q.location}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {t.home.testimonialsCta}
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-20">
        <div className="section">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-12 text-center text-white shadow-xl sm:px-16 sm:py-16">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              {t.home.ctaTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-100">
              {t.home.ctaBody}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-accent-500 px-7 py-3 text-sm font-semibold text-brand-950 shadow-sm transition hover:bg-accent-400"
            >
              {t.home.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ToothIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.6c2.7 0 4 1.5 5.7 1.5 1.6 0 2.9 1.1 2.9 3.4 0 2.6-1 4.6-1.5 6.7-.6 2.4-1.3 7.2-3.7 7.2-1.7 0-1.9-2.5-3.4-2.5s-1.7 2.5-3.4 2.5c-2.4 0-3.1-4.8-3.7-7.2C4.4 12 3.4 10 3.4 7.5c0-2.3 1.3-3.4 2.9-3.4C8 4.1 9.3 2.6 12 2.6Z" />
    </svg>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1Z" />
    </svg>
  );
}
