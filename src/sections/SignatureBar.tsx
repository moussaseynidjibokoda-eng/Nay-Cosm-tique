import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export const SignatureBar: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const items = [
    'Ingrédients naturels',
    'Fabriqué à Niamey',
    'Pour toute la famille',
    'Commande facile sur WhatsApp',
    'Cosmétiques naturels du Niger',
    'L\'artisanat au service de votre beauté',
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#3B2417] text-[#FBF6EE] py-4 border-y border-[#C9A24B]/30 select-none">
      {/* Decorative Golden Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A24B]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A24B]/50 to-transparent" />

      {/* Infinite Horizontal Running Marquee */}
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={shouldReduceMotion ? {} : { x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex items-center gap-8 text-xs sm:text-sm font-medium tracking-widest uppercase shrink-0"
        >
          {[...items, ...items, ...items, ...items].map((text, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-[#FBF6EE]/90 hover:text-[#C9A24B] transition-colors">{text}</span>
              <span className="text-[#C9A24B] text-xs font-serif-luxury" aria-hidden="true">
                ✦
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
