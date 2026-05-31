"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export default function ServicesPage() {
  const { t } = useLanguage();
  const total = String(t.services.list.length).padStart(2, "0");

  return (
    <>
      <section className="bg-tan-200 py-20 text-brand-900">
        <div className="section text-center">
          <p className="opacity-0 animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
            {t.services.eyebrow}
          </p>
          <h1 className="opacity-0 animate-fade-up [animation-delay:150ms] mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-brand-900 sm:text-5xl">
            {t.services.title}
          </h1>
          <p className="opacity-0 animate-fade-up [animation-delay:300ms] mx-auto mt-4 max-w-2xl text-brand-800">
            {t.services.intro}
          </p>
        </div>
      </section>

      <section className="bg-cream-100 py-20">
        <div className="section">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.list.map((s, i) => {
              const num = String(i + 1).padStart(2, "0");
              return (
                <Reveal key={s.title} as="fade-up" delay={(i % 4) * 80}>
                  <article className="group h-full rounded-2xl border border-brand-200/60 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-700 hover:shadow-lg">
                    <div className="flex items-baseline justify-between">
                      <span className="font-script text-5xl leading-none text-brand-700">
                        {num}
                      </span>
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-brand-700/60">
                        {num} / {total}
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

      <section className="bg-cream-100 py-20">
        <div className="section">
          <Reveal as="fade-up">
            <div className="rounded-3xl bg-brand-700 px-8 py-12 text-center text-white shadow-2xl sm:px-16 sm:py-16">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Not sure what you need?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-cream-100">
                Book a consultation and we&apos;ll help you find the right plan for your smile.
              </p>
              <Link href="/contact" className="btn-cream mt-8">
                Book an Appointment
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
