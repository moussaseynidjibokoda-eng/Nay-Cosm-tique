import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';
import { PageTransition } from '../animations/PageTransition';

export const NotFound: React.FC = () => {
  return (
    <PageTransition className="min-h-[75vh] flex items-center justify-center px-4 py-24 text-center text-[#FBF6EE]">
      <div className="max-w-md mx-auto p-8 sm:p-10 rounded-3xl bg-[#21130B] border border-[#C9A24B]/30 shadow-2xl">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#C9A24B]/10 flex items-center justify-center text-[#C9A24B] border border-[#C9A24B]/20">
          <Sparkles className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase tracking-[0.25em] text-[#C9A24B] font-semibold block mb-2">
          Page Introuvable
        </span>

        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#FBF6EE] mb-4">
          Un soin introuvable
        </h1>

        <p className="text-sm text-[#FBF6EE]/75 leading-relaxed mb-8 font-light">
          La page ou la référence que vous recherchez n'est pas disponible ou a été déplacée.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C9A24B] hover:bg-[#DFC07A] text-[#1D110A] text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
          >
            <Home className="w-4 h-4 text-[#1D110A]" />
            <span>Retour à l'accueil</span>
          </Link>
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-[#FBF6EE] border border-[#C9A24B]/30 text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#C9A24B]" />
            <span>Découvrir nos soins</span>
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};
