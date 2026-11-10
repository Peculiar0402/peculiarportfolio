import React from 'react';
import { ArrowUp, Lock, Sparkles, Play } from 'lucide-react';

interface FooterProps {
  onReplayWelcome: () => void;
  onOpenAdmin: () => void;
  isAdminLoggedIn: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onReplayWelcome,
  onOpenAdmin,
  isAdminLoggedIn,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-zinc-900 py-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-zinc-900">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-extrabold text-xl font-display tracking-wider">
              <span>PECULIAR</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </div>
            <p className="text-xs text-zinc-500 max-w-md">
              Creativity, Innovation and Results — A Showcase of My Digital Journey.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <button
              onClick={onReplayWelcome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
            >
              <Play className="w-3 h-3 text-amber-400" />
              <span>Replay Welcome Intro</span>
            </button>

            <button
              onClick={onOpenAdmin}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                isAdminLoggedIn
                  ? 'bg-amber-400/10 text-amber-300 border-amber-400/30'
                  : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border-zinc-800'
              }`}
            >
              <Lock className="w-3 h-3 text-amber-400" />
              <span>{isAdminLoggedIn ? 'Admin Panel Active' : 'Admin Login'}</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Peculiar Portfolio. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Directorial &amp; AI Motion Suite</span>
            <span aria-hidden="true">·</span>
            <span>Worldwide Availability</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
