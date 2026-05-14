"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero eyebrow={t.about.eyebrow} title={t.about.title} />

      <section className="bg-cream-100 py-20">
        <div className="section grid items-center gap-12 md:grid-cols-2">
          <Reveal as="fade-right">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-brand-700 shadow-2xl" />
          </Reveal>
          <Reveal as="fade-left" delay={150}>
            <p className="text-lg leading-relaxed text-slate-700">{t.about.intro}</p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-xl font-bold text-brand-900">
                  {t.about.missionTitle}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{t.about.missionBody}</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-brand-900">
                  {t.about.visionTitle}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{t.about.visionBody}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-950 py-20 text-white">
        <div className="section">
          <Reveal as="fade-up">
            <h2 className="text-center font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {t.about.valuesTitle}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.values.map((v, i) => (
              <Reveal key={v.title} as="fade-up" delay={i * 100}>
                <div className="group h-full rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-1">
                  <h3 className="text-lg font-semibold text-accent-400 transition-colors group-hover:text-accent-300">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-100">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-20">
        <div className="section text-center">
          <Reveal as="fade-up">
            <h2 className="h-display">{t.about.teamTitle}</h2>
            <p className="mt-3 text-slate-500">{t.about.teamSubtitle}</p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Reveal key={i} as="fade-up" delay={i * 120}>
                <div className="group h-full rounded-3xl border border-brand-100 bg-white p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <div className="mx-auto aspect-square w-32 overflow-hidden rounded-full bg-brand-700 ring-2 ring-brand-100 transition-transform duration-500 group-hover:scale-105" />
                  <h3 className="mt-4 font-semibold text-brand-900">Dr. Placeholder</h3>
                  <p className="text-sm text-slate-500">Doctor of Dental Surgery</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PageHero({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section className="bg-brand-950 py-20 text-white">
      <div className="section text-center">
        <p className="opacity-0 animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
          {eyebrow}
        </p>
        <h1 className="opacity-0 animate-fade-up [animation-delay:150ms] mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
