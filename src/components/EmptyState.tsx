import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../data/brand';
import { CAMPAIGN_IMAGES } from '../data/campaignImages';

interface EmptyStateProps {
  type?: 'produits' | 'kits';
  message?: string;
  submessage?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  type = 'produits',
  message = 'Nos produits arrivent bientôt',
  submessage = 'Notre maison finalise avec passion la confection de ses soins naturels à Niamey. Écrivez-nous directement sur WhatsApp pour être informé en avant-première.',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative max-w-4xl mx-auto w-full my-8 rounded-3xl overflow-hidden border border-[#C9A24B]/30 shadow-2xl bg-[#1A0F08]"
    >
      {/* Background Campaign Still-Life Photograph */}
      <div className="relative aspect-16/9 sm:aspect-21/9 w-full overflow-hidden">
        <img
          src={type === 'kits' ? CAMPAIGN_IMAGES.sheaOilTexture : CAMPAIGN_IMAGES.universeStillLife}
          alt="Préparation de la collection"
          className="w-full h-full object-cover object-center brightness-60"
          referrerPolicy="no-referrer"
        />
        {/* Deep Chocolate Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#160D08] via-[#160D08]/75 to-transparent" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#160D08]/60 to-[#160D08]" />

        {/* Floating Brand Badge */}
        <div className="absolute top-6 left-6 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#160D08]/80 backdrop-blur-md border border-[#C9A24B]/40 text-[#C9A24B] text-[10px] uppercase tracking-widest font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Atelier Botanique — Niamey</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative -mt-16 sm:-mt-20 z-10 p-6 sm:p-10 text-center flex flex-col items-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C9A24B] font-semibold block mb-2">
          COLLECTION EN PRÉPARATION
        </span>

        <h3 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#FBF6EE] mb-4">
          {message}
        </h3>

        <p className="text-sm sm:text-base text-[#FBF6EE]/80 max-w-xl mx-auto leading-relaxed mb-8 font-light">
          {submessage}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl(type === 'kits' ? 'Renseignements sur les kits' : 'Renseignements sur les produits')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#C9A24B] hover:bg-[#DFC07A] text-[#1D110A] text-xs font-semibold uppercase tracking-widest shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#1D110A]" />
            <span>Nous contacter sur WhatsApp</span>
          </a>
        </div>

        <div className="mt-8 pt-4 border-t border-[#C9A24B]/20 w-full max-w-sm text-[11px] text-[#FBF6EE]/50 tracking-widest uppercase">
          NAYÉ COSMÉTIQUE — NIAMEY, NIGER
        </div>
      </div>
    </motion.div>
  );
};
