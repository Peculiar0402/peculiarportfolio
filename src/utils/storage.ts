import { Project, PortfolioSettings, ContactInquiry, ServiceItem, BrandPartner } from '../types/portfolio';
import { INITIAL_PROJECTS, INITIAL_SETTINGS, INITIAL_SERVICES, INITIAL_BRANDS } from '../data/initialData';

const STORAGE_KEYS = {
  PROJECTS: 'peculiar_portfolio_projects_v1',
  SETTINGS: 'peculiar_portfolio_settings_v1',
  INQUIRIES: 'peculiar_portfolio_inquiries_v1',
  BRANDS: 'peculiar_portfolio_brands_v1',
  SERVICES: 'peculiar_portfolio_services_v1',
  HAS_SEEN_WELCOME: 'peculiar_portfolio_has_seen_welcome_v1',
};

export const storage = {
  getProjects: (): Project[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Check if stored data has the old extra templates (projects 5-8 or > 5 items without proj-template)
          const hasOldTemplates =
            parsed.some(
              (p: Project) =>
                p.id === 'proj-5' ||
                p.id === 'proj-6' ||
                p.id === 'proj-7' ||
                p.id === 'proj-8'
            ) || (parsed.length > 5 && !parsed.some((p: Project) => p.id === 'proj-template'));

          // If stored items still have the old generic non-web3 samples, upgrade them to the new Web3 projects unless user customized them
          const migrated = parsed.map((p: Project) => {
            if (p.id === 'proj-1' && p.title === 'Aetheria: Decentralized Frontier Teaser') {
              return INITIAL_PROJECTS[0];
            }
            if (p.id === 'proj-2' && p.title === 'Aurelia: Golden Elixir Luxury Campaign') {
              return INITIAL_PROJECTS[1];
            }
            if (p.id === 'proj-3' && p.title === 'Neon Horizon: Visual Storytelling & VFX Grade') {
              return INITIAL_PROJECTS[2];
            }
            if (p.id === 'proj-4' && p.title === 'Kinetix Velocity: High-Octane Social Campaign') {
              return INITIAL_PROJECTS[3];
            }
            return p;
          });

          if (hasOldTemplates) {
            // Keep the 4 projects user has edited, remove the rest templates, and leave one blank template
            const first4 = migrated.slice(0, 4);
            const templateProject: Project = {
              id: 'proj-template',
              title: '',
              brandName: '',
              brandCategory: 'Select Category',
              brandLogoText: '+',
              coverImage: '',
              category: 'Memecoins',
              shortDescription: 'Clean project template. Click to edit and add your brand, deliverables, social links and media.',
              fullOverview: '',
              brandInfo: '',
              services: ['Audience Acquisition', 'Web3 Campaign Promotion'],
              responsibilities: ['Campaign Lead'],
              deliverables: ['Promotional Campaign Deliverable'],
              date: '2026',
              duration: '2 Weeks',
              amountPaid: 0,
              isPaymentHidden: false,
              status: 'In Progress',
              featured: false,
              results: {
                primaryMetric: '0',
                primaryLabel: 'Metric',
                summary: '',
              },
              media: [],
              socials: {
                telegram: '',
                discord: '',
                x: '',
                website: '',
              },
            };
            const updated = [...first4, templateProject];
            storage.saveProjects(updated);
            return updated;
          }
          storage.saveProjects(migrated);
          return migrated;
        }
      }
    } catch (e) {
      console.error('Failed to parse projects from localStorage', e);
    }
    return INITIAL_PROJECTS;
  },

  saveProjects: (projects: Project[]) => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    } catch (e) {
      console.error('Failed to save projects to localStorage', e);
    }
  },

  getSettings: (): PortfolioSettings => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (data) {
        return { ...INITIAL_SETTINGS, ...JSON.parse(data) };
      }
    } catch (e) {
      console.error('Failed to parse settings from localStorage', e);
    }
    return INITIAL_SETTINGS;
  },

  saveSettings: (settings: PortfolioSettings) => {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save settings to localStorage', e);
    }
  },

  getInquiries: (): ContactInquiry[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('Failed to parse inquiries from localStorage', e);
    }
    // Return sample inquiry so admin sees how it functions
    return [
      {
        id: 'inq-sample-1',
        name: 'Elena Rostova',
        email: 'elena@novaaudio.io',
        company: 'Nova Audio Labs',
        service: 'AI Video Creation',
        budget: '$5,000 – $10,000',
        message: 'Hi Peculiar, we were amazed by the Aether Protocol teaser. We would love to collaborate on a 60s announcement video for our generative audio synthesizer launch next month.',
        createdAt: '2026-11-08T10:14:00Z',
        status: 'New'
      }
    ];
  },

  saveInquiries: (inquiries: ContactInquiry[]) => {
    try {
      localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
    } catch (e) {
      console.error('Failed to save inquiries to localStorage', e);
    }
  },

  addInquiry: (inquiry: Omit<ContactInquiry, 'id' | 'createdAt' | 'status'>): ContactInquiry => {
    const list = storage.getInquiries();
    const newInquiry: ContactInquiry = {
      ...inquiry,
      id: `inq-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'New'
    };
    list.unshift(newInquiry);
    storage.saveInquiries(list);
    return newInquiry;
  },

  hasSeenWelcome: (): boolean => {
    try {
      return localStorage.getItem(STORAGE_KEYS.HAS_SEEN_WELCOME) === 'true';
    } catch {
      return false;
    }
  },

  setSeenWelcome: (value: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEYS.HAS_SEEN_WELCOME, value ? 'true' : 'false');
    } catch (e) {
      console.error(e);
    }
  },

  resetAllData: () => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(INITIAL_PROJECTS));
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(INITIAL_SETTINGS));
      localStorage.setItem(STORAGE_KEYS.BRANDS, JSON.stringify(INITIAL_BRANDS));
      localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(INITIAL_SERVICES));
    } catch (e) {
      console.error(e);
    }
  }
};
