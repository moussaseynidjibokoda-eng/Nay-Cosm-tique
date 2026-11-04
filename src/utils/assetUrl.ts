/**
 * @file assetUrl.ts
 * @description Résout les URLs des images et assets pour un fonctionnement universel
 * (localhost, GitHub Pages avec sous-dossier de dépôt, et domaine personnalisé).
 */

export function getAssetUrl(path: string | undefined): string {
  if (!path) return '';
  
  // URLs distantes ou base64
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  // Nettoie les barres obliques de début
  const cleanPath = path.replace(/^\.?\/+/, '');

  // Utilise la base configurée par Vite (ex: './' ou '/nom-du-repo/')
  const base = import.meta.env.BASE_URL || './';
  
  if (base.endsWith('/')) {
    return `${base}${cleanPath}`;
  }
  return `${base}/${cleanPath}`;
}
