import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../types/portfolio';
import { Eye, EyeOff, Plus, ArrowUpRight, Calendar, DollarSign, Edit3, Send, MessageCircle, Globe, Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  hideAllEarnings: boolean;
  isAdmin: boolean;
  onAddNewProject: () => void;
  onEditProject?: (project: Project) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'All Projects',
  'Memecoins',
  'Casino & Betting',
  'DEX & Launchpad',
  'Web3 Gaming',
  'Prediction Markets',
  'Brand Campaigns',
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
  hideAllEarnings,
  isAdmin,
  onAddNewProject,
  onEditProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All Projects');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        selectedCategory === 'All Projects' || p.category === selectedCategory;
      const matchesQuery =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>VERIFIED PROMOTIONS &amp; CAMPAIGN ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Web3 Campaigns &amp; Client Projects
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-xl">
              Showcase of verified promotional blitzes across Memecoins, Crypto Casinos, Betting, DEXs, Launchpads, and Web3 Gaming. Fully editable with deliverables, volume metrics, and socials.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onAddNewProject}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all cursor-pointer shadow-md shadow-amber-400/25"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Project</span>
            </button>

            <div className="text-xs font-mono text-zinc-500 bg-zinc-900/60 px-3 py-2 rounded-xl border border-zinc-800">
              Showing <span className="text-amber-400 font-semibold">{filteredProjects.length}</span> of {projects.length}
            </div>
          </div>
        </div>

        {/* Quick Helper Ribbon */}
        <div className="mb-8 p-3.5 rounded-xl bg-zinc-950/80 border border-amber-400/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>
              <strong>Project Template Ready:</strong> Click <em>&ldquo;Edit Project&rdquo;</em> on any card to update its title, upload your photos/videos, or connect Telegram, Discord &amp; X socials.
            </span>
          </div>

          <button
            onClick={onAddNewProject}
            className="text-xs font-mono text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer shrink-0"
          >
            + Create Blank Project Template
          </button>
        </div>

        {/* Filter Navigation Bar (Interactive Segmented Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium tracking-wide rounded-lg whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-black font-semibold shadow-md shadow-amber-400/20'
                    : 'bg-zinc-900/70 text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 border border-zinc-800/80 rounded-2xl bg-zinc-950/40">
            <p className="text-zinc-400 text-sm">No projects found matching the current criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All Projects');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-mono text-amber-400 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => {
              const isPaidHidden = hideAllEarnings || project.isPaymentHidden;
              const hasSocials = project.socials && (project.socials.telegram || project.socials.discord || project.socials.x || project.socials.website);

              return (
                <div
                  key={project.id}
                  onClick={() => {
                    if (!project.title || project.id === 'proj-template') {
                      onEditProject?.(project);
                    } else {
                      onSelectProject(project);
                    }
                  }}
                  className="group relative flex flex-col bg-zinc-950/90 rounded-2xl border border-zinc-800/90 hover:border-amber-400/40 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  {/* Media Cover Image */}
                  <div className="relative aspect-video w-full overflow-hidden bg-zinc-950 flex items-center justify-center border-b border-zinc-850">
                    {project.coverImage ? (
                      <img
                        src={project.coverImage}
                        alt={project.title || 'Project'}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900/90 to-zinc-950 p-6 text-center border-2 border-dashed border-zinc-800 group-hover:border-amber-400/50 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-amber-400 mb-2 group-hover:scale-110 transition-transform shadow-md">
                          <Plus className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono font-medium text-amber-300">
                          + Click to Add Image
                        </span>
                        <span className="text-[10px] text-zinc-500 font-mono mt-0.5">
                          Editable Template
                        </span>
                      </div>
                    )}

                    {/* Gradient scrim */}
                    {project.coverImage && (
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />
                    )}

                    {/* Top Brand Logo, Status & Direct Edit Button */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-2 pointer-events-none">
                        <span className="w-7 h-7 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-amber-300 font-mono text-xs font-bold flex items-center justify-center">
                          {project.brandLogoText || (project.brandName ? project.brandName.slice(0, 2).toUpperCase() : '+')}
                        </span>
                        <span className="text-xs font-semibold text-white px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10">
                          {project.brandName || 'New Brand'}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {onEditProject && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onEditProject(project);
                            }}
                            className="px-2.5 py-1 rounded-md bg-black/80 hover:bg-amber-400 text-zinc-300 hover:text-black border border-white/10 text-[11px] font-mono flex items-center gap-1 transition-all cursor-pointer shadow-md"
                            title="Edit this project's template, image, or socials"
                          >
                            <Edit3 className="w-3 h-3" />
                            <span>Edit</span>
                          </button>
                        )}

                        <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded-md bg-zinc-900/80 backdrop-blur-md border border-zinc-700/80 text-emerald-400 pointer-events-none">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Amount badge on image if visible */}
                    <div className="absolute bottom-3 right-3 pointer-events-none">
                      {isPaidHidden && !isAdmin ? (
                        <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 bg-black/70 backdrop-blur-md px-2 py-1 rounded-md border border-white/5">
                          <EyeOff className="w-3 h-3 text-zinc-500" />
                          <span>Confidential</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-xs font-mono font-bold text-amber-300 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-400/30 tabular-nums">
                          <DollarSign className="w-3 h-3" />
                          <span>{project.amountPaid.toLocaleString()}</span>
                          {isPaidHidden && isAdmin && (
                            <span className="text-[10px] text-zinc-400 font-normal">(Private)</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    
                    <div className="space-y-2.5">
                      {/* Category Metadata */}
                      <div className="flex items-center gap-2 text-xs text-zinc-400">
                        <span className="text-amber-400/90 font-medium">{project.category}</span>
                        <span aria-hidden="true" className="text-zinc-700">·</span>
                        <span className="flex items-center gap-1 font-mono text-[11px]">
                          <Calendar className="w-3 h-3" /> {project.date}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors font-display line-clamp-1">
                        {project.title || (
                          <span className="text-amber-400/90 italic font-normal">
                            + Click to Enter Project Title
                          </span>
                        )}
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                        {project.shortDescription}
                      </p>

                      {/* Social Media Links Badges (TG, Discord, X) */}
                      {hasSocials && (
                        <div className="pt-2 flex flex-wrap items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                          {project.socials?.telegram && (
                            <a
                              href={project.socials.telegram.startsWith('http') ? project.socials.telegram : `https://t.me/${project.socials.telegram.replace('@', '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[11px] font-mono transition-colors"
                              title="Telegram"
                            >
                              <Send className="w-2.5 h-2.5" />
                              <span>TG</span>
                            </a>
                          )}

                          {project.socials?.discord && (
                            <a
                              href={project.socials.discord.startsWith('http') ? project.socials.discord : `https://discord.gg/${project.socials.discord}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[11px] font-mono transition-colors"
                              title="Discord"
                            >
                              <MessageCircle className="w-2.5 h-2.5" />
                              <span>Discord</span>
                            </a>
                          )}

                          {project.socials?.x && (
                            <a
                              href={project.socials.x.startsWith('http') ? project.socials.x : `https://x.com/${project.socials.x.replace('@', '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-zinc-200 border border-white/20 text-[11px] font-mono transition-colors"
                              title="X / Twitter"
                            >
                              <span className="font-bold text-[10px]">𝕏</span>
                              <span>Twitter</span>
                            </a>
                          )}

                          {project.socials?.website && (
                            <a
                              href={project.socials.website.startsWith('http') ? project.socials.website : `https://${project.socials.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-mono transition-colors"
                              title="Official Website"
                            >
                              <Globe className="w-2.5 h-2.5" />
                              <span>Web</span>
                            </a>
                          )}
                        </div>
                      )}

                      {/* Services Rendered (subtle list) */}
                      <div className="pt-2 border-t border-zinc-900">
                        <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
                          Services Rendered
                        </div>
                        <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-zinc-300">
                          {project.services.slice(0, 3).map((svc, i) => (
                            <span key={i} className="flex items-center gap-1">
                              {i > 0 && <span aria-hidden="true" className="text-zinc-700">·</span>}
                              <span>{svc}</span>
                            </span>
                          ))}
                          {project.services.length > 3 && (
                            <span className="text-zinc-500 text-[11px]">
                              +{project.services.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Action Buttons */}
                    <div className="pt-3 border-t border-zinc-900 flex items-center justify-between">
                      <div className="text-xs text-zinc-400 font-mono">
                        {project.results.primaryMetric} {project.results.primaryLabel}
                      </div>

                      <div className="flex items-center gap-3">
                        {onEditProject && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onEditProject(project);
                            }}
                            className="text-xs text-zinc-400 hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            <Edit3 className="w-3 h-3" />
                            <span>Edit</span>
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectProject(project);
                          }}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:text-amber-300 transition-colors cursor-pointer"
                        >
                          <span>View Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
