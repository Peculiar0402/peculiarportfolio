import React from 'react';
import { INITIAL_SERVICES } from '../data/initialData';
import { Sparkles, Video, Film, Share2, Compass, Cpu, Palette, ArrowUpRight, Flame } from 'lucide-react';
import { ServiceItem } from '../types/portfolio';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'serv-1':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'serv-2':
        return <Film className="w-5 h-5 text-purple-400" />;
      case 'serv-3':
        return <Video className="w-5 h-5 text-blue-400" />;
      case 'serv-4':
        return <Share2 className="w-5 h-5 text-rose-400" />;
      case 'serv-5':
        return <Flame className="w-5 h-5 text-amber-500" />;
      case 'serv-6':
        return <Compass className="w-5 h-5 text-emerald-400" />;
      case 'serv-7':
        return <Palette className="w-5 h-5 text-indigo-400" />;
      case 'serv-8':
      default:
        return <Cpu className="w-5 h-5 text-amber-300" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400 mb-2">
            CORE CAPABILITIES &amp; OFFERINGS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            High-Impact Creative Services
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            Bridging cinematic artistry, generative AI engineering, and commercial retention to scale brand presence.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INITIAL_SERVICES.map((service: ServiceItem, index: number) => {
            const editorialIndex = String(index + 1).padStart(2, '0');

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-amber-400/40 shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Top Header: Icon + Editorial Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-amber-400/30 transition-colors">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-xs font-mono text-zinc-600 group-hover:text-amber-400 transition-colors">
                      {editorialIndex}.
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors font-display">
                    {service.title}
                  </h3>
                  <div className="text-xs text-amber-400/90 font-mono mt-1 mb-3">
                    {service.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Deliverables Bullet List */}
                  <div className="pt-4 border-t border-zinc-900 space-y-1.5 mb-5">
                    <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                      Key Deliverables
                    </div>
                    {service.deliverables.map((deliv, i) => (
                      <div key={i} className="text-xs text-zinc-300 flex items-start gap-1.5">
                        <span className="text-amber-400">·</span>
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Timeline & Inquire CTA */}
                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between mt-auto">
                  <div className="text-[11px] font-mono text-zinc-500">
                    Est. {service.timeline}
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
