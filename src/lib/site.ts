export const site = {
  name: "Mistvale Munnar",
  legalName: "Mistvale Resorts & Cottages",
  tagline: "Wake up above the clouds.",
  description:
    "A boutique misty-hill resort in Munnar, Kerala with valley-view rooms and private tea-garden cottages. Clean, quiet stays, warm Kerala hospitality and enquiries over WhatsApp.",
  url: "https://mistvalemunnar.com",
  phoneDisplay: "+91 98765 43210",
  phoneHref: "+919876543210",
  whatsappNumber: "919876543210",
  whatsappDisplay: "+91 98765 43210",
  email: "stay@mistvalemunnar.com",
  address: {
    street: "Mistvale Road, Chithirapuram",
    locality: "Munnar",
    region: "Kerala",
    postalCode: "685565",
    country: "IN",
  },
  geo: { lat: 10.0889, lng: 77.0595 },
  established: 2012,
  rating: "4.9",
  reviewCount: 214,
  gbpUrl: "https://g.page/r/your-google-business-id",
  mapsEmbedUrl: "https://www.google.com/maps?q=Chithirapuram,%20Munnar,%20Kerala&output=embed",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Munnar,Kerala",
  socials: [
    { name: "Instagram", href: "https://instagram.com/", icon: "instagram" as const },
    { name: "Facebook", href: "https://facebook.com/", icon: "facebook" as const },
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/stays", label: "Stays" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const waDefaultMessage = `Hello ${site.name}! I'd like to enquire about a stay.`;

export const distances = [
  { place: "Munnar Town", km: 8 },
  { place: "Tea Museum", km: 10 },
  { place: "Eravikulam National Park", km: 18 },
  { place: "Top Station Viewpoint", km: 35 },
  { place: "Cochin International Airport", km: 95 },
];
