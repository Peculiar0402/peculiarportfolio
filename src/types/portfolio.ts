export type ProjectCategory = 
  | 'All Projects'
  | 'Memecoins'
  | 'Casino & Betting'
  | 'DEX & Launchpad'
  | 'Web3 Gaming'
  | 'Prediction Markets'
  | 'Brand Campaigns'
  | 'AI Video' 
  | 'Video Editing' 
  | 'Content Creation' 
  | 'Web3' 
  | 'Social Media';

export interface ProjectMedia {
  type: 'image' | 'video' | 'youtube';
  url: string;
  thumbnail?: string;
  caption: string;
  isBeforeAfter?: boolean;
  beforeUrl?: string;
  afterUrl?: string;
}

export interface ProjectSocials {
  telegram?: string;
  discord?: string;
  x?: string;
  website?: string;
}

export interface Project {
  id: string;
  title: string;
  brandName: string;
  brandCategory: string;
  brandLogoText?: string;
  brandLogoImage?: string;
  coverImage: string;
  category: ProjectCategory;
  shortDescription: string;
  fullOverview: string;
  brandInfo: string;
  services: string[];
  responsibilities: string[];
  deliverables: string[];
  date: string;
  duration: string;
  amountPaid: number;
  isPaymentHidden?: boolean;
  status: 'Completed' | 'In Progress' | 'Featured';
  featured?: boolean;
  results: {
    primaryMetric: string;
    primaryLabel: string;
    secondaryMetrics?: { label: string; value: string }[];
    summary: string;
  };
  media: ProjectMedia[];
  clientTestimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  externalLink?: string;
  socials?: ProjectSocials;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
  startingPrice: string;
}

export interface BrandPartner {
  id: string;
  name: string;
  category: string;
  projectId: string;
  symbol: string;
  accent: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
  createdAt: string;
  status: 'New' | 'Replied';
}

export interface PortfolioSettings {
  hideAllEarnings: boolean;
  adminPin: string;
  portfolioName: string;
  creatorName: string;
}
