import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_CONFIG } from '../data/brand';
import { getAssetUrl } from '../utils/assetUrl';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'logo' | 'line' | 'slogan' | 'exit'>('logo');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('line'), 700);
    const t2 = setTimeout(() => setPhase('slogan'), 1300);
    const t3 = setTimeout(() => setPhase('exit'), 2400);
    const t4 = setTimeout(() => onComplete(), 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#160D08] text-[#FBF6EE] px-6 select-none overflow-hidden"
      >
        {/* Subtle radial golden ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle at center, rgba(201, 162, 75, 0.35) 0%, transparent 65%)',
          }}
        />

        {/* Skip button for seamless user control */}
        <button
          onClick={onComplete}
          aria-label="Passer l'introduction"
          className="absolute top-6 right-6 text-xs uppercase tracking-widest text-[#C9A24B]/70 hover:text-[#C9A24B] transition-colors py-2 px-3 border border-[#C9A24B]/20 rounded-full hover:border-[#C9A24B]/50"
        >
          Passer
        </button>

        {/* Central Brand Lockup */}
        <div className="relative flex flex-col items-center max-w-sm w-full text-center">
          {/* Logo official rendering */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative mb-6"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-b from-[#C9A24B] via-[#C9A24B]/40 to-transparent shadow-[0_0_30px_rgba(201,162,75,0.25)]">
              <img
                src={getAssetUrl(BRAND_CONFIG.officialLogoUrl)}
                alt={BRAND_CONFIG.name}
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = getAssetUrl('logo-naye.jpg');
                }}
              />
            </div>
            {/* Shimmer reflection ring */}
            <div className="absolute inset-0 rounded-full border border-[#C9A24B]/40 pointer-events-none animate-pulse" />
          </motion.div>

          {/* Golden expanding divider line */}
          <div className="relative w-full h-[1px] my-3 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: phase !== 'logo' ? 1 : 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="w-full h-full bg-gradient-to-r from-transparent via-[#C9A24B] to-transparent origin-center"
            />
          </div>

          {/* Slogan & Origin */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{
              opacity: phase === 'slogan' || phase === 'exit' ? 1 : 0,
              y: phase === 'slogan' || phase === 'exit' ? 0 : 12,
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="mt-2 space-y-1.5"
          >
            <p className="font-serif-luxury text-xl md:text-2xl text-[#C9A24B] italic tracking-wide">
              « {BRAND_CONFIG.slogan} »
            </p>
            <p className="text-[11px] tracking-[0.25em] text-[#FBF6EE]/70 uppercase font-medium">
              {BRAND_CONFIG.city} — {BRAND_CONFIG.country}
            </p>
          </motion.div>
        </div>

        {/* Elegant bottom note */}
        <div className="absolute bottom-8 text-[10px] tracking-[0.3em] uppercase text-[#C9A24B]/40">
          Maison de Beauté Saharienne
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
