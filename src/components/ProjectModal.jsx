import React, { useEffect, useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Layers,
  Zap
} from 'lucide-react';

export default function ProjectModal({ category, currentProjectIndex = 0, onNavigate, onClose }) {
  const [slideDirection, setSlideDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Independent image gallery index for the active project
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageTransitioning, setIsImageTransitioning] = useState(false);

  const projects = category?.projects || [];
  const project = projects[currentProjectIndex] || projects[0];
  const totalCount = projects.length;

  // Resolve array of gallery images (up to 5) with graceful fallback
  const galleryImages = (project?.images && project.images.length > 0)
    ? project.images
    : (project?.image ? [project.image] : []);
  const totalImages = galleryImages.length;
  const currentImage = galleryImages[currentImageIndex] || project?.image;

  // Reset gallery to first image whenever project changes or modal opens
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentProjectIndex, category]);

  // Handle ESC, Left Arrow, Right Arrow navigation & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
        return;
      }

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        // Keyboard Left: navigate to previous gallery image
        handleImageChange('prev');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        // Keyboard Right: navigate to next gallery image
        handleImageChange('next');
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentImageIndex, totalImages, onClose]);

  if (!category || !project) return null;

  const hasPrevProject = currentProjectIndex > 0;
  const hasNextProject = currentProjectIndex < totalCount - 1;

  // Project navigation handler (outside buttons)
  const handleProjectChange = (newIndex, direction) => {
    if (newIndex < 0 || newIndex >= totalCount || newIndex === currentProjectIndex) return;
    setSlideDirection(direction);
    setIsAnimating(true);
    setCurrentImageIndex(0); // reset gallery to image 1
    onNavigate(newIndex);
    setTimeout(() => {
      setIsAnimating(false);
    }, 220);
  };

  // Image gallery navigation handler (inside image container with smooth looping)
  const handleImageChange = (direction) => {
    if (totalImages <= 1) return;
    setIsImageTransitioning(true);

    if (direction === 'prev') {
      setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : totalImages - 1));
    } else {
      setCurrentImageIndex((prev) => (prev < totalImages - 1 ? prev + 1 : 0));
    }

    setTimeout(() => {
      setIsImageTransitioning(false);
    }, 200);
  };

  const handleSelectDotImage = (targetIndex) => {
    if (targetIndex === currentImageIndex || targetIndex < 0 || targetIndex >= totalImages) return;
    setIsImageTransitioning(true);
    setCurrentImageIndex(targetIndex);
    setTimeout(() => {
      setIsImageTransitioning(false);
    }, 200);
  };

  /**
   * High-Fidelity SVG Brand Logos matching the exact visual style in the reference image
   */
  const renderTechIcon = (techName) => {
    const lower = techName.toLowerCase();

    // Next.js (Black circle with white gradient N)
    if (lower.includes('next')) {
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="90" fill="#000000" />
          <path
            d="M149.508 157.438L69.1411 54H54V125.974H66.4251V69.7571L139.957 164.887C143.328 162.628 146.529 160.134 149.508 157.438Z"
            fill="url(#nextGradModal)"
          />
          <rect x="115" y="54" width="12" height="72" fill="white" />
          <defs>
            <linearGradient id="nextGradModal" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );
    }

    // Shopify Plus (3D Green bag with handle and 'S')
    if (lower.includes('shopify')) {
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 100 100" fill="none">
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
        <svg className="w-5 h-5 shrink-0 rounded-[4px]" viewBox="0 0 100 100" fill="none">
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
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 54 33" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
            fill="#38BDF8"
          />
        </svg>
      );
    }

    // Algolia (Signature purple circle with radar target)
    if (lower.includes('algolia')) {
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="48" fill="#5468FF" />
          <path
            d="M50 22C34.536 22 22 34.536 22 50C22 65.464 34.536 78 50 78C64.321 78 76.126 67.227 77.801 53.284H50V46.716H84.721C84.906 47.794 85 48.887 85 50C85 69.33 69.33 85 50 85C30.67 85 15 69.33 15 50C15 30.67 30.67 15 50 15C62.427 15 73.342 21.467 79.544 31.242L73.856 34.896C68.835 27.027 60.038 22 50 22Z"
            fill="white"
          />
          <circle cx="50" cy="50" r="6" fill="white" />
        </svg>
      );
    }

    // React (Dark badge with blue orbital atom)
    if (lower.includes('react')) {
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="46" fill="#1E293B" />
          <ellipse cx="50" cy="50" rx="30" ry="11" stroke="#00D8FF" strokeWidth="3" transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="50" rx="30" ry="11" stroke="#00D8FF" strokeWidth="3" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="30" ry="11" stroke="#00D8FF" strokeWidth="3" transform="rotate(120 50 50)" />
          <circle cx="50" cy="50" r="4.5" fill="#00D8FF" />
        </svg>
      );
    }

    // Flutter (Cyan & dark blue layered wings)
    if (lower.includes('flutter')) {
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 100 100" fill="none">
          <path d="M56 12L18 50L30 62L80 12H56Z" fill="#47C5FB" />
          <path d="M56 50L36 70L48 82L80 50H56Z" fill="#02569B" />
          <path d="M48 82L56 90H80L62 72L48 82Z" fill="#01579B" />
        </svg>
      );
    }

    // Node.js (Green hexagon with node mark)
    if (lower.includes('node')) {
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 100 100" fill="none">
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

    // PostgreSQL (Blue database elephant glyph)
    if (lower.includes('postgres') || lower.includes('sql')) {
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="46" fill="#336791" />
          <path
            d="M50 25C38 25 30 34 30 46C30 54 34 60 40 64V76L48 70H54C66 70 74 61 74 48C74 34 64 25 50 25ZM46 45C44 45 42 43 42 41C42 39 44 37 46 37C48 37 50 39 50 41C50 43 48 45 46 45ZM62 48C60 52 56 55 51 55V50C54 50 56 48 57 46L62 48Z"
            fill="white"
          />
        </svg>
      );
    }

    // Default clean brand icon badge
    return (
      <span className="w-5 h-5 rounded-full bg-blue-500/15 text-primary flex items-center justify-center text-[9px] font-mono font-bold shrink-0">
        {techName.slice(0, 2).toUpperCase()}
      </span>
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 lg:p-10 bg-slate-950/65 backdrop-blur-md animate-fade-in select-none"
      onClick={onClose}
    >
      {/* 
        ========================================================================
        MODAL WRAPPER WITH EXTERNAL ARROWS
        Structure:
        ← [ Previous Project ]   [ PROJECT MODAL CARD ]   [ Next Project ] →
        ========================================================================
      */}
      <div
        className="relative w-full max-w-[1240px] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ---------------------------------------------------------------------
            DESKTOP / TABLET: PREVIOUS PROJECT ARROW (OUTSIDE MODAL)
            --------------------------------------------------------------------- */}
        <button
          onClick={() => handleProjectChange(currentProjectIndex - 1, 'prev')}
          disabled={!hasPrevProject}
          className={`hidden md:flex absolute -left-14 lg:-left-16 z-30 w-12 h-12 rounded-full items-center justify-center border transition-all duration-200 shadow-xl ${
            hasPrevProject
              ? 'bg-white hover:bg-blue-50/80 text-primary border-slate-200/90 hover:border-primary/40 hover:scale-105 active:scale-95 cursor-pointer shadow-slate-900/10'
              : 'bg-white/70 text-slate-300 border-slate-200/50 cursor-not-allowed opacity-50 shadow-none'
          }`}
          aria-label="Previous Project"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.2]" />
        </button>

        {/* ---------------------------------------------------------------------
            MAIN PROJECT MODAL CONTAINER
            --------------------------------------------------------------------- */}
        <div className="relative w-full max-h-[90vh] flex flex-col bg-white rounded-[24px] shadow-[0_20px_50px_rgba(15,23,42,0.18)] border border-slate-200/90 overflow-hidden">
          
          {/* =========================================================================
              HEADER
              ========================================================================= */}
          <div className="sticky top-0 z-20 px-6 sm:px-8 py-4 sm:py-4.5 bg-white/95 backdrop-blur-xs border-b border-slate-200/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              {/* Category Number & Name in small uppercase blue monospace */}
              <span className="font-mono text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-primary">
                {category.number}
              </span>

              {/* Subtle separator */}
              <span className="text-slate-300 font-light">/</span>

              {/* Showcase title in medium-sized dark slate text */}
              <span className="text-xs sm:text-sm md:text-base font-semibold text-slate-700 truncate">
                {category.title} Showcase
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {/* Mobile In-Header Compact Project Arrows */}
              <div className="flex md:hidden items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200/60">
                <button
                  onClick={() => handleProjectChange(currentProjectIndex - 1, 'prev')}
                  disabled={!hasPrevProject}
                  className={`w-7 h-7 rounded flex items-center justify-center transition-colors ${
                    hasPrevProject
                      ? 'text-primary hover:bg-white active:bg-slate-200'
                      : 'text-slate-300 cursor-not-allowed'
                  }`}
                  aria-label="Previous Project Mobile"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleProjectChange(currentProjectIndex + 1, 'next')}
                  disabled={!hasNextProject}
                  className={`w-7 h-7 rounded flex items-center justify-center transition-colors ${
                    hasNextProject
                      ? 'text-primary hover:bg-white active:bg-slate-200'
                      : 'text-slate-300 cursor-not-allowed'
                  }`}
                  aria-label="Next Project Mobile"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Project count badge: 01 / 05 */}
              <div className="font-mono text-xs sm:text-[13px] font-semibold text-slate-700 bg-slate-100/90 px-3 py-1 rounded-full border border-slate-200/70">
                <span className="text-primary font-bold">{String(currentProjectIndex + 1).padStart(2, '0')}</span>
                <span className="text-slate-400 mx-1">/</span>
                <span>{String(totalCount).padStart(2, '0')}</span>
              </div>

              {/* Circular close button with minimal X icon */}
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* =========================================================================
              TWO-COLUMN CONTENT LAYOUT
              ========================================================================= */}
          <div className="overflow-y-auto px-6 sm:px-8 lg:px-10 py-7 sm:py-8 lg:py-9 custom-scrollbar flex-1">
            <div
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start transition-all duration-200 ${
                isAnimating
                  ? slideDirection === 'next'
                    ? 'opacity-40 -translate-x-2'
                    : 'opacity-40 translate-x-2'
                  : 'opacity-100 translate-x-0'
              }`}
            >
              {/* -----------------------------------------------------------------
                  LEFT SIDE: Multi-Image Interactive Gallery (5 Screenshots)
                  ----------------------------------------------------------------- */}
              <div className="lg:col-span-6 flex flex-col gap-3">
                <div className="relative w-full aspect-[16/10] bg-slate-100 rounded-[16px] overflow-hidden border border-slate-200/80 shadow-md group">
                  
                  {/* Current Active Screenshot with Smooth Fade Transition */}
                  <img
                    key={`${project.id}-img-${currentImageIndex}`}
                    src={currentImage}
                    alt={`${project.title} - Screenshot ${currentImageIndex + 1}`}
                    className={`w-full h-full object-cover object-top transition-opacity duration-200 ease-out ${
                      isImageTransitioning ? 'opacity-40' : 'opacity-100'
                    }`}
                  />

                  {/* GALLERY PREVIOUS IMAGE ARROW BUTTON (Inside Left Edge) */}
                  {totalImages > 1 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleImageChange('prev');
                      }}
                      aria-label="Previous Image"
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-primary border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.12)] flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs opacity-90 hover:opacity-100"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                    </button>
                  )}

                  {/* GALLERY NEXT IMAGE ARROW BUTTON (Inside Right Edge) */}
                  {totalImages > 1 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleImageChange('next');
                      }}
                      aria-label="Next Image"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-primary border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.12)] flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs opacity-90 hover:opacity-100"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                    </button>
                  )}

                  {/* GALLERY IMAGE COUNTER (Bottom-Right Corner Pill) */}
                  {totalImages > 1 && (
                    <div className="absolute bottom-3 right-3 z-20 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-xs text-white font-mono text-[11px] font-semibold border border-white/10 shadow-sm flex items-center gap-1">
                      <span className="text-blue-300 font-bold">{String(currentImageIndex + 1).padStart(2, '0')}</span>
                      <span className="text-slate-400">/</span>
                      <span>{String(totalImages).padStart(2, '0')}</span>
                    </div>
                  )}

                  {/* External Project URL pill if available */}
                  {project.url && (
                    <a
                      href={`https://${project.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3 left-3 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/85 hover:bg-slate-900 text-white font-mono text-[11px] font-medium shadow-md transition-all hover:scale-105 active:scale-95 backdrop-blur-xs"
                    >
                      <span>{project.url}</span>
                      <ExternalLink className="w-3 h-3 text-slate-300" />
                    </a>
                  )}
                </div>

                {/* GALLERY INDICATOR DOTS (Below Image) */}
                {totalImages > 1 && (
                  <div className="flex items-center justify-center gap-1.5 pt-1">
                    {galleryImages.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={() => handleSelectDotImage(dotIdx)}
                        aria-label={`Jump to screenshot ${dotIdx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                          dotIdx === currentImageIndex
                            ? 'w-6 bg-primary shadow-2xs'
                            : 'w-1.5 bg-slate-200 hover:bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* -----------------------------------------------------------------
                  RIGHT SIDE: Project Information (Fixed, Unaltered)
                  ----------------------------------------------------------------- */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                {/* 1. Project Label */}
                <div className="font-mono text-xs uppercase tracking-wider text-primary font-semibold mb-2.5 sm:mb-3">
                  PROJECT {String(currentProjectIndex + 1).padStart(2, '0')} // {project.category.toUpperCase()}
                </div>

                {/* 2. Large Project Title */}
                <h3 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#0f172a] tracking-tight leading-[1.15] mb-3.5 sm:mb-4">
                  {project.title}
                </h3>

                {/* 3. Project Description */}
                <p className="text-base sm:text-[17px] text-slate-600 leading-[1.7] font-normal mb-7 sm:mb-8 max-w-2xl">
                  {project.description}
                </p>

                {/* 4. Tech Stack Heading */}
                <div className="flex items-center gap-2 mb-3.5">
                  <Layers className="w-4 h-4 text-primary stroke-[2.2]" />
                  <span className="font-bold text-sm tracking-wider uppercase text-primary">
                    TECH STACK
                  </span>
                </div>

                {/* 5. Tech Stack Pills with Official Brand Logos */}
                <div className="flex flex-wrap gap-2.5 mb-7 sm:mb-8">
                  {project.technologies?.map((tech, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-slate-800 text-xs sm:text-[13px] font-semibold border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-primary/40 hover:shadow-xs transition-all"
                    >
                      {renderTechIcon(tech)}
                      <span className="tracking-tight text-slate-800 font-medium">{tech}</span>
                    </div>
                  ))}
                </div>

                {/* 6. Key Capabilities Heading */}
                <div className="flex items-center gap-2 mb-3.5">
                  <Zap className="w-4 h-4 text-primary fill-primary" />
                  <span className="font-bold text-sm tracking-wider uppercase text-primary">
                    KEY CAPABILITIES
                  </span>
                </div>

                {/* 7. Capability List */}
                <div className="space-y-3 w-full">
                  {project.features?.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-left">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-[3px]" />
                      <span className="text-sm sm:text-[15px] text-slate-700 leading-[1.5] font-normal">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            DESKTOP / TABLET: NEXT PROJECT ARROW (OUTSIDE MODAL)
            --------------------------------------------------------------------- */}
        <button
          onClick={() => handleProjectChange(currentProjectIndex + 1, 'next')}
          disabled={!hasNextProject}
          className={`hidden md:flex absolute -right-14 lg:-right-16 z-30 w-12 h-12 rounded-full items-center justify-center border transition-all duration-200 shadow-xl ${
            hasNextProject
              ? 'bg-white hover:bg-blue-50/80 text-primary border-slate-200/90 hover:border-primary/40 hover:scale-105 active:scale-95 cursor-pointer shadow-slate-900/10'
              : 'bg-white/70 text-slate-300 border-slate-200/50 cursor-not-allowed opacity-50 shadow-none'
          }`}
          aria-label="Next Project"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.2]" />
        </button>
      </div>
    </div>
  );
}
