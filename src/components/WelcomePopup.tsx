import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, X, Film, Zap } from 'lucide-react';

interface WelcomePopupProps {
  isOpen: boolean;
  onEnter: () => void;
  onClose: () => void;
}

export const WelcomePopup: React.FC<WelcomePopupProps> = ({ isOpen, onEnter, onClose }) => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    
    // Simulate luxury introductory sequence progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        return prev + 4;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in">
      {/* Background radial glow accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/15 via-purple-600/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-purple-700/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Skip button in top right */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors p-2 text-xs font-mono tracking-wider flex items-center gap-1.5 z-10"
        title="Skip intro"
        aria-label="Skip intro"
      >
        <span>SKIP INTRO</span>
        <X className="w-4 h-4" />
      </button>

      {/* Main Welcome Card */}
      <div className="relative w-full max-w-xl mx-auto p-8 sm:p-12 rounded-2xl bg-zinc-950/80 border border-zinc-800 shadow-2xl text-center flex flex-col items-center">
        {/* Subtle gold crest icon */}
        <div className="w-14 h-14 mb-8 rounded-xl bg-gradient-to-b from-amber-400/20 to-purple-600/20 border border-amber-400/30 flex items-center justify-center shadow-lg shadow-amber-500/10">
          <Film className="w-6 h-6 text-amber-300" />
        </div>

        {/* Studio Identifier */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-amber-400/90 uppercase mb-4">
          <Zap className="w-3.5 h-3.5" />
          <span>WEB3 GROWTH &amp; AUDIENCE ACQUISITION</span>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 font-display">
          WELCOME TO <br />
          <span className="text-gold-gradient">PECULIAR PORTFOLIO</span>
        </h1>

        {/* Subtext */}
        <p className="text-zinc-300 text-sm sm:text-base font-normal max-w-md mx-auto leading-relaxed mb-8">
          Helping brands find their audience and driving active users across Memecoins, Crypto Casinos, Betting, Prediction Markets, DEXs &amp; Gaming.
        </p>

        {/* Introductory Progress Bar */}
        <div className="w-full max-w-xs mb-8">
          <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-amber-300 to-purple-500 transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[11px] font-mono text-zinc-500 mt-2">
            <span>{isReady ? 'PORTFOLIO READY' : 'SYNCHRONIZING CAMPAIGNS'}</span>
            <span className="tabular-nums text-amber-400/80">{progress}%</span>
          </div>
        </div>

        {/* CTA Enter Button */}
        <button
          onClick={onEnter}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
        >
          <span>ENTER PORTFOLIO</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Discreet bottom note */}
        <div className="mt-8 pt-6 border-t border-zinc-900 w-full flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-zinc-500 font-mono">
          <span>Memecoins</span>
          <span aria-hidden="true">·</span>
          <span>Crypto Casinos &amp; Betting</span>
          <span aria-hidden="true">·</span>
          <span>DEX &amp; Launchpad</span>
          <span aria-hidden="true">·</span>
          <span>Web3 Gaming</span>
        </div>
      </div>
    </div>
  );
};
