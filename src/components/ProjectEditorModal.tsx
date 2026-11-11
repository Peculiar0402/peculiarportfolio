import React, { useState, useEffect } from 'react';
import { Project, ProjectCategory, ProjectSocials, ProjectMedia } from '../types/portfolio';
import { X, Upload, Plus, Trash2, Image as ImageIcon, Send, MessageCircle, DollarSign, Calendar, Clock, Sparkles, Check, Globe } from 'lucide-react';

interface ProjectEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  onSave: (project: Project) => void;
  onDelete?: (id: string) => void;
}

export const ProjectEditorModal: React.FC<ProjectEditorModalProps> = ({
  isOpen,
  onClose,
  project,
  onSave,
  onDelete,
}) => {
  const [formData, setFormData] = useState<Partial<Project>>({});
  const [servicesText, setServicesText] = useState('');
  const [responsibilitiesText, setResponsibilitiesText] = useState('');
  const [deliverablesText, setDeliverablesText] = useState('');
  const [socials, setSocials] = useState<ProjectSocials>({
    telegram: '',
    discord: '',
    x: '',
    website: '',
  });
  const [mediaList, setMediaList] = useState<ProjectMedia[]>([]);

  useEffect(() => {
    if (project) {
      setFormData(project);
      setServicesText((project.services || []).join('\n'));
      setResponsibilitiesText((project.responsibilities || []).join('\n'));
      setDeliverablesText((project.deliverables || []).join('\n'));
      setSocials(project.socials || { telegram: '', discord: '', x: '', website: '' });
      setMediaList(project.media || []);
    } else {
      // Clean blank template for creating new project
      const blank: Partial<Project> = {
        id: `proj-${Date.now()}`,
        title: '',
        brandName: '',
        brandCategory: 'Web3 & Crypto',
        brandLogoText: '',
        coverImage: '/src/assets/images/showcase_ai_cyberpunk_1794348743010.jpg',
        category: 'Memecoins',
        shortDescription: '',
        fullOverview: '',
        brandInfo: '',
        date: 'November 2026',
        duration: '2 Weeks',
        amountPaid: 5000,
        isPaymentHidden: false,
        status: 'Completed',
        results: {
          primaryMetric: '1.2M+',
          primaryLabel: 'Impressions',
          summary: 'Successful campaign rollout delivering high user engagement and viral reach.',
        },
      };
      setFormData(blank);
      setServicesText('AI Video Generation\nCinematic Sound Design\nCreative Direction');
      setResponsibilitiesText('Screenplay & Storyboarding\nPrompt Engineering & Model LoRA Training\nColor Grading & Master Assembly');
      setDeliverablesText('1x 60s 4K Reveal Film (16:9)\n3x 15s Vertical Cutdowns (9:16)\nHigh-Res Keyframe Poster Suite');
      setSocials({
        telegram: 'https://t.me/',
        discord: 'https://discord.gg/',
        x: 'https://x.com/',
        website: 'https://',
      });
      setMediaList([
        {
          type: 'image',
          url: '/src/assets/images/showcase_ai_cyberpunk_1794348743010.jpg',
          caption: 'Project main visual master',
        },
      ]);
    }
  }, [project, isOpen]);

  if (!isOpen) return null;

  // Handle Cover Image file upload
  const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setFormData((prev) => ({ ...prev, coverImage: dataUrl }));
      // Also update first media item
      setMediaList((prev) => {
        const copy = [...prev];
        if (copy.length > 0) {
          copy[0] = { ...copy[0], url: dataUrl };
        } else {
          copy.push({ type: 'image', url: dataUrl, caption: 'Cover image' });
        }
        return copy;
      });
    };
    reader.readAsDataURL(file);
  };

  // Handle additional gallery image upload
  const handleAddGalleryImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setMediaList((prev) => [
        ...prev,
        {
          type: 'image',
          url: dataUrl,
          caption: file.name.replace(/\.[^/.]+$/, ''),
        },
      ]);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveMedia = (index: number) => {
    setMediaList((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.brandName) {
      alert('Please fill in at least the Project Title and Brand Name.');
      return;
    }

    const services = servicesText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);
    const responsibilities = responsibilitiesText
      .split('\n')
      .map((r) => r.trim())
      .filter(Boolean);
    const deliverables = deliverablesText
      .split('\n')
      .map((d) => d.trim())
      .filter(Boolean);

    const updatedProject: Project = {
      id: formData.id || `proj-${Date.now()}`,
      title: formData.title || 'Untitled Project',
      brandName: formData.brandName || 'Brand',
      brandCategory: formData.brandCategory || 'Creative',
      brandLogoText:
        formData.brandLogoText ||
        (formData.brandName ? formData.brandName.slice(0, 2).toUpperCase() : 'PE'),
      coverImage: formData.coverImage || '/src/assets/images/showcase_ai_cyberpunk_1794348743010.jpg',
      category: (formData.category as ProjectCategory) || 'AI Video',
      shortDescription:
        formData.shortDescription || 'Creative storytelling and visual deliverables.',
      fullOverview:
        formData.fullOverview ||
        'Comprehensive creative campaign execution and digital storytelling deliverables.',
      brandInfo: formData.brandInfo || 'Client partner specializing in forward-thinking digital products.',
      services: services.length > 0 ? services : ['Creative Direction', 'AI Video'],
      responsibilities: responsibilities.length > 0 ? responsibilities : ['Directorial Lead'],
      deliverables: deliverables.length > 0 ? deliverables : ['Finished 4K Video'],
      date: formData.date || '2026',
      duration: formData.duration || '2 Weeks',
      amountPaid: Number(formData.amountPaid) || 0,
      isPaymentHidden: Boolean(formData.isPaymentHidden),
      status: formData.status || 'Completed',
      featured: formData.featured || false,
      results: formData.results || {
        primaryMetric: '1M+',
        primaryLabel: 'Views',
        summary: 'Successful campaign delivery.',
      },
      media: mediaList.length > 0 ? mediaList : [
        {
          type: 'image',
          url: formData.coverImage || '/src/assets/images/showcase_ai_cyberpunk_1794348743010.jpg',
          caption: 'Final production master',
        },
      ],
      socials: {
        telegram: socials.telegram?.trim() || '',
        discord: socials.discord?.trim() || '',
        x: socials.x?.trim() || '',
        website: socials.website?.trim() || '',
      },
    };

    onSave(updatedProject);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fade-in text-zinc-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] my-auto bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/80 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-amber-400/20 border border-amber-400/40 text-amber-300 font-mono font-bold text-xs flex items-center justify-center">
              {formData.brandLogoText || 'EDIT'}
            </span>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white font-display">
                {project ? `Edit Project: ${project.title}` : 'Add / Customize Project Template'}
              </h2>
              <div className="text-[11px] font-mono text-zinc-400">
                Directly configure images, socials, deliverables, and remuneration
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close editor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Section 1: Brand & Project Identity */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>01. Project &amp; Brand Identity</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-6 space-y-1">
                <label className="text-xs font-mono uppercase text-zinc-400">Project Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title || ''}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Aetheria: Decentralized Frontier Teaser"
                  className="w-full px-3.5 py-2.5 text-xs bg-zinc-900 border border-zinc-800 rounded-xl focus:border-amber-400 focus:outline-none text-white transition-colors"
                />
              </div>

              <div className="sm:col-span-4 space-y-1">
                <label className="text-xs font-mono uppercase text-zinc-400">Brand / Client Name *</label>
                <input
                  type="text"
                  required
                  value={formData.brandName || ''}
                  onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                  placeholder="e.g. Aether Protocol"
                  className="w-full px-3.5 py-2.5 text-xs bg-zinc-900 border border-zinc-800 rounded-xl focus:border-amber-400 focus:outline-none text-white transition-colors"
                />
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-mono uppercase text-zinc-400">Brand Logo / Initials</label>
                <input
                  type="text"
                  maxLength={4}
                  value={formData.brandLogoText || ''}
                  onChange={(e) => setFormData({ ...formData, brandLogoText: e.target.value })}
                  placeholder="e.g. Æ"
                  className="w-full px-3.5 py-2.5 text-xs font-mono text-center font-bold bg-zinc-900 border border-zinc-800 rounded-xl focus:border-amber-400 focus:outline-none text-amber-300 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-zinc-400">Industry / Brand Category</label>
                <input
                  type="text"
                  value={formData.brandCategory || ''}
                  onChange={(e) => setFormData({ ...formData, brandCategory: e.target.value })}
                  placeholder="e.g. Web3 & AI Infrastructure"
                  className="w-full px-3.5 py-2.5 text-xs bg-zinc-900 border border-zinc-800 rounded-xl focus:border-amber-400 focus:outline-none text-white transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-zinc-400">Project Category</label>
                <select
                  value={formData.category || 'Memecoins'}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as ProjectCategory })}
                  className="w-full px-3.5 py-2.5 text-xs bg-zinc-900 border border-zinc-800 rounded-xl focus:border-amber-400 focus:outline-none text-white transition-colors"
                >
                  <option value="Memecoins">Memecoins</option>
                  <option value="Casino & Betting">Casino &amp; Betting</option>
                  <option value="DEX & Launchpad">DEX &amp; Launchpad</option>
                  <option value="Web3 Gaming">Web3 Gaming</option>
                  <option value="Prediction Markets">Prediction Markets</option>
                  <option value="Brand Campaigns">Brand Campaigns</option>
                  <option value="AI Video">AI Video</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Content Creation">Content Creation</option>
                  <option value="Web3">Web3</option>
                  <option value="Social Media">Social Media</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Project Images & Media Upload */}
          <div className="space-y-4 pt-4 border-t border-zinc-850">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <ImageIcon className="w-3.5 h-3.5 text-amber-300" />
              <span>02. Cover Image &amp; Media Assets</span>
            </div>

            {/* Cover Image Upload Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-4">
              <div className="text-xs font-medium text-zinc-300">
                Primary Project Cover Visual
              </div>

              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="relative aspect-video w-full sm:w-56 rounded-xl overflow-hidden bg-black border border-zinc-700 shrink-0">
                  <img
                    src={formData.coverImage}
                    alt="Cover Preview"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[10px] font-mono text-zinc-300">
                    Cover Preview
                  </div>
                </div>

                <div className="flex-1 space-y-3 w-full">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-zinc-400">Image URL or Local Asset Path</label>
                    <input
                      type="text"
                      value={formData.coverImage || ''}
                      onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                      placeholder="/src/assets/images/... or https://..."
                      className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg focus:border-amber-400 text-white"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-semibold cursor-pointer transition-colors shadow-sm">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload New Image from Computer</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleCoverUpload}
                        className="hidden"
                      />
                    </label>
                    <span className="text-[11px] text-zinc-500 font-mono">
                      Stores persistently in your browser
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Media List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">Additional Project Media &amp; Screenshots</span>
                <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-850 hover:bg-zinc-800 text-zinc-300 text-xs cursor-pointer border border-zinc-750">
                  <Plus className="w-3.5 h-3.5 text-amber-400" />
                  <span>Add Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAddGalleryImageUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {mediaList.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {mediaList.map((m, idx) => (
                    <div key={idx} className="relative group rounded-xl overflow-hidden border border-zinc-800 bg-black aspect-video">
                      <img
                        src={m.url}
                        alt={m.caption}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveMedia(idx)}
                        className="absolute top-1.5 right-1.5 p-1 rounded-md bg-black/80 text-rose-400 hover:text-rose-300 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Remove image"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                      <div className="absolute inset-x-0 bottom-0 p-1.5 bg-black/70 text-[10px] text-zinc-300 truncate">
                        {m.caption || `Image ${idx + 1}`}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Section 3: Project Socials (Telegram, Discord, X, Website) */}
          <div className="space-y-4 pt-4 border-t border-zinc-850">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <MessageCircle className="w-3.5 h-3.5 text-amber-300" />
              <span>03. Project Community &amp; Social Links</span>
            </div>
            <p className="text-xs text-zinc-400">
              Add the official Telegram, Discord, X / Twitter, and Website links for this project. These appear as clickable buttons on the project cards and detail popup.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Telegram */}
              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-zinc-400 flex items-center gap-1.5">
                  <Send className="w-3.5 h-3.5 text-blue-400" />
                  <span>Telegram Link or Channel</span>
                </label>
                <input
                  type="text"
                  value={socials.telegram || ''}
                  onChange={(e) => setSocials({ ...socials, telegram: e.target.value })}
                  placeholder="https://t.me/brand_channel"
                  className="w-full px-3.5 py-2.5 text-xs bg-zinc-900 border border-zinc-800 rounded-xl focus:border-amber-400 focus:outline-none text-white transition-colors"
                />
              </div>

              {/* Discord */}
              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-zinc-400 flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Discord Invite Link</span>
                </label>
                <input
                  type="text"
                  value={socials.discord || ''}
                  onChange={(e) => setSocials({ ...socials, discord: e.target.value })}
                  placeholder="https://discord.gg/brand"
                  className="w-full px-3.5 py-2.5 text-xs bg-zinc-900 border border-zinc-800 rounded-xl focus:border-amber-400 focus:outline-none text-white transition-colors"
                />
              </div>

              {/* X / Twitter */}
              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-zinc-400 flex items-center gap-1.5">
                  <span className="font-bold text-xs">𝕏</span>
                  <span>X / Twitter Profile or Post Link</span>
                </label>
                <input
                  type="text"
                  value={socials.x || ''}
                  onChange={(e) => setSocials({ ...socials, x: e.target.value })}
                  placeholder="https://x.com/brand_handle"
                  className="w-full px-3.5 py-2.5 text-xs bg-zinc-900 border border-zinc-800 rounded-xl focus:border-amber-400 focus:outline-none text-white transition-colors"
                />
              </div>

              {/* Website / Live Link */}
              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-zinc-400 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Official Website or Launch URL</span>
                </label>
                <input
                  type="text"
                  value={socials.website || ''}
                  onChange={(e) => setSocials({ ...socials, website: e.target.value })}
                  placeholder="https://brand.com"
                  className="w-full px-3.5 py-2.5 text-xs bg-zinc-900 border border-zinc-800 rounded-xl focus:border-amber-400 focus:outline-none text-white transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Remuneration, Dates & Status */}
          <div className="space-y-4 pt-4 border-t border-zinc-850">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <DollarSign className="w-3.5 h-3.5 text-amber-300" />
              <span>04. Remuneration, Dates &amp; Status</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-zinc-400">Amount Paid ($ USD)</label>
                <input
                  type="number"
                  value={formData.amountPaid ?? 0}
                  onChange={(e) => setFormData({ ...formData, amountPaid: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 text-xs font-mono tabular-nums bg-zinc-900 border border-zinc-800 rounded-xl focus:border-amber-400 text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-zinc-400">Payment Visibility</label>
                <select
                  value={formData.isPaymentHidden ? 'hidden' : 'visible'}
                  onChange={(e) => setFormData({ ...formData, isPaymentHidden: e.target.value === 'hidden' })}
                  className="w-full px-3.5 py-2.5 text-xs bg-zinc-900 border border-zinc-800 rounded-xl focus:border-amber-400 text-white"
                >
                  <option value="visible">Visible on Card &amp; Details</option>
                  <option value="hidden">Hide (Confidential to Public)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-zinc-400">Date</label>
                <input
                  type="text"
                  value={formData.date || ''}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  placeholder="e.g. October 2026"
                  className="w-full px-3.5 py-2.5 text-xs bg-zinc-900 border border-zinc-800 rounded-xl focus:border-amber-400 text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-zinc-400">Duration</label>
                <input
                  type="text"
                  value={formData.duration || ''}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  placeholder="e.g. 3 Weeks"
                  className="w-full px-3.5 py-2.5 text-xs bg-zinc-900 border border-zinc-800 rounded-xl focus:border-amber-400 text-white"
                />
              </div>
            </div>
          </div>

          {/* Section 5: Descriptions & Narrative */}
          <div className="space-y-4 pt-4 border-t border-zinc-850">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
              05. Project Descriptions &amp; Brand Context
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono uppercase text-zinc-400">Short Card Description (1–2 sentences)</label>
              <input
                type="text"
                value={formData.shortDescription || ''}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                placeholder="Hook sentence shown on the portfolio gallery card..."
                className="w-full px-3.5 py-2.5 text-xs bg-zinc-900 border border-zinc-800 rounded-xl focus:border-amber-400 text-white"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono uppercase text-zinc-400">Full Project Overview</label>
              <textarea
                rows={3}
                value={formData.fullOverview || ''}
                onChange={(e) => setFormData({ ...formData, fullOverview: e.target.value })}
                placeholder="Comprehensive project narrative, objectives, technical challenges..."
                className="w-full px-3.5 py-2.5 text-xs bg-zinc-900 border border-zinc-800 rounded-xl focus:border-amber-400 text-white resize-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono uppercase text-zinc-400">Brand Information</label>
              <input
                type="text"
                value={formData.brandInfo || ''}
                onChange={(e) => setFormData({ ...formData, brandInfo: e.target.value })}
                placeholder="Who the brand is and what they build..."
                className="w-full px-3.5 py-2.5 text-xs bg-zinc-900 border border-zinc-800 rounded-xl focus:border-amber-400 text-white"
              />
            </div>
          </div>

          {/* Section 6: Services, Responsibilities & Deliverables */}
          <div className="space-y-4 pt-4 border-t border-zinc-850">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
              06. Services, Responsibilities &amp; Deliverables (Enter 1 item per line)
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-zinc-400">Services Provided</label>
                <textarea
                  rows={4}
                  value={servicesText}
                  onChange={(e) => setServicesText(e.target.value)}
                  placeholder="AI Worldbuilding&#10;Motion Synthesis&#10;Sound Design"
                  className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-xl text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-zinc-400">My Responsibilities</label>
                <textarea
                  rows={4}
                  value={responsibilitiesText}
                  onChange={(e) => setResponsibilitiesText(e.target.value)}
                  placeholder="Directed visual pipeline&#10;Engineered custom LoRA&#10;Mixed master audio"
                  className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-xl text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-zinc-400">Deliverables</label>
                <textarea
                  rows={4}
                  value={deliverablesText}
                  onChange={(e) => setDeliverablesText(e.target.value)}
                  placeholder="1x 90s 4K Film&#10;3x Vertical Cutdowns&#10;Exhibition Poster Pack"
                  className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-xl text-white"
                />
              </div>
            </div>
          </div>

          {/* Section 7: Measurable Results */}
          <div className="space-y-4 pt-4 border-t border-zinc-850">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
              07. Measurable Results
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-zinc-400">Primary Metric (e.g. 2.4M+)</label>
                <input
                  type="text"
                  value={formData.results?.primaryMetric || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      results: {
                        ...formData.results!,
                        primaryMetric: e.target.value,
                        primaryLabel: formData.results?.primaryLabel || 'Impressions',
                        summary: formData.results?.summary || '',
                      },
                    })
                  }
                  className="w-full px-3.5 py-2.5 text-xs bg-zinc-900 border border-zinc-800 rounded-xl text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-zinc-400">Metric Label (e.g. Views)</label>
                <input
                  type="text"
                  value={formData.results?.primaryLabel || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      results: {
                        ...formData.results!,
                        primaryLabel: e.target.value,
                        primaryMetric: formData.results?.primaryMetric || '',
                        summary: formData.results?.summary || '',
                      },
                    })
                  }
                  className="w-full px-3.5 py-2.5 text-xs bg-zinc-900 border border-zinc-800 rounded-xl text-white"
                />
              </div>

              <div className="space-y-1 sm:col-span-1">
                <label className="text-xs font-mono uppercase text-zinc-400">Status</label>
                <select
                  value={formData.status || 'Completed'}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value as 'Completed' | 'In Progress' | 'Featured',
                    })
                  }
                  className="w-full px-3.5 py-2.5 text-xs bg-zinc-900 border border-zinc-800 rounded-xl text-white"
                >
                  <option value="Completed">Completed</option>
                  <option value="Featured">Featured</option>
                  <option value="In Progress">In Progress</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono uppercase text-zinc-400">Results Summary</label>
              <input
                type="text"
                value={formData.results?.summary || ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    results: {
                      ...formData.results!,
                      summary: e.target.value,
                      primaryMetric: formData.results?.primaryMetric || '',
                      primaryLabel: formData.results?.primaryLabel || '',
                    },
                  })
                }
                placeholder="High-level measurable outcome of the campaign..."
                className="w-full px-3.5 py-2.5 text-xs bg-zinc-900 border border-zinc-800 rounded-xl text-white"
              />
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-zinc-800 flex items-center justify-between sticky bottom-0 bg-zinc-950 py-3">
            <div>
              {project && onDelete && (
                <button
                  type="button"
                  onClick={() => {
                    if (confirm(`Are you sure you want to delete "${project.title}"?`)) {
                      onDelete(project.id);
                      onClose();
                    }
                  }}
                  className="px-3.5 py-2 rounded-xl text-xs font-mono text-rose-400 hover:text-white hover:bg-rose-950/60 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete Project</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md shadow-amber-500/25 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Save Project</span>
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
