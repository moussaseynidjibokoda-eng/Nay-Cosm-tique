import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Kit } from '../data/kits';
import { getWhatsAppUrl } from '../data/brand';
import { CAMPAIGN_IMAGES } from '../data/campaignImages';
import { getAssetUrl } from '../utils/assetUrl';

interface KitCardProps {
  kit: Kit;
  index?: number;
}

export const KitCard: React.FC<KitCardProps> = ({ kit, index = 0 }) => {
  const whatsappUrl = getWhatsAppUrl(kit.nom);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col justify-between bg-[#21130B] hover:bg-[#2A180E] rounded-3xl border border-[#C9A24B]/20 hover:border-[#C9A24B]/60 shadow-xl transition-all duration-500 overflow-hidden text-[#FBF6EE]"
    >
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-t from-[#C9A24B]/15 via-transparent to-transparent" />

      {/* Large Vertical Image Area */}
      <div className="relative aspect-3/4 w-full bg-[#160D08] overflow-hidden">
        <img
          src={getAssetUrl(kit.image) || CAMPAIGN_IMAGES.universeStillLife}
          alt={kit.nom}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.dataset.triedFallback) {
              target.dataset.triedFallback = 'true';
              target.src = getAssetUrl(`${kit.slug}.jpg`);
            }
          }}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#21130B] via-transparent to-black/30 pointer-events-none" />

        <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md text-[#C9A24B] rounded-full text-[10px] uppercase tracking-widest font-semibold border border-[#C9A24B]/30">
          Coffret Rituel
        </div>
      </div>

      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-serif-luxury text-2xl font-bold text-[#FBF6EE] group-hover:text-[#C9A24B] transition-colors leading-snug mb-2">
            <Link to={`/kit/${kit.slug}`} className="hover:underline focus:outline-none">
              {kit.nom}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-[#FBF6EE]/75 line-clamp-2 leading-relaxed mb-4 font-light">
            {kit.descriptionCourte}
          </p>

          {kit.composition && kit.composition.length > 0 && (
            <div className="mb-4 space-y-1.5">
              <span className="text-[10px] uppercase tracking-widest text-[#C9A24B] font-semibold block">
                Comprend :
              </span>
              <ul className="text-xs text-[#FBF6EE]/80 space-y-1">
                {kit.composition.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24B] shrink-0" />
                    <span className="truncate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-[#C9A24B]/20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] text-[#FBF6EE]/60 uppercase tracking-widest">Prix du coffret</span>
            <span className="font-serif-luxury text-lg font-bold text-[#C9A24B] tabular-nums">
              {kit.prix
                ? typeof kit.prix === 'number'
                  ? `${kit.prix.toLocaleString('fr-FR')} FCFA`
                  : kit.prix
                : 'Prix sur demande'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Link
              to={`/kit/${kit.slug}`}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-medium uppercase tracking-wider text-[#FBF6EE] bg-white/5 hover:bg-white/10 border border-[#C9A24B]/30 rounded-full transition-colors"
            >
              <span>Découvrir</span>
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
