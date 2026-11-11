import React, { useState, useEffect } from 'react';
import { storage } from './utils/storage';
import { Project, PortfolioSettings } from './types/portfolio';
import { WelcomePopup } from './components/WelcomePopup';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResultsDashboard } from './components/ResultsDashboard';
import { ServicesSection } from './components/ServicesSection';
import { BrandsSection } from './components/BrandsSection';
import { CreativeShowcase } from './components/CreativeShowcase';
import { ContactSection } from './components/ContactSection';
import { AdminModal } from './components/AdminModal';
import { ProjectEditorModal } from './components/ProjectEditorModal';
import { Footer } from './components/Footer';
import { Play, X } from 'lucide-react';

export default function App() {
  const [projects, setProjects] = useState<Project[]>(() => storage.getProjects());
  const [settings, setSettings] = useState<PortfolioSettings>(() => storage.getSettings());
  
  // Welcome popup: show on first visit or when triggered manually
  const [showWelcome, setShowWelcome] = useState<boolean>(() => !storage.hasSeenWelcome());
  
  // Modals & Navigation
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState<Project | null>(null);
  const [isEditorModalOpen, setIsEditorModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [showReelModal, setShowReelModal] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Sync projects and settings to storage on update
  const handleSaveProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
    storage.saveProjects(newProjects);
  };

  const handleSaveSettings = (newSettings: PortfolioSettings) => {
    setSettings(newSettings);
    storage.saveSettings(newSettings);
  };

  const handleToggleHideEarnings = (val: boolean) => {
    const updated = { ...settings, hideAllEarnings: val };
    handleSaveSettings(updated);
  };

  // Direct Project Editor Handlers
  const handleOpenEditor = (proj?: Project) => {
    setEditingProject(proj || null);
    setIsEditorModalOpen(true);
  };

  const handleSaveFromEditor = (savedProject: Project) => {
    const existingIndex = projects.findIndex((p) => p.id === savedProject.id);
    let updated: Project[];
    if (existingIndex >= 0) {
      updated = [...projects];
      updated[existingIndex] = savedProject;
    } else {
      updated = [savedProject, ...projects];
    }
    handleSaveProjects(updated);
    if (selectedProject?.id === savedProject.id) {
      setSelectedProject(savedProject);
    }
  };

  const handleDeleteFromEditor = (id: string) => {
    const updated = projects.filter((p) => p.id !== id);
    handleSaveProjects(updated);
    if (selectedProject?.id === id) {
      setSelectedProject(null);
    }
  };

  // Section scroll tracker
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'results', 'services', 'brands', 'showcase', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBrandClick = (projectId: string) => {
    const targetProj = projects.find((p) => p.id === projectId);
    if (targetProj) {
      setSelectedProject(targetProj);
    } else {
      scrollToSection('projects');
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    scrollToSection('contact');
  };

  const handleEnterPortfolio = () => {
    setShowWelcome(false);
    storage.setSeenWelcome(true);
    scrollToSection('hero');
  };

  const handleCloseWelcome = () => {
    setShowWelcome(false);
    storage.setSeenWelcome(true);
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-100 font-sans selection:bg-amber-500/20 selection:text-white">
      {/* Animated Welcome Popup (First-time visit or replayed) */}
      <WelcomePopup
        isOpen={showWelcome}
        onEnter={handleEnterPortfolio}
        onClose={handleCloseWelcome}
      />

      {/* Sticky Top Navigation Bar */}
      <Navbar
        isAdminLoggedIn={isAdminLoggedIn}
        onOpenAdmin={() => setAdminModalOpen(true)}
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />

      {/* Main Portfolio Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onExploreWork={() => scrollToSection('projects')}
          onCollaborate={() => scrollToSection('contact')}
          onOpenReel={() => setShowReelModal(true)}
          totalProjects={projects.filter((p) => p.title && p.title.trim().length > 0).length || 4}
        />

        {/* Projects Section */}
        <ProjectsSection
          projects={projects}
          onSelectProject={(p) => setSelectedProject(p)}
          hideAllEarnings={settings.hideAllEarnings}
          isAdmin={isAdminLoggedIn}
          onAddNewProject={() => handleOpenEditor()}
          onEditProject={(p) => handleOpenEditor(p)}
        />

        {/* Results & Achievement Dashboard */}
        <ResultsDashboard
          projects={projects}
          hideAllEarnings={settings.hideAllEarnings}
          onToggleHideEarnings={handleToggleHideEarnings}
          isAdmin={isAdminLoggedIn}
          onSelectProject={(p) => setSelectedProject(p)}
        />

        {/* Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Brands and Collaborations */}
        <BrandsSection projects={projects} onBrandClick={handleBrandClick} />

        {/* Creative Showcase & Lightbox */}
        <CreativeShowcase
          projects={projects}
          onSelectProject={(p) => setSelectedProject(p)}
        />

        {/* Contact & Collaboration */}
        <ContactSection preselectedService={preselectedService} />
      </main>

      {/* Footer */}
      <Footer
        onReplayWelcome={() => setShowWelcome(true)}
        onOpenAdmin={() => setAdminModalOpen(true)}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Detailed Project Popup Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        hideAllEarnings={settings.hideAllEarnings}
        isAdmin={isAdminLoggedIn}
        onEdit={(p) => handleOpenEditor(p)}
      />

      {/* Dedicated Project Editor & Template Modal */}
      <ProjectEditorModal
        isOpen={isEditorModalOpen}
        onClose={() => {
          setIsEditorModalOpen(false);
          setEditingProject(null);
        }}
        project={editingProject}
        onSave={handleSaveFromEditor}
        onDelete={handleDeleteFromEditor}
      />

      {/* Admin Management Modal */}
      <AdminModal
        isOpen={adminModalOpen}
        onClose={() => {
          setAdminModalOpen(false);
          setProjectToEdit(null);
        }}
        projects={projects}
        onSaveProjects={handleSaveProjects}
        settings={settings}
        onSaveSettings={handleSaveSettings}
        isAdminLoggedIn={isAdminLoggedIn}
        setIsAdminLoggedIn={setIsAdminLoggedIn}
        projectToEdit={projectToEdit}
        onClearProjectToEdit={() => setProjectToEdit(null)}
      />

      {/* Creative Showreel Video Player Modal */}
      {showReelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/60">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-amber-400 fill-current" />
                <span className="text-sm font-bold text-white font-display">
                  PECULIAR — WEB3 GROWTH &amp; CAMPAIGN SHOWREEL
                </span>
              </div>
              <button
                onClick={() => setShowReelModal(false)}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
                aria-label="Close showreel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Presentation Viewport */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src="/src/assets/images/showcase_ai_cyberpunk_1794348743010.jpg"
                alt="Showreel Master Keyframe"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-400 hover:bg-amber-300 text-black flex items-center justify-center shadow-xl shadow-amber-400/40 mb-4 transition-transform hover:scale-110">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                  Memecoins · Crypto Casinos · DEXs · Games
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-md mt-2">
                  High-velocity audience acquisition, viral DexScreener trending sprints, and active player funnels.
                </p>
                <button
                  onClick={() => {
                    setShowReelModal(false);
                    scrollToSection('contact');
                  }}
                  className="mt-5 px-5 py-2 rounded-xl text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 transition-colors"
                >
                  Contact For Campaign Planning
                </button>
              </div>
            </div>

            <div className="px-6 py-3 border-t border-zinc-800 bg-zinc-950 flex items-center justify-between text-xs text-zinc-500 font-mono">
              <span>Viral Raids · DexScreener Trending · Alpha Callers · Player Onboarding</span>
              <span>Available 24/7</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
