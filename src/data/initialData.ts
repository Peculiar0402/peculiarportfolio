import { Project, ServiceItem, BrandPartner, PortfolioSettings } from '../types/portfolio';

export const INITIAL_SETTINGS: PortfolioSettings = {
  hideAllEarnings: false,
  adminPin: '1234',
  portfolioName: 'PECULIAR PORTFOLIO',
  creatorName: 'PECULIAR',
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Aetheria: Decentralized Frontier Teaser',
    brandName: 'Aether Protocol',
    brandCategory: 'Web3 & AI Infrastructure',
    brandLogoText: 'Æ',
    coverImage: '/src/assets/images/showcase_ai_cyberpunk_1794348743010.jpg',
    category: 'AI Video',
    shortDescription: 'Cinematic worldbuilding teaser trailer combining Midjourney v6 keyframes, Runway Gen-3 motion synthesis, and spatial sound design.',
    fullOverview: 'Aether Protocol commissioned a 90-second cinematic reveal teaser to unveil their next-generation zero-knowledge consensus architecture at Global Web3 Summit. The challenge was translating abstract cryptographic mathematics into a breathtaking, story-driven sci-fi narrative of human explorers discovering an infinite cosmic computing lattice.',
    brandInfo: 'Aether Protocol is a venture-backed distributed compute network enabling decentralized artificial intelligence workflows across global validator clusters.',
    services: [
      'AI Worldbuilding & Concept Art',
      'Runway Gen-3 Motion Synthesis',
      'Cinematic Camera Direction',
      'Sound Design & 7.1 Surround Mix',
      'Scriptwriting & Storyboarding'
    ],
    responsibilities: [
      'Authored the complete narrative screenplay and visual beat sheet',
      'Engineered 450+ bespoke generative prompt seeds for coherent environment consistency',
      'Upscaled and frame-interpolated footage to pristine 4K 60fps',
      'Directed professional voiceover casting and master dynamic sound mix'
    ],
    deliverables: [
      '90-second 4K 16:9 Official World Reveal Film',
      '3x 15-second 9:16 Vertical Cutdowns for X, Telegram & TikTok',
      'High-Resolution Keyframe Poster Pack for Exhibition Booths',
      'Full Stem Sound Design Pack & Sub-bass Audio Assets'
    ],
    date: 'October 2026',
    duration: '3 Weeks',
    amountPaid: 6800,
    isPaymentHidden: false,
    status: 'Featured',
    featured: true,
    results: {
      primaryMetric: '2.4M+',
      primaryLabel: 'Global Impressions',
      secondaryMetrics: [
        { label: 'Watch-Through Rate', value: '78.4%' },
        { label: 'X/Twitter Retweets', value: '14,200+' },
        { label: 'Discord Join Surge', value: '+8,600' }
      ],
      summary: 'The teaser generated immediate industry buzz, driving 14,200+ reposts within 48 hours and directly fueling the protocol’s sold-out testnet node registration.'
    },
    media: [
      {
        type: 'image',
        url: '/src/assets/images/showcase_ai_cyberpunk_1794348743010.jpg',
        caption: 'Final 4K frame: Explorers gazing upon the obsidian compute monoliths'
      },
      {
        type: 'image',
        url: '/src/assets/images/hero_peculiar_cinematic_1794348742341.jpg',
        caption: 'Production studio timeline & color correction suite during assembly'
      }
    ],
    clientTestimonial: {
      quote: 'Peculiar completely redefined our brand aura. The film elevated our protocol launch into an unforgettable cinematic phenomenon.',
      author: 'Marcus Vance',
      role: 'Head of Growth, Aether Protocol'
    },
    socials: {
      telegram: 'https://t.me/aether_protocol',
      discord: 'https://discord.gg/aether',
      x: 'https://x.com/aether_protocol',
      website: 'https://aether.network'
    }
  },
  {
    id: 'proj-2',
    title: 'Aurelia: Golden Elixir Luxury Campaign',
    brandName: 'Aurelia Maison',
    brandCategory: 'Haute Parfumerie & Luxury Goods',
    brandLogoText: 'AR',
    coverImage: '/src/assets/images/showcase_brand_commercial_1794348742458.jpg',
    category: 'Brand Campaigns',
    shortDescription: 'High-fashion commercial spotlighting the amber liquid nuances, optical refractions, and tactile luxury of artisanal fragrance.',
    fullOverview: 'Aurelia Maison required a multi-channel digital launch for their flagship autumn release "Sol d’Ambre". Combining physical macro lens cinematography with subtle 3D generative fluid particle overlays, we created an atmosphere of pure warmth, elegance, and exclusivity.',
    brandInfo: 'Aurelia Maison is an independent luxury fragrance house founded in Paris, specializing in rare botanical extractions and bespoke flacons.',
    services: [
      'Commercial Creative Direction',
      'Macro Product Cinematography',
      'Color Grading (ACES Pipeline)',
      'Digital Campaign Ad Variants',
      'Social Cut-Down Strategy'
    ],
    responsibilities: [
      'Architected aesthetic concept centering on dark obsidian slate and molten amber reflections',
      'Executed studio lighting and high-speed fluid motion captures',
      'Supervised sound design combining cello acoustics with subtle breath ambience',
      'Delivered aspect ratios optimized for Instagram, YouTube pre-roll, and digital billboards'
    ],
    deliverables: [
      '60-second Director’s Cut Hero Film',
      '4x 15-second E-commerce Social Ad Hooks',
      '12x High-Fashion Editorial Still Retouches',
      'E-Commerce Hero Banner Loop (WebM/MP4)'
    ],
    date: 'September 2026',
    duration: '4 Weeks',
    amountPaid: 8500,
    isPaymentHidden: false,
    status: 'Completed',
    featured: true,
    results: {
      primaryMetric: '+310%',
      primaryLabel: 'E-commerce Pre-Orders',
      secondaryMetrics: [
        { label: 'Organic Video Views', value: '890,000+' },
        { label: 'ROAS on Paid Ad Spend', value: '4.8x' },
        { label: 'Average Watch Duration', value: '44 seconds' }
      ],
      summary: 'The digital campaign drove complete sell-out of the limited 5,000-bottle premiere batch within twelve hours of the video premiere.'
    },
    media: [
      {
        type: 'image',
        url: '/src/assets/images/showcase_brand_commercial_1794348742458.jpg',
        caption: 'Signature campaign still: Flacon illuminated against slate rock texture'
      }
    ],
    clientTestimonial: {
      quote: 'Peculiar brought an authentic luxury sensibility that our international clientele fell in love with instantly.',
      author: 'Claire de Saint-Germain',
      role: 'Creative Director, Aurelia Maison'
    },
    socials: {
      telegram: '',
      discord: '',
      x: 'https://x.com/aurelia_maison',
      website: 'https://aurelia-parfums.com'
    }
  },
  {
    id: 'proj-3',
    title: 'Neon Horizon: Visual Storytelling & VFX Grade',
    brandName: 'Vanguard Film Studio',
    brandCategory: 'Independent Cinema & Streaming',
    brandLogoText: 'VF',
    coverImage: '/src/assets/images/showcase_before_after_1794348743041.jpg',
    category: 'Video Editing',
    shortDescription: 'Comprehensive color grading, pacing overhaul, and atmospheric visual effects for a psychological cyberpunk short film.',
    fullOverview: 'Tasked with elevating an independent sci-fi short film filmed in log format into an arresting cyberpunk visual showcase. Re-architected pacing, removed distracting practical rig artifacts, and introduced volumetric dusk purple atmosphere and rich neon city skyline illumination.',
    brandInfo: 'Vanguard Film Studio is a boutique production company producing festival-contending narrative drama and high-concept episodic series.',
    services: [
      'DaVinci Resolve Color Grading',
      'Dynamic Pacing & Continuity Edit',
      'Atmospheric VFX & Sky Replacements',
      'Audio Sweetening & Foley Enhancement'
    ],
    responsibilities: [
      'Processed 18 hours of raw Arri Alexa Mini LF camera footage',
      'Engineered unified custom film LUT calibrated for deep OLED blacks and vibrant magenta/violet highlights',
      'Composited dynamic animated city skyline backdrop into exterior mountain sequences'
    ],
    deliverables: [
      '22-Minute 4K HDR Festival Master',
      'Official 120-second Theatrical Trailer',
      'Before & After VFX Breakdown Reel',
      'DCP Packaging for Festival Screenings'
    ],
    date: 'August 2026',
    duration: '5 Weeks',
    amountPaid: 7200,
    isPaymentHidden: false,
    status: 'Completed',
    featured: true,
    results: {
      primaryMetric: '3 Awards',
      primaryLabel: 'Festival Laurels Won',
      secondaryMetrics: [
        { label: 'Official Selections', value: '7 Festivals' },
        { label: 'Vimeo Staff Pick', value: 'Awarded' },
        { label: 'YouTube Premiere Views', value: '380k' }
      ],
      summary: 'Garnered Best Cinematography and Best Editing honours across independent film circuits in Berlin and Montreal.'
    },
    media: [
      {
        type: 'image',
        url: '/src/assets/images/showcase_before_after_1794348743041.jpg',
        caption: 'Final graded shot: Lone protagonist looking across the glowing twilight metropolis'
      }
    ]
  },
  {
    id: 'proj-4',
    title: 'Kinetix Velocity: High-Octane Social Campaign',
    brandName: 'Kinetix Sportswear',
    brandCategory: 'Athletic Wear & Active Tech',
    brandLogoText: 'KX',
    coverImage: '/src/assets/images/hero_peculiar_cinematic_1794348742341.jpg',
    category: 'Social Media',
    shortDescription: 'Fast-paced, rhythm-synced vertical content suite for athlete apparel collection launch across TikTok, Reels, and Shorts.',
    fullOverview: 'Developed a 12-part high-retention vertical video series featuring kinetic typography, match cuts, seamless transitions, and aggressive sound effects designed to break thumb-scroll patterns on modern mobile feeds.',
    brandInfo: 'Kinetix is a fast-growing performance athletic brand empowering urban runners, calisthenics athletes, and track sprinters.',
    services: [
      'Short-Form Video Strategy',
      'Kinetic Typography Design',
      'Match-Cut Transition Editing',
      'Audio Hook & Trending Sound Design'
    ],
    responsibilities: [
      'Developed 12 video story scripts around athletic grit, speed, and recovery',
      'Crafted custom kinetic typography animation templates',
      'Optimized retention curves through rigorous 3-second hook testing'
    ],
    deliverables: [
      '12x 9:16 Ultra HD Finished Social Videos',
      '60x High-Energy Still Grab Thumbnails with Dynamic Badging',
      'Editable After Effects Motion Graphic Project Files'
    ],
    date: 'July 2026',
    duration: '2 Weeks',
    amountPaid: 5400,
    isPaymentHidden: false,
    status: 'Completed',
    featured: false,
    results: {
      primaryMetric: '4.8M+',
      primaryLabel: 'Organic Social Views',
      secondaryMetrics: [
        { label: 'Average Engagement Rate', value: '11.2%' },
        { label: 'Saves & Shares', value: '42,000+' },
        { label: 'Follower Growth', value: '+34k followers' }
      ],
      summary: 'Two videos achieved viral breakthrough, accumulating over 2.1M views each and increasing seasonal athletic line conversions by 185%.'
    },
    media: [
      {
        type: 'image',
        url: '/src/assets/images/hero_peculiar_cinematic_1794348742341.jpg',
        caption: 'Color grading and rapid transition sync suite'
      }
    ]
  },
  {
    id: 'proj-5',
    title: 'Solstice Protocol: Tokenomics & Ecosystem Explainer',
    brandName: 'Solstice Network',
    brandCategory: 'Decentralized Finance & Staking',
    brandLogoText: 'SOL',
    coverImage: '/src/assets/images/showcase_ai_cyberpunk_1794348743010.jpg',
    category: 'Web3',
    shortDescription: 'Simplifying complex liquidity staking algorithms through stunning isometric 3D animations and AI-rendered visual analogies.',
    fullOverview: 'Solstice Network needed to explain their restaking yield mechanisms to both institutional funds and everyday crypto participants without boring technical jargon. We created an engaging, visually rich motion explainer video that demystified their consensus mechanics.',
    brandInfo: 'Solstice Network is a modular liquidity protocol providing yield primitives and automated staking distribution on Ethereum Layer 2s.',
    services: [
      'Technical Script Simplification',
      '3D Isometric Motion Graphics',
      'AI Generative Scene Transitions',
      'Voiceover Production'
    ],
    responsibilities: [
      'Translated dense 40-page whitepaper into concise 2-minute visual narrative',
      'Animated geometric data flow diagrams and protocol vaults',
      'Directed sound design featuring futuristic synthesizer accents'
    ],
    deliverables: [
      '2-Minute Explainer Video (16:9 & 9:16)',
      'Interactive Web Visual Component for Landing Page',
      'Infographic Carousel Kit for Twitter Threads'
    ],
    date: 'June 2026',
    duration: '3 Weeks',
    amountPaid: 6200,
    isPaymentHidden: false,
    status: 'Completed',
    featured: false,
    results: {
      primaryMetric: '$18M+',
      primaryLabel: 'Total Value Locked Influx',
      secondaryMetrics: [
        { label: 'Video Views on X', value: '620,000' },
        { label: 'Community Telegram Growth', value: '+14,000' },
        { label: 'Investor Pitch Conversion', value: '91%' }
      ],
      summary: 'Became the central media anchor on their protocol documentation and homepage, cited by venture funds as one of the clearest explainers in the ecosystem.'
    },
    media: [
      {
        type: 'image',
        url: '/src/assets/images/showcase_ai_cyberpunk_1794348743010.jpg',
        caption: 'Visualizing liquidity pools as interconnected glowing energy nodes'
      }
    ]
  },
  {
    id: 'proj-6',
    title: 'Chronos Atelier: Timepiece Heritage Short',
    brandName: 'Chronos Atelier',
    brandCategory: 'Haute Horlogerie',
    brandLogoText: 'CH',
    coverImage: '/src/assets/images/showcase_brand_commercial_1794348742458.jpg',
    category: 'Brand Campaigns',
    shortDescription: 'Cinematic brand documentary examining the micro-mechanics, titanium finishing, and generational heritage of luxury tourbillons.',
    fullOverview: 'Produced a poetic, tactile brand documentary taking collectors into the inner workings of an ultra-luxury mechanical watchmaker. Filmed with extreme macro probe lenses and paired with acoustic ASMR sound design of gears, balance wheels, and ticking escapements.',
    brandInfo: 'Chronos Atelier is a Swiss-crafted watchmaker producing fewer than 150 handmade mechanical complications per year.',
    services: [
      'Mini-Documentary Production',
      'Macro Probe Cinematography',
      'ASMR Sound Architecture',
      'Brand Identity Storytelling'
    ],
    responsibilities: [
      'Conceptualized "The Architecture of a Second" narrative arc',
      'Captured microscopic gear teeth and hand-beveled chamfers under soft directional light',
      'Mastered spatial sound recording of mechanical movements'
    ],
    deliverables: [
      '3-Minute Brand Anthem Film',
      '5x Instagram Macro Vignettes',
      'Private Collector Exhibition Video Loop'
    ],
    date: 'May 2026',
    duration: '3 Weeks',
    amountPaid: 7800,
    isPaymentHidden: false,
    status: 'Completed',
    featured: false,
    results: {
      primaryMetric: '100%',
      primaryLabel: 'Edition Sold Out',
      secondaryMetrics: [
        { label: 'Average Watch Price', value: '$42,000' },
        { label: 'Private Inquiries Generated', value: '340+' },
        { label: 'Global Press Features', value: '11 Publications' }
      ],
      summary: 'The film premiered at Geneva Watch Week, leading directly to all 50 pieces in the collection being allocated to collectors within three days.'
    },
    media: [
      {
        type: 'image',
        url: '/src/assets/images/showcase_brand_commercial_1794348742458.jpg',
        caption: 'Precision studio lighting revealing tactile materials and mechanical depth'
      }
    ]
  },
  {
    id: 'proj-7',
    title: 'Lumina Digital: AI Character Storytelling Showcase',
    brandName: 'Lumina Media Labs',
    brandCategory: 'AI Entertainment & Virtual IP',
    brandLogoText: 'LM',
    coverImage: '/src/assets/images/showcase_before_after_1794348743041.jpg',
    category: 'Content Creation',
    shortDescription: 'Developing consistent, emotionally resonant digital avatars and cinematic lore for an interactive narrative universe.',
    fullOverview: 'Lumina Media needed to demonstrate that AI-generated characters could convey genuine vulnerability, personality, and cinematic presence across continuous multi-scene storytelling. We established character LoRA weights, consistent wardrobe, dynamic lighting, and expressive lip-sync integration.',
    brandInfo: 'Lumina Media Labs develops next-generation virtual creators, digital actors, and interactive entertainment experiences.',
    services: [
      'AI Character Consistency Engineering',
      'Facial Rigging & Motion Capture Retargeting',
      'Generative Environment Construction',
      'Interactive Dialogue Content'
    ],
    responsibilities: [
      'Trained custom visual identity models for 4 fictional protagonists',
      'Maintained 100% facial and costume consistency across 30 distinct scenes',
      'Integrated real-time emotive facial capture onto AI generated keyframes'
    ],
    deliverables: [
      'Pilot Episode (6 Minutes 4K)',
      'Character Bible & Prompt Asset Library',
      'Behind the Scenes Production Case Study Video'
    ],
    date: 'April 2026',
    duration: '4 Weeks',
    amountPaid: 6500,
    isPaymentHidden: false,
    status: 'Completed',
    featured: false,
    results: {
      primaryMetric: '1.2M+',
      primaryLabel: 'Pilot Watch-Time Minutes',
      secondaryMetrics: [
        { label: 'Audience Retention', value: '71%' },
        { label: 'Community Fan-Art Submissions', value: '450+' },
        { label: 'Series Greenlight', value: '10 Episodes Funded' }
      ],
      summary: 'The pilot showcase demonstrated groundbreaking visual fidelity, securing Lumina a multi-project development deal with an international streaming platform.'
    },
    media: [
      {
        type: 'image',
        url: '/src/assets/images/showcase_before_after_1794348743041.jpg',
        caption: 'Character close-up with volumetric ambient backlight and fine textural detail'
      }
    ]
  },
  {
    id: 'proj-8',
    title: 'Vortex Protocol: Decentralized Community Hype Trailer',
    brandName: 'Vortex Labs',
    brandCategory: 'Web3 Gaming & Metaverse',
    brandLogoText: 'VX',
    coverImage: '/src/assets/images/showcase_ai_cyberpunk_1794348743010.jpg',
    category: 'Web3',
    shortDescription: 'Fast-paced, heavy-bass teaser showcasing in-game assets, battle arenas, and token launch mechanics.',
    fullOverview: 'Vortex Labs needed a thunderous, high-energy reveal video to ignite anticipation ahead of their public NFT asset mint and governance token listing. We combined Unreal Engine 5 cinematic camera pans with custom generative AI textural passovers and custom glitch transitions.',
    brandInfo: 'Vortex Labs is a pioneering studio building open-world competitive sci-fi gaming experiences backed by blockchain asset ownership.',
    services: [
      'Unreal Engine 5 Cinematic Sequencing',
      'AI Texture & Environmental Enhancement',
      'Glitch FX & Sound Design',
      'Social Cut-Down Strategy'
    ],
    responsibilities: [
      'Extracted raw 3D assets and animated cinematic action sequences',
      'Composed adrenaline-fueled hybrid synth/orchestral soundtrack',
      'Delivered coordinated launch cutdowns across 4 platforms'
    ],
    deliverables: [
      '75-Second 4K Cinematic Trailer',
      '4x 10-Second Countdown Stories',
      'Animated Twitch & Discord Banner Graphics Pack'
    ],
    date: 'March 2026',
    duration: '2.5 Weeks',
    amountPaid: 5300,
    isPaymentHidden: false,
    status: 'Completed',
    featured: false,
    results: {
      primaryMetric: '$2.8M',
      primaryLabel: 'Mint Volume in 4 Hours',
      secondaryMetrics: [
        { label: 'Trailer Views on Twitter', value: '480,000' },
        { label: 'Whitelist Registrations', value: '38,000' },
        { label: 'Discord Server Capacity', value: '50k Cap Reached' }
      ],
      summary: 'The launch video became the most shared gaming teaser in the Web3 space during Q1 2026, driving an instantaneous mint sell-out.'
    },
    media: [
      {
        type: 'image',
        url: '/src/assets/images/showcase_ai_cyberpunk_1794348743010.jpg',
        caption: 'Futuristic battle arena keyframe rendered in ultra-widescreen cinematic ratio'
      }
    ]
  }
];

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'serv-1',
    title: 'AI Video Creation',
    subtitle: 'Next-Generation Generative Filmmaking',
    description: 'Transforming ambitious narratives into photorealistic, high-concept cinematic films using state-of-the-art AI video models (Runway Gen-3, Midjourney v6, Kling, Luma) combined with professional directorial craft.',
    deliverables: ['Custom Concept Art', 'Consistent Character Models', '4K Upscaling & Motion Polish', 'Commercial Rights Transfer'],
    timeline: '2–3 Weeks',
    startingPrice: '$4,500'
  },
  {
    id: 'serv-2',
    title: 'Cinematic Storytelling',
    subtitle: 'Emotion, Pacing & Narrative Impact',
    description: 'Crafting compelling visual narratives for brands, artists, and leaders. We script, storyboard, and direct films that captivate audiences, evoke genuine emotion, and build enduring brand loyalty.',
    deliverables: ['Full Treatment & Screenplay', 'Storyboard Visual Beat Sheet', 'Voiceover & Actor Direction', 'Sound Architecture'],
    timeline: '3–4 Weeks',
    startingPrice: '$5,000'
  },
  {
    id: 'serv-3',
    title: 'Video Editing',
    subtitle: 'Precision Rhythm, Color & Polish',
    description: 'Industry-standard post-production and editing in DaVinci Resolve & Premiere Pro. From rhythmic YouTube documentaries to glossy TV spots, we master timing, match cuts, sound foley, and cinematic color grading.',
    deliverables: ['Multi-Cam & Raw Assembly', 'ACES / Film Emulation Color Grade', 'Dialogue Cleaning & Foley FX', 'Social Cutdowns in Multiple Ratios'],
    timeline: '1–2 Weeks',
    startingPrice: '$3,200'
  },
  {
    id: 'serv-4',
    title: 'Social Media Content Creation',
    subtitle: 'High-Retention Short-Form Mastery',
    description: 'Hook-driven vertical videos (TikTok, Instagram Reels, YouTube Shorts) designed to stop thumbs in under 2 seconds. Optimized retention curves, kinetic typography, and viral trend integration.',
    deliverables: ['Batched 9:16 Video Series', 'High-CTR Custom Thumbnails', 'Kinetic Typography Templates', 'Platform-Specific Caption Hooks'],
    timeline: '1–2 Weeks',
    startingPrice: '$2,800'
  },
  {
    id: 'serv-5',
    title: 'Web3 Content & Campaign Promotion',
    subtitle: 'Crypto, Protocol & Metaverse Hype',
    description: 'Tailored visual campaigns for Web3 protocols, NFT collections, DeFi primitives, and decentralized AI networks. We translate complex smart contracts and tokenomics into viral, community-igniting media.',
    deliverables: ['Launch Teaser Trailers', 'Tokenomics 3D Explainer Videos', 'X/Twitter Hype Cutdowns', 'Exhibition & Keynote Video Loops'],
    timeline: '2–3 Weeks',
    startingPrice: '$4,800'
  },
  {
    id: 'serv-6',
    title: 'Brand Promotional Videos',
    subtitle: 'Luxury, Commercial & Product Launches',
    description: 'Commercial video productions designed to convert interest into revenue. Highlighting product craftsmanship, tactile textures, and premium brand aesthetics that command luxury pricing.',
    deliverables: ['Director’s Cut Main Commercial', '15s & 30s Paid Ad Variations', 'High-Resolution Campaign Stills', 'Web Video Integration Formats'],
    timeline: '3–4 Weeks',
    startingPrice: '$5,500'
  },
  {
    id: 'serv-7',
    title: 'Creative Direction',
    subtitle: 'Holistic Visual Architecture',
    description: 'Guiding brands from blank canvas to iconic market presence. We establish visual guidelines, moodboards, creative strategies, and multi-platform campaign aesthetics that set you leagues apart.',
    deliverables: ['Brand Visual Constitution', 'Campaign Creative Moodboards', 'Production Guidelines & Style Guides', 'Executive Creative Consulting'],
    timeline: '2–4 Weeks',
    startingPrice: '$4,000'
  },
  {
    id: 'serv-8',
    title: 'AI Visual Content',
    subtitle: 'Hyper-Realistic Stills & Asset Suites',
    description: 'Custom-trained AI image generation and graphic asset generation for website heroes, digital advertisements, album artwork, editorial spreads, and social channels.',
    deliverables: ['High-DPI 8K Master Retouches', 'Consistent Visual Style Libraries', 'Bespoke LoRA / Prompt Packs', 'Full Commercial License'],
    timeline: '1–2 Weeks',
    startingPrice: '$2,500'
  }
];

export const INITIAL_BRANDS: BrandPartner[] = [
  { id: 'b-1', name: 'Aether Protocol', category: 'Web3 & AI', projectId: 'proj-1', symbol: 'Æ', accent: '#a855f7' },
  { id: 'b-2', name: 'Aurelia Maison', category: 'Haute Parfumerie', projectId: 'proj-2', symbol: 'AR', accent: '#eab308' },
  { id: 'b-3', name: 'Vanguard Studios', category: 'Cinema & Film', projectId: 'proj-3', symbol: 'VF', accent: '#f43f5e' },
  { id: 'b-4', name: 'Kinetix Athletics', category: 'Sportswear Tech', projectId: 'proj-4', symbol: 'KX', accent: '#3b82f6' },
  { id: 'b-5', name: 'Solstice Network', category: 'DeFi & Staking', projectId: 'proj-5', symbol: 'SOL', accent: '#10b981' },
  { id: 'b-6', name: 'Chronos Atelier', category: 'Luxury Horology', projectId: 'proj-6', symbol: 'CH', accent: '#d97706' },
  { id: 'b-7', name: 'Lumina Media Labs', category: 'Virtual IP & AI', projectId: 'proj-7', symbol: 'LM', accent: '#8b5cf6' },
  { id: 'b-8', name: 'Vortex Labs', category: 'Web3 Gaming', projectId: 'proj-8', symbol: 'VX', accent: '#06b6d4' }
];

export const INITIAL_SHOWCASE_ITEMS = [
  {
    id: 'sc-1',
    title: 'Aetherian Monolith Odyssey',
    type: 'video',
    category: 'AI Video Reel',
    mediaUrl: '/src/assets/images/showcase_ai_cyberpunk_1794348743010.jpg',
    videoPreviewUrl: '', // can be played via video overlay modal
    duration: '01:30',
    description: 'High-concept exploration of artificial intelligence and cosmic architecture rendered with generative neural diffusion.'
  },
  {
    id: 'sc-2',
    title: 'Aurelia Sol d’Ambre Flacon',
    type: 'image',
    category: 'Brand Commercial',
    mediaUrl: '/src/assets/images/showcase_brand_commercial_1794348742458.jpg',
    duration: '',
    description: 'Tactile luxury still commercial featuring obsidian slate reflections and warm golden light diffusion.'
  },
  {
    id: 'sc-3',
    title: 'Cyberpunk Skyline — Grading & VFX',
    type: 'before_after',
    category: 'Color Grade & VFX',
    mediaUrl: '/src/assets/images/showcase_before_after_1794348743041.jpg',
    beforeUrl: '/src/assets/images/showcase_before_after_1794348743041.jpg', // in slider we apply grayscale/ungraded filter for comparison
    afterUrl: '/src/assets/images/showcase_before_after_1794348743041.jpg',
    duration: '',
    description: 'Interactive comparison between raw flat log sensor capture and final filmic ACES color grading.'
  },
  {
    id: 'sc-4',
    title: 'Creative Director Studio Suite',
    type: 'image',
    category: 'Studio Behind The Scenes',
    mediaUrl: '/src/assets/images/hero_peculiar_cinematic_1794348742341.jpg',
    duration: '',
    description: 'Behind the scenes inside Peculiar’s color suite and generative AI video synthesis pipeline.'
  }
];
