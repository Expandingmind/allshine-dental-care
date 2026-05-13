"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

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
            {t.services.list.map((s) => (
              <article
                key={s.title}
                className="group rounded-2xl border border-slate-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-100 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-white">
                  <ToothIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.body}</p>
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

function ToothIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.6c2.7 0 4 1.5 5.7 1.5 1.6 0 2.9 1.1 2.9 3.4 0 2.6-1 4.6-1.5 6.7-.6 2.4-1.3 7.2-3.7 7.2-1.7 0-1.9-2.5-3.4-2.5s-1.7 2.5-3.4 2.5c-2.4 0-3.1-4.8-3.7-7.2C4.4 12 3.4 10 3.4 7.5c0-2.3 1.3-3.4 2.9-3.4C8 4.1 9.3 2.6 12 2.6Z" />
    </svg>
  );
}
