# NAYÉ COSMÉTIQUE — Campagne Digitale & Catalogue Haute Beauté

> **« La beauté au naturel »**  
> Maison de soins botaniques d'exception, confectionnés à Niamey, Niger.

---

## 1. Nouvelle Direction Artistique : Luxury Beauty Campaign

Le site a été transformé pour offrir une **véritable expérience digitale cinématographique, visuelle et photographique**, inspirée des campagnes internationales de haute beauté :

- **Photographie au centre de l'expérience** : portraits éditoriaux de femmes africaines sublimant la peau nue et les cheveux naturels, gros plans sur les textures de karité brut, d'huiles solaires et d'ingrédients sahéliens.
- **Palette chromatique dominante** : Chocolat profond (`#160D08`, `#21130B`), Bronze chaud (`#7A4B27`), Caramel (`#A6632B`), Or champagne (`#C9A24B`) et touches subtiles de Crème ivoire (`#FBF6EE`).
- **Typographie éditoriale** : *Cormorant Garamond* (titres haute couture) et *Poppins* (textes modernes et aérés).
- **Zéro fond blanc omniprésent** : ambiance feutrée, chaleureuse et cinématographique.

---

## 2. Architecture & Expérience Visuelle

### A. Hero Cinématique Plein Écran (Diaporama Multi-Photos)
- Diaporama haute fidélité avec effet **Ken Burns** (zoom lent continu et panoramique doux).
- Transitions cinématographiques en **crossfade**, voiles dégradés chocolat et reflets d'or champagne.
- Slogan officiel & Titres éditoriaux :
  - *NAYÉ COSMÉTIQUE*
  - *« LA BEAUTÉ AU NATUREL »*
  - *« Révélez votre beauté avec la richesse de la nature. »*
- Commandes directes : *Découvrir nos produits* et *Commander sur WhatsApp*.
- Indicateurs interactifs de diapositives avec décompte `01 / 03`.

### B. Les 4 Grandes Sections Photographiques Immersives
1. **Section Beauté Naturelle** : Grande photographie éditoriale plein écran avec la signature :  
   *« La nature révèle votre beauté. »*
2. **Section Soins Capillaires** : Célébration photographique des cheveux naturels texturés et bouclés :  
   *« Prenez soin de vos cheveux, naturellement. »*
3. **Section Soins du Corps** : Photographie macro de peau satinée et gouttes d'élixir doré :  
   *« Chaque détail mérite le meilleur de la nature. »*
4. **Section Univers Botanique Nayé** : Composition still-life associant karité brut, aloe vera fraîchement tranchée, noix de coco et flacon d'apothicaire :  
   *« L'essence de la beauté naturelle. »*

---

## 3. Catalogue Produits & Kits (Centralisé & Sans Produit Fictif)

- **Fichiers de données** :
  - `src/data/products.ts` : Catalogue produits (initialisé vide `[]`).
  - `src/data/kits.ts` : Catalogue des coffrets rituels (initialisé vide `[]`).
- **Présentation photographique prête à l'emploi** :
  - Format d'image vertical luxueux (`3:4`).
  - Cartes chocolat profond avec halos dorés au survol.
  - Typographie éditoriale et prix en chiffres tabulaires.
  - Dès l'ajout d'un produit ou d'un kit, les fiches dynamiques `/produit/:slug` et `/kit/:slug` sont opérationnelles avec fil d'Ariane, conseils d'utilisation et commande WhatsApp personnalisée.
  - En attendant les produits réels, un état photographique cinématographique d'atelier annonce : *« Nos produits arrivent bientôt »*.

---

## 4. Coordonnées Officielles & Commande WhatsApp

Toutes les coordonnées sont regroupées dans `src/data/brand.ts` :

- **Numéro officiel :** `+227 99 81 81 08` (Digits : `22799818108`)
- **Messages pré-remplis encodés automatiquement :**
  - Message général : `Bonjour Nayé Cosmétique, je souhaite passer commande.`
  - Message produit : `Bonjour Nayé Cosmétique, je souhaite commander : [nom du produit].`
- Bouton flottant permanent en bas à droite avec légère pulsation et aura verte.

---

## 5. Commandes de Développement

```bash
# Lancer le serveur de développement (port 3000)
npm run dev

# Vérifier le typage TypeScript
npm run lint

# Compiler l'application pour la production
npm run build
```
