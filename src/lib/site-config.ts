export const siteConfig = {
  name: "Allshine Dental Care",
  address: {
    line1: "123 Sample Street",
    line2: "Suite 100",
    city: "Miami",
    state: "FL",
    zip: "33101",
  },
  phoneDisplay: "(305) 555-0123",
  phoneHref: "tel:+13055550123",
  email: "hello@allshinedental.com",
  bookingUrl: "/contact",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
} as const;

export function formatAddress() {
  const a = siteConfig.address;
  return `${a.line1}, ${a.city}, ${a.state} ${a.zip}`;
}
