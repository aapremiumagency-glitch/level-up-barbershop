export interface BarbershopService {
  id: string;
  name: string;
  price: number;
  category: 'haircuts' | 'shave' | 'color-treatments';
  duration: string;
  popular?: boolean;
  description: string;
  details: string[];
}

export const BUSINESS_INFO = {
  name: "Level Up Barbershop",
  tagline: "London's Benchmark in Precision Grooming",
  address: "275 Wharncliffe Rd N, London, ON N6H 2C1",
  street: "275 Wharncliffe Rd N",
  cityStateZip: "London, ON N6H 2C1",
  phone: "(226) 700-1175",
  phoneRaw: "2267001175",
  website: "levelupbarbershop.ca",
  websiteUrl: "https://levelupbarbershop.ca",
  googleMapsUrl: "https://maps.google.com/?q=275+Wharncliffe+Rd+N,+London,+ON+N6H+2C1",
  hours: [
    { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM – 5:00 PM" },
  ],
  parking: "Dedicated complimentary customer parking directly in front of the shop.",
};

export const SERVICES: BarbershopService[] = [
  {
    id: "regular-cut",
    name: "REGULAR CUT",
    price: 22,
    category: "haircuts",
    duration: "30 min",
    popular: true,
    description: "Classic precision shear and clipper cut tailored to your head shape, finished with neck taper and razor cleanup.",
    details: ["Consultation & style advice", "Precision clipper & scissor work", "Hot lather razor neck cleanup", "Premium matte or high-shine styling"]
  },
  {
    id: "bald-fade",
    name: "BALD FADE",
    price: 24,
    category: "haircuts",
    duration: "35 min",
    popular: true,
    description: "Seamless skin-to-length transition using foil shaver and precision clippers for an ultra-crisp, zero-gap gradient.",
    details: ["Zero / skin foil shaver taper", "Seamless blend with no harsh lines", "Textured top sculpting", "Precision perimeter edging"]
  },
  {
    id: "haircut-and-shave",
    name: "HAIRCUT AND SHAVE",
    price: 37,
    category: "haircuts",
    duration: "55 min",
    popular: true,
    description: "The complete signature grooming package. Any haircut of your choice paired with a traditional hot towel beard shave.",
    details: ["Full tailored haircut & fade", "Steamed essential oil hot towel", "Warm lather straight-razor shave", "Revitalizing aftershave & beard oil"]
  },
  {
    id: "kids-cut",
    name: "KIDS CUT (under 5 years)",
    price: 19,
    category: "haircuts",
    duration: "25 min",
    description: "Patient, gentle, and stylish cuts for youngsters under 5 years in a relaxed, comfortable environment.",
    details: ["Patient & friendly master barber", "Booster seat support", "Gentle clipper & scissor handling", "Fun styling finish"]
  },
  {
    id: "long-hair",
    name: "LONG HAIR",
    price: 27,
    category: "haircuts",
    duration: "40 min",
    description: "Specialized shears cutting, layering, and split-end maintenance for medium to long hair lengths.",
    details: ["Full sectioning & geometry", "Scissor-over-comb texturing", "Split-end and volume shaping", "Blow-dry & artisan styling paste"]
  },
  {
    id: "head-shave",
    name: "HEAD SHAVE",
    price: 22,
    category: "shave",
    duration: "30 min",
    description: "Ultra-smooth head shave using warm lather, pre-shave oil, and traditional straight razor or foil shaver.",
    details: ["Pre-shave hydrating treatment", "Steamed towel preparation", "Straight razor foil polish", "Cooling menthol post-shave balm"]
  },
  {
    id: "shave-beard",
    name: "SHAVE(BEARD)",
    price: 20,
    category: "shave",
    duration: "25 min",
    popular: true,
    description: "Traditional straight-razor beard sculpt or clean face shave with hot towels and conditioning oils.",
    details: ["Steamed aromatherapy hot towel", "Hot lather straight razor edge", "Beard line sculpting & fade", "Nourishing beard balm application"]
  },
  {
    id: "line-up",
    name: "LINE UP",
    price: 12,
    category: "haircuts",
    duration: "15 min",
    description: "Razor-sharp hairline, temple, and nape definition to refresh your look between full haircuts.",
    details: ["Detailed trimmer outlining", "Straight razor finish with gel", "Nape and ear perimeter sharpening", "Quick refreshing splash"]
  },
  {
    id: "threading",
    name: "THREADING",
    price: 5,
    category: "color-treatments",
    duration: "10 min",
    description: "Precision eyebrow and facial hair cleanup using organic cotton threading for immaculate symmetry.",
    details: ["Precise brow contouring", "Removes finest stray hairs", "Gentle on sensitive skin", "Natural symmetrical framing"]
  },
  {
    id: "beard-colour",
    name: "BEARD COLOUR",
    price: 15,
    category: "color-treatments",
    duration: "20 min",
    description: "Natural gray blending or rich uniform coloring to make your beard appear fuller and sharply defined.",
    details: ["Custom tone matching", "Skin barrier protection", "Even coverage of gray hairs", "Conditioning wash & luster balm"]
  },
  {
    id: "hair-colour",
    name: "HAIR COLOUR",
    price: 25,
    category: "color-treatments",
    duration: "35 min",
    description: "Professional gray coverage, tone enhancement, or natural dark blending for a refreshed, youthful look.",
    details: ["Skin tone color matching", "Subtle, non-brassy formulation", "Gentle scalp-friendly dye", "Post-color wash & style"]
  },
  {
    id: "hair-wash",
    name: "HAIR WASH",
    price: 5,
    category: "color-treatments",
    duration: "10 min",
    description: "Invigorating scalp cleanse and conditioning with light massage to remove clippings and refresh before styling.",
    details: ["Deep cleansing tea tree shampoo", "Invigorating scalp massage", "Hydrating conditioner", "Warm towel dry & prep"]
  }
];

export const TESTIMONIALS = [
  {
    id: "1",
    author: "Marcus Vance",
    role: "Western University Graduate",
    rating: 5,
    text: "Hands down the best bald fade in London, ON. The attention to detail on the neckline and blend is unmatched. I've been coming here regularly on Wharncliffe Rd N—consistent every single time.",
    service: "Bald Fade & Beard Lineup"
  },
  {
    id: "2",
    author: "David Chen",
    role: "Local Business Professional",
    rating: 5,
    text: "Got the Haircut & Shave combo before an important presentation. The hot towel treatment and straight razor finish made me feel like a million bucks. Calling in to book takes 10 seconds.",
    service: "Haircut and Shave"
  },
  {
    id: "3",
    author: "Tariq Al-Mansoor",
    role: "London Resident",
    rating: 5,
    text: "Crisp line ups, skilled barbers who genuinely listen to what you want, and fair pricing. Plus easy free parking right outside the front door. Level Up is top tier.",
    service: "Regular Cut & Beard Sculpt"
  }
];

export const FAQS = [
  {
    question: "Do you accept walk-ins, or is calling ahead recommended?",
    answer: "Both! Walk-ins are always warmly welcomed based on chair availability. However, to guarantee your preferred barber and zero wait time, we recommend calling (226) 700-1175 directly."
  },
  {
    question: "Where is Level Up Barbershop located in London, Ontario?",
    answer: "We are centrally located at 275 Wharncliffe Rd N, London, ON N6H 2C1. We are easily accessible from Western University campus, Oxford St, and Downtown London."
  },
  {
    question: "Is there customer parking available?",
    answer: "Yes, free and convenient customer parking is available directly on-site in front of the barbershop."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept Debit (Interac), Visa, Mastercard, and Cash for your convenience."
  },
  {
    question: "Do you offer cuts for young children?",
    answer: "Yes! Our Kids Cut service ($19 for children under 5 years) is tailored specifically for little ones with calm, patient barbers who ensure a fun and relaxed experience."
  }
];
