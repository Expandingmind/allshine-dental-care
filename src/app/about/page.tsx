"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero eyebrow={t.about.eyebrow} title={t.about.title} />

      <section className="bg-white py-16">
        <div className="section grid items-center gap-12 md:grid-cols-2">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-300 to-brand-700" />
          <div>
            <p className="text-lg leading-relaxed text-slate-700">{t.about.intro}</p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {t.about.missionTitle}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{t.about.missionBody}</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {t.about.visionTitle}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{t.about.visionBody}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-950 py-16 text-white">
        <div className="section">
          <h2 className="text-center font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {t.about.valuesTitle}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 transition hover:bg-white/[0.06]"
              >
                <h3 className="text-lg font-semibold text-accent-400">{v.title}</h3>
                <p className="mt-2 text-sm text-brand-100">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section text-center">
          <h2 className="h-display">{t.about.teamTitle}</h2>
          <p className="mt-3 text-slate-500">{t.about.teamSubtitle}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-3xl border border-slate-100 bg-white p-6 text-center">
                <div className="mx-auto aspect-square w-32 overflow-hidden rounded-full bg-gradient-to-br from-brand-200 to-brand-500" />
                <h3 className="mt-4 font-semibold text-slate-900">Dr. Placeholder</h3>
                <p className="text-sm text-slate-500">Doctor of Dental Surgery</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PageHero({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section className="bg-gradient-to-br from-brand-700 to-brand-900 py-16 text-white">
      <div className="section text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
