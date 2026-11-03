/**
 * @file campaignImages.ts
 * @description Répertoire des photographies éditoriales haute fidélité pour la campagne NAYÉ COSMÉTIQUE.
 */

export interface CampaignSlide {
  id: string;
  image: string;
  kicker: string;
  title: string;
  subtitle: string;
  quote?: string;
}

export const CAMPAIGN_IMAGES = {
  // Portraits Hero
  heroPortrait: "/src/assets/images/hero_african_beauty_portrait_1793615131016.jpg",
  heroHair: "/src/assets/images/hero_natural_hair_radiance_1793615131818.jpg",
  sheaOilTexture: "/src/assets/images/section_botanical_shea_oil_1793615131924.jpg",
  dewySkinTexture: "/src/assets/images/section_body_dewy_skin_1793615133053.jpg",
  universeStillLife: "/src/assets/images/section_universe_botanicals_1793615133353.jpg",
} as const;

export const HERO_SLIDES: CampaignSlide[] = [
  {
    id: "slide-1",
    image: CAMPAIGN_IMAGES.heroPortrait,
    kicker: "NAYÉ COSMÉTIQUE — NIAMEY, NIGER",
    title: "LA BEAUTÉ AU NATUREL",
    subtitle: "Révélez votre beauté avec la richesse de la nature.",
    quote: "Des trésors botaniques sahariens formulés avec excellence.",
  },
  {
    id: "slide-2",
    image: CAMPAIGN_IMAGES.heroHair,
    kicker: "RITUEL CAPILLAIRE SAHÉLIEN",
    title: "ÉCLAT & FORCE NATURELLE",
    subtitle: "Sublimez vos cheveux grâce à la pureté des huiles végétales.",
    quote: "L'harmonie sacrée entre tradition ancestrale et soin moderne.",
  },
  {
    id: "slide-3",
    image: CAMPAIGN_IMAGES.sheaOilTexture,
    kicker: "MATIÈRES BRUTES D'EXCEPTION",
    title: "KARITÉ PUR & HUILES PRÉCIEUSES",
    subtitle: "Des textures fondantes au contact de la peau et des cheveux.",
    quote: "Une expérience sensorielle riche, nourrissante et authentique.",
  },
];
