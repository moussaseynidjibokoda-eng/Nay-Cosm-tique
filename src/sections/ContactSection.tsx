import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, MapPin, Phone, Instagram, Facebook, Share2 } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../data/brand';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#3B2417] text-[#FBF6EE] overflow-hidden">
      {/* Background Golden Glow & Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-radial from-[#C9A24B]/15 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-radial from-[#E8893A]/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Editorial Subtitle */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-6 h-[1px] bg-[#C9A24B]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A24B] font-semibold">
            Contact Direct
          </span>
          <span className="w-6 h-[1px] bg-[#C9A24B]" />
        </div>

        {/* Main Title */}
        <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FBF6EE] mb-6">
          Votre beauté mérite le naturel.
        </h2>

        {/* Text */}
        <p className="text-base sm:text-lg text-[#FBF6EE]/80 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          Une question ou une commande ? Notre équipe est disponible sur WhatsApp.
        </p>

        {/* Official Brand Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {/* Location Card */}
          <div className="p-6 rounded-2xl bg-white/5 border border-[#C9A24B]/20 text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#C9A24B]/10 text-[#C9A24B] flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-xs text-[#C9A24B] uppercase tracking-widest font-semibold mb-1">
              Localisation
            </span>
            <span className="font-serif-luxury text-lg text-[#FBF6EE]">
              {BRAND_CONFIG.name}
            </span>
            <span className="text-xs text-[#FBF6EE]/70">
              {BRAND_CONFIG.city} — {BRAND_CONFIG.country}
            </span>
          </div>

          {/* WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-white/5 border border-[#C9A24B]/20 text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#2F6B3A]/20 text-[#2F6B3A] flex items-center justify-center mb-3">
              <Phone className="w-5 h-5 text-[#C9A24B]" />
            </div>
            <span className="text-xs text-[#C9A24B] uppercase tracking-widest font-semibold mb-1">
              Ligne Directe
            </span>
            <span className="font-serif-luxury text-lg text-[#FBF6EE] tracking-wider">
              {BRAND_CONFIG.whatsappNumber}
            </span>
            <span className="text-xs text-[#FBF6EE]/70">
              Réponse rapide 7j/7
            </span>
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#C9A24B] hover:bg-[#DFC07A] text-[#3B2417] font-semibold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <MessageCircle className="w-5 h-5 text-[#3B2417] group-hover:scale-110 transition-transform" />
            <span>Discuter sur WhatsApp</span>
          </a>
        </div>

        {/* Social Media Channels (Prepared slots without inventing false handles) */}
        <div className="pt-8 border-t border-[#C9A24B]/20">
          <p className="text-xs uppercase tracking-widest text-[#FBF6EE]/60 mb-4">
            Rejoignez notre communauté
          </p>
          <div className="flex items-center justify-center gap-6">
            <a
              href={BRAND_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Nayé Cosmétique"
              className="p-3 rounded-full bg-white/5 hover:bg-[#C9A24B]/20 text-[#FBF6EE]/80 hover:text-[#C9A24B] transition-colors border border-[#C9A24B]/15"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={BRAND_CONFIG.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Nayé Cosmétique"
              className="p-3 rounded-full bg-white/5 hover:bg-[#C9A24B]/20 text-[#FBF6EE]/80 hover:text-[#C9A24B] transition-colors border border-[#C9A24B]/15"
            >
              <Share2 className="w-5 h-5" />
            </a>
            <a
              href={BRAND_CONFIG.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Nayé Cosmétique"
              className="p-3 rounded-full bg-white/5 hover:bg-[#C9A24B]/20 text-[#FBF6EE]/80 hover:text-[#C9A24B] transition-colors border border-[#C9A24B]/15"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
