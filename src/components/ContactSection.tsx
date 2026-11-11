import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Copy, Check, ArrowUpRight, Sparkles, Clock, ShieldCheck, Zap } from 'lucide-react';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const telegramUsername = '@PeculiarXD';
  const telegramUrl = 'https://t.me/PeculiarXD';
  const xUrl = 'https://x.com/PeculiarXD';
  const emailAddress = 'Onetinesamuel@gmail.com';

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const getEmailMailto = () => {
    const subject = encodeURIComponent(
      preselectedService
        ? `Project Inquiry: ${preselectedService} — Peculiar Portfolio`
        : 'Project Collaboration Inquiry — Peculiar Portfolio'
    );
    const body = encodeURIComponent(
      `Hi Peculiar,\n\nI came across your portfolio and would like to discuss a project campaign.\n\nProject / Token Name:\nDomain: ${
        preselectedService || 'Memecoin Launch / Casino & Betting / DEX & Launchpad'
      }\nTarget Launch Date:\nEstimated Budget:\n\nLooking forward to speaking with you!`
    );
    return `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#07070a] border-t border-zinc-900 overflow-hidden">
      
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-amber-500/10 via-purple-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-amber-400/30 text-amber-300 text-xs font-mono uppercase tracking-[0.2em] mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE FOR NEW CAMPAIGNS</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-tight">
            HAVE A PROJECT <br />
            <span className="text-gold-gradient">IN MIND?</span>
          </h2>
          
          <p className="text-zinc-300 text-base sm:text-lg mt-4 font-normal max-w-2xl mx-auto">
            Let&apos;s scale your brand and onboard real, active users.
          </p>
          <p className="text-zinc-500 text-sm mt-2 max-w-xl mx-auto">
            Launching a Memecoin, Crypto Casino, Betting Platform, DEX, Launchpad, or Game? Reach out directly on Telegram, X, or Email for rapid campaign coordination.
          </p>

          {preselectedService && (
            <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Interest: {preselectedService}</span>
            </div>
          )}
        </div>

        {/* 3 Main Direct Contact Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Channel 1: Telegram Direct */}
          <div className="relative group rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-amber-400/60 p-7 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/5">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-13 h-13 rounded-2xl bg-[#229ED9]/15 border border-[#229ED9]/30 text-[#229ED9] flex items-center justify-center shadow-inner">
                  <Send className="w-6 h-6 ml-0.5" />
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono flex items-center gap-1.5">
                  <Zap className="w-3 h-3" />
                  <span>Fastest Reply</span>
                </span>
              </div>

              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                Direct Messaging
              </div>
              <h3 className="text-2xl font-bold text-white font-display mt-1">
                Telegram
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">
                Fastest channel for project pitches, spontaneous creative ideas, voice briefs, and immediate discussion.
              </p>

              <div className="mt-5 p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 flex items-center justify-between">
                <span className="font-mono text-sm font-semibold text-amber-300">
                  {telegramUsername}
                </span>
                <button
                  onClick={() => handleCopy(telegramUsername, 'telegram')}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                  title="Copy Telegram username"
                >
                  {copiedField === 'telegram' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-zinc-900">
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-semibold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/35 cursor-pointer"
              >
                <span>Chat on Telegram</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Channel 2: X (Twitter) */}
          <div className="relative group rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-amber-400/60 p-7 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/5">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-13 h-13 rounded-2xl bg-white/10 border border-white/20 text-white flex items-center justify-center shadow-inner">
                  {/* Clean SVG for X icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[11px] font-mono">
                  Community &amp; DMs
                </span>
              </div>

              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                Social &amp; Network
              </div>
              <h3 className="text-2xl font-bold text-white font-display mt-1">
                X / Twitter
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">
                Connect with me on X, explore visual previews, or slide into open DMs to discuss campaigns and collaborations.
              </p>

              <div className="mt-5 p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 flex items-center justify-between">
                <span className="font-mono text-sm font-semibold text-zinc-200 truncate">
                  @PeculiarXD
                </span>
                <button
                  onClick={() => handleCopy('@PeculiarXD', 'x')}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                  title="Copy X handle"
                >
                  {copiedField === 'x' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-zinc-900">
              <a
                href={xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700/80 hover:border-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Message on X</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Channel 3: Email Direct */}
          <div className="relative group rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-amber-400/60 p-7 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/5">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-13 h-13 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shadow-inner">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-mono">
                  Formal Briefs
                </span>
              </div>

              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                Direct Inbox
              </div>
              <h3 className="text-2xl font-bold text-white font-display mt-1">
                Email
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">
                Ideal for detailed creative briefs, NDAs, brand guidelines, production schedules, and formal invoicing.
              </p>

              <div className="mt-5 p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 flex items-center justify-between">
                <span className="font-mono text-xs sm:text-sm font-semibold text-zinc-200 truncate">
                  {emailAddress}
                </span>
                <button
                  onClick={() => handleCopy(emailAddress, 'email')}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-zinc-900">
              <a
                href={getEmailMailto()}
                className="w-full py-3.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700/80 hover:border-amber-400/80 font-semibold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send Direct Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Professional Workflow Guarantee Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-display">
                  Rapid Turnaround
                </div>
                <div className="text-xs text-zinc-400 mt-1">
                  Initial response within 2–6 hours. Sprint deliverables turned around without unnecessary delays.
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-display">
                  Directorial Precision
                </div>
                <div className="text-xs text-zinc-400 mt-1">
                  Full custom AI motion synthesis, high-bitrate ACES grading, and bespoke storytelling tailored to your brand.
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-display">
                  Clear Commercial Terms
                </div>
                <div className="text-xs text-zinc-400 mt-1">
                  Transparent milestone payments, full IP rights transfer, and ProRes 4K mastering upon project signoff.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
