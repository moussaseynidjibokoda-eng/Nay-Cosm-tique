import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { MessageCircle, Heart, Instagram, Facebook, Share2 } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../data/brand';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (sectionId?: string) => {
    if (!sectionId) {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { label: 'Accueil', sectionId: '' },
    { label: 'Produits', sectionId: 'produits' },
    { label: 'Kits & Rituels', sectionId: 'kits' },
    { label: 'Univers Botanique', sectionId: 'univers-naye' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  return (
    <footer className="relative bg-[#26160E] text-[#FBF6EE] pt-20 pb-12 overflow-hidden border-t border-[#C9A24B]/30 select-none">
      {/* Huge subtle typography watermark in background */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-serif-luxury text-[14vw] font-bold text-[#C9A24B]/5 pointer-events-none whitespace-nowrap select-none leading-none z-0"
        aria-hidden="true"
      >
        NAYÉ
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#C9A24B]/20">
          {/* Brand Column (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#C9A24B] to-[#E8893A] shadow-md group-hover:scale-105 transition-transform">
                <img
                  src={BRAND_CONFIG.officialLogoUrl}
                  alt={BRAND_CONFIG.name}
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-serif-luxury text-2xl font-bold tracking-wider text-[#FBF6EE] block">
                  NAYÉ
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A24B] font-semibold -mt-1 block">
                  COSMÉTIQUE
                </span>
              </div>
            </Link>

            <p className="font-serif-luxury text-lg text-[#C9A24B] italic mb-3">
              « {BRAND_CONFIG.slogan} »
            </p>

            <p className="text-xs sm:text-sm text-[#FBF6EE]/75 max-w-sm leading-relaxed mb-6">
              Maison de beauté sahélienne dédiée aux soins capillaires et corporels naturels d'exception, confectionnés à Niamey.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#FBF6EE]/60">
              <span>{BRAND_CONFIG.city}, {BRAND_CONFIG.country}</span>
              <span>·</span>
              <span className="text-[#C9A24B] font-medium">{BRAND_CONFIG.whatsappNumber}</span>
            </div>
          </div>

          {/* Navigation Links (Col 6-8) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C9A24B] font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleLinkClick(link.sectionId)}
                    className="text-[#FBF6EE]/75 hover:text-[#C9A24B] transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact (Col 9-12) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] text-[#C9A24B] font-semibold mb-6">
                Commandes & Suivi
              </h4>
              <p className="text-xs sm:text-sm text-[#FBF6EE]/75 leading-relaxed mb-4">
                Toutes nos commandes s'organisent en direct avec notre équipe pour un conseil personnalisé.
              </p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B2417] hover:bg-[#1A0E08] text-[#C9A24B] border border-[#C9A24B]/40 hover:border-[#C9A24B] text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#2F6B3A]" />
                <span>Écrire sur WhatsApp</span>
              </a>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-4">
              <a
                href={BRAND_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#FBF6EE]/60 hover:text-[#C9A24B] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_CONFIG.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-[#FBF6EE]/60 hover:text-[#C9A24B] transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href={BRAND_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#FBF6EE]/60 hover:text-[#C9A24B] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FBF6EE]/50">
          <div>
            © {currentYear} {BRAND_CONFIG.name}. Tous droits réservés.
          </div>
          <div className="flex items-center gap-1.5 text-[11px]">
            <span>Fabriqué avec passion à</span>
            <span className="text-[#C9A24B] font-semibold">{BRAND_CONFIG.city}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
