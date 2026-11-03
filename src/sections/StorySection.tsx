import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Sparkles, MapPin, Heart } from 'lucide-react';
import { ScrollReveal } from '../animations/ScrollReveal';

export const StorySection: React.FC = () => {
  const commitments = [
    {
      num: '01',
      title: 'NATUREL',
      description: 'Une attention particulière portée aux ingrédients naturels.',
      icon: Leaf,
      color: 'text-[#2F6B3A]',
      bgGlow: 'from-[#2F6B3A]/20 to-transparent',
    },
    {
      num: '02',
      title: 'EFFICACE',
      description: 'Des soins pensés pour accompagner les routines beauté.',
      icon: Sparkles,
      color: 'text-[#C9A24B]',
      bgGlow: 'from-[#C9A24B]/20 to-transparent',
    },
    {
      num: '03',
      title: 'FAIT À NIAMEY',
      description: 'Une marque implantée au Niger.',
      icon: MapPin,
      color: 'text-[#E8893A]',
      bgGlow: 'from-[#E8893A]/20 to-transparent',
    },
    {
      num: '04',
      title: 'POUR TOUTE LA FAMILLE',
      description: 'Un univers de soins accessible à toute la famille.',
      icon: Heart,
      color: 'text-[#C9A24B]',
      bgGlow: 'from-[#C9A24B]/20 to-transparent',
    },
  ];

  return (
    <section id="pourquoi-naye" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-[#FBF6EE]">
      {/* Asymmetric Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C9A24B]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A24B] font-semibold">
              Notre Philosophie
            </span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-[#FBF6EE] tracking-tight leading-[1.1]">
            La nature au cœur de votre beauté
          </h2>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          <p className="text-sm sm:text-base text-[#FBF6EE]/75 font-light leading-relaxed">
            Inspirée par la terre sahélienne et guidée par le respect des matières végétales, Nayé Cosmétique imagine des soins purs et bienfaisants.
          </p>
        </div>
      </div>

      {/* 4 Pillars Grid with Editorial Numbering and SVG Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {commitments.map((item, idx) => {
          const Icon = item.icon;
          return (
            <ScrollReveal key={item.num} delay={idx * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative h-full p-8 rounded-3xl bg-[#21130B]/90 hover:bg-[#2A180E] border border-[#C9A24B]/30 hover:border-[#C9A24B] shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Soft ambient background radial */}
                <div
                  className={`absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-to-br ${item.bgGlow} blur-xl group-hover:scale-150 transition-transform duration-500`}
                />

                {/* Top: Editorial Number & Icon */}
                <div className="relative z-10 flex items-center justify-between mb-8">
                  <span className="font-serif-luxury text-3xl font-light text-[#C9A24B] tracking-wider">
                    {item.num}
                  </span>
                  <div className={`p-3 rounded-2xl bg-black/40 border border-[#C9A24B]/30 ${item.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Middle & Bottom Content */}
                <div className="relative z-10">
                  <h3 className="font-serif-luxury text-xl font-bold text-[#FBF6EE] tracking-wide mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#FBF6EE]/75 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Bottom Bar */}
                <div className="relative z-10 mt-6 pt-4 border-t border-[#C9A24B]/20 flex items-center gap-1.5 text-[10px] text-[#C9A24B] uppercase tracking-widest font-semibold">
                  <span>Engagement Nayé</span>
                  <span>✦</span>
                </div>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};
