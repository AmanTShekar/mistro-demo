import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LightboxGallery from "@/components/LightboxGallery";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from around Mistvale Munnar — misty mornings, tea gardens, cottages, bonfires and the view from every stay.",
  alternates: { canonical: "/gallery" },
};

const items = [
  { src: "/images/hero.svg", alt: "Morning mist over the Munnar valley", cat: "Property" },
  { src: "/images/g-01.svg", alt: "Still lake mirroring the hills", cat: "Around Munnar" },
  { src: "/images/stay-tea.svg", alt: "Tea Garden Cottage sit-out", cat: "Property" },
  { src: "/images/g-03.svg", alt: "The road winding through tea gardens", cat: "Around Munnar" },
  { src: "/images/g-05.svg", alt: "Sunrise from the ridge above the property", cat: "Sky & Nights" },
  { src: "/images/g-04.svg", alt: "Pines wrapped in drifting mist", cat: "Around Munnar" },
  { src: "/images/stay-honeymoon.svg", alt: "Cloud Nine Cottage at night", cat: "Property" },
  { src: "/images/g-02.svg", alt: "A hidden waterfall after the rains", cat: "Around Munnar" },
  { src: "/images/g-06.svg", alt: "Fireflies and starlight over the valley", cat: "Sky & Nights" },
];

export default function GalleryPage() {
  return (
    <PageTransition>
      <PageHero
        kicker="Gallery"
        title="Proof that we weren't exaggerating"
        sub="Real corners of the property and the hills around it. Tap any photo to view it full-screen."
        image="/images/g-04.svg"
      />

      <section className="section-y">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <LightboxGallery items={items} />
        </div>
      </section>
      </PageTransition>
  );
}
