"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig, formatAddress } from "@/lib/site-config";

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 py-16 text-white">
        <div className="section text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
            {t.contact.eyebrow}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {t.contact.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-brand-100">{t.contact.intro}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              {t.contact.formTitle}
            </h2>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={t.contact.formName} name="name" required />
                <Field label={t.contact.formEmail} name="email" type="email" required />
              </div>
              <Field label={t.contact.formPhone} name="phone" type="tel" />
              <Field
                label={t.contact.formMessage}
                name="message"
                as="textarea"
                required
              />
              <button type="submit" className="btn-primary w-full sm:w-auto">
                {t.contact.formSubmit}
              </button>
              {submitted && (
                <p className="text-sm text-brand-700">
                  ✓ {t.contact.formSubmit} — {t.contact.formNote}
                </p>
              )}
              <p className="text-xs text-slate-400">{t.contact.formNote}</p>
            </form>
          </div>

          {/* Info */}
          <aside className="rounded-3xl bg-brand-50/60 p-8 lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              {t.contact.infoTitle}
            </h2>
            <dl className="mt-6 space-y-5 text-sm">
              <InfoRow label={t.contact.addressLabel}>{formatAddress()}</InfoRow>
              <InfoRow label={t.contact.phoneLabel}>
                <a href={siteConfig.phoneHref} className="text-brand-700 hover:underline">
                  {siteConfig.phoneDisplay}
                </a>
              </InfoRow>
              <InfoRow label={t.contact.emailLabel}>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-brand-700 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </InfoRow>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {t.contact.hoursLabel}
                </dt>
                <dd className="mt-2 space-y-1 text-slate-700">
                  {t.contact.hoursList.map((h) => (
                    <div key={h.day} className="flex justify-between gap-4">
                      <span>{h.day}</span>
                      <span className="text-slate-500">{h.hours}</span>
                    </div>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  as,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "textarea";
  required?: boolean;
}) {
  const base =
    "block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30";
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-slate-700">
        {label}
        {required && <span className="ml-0.5 text-brand-600">*</span>}
      </span>
      {as === "textarea" ? (
        <textarea name={name} required={required} rows={5} className={base} />
      ) : (
        <input type={type} name={name} required={required} className={base} />
      )}
    </label>
  );
}

function InfoRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </dt>
      <dd className="mt-1 text-slate-700">{children}</dd>
    </div>
  );
}
