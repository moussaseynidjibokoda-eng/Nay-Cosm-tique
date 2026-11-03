import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import { Product } from '../data/products';
import { getWhatsAppUrl } from '../data/brand';
import { CAMPAIGN_IMAGES } from '../data/campaignImages';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const whatsappUrl = getWhatsAppUrl(product.whatsappNom || product.nom);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col justify-between bg-[#21130B] hover:bg-[#2A180E] rounded-3xl border border-[#C9A24B]/20 hover:border-[#C9A24B]/60 shadow-xl transition-all duration-500 overflow-hidden text-[#FBF6EE]"
    >
      {/* Golden Aura on Hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-t from-[#C9A24B]/15 via-transparent to-transparent" />

      {/* Large Vertical Image Area (3:4 aspect ratio) */}
      <div className="relative aspect-3/4 w-full bg-[#160D08] overflow-hidden">
        <img
          src={product.image || CAMPAIGN_IMAGES.sheaOilTexture}
          alt={product.nom}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#21130B] via-transparent to-black/30 pointer-events-none" />

        {/* Category Unboxed Text */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md text-[#C9A24B] rounded-full text-[10px] uppercase tracking-widest font-semibold border border-[#C9A24B]/30">
          {product.categorie}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-serif-luxury text-2xl font-bold text-[#FBF6EE] group-hover:text-[#C9A24B] transition-colors leading-snug mb-2">
            <Link to={`/produit/${product.slug}`} className="hover:underline focus:outline-none">
              {product.nom}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-[#FBF6EE]/75 line-clamp-2 leading-relaxed mb-6 font-light">
            {product.descriptionCourte}
          </p>
        </div>

        {/* Price & Actions */}
        <div className="pt-4 border-t border-[#C9A24B]/20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] text-[#FBF6EE]/60 uppercase tracking-widest">Prix</span>
            <span className="font-serif-luxury text-lg font-bold text-[#C9A24B] tabular-nums">
              {product.prix
                ? typeof product.prix === 'number'
                  ? `${product.prix.toLocaleString('fr-FR')} FCFA`
                  : product.prix
                : 'Prix sur demande'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Link
              to={`/produit/${product.slug}`}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-medium uppercase tracking-wider text-[#FBF6EE] bg-white/5 hover:bg-white/10 border border-[#C9A24B]/30 rounded-full transition-colors"
            >
              <span>Détails</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A24B]" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#160D08] bg-[#C9A24B] hover:bg-[#DFC07A] rounded-full transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#160D08]" />
              <span>Commander</span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
