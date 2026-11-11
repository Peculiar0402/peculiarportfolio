import React from 'react';
import { Project } from '../types/portfolio';
import { ArrowUpRight } from 'lucide-react';
import { normalizeImageUrl, handleImageFallback } from '../utils/imageUtils';

interface BrandsSectionProps {
  projects: Project[];
  onBrandClick: (projectId: string) => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ projects, onBrandClick }) => {
  // Extract active brand projects (exclude completely blank templates without brand or title)
  const brandProjects = projects.filter(
    (p) =>
      p.id !== 'proj-template' &&
      ((p.brandName && p.brandName.trim().length > 0) || (p.title && p.title.trim().length > 0))
  );

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
            TRUSTED PARTNERSHIPS &amp; PROTOCOLS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Brands &amp; Protocols I&apos;ve Worked With
          </h2>
          <p className="text-zinc-400 text-sm mt-3">
            Collaborating with ambitious Web3 projects, memecoins, crypto casinos, prediction markets, and DEX ecosystems to find their audience and scale active users.
          </p>
        </div>

        {/* Interactive Brand Grid with Project Images */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {brandProjects.map((project) => {
            const rawBrandImage = project.brandLogoImage || project.coverImage;
            const brandImage = rawBrandImage ? normalizeImageUrl(rawBrandImage, project.category) : '';
            const brandLogoText =
              project.brandLogoText ||
              (project.brandName ? project.brandName.slice(0, 2).toUpperCase() : 'PE');

            return (
              <button
                key={project.id}
                onClick={() => onBrandClick(project.id)}
                className="group p-5 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-amber-400/50 transition-all duration-300 flex flex-col items-center justify-between text-center cursor-pointer relative overflow-hidden shadow-lg"
              >
                {/* Subtle top-right arrow indicating clickability */}
                <div className="absolute top-3 right-3 text-zinc-600 group-hover:text-amber-400 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>

                {/* Brand Visual Media Container */}
                <div className="w-full flex justify-center mb-4">
                  {brandImage ? (
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-black border border-zinc-700/80 group-hover:border-amber-400/50 transition-all shadow-md group-hover:scale-105">
                      <img
                        src={brandImage}
                        alt={project.brandName || project.title}
                        loading="lazy"
                        onError={(e) => handleImageFallback(e, project.category)}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                      <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-mono font-bold text-amber-300 border border-white/10">
                        {brandLogoText}
                      </div>
                    </div>
                  ) : (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-transform group-hover:scale-105 shadow-md">
                      <span className="font-mono font-extrabold text-lg tracking-wider text-amber-300">
                        {brandLogoText}
                      </span>
                    </div>
                  )}
                </div>

                {/* Brand Name */}
                <div className="w-full">
                  <div className="font-bold text-sm text-zinc-200 group-hover:text-amber-300 transition-colors truncate">
                    {project.brandName || project.title}
                  </div>

                  {/* Category */}
                  <div className="text-[11px] font-mono text-zinc-500 mt-1 truncate">
                    {project.brandCategory || project.category}
                  </div>

                  {/* Click prompt */}
                  <div className="mt-3 text-[10px] font-mono uppercase tracking-wider text-amber-400/0 group-hover:text-amber-400/90 transition-all">
                    View Project Case Study
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Continuous Animated Marquee Strip with Active Brand Names */}
        {brandProjects.length > 0 && (
          <div className="mt-14 pt-8 border-t border-zinc-900/80 flex items-center justify-center">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 select-none text-center">
              {brandProjects.map((p, idx) => (
                <React.Fragment key={p.id}>
                  {idx > 0 && <span aria-hidden="true" className="text-zinc-800">·</span>}
                  <span className="hover:text-amber-400 transition-colors">
                    {(p.brandName || p.title).toUpperCase()}
                  </span>
                </React.Fragment>
              ))}
              <span aria-hidden="true" className="text-zinc-800">·</span>
              <span className="text-zinc-600">DIRECTORIAL ARCHIVE</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
