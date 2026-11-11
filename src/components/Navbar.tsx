import React, { useState, useEffect } from 'react';
import { Lock, Unlock, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  isAdminLoggedIn: boolean;
  onOpenAdmin: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  isAdminLoggedIn,
  onOpenAdmin,
  onNavigate,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Projects', id: 'projects' },
    { label: 'Results', id: 'results' },
    { label: 'Services', id: 'services' },
    { label: 'Brands', id: 'brands' },
    { label: 'Showcase', id: 'showcase' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060608]/92 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent border-b border-white/[0.04] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="text-left flex items-center gap-2.5 group cursor-pointer"
        >
          <span className="w-2 h-2 rotate-45 bg-[#d4af37] shadow-[0_0_10px_#d4af37] group-hover:scale-125 transition-transform" />
          <span className="font-display tracking-[0.2em] font-black text-white text-base sm:text-lg">
            PECULIAR
          </span>
          <span className="hidden sm:inline-block text-[9px] font-mono tracking-[0.2em] uppercase text-zinc-400 border-l border-zinc-800 pl-2.5 py-0.5">
            EXECUTIVE SUITE
          </span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[11px] font-mono tracking-[0.15em] uppercase">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-1 ${
                  isActive
                    ? 'text-[#f5deaa] font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#e5c178]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action + Admin lock toggle */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Admin trigger */}
          <button
            onClick={onOpenAdmin}
            className={`p-2 rounded-md text-xs transition-colors flex items-center gap-1.5 cursor-pointer ${
              isAdminLoggedIn
                ? 'bg-[#d4af37]/15 text-[#f5deaa] border border-[#d4af37]/40 shadow-[0_0_12px_rgba(212,175,55,0.2)]'
                : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.04] border border-transparent'
            }`}
            title={isAdminLoggedIn ? 'Executive Admin Active (Logged In)' : 'Executive Portal Login'}
            aria-label="Admin portal"
          >
            {isAdminLoggedIn ? (
              <>
                <Unlock className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="hidden sm:inline text-[10px] font-mono tracking-wider">ADMIN</span>
              </>
            ) : (
              <Lock className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => handleLinkClick('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.15em] font-semibold text-black bg-gradient-to-r from-[#fae8c8] via-[#e5c178] to-[#c59d4c] hover:brightness-110 rounded-md shadow-md shadow-[#c59d4c]/20 transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>DIRECT DESK</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-black" />
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-300 hover:text-white rounded-md hover:bg-zinc-800/60 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-xl px-4 py-6 space-y-3 animate-fade-in">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-3 py-2 text-sm font-medium tracking-wide rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'text-amber-400 bg-zinc-900'
                    : 'text-zinc-300 hover:text-white hover:bg-zinc-900/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-4 border-t border-zinc-800/80 flex flex-col gap-2">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full py-2.5 px-4 text-xs font-semibold text-center text-black bg-amber-400 hover:bg-amber-300 rounded-lg"
            >
              LET&apos;S COLLABORATE
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full py-2 px-4 text-xs font-mono text-center text-zinc-400 hover:text-white bg-zinc-900/60 rounded-lg flex items-center justify-center gap-2"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{isAdminLoggedIn ? 'ADMIN DASHBOARD' : 'ADMIN LOGIN'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
