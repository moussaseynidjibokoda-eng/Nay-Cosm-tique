import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../data/brand';

interface WhatsAppButtonProps {
  productName?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ productName }) => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = getWhatsAppUrl(productName);

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      <div className="relative flex items-center justify-end">
        {/* Elegant Tooltip on hover or mobile initial view */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mr-3 hidden sm:flex items-center px-3.5 py-1.5 rounded-full bg-[#3B2417] text-[#FBF6EE] border border-[#C9A24B]/40 shadow-lg whitespace-nowrap text-xs font-medium"
            >
              <span>Discuter avec l'équipe</span>
              <span className="ml-1.5 text-[#C9A24B]">✦</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulsing subtle green aura */}
        <div className="absolute inset-0 rounded-full bg-[#2F6B3A]/30 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />

        {/* Main Floating Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Contacter ${BRAND_CONFIG.name} sur WhatsApp au ${BRAND_CONFIG.whatsappNumber}`}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#2F6B3A] to-[#3F8A4E] text-[#FBF6EE] shadow-[0_8px_24px_rgba(47,107,58,0.35)] border-2 border-[#C9A24B]/60 hover:border-[#C9A24B] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#C9A24B]/30"
        >
          <MessageCircle className="w-7 h-7 text-[#FBF6EE]" />

          {/* Tiny golden accent leaf badge */}
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C9A24B] text-[#3B2417] flex items-center justify-center text-[9px] font-bold shadow-xs">
            ✦
          </span>
        </motion.a>
      </div>
    </div>
  );
};
