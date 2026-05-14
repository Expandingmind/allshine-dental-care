"use client";

import { GoogleLogo } from "./GoogleLogo";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export type Review = {
  name: string;
  role: string;
  location: string;
  date: string;
  quote: string;
};

export function ReviewCard({ review }: { review: Review }) {
  const { locale } = useLanguage();
  const initial = review.name.charAt(0).toUpperCase();
  const formattedDate = formatReviewDate(review.date, locale);

  return (
    <article className="flex h-full w-[224px] flex-col rounded-2xl bg-white p-4 shadow-md ring-1 ring-slate-200 transition-shadow duration-300 hover:shadow-xl sm:w-[252px] sm:p-5">
      <div className="flex items-start justify-between">
        <GoogleLogo className="h-5 w-5" />
        <span
          className="grid h-5 w-5 place-items-center rounded-full bg-brand-100 text-[10px] font-semibold text-brand-800"
          aria-hidden
        >
          {initial}
        </span>
      </div>
      <div className="mt-3 flex gap-0.5 text-accent-500">
        {[0, 1, 2, 3, 4].map((i) => (
          <StarIcon key={i} className="h-3 w-3" />
        ))}
      </div>
      <div className="mt-2">
        <p className="text-sm font-semibold text-brand-900">{review.name}</p>
        <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-700">
          {review.role}
        </p>
      </div>
      <blockquote className="mt-3 flex-1 text-[12.5px] leading-relaxed text-slate-700">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <p className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
        {formattedDate}
      </p>
    </article>
  );
}

function formatReviewDate(iso: string, locale: string) {
  const [y, m] = iso.split("-").map(Number);
  if (!y || !m) return iso;
  const d = new Date(y, m - 1, 1);
  return d.toLocaleDateString(locale, { month: "short", year: "numeric" }).toUpperCase();
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1Z" />
    </svg>
  );
}
