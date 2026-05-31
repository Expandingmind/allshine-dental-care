"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig } from "@/lib/site-config";
import { Marquee } from "@/components/Marquee";
import { GoogleLogo } from "@/components/GoogleLogo";
import { ReviewCard } from "@/components/ReviewCard";
import { Reveal } from "@/components/Reveal";

export default function TestimonialsPage() {
  const { t, locale } = useLanguage();
  const stats = siteConfig.reviewStats;

  const half = Math.ceil(t.testimonials.list.length / 2);
  const topRow = t.testimonials.list.slice(0, half);
  const bottomRow = t.testimonials.list.slice(half);

  return (
    <>
      {/* HERO with stats + Leave a Review CTA */}
      <section className="bg-tan-200 py-20 text-brand-900">
        <div className="section flex flex-wrap items-end justify-between gap-6">
          <div className="opacity-0 animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
              {t.testimonials.eyebrow}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-brand-900 sm:text-5xl">
              {t.testimonials.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-brand-800">
              <span>
                <strong className="text-brand-900">{stats.count}+ </strong>
                {t.testimonials.statsReviewsLabel}
              </span>
              <span className="text-brand-500">·</span>
              <span>{t.testimonials.statsWithLabel}</span>
              <strong className="text-brand-900">
                {stats.average.toLocaleString(locale, { minimumFractionDigits: 1 })}
              </strong>
              <span className="inline-flex items-center gap-0.5 text-accent-600">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </span>
              <span>{t.testimonials.statsRatingLabel}</span>
            </div>
          </div>

          <a
            href={siteConfig.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary opacity-0 animate-fade-up [animation-delay:200ms]"
          >
            <ChatIcon className="mr-2 h-4 w-4" />
            {t.testimonials.leaveReviewCta}
          </a>
        </div>
      </section>

      {/* MARQUEE rows */}
      <section className="bg-tan-200 pb-20 text-brand-900">
        <div className="space-y-6">
          <Marquee direction="left" durationSeconds={90}>
            {topRow.map((r) => (
              <ReviewCard key={r.name + r.date} review={r} />
            ))}
          </Marquee>
          <Marquee direction="right" durationSeconds={90}>
            {bottomRow.map((r) => (
              <ReviewCard key={r.name + r.date} review={r} />
            ))}
          </Marquee>
        </div>

        <div className="section mt-10 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-brand-700 ring-1 ring-brand-200">
            <GoogleLogo className="h-4 w-4" />
            {t.testimonials.verifiedLabel}
          </span>
        </div>
      </section>

      {/* SHARE YOUR EXPERIENCE */}
      <LeaveReviewSection />
    </>
  );
}

function LeaveReviewSection() {
  const { t } = useLanguage();
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-cream-100 py-20">
      <div className="section grid gap-10 lg:grid-cols-5">
        <Reveal as="fade-right" tag="div" className="lg:col-span-2">
          <p className="eyebrow">{t.testimonials.eyebrow}</p>
          <h2 className="h-display mt-3">{t.testimonials.shareTitle}</h2>
          <p className="mt-4 text-slate-600">{t.testimonials.shareIntro}</p>
          <a
            href={siteConfig.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 rounded-full border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-900 shadow-sm transition-all duration-300 hover:border-brand-400 hover:shadow-md hover:-translate-y-0.5"
          >
            <GoogleLogo className="h-5 w-5" />
            {t.testimonials.leaveReviewCta} on Google
          </a>
        </Reveal>

        <Reveal as="fade-left" delay={150} className="lg:col-span-3">
          <form
            className="space-y-4 rounded-3xl border border-brand-100 bg-white p-8 shadow-lg"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t.testimonials.formName} name="name" required />
              <SelectField
                label={t.testimonials.formRelationship}
                name="relationship"
                options={[...t.testimonials.relationshipOptions]}
              />
            </div>

            <div>
              <span className="mb-1 block text-xs font-semibold text-slate-700">
                {t.testimonials.formRating}
              </span>
              <StarPicker value={rating} onChange={setRating} />
            </div>

            <Field
              label={t.testimonials.formMessage}
              name="message"
              as="textarea"
              required
            />

            <button type="submit" className="btn-primary w-full sm:w-auto">
              {t.testimonials.formSubmit}
            </button>

            {submitted && (
              <p className="text-sm font-medium text-brand-700">
                ✓ {t.testimonials.formThankYou}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
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
        <textarea name={name} required={required} rows={4} className={base} />
      ) : (
        <input type={type} name={name} required={required} className={base} />
      )}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-slate-700">{label}</span>
      <select
        name={name}
        className="block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function StarPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="inline-flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          className="text-2xl text-accent-500 transition hover:scale-110"
          aria-label={`${n} star${n === 1 ? "" : "s"}`}
        >
          {n <= value ? (
            <StarIcon className="h-6 w-6 fill-accent-500" />
          ) : (
            <StarIcon className="h-6 w-6 fill-slate-200" />
          )}
        </button>
      ))}
    </div>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1Z" />
    </svg>
  );
}

function ChatIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
    </svg>
  );
}
