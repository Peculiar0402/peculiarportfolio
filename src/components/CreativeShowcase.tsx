import React, { useState, useRef } from 'react';
import { Project } from '../types/portfolio';
import { Play, Maximize2, X, Sliders, ExternalLink } from 'lucide-react';

interface CreativeShowcaseProps {
  projects: Project[];
  onSelectProject?: (project: Project) => void;
}

export const CreativeShowcase: React.FC<CreativeShowcaseProps> = ({ projects, onSelectProject }) => {
  // Before-After comparison slider state
  const [sliderPosition, setSliderPosition] = useState(52);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter projects that have actual content and images
  const activeProjectsWithMedia = projects.filter(
    (p) =>
      (p.coverImage && p.coverImage.trim().length > 0) ||
      (p.brandLogoImage && p.brandLogoImage.trim().length > 0) ||
      (p.media && p.media.length > 0)
  );

  // Selected project for before/after comparison
  const comparisonProject =
    activeProjectsWithMedia.find(
      (p) =>
        p.category === 'Memecoins' ||
        p.category === 'Casino & Betting' ||
        p.category === 'DEX & Launchpad' ||
        p.category === 'Web3 Gaming' ||
        p.category === 'AI Video'
    ) || activeProjectsWithMedia[0];

  const comparisonImage =
    comparisonProject?.coverImage ||
    comparisonProject?.brandLogoImage ||
    '/src/assets/images/showcase_before_after_1794348743041.jpg';

  // Lightbox state
  const [activeItem, setActiveItem] = useState<{
    title: string;
    brandName?: string;
    category?: string;
    type: 'image' | 'video';
    mediaUrl: string;
    description: string;
    relatedProject?: Project;
  } | null>(null);

  const handleSliderMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleSliderMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleSliderMove(e.clientX);
    }
  };

  // Compile showcase cards from active projects first
  const showcaseCards = activeProjectsWithMedia.map((p) => ({
    id: p.id,
    title: p.title || p.brandName || 'Creative Deliverable',
    brandName: p.brandName,
    category: p.category,
    image: p.coverImage || p.brandLogoImage || '/src/assets/images/showcase_ai_cyberpunk_1794348743010.jpg',
    type: (p.category === 'Memecoins' || p.category === 'AI Video' || p.category === 'Video Editing' ? 'video' : 'image') as 'video' | 'image',
    subtitle: p.shortDescription || p.services.join(' · '),
    description: p.fullOverview || p.shortDescription || 'High-fidelity creative asset crafted for brand distribution.',
    project: p,
  }));

  // Fallback defaults if user hasn't added many projects yet
  const defaultShowcaseFallbacks = [
    {
      id: 'default-1',
      title: 'DogeMax DexScreener #1 Trending Blitz',
      brandName: 'DogeMax Token',
      category: 'MEMECOIN RAID',
      image: '/src/assets/images/showcase_ai_cyberpunk_1794348743010.jpg',
      type: 'video' as const,
      subtitle: 'DexScreener Trending + 35 Telegram Alpha Callers',
      description: 'High-octane viral memecoin launch campaign driving peak $14.2M 24h trading volume.',
    },
    {
      id: 'default-2',
      title: 'StakeVolt High-Roller VIP Acquisition',
      brandName: 'StakeVolt Casino',
      category: 'CRYPTO BETTING',
      image: '/src/assets/images/showcase_brand_commercial_1794348742458.jpg',
      type: 'image' as const,
      subtitle: 'Streamer Raids & High-Roller Player Funnels',
      description: 'Web3 casino player onboarding delivering 4,800 active crypto depositors and $2.8M wagered.',
    },
    {
      id: 'default-3',
      title: 'ApexLaunch DEX & Multi-Chain IDO',
      brandName: 'ApexLaunch DEX',
      category: 'DEX & LAUNCHPAD',
      image: '/src/assets/images/hero_peculiar_cinematic_1794348742341.jpg',
      type: 'image' as const,
      subtitle: 'Liquidity Hype & Trading Volume Sprints',
      description: 'Comprehensive token launchpad campaign generating $8.6M initial volume and sold-out IDO.',
    },
  ];

  // Display project cards; if less than 3, supplement with default fallbacks
  const displayCards =
    showcaseCards.length >= 3
      ? showcaseCards
      : [...showcaseCards, ...defaultShowcaseFallbacks.slice(showcaseCards.length)];

  return (
    <section id="showcase" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400 mb-2">
            WEB3 CAMPAIGN VISUALS &amp; PROMOTION VAULT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            My Creative &amp; Promotional Showcase
          </h2>
          <p className="text-zinc-400 text-sm mt-3">
            High-octane viral campaign assets, meme engineering, DEX launch graphics, and teasers engineered to stop the scroll and onboard crypto natives.
          </p>
        </div>

        {/* Highlight 1: Interactive Before & After VFX / Color Grading Comparison Slider */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                <span>INTERACTIVE CRAFT BREAKDOWN</span>
              </div>
              <h3 className="text-xl font-bold text-white font-display mt-1">
                {comparisonProject?.title
                  ? `${comparisonProject.title} — Campaign Grade &amp; VFX Depth`
                  : 'Organic Outreach vs. Coordinated Multi-Channel Viral Blitz'}
              </h3>
            </div>
            <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
              <span>Drag slider to compare grading depth</span>
            </div>
          </div>

          {/* Interactive Splitter Container */}
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-video sm:aspect-[21/9] w-full rounded-2xl overflow-hidden border border-zinc-800 bg-black cursor-ew-resize select-none shadow-2xl group"
          >
            {/* Background: After (Final Graded / VFX) Image */}
            <img
              src={comparisonImage}
              alt="After: Final ACES Graded Frame"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/75 backdrop-blur-md rounded-md border border-amber-400/30 text-xs font-mono text-amber-300">
              AFTER: FINAL ACES GRADE &amp; VFX
            </div>

            {/* Foreground: Before (Flat Raw Log with low saturation & contrast simulation) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={comparisonImage}
                alt="Before: Raw Log Frame"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  height: '100%',
                  filter: 'saturate(0.25) contrast(0.6) brightness(1.28)',
                }}
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/75 backdrop-blur-md rounded-md border border-white/10 text-xs font-mono text-zinc-300">
                BEFORE: RAW FLAT SENSOR CAPTURE
              </div>
            </div>

            {/* Draggable Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-amber-400 z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-lg shadow-amber-400/50 cursor-ew-resize">
                <Sliders className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>
        </div>

        {/* Visual Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCards.map((card) => (
            <div
              key={card.id}
              onClick={() =>
                setActiveItem({
                  title: card.title,
                  brandName: card.brandName,
                  category: card.category,
                  type: card.type,
                  mediaUrl: card.image,
                  description: card.description,
                  relatedProject: 'project' in card ? card.project : undefined,
                })
              }
              className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[4/3] cursor-pointer shadow-xl transition-all duration-300 hover:border-amber-400/40"
            >
              <img
                src={card.image}
                alt={card.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent p-5 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-mono text-amber-400 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    {card.category}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-md">
                    {card.type === 'video' ? (
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    ) : (
                      <Maximize2 className="w-3.5 h-3.5" />
                    )}
                  </span>
                </div>
                <div>
                  {card.brandName && (
                    <div className="text-[11px] font-mono text-amber-300/80 mb-0.5 uppercase tracking-wide">
                      {card.brandName}
                    </div>
                  )}
                  <h4 className="text-base font-bold text-white font-display">{card.title}</h4>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-1">{card.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Video Popup Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/50">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400">
                  {activeItem.category || activeItem.type.toUpperCase()} PREVIEW
                </span>
                <h3 className="text-base font-bold text-white">
                  {activeItem.title}
                  {activeItem.brandName ? ` · ${activeItem.brandName}` : ''}
                </h3>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label="Close media preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Body */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <img
                src={activeItem.mediaUrl}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full object-contain"
              />

              {activeItem.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-700/80 text-center max-w-sm">
                    <div className="w-12 h-12 rounded-full bg-amber-400 text-black flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                    <div className="text-xs font-semibold text-white mb-1">
                      Directorial Reel Available
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      Full 4K master available upon client inquiry or private screening link.
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer description & Case study link */}
            <div className="p-5 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-zinc-900/40">
              <p className="text-xs text-zinc-300 max-w-xl">{activeItem.description}</p>
              <div className="flex items-center gap-3">
                {activeItem.relatedProject && onSelectProject && (
                  <button
                    onClick={() => {
                      const proj = activeItem.relatedProject;
                      setActiveItem(null);
                      if (proj) onSelectProject(proj);
                    }}
                    className="px-4 py-1.5 text-xs font-medium text-amber-300 border border-amber-400/40 hover:bg-amber-400/10 rounded-lg flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Project Case Study</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-4 py-1.5 text-xs font-medium text-black bg-amber-400 hover:bg-amber-300 rounded-lg cursor-pointer"
                >
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

