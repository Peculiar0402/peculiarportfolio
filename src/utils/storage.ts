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
        return JSON.parse(data);
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
