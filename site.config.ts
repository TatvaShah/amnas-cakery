import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Amna's Cakery",
  tagline: "Custom Halal cakes for birthdays, weddings, and events in Mississauga.",
  category: "Custom cakes",
  schemaType: "Bakery",
  area: "Mississauga, ON",
  siteUrl: "https://amnas-cakery.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#b5576d" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Halal cakes in Mississauga",
    headline: "Cakes made for your celebration",
    subhead: "Birthday cakes, wedding tiers, and event cakes, made to order. Send a DM with your date and idea to get started.",
    images: [
      { src: "/images/cake-4.jpg", alt: "Butterfly and floral birthday cake for Anya" },
      { src: "/images/cake-1.jpg", alt: "Three tier white wedding cake with red roses" },
      { src: "/images/cake-6.jpg", alt: "Tennis themed birthday cake" },
    ],
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: ["100% Halal", "Birthdays, weddings, and events", "Made to order", "Orders by Instagram DM"],

  about: {
    title: "Formerly Cupcakes&more by Amna",
    body: [
      "Amna's Cakery is a Mississauga bakery making custom cakes for birthdays, weddings, and events. Everything is Halal.",
      "Share your vision and we will bring it to life, from butterflies and blooms to handcrafted edible details.",
    ],
    image: { src: "/images/cake-7.jpg", alt: "Dinosaur cake with handcrafted edible toppers" },
  },

  menu: {
    title: "What we make",
    intro: "Every cake is custom. Send your date, size, and design idea by DM for a quote.",
    variant: "list",
    showPrices: false,
    groups: [
      {
        title: "Cakes",
        items: [
          { name: "Birthday cakes", description: "Themed designs like butterflies and florals, animals, tennis, and dinosaurs." },
          { name: "Wedding cakes", description: "Tiered cakes finished with fresh florals." },
          { name: "Cupcakes", description: "Ask in your DM." },
        ],
      },
      {
        title: "Flavours we have made",
        items: [
          { name: "Chocolate fudge" },
          { name: "Red velvet" },
        ],
      },
    ],
  },

  gallery: {
    title: "A look at the cakes",
    items: [
      { src: "/images/cake-4.jpg", width: 1217, height: 2160, alt: "Butterfly and floral cake", caption: "Butterflies, blooms and birthday wishes", href: "https://www.instagram.com/reel/DeakDSCNexh/" },
      { src: "/images/cake-1.jpg", width: 1440, height: 1800, alt: "Wedding cake with red roses", caption: "Red roses", href: "https://www.instagram.com/p/C-YuJs7Oc-B/" },
      { src: "/images/cake-5.jpg", width: 1150, height: 1440, alt: "Animal themed birthday cake", caption: "Animal themed birthday", href: "https://www.instagram.com/p/DeSuVBIjr8n/" },
      { src: "/images/cake-2.jpg", width: 1440, height: 1440, alt: "Four tier white floral cake", caption: "White florals", href: "https://www.instagram.com/p/DLlyyebtCK9/" },
      { src: "/images/cake-6.jpg", width: 1118, height: 1397, alt: "Tennis birthday cake", caption: "For a tennis enthusiast", href: "https://www.instagram.com/p/DeNn167DZrC/" },
      { src: "/images/cake-3.jpg", width: 1440, height: 1440, alt: "Tiered cake with monogram and roses", caption: "Monogram and roses", href: "https://www.instagram.com/p/CweRKRFMypu/" },
      { src: "/images/cake-7.jpg", width: 1080, height: 1440, alt: "Dinosaur cake with fondant toppers", caption: "Handcrafted edible details", href: "https://www.instagram.com/p/DeK2RTbDsPO/" },
    ],
  },

  instagram: {
    handle: "amnacakery",
    embeds: [],
  },

  order: {
    title: "Order in a quick DM",
    intro: "Orders are taken through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Amna's Cakery! I would love to order a cake.\nDate needed:\nServings or size:\nFlavour:\nDesign idea (I can send an inspo photo):",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a DM on Instagram with your date, servings, flavour, and design idea." },
    { q: "Are your cakes Halal?", a: "Yes, 100% Halal." },
    { q: "Where are you located?", a: "Mississauga, Ontario." },
  ],

  contact: {
    area: "Mississauga, Ontario",
    socials: [],
  },

  seo: {
    title: "Amna's Cakery | Custom Halal cakes in Mississauga",
    description: "Custom Halal cakes in Mississauga, Ontario for birthdays, weddings, and events. Made to order. Send a DM on Instagram with your date and idea to order.",
    keywords: ["custom cakes Mississauga", "Halal cakes Mississauga", "wedding cakes Mississauga", "birthday cakes Mississauga"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
