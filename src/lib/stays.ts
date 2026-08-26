export type Stay = {
  slug: string;
  name: string;
  kind: "Room" | "Cottage";
  short: string;
  price: number;
  guests: string;
  size: string;
  bed: string;
  view: string;
  tagline: string;
  description: string[];
  highlights: string[];
  amenities: string[];
  image: string;
};

export const stays: Stay[] = [
  {
    slug: "deluxe-valley-room",
    name: "Deluxe Valley Room",
    kind: "Room",
    short:
      "A bright, airy room with floor-to-ceiling valley views and a private sit-out to watch the mist roll in.",
    price: 3499,
    guests: "2 guests",
    size: "320 sq.ft",
    bed: "King bed",
    view: "Valley view",
    tagline: "Front-row seats to the morning mist.",
    description: [
      "Perched on the upper floor of the main house, the Deluxe Valley Room opens onto an uninterrupted view of the valley below. Wake up slowly with chai on the sit-out as clouds drift past your window.",
      "The room is finished in calm, natural tones with crisp cotton linen, a plush king bed, blackout curtains and a spotless en-suite bathroom with 24×7 hot water. Housekeeping runs daily, so your space stays fresh through your stay.",
    ],
    highlights: [
      "Private sit-out facing the valley",
      "Floor-to-ceiling picture window",
      "Premium cotton linen & toiletries",
      "Tea/coffee kit with local estate leaves",
    ],
    amenities: ["Free Wi-Fi", "Smart TV", "Room heater", "24×7 hot water", "Wardrobe & luggage bench", "Daily housekeeping"],
    image: "/images/stay-deluxe.svg",
  },
  {
    slug: "family-mist-suite",
    name: "Family Mist Suite",
    kind: "Room",
    short:
      "A generous two-zone suite that sleeps four comfortably, made for slow family evenings above the clouds.",
    price: 5499,
    guests: "4 guests",
    size: "520 sq.ft",
    bed: "1 king + 2 singles",
    view: "Valley & garden view",
    tagline: "Room to spread out, together.",
    description: [
      "The Family Mist Suite gives everyone their own corner: parents in the king bedroom, kids in a cosy twin alcove, and a shared lounge in between for board games and evening snacks.",
      "Thoughtful touches make family travel easy, extra bedding on request, a mini fridge, plenty of storage, and a bathroom stocked with kid-friendly toiletries. The wide balcony safely overlooks the garden, perfect for sunset photos.",
    ],
    highlights: [
      "Separate kids' sleeping alcove",
      "Private balcony over the garden",
      "Mini fridge & electric kettle",
      "Extra bedding on request",
    ],
    amenities: ["Free Wi-Fi", "Smart TV", "Room heaters", "24×7 hot water", "Mini fridge", "Daily housekeeping"],
    image: "/images/stay-family.svg",
  },
  {
    slug: "tea-garden-cottage",
    name: "Tea Garden Cottage",
    kind: "Cottage",
    short:
      "A standalone cottage tucked against the tea slopes, with a private sit-out framed by rows of bright green tea.",
    price: 4999,
    guests: "2–3 guests",
    size: "400 sq.ft",
    bed: "Queen bed + daybed",
    view: "Tea garden view",
    tagline: "Step out into the tea rows.",
    description: [
      "Set a short walk from the main house, this private cottage sits right where the landscaped gardens meet the estate's tea slopes. Open the door in the morning and the first thing you'll smell is wet earth and tea blossom.",
      "Inside, warm wood and woven textures keep things snug while the weather does its dramatic thing outside. A daybed by the window doubles as a reading nook, and the front sit-out is all yours for breakfasts in the mist.",
    ],
    highlights: [
      "Standalone cottage, complete privacy",
      "Sit-out opening to the tea rows",
      "Window daybed reading nook",
      "Evening bonfire access nearby",
    ],
    amenities: ["Free Wi-Fi", "Electric kettle", "Room heater", "24×7 hot water", "Private entrance", "Daily housekeeping"],
    image: "/images/stay-tea.svg",
  },
  {
    slug: "cloud-nine-honeymoon-cottage",
    name: "Cloud Nine Cottage",
    kind: "Cottage",
    short:
      "Our most secluded hideaway, a honeymoon cottage with a private deck, candlelit dinners and mist for miles.",
    price: 6999,
    guests: "2 guests",
    size: "450 sq.ft",
    bed: "King canopy bed",
    view: "Cliff-edge valley view",
    tagline: "Just the two of you, and the clouds.",
    description: [
      "At the quietest edge of the property, Cloud Nine is built for two. The cottage hides behind silver oak and coffee shrubs, opening onto a private deck that floats above the valley, arguably the best seat in Munnar for both sunrises and stargazing.",
      "We keep the romance effortless: flower decoration on arrival, a candlelight dinner under the stars on request, and a breakfast hamper delivered to your deck. Celebrating something special? Tell us on WhatsApp and we'll set it up.",
    ],
    highlights: [
      "Secluded cliff-edge location",
      "Private sunrise deck",
      "Candlelight dinner on request",
      "Flower decoration on arrival",
    ],
    amenities: ["Free Wi-Fi", "Bluetooth speaker", "Room heater", "24×7 hot water", "Breakfast hamper", "Butler on call"],
    image: "/images/stay-honeymoon.svg",
  },
];
