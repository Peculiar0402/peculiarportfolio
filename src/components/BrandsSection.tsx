import React from 'react';
import { INITIAL_BRANDS } from '../data/initialData';
import { BrandPartner } from '../types/portfolio';
import { ArrowUpRight } from 'lucide-react';

interface BrandsSectionProps {
  onBrandClick: (projectId: string) => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ onBrandClick }) => {
  return (
    <section id="brands" className="py-20 sm:py-28 relative bg-zinc-950 border-t border-b border-zinc-900/80 overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400 mb-2">
            TRUSTED PARTNERSHIPS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Brands I&apos;ve Worked With
          </h2>
          <p className="text-zinc-400 text-sm mt-3">
            Collaborating with ambitious protocols, luxury ateliers, streaming houses, and consumer tech pioneers.
          </p>
        </div>

        {/* Interactive Brand Grid with Monogram Crests */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {INITIAL_BRANDS.map((brand: BrandPartner) => (
            <button
              key={brand.id}
              onClick={() => onBrandClick(brand.projectId)}
              className="group p-6 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-amber-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer relative overflow-hidden shadow-lg"
            >
              {/* Subtle top-right arrow indicating clickability */}
              <div className="absolute top-3 right-3 text-zinc-600 group-hover:text-amber-400 transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>

              {/* Brand Logo Symbol */}
              <div
                className="w-14 h-14 rounded-xl bg-black border border-white/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-md"
                style={{
                  boxShadow: `0 0 20px -5px ${brand.accent}25`,
                }}
              >
                <span className="font-mono font-extrabold text-lg tracking-wider text-white">
                  {brand.symbol}
                </span>
              </div>

              {/* Brand Name */}
              <div className="font-bold text-sm text-zinc-200 group-hover:text-amber-300 transition-colors">
                {brand.name}
              </div>

              {/* Category */}
              <div className="text-[11px] font-mono text-zinc-500 mt-1">
                {brand.category}
              </div>

              {/* Click prompt */}
              <div className="mt-3 text-[10px] font-mono uppercase tracking-wider text-amber-400/0 group-hover:text-amber-400/90 transition-all">
                View Case Study
              </div>
            </button>
          ))}
        </div>

        {/* Continuous Animated Marquee Strip */}
        <div className="mt-14 pt-8 border-t border-zinc-900/80 flex items-center justify-center">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-600 flex items-center gap-6 overflow-hidden select-none">
            <span>AETHER PROTOCOL</span>
            <span aria-hidden="true" className="text-zinc-800">·</span>
            <span>AURELIA MAISON</span>
            <span aria-hidden="true" className="text-zinc-800">·</span>
            <span>VANGUARD STUDIOS</span>
            <span aria-hidden="true" className="text-zinc-800">·</span>
            <span>KINETIX ATHLETICS</span>
            <span aria-hidden="true" className="text-zinc-800">·</span>
            <span>SOLSTICE NETWORK</span>
            <span aria-hidden="true" className="text-zinc-800">·</span>
            <span>CHRONOS ATELIER</span>
          </div>
        </div>

      </div>
    </section>
  );
};
