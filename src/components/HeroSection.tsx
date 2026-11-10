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
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero: 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:pr-4">
            
            {/* Kicker */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-amber-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>DIRECTOR &amp; DIGITAL CREATOR</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400 font-sans normal-case tracking-normal">PECULIAR</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.08] [text-wrap:balance]">
              Turning Creative Ideas Into <br className="hidden sm:inline" />
              <span className="text-gold-gradient">Digital Experiences.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              I&apos;m a creative digital professional passionate about storytelling, content creation,
              AI-powered videos, digital campaigns and building engaging online experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-200 cursor-pointer"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onCollaborate}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-700/80 hover:border-zinc-500 rounded-xl transition-all duration-200 cursor-pointer"
              >
                <span>LET&apos;S COLLABORATE</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </button>
            </div>

            {/* Quick Specialization Tags - zero-pill text */}
            <div className="pt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-zinc-400 font-medium">
              <span>AI Video Direction</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>Cinematic Color &amp; VFX</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>Web3 Launches</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>Brand Commercials</span>
            </div>
          </div>

          {/* Right Column: Large Visual Media Container */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="relative w-full h-full min-h-[380px] lg:min-h-[440px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950/80 shadow-2xl group">
              <img
                src="/src/assets/images/hero_peculiar_cinematic_1794348742341.jpg"
                alt="Peculiar in studio directing AI visuals and color suite"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* Scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              {/* Top status indicator */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="px-3 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300">
                  STUDIO ARCHIVE 2026
                </div>
                <div className="px-3 py-1 rounded-md bg-amber-500/20 backdrop-blur-md border border-amber-400/30 text-[11px] font-mono text-amber-300">
                  ACTIVE AVAILABILITY
                </div>
              </div>

              {/* Play / Interactive Reel Trigger Card at bottom */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800/90 flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="text-xs font-semibold text-white tracking-wide">
                    2026 Creative Showreel
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    AI Visuals · Cinematic Grading · Sound
                  </div>
                </div>

                <button
                  onClick={onOpenReel}
                  className="w-10 h-10 rounded-full bg-amber-400 hover:bg-amber-300 text-black flex items-center justify-center shadow-md shadow-amber-400/30 transition-transform duration-200 hover:scale-110 cursor-pointer shrink-0"
                  title="Watch Showreel"
                  aria-label="Watch Showreel"
                >
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width KPI Strip Below Hero Split */}
        <div className="mt-14 pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              {totalProjects}+
            </div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono mt-1">
              Projects Completed
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              12M+
            </div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono mt-1">
              Organic Audience Reach
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              140+
            </div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono mt-1">
              Deliverables Produced
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
              98.4%
            </div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono mt-1">
              Client Satisfaction
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
