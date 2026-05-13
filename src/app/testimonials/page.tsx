"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function TestimonialsPage() {
  const { t } = useLanguage();
  return (
    <>
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 py-16 text-white">
        <div className="section text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
            {t.testimonials.eyebrow}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {t.testimonials.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-brand-100">
            {t.testimonials.intro}
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.testimonials.list.map((q) => (
              <figure
                key={q.name}
                className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-0.5 text-accent-500">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm text-slate-700">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
                    {q.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-900">
                      {q.name}
                    </span>
                    <span className="block text-xs text-slate-500">
                      {q.location}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1Z" />
    </svg>
  );
}
