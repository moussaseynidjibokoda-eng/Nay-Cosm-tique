import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { MessageCircle, ArrowDown, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../data/brand';
import { HERO_SLIDES } from '../data/campaignImages';

export const Hero: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Auto-advance slideshow every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlideIndex];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#160D08] text-[#FBF6EE] flex items-center justify-center">
      {/* Cinematic Slideshow Background Images with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            {/* Image with continuous gentle Ken Burns drift */}
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover object-center ${
                shouldReduceMotion ? '' : 'animate-kenburns'
              }`}
              referrerPolicy="no-referrer"
            />

            {/* Deep Chocolate & Warm Bronze Cinematic Gradient Overlay for perfect typography contrast */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 50% 45%, rgba(26, 15, 8, 0.35) 0%, rgba(22, 13, 8, 0.75) 70%, rgba(18, 10, 6, 0.95) 100%)',
              }}
            />

            {/* Subtle Vertical Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#160D08] via-transparent to-[#160D08]/80 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#160D08]/60 via-transparent to-[#160D08]/60 pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Campaign Content Lockup */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-20">
        {/* Editorial Subtitle Signature */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`kicker-${slide.id}`}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 mb-4 sm:mb-6"
          >
            <span className="w-8 sm:w-12 h-[1px] bg-[#C9A24B]" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#C9A24B] font-semibold">
              {slide.kicker}
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#C9A24B]" />
          </motion.div>
        </AnimatePresence>

        {/* Brand Name Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="mb-2"
        >
          <span className="text-sm sm:text-base font-light tracking-[0.4em] uppercase text-[#FBF6EE]/75 block mb-1">
            MAISON DE HAUTE COSMÉTIQUE
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#FBF6EE] leading-[1.05] drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            NAYÉ COSMÉTIQUE
          </h1>
        </motion.div>

        {/* Dynamic Slogan with Champagne Shimmer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`title-${slide.id}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mb-6"
          >
            <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#C9A24B] via-[#F3E7C9] to-[#C9A24B] tracking-wide">
              « {slide.title} »
            </h2>
          </motion.div>
        </AnimatePresence>

        {/* Quote / Subtitle */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`subtitle-${slide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-xl lg:text-2xl text-[#FBF6EE]/90 max-w-2xl font-light leading-relaxed mb-8 drop-shadow-md"
          >
            {slide.subtitle}
          </motion.p>
        </AnimatePresence>

        {/* Premium Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('produits') || document.getElementById('beaute-naturelle');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C9A24B] hover:bg-[#DFC07A] text-[#1D110A] font-semibold text-xs uppercase tracking-widest shadow-[0_4px_24px_rgba(201,162,75,0.4)] hover:shadow-[0_6px_30px_rgba(201,162,75,0.6)] transition-all duration-300 cursor-pointer"
          >
            <span>DÉCOUVRIR NOS PRODUITS</span>
            <Sparkles className="w-4 h-4 text-[#1D110A] group-hover:rotate-12 transition-transform" />
          </button>

          {/* WhatsApp Secondary CTA */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#26160E]/80 backdrop-blur-md text-[#FBF6EE] font-medium text-xs uppercase tracking-widest border border-[#C9A24B]/50 hover:border-[#C9A24B] hover:bg-[#3B2417] transition-all duration-300 shadow-lg"
          >
            <MessageCircle className="w-4 h-4 text-[#2F6B3A]" />
            <span>COMMANDER SUR WHATSAPP</span>
          </a>
        </motion.div>
      </div>

      {/* Slideshow Progress Bar & Switcher Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex items-center justify-between px-6 sm:px-12 pointer-events-none">
        {/* Slide Counter & Indicators */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlideIndex(idx)}
              aria-label={`Aller à la diapositive ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentSlideIndex === idx
                  ? 'w-10 bg-[#C9A24B]'
                  : 'w-3 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
          <span className="text-[11px] font-mono tracking-widest text-[#C9A24B] ml-2">
            0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
          </span>
        </div>

        {/* Scroll Down Indicator */}
        <div
          onClick={() => {
            document.getElementById('beaute-naturelle')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="hidden sm:flex flex-col items-center gap-1.5 text-xs uppercase tracking-widest text-[#FBF6EE]/60 hover:text-[#C9A24B] transition-colors cursor-pointer pointer-events-auto"
        >
          <span className="text-[10px] tracking-[0.25em]">Défiler</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#C9A24B] animate-bounce" />
        </div>

        {/* Prev / Next arrows */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={handlePrev}
            aria-label="Image précédente"
            className="p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#C9A24B]/60 text-white hover:text-[#C9A24B] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Image suivante"
            className="p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#C9A24B]/60 text-white hover:text-[#C9A24B] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
