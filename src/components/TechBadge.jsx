import React from 'react';

/**
 * High-Fidelity SVG Brand Icons for Technology Badges
 * Professional, official brand icons scaled to ~14-16px.
 */
export function TechIcon({ name }) {
  const lower = name.toLowerCase().trim();

  // MongoDB
  if (lower.includes('mongo')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 1.5C11.5 2 7 8.5 7 13.5C7 17.5 9.5 21 12 22.5C14.5 21 17 17.5 17 13.5C17 8.5 12.5 2 12 1.5Z"
          fill="#47A248"
        />
        <path
          d="M12 1.5V22.5C12 22.5 17 17.5 17 13.5C17 8.5 12 1.5 12 1.5Z"
          fill="#499D4A"
        />
        <path
          d="M11.8 22.3C11.6 22 11.2 19.5 11.2 17.5C11.2 15.5 11.8 14 11.8 14C11.8 14 12.2 15.5 12.2 17.5C12.2 19.5 11.8 22.3 11.8 22.3Z"
          fill="#FFFFFF"
          opacity="0.6"
        />
      </svg>
    );
  }

  // Express.js
  if (lower.includes('express')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#000000" />
        <text
          x="12"
          y="16.5"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="12"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="bold"
        >
          ex
        </text>
      </svg>
    );
  }

  // Next.js (Black round badge with white gradient N)
  if (lower.includes('next')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="90" fill="#000000" />
        <path
          d="M149.508 157.438L69.1411 54H54V125.974H66.4251V69.7571L139.957 164.887C143.328 162.628 146.529 160.134 149.508 157.438Z"
          fill="url(#nextGradBadge)"
        />
        <rect x="115" y="54" width="12" height="72" fill="white" />
        <defs>
          <linearGradient id="nextGradBadge" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // React / React Native
  if (lower.includes('react')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="46" fill="#1E293B" />
        <ellipse cx="50" cy="50" rx="30" ry="11" stroke="#00D8FF" strokeWidth="3" transform="rotate(0 50 50)" />
        <ellipse cx="50" cy="50" rx="30" ry="11" stroke="#00D8FF" strokeWidth="3" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="30" ry="11" stroke="#00D8FF" strokeWidth="3" transform="rotate(120 50 50)" />
        <circle cx="50" cy="50" r="4.5" fill="#00D8FF" />
      </svg>
    );
  }

  // TypeScript
  if (lower.includes('typescript') || lower === 'ts') {
    return (
      <svg className="w-3.5 h-3.5 shrink-0 rounded-[3px]" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="14" fill="#3178C6" />
        <path
          d="M25 38H52M38.5 38V76M59 71C61 74 65 76 70 76C76 76 81 72 81 66C81 59 76 56 70 53C64 50 61 47 61 43C61 38 65 35 70 35C74 35 78 37 80 40"
          stroke="white"
          strokeWidth="8.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Tailwind CSS
  if (lower.includes('tailwind')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 54 33" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
          fill="#38BDF8"
        />
      </svg>
    );
  }

  // Shopify / Shopify Plus
  if (lower.includes('shopify')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 100 100" fill="none">
        <path d="M45 22C45 16 48 10 53 10C58 10 61 16 61 22" stroke="#5E8E3E" strokeWidth="5" strokeLinecap="round" />
        <path d="M30 25L42 22L45 25L32 90L18 84L30 25Z" fill="#5E8E3E" />
        <path d="M42 22L76 29L84 86L32 90L42 22Z" fill="#95BF47" />
        <path d="M42 22L76 29L71 42L44 32L42 22Z" fill="#80AC37" />
        <path
          d="M58 48C53 48 50 51 50 54C50 58 53 60 57 62C63 64 66 67 66 72C66 78 60 81 54 81C48 81 44 77 44 74M45 52C47 48 52 46 56 46C60 46 64 48 65 51"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Algolia
  if (lower.includes('algolia')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="48" fill="#5468FF" />
        <path
          d="M50 22C34.536 22 22 34.536 22 50C22 65.464 34.536 78 50 78C64.321 78 76.126 67.227 77.801 53.284H50V46.716H84.721C84.906 47.794 85 48.887 85 50C85 69.33 69.33 85 50 85C30.67 85 15 69.33 15 50C15 30.67 30.67 15 50 15C62.427 15 73.342 21.467 79.544 31.242L73.856 34.896C68.835 27.027 60.038 22 50 22Z"
          fill="white"
        />
        <circle cx="50" cy="50" r="6" fill="white" />
      </svg>
    );
  }

  // Three.js
  if (lower.includes('three')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    );
  }

  // WebGL
  if (lower.includes('webgl')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 32 32" fill="none">
        <path d="M16 2L2 9v14l14 7 14-7V9L16 2z" fill="#990000" />
        <path d="M16 5.5L5.5 11v10L16 26.5 26.5 21V11L16 5.5z" fill="#FFFFFF" />
        <path d="M16 9l7 4-7 4-7-4 7-4z" fill="#990000" />
      </svg>
    );
  }

  // Framer Motion
  if (lower.includes('framer')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF" />
      </svg>
    );
  }

  // Sanity / Sanity.io
  if (lower.includes('sanity')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="#F03E2F">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    );
  }

  // Node.js
  if (lower.includes('node')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 100 100" fill="none">
        <path d="M50 12L84 32V70L50 90L16 70V32L50 12Z" fill="#5FA04E" />
        <path d="M34 62V42L44 48V68L34 62Z" fill="#333333" />
        <path d="M50 32L66 42V62L50 72V32Z" fill="white" />
      </svg>
    );
  }

  // PostgreSQL
  if (lower.includes('postgres') || lower.includes('sql')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="46" fill="#336791" />
        <path
          d="M50 25C38 25 30 34 30 46C30 54 34 60 40 64V76L48 70H54C66 70 74 61 74 48C74 34 64 25 50 25ZM46 45C44 45 42 43 42 41C42 39 44 37 46 37C48 37 50 39 50 41C50 43 48 45 46 45ZM62 48C60 52 56 55 51 55V50C54 50 56 48 57 46L62 48Z"
          fill="white"
        />
      </svg>
    );
  }

  // Firebase
  if (lower.includes('firebase')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M4.5 18.5L2 13.5L8.5 2.5L12 9.5L4.5 18.5Z" fill="#FFA000" />
        <path d="M4.5 18.5L12 9.5L15.5 3L18.5 9L4.5 18.5Z" fill="#F57C00" />
        <path d="M12 22.5L2 13.5L4.5 18.5L12 22.5Z" fill="#FFCA28" />
        <path d="M12 22.5L22 13.5L18.5 9L12 22.5Z" fill="#FFA000" />
      </svg>
    );
  }

  // Flutter
  if (lower.includes('flutter')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 100 100" fill="none">
        <path d="M56 12L18 50L30 62L80 12H56Z" fill="#47C5FB" />
        <path d="M56 50L36 70L48 82L80 50H56Z" fill="#02569B" />
        <path d="M48 82L56 90H80L62 72L48 82Z" fill="#01579B" />
      </svg>
    );
  }

  // Python
  if (lower.includes('python')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 100 100" fill="none">
        <path d="M49 10c-18 0-17 8-17 8l.01 8H50v2.4H24S10 26.5 10 44c0 18 12 17 12 17h7v-10s-.4-12 12-12h17s11 .2 11-11c0-11-9-18-21-18zm-9 6a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" fill="#3776AB" />
        <path d="M51 90c18 0 17-8 17-8l-.01-8H50v-2.4h26s14 1.9 14-15.6c0-18-12-17-12-17h-7v10s.4 12-12 12H42s-11-.2-11 11c0 11 9 18 21 18zm9-6a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" fill="#FFD438" />
      </svg>
    );
  }

  // Docker
  if (lower.includes('docker')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13 3h2v2h-2V3zm-3 3h2v2h-2V6zm3 0h2v2h-2V6zm3 0h2v2h-2V6zm-9 3h2v2H7V9zm3 0h2v2h-2V9zm3 0h2v2h-2V9zm3 0h2v2h-2V9zm5.5 3c-.3-1.6-1.5-2.2-2.5-2-1-.8-2.5-.5-3 .2-.3-.2-.7-.2-1-.2H2c-.5 0-1 .4-1 1v6c0 3 2.5 5 7 5 5 0 8-2.5 8.5-5.5.3-.2.8-.5 1.5-.5 1 0 2-.8 2-2 0-.3-.2-.7-.5-1z" />
      </svg>
    );
  }

  // Redis
  if (lower.includes('redis')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="#DC382D">
        <path d="M21 7l-9-5-9 5 9 5 9-5zm-9 7.5L3 9.5V17l9 5 9-5V9.5l-9 5z" />
      </svg>
    );
  }

  // GraphQL
  if (lower.includes('graphql')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="#E10098">
        <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.3L4.99 8.35v7.3L12 19.7l7.01-4.05v-7.3L12 4.3z" />
      </svg>
    );
  }

  // WebSockets / WebRTC / Socket.IO
  if (lower.includes('socket') || lower.includes('webrtc')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0 text-[#0b5cff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    );
  }

  // Rust
  if (lower.includes('rust')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="#CE412B">
        <circle cx="12" cy="12" r="10" stroke="#000" strokeWidth="1.5" />
        <path d="M8 8h5a3 3 0 0 1 0 6H8V8zm0 6h4l3 4" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // Go / Golang
  if (lower === 'go' || lower.includes('golang')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="#00ADD8">
        <path d="M3 13h10v2H3zm2-4h14v2H5zm4-4h8v2H9z" />
      </svg>
    );
  }

  // Auth0
  if (lower.includes('auth0')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="#EB5424">
        <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z" />
      </svg>
    );
  }

  // AWS SDK
  if (lower.includes('aws')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="#FF9900">
        <path d="M12 3L2 8l10 5 10-5-10-5zM2 14l10 5 10-5M2 19l10 5 10-5" stroke="#FF9900" strokeWidth="1.5" fill="none" />
      </svg>
    );
  }

  // WebAssembly / WASM
  if (lower.includes('wasm') || lower.includes('webassembly')) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="#654FF0">
        <rect x="2" y="4" width="20" height="16" rx="3" fill="#654FF0" />
        <path d="M6 8l2 8 2-6 2 6 2-8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Default clean code symbol badge
  return (
    <svg className="w-3.5 h-3.5 shrink-0 text-[#0b5cff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

/**
 * Technology Pill Badge Component
 * Compact, balanced horizontal pill badge with official logo and name
 * Optional size prop: 'sm' (for cards) or 'md' (for modal)
 */
export default function TechBadge({ name, size = 'sm' }) {
  const isMd = size === 'md';

  return (
    <div
      className={`inline-flex items-center select-none shadow-[0_1px_2px_rgba(37,99,235,0.03)] hover:-translate-y-0.5 transition-all duration-150 ${
        isMd
          ? 'gap-2 px-3 py-1.5 rounded-[9px] bg-[#f4f8fe] hover:bg-[#eaf2fd] text-slate-800 hover:text-slate-950 border border-blue-100 hover:border-blue-200'
          : 'gap-1.5 px-2.5 py-1 rounded-[8px] bg-[#f4f8fe] hover:bg-[#eaf2fd] text-slate-700 hover:text-slate-900 border border-blue-100/80 hover:border-blue-200'
      }`}
      title={name}
    >
      <TechIcon name={name} />
      <span className={`${isMd ? 'text-[13px]' : 'text-[12px]'} font-medium leading-none tracking-tight whitespace-nowrap`}>
        {name}
      </span>
    </div>
  );
}
