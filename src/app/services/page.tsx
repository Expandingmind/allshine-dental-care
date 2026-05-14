"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ServiceIllustration, type ServiceKind } from "@/components/ServiceIllustration";
import { Reveal } from "@/components/Reveal";

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

export default function ServicesPage() {
  const { t } = useLanguage();
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 py-20 text-white">
        <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 animate-float rounded-full bg-brand-500/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 animate-float rounded-full bg-accent-400/10 blur-3xl [animation-delay:1.5s]" />
        <div className="section relative text-center">
          <p className="opacity-0 animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
            {t.services.eyebrow}
          </p>
          <h1 className="opacity-0 animate-fade-up [animation-delay:150ms] mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {t.services.title}
          </h1>
          <p className="opacity-0 animate-fade-up [animation-delay:300ms] mx-auto mt-4 max-w-2xl text-brand-100">
            {t.services.intro}
          </p>
        </div>
      </section>

      <section className="bg-cream-100 py-20">
        <div className="section">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.list.map((s, i) => (
              <Reveal key={s.title} as="fade-up" delay={(i % 3) * 100}>
                <article className="group h-full overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-300 hover:shadow-2xl">
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

      <section className="bg-cream-100 py-20">
        <div className="section">
          <Reveal as="fade-up">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 px-8 py-12 text-center text-white shadow-2xl sm:px-16 sm:py-16">
              <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 animate-float rounded-full bg-brand-400/20 blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 animate-float rounded-full bg-accent-400/15 blur-3xl [animation-delay:1.5s]" />
              <div className="relative">
                <h2 className="font-display text-3xl font-bold sm:text-4xl">
                  Not sure what you need?
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-brand-100">
                  Book a consultation — we&apos;ll help you find the right plan for your smile.
                </p>
                <Link href="/contact" className="btn-cream mt-8">
                  Book an Appointment
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
