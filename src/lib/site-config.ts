export const siteConfig = {
  name: "Allshine Dental Care",
  address: {
    line1: "14645 NW 77th Ave",
    line2: "Suite 106",
    city: "Miami Lakes",
    state: "FL",
    zip: "33014",
  },
  phoneDisplay: "(305) 686-4510",
  phoneHref: "tel:+13056864510",
  email: "Info@allshinedentalcare.com",
  bookingUrl: "/contact",
  googleReviewUrl: "https://g.page/r/PLACEHOLDER/review",
  reviewStats: {
    count: 112,
    average: 4.9,
  },
  social: {
    instagram: "https://www.instagram.com/Allshinedentalcare",
    facebook: "https://www.facebook.com/share/1Kpx7wAna7/?mibextid=wwXIfr",
  },
} as const;

export function formatAddress() {
  const a = siteConfig.address;
  return `${a.line1}, ${a.line2}, ${a.city}, ${a.state} ${a.zip}`;
}
