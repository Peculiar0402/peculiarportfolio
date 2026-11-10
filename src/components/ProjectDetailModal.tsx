import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { X, ExternalLink, Calendar, Clock, DollarSign, CheckCircle2, Award, Briefcase, Eye, EyeOff, Layers, Sparkles, Send, MessageCircle, Globe, Edit3 } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  hideAllEarnings: boolean;
  isAdmin: boolean;
  onEdit?: (project: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  hideAllEarnings,
  isAdmin,
  onEdit,
}) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  if (!project) return null;

  const isFinancialHidden = hideAllEarnings || project.isPaymentHidden;
  const hasSocials = project.socials && (project.socials.telegram || project.socials.discord || project.socials.x || project.socials.website);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      {/* Container Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] my-auto bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-in text-zinc-200">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/60 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300 font-mono font-bold text-xs flex items-center justify-center">
              {project.brandLogoText || project.brandName.slice(0, 2).toUpperCase()}
            </span>
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                {project.brandName} · {project.category}
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white font-display truncate max-w-md sm:max-w-xl">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onEdit && (
              <button
                onClick={() => onEdit(project)}
                className="px-3 py-1.5 text-xs font-medium text-amber-400 hover:text-black hover:bg-amber-400 border border-amber-400/40 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                title="Edit this project's images, socials, text, or payment"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Project</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          
          {/* Main Visual Media Display */}
          <div className="space-y-3">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-zinc-800 group shadow-lg">
              {project.media && project.media.length > 0 ? (
                <img
                  src={project.media[activeMediaIndex]?.url || project.coverImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={project.coverImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              )}

              {/* Caption Scrim */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <p className="text-xs sm:text-sm text-zinc-300 font-sans">
                  {project.media?.[activeMediaIndex]?.caption || project.shortDescription}
                </p>
              </div>
            </div>

            {/* Media Thumbnail Selector if multiple media items */}
            {project.media && project.media.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {project.media.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`relative w-20 h-12 rounded-lg overflow-hidden border transition-all cursor-pointer shrink-0 ${
                      activeMediaIndex === idx
                        ? 'border-amber-400 ring-1 ring-amber-400/50'
                        : 'border-zinc-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={item.url}
                      alt={item.caption}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Details Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 text-xs">
            <div className="space-y-0.5">
              <span className="text-zinc-500 font-mono uppercase tracking-wider flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Date
              </span>
              <span className="font-medium text-white">{project.date}</span>
            </div>

            <div className="space-y-0.5">
              <span className="text-zinc-500 font-mono uppercase tracking-wider flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Duration
              </span>
              <span className="font-medium text-white">{project.duration}</span>
            </div>

            <div className="space-y-0.5">
              <span className="text-zinc-500 font-mono uppercase tracking-wider flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5" /> Remuneration
              </span>
              {isFinancialHidden && !isAdmin ? (
                <span className="text-zinc-400 flex items-center gap-1 font-mono">
                  <EyeOff className="w-3 h-3 text-zinc-500" /> Confidential
                </span>
              ) : (
                <span className="font-mono text-amber-400 font-semibold tabular-nums">
                  ${project.amountPaid.toLocaleString()}
                  {isFinancialHidden && isAdmin && (
                    <span className="text-[10px] text-zinc-500 font-normal ml-1">(Private)</span>
                  )}
                </span>
              )}
            </div>

            <div className="space-y-0.5">
              <span className="text-zinc-500 font-mono uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Status
              </span>
              <span className="font-medium text-emerald-400">{project.status}</span>
            </div>
          </div>

          {/* Project Socials (Telegram, Discord, X, Website) */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-zinc-900/60 to-zinc-900/30 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-amber-300" />
                <span>PROJECT COMMUNITY &amp; OFFICIAL CHANNELS</span>
              </div>
              <div className="text-[11px] text-zinc-400 mt-0.5">
                Official verified channels for {project.brandName}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {project.socials?.telegram && (
                <a
                  href={project.socials.telegram.startsWith('http') ? project.socials.telegram : `https://t.me/${project.socials.telegram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-mono transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram</span>
                  <ExternalLink className="w-3 h-3 text-blue-400/70" />
                </a>
              )}

              {project.socials?.discord && (
                <a
                  href={project.socials.discord.startsWith('http') ? project.socials.discord : `https://discord.gg/${project.socials.discord}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Discord</span>
                  <ExternalLink className="w-3 h-3 text-indigo-400/70" />
                </a>
              )}

              {project.socials?.x && (
                <a
                  href={project.socials.x.startsWith('http') ? project.socials.x : `https://x.com/${project.socials.x.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-100 border border-white/20 text-xs font-mono transition-colors"
                >
                  <span className="font-bold text-xs">𝕏</span>
                  <span>X / Twitter</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>
              )}

              {project.socials?.website && (
                <a
                  href={project.socials.website.startsWith('http') ? project.socials.website : `https://${project.socials.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Website</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400/70" />
                </a>
              )}

              {!hasSocials && onEdit && (
                <button
                  type="button"
                  onClick={() => onEdit(project)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 hover:text-amber-400 border border-zinc-700/80 text-xs font-mono transition-colors cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5 text-amber-400" />
                  <span>+ Add Telegram, Discord or X Links</span>
                </button>
              )}
            </div>
          </div>

          {/* 1. Project Overview & Brand Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <Layers className="w-4 h-4" /> 01. Project Overview
              </h3>
              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                {project.fullOverview}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                02. Brand Information
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {project.brandInfo}
              </p>
              <div className="pt-2 text-[11px] font-mono text-amber-400/90">
                Industry: {project.brandCategory}
              </div>
            </div>
          </div>

          {/* 3. Responsibilities & 4. Deliverables */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3 p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                03. My Responsibilities
              </h3>
              <ul className="space-y-2 text-xs text-zinc-400">
                {project.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">·</span>
                    <span className="text-zinc-300">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                04. What I Delivered
              </h3>
              <ul className="space-y-2 text-xs text-zinc-400">
                {project.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">·</span>
                    <span className="text-zinc-300">{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 6. Measurable Project Results */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-amber-500/10 via-purple-600/10 to-transparent border border-amber-400/20 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-300" />
                06. Measurable Results &amp; Impact
              </h3>
              <div className="text-xl sm:text-2xl font-extrabold text-white font-mono tabular-nums">
                {project.results.primaryMetric}
                <span className="text-xs text-amber-400 ml-1.5 font-sans font-normal">
                  {project.results.primaryLabel}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.results.summary}
            </p>

            {project.results.secondaryMetrics && project.results.secondaryMetrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 border-t border-white/5">
                {project.results.secondaryMetrics.map((sec, i) => (
                  <div key={i} className="bg-black/40 p-2.5 rounded-lg border border-white/5">
                    <div className="text-sm font-bold font-mono text-white tabular-nums">
                      {sec.value}
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      {sec.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Client Testimonial if present */}
          {project.clientTestimonial && (
            <div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/80 italic text-zinc-300 text-sm">
              <p className="mb-2">
                &ldquo;{project.clientTestimonial.quote}&rdquo;
              </p>
              <div className="not-italic text-xs text-amber-400/90 font-mono">
                — {project.clientTestimonial.author}, {project.clientTestimonial.role}
              </div>
            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-950 flex items-center justify-between">
          <div className="text-xs text-zinc-500 font-mono">
            ID: {project.id}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
          >
            Close Project
          </button>
        </div>

      </div>
    </div>
  );
};
