import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';
import { storage } from '../utils/storage';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: preselectedService || 'AI Video Creation',
    budget: '$5,000 – $10,000',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Sync if preselectedService changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setTimeout(() => {
      // Save locally so the portfolio owner can view in Admin dashboard
      storage.addInquiry({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
      });

      setIsSending(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'AI Video Creation',
        budget: '$5,000 – $10,000',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-zinc-950/80 border-t border-zinc-900">
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Communication & Pitch */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>START A CONVERSATION</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display leading-tight [text-wrap:balance]">
                HAVE A PROJECT <br />
                <span className="text-gold-gradient">IN MIND?</span>
              </h2>
              <p className="text-zinc-300 text-base sm:text-lg mt-4 leading-relaxed">
                Let&apos;s create something extraordinary together.
              </p>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                Whether you need a high-concept AI reveal teaser, a cinematic brand commercial, or a multi-million-view social media content strategy, I&apos;m ready to bring your vision to life.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 pt-4 border-t border-zinc-850">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    Direct Email
                  </div>
                  <a
                    href="mailto:contact@peculiarcreative.studio"
                    className="text-sm font-semibold text-white hover:text-amber-300 transition-colors"
                  >
                    contact@peculiarcreative.studio
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-purple-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    Telegram Direct
                  </div>
                  <a
                    href="https://t.me/peculiar_digital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-amber-300 transition-colors flex items-center gap-1"
                  >
                    <span>@peculiar_digital</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Footprint Links */}
            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
                Social Networks
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <a
                  href="https://x.com/peculiar_create"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>X / Twitter</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Message Received
                  </h3>
                  <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! Your inquiry has been securely dispatched to Peculiar. I will review your project requirements and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2.5 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 focus:border-amber-400 focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@studio.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 focus:border-amber-400 focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Company / Brand Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        Company or Brand
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Horizon Labs"
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 focus:border-amber-400 focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                      />
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        Primary Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors"
                      >
                        <option value="AI Video Creation">AI Video Creation</option>
                        <option value="Cinematic Storytelling">Cinematic Storytelling</option>
                        <option value="Video Editing">Video Editing</option>
                        <option value="Social Media Content Creation">Social Media Content Creation</option>
                        <option value="Web3 Content & Campaign Promotion">Web3 Content &amp; Campaign Promotion</option>
                        <option value="Brand Promotional Videos">Brand Promotional Videos</option>
                        <option value="Creative Direction">Creative Direction</option>
                        <option value="AI Visual Content">AI Visual Content</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Estimated Project Budget (USD)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors"
                    >
                      <option value="Under $3,000">Under $3,000</option>
                      <option value="$3,000 – $5,000">$3,000 – $5,000</option>
                      <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                      <option value="$10,000 – $25,000">$10,000 – $25,000</option>
                      <option value="$25,000+">$25,000+</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Project Goals &amp; Scope *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your brand, project timeline, key objectives, and any visual reference material..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 focus:border-amber-400 focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSending ? (
                      <span>TRANSMITTING INQUIRY...</span>
                    ) : (
                      <>
                        <span>LET&apos;S WORK TOGETHER</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
