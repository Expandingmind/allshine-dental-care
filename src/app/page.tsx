"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  const { t } = useLanguage();
  const totalServices = String(t.services.list.length).padStart(2, "0");
  return (
    <>
      {/* HERO — full-bleed video section with centered overlay */}
      <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden bg-gradient-to-b from-cream-50 via-cream-100 to-tan-200 text-brand-900">
        {/*
          Drop a video file at /public/hero-video.mp4 (and optionally
          /public/hero-poster.jpg) and uncomment the <video> block below.
          Until then, the warm cream/tan gradient + cursive title acts as the placeholder.
        */}
        {/*
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        */}

        {/* Subtle warm vignette — soft tan edges that frame the centered content */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_35%,rgba(253,251,246,0.6)_0%,transparent_55%)]"
        />

        {/* Centered content */}
        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
          <p className="opacity-0 animate-fade-up text-xs font-semibold uppercase tracking-[0.22em] text-brand-700">
            {t.home.heroEyebrow}
          </p>
          <h1 className="opacity-0 animate-fade-up [animation-delay:150ms] h-script mt-4 !text-brand-900">
            {t.home.heroTitle}
          </h1>
          <p className="opacity-0 animate-fade-up [animation-delay:300ms] mt-6 max-w-xl text-base text-brand-800/80 sm:text-lg">
            {t.home.heroSubtitle}
          </p>

          {/* Play button — decorative for now, becomes scrub control when video lands */}
          <button
            type="button"
            aria-label="Watch our story"
            className="opacity-0 animate-fade-up [animation-delay:450ms] mt-10 grid h-16 w-16 place-items-center rounded-full border-2 border-brand-700/60 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-brand-700/10"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6">
              <path d="M8 5v14l11-7Z" />
            </svg>
          </button>
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

      {/* ABOUT TEASER — warm tan drama break */}
      <section className="bg-tan-200 py-20 text-brand-900">
        <div className="section grid items-center gap-12 md:grid-cols-2">
          <Reveal as="fade-right">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-brand-700 shadow-2xl" />
          </Reveal>
          <Reveal as="fade-left" delay={150}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
              {t.home.aboutEyebrow}
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-brand-900 sm:text-5xl">
              {t.home.aboutTitle}
            </h2>
            <p className="mt-4 text-brand-800">{t.home.aboutBody}</p>
            <Link href="/about" className="btn-primary mt-6">
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
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.list.slice(0, 8).map((s, i) => {
              const num = String(i + 1).padStart(2, "0");
              return (
                <Reveal key={s.title} as="fade-up" delay={(i % 4) * 80}>
                  <article className="group h-full rounded-2xl border border-brand-200/60 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-700 hover:shadow-lg">
                    <div className="flex items-baseline justify-between">
                      <span className="font-script text-5xl leading-none text-brand-700">
                        {num}
                      </span>
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-brand-700/60">
                        {num} / {totalServices}
                      </span>
                    </div>
                    <h3 className="mt-6 text-base font-semibold text-brand-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {s.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-cream-100 py-20">
        <div className="section">
          <Reveal as="fade-up">
            <div className="rounded-3xl bg-brand-700 px-8 py-12 text-center text-white shadow-2xl sm:px-16 sm:py-16">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                {t.home.ctaTitle}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-cream-100">
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

