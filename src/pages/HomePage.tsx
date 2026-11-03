import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../sections/Hero';
import { SignatureBar } from '../sections/SignatureBar';
import { PhotographicCampaignSections } from '../sections/PhotographicCampaignSections';
import { ProductsSection } from '../sections/ProductsSection';
import { KitsSection } from '../sections/KitsSection';
import { StorySection } from '../sections/StorySection';
import { HowToOrderSection } from '../sections/HowToOrderSection';
import { ContactSection } from '../sections/ContactSection';
import { PageTransition } from '../animations/PageTransition';

export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location.hash]);

  return (
    <PageTransition className="space-y-0 bg-[#160D08]">
      {/* 1. Cinematic Full-Screen Multi-Photo Hero Slideshow */}
      <Hero />

      {/* 2. Signature Running Marquee Strip */}
      <SignatureBar />

      {/* 3. Immersive Photographic Campaign Sections:
          - Beauté Naturelle (« La nature révèle votre beauté »)
          - Soins Capillaires (« Prenez soin de vos cheveux, naturellement »)
          - Soins du Corps (« Chaque détail mérite le meilleur de la nature »)
          - Univers Botanique Nayé (« L'essence de la beauté naturelle »)
      */}
      <PhotographicCampaignSections />

      {/* 4. Catalogue Produits */}
      <ProductsSection />

      {/* 5. Coffrets Rituels & Kits */}
      <KitsSection />

      {/* 6. Storytelling / Pourquoi Nayé ? */}
      <StorySection />

      {/* 7. Comment Commander en 3 étapes */}
      <HowToOrderSection />

      {/* 8. Contact Immersif Chocolat & Or */}
      <ContactSection />
    </PageTransition>
  );
};
