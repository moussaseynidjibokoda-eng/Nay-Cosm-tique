import React, { useState } from 'react';
import { motion } from 'motion/react';
import { products, ProductCategory } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { EmptyState } from '../components/EmptyState';

export const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('Tous');

  const categories: ProductCategory[] = ['Tous', 'Cheveux', 'Visage', 'Corps', 'Lèvres'];

  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'Tous') return true;
    return p.categorie.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <section id="produits" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-[#FBF6EE]">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-8 h-[1px] bg-[#C9A24B]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#C9A24B] font-semibold">
            Catalogue Botanique
          </span>
          <span className="w-8 h-[1px] bg-[#C9A24B]" />
        </div>

        <h2 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-[#FBF6EE] tracking-tight mb-4">
          Nos créations & soins
        </h2>

        <p className="text-base sm:text-lg text-[#FBF6EE]/75 leading-relaxed font-light">
          Découvrez l'univers photographique et sensoriel de Nayé Cosmétique.
        </p>
      </div>

      {/* Interactive Category Filter Controls (Dark chocolate segmented bar) */}
      <div className="flex items-center justify-center mb-14 overflow-x-auto pb-2 scrollbar-none">
        <div className="inline-flex p-1.5 rounded-full bg-[#26160E] border border-[#C9A24B]/30 shadow-lg">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 sm:px-7 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 whitespace-nowrap focus:outline-none ${
                  isActive
                    ? 'bg-[#C9A24B] text-[#1D110A] font-semibold shadow-md'
                    : 'text-[#FBF6EE]/70 hover:text-[#FBF6EE] hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Grid or Elegant Photographic Empty State */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod, idx) => (
            <ProductCard key={prod.id || prod.slug} product={prod} index={idx} />
          ))}
        </div>
      ) : (
        <EmptyState
          type="produits"
          message="Nos produits arrivent bientôt"
          submessage="Notre gamme de soins botaniques haute couture faits à Niamey est en cours d'élaboration. Contactez-nous sur WhatsApp pour découvrir en avant-première les premières bouteilles numérotées."
        />
      )}
    </section>
  );
};
