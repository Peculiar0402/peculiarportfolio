import React, { useState } from 'react';
import { Project, ProjectCategory, ContactInquiry, PortfolioSettings } from '../types/portfolio';
import { storage } from '../utils/storage';
import { X, Plus, Trash2, Edit3, Lock, Unlock, Eye, EyeOff, Upload, Check, Download, RotateCcw, MessageSquare, AlertCircle } from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onSaveProjects: (projects: Project[]) => void;
  settings: PortfolioSettings;
  onSaveSettings: (settings: PortfolioSettings) => void;
  isAdminLoggedIn: boolean;
  setIsAdminLoggedIn: (val: boolean) => void;
  projectToEdit?: Project | null;
  onClearProjectToEdit?: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  projects,
  onSaveProjects,
  settings,
  onSaveSettings,
  isAdminLoggedIn,
  setIsAdminLoggedIn,
  projectToEdit,
  onClearProjectToEdit,
}) => {
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [activeTab, setActiveTab] = useState<'projects' | 'edit_project' | 'inquiries' | 'settings'>('projects');
  
  // Inquiries from localStorage
  const [inquiries, setInquiries] = useState<ContactInquiry[]>(() => storage.getInquiries());

  // Editing or adding project form state
  const [currentProject, setCurrentProject] = useState<Partial<Project>>({
    title: '',
    brandName: '',
    brandCategory: 'Web3 & AI',
    brandLogoText: '',
    coverImage: '/src/assets/images/hero_peculiar_cinematic_1794348742341.jpg',
    category: 'AI Video',
    shortDescription: '',
    fullOverview: '',
    brandInfo: '',
    services: ['AI Video Direction', 'Cinematic Sound Design'],
    responsibilities: ['Storyboarding', 'Generative Prompt Engineering', 'Color Grading'],
    deliverables: ['1x 4K Master Video', '3x Vertical Social Cutdowns'],
    date: 'November 2026',
    duration: '2 Weeks',
    amountPaid: 5000,
    isPaymentHidden: false,
    status: 'Completed',
    results: {
      primaryMetric: '1.5M+',
      primaryLabel: 'Views',
      summary: 'Campaign delivered viral traction and exceeded client KPI targets.',
    },
    media: [
      {
        type: 'image',
        url: '/src/assets/images/hero_peculiar_cinematic_1794348742341.jpg',
        caption: 'Master production frame',
      },
    ],
  });

  // Services / deliverables string representation for easy editing
  const [servicesInput, setServicesInput] = useState('');
  const [responsibilitiesInput, setResponsibilitiesInput] = useState('');
  const [deliverablesInput, setDeliverablesInput] = useState('');

  // When projectToEdit is passed
  React.useEffect(() => {
    if (projectToEdit) {
      setCurrentProject(projectToEdit);
      setServicesInput(projectToEdit.services.join('\n'));
      setResponsibilitiesInput(projectToEdit.responsibilities.join('\n'));
      setDeliverablesInput(projectToEdit.deliverables.join('\n'));
      setActiveTab('edit_project');
    }
  }, [projectToEdit]);

  if (!isOpen) return null;

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === settings.adminPin || pinInput === '1234') {
      setIsAdminLoggedIn(true);
      setPinError('');
      setPinInput('');
    } else {
      setPinError('Incorrect PIN. The default passcode is 1234.');
    }
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    onClose();
  };

  // Switch to creating a new project
  const handleStartNewProject = () => {
    const newProj: Partial<Project> = {
      id: `proj-${Date.now()}`,
      title: '',
      brandName: '',
      brandCategory: 'Creative Brand',
      brandLogoText: '',
      coverImage: '/src/assets/images/hero_peculiar_cinematic_1794348742341.jpg',
      category: 'AI Video',
      shortDescription: '',
      fullOverview: '',
      brandInfo: '',
      services: ['AI Video Direction', 'Sound Design'],
      responsibilities: ['Prompt Synthesis', 'Color Grading'],
      deliverables: ['Master 4K Video (16:9)', 'Vertical Cutdowns (9:16)'],
      date: 'November 2026',
      duration: '3 Weeks',
      amountPaid: 6000,
      isPaymentHidden: false,
      status: 'Completed',
      results: {
        primaryMetric: '+1.2M',
        primaryLabel: 'Impressions',
        summary: 'Successful campaign rollout with strong audience engagement.',
      },
      media: [
        {
          type: 'image',
          url: '/src/assets/images/hero_peculiar_cinematic_1794348742341.jpg',
          caption: 'Project visual output',
        },
      ],
    };
    setCurrentProject(newProj);
    setServicesInput(newProj.services!.join('\n'));
    setResponsibilitiesInput(newProj.responsibilities!.join('\n'));
    setDeliverablesInput(newProj.deliverables!.join('\n'));
    setActiveTab('edit_project');
  };

  // Handle Image File Upload (converts to base64 Data URL)
  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setCurrentProject((prev) => ({
        ...prev,
        coverImage: result,
        media: [
          { type: 'image', url: result, caption: 'Uploaded project keyframe' },
          ...(prev.media || []).slice(1),
        ],
      }));
    };
    reader.readAsDataURL(file);
  };

  // Save Current Project (Create or Update)
  const handleSaveCurrentProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentProject.title || !currentProject.brandName) {
      alert('Please provide at least a project title and brand name.');
      return;
    }

    const services = servicesInput
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);
    const responsibilities = responsibilitiesInput
      .split('\n')
      .map((r) => r.trim())
      .filter(Boolean);
    const deliverables = deliverablesInput
      .split('\n')
      .map((d) => d.trim())
      .filter(Boolean);

    const projectToCommit: Project = {
      id: currentProject.id || `proj-${Date.now()}`,
      title: currentProject.title || 'Untitled Project',
      brandName: currentProject.brandName || 'Independent',
      brandCategory: currentProject.brandCategory || 'Digital Production',
      brandLogoText:
        currentProject.brandLogoText ||
        (currentProject.brandName ? currentProject.brandName.slice(0, 2).toUpperCase() : 'PE'),
      coverImage: currentProject.coverImage || '/src/assets/images/hero_peculiar_cinematic_1794348742341.jpg',
      category: (currentProject.category as ProjectCategory) || 'AI Video',
      shortDescription: currentProject.shortDescription || 'Creative video production showcase.',
      fullOverview:
        currentProject.fullOverview ||
        'Comprehensive creative campaign execution and digital storytelling deliverables.',
      brandInfo: currentProject.brandInfo || 'Client partner specializing in forward-thinking digital products.',
      services: services.length > 0 ? services : ['Creative Direction', 'Post-Production'],
      responsibilities: responsibilities.length > 0 ? responsibilities : ['Production Direction'],
      deliverables: deliverables.length > 0 ? deliverables : ['4K Master Film'],
      date: currentProject.date || '2026',
      duration: currentProject.duration || '2 Weeks',
      amountPaid: Number(currentProject.amountPaid) || 0,
      isPaymentHidden: Boolean(currentProject.isPaymentHidden),
      status: currentProject.status || 'Completed',
      results: currentProject.results || {
        primaryMetric: '1M+',
        primaryLabel: 'Views',
        summary: 'Successful campaign delivery.',
      },
      media: currentProject.media || [
        {
          type: 'image',
          url: currentProject.coverImage || '/src/assets/images/hero_peculiar_cinematic_1794348742341.jpg',
          caption: 'Final production master',
        },
      ],
      socials: currentProject.socials || { telegram: '', discord: '', x: '', website: '' },
    };

    const existingIndex = projects.findIndex((p) => p.id === projectToCommit.id);
    let updated: Project[];
    if (existingIndex >= 0) {
      updated = [...projects];
      updated[existingIndex] = projectToCommit;
    } else {
      updated = [projectToCommit, ...projects];
    }

    onSaveProjects(updated);
    if (onClearProjectToEdit) onClearProjectToEdit();
    setActiveTab('projects');
  };

  // Delete project
  const handleDeleteProject = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      const updated = projects.filter((p) => p.id !== id);
      onSaveProjects(updated);
    }
  };

  // Reset all to sample data
  const handleResetSampleData = () => {
    if (confirm('Reset entire portfolio back to pristine factory sample projects?')) {
      storage.resetAllData();
      window.location.reload();
    }
  };

  // Export JSON Backup
  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(projects, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `peculiar_portfolio_backup_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fade-in text-zinc-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] my-auto bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/80 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
              {isAdminLoggedIn ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
            </div>
            <div>
              <h2 className="text-base font-bold text-white font-display">
                PECULIAR PORTFOLIO — ADMIN MANAGEMENT CONSOLE
              </h2>
              <div className="text-[11px] font-mono text-zinc-400">
                {isAdminLoggedIn ? 'Logged In · Full CRUD & Financial Governance' : 'Passcode Protected'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAdminLoggedIn && (
              <button
                onClick={handleLogout}
                className="px-3 py-1 text-xs font-mono text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
              >
                Logout
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
              aria-label="Close admin modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Not Logged In: PIN Gate */}
        {!isAdminLoggedIn ? (
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto my-auto space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mx-auto text-amber-300">
              <Lock className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white font-display">Admin Authentication</h3>
              <p className="text-xs text-zinc-400">
                Enter your administrative PIN to manage projects, edit amounts, and review client inquiries.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  autoFocus
                  maxLength={10}
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Enter PIN (Default: 1234)"
                  className="w-full text-center tracking-widest text-lg font-mono px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-amber-400 focus:outline-none text-white transition-colors"
                />
              </div>

              {pinError && (
                <div className="text-xs text-rose-400 font-mono flex items-center justify-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{pinError}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-amber-400/20 cursor-pointer"
              >
                Access Portfolio Admin
              </button>
            </form>

            <div className="text-[11px] font-mono text-zinc-500 pt-2">
              Default passcode is <span className="text-amber-400 font-bold">1234</span>
            </div>
          </div>
        ) : (
          /* Logged In Admin Dashboard */
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* Tabs Header */}
            <div className="flex items-center gap-2 px-6 py-2.5 border-b border-zinc-800 bg-zinc-950 text-xs">
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'projects'
                    ? 'bg-amber-400 text-black font-semibold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                Manage Projects ({projects.length})
              </button>

              <button
                onClick={handleStartNewProject}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                  activeTab === 'edit_project'
                    ? 'bg-amber-400 text-black font-semibold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{currentProject.id && projects.some((p) => p.id === currentProject.id) ? 'Edit Project' : 'Add New Project'}</span>
              </button>

              <button
                onClick={() => {
                  setInquiries(storage.getInquiries());
                  setActiveTab('inquiries');
                }}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'inquiries'
                    ? 'bg-amber-400 text-black font-semibold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Client Inquiries ({inquiries.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'settings'
                    ? 'bg-amber-400 text-black font-semibold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                Privacy &amp; Settings
              </button>
            </div>

            {/* Tab 1: Project List Manager */}
            {activeTab === 'projects' && (
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <div className="flex items-center justify-between pb-2">
                  <div className="text-xs text-zinc-400">
                    Click any project to edit details, deliverables, results, or payment amounts.
                  </div>
                  <button
                    onClick={handleStartNewProject}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black text-xs font-semibold cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Create New Project</span>
                  </button>
                </div>

                <div className="divide-y divide-zinc-900 border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/30">
                  {projects.map((p) => (
                    <div
                      key={p.id}
                      className="p-4 flex items-center justify-between gap-4 hover:bg-zinc-900/60 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={p.coverImage}
                          alt={p.title}
                          referrerPolicy="no-referrer"
                          className="w-14 h-10 object-cover rounded-md border border-zinc-800 shrink-0"
                        />
                        <div>
                          <div className="text-xs font-semibold text-white">{p.title}</div>
                          <div className="text-[11px] text-zinc-400">
                            {p.brandName} · <span className="text-amber-400">{p.category}</span> · ${p.amountPaid.toLocaleString()}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {p.isPaymentHidden ? (
                          <span className="text-[10px] font-mono text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded">
                            Amount Hidden
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                            Amount Visible
                          </span>
                        )}

                        <button
                          onClick={() => {
                            setCurrentProject(p);
                            setServicesInput(p.services.join('\n'));
                            setResponsibilitiesInput(p.responsibilities.join('\n'));
                            setDeliverablesInput(p.deliverables.join('\n'));
                            setActiveTab('edit_project');
                          }}
                          className="p-1.5 text-zinc-400 hover:text-amber-400 hover:bg-zinc-800 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleDeleteProject(p.id)}
                          className="p-1.5 text-zinc-400 hover:text-rose-400 hover:bg-zinc-800 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Edit / Add Project Form */}
            {activeTab === 'edit_project' && (
              <form onSubmit={handleSaveCurrentProject} className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <h3 className="text-sm font-bold text-white font-display">
                    {currentProject.id && projects.some((p) => p.id === currentProject.id)
                      ? `Edit Project: ${currentProject.title}`
                      : 'Add New Project to Portfolio'}
                  </h3>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                  >
                    Save Project Changes
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Title */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-zinc-400">Project Title *</label>
                    <input
                      type="text"
                      required
                      value={currentProject.title || ''}
                      onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
                      placeholder="e.g. Odyssey: AI Reveal Film"
                      className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg focus:border-amber-400 focus:outline-none text-white"
                    />
                  </div>

                  {/* Brand Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-zinc-400">Brand / Client Name *</label>
                    <input
                      type="text"
                      required
                      value={currentProject.brandName || ''}
                      onChange={(e) => setCurrentProject({ ...currentProject, brandName: e.target.value })}
                      placeholder="e.g. Solstice Labs"
                      className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg focus:border-amber-400 focus:outline-none text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Category */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-zinc-400">Category</label>
                    <select
                      value={currentProject.category || 'Memecoins'}
                      onChange={(e) => setCurrentProject({ ...currentProject, category: e.target.value as ProjectCategory })}
                      className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg focus:border-amber-400 focus:outline-none text-white"
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

                  {/* Remuneration / Amount */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-zinc-400">Payment Amount ($ USD)</label>
                    <input
                      type="number"
                      value={currentProject.amountPaid || 0}
                      onChange={(e) => setCurrentProject({ ...currentProject, amountPaid: Number(e.target.value) })}
                      className="w-full px-3 py-2 text-xs font-mono bg-zinc-900 border border-zinc-800 rounded-lg focus:border-amber-400 focus:outline-none text-white"
                    />
                  </div>

                  {/* Payment Hidden Toggle */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-zinc-400">Public Amount Visibility</label>
                    <select
                      value={currentProject.isPaymentHidden ? 'hidden' : 'visible'}
                      onChange={(e) =>
                        setCurrentProject({ ...currentProject, isPaymentHidden: e.target.value === 'hidden' })
                      }
                      className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg focus:border-amber-400 focus:outline-none text-white"
                    >
                      <option value="visible">Visible Publicly</option>
                      <option value="hidden">Hide Amount (Confidential)</option>
                    </select>
                  </div>
                </div>

                {/* Cover Image URL & File Upload */}
                <div className="space-y-2 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                  <div className="text-xs font-mono uppercase text-zinc-400">Project Cover Image</div>
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <img
                      src={currentProject.coverImage}
                      alt="Preview"
                      referrerPolicy="no-referrer"
                      className="w-32 h-20 object-cover rounded-lg border border-zinc-700 shrink-0"
                    />
                    <div className="flex-1 space-y-2 w-full">
                      <input
                        type="text"
                        value={currentProject.coverImage || ''}
                        onChange={(e) => setCurrentProject({ ...currentProject, coverImage: e.target.value })}
                        placeholder="Image URL or generated asset path"
                        className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg focus:border-amber-400 focus:outline-none text-white"
                      />
                      <div className="flex items-center gap-2">
                        <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 cursor-pointer">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Upload Local Image</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageFileUpload}
                            className="hidden"
                          />
                        </label>
                        <span className="text-[11px] text-zinc-500">Converts to local persistent Base64</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Socials (Telegram, Discord, X, Website) */}
                <div className="space-y-3 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                  <div className="text-xs font-mono uppercase text-amber-400">
                    Project Community &amp; Social Media Links
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-zinc-400">Telegram Link</label>
                      <input
                        type="text"
                        value={currentProject.socials?.telegram || ''}
                        onChange={(e) =>
                          setCurrentProject({
                            ...currentProject,
                            socials: { ...currentProject.socials, telegram: e.target.value },
                          })
                        }
                        placeholder="https://t.me/brand_channel"
                        className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg text-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-zinc-400">Discord Invite</label>
                      <input
                        type="text"
                        value={currentProject.socials?.discord || ''}
                        onChange={(e) =>
                          setCurrentProject({
                            ...currentProject,
                            socials: { ...currentProject.socials, discord: e.target.value },
                          })
                        }
                        placeholder="https://discord.gg/brand"
                        className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg text-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-zinc-400">X / Twitter Link</label>
                      <input
                        type="text"
                        value={currentProject.socials?.x || ''}
                        onChange={(e) =>
                          setCurrentProject({
                            ...currentProject,
                            socials: { ...currentProject.socials, x: e.target.value },
                          })
                        }
                        placeholder="https://x.com/brand_handle"
                        className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg text-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-zinc-400">Website URL</label>
                      <input
                        type="text"
                        value={currentProject.socials?.website || ''}
                        onChange={(e) =>
                          setCurrentProject({
                            ...currentProject,
                            socials: { ...currentProject.socials, website: e.target.value },
                          })
                        }
                        placeholder="https://brand.com"
                        className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Short & Full Description */}
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-zinc-400">Short Card Description</label>
                    <input
                      type="text"
                      value={currentProject.shortDescription || ''}
                      onChange={(e) => setCurrentProject({ ...currentProject, shortDescription: e.target.value })}
                      placeholder="1–2 sentence summary for project cards"
                      className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg focus:border-amber-400 focus:outline-none text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-zinc-400">Full Project Overview</label>
                    <textarea
                      rows={3}
                      value={currentProject.fullOverview || ''}
                      onChange={(e) => setCurrentProject({ ...currentProject, fullOverview: e.target.value })}
                      placeholder="Detailed narrative, client challenge, creative direction..."
                      className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg focus:border-amber-400 focus:outline-none text-white resize-none"
                    />
                  </div>
                </div>

                {/* Responsibilities & Deliverables (Newline Separated) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-zinc-400">Services Provided (1 per line)</label>
                    <textarea
                      rows={3}
                      value={servicesInput}
                      onChange={(e) => setServicesInput(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-zinc-400">My Responsibilities (1 per line)</label>
                    <textarea
                      rows={3}
                      value={responsibilitiesInput}
                      onChange={(e) => setResponsibilitiesInput(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-zinc-400">Deliverables (1 per line)</label>
                    <textarea
                      rows={3}
                      value={deliverablesInput}
                      onChange={(e) => setDeliverablesInput(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg text-white"
                    />
                  </div>
                </div>

                {/* Results Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-zinc-400">Primary Metric (e.g. 2.4M+)</label>
                    <input
                      type="text"
                      value={currentProject.results?.primaryMetric || ''}
                      onChange={(e) =>
                        setCurrentProject({
                          ...currentProject,
                          results: {
                            ...currentProject.results!,
                            primaryMetric: e.target.value,
                            primaryLabel: currentProject.results?.primaryLabel || 'Impressions',
                            summary: currentProject.results?.summary || '',
                          },
                        })
                      }
                      className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-zinc-400">Metric Label (e.g. Impressions)</label>
                    <input
                      type="text"
                      value={currentProject.results?.primaryLabel || ''}
                      onChange={(e) =>
                        setCurrentProject({
                          ...currentProject,
                          results: {
                            ...currentProject.results!,
                            primaryLabel: e.target.value,
                            primaryMetric: currentProject.results?.primaryMetric || '',
                            summary: currentProject.results?.summary || '',
                          },
                        })
                      }
                      className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg text-white"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-zinc-800">
                  <button
                    type="button"
                    onClick={() => setActiveTab('projects')}
                    className="px-4 py-2 text-xs text-zinc-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-lg cursor-pointer"
                  >
                    Save Project
                  </button>
                </div>
              </form>
            )}

            {/* Tab 3: Client Inquiries Inbox */}
            {activeTab === 'inquiries' && (
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <div className="text-xs text-zinc-400">
                  Messages submitted by prospective clients through your contact form.
                </div>

                {inquiries.length === 0 ? (
                  <div className="p-8 text-center text-zinc-500 text-xs">
                    No client inquiries recorded yet.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {inquiries.map((inq) => (
                      <div
                        key={inq.id}
                        className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-semibold text-white text-sm">{inq.name}</span>{' '}
                            {inq.company && <span className="text-zinc-400 text-xs">({inq.company})</span>}
                          </div>
                          <span className="text-[11px] font-mono text-zinc-500">
                            {new Date(inq.createdAt).toLocaleDateString()}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-amber-400/90 font-mono">
                          <span>{inq.email}</span>
                          <span>·</span>
                          <span>{inq.service}</span>
                          <span>·</span>
                          <span className="text-zinc-300">Budget: {inq.budget}</span>
                        </div>

                        <p className="text-xs text-zinc-300 leading-relaxed pt-2 border-t border-zinc-850">
                          {inq.message}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Tab 4: Global Settings & Data Backup */}
            {activeTab === 'settings' && (
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                
                {/* Global Financial Privacy Switch */}
                <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white text-sm">Public Financial Privacy</div>
                      <div className="text-xs text-zinc-400">
                        When enabled, all project payment values and total earnings are masked for public visitors.
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        const updated = { ...settings, hideAllEarnings: !settings.hideAllEarnings };
                        onSaveSettings(updated);
                      }}
                      className={`px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                        settings.hideAllEarnings
                          ? 'bg-amber-400 text-black'
                          : 'bg-zinc-800 text-zinc-300 hover:text-white'
                      }`}
                    >
                      {settings.hideAllEarnings ? 'Earnings Hidden Publicly' : 'Earnings Visible Publicly'}
                    </button>
                  </div>
                </div>

                {/* Change PIN */}
                <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-3">
                  <div className="font-semibold text-white text-sm">Admin Access PIN</div>
                  <div className="text-xs text-zinc-400">
                    Update the passcode required to open this admin dashboard.
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      defaultValue={settings.adminPin}
                      id="newPinInput"
                      maxLength={8}
                      className="px-3 py-1.5 text-xs font-mono bg-zinc-900 border border-zinc-800 rounded-lg text-white"
                    />
                    <button
                      onClick={() => {
                        const input = document.getElementById('newPinInput') as HTMLInputElement;
                        if (input && input.value) {
                          onSaveSettings({ ...settings, adminPin: input.value });
                          alert('Admin PIN updated successfully!');
                        }
                      }}
                      className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-xs font-medium rounded-lg text-white cursor-pointer"
                    >
                      Update PIN
                    </button>
                  </div>
                </div>

                {/* Backup & Restore */}
                <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-4">
                  <div className="font-semibold text-white text-sm">Portfolio Data Backup &amp; Reset</div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={handleExportJSON}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-white transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download JSON Backup</span>
                    </button>

                    <button
                      onClick={handleResetSampleData}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 border border-rose-800/40 text-xs font-medium text-rose-300 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset to Sample Data</span>
                    </button>
                  </div>
                </div>

              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
