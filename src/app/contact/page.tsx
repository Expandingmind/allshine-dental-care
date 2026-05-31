"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig, formatAddress } from "@/lib/site-config";
import { Reveal } from "@/components/Reveal";

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-tan-200 py-20 text-brand-900">
        <div className="section text-center">
          <p className="opacity-0 animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
            {t.contact.eyebrow}
          </p>
          <h1 className="opacity-0 animate-fade-up [animation-delay:150ms] mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-brand-900 sm:text-5xl">
            {t.contact.title}
          </h1>
          <p className="opacity-0 animate-fade-up [animation-delay:300ms] mx-auto mt-4 max-w-2xl text-brand-800">
            {t.contact.intro}
          </p>
        </div>
      </section>

      <section className="bg-cream-100 py-20">
        <div className="section grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <Reveal as="fade-right" className="lg:col-span-3">
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
                  ✓ {t.contact.formSubmit}. {t.contact.formNote}
                </p>
              )}
              <p className="text-xs text-slate-400">{t.contact.formNote}</p>
            </form>
          </Reveal>

          {/* Info */}
          <Reveal as="fade-left" delay={150} tag="aside" className="rounded-3xl bg-brand-700 p-8 text-white shadow-2xl lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-white">
              {t.contact.infoTitle}
            </h2>
            <dl className="mt-6 space-y-5 text-sm">
              <InfoRow label={t.contact.addressLabel}>{formatAddress()}</InfoRow>
              <InfoRow label={t.contact.phoneLabel}>
                <a href={siteConfig.phoneHref} className="text-accent-400 hover:underline">
                  {siteConfig.phoneDisplay}
                </a>
              </InfoRow>
              <InfoRow label={t.contact.emailLabel}>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-accent-400 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </InfoRow>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-200">
                  {t.contact.hoursLabel}
                </dt>
                <dd className="mt-2 space-y-1 text-cream-100">
                  {t.contact.hoursList.map((h) => (
                    <div key={h.day} className="flex justify-between gap-4">
                      <span>{h.day}</span>
                      <span className="text-brand-200">{h.hours}</span>
                    </div>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
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
      <dt className="text-xs font-semibold uppercase tracking-wider text-brand-200">
        {label}
      </dt>
      <dd className="mt-1 text-cream-100">{children}</dd>
    </div>
  );
}
