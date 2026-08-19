import { siteImages } from "./siteImages.js";

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Our Work", href: "#work" },
  { label: "How It Works", href: "#process" },
  { label: "About", href: "#about" },
];

export const trustClients = [
  "Client 01",
  "Client 02",
  "Client 03",
  "Client 04",
  "Client 05",
  "Client 06",
];

export const services = [
  {
    number: "01",
    icon: "Shirt",
    title: "Custom Merchandise",
    description:
      "T-shirts, hoodies, jackets, caps, bags and more — customized around your brand.",
  },
  {
    number: "02",
    icon: "Gift",
    title: "Corporate Gifting",
    description:
      "Curated gift kits for employees, clients, partners and communities.",
  },
  {
    number: "03",
    icon: "CalendarDays",
    title: "Event Merchandise",
    description:
      "Branded merchandise for conferences, meetups, hackathons, launches and community events.",
  },
  {
    number: "04",
    icon: "PackageCheck",
    title: "Fulfilment",
    description:
      "From sourcing and production to packaging, warehousing and delivery — handled end to end.",
  },
];

export const productCategories = [
  {
    label: "Apparel",
    items: [
      { name: "T-Shirts", image: siteImages.productTshirt },
      { name: "Hoodies", image: siteImages.productHoodie },
      { name: "Jackets", image: siteImages.apparel },
      { name: "Polos", image: siteImages.productTshirt },
      { name: "Caps", image: siteImages.productCap },
    ],
  },
  {
    label: "Event Essentials",
    items: [
      { name: "Lanyards", image: siteImages.productLanyard },
      { name: "ID Cards", image: siteImages.productLanyard },
      { name: "Badges", image: siteImages.heroBadge },
      { name: "Tote Bags", image: siteImages.productTote },
      { name: "Wristbands", image: siteImages.productLanyard },
    ],
  },
  {
    label: "Brand Essentials",
    items: [
      { name: "Stickers", image: siteImages.productSticker },
      { name: "Notebooks", image: siteImages.productNotebook },
      { name: "Bottles", image: siteImages.productBottle },
      { name: "Mugs", image: siteImages.productMug },
      { name: "Desk Accessories", image: siteImages.productNotebook },
    ],
  },
  {
    label: "Premium Gifting",
    items: [
      { name: "Gift Boxes", image: siteImages.productGiftBox },
      { name: "Tech Kits", image: siteImages.gifting },
      { name: "Employee Kits", image: siteImages.productGiftBox },
      { name: "Partner Gifts", image: siteImages.gifting },
      { name: "Custom Hampers", image: siteImages.productGiftBox },
    ],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Brief",
    description: "Tell us what you're building.",
  },
  {
    number: "02",
    title: "Design",
    description: "We turn your idea into a merchandise concept.",
  },
  {
    number: "03",
    title: "Source",
    description:
      "We find the right products, materials and production methods.",
  },
  {
    number: "04",
    title: "Produce",
    description: "Your merchandise is manufactured and quality checked.",
  },
  {
    number: "05",
    title: "Pack",
    description: "Everything is packed exactly how your project needs it.",
  },
  {
    number: "06",
    title: "Deliver",
    description:
      "We get it where it needs to go — offices, events or individual addresses.",
  },
];

export const eventChecklist = [
  "Attendee T-shirts",
  "Speaker kits",
  "Volunteer kits",
  "Sponsor merchandise",
  "Lanyards & badges",
  "Stickers",
  "Tote bags",
  "Welcome kits",
  "Swag boxes",
];

// Fictional showcase projects. Replace with real InkLook work once available —
// do not present these as claims about actual clients.
export const projects = [
  {
    title: "Community Event Kit",
    category: "EVENT MERCHANDISE",
    description:
      "Custom merchandise and event kits designed for a high-energy community event.",
    image: siteImages.projectOne,
  },
  {
    title: "Developer Welcome Kit",
    category: "CORPORATE / COMMUNITY",
    description:
      "A complete branded kit designed to make onboarding feel memorable.",
    image: siteImages.projectTwo,
  },
  {
    title: "Conference Swag System",
    category: "EVENT EXPERIENCE",
    description:
      "Coordinated apparel, badges, packaging and attendee merchandise.",
    image: siteImages.projectThree,
  },
];

export const whyReasons = [
  {
    title: "Designed around your brand",
    description:
      "We don't believe in simply placing logos on products. Every piece should feel like it belongs to your brand.",
  },
  {
    title: "Flexible quantities",
    description:
      "Whether you're ordering for a small team or a large event, we work around your requirements.",
  },
  {
    title: "End-to-end execution",
    description:
      "Design, sourcing, production, packaging and delivery — handled through one partner.",
  },
  {
    title: "Built for fast-moving teams",
    description:
      "We understand startups, communities and events where timelines matter.",
  },
  {
    title: "Quality people actually want",
    description:
      "Because the best swag isn't the one people receive. It's the one they keep.",
  },
];

// Placeholder testimonials — replace with real client quotes once available.
export const testimonials = [
  {
    quote:
      "Placeholder testimonial — replace with a real client quote about working with InkLook.",
    name: "Client Name",
    role: "Role",
    company: "Company",
  },
  {
    quote:
      "Placeholder testimonial — replace with a real client quote about the merchandise experience.",
    name: "Client Name",
    role: "Role",
    company: "Company",
  },
];

export const quoteNeedOptions = [
  "Event Merchandise",
  "Corporate Gifting",
  "Custom Apparel",
  "Community Swag",
  "Something Else",
];

export const quoteQuantityOptions = ["50–100", "100–250", "250–500", "500+"];
