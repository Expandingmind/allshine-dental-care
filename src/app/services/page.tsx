"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ServiceIllustration, type ServiceKind } from "@/components/ServiceIllustration";

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
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 py-16 text-white">
        <div className="section text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
            {t.services.eyebrow}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {t.services.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-brand-100">{t.services.intro}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.list.map((s, i) => (
              <article
                key={s.title}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ServiceIllustration kind={SERVICE_KINDS[i]} />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-50/60 py-16">
        <div className="section text-center">
          <h2 className="h-display">Not sure what you need?</h2>
          <p className="mt-3 text-slate-600">
            Book a consultation — we&apos;ll help you find the right plan for your smile.
          </p>
          <Link href="/contact" className="btn-primary mt-6">
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
