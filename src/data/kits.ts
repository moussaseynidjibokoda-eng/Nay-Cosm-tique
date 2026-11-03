/**
 * @file kits.ts
 * @description Répertoire officiel des kits et rituels de soins NAYÉ COSMÉTIQUE.
 */

export interface Kit {
  id: string;
  slug: string;
  nom: string;
  whatsappNom?: string;
  descriptionCourte: string;
  description: string;
  composition: string[];
  routineEtapes?: string[];
  bienfaits: string[];
  utilisation: string;
  prix?: string | number;
  image: string;
  ordre?: number;
}

/**
 * Catalogue officiel des kits de soins NAYÉ COSMÉTIQUE.
 */
export const kits: Kit[] = [
  {
    id: "kit-teint-marron-clair",
    slug: "kit-teint-marron-clair",
    nom: "Kit Teint Marron Clair",
    whatsappNom: "Kit Teint Marron Clair",
    descriptionCourte: "Le kit complet pour un teint uniforme et lumineux.",
    description: "Le Kit Teint Marron Clair réunit 5 produits Nayé Cosmétique pour une routine complète visage et corps : un teint plus uniforme, une peau douce, hydratée et lumineuse.",
    composition: [
      "Crème de visage",
      "Gel de douche",
      "Glow Oil – Huile clarifiante",
      "Chantilly corporelle",
      "Savon noir éclaircissant",
    ],
    bienfaits: [
      "Teint plus uniforme et lumineux",
      "Routine complète visage et corps en 5 soins synergiques",
      "Peau intensément hydratée, douce et veloutée",
    ],
    utilisation: "1. Nettoyer avec le Savon noir ou le Gel de douche. 2. Appliquer la Crème de visage et quelques gouttes de Glow Oil sur le visage. 3. Masser la Chantilly corporelle sur le corps.",
    prix: "Prix du kit sur demande",
    image: "/assets/aistudio/Skincare_kit_products_on_display_57cf4d67_6e4e09c7.jpg",
    ordre: 1,
  },
  {
    id: "kit-cheveux",
    slug: "kit-cheveux",
    nom: "Kit Cheveux",
    whatsappNom: "Kit Cheveux",
    descriptionCourte: "La routine complète pour des cheveux forts et en bonne santé.",
    description: "Le Kit Cheveux réunit 5 produits Nayé Cosmétique pour une routine capillaire complète : laver, démêler, nourrir, stimuler la pousse et protéger vos cheveux.",
    composition: [
      "Shampooing",
      "Démêlant",
      "Huile capillaire Secret",
      "Pommade pour la pousse des cheveux",
      "Sérum Pousse Plus",
    ],
    routineEtapes: [
      "Shampooing",
      "Démêlant",
      "Huile Secret",
      "Pommade",
      "Sérum Pousse Plus",
    ],
    bienfaits: [
      "Lave et purifie le cuir chevelu en douceur",
      "Démêle et assouplit la fibre capillaire",
      "Nourrit et stimule la pousse active",
      "Réduit la casse et renforce les racines",
      "Protège et fait briller les cheveux",
    ],
    utilisation: "Routine en 5 étapes numérotées : 1. Shampooing, 2. Démêlant, 3. Huile Secret, 4. Pommade, 5. Sérum Pousse Plus.",
    prix: "Prix du kit sur demande",
    image: "/assets/aistudio/Hair_kit_products_on_marble_f3f8c70e_0fea43e6.jpg",
    ordre: 2,
  },
  {
    id: "kit-eclaircissant",
    slug: "kit-eclaircissant",
    nom: "Kit Éclaircissant",
    whatsappNom: "Kit Éclaircissant",
    descriptionCourte: "Unifie et illumine le teint, naturellement.",
    description: "Le Kit Éclaircissant réunit 4 produits Nayé Cosmétique pour une routine éclat : nettoyer, tonifier, hydrater et prendre soin de la peau pour un teint plus uniforme et lumineux.",
    composition: [
      "Savon noir éclaircissant",
      "Eau de rose pour le visage",
      "Crème de visage",
      "Lait de corps",
    ],
    routineEtapes: [
      "Savon noir",
      "Eau de rose",
      "Crème de visage",
      "Lait de corps",
    ],
    bienfaits: [
      "Nettoie et unifie le teint",
      "Tonifie et rafraîchit la peau",
      "Hydrate en profondeur visage et corps",
      "Illumine et apporte un éclat naturel",
    ],
    utilisation: "Routine en 4 étapes numérotées : 1. Savon noir, 2. Eau de rose, 3. Crème de visage, 4. Lait de corps.",
    prix: "Prix du kit sur demande",
    image: "/assets/aistudio/Cosmetics_products_on_marble_sur__e26f0f55_bd2e2adf.jpg",
    ordre: 3,
  },
  {
    id: "kit-levres-rose",
    slug: "kit-levres-rose",
    nom: "Kit Lèvres Rose",
    whatsappNom: "Kit Lèvres Rose",
    descriptionCourte: "Des lèvres douces, hydratées et rosées naturellement.",
    description: "Le Kit Lèvres Rose réunit 5 pièces pour une routine soin des lèvres complète : exfolier, hydrater et nourrir pour des lèvres douces et lisses.",
    composition: [
      "Brosse en silicone pour les lèvres",
      "Gommage lèvres au sucre rouge",
      "Masque lèvres au miel",
      "Baume à lèvres au miel",
      "Pot de soin rose",
    ],
    routineEtapes: [
      "Gommage avec la brosse",
      "Masque au miel",
      "Baume au miel",
      "Soin rose",
    ],
    bienfaits: [
      "Exfolie les peaux mortes en douceur",
      "Nourrit intensément les lèvres",
      "Hydrate et repulpe la texture des lèvres",
      "Laisse des lèvres douces, lisses et rosées",
    ],
    utilisation: "Routine en 4 étapes : 1. Gommage avec la brosse, 2. Masque au miel, 3. Baume au miel, 4. Soin rose.",
    prix: "Prix du kit sur demande",
    image: "/assets/aistudio/Lip_kit_product_photography_fd8993b5_ac34aa64.jpg",
    ordre: 4,
  },
];
