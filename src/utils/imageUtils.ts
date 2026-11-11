/**
 * Image resolution and fallback utilities for robust mobile and desktop rendering
 */

// Primary image URLs mapped to public static assets
export const STATIC_IMAGES = {
  hero: '/images/hero_peculiar_cinematic_1794348742341.jpg',
  aiCyberpunk: '/images/showcase_ai_cyberpunk_1794348743010.jpg',
  brandCommercial: '/images/showcase_brand_commercial_1794348742458.jpg',
  beforeAfter: '/images/showcase_before_after_1794348743041.jpg',
};

// Embedded SVG fallbacks tailored to each Web3 category ensuring 100% visual uptime on mobile
export const CATEGORY_SVG_FALLBACKS: Record<string, string> = {
  Memecoins:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0f0b15" />
            <stop offset="50%" stop-color="#191024" />
            <stop offset="100%" stop-color="#050308" />
          </linearGradient>
          <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#f59e0b" />
            <stop offset="50%" stop-color="#fbbf24" />
            <stop offset="100%" stop-color="#d97706" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="30" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <rect width="800" height="450" fill="url(#bg)" />
        <circle cx="400" cy="225" r="140" fill="#f59e0b" opacity="0.08" filter="url(#glow)" />
        <circle cx="400" cy="225" r="70" fill="none" stroke="url(#gold)" stroke-width="2" stroke-dasharray="6,4" />
        <circle cx="400" cy="225" r="54" fill="#181324" stroke="#f59e0b" stroke-width="2" />
        <text x="400" y="235" font-family="monospace, sans-serif" font-size="28" font-weight="900" fill="url(#gold)" text-anchor="middle">🚀 $MEME</text>
        <text x="400" y="325" font-family="sans-serif" font-size="14" font-weight="700" fill="#f3f4f6" text-anchor="middle" letter-spacing="3">VIRAL MEMECOIN LAUNCH</text>
        <text x="400" y="350" font-family="monospace, sans-serif" font-size="11" fill="#9ca3af" text-anchor="middle" letter-spacing="1">DEXSCREENER #1 TRENDING · 24/7 RAIDS</text>
      </svg>
    `),

  'Casino & Betting':
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#140718" />
            <stop offset="50%" stop-color="#210d29" />
            <stop offset="100%" stop-color="#08020a" />
          </linearGradient>
          <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#a855f7" />
          </linearGradient>
        </defs>
        <rect width="800" height="450" fill="url(#bg)" />
        <circle cx="400" cy="225" r="64" fill="#1b0c24" stroke="url(#gold)" stroke-width="2.5" />
        <text x="400" y="236" font-family="sans-serif" font-size="32" font-weight="900" fill="#f59e0b" text-anchor="middle">🎰 777</text>
        <text x="400" y="325" font-family="sans-serif" font-size="14" font-weight="700" fill="#f3f4f6" text-anchor="middle" letter-spacing="3">CRYPTO CASINO &amp; BETTING</text>
        <text x="400" y="350" font-family="monospace, sans-serif" font-size="11" fill="#c084fc" text-anchor="middle" letter-spacing="1">HIGH-ROLLER ACQUISITION · WAGER BLITZ</text>
      </svg>
    `),

  'DEX & Launchpad':
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#080f1e" />
            <stop offset="50%" stop-color="#0c1730" />
            <stop offset="100%" stop-color="#03060d" />
          </linearGradient>
          <linearGradient id="blue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#38bdf8" />
            <stop offset="100%" stop-color="#f59e0b" />
          </linearGradient>
        </defs>
        <rect width="800" height="450" fill="url(#bg)" />
        <circle cx="400" cy="225" r="64" fill="#0c1938" stroke="url(#blue)" stroke-width="2.5" />
        <text x="400" y="235" font-family="sans-serif" font-size="28" font-weight="900" fill="#38bdf8" text-anchor="middle">⚡ DEX</text>
        <text x="400" y="325" font-family="sans-serif" font-size="14" font-weight="700" fill="#f3f4f6" text-anchor="middle" letter-spacing="3">DEX &amp; LAUNCHPAD IDO</text>
        <text x="400" y="350" font-family="monospace, sans-serif" font-size="11" fill="#38bdf8" text-anchor="middle" letter-spacing="1">LIQUIDITY SPRINTS · WHITELIST SURGE</text>
      </svg>
    `),

  'Web3 Gaming':
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#091410" />
            <stop offset="50%" stop-color="#0e241c" />
            <stop offset="100%" stop-color="#030806" />
          </linearGradient>
          <linearGradient id="green" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#10b981" />
            <stop offset="100%" stop-color="#f59e0b" />
          </linearGradient>
        </defs>
        <rect width="800" height="450" fill="url(#bg)" />
        <circle cx="400" cy="225" r="64" fill="#0d241c" stroke="url(#green)" stroke-width="2.5" />
        <text x="400" y="235" font-family="sans-serif" font-size="28" font-weight="900" fill="#10b981" text-anchor="middle">🎮 GAME</text>
        <text x="400" y="325" font-family="sans-serif" font-size="14" font-weight="700" fill="#f3f4f6" text-anchor="middle" letter-spacing="3">WEB3 GAMING &amp; MINI-APPS</text>
        <text x="400" y="350" font-family="monospace, sans-serif" font-size="11" fill="#10b981" text-anchor="middle" letter-spacing="1">PLAYER INFLUX · GUILD PARTNERSHIPS</text>
      </svg>
    `),

  default:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0d0d12" />
            <stop offset="100%" stop-color="#050507" />
          </linearGradient>
          <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#eab308" />
          </linearGradient>
        </defs>
        <rect width="800" height="450" fill="url(#bg)" />
        <circle cx="400" cy="225" r="60" fill="#161622" stroke="url(#gold)" stroke-width="2" />
        <text x="400" y="234" font-family="monospace, sans-serif" font-size="24" font-weight="900" fill="#f59e0b" text-anchor="middle">PECULIAR</text>
        <text x="400" y="325" font-family="sans-serif" font-size="14" font-weight="700" fill="#e5e7eb" text-anchor="middle" letter-spacing="2">WEB3 CAMPAIGN DELIVERABLE</text>
      </svg>
    `),
};

/**
 * Normalizes an image URL to ensure compatibility across Vite dev, preview, and mobile browsers
 */
export function normalizeImageUrl(url?: string, category?: string): string {
  if (!url || typeof url !== 'string' || url.trim().length === 0) {
    if (category && CATEGORY_SVG_FALLBACKS[category]) {
      return CATEGORY_SVG_FALLBACKS[category];
    }
    return CATEGORY_SVG_FALLBACKS.default;
  }

  // Base64 data URLs or standard web URLs are used directly
  if (url.startsWith('data:') || url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // If pointing to /src/assets/images/, convert to standard /images/ public root
  if (url.startsWith('/src/assets/images/')) {
    const filename = url.replace('/src/assets/images/', '');
    return `/images/${filename}`;
  }

  return url;
}

/**
 * Handles image loading errors by swapping to reliable fallback
 */
export function handleImageFallback(
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  category?: string
): void {
  const target = event.currentTarget;
  const currentSrc = target.src || '';

  // If /images/ failed, try /src/assets/images/
  if (currentSrc.includes('/images/') && !currentSrc.includes('/src/assets/images/')) {
    target.src = currentSrc.replace('/images/', '/src/assets/images/');
    return;
  }

  // If already tried or other path, fall back to high-res stylized SVG
  const fallback = (category && CATEGORY_SVG_FALLBACKS[category]) || CATEGORY_SVG_FALLBACKS.default;
  if (target.src !== fallback) {
    target.src = fallback;
  }
}
