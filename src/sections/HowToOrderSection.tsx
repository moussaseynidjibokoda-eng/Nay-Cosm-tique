import React from 'react';
import { Sparkles, MessageCircle, PackageCheck, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../animations/ScrollReveal';
import { BRAND_CONFIG, getWhatsAppUrl } from '../data/brand';

export const HowToOrderSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'CHOISIS TON PRODUIT',
      description: 'Découvre les soins botaniques et les coffrets disponibles.',
      icon: Sparkles,
      actionText: 'Parcourir le catalogue',
      actionHref: '#produits',
    },
    {
      num: '02',
      title: 'ÉCRIS-NOUS SUR WHATSAPP',
      description: 'Envoie directement ta demande à notre équipe dédiée à Niamey.',
      icon: MessageCircle,
      actionText: 'Lancer la discussion',
      actionHref: getWhatsAppUrl(),
      isExternal: true,
    },
    {
      num: '03',
      title: 'REÇOIS TA COMMANDE À NIAMEY',
      description: 'Nous préparons et organisons la livraison de tes soins avec amour.',
      icon: PackageCheck,
      actionText: 'Organisation locale',
      actionHref: getWhatsAppUrl('Bonjour, je souhaite connaître les modalités de livraison à Niamey.'),
      isExternal: true,
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-[#FBF6EE]">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-8 h-[1px] bg-[#C9A24B]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#C9A24B] font-semibold">
            Service Privilégié
          </span>
          <span className="w-8 h-[1px] bg-[#C9A24B]" />
        </div>

        <h2 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-[#FBF6EE] tracking-tight mb-4">
          Comment commander ?
        </h2>

        <p className="text-base sm:text-lg text-[#FBF6EE]/75 leading-relaxed font-light">
          Un échange personnalisé et chaleureux directement sur WhatsApp.
        </p>
      </div>

      {/* 3 Steps Container with Golden Connecting Line */}
      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] -translate-y-8 h-[1.5px] bg-gradient-to-r from-[#C9A24B]/10 via-[#C9A24B] to-[#C9A24B]/10 z-0" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.num} delay={idx * 0.15} direction="up">
                <div className="relative h-full flex flex-col items-center text-center p-8 rounded-3xl bg-[#21130B]/90 border border-[#C9A24B]/30 hover:border-[#C9A24B] shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  {/* Step Number Badge */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3B2417] to-[#160D08] text-[#C9A24B] flex items-center justify-center font-serif-luxury text-2xl font-bold border-2 border-[#C9A24B] shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-[#C9A24B]" />
                    </div>
                    <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#C9A24B] text-[#1D110A] text-[9px] font-bold tracking-widest uppercase">
                      Étape {step.num}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-xl font-bold text-[#FBF6EE] tracking-wide mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#FBF6EE]/75 leading-relaxed mb-6 flex-grow font-light">
                    {step.description}
                  </p>

                  <a
                    href={step.actionHref}
                    target={step.isExternal ? '_blank' : undefined}
                    rel={step.isExternal ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C9A24B] hover:text-[#DFC07A] uppercase tracking-wider group-hover:underline"
                  >
                    <span>{step.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Delivery Assurance Strip */}
      <div className="mt-12 p-6 rounded-2xl bg-[#26160E]/80 border border-[#C9A24B]/20 text-center flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm text-[#FBF6EE]/80">
        <div className="flex items-center gap-2">
          <span className="text-[#C9A24B]">✦</span>
          <span>Conseil sur-mesure & suivi de commande à Niamey</span>
        </div>
        <span className="hidden sm:inline-block text-[#C9A24B]">·</span>
        <div className="flex items-center gap-2">
          <span className="text-[#C9A24B]">✦</span>
          <span>WhatsApp direct : <strong className="text-[#C9A24B]">{BRAND_CONFIG.whatsappNumber}</strong></span>
        </div>
      </div>
    </section>
  );
};
