export const site = {
  name: "Mistro Vattavada",
  legalName: "Mistro Resorts & Cottages",
  tagline: "Wake up above the clouds.",
  description:
    "A boutique misty-hill resort in Vattavada, Kerala with valley-view rooms and private cottages. Clean, quiet stays, warm Kerala hospitality and enquiries over WhatsApp.",
  url: "https://mistro-demo.vercel.app",
  phoneDisplay: "+91 90744 50930",
  phoneHref: "+919074450930",
  whatsappNumber: "919074450930",
  whatsappDisplay: "+91 90744 50930",
  email: "demo@mistro.com",
  address: {
    street: "Mistro Hills, Koviloor Road",
    locality: "Vattavada",
    region: "Kerala",
    postalCode: "685615",
    country: "IN",
  },
  geo: { lat: 10.1872, lng: 77.2562 },
  established: 2012,
  rating: "4.9",
  reviewCount: 214,
  gbpUrl: "https://google.com/maps",
  mapsEmbedUrl: "https://www.google.com/maps?q=Vattavada,%20Kerala&output=embed",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Vattavada,Kerala",
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
  { place: "Vattavada Village", km: 3 },
  { place: "Koviloor Organic Terraces", km: 4 },
  { place: "Pampadum Shola National Park", km: 8 },
  { place: "Kurinjimala Sanctuary", km: 11 },
  { place: "Top Station Viewpoint", km: 12 },
];
