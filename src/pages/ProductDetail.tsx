import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ChevronRight,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowLeft,
} from 'lucide-react';
import { products } from '../data/products';
import { BRAND_CONFIG, getWhatsAppUrl } from '../data/brand';
import { CAMPAIGN_IMAGES } from '../data/campaignImages';
import { PageTransition } from '../animations/PageTransition';
import { ProductCard } from '../components/ProductCard';
import { NotFound } from './NotFound';
import { getAssetUrl } from '../utils/assetUrl';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const navigate = useNavigate();

  const handleGoToProducts = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('produits')?.scrollIntoView({ behavior: 'smooth' });
    }, 120);
  };

  const product = products.find((p) => p.slug === slug || p.id === slug);

  if (!product) {
    return <NotFound />;
  }

  const whatsappUrl = getWhatsAppUrl(product.whatsappNom || product.nom);

  const relatedProducts = products
    .filter((p) => p.slug !== product.slug && p.categorie === product.categorie)
    .slice(0, 3);

  const fallbackRelated =
    relatedProducts.length > 0
      ? relatedProducts
      : products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <PageTransition className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-[#FBF6EE]">
      {/* Breadcrumb Navigation + Return Button */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <nav
          aria-label="Fil d'Ariane"
          className="flex items-center gap-2 text-xs text-[#FBF6EE]/60 overflow-x-auto whitespace-nowrap"
        >
          <Link to="/" className="hover:text-[#C9A24B] transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C9A24B]" />
          <button
            type="button"
            onClick={handleGoToProducts}
            className="hover:text-[#C9A24B] transition-colors cursor-pointer"
          >
            Produits
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#C9A24B]" />
          <span className="text-[#FBF6EE]/60">{product.categorie}</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#C9A24B]" />
          <span className="text-[#C9A24B] font-medium truncate max-w-[160px] sm:max-w-none">
            {product.nom}
          </span>
        </nav>

        <button
          type="button"
          onClick={handleGoToProducts}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#26160E] border border-[#C9A24B]/30 hover:border-[#C9A24B] text-xs text-[#C9A24B] hover:text-[#FBF6EE] transition-colors shrink-0 cursor-pointer"
          aria-label="Retour au catalogue produits"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Retour aux produits</span>
        </button>
      </div>

      {/* Main 2-Column Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
        {/* Left Column: Generous Gallery Media */}
        <div className="lg:col-span-6 w-full relative lg:sticky lg:top-28 lg:self-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-3/4 max-h-[560px] mx-auto w-full rounded-3xl overflow-hidden bg-[#21130B] border border-[#C9A24B]/30 shadow-2xl flex items-center justify-center p-4 sm:p-6 group"
          >
            <img
              src={getAssetUrl(product.image) || CAMPAIGN_IMAGES.sheaOilTexture}
              alt={product.nom}
              className="max-h-full max-w-full object-contain rounded-2xl drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.triedFallback) {
                  target.dataset.triedFallback = 'true';
                  target.src = getAssetUrl(`${product.slug}.jpg`);
                }
              }}
            />

            <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-black/75 backdrop-blur-md text-[#C9A24B] rounded-full text-[10px] uppercase tracking-widest font-semibold border border-[#C9A24B]/30">
              {product.categorie}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Contiguous Purchase Module & Rich Specifications */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="border-b border-[#C9A24B]/20 pb-6 mb-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A24B] font-semibold mb-2">
              <span>{BRAND_CONFIG.name}</span>
              <span>·</span>
              <span>{BRAND_CONFIG.city}</span>
            </div>

            <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FBF6EE] leading-tight mb-4">
              {product.nom}
            </h1>

            {/* Price Line */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#C9A24B] tabular-nums">
                {product.prix
                  ? typeof product.prix === 'number'
                    ? `${product.prix.toLocaleString('fr-FR')} FCFA`
                    : product.prix
                  : 'Prix sur demande'}
              </span>
              <span className="text-xs text-[#FBF6EE]/60">
                (Confirmation directe sur WhatsApp)
              </span>
            </div>

            <p className="text-base text-[#FBF6EE]/85 leading-relaxed font-light">
              {product.descriptionCourte}
            </p>
          </div>

          {/* Primary Purchase / WhatsApp Order CTA */}
          <div className="mb-8 p-6 rounded-3xl bg-[#21130B] border border-[#C9A24B]/30 shadow-xl">
            <span className="text-xs uppercase tracking-widest text-[#C9A24B] block mb-3 font-semibold">
              Commander ce soin d'exception
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#C9A24B] hover:bg-[#DFC07A] text-[#1D110A] font-semibold text-xs uppercase tracking-widest shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 text-[#1D110A] group-hover:scale-110 transition-transform" />
              <span>Commander sur WhatsApp</span>
            </a>
            <p className="text-center text-[11px] text-[#FBF6EE]/60 mt-3">
              Ligne officielle : {BRAND_CONFIG.whatsappNumber}
            </p>
          </div>

          {/* Full Description */}
          <div className="space-y-6 text-[#FBF6EE]/85 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="font-serif-luxury text-2xl font-bold text-[#FBF6EE] mb-3">
                Description du soin
              </h2>
              <p className="whitespace-pre-line font-light text-[#FBF6EE]/80 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Benefits */}
            {product.bienfaits && product.bienfaits.length > 0 && (
              <div className="pt-6 border-t border-[#C9A24B]/20">
                <h3 className="font-serif-luxury text-xl font-bold text-[#C9A24B] mb-3">
                  Bienfaits clés
                </h3>
                <ul className="space-y-2.5">
                  {product.bienfaits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Usage */}
            {product.utilisation && (
              <div className="pt-6 border-t border-[#C9A24B]/20">
                <h3 className="font-serif-luxury text-xl font-bold text-[#C9A24B] mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C9A24B]" />
                  <span>Conseils d'utilisation</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#FBF6EE]/80 leading-relaxed font-light">
                  {product.utilisation}
                </p>
              </div>
            )}

            <div className="p-4 rounded-2xl bg-[#26160E] border border-[#C9A24B]/20 flex items-center gap-3 text-xs text-[#FBF6EE]/80">
              <ShieldCheck className="w-5 h-5 text-[#C9A24B] shrink-0" />
              <span>
                Formule 100% naturelle sans additifs nocifs. Élaborée avec exigence à Niamey, Niger.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* "Vous aimerez aussi" */}
      {fallbackRelated.length > 0 && (
        <section className="pt-16 border-t border-[#C9A24B]/20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C9A24B] font-semibold block mb-1">
                Complétez votre rituel
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#FBF6EE]">
                Vous aimerez aussi
              </h2>
            </div>
            <button
              type="button"
              onClick={handleGoToProducts}
              className="text-xs font-semibold text-[#C9A24B] hover:text-[#DFC07A] flex items-center gap-1 uppercase tracking-wider cursor-pointer"
            >
              <span>Voir tout</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fallbackRelated.map((item, idx) => (
              <ProductCard key={item.id || item.slug} product={item} index={idx} />
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
            {product.prix
              ? typeof product.prix === 'number'
                ? `${product.prix.toLocaleString('fr-FR')} FCFA`
                : product.prix
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
