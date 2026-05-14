"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ServiceIllustration, type ServiceKind } from "@/components/ServiceIllustration";
import { Marquee } from "@/components/Marquee";
import { ReviewCard } from "@/components/ReviewCard";
import { GoogleLogo } from "@/components/GoogleLogo";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

const SERVICE_KINDS: ServiceKind[] = [
  "preventive",
  "cosmetic",
  "restorative",
  "implants",
  "ortho",
  "pediatric",
  "root-canal",
  "emergency",
];

export default function HomePage() {
  const { t } = useLanguage();
  return (
    <>
      {/* HERO */}
      <section className="bg-cream-100">
        <div className="section grid items-center gap-12 py-14 md:grid-cols-2 md:py-24">
          <div className="opacity-0 animate-fade-up">
            <p className="eyebrow">{t.home.heroEyebrow}</p>
            <h1 className="h-script mt-4">{t.home.heroTitle}</h1>
            <p className="mt-6 max-w-lg text-lg text-slate-600">
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
          <div className="relative opacity-0 animate-fade-up [animation-delay:200ms]">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-brand-700 shadow-2xl">
              <div className="flex h-full items-start p-6 sm:p-8">
                <div className="rounded-2xl bg-cream-100/95 p-5 shadow-lg backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                    {t.home.heroEyebrow}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-brand-900">
                    {t.home.aboutTitle}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-xl ring-1 ring-brand-100 sm:block">
              <p className="text-3xl font-bold text-brand-700">15+</p>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                years of trusted care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-cream-100 py-20">
        <div className="section">
          <Reveal as="fade-up">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">{t.home.featuresEyebrow}</p>
              <h2 className="h-display mt-3">{t.home.featuresTitle}</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.features.map((f, i) => (
              <Reveal key={f.title} as="fade-up" delay={i * 100}>
                <div className="group h-full rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-brand-300">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-700 text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <CheckIcon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-brand-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER — dark drama break */}
      <section className="bg-brand-950 py-20 text-white">
        <div className="section grid items-center gap-12 md:grid-cols-2">
          <Reveal as="fade-right">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-brand-700 shadow-2xl" />
          </Reveal>
          <Reveal as="fade-left" delay={150}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
              {t.home.aboutEyebrow}
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {t.home.aboutTitle}
            </h2>
            <p className="mt-4 text-brand-100">{t.home.aboutBody}</p>
            <Link href="/about" className="btn-cream mt-6">
              {t.home.aboutCta}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="bg-cream-100 py-20">
        <div className="section">
          <Reveal as="fade-up">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">{t.home.servicesEyebrow}</p>
                <h2 className="h-display mt-3">{t.home.servicesTitle}</h2>
              </div>
              <Link href="/services" className="btn-secondary">
                {t.home.servicesCta}
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.list.slice(0, 6).map((s, i) => (
              <Reveal key={s.title} as="fade-up" delay={i * 80}>
                <article className="group h-full overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-300 hover:shadow-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <ServiceIllustration kind={SERVICE_KINDS[i]} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-brand-900">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{s.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS TEASER */}
      <section className="bg-brand-950 py-20 text-white">
        <div className="section">
          <Reveal as="fade-up">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
                {t.home.testimonialsEyebrow}
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                {t.home.testimonialsTitle}
              </h2>
              <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 text-sm text-brand-100">
                <span className="inline-flex gap-0.5 text-accent-400">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </span>
                <span>
                  <strong className="text-white">
                    {siteConfig.reviewStats.average.toFixed(1)}
                  </strong>{" "}
                  · {siteConfig.reviewStats.count}+ {t.testimonials.statsReviewsLabel}
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10">
          <Marquee direction="left" durationSeconds={90}>
            {t.testimonials.list.map((r) => (
              <ReviewCard key={r.name + r.date} review={r} />
            ))}
          </Marquee>
        </div>

        <div className="section mt-10 flex flex-wrap items-center justify-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-brand-200 ring-1 ring-white/10">
            <GoogleLogo className="h-4 w-4" />
            {t.testimonials.verifiedLabel}
          </span>
          <Link href="/testimonials" className="btn-outline-light">
            {t.home.testimonialsCta}
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-cream-100 py-20">
        <div className="section">
          <Reveal as="fade-up">
            <div className="rounded-3xl bg-brand-950 px-8 py-12 text-center text-white shadow-2xl sm:px-16 sm:py-16">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                {t.home.ctaTitle}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-brand-100">
                {t.home.ctaBody}
              </p>
              <Link href="/contact" className="btn-cream mt-8">
                {t.home.ctaButton}
              </Link>
            </div>
          </Reveal>
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

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1Z" />
    </svg>
  );
}
