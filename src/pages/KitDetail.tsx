import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ChevronRight,
  MessageCircle,
  CheckCircle2,
  Clock,
  Package,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import { kits } from '../data/kits';
import { products } from '../data/products';
import { BRAND_CONFIG, getWhatsAppUrl } from '../data/brand';
import { CAMPAIGN_IMAGES } from '../data/campaignImages';
import { PageTransition } from '../animations/PageTransition';
import { KitCard } from '../components/KitCard';
import { NotFound } from './NotFound';
import { getAssetUrl } from '../utils/assetUrl';

export const KitDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const kit = kits.find((k) => k.slug === slug);

  if (!kit) {
    return <NotFound />;
  }

  const whatsappUrl = getWhatsAppUrl(kit.nom);
  const relatedKits = kits.filter((k) => k.slug !== kit.slug).slice(0, 3);

  const findMatchingProduct = (name: string) => {
    const clean = name.toLowerCase().trim();
    return products.find((p) => {
      const pNom = p.nom.toLowerCase();
      const pW = p.whatsappNom ? p.whatsappNom.toLowerCase() : '';
      const pSlug = p.slug.toLowerCase();
      return (
        clean === pNom ||
        clean === pW ||
        clean === pSlug ||
        pNom.includes(clean) ||
        clean.includes(pNom) ||
        (clean.includes('shampooing') && pSlug === 'shampooing') ||
        (clean.includes('démêlant') && pSlug === 'demelant') ||
        (clean.includes('demelant') && pSlug === 'demelant') ||
        (clean.includes('secret') && pSlug === 'huile-capillaire-secret') ||
        (clean.includes('huile') && clean.includes('secret') && pSlug === 'huile-capillaire-secret') ||
        (clean.includes('pommade') && pSlug === 'pommade-pousse-cheveux') ||
        (clean.includes('pousse plus') && pSlug === 'serum-pousse-plus') ||
        (clean.includes('sérum') && pSlug === 'serum-pousse-plus') ||
        (clean.includes('serum') && pSlug === 'serum-pousse-plus') ||
        (clean.includes('savon noir') && pSlug.includes('savon-noir')) ||
        (clean.includes('crème') && pSlug === 'creme-de-visage') ||
        (clean.includes('creme') && pSlug === 'creme-de-visage') ||
        (clean.includes('glow oil') && pSlug === 'glow-oil') ||
        (clean.includes('chantilly') && pSlug === 'chantilly-corporelle') ||
        (clean.includes('gel de douche') && pSlug === 'gel-de-douche') ||
        (clean.includes('lait de corps') && pSlug === 'lait-de-corps') ||
        (clean.includes('eau de rose') && pSlug === 'eau-de-rose')
      );
    });
  };

  return (
    <PageTransition className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-[#FBF6EE]">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Fil d'Ariane"
        className="flex items-center gap-2 text-xs text-[#FBF6EE]/60 mb-8 overflow-x-auto whitespace-nowrap"
      >
        <Link to="/" className="hover:text-[#C9A24B] transition-colors">
          Accueil
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#C9A24B]" />
        <a href="/#kits" className="hover:text-[#C9A24B] transition-colors">
          Kits & Rituels
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-[#C9A24B]" />
        <span className="text-[#C9A24B] font-medium truncate max-w-[180px] sm:max-w-none">
          {kit.nom}
        </span>
      </nav>

      {/* Main 2-Column Kit Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
        {/* Left Column: Media */}
        <div className="lg:col-span-6 w-full relative lg:sticky lg:top-28 lg:self-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-3/4 max-h-[560px] mx-auto w-full rounded-3xl overflow-hidden bg-[#21130B] border border-[#C9A24B]/30 shadow-2xl flex items-center justify-center p-4 sm:p-6 group"
          >
            <img
              src={getAssetUrl(kit.image) || CAMPAIGN_IMAGES.universeStillLife}
              alt={kit.nom}
              className="max-h-full max-w-full object-contain rounded-2xl drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.triedFallback) {
                  target.dataset.triedFallback = 'true';
                  target.src = getAssetUrl(`${kit.slug}.jpg`);
                }
              }}
            />

            <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-black/75 backdrop-blur-md text-[#C9A24B] rounded-full text-[10px] uppercase tracking-widest font-semibold border border-[#C9A24B]/30">
              Coffret Rituel
            </div>
          </motion.div>
        </div>

        {/* Right Column: Information & Ordering */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="border-b border-[#C9A24B]/20 pb-6 mb-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A24B] font-semibold mb-2">
              <span>{BRAND_CONFIG.name}</span>
              <span>·</span>
              <span>{BRAND_CONFIG.city}</span>
            </div>

            <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FBF6EE] leading-tight mb-4">
              {kit.nom}
            </h1>

            {/* Price Line */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#C9A24B] tabular-nums">
                {kit.prix
                  ? typeof kit.prix === 'number'
                    ? `${kit.prix.toLocaleString('fr-FR')} FCFA`
                    : kit.prix
                  : 'Prix sur demande'}
              </span>
              <span className="text-xs text-[#FBF6EE]/60">
                (Confirmation directe sur WhatsApp)
              </span>
            </div>

            <p className="text-base text-[#FBF6EE]/85 leading-relaxed font-light">
              {kit.descriptionCourte}
            </p>
          </div>

          {/* Primary Purchase / WhatsApp Order CTA */}
          <div className="mb-8 p-6 rounded-3xl bg-[#21130B] border border-[#C9A24B]/30 shadow-xl">
            <span className="text-xs uppercase tracking-widest text-[#C9A24B] block mb-3 font-semibold">
              Commander ce coffret de soin
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#C9A24B] hover:bg-[#DFC07A] text-[#1D110A] font-semibold text-xs uppercase tracking-widest shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 text-[#1D110A] group-hover:scale-110 transition-transform" />
              <span>Commander ce kit sur WhatsApp</span>
            </a>
            <p className="text-center text-[11px] text-[#FBF6EE]/60 mt-3">
              Ligne officielle : {BRAND_CONFIG.whatsappNumber}
            </p>
          </div>

          {/* Full Details */}
          <div className="space-y-6 text-[#FBF6EE]/85 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="font-serif-luxury text-2xl font-bold text-[#FBF6EE] mb-3">
                Présentation du rituel
              </h2>
              <p className="whitespace-pre-line font-light text-[#FBF6EE]/80 leading-relaxed">
                {kit.description}
              </p>
            </div>

            {/* Composition */}
            {kit.composition && kit.composition.length > 0 && (
              <div className="pt-6 border-t border-[#C9A24B]/20">
                <h3 className="font-serif-luxury text-xl font-bold text-[#C9A24B] mb-3 flex items-center gap-2">
                  <Package className="w-5 h-5 text-[#C9A24B]" />
                  <span>Composition du coffret</span>
                </h3>
                <ul className="space-y-2.5">
                  {kit.composition.map((item, idx) => {
                    const matchingProduct = findMatchingProduct(item);
                    return (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
                        {matchingProduct ? (
                          <Link
                            to={`/produit/${matchingProduct.slug}`}
                            className="text-[#FBF6EE] hover:text-[#C9A24B] underline decoration-[#C9A24B]/40 hover:decoration-[#C9A24B] transition-colors inline-flex items-center gap-1.5 group"
                          >
                            <span>{item}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A24B] opacity-75 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </Link>
                        ) : (
                          <span>{item}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Routine en étapes numérotées */}
            {kit.routineEtapes && kit.routineEtapes.length > 0 && (
              <div className="pt-6 border-t border-[#C9A24B]/20">
                <h3 className="font-serif-luxury text-xl font-bold text-[#C9A24B] mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#C9A24B]" />
                  <span>Routine en {kit.routineEtapes.length} étapes</span>
                </h3>
                <div className="space-y-2.5">
                  {kit.routineEtapes.map((step, idx) => {
                    const matched = findMatchingProduct(step);
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-2xl bg-[#1D110A]/80 border border-[#C9A24B]/20 hover:border-[#C9A24B]/50 transition-colors"
                      >
                        <span className="w-7 h-7 rounded-full bg-[#C9A24B] text-[#160D08] font-serif-luxury font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
                          {idx + 1}
                        </span>
                        {matched ? (
                          <Link
                            to={`/produit/${matched.slug}`}
                            className="text-xs sm:text-sm text-[#FBF6EE] hover:text-[#C9A24B] underline decoration-[#C9A24B]/30 hover:decoration-[#C9A24B] font-medium transition-colors inline-flex items-center gap-1.5 group"
                          >
                            <span>{step}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A24B] opacity-75 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </Link>
                        ) : (
                          <span className="text-xs sm:text-sm text-[#FBF6EE]/90 font-medium">{step}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Benefits */}
            {kit.bienfaits && kit.bienfaits.length > 0 && (
              <div className="pt-6 border-t border-[#C9A24B]/20">
                <h3 className="font-serif-luxury text-xl font-bold text-[#C9A24B] mb-3">
                  Bienfaits clés
                </h3>
                <ul className="space-y-2.5">
                  {kit.bienfaits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Usage */}
            {kit.utilisation && (
              <div className="pt-6 border-t border-[#C9A24B]/20">
                <h3 className="font-serif-luxury text-xl font-bold text-[#C9A24B] mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C9A24B]" />
                  <span>Protocole d'application</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#FBF6EE]/80 leading-relaxed font-light">
                  {kit.utilisation}
                </p>
              </div>
            )}

            <div className="p-4 rounded-2xl bg-[#26160E] border border-[#C9A24B]/20 flex items-center gap-3 text-xs text-[#FBF6EE]/80">
              <ShieldCheck className="w-5 h-5 text-[#C9A24B] shrink-0" />
              <span>
                Coffret confectionné à la main avec amour dans nos ateliers à Niamey.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* "Vous aimerez aussi" for kits */}
      {relatedKits.length > 0 && (
        <section className="pt-16 border-t border-[#C9A24B]/20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C9A24B] font-semibold block mb-1">
                Découvrez nos autres routines
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#FBF6EE]">
                Autres coffrets rituels
              </h2>
            </div>
            <a
              href="/#kits"
              className="text-xs font-semibold text-[#C9A24B] hover:text-[#DFC07A] flex items-center gap-1 uppercase tracking-wider"
            >
              <span>Voir tout</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedKits.map((item, idx) => (
              <KitCard key={item.id || item.slug} kit={item} index={idx} />
            ))}
          </div>
        </section>
      )}

      {/* Sticky Bottom Bar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-[#160D08]/95 backdrop-blur-md border-t border-[#C9A24B]/30 shadow-2xl flex items-center justify-between gap-4">
        <div>
          <span className="text-[10px] text-[#FBF6EE]/60 uppercase tracking-wider block">
            Prix
          </span>
          <span className="font-serif-luxury text-base font-bold text-[#C9A24B]">
            {kit.prix
              ? typeof kit.prix === 'number'
                ? `${kit.prix.toLocaleString('fr-FR')} FCFA`
                : kit.prix
              : 'Prix sur demande'}
          </span>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow max-w-xs inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#C9A24B] text-[#1D110A] text-xs font-semibold uppercase tracking-wider shadow-lg"
        >
          <MessageCircle className="w-4 h-4 text-[#1D110A]" />
          <span>Commander</span>
        </a>
      </div>
    </PageTransition>
  );
};
