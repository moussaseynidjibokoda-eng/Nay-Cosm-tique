import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { CAMPAIGN_IMAGES } from '../data/campaignImages';
import { BRAND_CONFIG, getWhatsAppUrl } from '../data/brand';
import { ScrollReveal } from '../animations/ScrollReveal';

export const PhotographicCampaignSections: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative space-y-24 sm:space-y-36 my-16">
      {/* ========================================================
          1. SECTION BEAUTÉ NATURELLE
          « La nature révèle votre beauté. »
         ======================================================== */}
      <section
        id="beaute-naturelle"
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      >
        {/* Full-bleed Photographic Backdrop with Parallax */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] as const }}
            src={CAMPAIGN_IMAGES.heroPortrait}
            alt="Beauté Naturelle Africaine — Nayé Cosmétique"
            className="w-full h-full object-cover object-top opacity-60"
            referrerPolicy="no-referrer"
          />
          {/* Deep Chocolate Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#160D08] via-[#160D08]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#160D08] via-transparent to-[#160D08]" />
        </div>

        {/* Editorial Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 max-w-2xl">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-[#C9A24B]" />
                <span className="text-xs uppercase tracking-[0.3em] text-[#C9A24B] font-semibold">
                  01 — BEAUTÉ NATURELLE
                </span>
              </div>

              <h2 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold text-[#FBF6EE] leading-[1.1] mb-6">
                La nature révèle votre beauté.
              </h2>

              <p className="text-base sm:text-xl text-[#FBF6EE]/80 font-light leading-relaxed mb-8">
                Chaque femme porte en elle une splendeur unique. Chez Nayé Cosmétique, nous exaltons votre éclat naturel sans artifice, en puisant dans la pureté des trésors botaniques de notre terroir sahélien.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#produits"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C9A24B] hover:bg-[#DFC07A] text-[#1D110A] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg"
                >
                  <span>Explorer les soins</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={getWhatsAppUrl('Conseil beauté naturelle')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FBF6EE] border border-[#C9A24B]/40 font-medium text-xs uppercase tracking-widest backdrop-blur-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#C9A24B]" />
                  <span>Conseil personnalisé</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4 hidden lg:flex justify-end">
            {/* Editorial Framed Detail Card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-[#26160E]/90 border border-[#C9A24B]/40 backdrop-blur-md shadow-2xl max-w-xs"
            >
              <div className="aspect-3/4 rounded-2xl overflow-hidden mb-4 border border-[#C9A24B]/20">
                <img
                  src={CAMPAIGN_IMAGES.heroPortrait}
                  alt="Détail Beauté"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#C9A24B] font-semibold block mb-1">
                Campagne Officielle
              </span>
              <p className="font-serif-luxury text-base text-[#FBF6EE] italic">
                « Un hommage à la grâce et à l'authenticité de la femme africaine. »
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. SECTION SOINS CAPILLAIRES
          « Prenez soin de vos cheveux, naturellement. »
         ======================================================== */}
      <section
        id="soins-capillaires"
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] as const }}
            src={CAMPAIGN_IMAGES.heroHair}
            alt="Soins Capillaires Naturels — Nayé Cosmétique"
            className="w-full h-full object-cover object-center opacity-65"
            referrerPolicy="no-referrer"
          />
          {/* Deep Chocolate Right-to-Left Scrim */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#160D08] via-[#160D08]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#160D08] via-transparent to-[#160D08]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 hidden lg:flex justify-start">
            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-[#26160E]/90 border border-[#C9A24B]/40 backdrop-blur-md shadow-2xl max-w-xs"
            >
              <div className="aspect-3/4 rounded-2xl overflow-hidden mb-4 border border-[#C9A24B]/20">
                <img
                  src={CAMPAIGN_IMAGES.heroHair}
                  alt="Rituel Capillaire"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#C9A24B] font-semibold block mb-1">
                Nutrition & Force
              </span>
              <p className="font-serif-luxury text-base text-[#FBF6EE] italic">
                « Célébrez la force et la texture de votre chevelure naturelle. »
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:pl-8 text-left">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-[#C9A24B]" />
                <span className="text-xs uppercase tracking-[0.3em] text-[#C9A24B] font-semibold">
                  02 — RITUEL CAPILLAIRE
                </span>
              </div>

              <h2 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold text-[#FBF6EE] leading-[1.1] mb-6">
                Prenez soin de vos cheveux, naturellement.
              </h2>

              <p className="text-base sm:text-xl text-[#FBF6EE]/80 font-light leading-relaxed mb-8">
                Des huiles précieuses gorgées de soleil, des beurres bruts non raffinés et des formules pensées pour nourrir en profondeur, fortifier la fibre et préserver la vitalité de vos boucles et de vos cheveux.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 text-xs text-[#FBF6EE]/90">
                <div className="p-4 rounded-xl bg-black/40 border border-[#C9A24B]/20 backdrop-blur-xs">
                  <span className="text-[#C9A24B] block text-base font-serif-luxury mb-1">Hydratation</span>
                  Scellage d'hydratation durable
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-[#C9A24B]/20 backdrop-blur-xs">
                  <span className="text-[#C9A24B] block text-base font-serif-luxury mb-1">Souplesse</span>
                  Démêlage tout en douceur
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-[#C9A24B]/20 backdrop-blur-xs">
                  <span className="text-[#C9A24B] block text-base font-serif-luxury mb-1">Protection</span>
                  Barrière contre la sécheresse
                </div>
              </div>

              <a
                href={getWhatsAppUrl('Soin capillaire naturel')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C9A24B] hover:bg-[#DFC07A] text-[#1D110A] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg"
              >
                <span>Commander un rituel cheveux</span>
                <MessageCircle className="w-4 h-4 text-[#1D110A]" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SECTION SOINS DU CORPS
          « Chaque détail mérite le meilleur de la nature. »
         ======================================================== */}
      <section
        id="soins-du-corps"
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] as const }}
            src={CAMPAIGN_IMAGES.dewySkinTexture}
            alt="Soins du Corps et Peau Éclatante — Nayé Cosmétique"
            className="w-full h-full object-cover object-center opacity-65"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#160D08] via-[#160D08]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#160D08] via-transparent to-[#160D08]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 max-w-2xl">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-[#C9A24B]" />
                <span className="text-xs uppercase tracking-[0.3em] text-[#C9A24B] font-semibold">
                  03 — SOINS DU CORPS
                </span>
              </div>

              <h2 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold text-[#FBF6EE] leading-[1.1] mb-6">
                Chaque détail mérite le meilleur de la nature.
              </h2>

              <p className="text-base sm:text-xl text-[#FBF6EE]/80 font-light leading-relaxed mb-8">
                La texture délicate d'une huile satinée, la caresse fondante d'un baume généreux : offrez à votre épiderme un véritable rituel de régénération sensorielle inspiré des traditions du désert.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="#kits"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C9A24B] hover:bg-[#DFC07A] text-[#1D110A] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg"
                >
                  <span>Découvrir les coffrets</span>
                  <Sparkles className="w-4 h-4 text-[#1D110A]" />
                </a>
                <a
                  href={getWhatsAppUrl('Soin corps')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FBF6EE] border border-[#C9A24B]/40 font-medium text-xs uppercase tracking-widest backdrop-blur-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#C9A24B]" />
                  <span>Écrire sur WhatsApp</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-[#26160E]/90 border border-[#C9A24B]/40 backdrop-blur-md shadow-2xl max-w-xs"
            >
              <div className="aspect-3/4 rounded-2xl overflow-hidden mb-4 border border-[#C9A24B]/20">
                <img
                  src={CAMPAIGN_IMAGES.sheaOilTexture}
                  alt="Macro Huile et Beurre de Karité"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#C9A24B] font-semibold block mb-1">
                Texture & Alchimie
              </span>
              <p className="font-serif-luxury text-base text-[#FBF6EE] italic">
                « Beurre de karité brut et gouttes d'or végétal. »
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. SECTION UNIVERS NAYÉ
          « L'essence de la beauté naturelle. »
         ======================================================== */}
      <section
        id="univers-naye"
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] as const }}
            src={CAMPAIGN_IMAGES.universeStillLife}
            alt="L'Univers Botanique Nayé — Niamey, Niger"
            className="w-full h-full object-cover object-center opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#160D08] via-[#160D08]/80 to-[#160D08]" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#160D08]/70 to-[#160D08]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-[#C9A24B]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#C9A24B] font-semibold">
                04 — L'HERBIER NAYÉ
              </span>
              <span className="w-8 h-[1px] bg-[#C9A24B]" />
            </div>

            <h2 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold text-[#FBF6EE] leading-[1.1] mb-6">
              L'essence de la beauté naturelle.
            </h2>

            <p className="text-base sm:text-xl text-[#FBF6EE]/80 font-light leading-relaxed max-w-3xl mx-auto mb-10">
              Des noix de karité sauvages récoltées à la main, de l'aloe vera gorgé d'eau pure, de la chair de coco douce et des huiles solaires bienfaitrices. Une harmonie parfaite née sous le ciel de Niamey.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
              <div className="p-5 rounded-2xl bg-[#26160E]/80 border border-[#C9A24B]/30 backdrop-blur-md">
                <span className="font-serif-luxury text-xl text-[#C9A24B] block mb-1">Karité Brut</span>
                <span className="text-xs text-[#FBF6EE]/70">Nutrition ancestrale</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#26160E]/80 border border-[#C9A24B]/30 backdrop-blur-md">
                <span className="font-serif-luxury text-xl text-[#C9A24B] block mb-1">Aloe Vera</span>
                <span className="text-xs text-[#FBF6EE]/70">Hydratation fraîche</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#26160E]/80 border border-[#C9A24B]/30 backdrop-blur-md">
                <span className="font-serif-luxury text-xl text-[#C9A24B] block mb-1">Noix de Coco</span>
                <span className="text-xs text-[#FBF6EE]/70">Douceur veloutée</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#26160E]/80 border border-[#C9A24B]/30 backdrop-blur-md">
                <span className="font-serif-luxury text-xl text-[#C9A24B] block mb-1">Huiles Pures</span>
                <span className="text-xs text-[#FBF6EE]/70">Éclat précieux</span>
              </div>
            </div>

            <a
              href={getWhatsAppUrl('Découvrir la maison Nayé Cosmétique')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C9A24B] hover:bg-[#DFC07A] text-[#1D110A] font-semibold text-xs uppercase tracking-widest shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 text-[#1D110A]" />
              <span>Échanger avec notre maison</span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
