import React from 'react';
import { kits } from '../data/kits';
import { KitCard } from '../components/KitCard';
import { EmptyState } from '../components/EmptyState';

export const KitsSection: React.FC = () => {
  return (
    <section id="kits" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-[#FBF6EE]">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-8 h-[1px] bg-[#C9A24B]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#C9A24B] font-semibold">
            Rituels d'Exception
          </span>
          <span className="w-8 h-[1px] bg-[#C9A24B]" />
        </div>

        <h2 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-[#FBF6EE] tracking-tight mb-4">
          Nos coffrets & rituels
        </h2>

        <p className="text-base sm:text-lg text-[#FBF6EE]/75 leading-relaxed font-light">
          Des associations de soins pensées pour accompagner chaque étape de votre routine beauté.
        </p>
      </div>

      {/* Grid or Elegant Photographic Empty State */}
      {kits.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {kits.map((kit, idx) => (
            <KitCard key={kit.id || kit.slug} kit={kit} index={idx} />
          ))}
        </div>
      ) : (
        <EmptyState
          type="kits"
          message="Nos coffrets arrivent bientôt"
          submessage="Nos rituels beauté corps & cheveux sont minutieusement préparés dans nos ateliers à Niamey. Écrivez à notre maison sur WhatsApp pour composer un rituel personnalisé."
        />
      )}
    </section>
  );
};
