import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../data/brand';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Accueil', href: '/#' },
    { label: 'Beauté Naturelle', href: '/#beaute-naturelle' },
    { label: 'Soins Capillaires', href: '/#soins-capillaires' },
    { label: 'Produits', href: '/#produits' },
    { label: 'Kits', href: '/#kits' },
    { label: 'Univers Nayé', href: '/#univers-naye' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#160D08]/90 backdrop-blur-md shadow-xl border-b border-[#C9A24B]/30 py-3 text-[#FBF6EE]'
            : 'bg-gradient-to-b from-[#160D08]/80 via-[#160D08]/40 to-transparent py-5 text-[#FBF6EE]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Official Logo & Brand Name */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Nayé Cosmétique Accueil"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0.5 bg-gradient-to-tr from-[#C9A24B] to-[#E8893A] shadow-md group-hover:scale-105 transition-transform duration-300">
                <img
                  src={BRAND_CONFIG.officialLogoUrl}
                  alt={BRAND_CONFIG.name}
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-lg sm:text-xl font-semibold tracking-wider text-[#FBF6EE]">
                  NAYÉ
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#C9A24B] font-medium -mt-1">
                  COSMÉTIQUE
                </span>
              </div>
            </Link>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive =
                  location.pathname === '/' &&
                  ((link.href === '/#' && !location.hash) ||
                    (link.href.includes('#') && location.hash === link.href.replace('/', '')));

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="relative text-xs uppercase tracking-widest font-medium text-[#FBF6EE]/80 hover:text-[#C9A24B] transition-colors py-1 whitespace-nowrap"
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavLine"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A24B] rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action (WhatsApp button) & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#160D08] bg-[#C9A24B] hover:bg-[#DFC07A] rounded-full shadow-md transition-all duration-300 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#160D08]" />
                <span>WhatsApp</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg text-[#FBF6EE] hover:text-[#C9A24B] hover:bg-white/5 transition-colors focus:outline-none"
                aria-label="Ouvrir le menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#3B2417] text-[#FBF6EE] flex flex-col justify-between p-6 sm:p-8"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={BRAND_CONFIG.officialLogoUrl}
                  alt={BRAND_CONFIG.name}
                  className="w-10 h-10 rounded-full border border-[#C9A24B]/50"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-serif-luxury text-lg tracking-wider text-[#FBF6EE]">NAYÉ</div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-[#C9A24B]">COSMÉTIQUE</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#FBF6EE]/80 hover:text-[#C9A24B] transition-colors focus:outline-none"
                aria-label="Fermer le menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-6 my-auto text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.06 }}
                  className="font-serif-luxury text-2xl sm:text-3xl text-[#FBF6EE] hover:text-[#C9A24B] transition-colors py-1"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Bottom Actions & Info */}
            <div className="flex flex-col gap-4 text-center border-t border-[#C9A24B]/20 pt-6">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold tracking-wide text-[#3B2417] bg-[#C9A24B] hover:bg-[#DFC07A] rounded-full transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-[#3B2417]" />
                <span>Commander sur WhatsApp ({BRAND_CONFIG.whatsappNumber})</span>
              </a>
              <p className="text-xs text-[#FBF6EE]/60 tracking-widest uppercase">
                {BRAND_CONFIG.city} — {BRAND_CONFIG.country}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
