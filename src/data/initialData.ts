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
    title: 'DogeMax: Viral Memecoin Launch & Trending Sprint',
    brandName: 'DogeMax Token',
    brandCategory: 'Memecoins & Community Tokens',
    brandLogoText: 'DM',
    coverImage: '/src/assets/images/showcase_ai_cyberpunk_1794348743010.jpg',
    category: 'Memecoins',
    shortDescription: 'High-velocity viral launch campaign driving DexScreener #1 trending, 35+ Telegram alpha caller activations, and 14,000+ token holders.',
    fullOverview: 'Orchestrated the comprehensive pre-launch and launch-day promotional blitz for DogeMax. Coordinated meme creative engineering, coordinated Telegram raid squads, scheduled high-profile alpha caller drops across X and Telegram, and achieved organic DexScreener front-page trending within 90 minutes of DEX pool deployment.',
    brandInfo: 'DogeMax is a high-energy community memecoin deployed on Solana with deflationary mechanics and viral social raid culture.',
    services: [
      'Memecoin Viral Launch Strategy',
      'DexScreener & DEXTools Trending Push',
      'KOL & Alpha Caller Coordination (35+ Channels)',
      '24/7 Telegram Raid Management & Bots',
      'Viral Meme Video Teasers & Sound Hooks'
    ],
    responsibilities: [
      'Managed end-to-end promotional timeline from stealth tease to DEX launch',
      'Coordinated 35+ verified Web3 callers across top Tier-1 & Tier-2 alpha groups',
      'Created 50+ viral meme assets, reaction GIFs, and animated ticker banners',
      'Directed live X Spaces voice stage with 3,800+ concurrent listeners'
    ],
    deliverables: [
      'DexScreener #1 Trending for 18 Continuous Hours',
      '50+ High-Conversion Meme Graphics & Motion Cutdowns',
      'Community Growth Sprint (+18,500 Telegram Members)',
      'Comprehensive Post-Launch Volume Retention Blueprint'
    ],
    date: 'October 2026',
    duration: '2 Weeks',
    amountPaid: 8500,
    isPaymentHidden: false,
    status: 'Featured',
    featured: true,
    results: {
      primaryMetric: '$14.2M',
      primaryLabel: 'Peak 24h Trading Volume',
      secondaryMetrics: [
        { label: 'Token Holders', value: '14,200+' },
        { label: 'DexScreener Rank', value: '#1 Trending' },
        { label: 'Telegram Community Inflow', value: '+18,500' }
      ],
      summary: 'The campaign propelled DogeMax to the #1 spot on Solana trending tokens, generating $14.2M in day-one volume and onboarded over 14,000 unique wallet holders.'
    },
    media: [
      {
        type: 'image',
        url: '/src/assets/images/showcase_ai_cyberpunk_1794348743010.jpg',
        caption: 'Viral launch keyframe & DexScreener trending hero asset'
      },
      {
        type: 'image',
        url: '/src/assets/images/hero_peculiar_cinematic_1794348742341.jpg',
        caption: 'Promotional war room & real-time caller coordination suite'
      }
    ],
    clientTestimonial: {
      quote: 'Peculiar brought raw energy and calculated marketing precision. His caller network and raid coordination took us straight to #1 on DexScreener.',
      author: 'Kaelen R.',
      role: 'Lead Dev, DogeMax'
    },
    socials: {
      telegram: 'https://t.me/PeculiarXD',
      discord: '',
      x: 'https://x.com/PeculiarXD',
      website: 'https://dogemax.meme'
    }
  },
  {
    id: 'proj-2',
    title: 'StakeVolt: Crypto Casino & Sports Betting Acquisition',
    brandName: 'StakeVolt Casino',
    brandCategory: 'iGaming, Casino & Betting',
    brandLogoText: 'SV',
    coverImage: '/src/assets/images/showcase_brand_commercial_1794348742458.jpg',
    category: 'Casino & Betting',
    shortDescription: 'Multi-stage player onboarding sprint delivering 4,800 active crypto depositors, VIP high-roller acquisition, and affiliate streamer activation.',
    fullOverview: 'StakeVolt commissioned an aggressive user acquisition push to scale their Web3 sportsbook and crypto live casino. We deployed high-conversion influencer giveaways, live stream wagering raids, wager bonus hooks, and targeted Telegram crypto betting communities across CIS, LATAM, and Southeast Asia.',
    brandInfo: 'StakeVolt is a fast-growing licensed crypto casino and sportsbook supporting instant multi-chain crypto deposits, live dealer blackjack, and provably fair originals.',
    services: [
      'Crypto Casino Player Acquisition Funnels',
      'VIP High-Roller Targeted Outreach',
      'Streamer & Affiliate Promotion Deals',
      'Sports Betting Event Tournament Hype',
      'Wager Bonus Promo Video Production'
    ],
    responsibilities: [
      'Designed high-converting deposit bonus promotional funnels',
      'Recruited 12 top Kick/YouTube crypto casino live streamers',
      'Segmented high-roller crypto whales for private VIP rakeback campaigns',
      'Monitored real-time retention and first-time deposit (FTD) conversion rates'
    ],
    deliverables: [
      '4,800+ First-Time Crypto Depositors (FTDs)',
      '12x Live Streamer Sponsored Broadcasts',
      '6x High-Paced Promotional Teaser Videos for X & Telegram',
      'Automated Telegram Rakeback & Bonus Distribution Channel'
    ],
    date: 'September 2026',
    duration: '4 Weeks',
    amountPaid: 12500,
    isPaymentHidden: false,
    status: 'Completed',
    featured: true,
    results: {
      primaryMetric: '$2.8M',
      primaryLabel: 'Monthly Wagering Volume',
      secondaryMetrics: [
        { label: 'Active Depositors (FTD)', value: '4,800+' },
        { label: 'Player 30-Day Retention', value: '41.8%' },
        { label: 'Average Deposit Size', value: '$240 USD' }
      ],
      summary: 'Drove over $2.8M in monthly wagering turnover and acquired 4,800+ verified active betting accounts with industry-leading 41% month-one retention.'
    },
    media: [
      {
        type: 'image',
        url: '/src/assets/images/showcase_brand_commercial_1794348742458.jpg',
        caption: 'VIP high-roller tournament promotional visual'
      }
    ],
    clientTestimonial: {
      quote: 'Peculiar understands player acquisition better than traditional agencies. The conversion on his crypto casino funnels blew past our KPI targets.',
      author: 'Viktor V.',
      role: 'Head of Marketing, StakeVolt'
    },
    socials: {
      telegram: 'https://t.me/PeculiarXD',
      discord: '',
      x: 'https://x.com/PeculiarXD',
      website: 'https://stakevolt.io'
    }
  },
  {
    id: 'proj-3',
    title: 'ApexLaunch: Multi-Chain DEX & Launchpad IDO Sprint',
    brandName: 'ApexLaunch DEX',
    brandCategory: 'DEX, DeFi & Launchpads',
    brandLogoText: 'AL',
    coverImage: '/src/assets/images/showcase_before_after_1794348743041.jpg',
    category: 'DEX & Launchpad',
    shortDescription: 'Comprehensive IDO launchpad awareness campaign generating $8.6M in initial token volume and 6,200 whitelisted pool participants.',
    fullOverview: 'ApexLaunch required maximum ecosystem visibility for their cross-chain liquidity protocol and Tier-1 launchpad debut. We structured a multi-tiered promotional blitz: liquidity provider incentive teasers, tier staking campaigns, co-promotional cross-posts with 8 ecosystem partner protocols, and heavily boosted X Spaces with leading DeFi founders.',
    brandInfo: 'ApexLaunch is a decentralized exchange and non-custodial token incubator facilitating seamless liquidity bootstrapping across Ethereum, Arbitrum, and Solana.',
    services: [
      'DEX & Launchpad IDO Promotion Sprint',
      'Liquidity Pool Mining Campaign Hype',
      'Whitelist User Funnels & Verification Raids',
      'DeFi Influencer & Research Thread Campaigns',
      'Ecosystem Co-Marketing & AMAs'
    ],
    responsibilities: [
      'Architected viral whitelist referral mechanism driving 28,000+ registrations',
      'Orchestrated 6 high-impact deep-dive threads by respected Web3 analysts',
      'Produced cinematic 3D tokenomics and swap mechanism animation trailers',
      'Moderated multi-chain launchpad AMA sessions with over 5,000 live participants'
    ],
    deliverables: [
      'Oversubscribed IDO Launch (100% Sold Out in 8 Minutes)',
      '6,200+ Active Liquidity Stakers Onboarded',
      '8x Multi-Platform Launch Teaser Clips & Visuals',
      'Comprehensive DEX Trading Volume Sprint Execution'
    ],
    date: 'August 2026',
    duration: '3 Weeks',
    amountPaid: 9800,
    isPaymentHidden: false,
    status: 'Completed',
    featured: true,
    results: {
      primaryMetric: '$8.6M',
      primaryLabel: 'Trading Volume Inflow',
      secondaryMetrics: [
        { label: 'IDO Sell-Out Time', value: '8 Minutes' },
        { label: 'Whitelisted Users', value: '28,400+' },
        { label: 'Total Value Locked (TVL)', value: '+$11.5M' }
      ],
      summary: 'The IDO allocation sold out completely in under 8 minutes, with initial DEX liquidity exceeding $11.5M TVL on launch day.'
    },
    media: [
      {
        type: 'image',
        url: '/src/assets/images/showcase_before_after_1794348743041.jpg',
        caption: 'ApexLaunch multi-chain DEX interface & tokenomics visual'
      }
    ],
    clientTestimonial: {
      quote: 'Peculiar is our go-to marketer for launchpad visibility. His reach across crypto native traders turned our IDO into an instant sell-out.',
      author: 'Dmitri S.',
      role: 'Co-Founder, ApexLaunch'
    },
    socials: {
      telegram: 'https://t.me/PeculiarXD',
      discord: '',
      x: 'https://x.com/PeculiarXD',
      website: 'https://apexlaunch.xyz'
    }
  },
  {
    id: 'proj-4',
    title: 'CyberClash: Web3 Gaming & Mini-App Player Influx',
    brandName: 'CyberClash Game',
    brandCategory: 'Web3 Gaming & Mini-Apps',
    brandLogoText: 'CC',
    coverImage: '/src/assets/images/hero_peculiar_cinematic_1794348742341.jpg',
    category: 'Web3 Gaming',
    shortDescription: 'Gamified player acquisition sprint onboarding 180,000+ active players onto Telegram mini-app and web3 PvP arenas.',
    fullOverview: 'CyberClash needed rapid community scale for their Telegram-native Web3 battle game. We constructed a viral referral loop, airdrop quest campaigns, micro-influencer gaming tournaments, and active guild onboarding that accelerated their daily active users (DAU) by over 600%.',
    brandInfo: 'CyberClash is a cyberpunk tactical card battler and Telegram mini-app with on-chain NFT asset wagering and daily token rewards.',
    services: [
      'Telegram Mini-App User Onboarding',
      'Web3 Gaming Player Referral Loops',
      'Crypto Gaming Guild Partnerships (5 Guilds)',
      'Airdrop Quest & Daily Challenge Campaigns',
      'High-CTR Gameplay Video & Meme Ads'
    ],
    responsibilities: [
      'Engineered gamified referral milestones driving 3.4x organic sharing multiplier',
      'Onboarded 5 competitive Web3 gaming guilds from Southeast Asia and Europe',
      'Produced 15 fast-paced gameplay clips optimized for Telegram and TikTok',
      'Managed 2-week launch leaderboard tournament with live prize payouts'
    ],
    deliverables: [
      '180,000+ Verified Player Registrations',
      '42,000+ Daily Active Users (DAU) Sustained',
      '15x High-Energy Gameplay Teaser Clips',
      'On-Chain Wallet Connection Surge (+65,000 Wallets)'
    ],
    date: 'July 2026',
    duration: '3 Weeks',
    amountPaid: 7600,
    isPaymentHidden: false,
    status: 'Completed',
    featured: false,
    results: {
      primaryMetric: '180,000+',
      primaryLabel: 'Active Players Onboarded',
      secondaryMetrics: [
        { label: 'Daily Active Users (DAU)', value: '42,000+' },
        { label: 'Wallets Connected', value: '65,000+' },
        { label: 'Organic Referral Multiplier', value: '3.4x' }
      ],
      summary: 'Propelled CyberClash into the top tier of Telegram mini-apps with over 180k players and sustained high in-game retention.'
    },
    media: [
      {
        type: 'image',
        url: '/src/assets/images/hero_peculiar_cinematic_1794348742341.jpg',
        caption: 'GameFi player tournament broadcast and streaming suite'
      }
    ],
    clientTestimonial: {
      quote: 'Peculiar brought an insane wave of real gamers to our mini-app. Our servers were buzzing from day one.',
      author: 'Elijah T.',
      role: 'Producer, CyberClash'
    },
    socials: {
      telegram: 'https://t.me/PeculiarXD',
      discord: '',
      x: 'https://x.com/PeculiarXD',
      website: 'https://cyberclash.game'
    }
  },
  {
    id: 'proj-template',
    title: '',
    brandName: '',
    brandCategory: 'Select Category',
    brandLogoText: '+',
    coverImage: '',
    category: 'Memecoins',
    shortDescription: 'Clean editable project template. Click Edit to add your campaign deliverables, results, social links, and imagery.',
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
      summary: ''
    },
    media: [],
    socials: {
      telegram: '',
      discord: '',
      x: '',
      website: ''
    }
  }
];

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'serv-1',
    title: 'Memecoin Viral Launches & Raids',
    subtitle: 'DexScreener Trending & Social Hype',
    description: 'Engineering massive viral momentum for memecoins and community tokens. We orchestrate DexScreener/DEXTools trending sprints, 24/7 Telegram raids, aggressive meme engineering, and synchronized alpha caller activations.',
    deliverables: ['DexScreener & DEXTools Trending Push', 'Coordinated Alpha Caller Drops (30+ Channels)', '24/7 Telegram Raid Squads & Custom Bots', 'Viral Meme Video Teasers & Ticker Graphics'],
    timeline: '3–7 Days',
    startingPrice: '$3,500'
  },
  {
    id: 'serv-2',
    title: 'Crypto Casino & Betting Acquisition',
    subtitle: 'High-Roller Onboarding & Wager Volume',
    description: 'High-conversion player acquisition funnels tailored for Web3 casinos, sportsbooks, and betting protocols. We drive verified first-time depositors (FTDs), recruit casino live streamers, and convert crypto whales into active wagerers.',
    deliverables: ['First-Time Depositor (FTD) Funnels', 'VIP High-Roller Targeted Outreach', 'Kick & YouTube Casino Streamer Deals', 'Tournament & Rakeback Promo Campaigns'],
    timeline: '2–4 Weeks',
    startingPrice: '$6,000'
  },
  {
    id: 'serv-3',
    title: 'DEX & Launchpad IDO Promotions',
    subtitle: 'Liquidity Hype & Trading Volume Sprints',
    description: 'Promoting decentralized exchanges, automated market makers (AMMs), and token launchpads. We build whitelist hysteria, drive initial swap volume, onboard liquidity providers, and moderate high-attendance X Spaces.',
    deliverables: ['Oversubscribed IDO Whitelist Sprints', 'Trading Volume Incentive Campaigns', 'DeFi Analyst Deep-Dive Threads', 'Ecosystem Partner Co-Marketing & AMAs'],
    timeline: '2–3 Weeks',
    startingPrice: '$5,000'
  },
  {
    id: 'serv-4',
    title: 'Web3 Gaming & GameFi Player Growth',
    subtitle: 'Mini-Apps & Active Gamer Onboarding',
    description: 'Scaling Telegram mini-apps, tap-to-earn loops, on-chain RPGs, and metaverse games. We design viral referral milestones, onboard active gaming guilds, and drive daily active users (DAU) who actually play and transact.',
    deliverables: ['Telegram Mini-App Player Inflow', 'Viral Referral Multiplier Mechanics', 'Gaming Guild Partnerships (SEA, LATAM, EU)', 'Gameplay Ad Trailers & Tournament Hype'],
    timeline: '2–3 Weeks',
    startingPrice: '$4,500'
  },
  {
    id: 'serv-5',
    title: 'Prediction Markets & Speculative Growth',
    subtitle: 'Bettor Onboarding & Narrative Building',
    description: 'Driving high-intent volume to on-chain prediction markets, binary options, and decentralized betting exchanges. We align trending real-world events, sports, and political narratives with your betting pools.',
    deliverables: ['Event-Driven Market Promo Blitzes', 'Crypto Speculator & Bettor Targeting', 'Real-Time Odds Infographics & Videos', 'Leaderboard & Liquidity Volume Incentives'],
    timeline: '1–3 Weeks',
    startingPrice: '$4,200'
  },
  {
    id: 'serv-6',
    title: 'Audience Targeting & User Funnels',
    subtitle: 'Finding The Exact Right Audience',
    description: 'Helping brands and crypto products discover their exact niche users instead of burning budget on bot clicks. We map wallet behaviors, crypto communities, and demographic segments to deliver high-converting active users.',
    deliverables: ['Niche Audience Segmentation & Mapping', 'High-Converting Landing & Funnel Optimization', 'Multi-Platform Shilling Strategies', 'User Retention & Activation Analytics'],
    timeline: '2–4 Weeks',
    startingPrice: '$4,000'
  },
  {
    id: 'serv-7',
    title: 'Influencer (KOL) Network & Raids',
    subtitle: 'Direct Access To Leading Crypto Callers',
    description: 'Direct relationships with top Tier-1 & Tier-2 crypto influencers, alpha callers, Telegram signal channels, and X Space hosts. We negotiate the best rates, ensure authentic delivery, and track real wallet conversions.',
    deliverables: ['Curated Network of 50+ Verified Callers', 'Coordinated Launch Multi-Channel Drops', 'Hosted X Spaces & Community AMAs', 'Transparent Call Tracking & Conversion Audits'],
    timeline: '1–2 Weeks',
    startingPrice: '$3,800'
  },
  {
    id: 'serv-8',
    title: 'Viral Web3 Creative Assets & Teasers',
    subtitle: 'High-Octane AI Motion & Ticker Memes',
    description: 'Scroll-stopping visual assets designed to convert crypto degens and serious investors alike. High-concept AI video trailers, 3D tokenomics breakdowns, viral meme packs, and billboard-grade launch announcements.',
    deliverables: ['Cinematic 4K AI Video Reveal Trailers', 'Batched Meme Pack & Viral Reaction GIFs', 'DexScreener/Banner Ad Graphics Suite', 'Full High-Resolution Commercial Media Rights'],
    timeline: '1–2 Weeks',
    startingPrice: '$3,000'
  }
];

export const INITIAL_BRANDS: BrandPartner[] = [
  { id: 'b-1', name: 'DogeMax Meme', category: 'Memecoins', projectId: 'proj-1', symbol: 'DM', accent: '#eab308' },
  { id: 'b-2', name: 'StakeVolt Casino', category: 'Crypto Betting', projectId: 'proj-2', symbol: 'SV', accent: '#a855f7' },
  { id: 'b-3', name: 'ApexLaunch DEX', category: 'DEX & Launchpad', projectId: 'proj-3', symbol: 'AL', accent: '#3b82f6' },
  { id: 'b-4', name: 'CyberClash Game', category: 'Web3 Gaming', projectId: 'proj-4', symbol: 'CC', accent: '#10b981' }
];

export const INITIAL_SHOWCASE_ITEMS = [
  {
    id: 'sc-1',
    title: 'DogeMax Viral Launch Ticker Blitz',
    type: 'video',
    category: 'Memecoin Campaign',
    mediaUrl: '/src/assets/images/showcase_ai_cyberpunk_1794348743010.jpg',
    videoPreviewUrl: '',
    duration: '01:00',
    description: 'DexScreener #1 trending promotional blitz and synchronized caller storm.'
  },
  {
    id: 'sc-2',
    title: 'StakeVolt High-Roller Casino Showcase',
    type: 'image',
    category: 'Crypto Casino & Betting',
    mediaUrl: '/src/assets/images/showcase_brand_commercial_1794348742458.jpg',
    duration: '',
    description: 'High-conversion VIP player acquisition campaign generating $2.8M in wagering volume.'
  },
  {
    id: 'sc-3',
    title: 'ApexLaunch Multi-Chain DEX Reveal',
    type: 'before_after',
    category: 'DEX & Launchpad',
    mediaUrl: '/src/assets/images/showcase_before_after_1794348743041.jpg',
    beforeUrl: '/src/assets/images/showcase_before_after_1794348743041.jpg',
    afterUrl: '/src/assets/images/showcase_before_after_1794348743041.jpg',
    duration: '',
    description: 'Interactive comparison between raw organic outreach vs. coordinated multi-channel launchpad blitz.'
  },
  {
    id: 'sc-4',
    title: 'Web3 Growth & Marketing Suite',
    type: 'image',
    category: 'Campaign Operations',
    mediaUrl: '/src/assets/images/hero_peculiar_cinematic_1794348742341.jpg',
    duration: '',
    description: 'Inside Peculiar’s real-time campaign monitoring, raid operations, and alpha caller dashboard.'
  }
];
