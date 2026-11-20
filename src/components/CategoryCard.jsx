import React from 'react';
import { ArrowRight } from 'lucide-react';
import serviceWebsitesImg from '../assets/service-websites.png';
import serviceMobileImg from '../assets/service-mobile.png';
import serviceSaasImg from '../assets/service-saas.png';

export default function CategoryCard({ category, index, onExplore }) {
  // Map category to its corresponding photorealistic showcase image
  const getShowcaseImage = () => {
    switch (category.id) {
      case 'websites':
        return {
          src: serviceWebsitesImg,
          alt: 'Modern desktop luxury fashion ecommerce storefront mockup with editorial typography and high-fashion photography'
        };
      case 'mobile':
        return {
          src: serviceMobileImg,
          alt: 'Two modern smartphones side-by-side displaying a sleek fintech banking app interface with balance overview and analytics'
        };
      case 'saas':
      default:
        return {
          src: serviceSaasImg,
          alt: 'Modern desktop SaaS analytics dashboard in browser window with revenue metrics, charts, and clean UI components'
        };
    }
  };

  const showcase = getShowcaseImage();

  /**
   * High-Fidelity SVG Brand Logos for service card tech stack pills
   * Exactly matching the rounded-full white pill style
   */
  const renderTechIcon = (techName) => {
    const lower = techName.toLowerCase();

    // Next.js (Black circle with white gradient N)
    if (lower.includes('next')) {
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="90" fill="#000000" />
          <path
            d="M149.508 157.438L69.1411 54H54V125.974H66.4251V69.7571L139.957 164.887C143.328 162.628 146.529 160.134 149.508 157.438Z"
            fill="url(#cardNextGrad)"
          />
          <rect x="115" y="54" width="12" height="72" fill="white" />
          <defs>
            <linearGradient id="cardNextGrad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );
    }

    // Shopify Plus (3D Green bag with handle & white S)
    if (lower.includes('shopify')) {
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 100 100" fill="none">
          <path
            d="M45 22C45 16 48 10 53 10C58 10 61 16 61 22"
            stroke="#5E8E3E"
            strokeWidth="5"
            strokeLinecap="round"
          />
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

    // TypeScript (Blue square with white TS)
    if (lower.includes('typescript') || lower === 'ts') {
      return (
        <svg className="w-4 h-4 shrink-0 rounded-[3px]" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="16" fill="#3178C6" />
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

    // Tailwind CSS (Signature cyan dual-waves)
    if (lower.includes('tailwind')) {
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 54 33" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
            fill="#38BDF8"
          />
        </svg>
      );
    }

    // React / React Native (Dark circle with blue orbital atom)
    if (lower.includes('react')) {
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="46" fill="#1E293B" />
          <ellipse cx="50" cy="50" rx="30" ry="11" stroke="#00D8FF" strokeWidth="3" transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="50" rx="30" ry="11" stroke="#00D8FF" strokeWidth="3" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="30" ry="11" stroke="#00D8FF" strokeWidth="3" transform="rotate(120 50 50)" />
          <circle cx="50" cy="50" r="4.5" fill="#00D8FF" />
        </svg>
      );
    }

    // Flutter (Cyan & blue layered wings)
    if (lower.includes('flutter')) {
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 100 100" fill="none">
          <path d="M56 12L18 50L30 62L80 12H56Z" fill="#47C5FB" />
          <path d="M56 50L36 70L48 82L80 50H56Z" fill="#02569B" />
          <path d="M48 82L56 90H80L62 72L48 82Z" fill="#01579B" />
        </svg>
      );
    }

    // Node.js (Green hexagon with node mark)
    if (lower.includes('node')) {
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 12L84 32V70L50 90L16 70V32L50 12Z"
            fill="#5FA04E"
          />
          <path
            d="M34 62V42L44 48V68L34 62Z"
            fill="#333333"
          />
          <path
            d="M50 32L66 42V62L50 72V32Z"
            fill="white"
          />
        </svg>
      );
    }

    // Firebase (Yellow/orange flame mark)
    if (lower.includes('firebase')) {
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 100 100" fill="none">
          <path d="M22 66L32 18L44 38L22 66Z" fill="#FFA000" />
          <path d="M78 66L62 30L44 38L78 66Z" fill="#F57C00" />
          <path d="M22 66L50 84L78 66L62 30L50 48L44 38L32 18L22 66Z" fill="#FFCA28" />
        </svg>
      );
    }

    // MongoDB (Green leaf icon)
    if (lower.includes('mongo')) {
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 10C50 10 32 30 32 54C32 72 44 86 50 90C56 86 68 72 68 54C68 30 50 10 50 10Z"
            fill="#13AA52"
          />
          <path
            d="M50 10V90C56 86 68 72 68 54C68 30 50 10 50 10Z"
            fill="#116149"
          />
        </svg>
      );
    }

    // Socket.IO (Dark circle with lightning bolt)
    if (lower.includes('socket')) {
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="46" fill="#010101" />
          <path
            d="M54 22L30 54H48L44 78L70 46H52L54 22Z"
            fill="white"
          />
        </svg>
      );
    }

    // REST APIs / Cloud (Cloud with connection lines)
    if (lower.includes('rest') || lower.includes('api') || lower.includes('cloud')) {
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="46" fill="#0284C7" />
          <path
            d="M32 60H68C73.5 60 78 55.5 78 50C78 44.8 74.2 40.5 69.2 40.1C68.1 33.2 62.1 28 55 28C49.3 28 44.3 31.4 42.2 36.3C40.6 35.5 38.8 35 37 35C31.5 35 27 39.5 27 45C27 46 27.2 47 27.5 48C24.4 49.3 22 52.4 22 56C22 61.5 26.5 66 32 66"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    // Default clean brand emblem
    return (
      <span className="w-4 h-4 rounded-full bg-blue-500/15 text-primary flex items-center justify-center text-[8px] font-mono font-bold shrink-0">
        {techName.slice(0, 2).toUpperCase()}
      </span>
    );
  };

  return (
    <div
      onClick={() => onExplore(category)}
      className="group relative flex flex-col h-full bg-white rounded-[24px] p-6 sm:p-7 border border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-[0_14px_36px_rgba(37,99,235,0.09)] hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer"
    >
      {/* 1. Visual preview image with fixed 16:9 aspect ratio */}
      <div className="mb-6 w-full">
        <div className="relative w-full aspect-[16/9] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200/60 shadow-xs group/img">
          <img
            src={showcase.src}
            alt={showcase.alt}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          {/* Subtle gradient overlay for visual polish */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/15 via-transparent to-transparent opacity-60" />
        </div>
      </div>

      {/* Main Content Area: Flex column to ensure identical heights & alignments */}
      <div className="flex flex-col flex-1">
        {/* 2. Service category numbered label */}
        <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary mb-1.5">
          {category.number}
        </div>

        {/* 3. Service title */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] tracking-tight group-hover:text-primary transition-colors duration-200 mb-2.5">
          {category.title}
        </h3>

        {/* 4. Description (2-3 lines, clear and professional) */}
        <p className="text-sm text-slate-600 leading-relaxed font-normal line-clamp-3 min-h-[4rem] mb-6">
          {category.shortDescription}
        </p>

        {/* 5. Technology stack pill badges with official brand SVG icons */}
        <div className="mt-auto pt-2 mb-6">
          <div className="flex flex-wrap gap-2 items-center">
            {category.technologies.slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-800 font-sans text-xs font-semibold border border-slate-200/90 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-primary/40 hover:shadow-2xs transition-all"
              >
                {renderTechIcon(tech)}
                <span className="tracking-tight text-slate-800">{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 6. Bottom CTA (Full-width subtle button with arrow aligned right) */}
        <div className="w-full pt-1">
          <div className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm border border-slate-200/70 group-hover:bg-blue-50/80 group-hover:text-primary group-hover:border-blue-200 transition-all duration-200">
            <span>{category.ctaText || 'Explore Projects'}</span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
