import React, { useState, useMemo, useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import CategoryTabs, { getCategoryIcon } from './CategoryTabs';
import ProjectCard from './ProjectCard';
import { filterCategories, allProjects } from '../data/projects';
import { Layers, Globe, Code2 } from 'lucide-react';

const ProjectModal = lazy(() => import('./ProjectModal'));

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('websites');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isGridInView, setIsGridInView] = useState(false);
  const [isHeaderInView, setIsHeaderInView] = useState(false);
  const mobileGridRef = useRef(null);
  const desktopGridRef = useRef(null);
  const headerRef = useRef(null);

  // Trigger sequential staggered reveal animation when either mobile or desktop cards enter viewport
  useEffect(() => {
    // Immediate fallback: ensure cards are visible without waiting for observer
    const fallbackTimer = setTimeout(() => {
      setIsGridInView(true);
    }, 150);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsGridInView(true);
          observer.disconnect();
          clearTimeout(fallbackTimer);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 50px 0px'
      }
    );

    if (mobileGridRef.current) observer.observe(mobileGridRef.current);
    if (desktopGridRef.current) observer.observe(desktopGridRef.current);

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  // Header scroll reveal
  useEffect(() => {
    const target = headerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2
      }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // Immediate Category Switching Handler (no delays or artificial timeouts)
  const handleTabChange = useCallback((newTab) => {
    setActiveTab(newTab);
  }, []);

  const handleSelectProject = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Compute project counts for each category tab
  const categoryCounts = useMemo(() => {
    const counts = {};
    filterCategories.forEach((cat) => {
      counts[cat.id] = allProjects.filter((p) => p.category === cat.id).length;
    });
    return counts;
  }, []);

  // Dynamically filter displayed projects based on activeTab
  const displayedProjects = useMemo(() => {
    return allProjects.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <section
      id="portfolio"
      className="relative w-full min-h-screen pt-4 sm:pt-6 pb-16 sm:pb-24 sm:overflow-hidden bg-gradient-to-b from-[#F8FBFF] via-[#EAF3FF] to-[#DCEBFF] animate-bg-gradient"
    >
      {/* 
        ========================================================================
        LIGHTWEIGHT BLUE-THEMED ARCHITECTURAL BACKGROUND
        - Optimized GPU layer rendering: removed heavy 110px/130px blur-filters
        - Lightweight SVG curves with hardware-accelerated will-change: transform
        - Static center ambient glow using soft radial gradients without heavy filters
        ========================================================================
      */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Ambient Center Lighting using pure CSS radial gradients instead of heavy GPU blur filters */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0)_70%)]" />
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[1000px] h-[650px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_70%)]" />

        {/* -------------------------------------------------------------
            TOP-LEFT CORNER: Large Flowing Shapes, Waves & Orbs
            ------------------------------------------------------------- */}
        {/* Layer 1: Soft ambient gradient corner blob */}
        <div className="animate-corner-tl absolute -top-36 -left-36 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(191,219,254,0.45)_0%,rgba(199,220,250,0.2)_40%,transparent_70%)]" />

        {/* Layer 2: Large organic flowing vector shape with gentle floating motion */}
        <svg
          className="animate-wave-flow-tl absolute -top-20 -left-20 w-[420px] sm:w-[580px] h-[420px] sm:h-[580px] opacity-60"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="tlFlowGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.16" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="tlFlowGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <path
            d="M-40,240 C120,290 280,180 340,60 C400,-60 480,-20 520,-90 L-90,-90 Z"
            fill="url(#tlFlowGrad1)"
          />
          <path
            d="M-60,340 C90,380 230,280 310,140 C390,0 470,40 500,-50 L-90,-90 Z"
            fill="url(#tlFlowGrad2)"
          />
        </svg>

        {/* Layer 3: Curved contour & dashed lines with wave flow */}
        <svg
          className="animate-wave-flow-tl absolute top-0 left-0 w-80 sm:w-96 lg:w-[520px] h-80 sm:h-96 lg:h-[520px] text-[#004ac6]"
          viewBox="0 0 520 520"
          fill="none"
        >
          <path
            d="M-80,300 C80,280 240,190 280,-80"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeOpacity="0.18"
            strokeDasharray="4 4"
          />
          <path
            d="M-40,370 C140,330 300,220 370,-50"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeOpacity="0.22"
          />
          <path
            d="M0,440 C190,390 360,250 430,-20"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.14"
          />
        </svg>

        {/* Floating Gradient Orbs in Top-Left (hardware accelerated) */}
        <div className="animate-orb-1 absolute top-20 left-[18%] w-14 h-14 rounded-full bg-gradient-to-tr from-[#2563eb]/30 to-[#93c5fd]/50 shadow-[0_8px_20px_rgba(37,99,235,0.12)]" />
        <div className="animate-orb-2 absolute top-48 left-[7%] w-7 h-7 rounded-full bg-gradient-to-tr from-[#004ac6]/25 to-[#bfdbfe]/60 shadow-[0_4px_12px_rgba(0,74,198,0.1)]" />

        {/* -------------------------------------------------------------
            BOTTOM-RIGHT CORNER: Large Flowing Shapes, Waves & Orbs
            ------------------------------------------------------------- */}
        {/* Layer 1: Soft ambient gradient corner blob */}
        <div className="animate-corner-br absolute -bottom-44 -right-44 w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,rgba(147,197,253,0.4)_0%,rgba(191,219,254,0.2)_40%,transparent_70%)]" />

        {/* Layer 2: Organic flowing shape with gentle floating motion */}
        <svg
          className="animate-wave-flow-br absolute -bottom-24 -right-24 w-[480px] sm:w-[640px] h-[480px] sm:h-[640px] opacity-60"
          viewBox="0 0 640 640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="brFlowGrad1" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.16" />
              <stop offset="60%" stopColor="#60a5fa" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#dbeafe" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="brFlowGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.13" />
              <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <path
            d="M680,320 C540,260 380,370 300,500 C220,630 140,580 90,690 L700,700 Z"
            fill="url(#brFlowGrad1)"
          />
          <path
            d="M720,210 C570,160 410,270 340,410 C270,550 170,520 120,650 L700,700 Z"
            fill="url(#brFlowGrad2)"
          />
        </svg>

        {/* Layer 3: Curved contour & dashed lines in Bottom Right */}
        <svg
          className="animate-wave-flow-br absolute bottom-0 right-0 w-80 sm:w-96 lg:w-[560px] h-80 sm:h-96 lg:h-[560px] text-[#004ac6]"
          viewBox="0 0 560 560"
          fill="none"
        >
          <path
            d="M620,240 C460,260 310,370 240,620"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeOpacity="0.22"
          />
          <path
            d="M650,160 C440,200 270,330 180,630"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeOpacity="0.18"
            strokeDasharray="5 5"
          />
          <path
            d="M680,80 C390,140 200,300 120,640"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.14"
          />
        </svg>

        {/* Floating Gradient Orbs in Bottom Right Area */}
        <div className="animate-orb-3 absolute bottom-28 right-[14%] w-16 h-16 rounded-full bg-gradient-to-tr from-[#1d4ed8]/25 via-[#3b82f6]/35 to-[#bfdbfe]/60 shadow-[0_10px_24px_rgba(29,78,216,0.12)]" />
        <div className="animate-orb-4 absolute bottom-56 right-[6%] w-8 h-8 rounded-full bg-gradient-to-tr from-[#2563eb]/30 to-[#93c5fd]/50 shadow-[0_4px_14px_rgba(37,99,235,0.1)]" />

        {/* -------------------------------------------------------------
            DOTTED GRID PATTERNS: Left and Right Flanks with Shimmer
            ------------------------------------------------------------- */}
        {/* Left Side Dotted Grid with Shimmer */}
        <div
          className="animate-grid-shimmer-l absolute top-[22%] left-2 sm:left-6 w-36 sm:w-48 h-96 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"
          style={{
            backgroundImage: 'radial-gradient(#004ac6 1.2px, transparent 1.2px)',
            backgroundSize: '18px 18px'
          }}
        />

        {/* Right Side Dotted Grid with Shimmer */}
        <div
          className="animate-grid-shimmer-r absolute top-[32%] right-2 sm:right-6 w-36 sm:w-48 h-96 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"
          style={{
            backgroundImage: 'radial-gradient(#004ac6 1.2px, transparent 1.2px)',
            backgroundSize: '18px 18px'
          }}
        />

        {/* Subtle Diagonal Translucent Accent Geometry with Slow Rotation */}
        <div className="animate-geo-1 absolute top-[16%] right-[22%] w-64 h-64 border border-[#2563eb]/10 rounded-3xl pointer-events-none" />
        <div className="animate-geo-2 absolute bottom-[20%] left-[12%] w-52 h-52 border border-[#2563eb]/10 rounded-2xl pointer-events-none" />
      </div>

      <div className="relative max-w-[1320px] mx-auto px-2 xs:px-3 sm:px-6 lg:px-8 z-10">
        {/* Header Section: "Our Portfolio" and subtitle with deep navy typography */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-10 sm:mb-12 scroll-reveal-init ${
            isHeaderInView ? 'scroll-reveal-visible' : ''
          }`}
        >
          {/* Heading */}
          <div className="relative inline-block mb-4">
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#004ac6] tracking-tight leading-tight">
              Our Portfolio
            </h1>
            {/* Soft decorative underline stroke */}
            <svg
              className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-2 text-[#004ac6]/35"
              viewBox="0 0 160 8"
              fill="none"
            >
              <path
                d="M4,4 Q80,8 156,3"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Short description with Navy / Slate Typography */}
          <p className="text-sm sm:text-base text-[#1e293b]/80 mt-2 leading-relaxed font-normal max-w-xl mx-auto">
            A curated selection of real-world projects where design, technology, and problem-solving come together to create meaningful solutions.
          </p>
        </div>

        {/* 4 Functional Filter Tabs with Shared Sliding Pill Indicator */}
        <CategoryTabs
          categories={filterCategories}
          activeTab={activeTab}
          onSelectTab={handleTabChange}
          counts={categoryCounts}
        />

        {/* 
          ========================================================================
          MOBILE RESPONSIVE SIDEBAR + GRID LAYOUT (sm:hidden)
          - Left narrow sidebar containing compact vertical icon tabs
          - Right area containing responsive 1-column / 2-column project cards
          - Centered and balanced layout across all mobile device screen widths
          ========================================================================
        */}
        <div className="flex sm:hidden items-start justify-center gap-2 xs:gap-3 sm:gap-3.5 mb-10 w-full max-w-[620px] mx-auto">
          {/* Compact Vertical Tab Navigation Sidebar - Sticky & vertically centered in viewport */}
          <div
            role="tablist"
            aria-label="Portfolio Categories Vertical Navigation"
            className="sticky top-1/2 -translate-y-1/2 z-30 shrink-0 flex flex-col gap-1.5 xs:gap-2 p-1 xs:p-1.5 bg-white/95 backdrop-blur-md rounded-2xl border border-blue-100/80 shadow-[0_4px_20px_rgba(37,99,235,0.08),0_1px_3px_rgba(0,0,0,0.02)]"
          >
            {filterCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={`mobile-vtab-${cat.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={cat.label}
                  type="button"
                  onClick={() => handleTabChange(cat.id)}
                  className={`w-10 h-10 xs:w-11 xs:h-11 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#0b5cff] ${
                    isActive
                      ? 'bg-[#0b5cff] text-white shadow-[0_4px_14px_rgba(11,92,255,0.38)]'
                      : 'bg-white text-slate-600 hover:text-[#0b5cff] hover:bg-blue-50/80 shadow-xs'
                  }`}
                >
                  {getCategoryIcon(cat.id, "w-4 h-4 xs:w-5 xs:h-5 shrink-0 stroke-[2.2]")}
                </button>
              );
            })}
          </div>

          {/* Mobile Project Cards arranged to the right of vertical navigation */}
          <div
            ref={mobileGridRef}
            className="flex-1 min-w-0 grid grid-cols-1 xs:grid-cols-2 gap-2.5 xs:gap-3 sm:gap-4 items-stretch"
          >
            {displayedProjects.map((project, idx) => (
              <ProjectCard
                key={`mobile-${activeTab}-${project.id}`}
                project={project}
                index={idx}
                compact={true}
                isRevealed={isGridInView}
                onSelect={handleSelectProject}
              />
            ))}
          </div>
        </div>

        {/* 
          ========================================================================
          DESKTOP & TABLET PROJECT CARD GRID LAYOUT (sm:grid)
          - Preserved exactly unchanged as per desktop requirements
          ========================================================================
        */}
        <div
          ref={desktopGridRef}
          className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {displayedProjects.map((project, idx) => (
            <ProjectCard
              key={`desktop-${activeTab}-${project.id}`}
              project={project}
              index={idx}
              isRevealed={isGridInView}
              onSelect={handleSelectProject}
            />
          ))}
        </div>

        {/* Empty state fallback */}
        {displayedProjects.length === 0 && (
          <div className="text-center py-20 bg-white/80 rounded-2xl border border-blue-100 shadow-sm">
            <Layers className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700">No projects found</h3>
            <p className="text-sm text-slate-500">Please select another category tab above.</p>
          </div>
        )}
      </div>

      {/* Interactive Project Modal (Dynamically loaded on demand with Suspense) */}
      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectModal
            project={selectedProject}
            projectsList={displayedProjects}
            onSelectProject={handleSelectProject}
            onClose={handleCloseModal}
          />
        </Suspense>
      )}
    </section>
  );
}
