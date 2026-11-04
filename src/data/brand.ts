/**
 * @file brand.ts
 * @description Identité officielle et constantes de marque pour NAYÉ COSMÉTIQUE.
 */

export const BRAND_CONFIG = {
  name: "Nayé Cosmétique",
  shortName: "Nayé",
  slogan: "La beauté au naturel",
  subheading: "Soins capillaires et soins du corps naturels, faits à Niamey.",
  city: "Niamey",
  country: "Niger",
  signature: "NAYÉ COSMÉTIQUE — NIAMEY, NIGER",
  whatsappNumber: "+227 99 81 81 08",
  whatsappPhoneDigits: "22799818108",
  officialLogoUrl: "./logo-naye.jpg",
  officialLogoOriginalPath: "./assets/aistudio/WhatsApp_Image_2026-10-14_at_15.01.02.jpeg_c2a53e1b_0fd665dc.jpg",
  socials: {
    instagram: "https://instagram.com", // Emplacement prêt à l'emploi
    tiktok: "https://tiktok.com",
    facebook: "https://facebook.com",
  },
  colors: {
    chocolat: "#3B2417",
    or: "#C9A24B",
    vert: "#2F6B3A",
    orangeNaturel: "#E8893A",
    creme: "#FBF6EE",
    blanc: "#FFFFFF",
  }
} as const;

/**
 * Génère le lien WhatsApp sécurisé et encodé selon la charte Nayé Cosmétique.
 * @param productName Nom optionnel du produit ou kit pour le message ciblé
 */
export function getWhatsAppUrl(productName?: string): string {
  const base = `https://wa.me/${BRAND_CONFIG.whatsappPhoneDigits}?text=`;
  const message = productName
    ? `Bonjour Nayé Cosmétique, je souhaite commander : ${productName}.`
    : `Bonjour Nayé Cosmétique, je souhaite passer commande.`;
  return `${base}${encodeURIComponent(message)}`;
}
