import React, { useState, useRef } from 'react';
import { INITIAL_SHOWCASE_ITEMS } from '../data/initialData';
import { Play, Maximize2, X, Sliders, Sparkles, Film, Image as ImageIcon } from 'lucide-react';

export const CreativeShowcase: React.FC = () => {
  // Before-After comparison slider state
  const [sliderPosition, setSliderPosition] = useState(52);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lightbox state
  const [activeItem, setActiveItem] = useState<{
    title: string;
    type: string;
    mediaUrl: string;
    description: string;
    youtubeId?: string;
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

  return (
    <section id="showcase" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400 mb-2">
            VISUAL EXPERIMENTS &amp; REELS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            My Creative Showcase
          </h2>
          <p className="text-zinc-400 text-sm mt-3">
            Explorations across generative AI video, cinematic color suites, macro commercial photography, and interactive craft.
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
                Raw Log Sensor vs. ACES Film Emulation &amp; VFX
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
              src="/src/assets/images/showcase_before_after_1794348743041.jpg"
              alt="After: Final ACES Graded Frame"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/75 backdrop-blur-md rounded-md border border-amber-400/30 text-xs font-mono text-amber-300">
              AFTER: ACES GRADE &amp; VOLUMETRIC VFX
            </div>

            {/* Foreground: Before (Flat Raw Log with low saturation & contrast simulation) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/src/assets/images/showcase_before_after_1794348743041.jpg"
                alt="Before: Raw Log Frame"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  height: '100%',
                  filter: 'saturate(0.3) contrast(0.65) brightness(1.25)',
                }}
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/75 backdrop-blur-md rounded-md border border-white/10 text-xs font-mono text-zinc-300">
                BEFORE: RAW CAMERA LOG (FLAT SENSOR)
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
          
          {/* Card 1: AI Cyberpunk Odyssey */}
          <div
            onClick={() =>
              setActiveItem({
                title: 'Aetherian Monolith Odyssey',
                type: 'video',
                mediaUrl: '/src/assets/images/showcase_ai_cyberpunk_1794348743010.jpg',
                description: 'Generative AI neural motion synthesis generated for decentralized worldbuilding reveal.',
              })
            }
            className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[4/3] cursor-pointer shadow-xl transition-all duration-300 hover:border-amber-400/40"
          >
            <img
              src="/src/assets/images/showcase_ai_cyberpunk_1794348743010.jpg"
              alt="AI Video Still"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-5 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-mono text-amber-400 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                  AI MOTION REEL
                </span>
                <span className="w-8 h-8 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-md">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-display">Aetherian Monolith Odyssey</h4>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-1">Midjourney v6 + Runway Gen-3 Directorial Cut</p>
              </div>
            </div>
          </div>

          {/* Card 2: Luxury Fragrance Commercial */}
          <div
            onClick={() =>
              setActiveItem({
                title: 'Aurelia Sol d’Ambre Flacon',
                type: 'image',
                mediaUrl: '/src/assets/images/showcase_brand_commercial_1794348742458.jpg',
                description: 'Macro product studio photography highlighting golden optical refractions on dark slate.',
              })
            }
            className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[4/3] cursor-pointer shadow-xl transition-all duration-300 hover:border-amber-400/40"
          >
            <img
              src="/src/assets/images/showcase_brand_commercial_1794348742458.jpg"
              alt="Brand Commercial Keyframe"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-5 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-mono text-amber-400 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                  COMMERCIAL STILL
                </span>
                <span className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center border border-white/10">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-display">Aurelia Sol d’Ambre Flacon</h4>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-1">Tactile luxury studio lighting &amp; macro optics</p>
              </div>
            </div>
          </div>

          {/* Card 3: Creative Suite Behind The Scenes */}
          <div
            onClick={() =>
              setActiveItem({
                title: 'Studio Creative Direction Suite',
                type: 'image',
                mediaUrl: '/src/assets/images/hero_peculiar_cinematic_1794348742341.jpg',
                description: 'Inside Peculiar’s dedicated DaVinci color management and AI pipeline workstation.',
              })
            }
            className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[4/3] cursor-pointer shadow-xl transition-all duration-300 hover:border-amber-400/40"
          >
            <img
              src="/src/assets/images/hero_peculiar_cinematic_1794348742341.jpg"
              alt="Studio Suite"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-5 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-mono text-purple-400 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                  STUDIO ARCHIVE
                </span>
                <span className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center border border-white/10">
                  <ImageIcon className="w-3.5 h-3.5" />
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-display">Studio Creative Direction</h4>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-1">Hardware color grading, synthesis &amp; mastering</p>
              </div>
            </div>
          </div>

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
                  {activeItem.type.toUpperCase()} PREVIEW
                </span>
                <h3 className="text-base font-bold text-white">{activeItem.title}</h3>
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
                      Full 4K ProRes master available upon client inquiry or private screening link.
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer description */}
            <div className="p-5 border-t border-zinc-800 flex items-center justify-between bg-zinc-900/40">
              <p className="text-xs text-zinc-300 max-w-xl">{activeItem.description}</p>
              <button
                onClick={() => setActiveItem(null)}
                className="px-4 py-1.5 text-xs font-medium text-black bg-amber-400 hover:bg-amber-300 rounded-lg cursor-pointer"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
