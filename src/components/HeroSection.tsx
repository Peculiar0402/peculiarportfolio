import React from 'react';
import { ArrowDown, ArrowUpRight, Play, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExploreWork: () => void;
  onCollaborate: () => void;
  onOpenReel?: () => void;
  totalProjects: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onCollaborate,
  onOpenReel,
  totalProjects,
}) => {
  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-executive-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split-Screen Hero: 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:pr-4">
            
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#f5deaa] text-[11px] font-mono tracking-[0.2em] uppercase w-fit">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]" />
              <span>EXECUTIVE WEB3 GROWTH &amp; PROMOTION SUITE</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.08] [text-wrap:balance]">
              Engineering Audience Growth &amp; <br className="hidden sm:inline" />
              <span className="text-gold-gradient">Scaling Web3 Protocols.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              I help executive teams, founders, and protocols acquire their ideal audience and drive verified active users. Specialized in high-velocity promotional campaigns across <span className="text-white font-semibold">Memecoins, Web3 Gaming, Crypto Betting &amp; Casinos, Prediction Markets, DEXs, and Launchpads</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono font-semibold uppercase tracking-[0.15em] text-black bg-gradient-to-r from-[#fae8c8] via-[#e5c178] to-[#c59d4c] hover:brightness-110 rounded-lg shadow-lg shadow-[#c59d4c]/20 transition-all duration-200 cursor-pointer"
              >
                <span>EXPLORE CAMPAIGNS</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onCollaborate}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono font-semibold uppercase tracking-[0.15em] text-white bg-[#101015] hover:bg-[#181822] border border-white/[0.12] hover:border-[#d4af37]/60 rounded-lg transition-all duration-200 cursor-pointer"
              >
                <span>EXECUTIVE DESK</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d4af37]" />
              </button>
            </div>

            {/* Quick Specialization Tags - hairline executive specs */}
            <div className="pt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-mono text-zinc-400">
              <span className="text-zinc-300">Memecoins</span>
              <span aria-hidden="true" className="text-zinc-700">/</span>
              <span className="text-zinc-300">Crypto Casinos &amp; Betting</span>
              <span aria-hidden="true" className="text-zinc-700">/</span>
              <span className="text-zinc-300">DEX &amp; Launchpads</span>
              <span aria-hidden="true" className="text-zinc-700">/</span>
              <span className="text-zinc-300">Prediction Markets</span>
              <span aria-hidden="true" className="text-zinc-700">/</span>
              <span className="text-zinc-300">Web3 Gaming</span>
            </div>
          </div>

          {/* Right Column: Large Visual Media Container with Obsidian Frame */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="relative w-full aspect-[4/3] sm:aspect-auto sm:h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] rounded-xl overflow-hidden obsidian-panel p-2 shadow-2xl group">
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-black">
                <img
                  src="/images/hero_peculiar_cinematic_1794348742341.jpg"
                  alt="Peculiar Web3 Growth & Promotion Suite"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('/src/assets/images/')) {
                      target.src = '/src/assets/images/hero_peculiar_cinematic_1794348742341.jpg';
                    }
                  }}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent pointer-events-none" />

                {/* Top status indicator */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  <div className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/[0.1] text-[10px] font-mono text-zinc-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>DESK ACTIVE 2026</span>
                  </div>
                  <div className="px-2.5 py-1 rounded bg-[#d4af37]/15 backdrop-blur-md border border-[#d4af37]/30 text-[10px] font-mono text-[#f5deaa]">
                    WORLDWIDE DISPATCH
                  </div>
                </div>

                {/* Play / Interactive Reel Trigger Card at bottom */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-lg bg-[#0a0a0e]/90 backdrop-blur-md border border-white/[0.1] flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="text-xs font-semibold text-white tracking-wide font-display">
                      Web3 Campaign Showreel
                    </div>
                    <div className="text-[10px] text-zinc-400 font-mono">
                      Viral Raids · DexScreener Trending · User Influx
                    </div>
                  </div>

                  <button
                    onClick={onOpenReel}
                    className="w-9 h-9 rounded-md bg-gradient-to-r from-[#fae8c8] via-[#e5c178] to-[#c59d4c] hover:brightness-110 text-black flex items-center justify-center shadow-md shadow-[#c59d4c]/30 transition-transform duration-200 hover:scale-105 cursor-pointer shrink-0"
                    title="Watch Web3 Showreel"
                    aria-label="Watch Web3 Showreel"
                  >
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width Obsidian KPI Strip Below Hero Split */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 rounded-xl obsidian-panel">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              {totalProjects}+
            </div>
            <div className="text-[11px] text-zinc-400 uppercase tracking-[0.15em] font-mono mt-1">
              Campaigns Executed
            </div>
          </div>

          <div className="p-4 rounded-xl obsidian-panel">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              15M+
            </div>
            <div className="text-[11px] text-zinc-400 uppercase tracking-[0.15em] font-mono mt-1">
              Crypto Community Reach
            </div>
          </div>

          <div className="p-4 rounded-xl obsidian-panel">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              450K+
            </div>
            <div className="text-[11px] text-zinc-400 uppercase tracking-[0.15em] font-mono mt-1">
              Active Users Onboarded
            </div>
          </div>

          <div className="p-4 rounded-xl obsidian-panel border-[#d4af37]/30">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#f5deaa] font-mono tabular-nums">
              99.2%
            </div>
            <div className="text-[11px] text-zinc-400 uppercase tracking-[0.15em] font-mono mt-1">
              Campaign Success Rate
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
