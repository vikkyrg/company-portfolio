import React, { useState, useEffect, useRef } from 'react';
import CategoryCard from './CategoryCard';
import ProjectModal from './ProjectModal';
import { projectCategories } from '../data/projects';

export default function ProjectsSection({ selectedCategory, onCategoryChange }) {
  const [selectedCategoryData, setSelectedCategoryData] = useState(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Trigger smooth entrance animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Respond to category change from props if triggered externally (e.g. footer / navbar)
  useEffect(() => {
    if (selectedCategory && selectedCategory !== 'all') {
      const match = projectCategories.find((cat) => cat.id === selectedCategory);
      if (match) {
        setSelectedCategoryData(match);
        setActiveProjectIndex(0);
      }
    }
  }, [selectedCategory]);

  const handleOpenCategory = (category) => {
    setSelectedCategoryData(category);
    setActiveProjectIndex(0);
    if (onCategoryChange) {
      onCategoryChange(category.id);
    }
  };

  const handleCloseModal = () => {
    setSelectedCategoryData(null);
    if (onCategoryChange) {
      onCategoryChange('all');
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`relative w-full bg-[#f4f7fc] text-[#0f172a] py-20 sm:py-24 lg:py-28 overflow-hidden ${
        isInView ? 'work-inview' : 'work-anim-ready'
      }`}
      id="work-section"
    >
      {/* 
        ========================================================================
        PREMIUM MODERN SAAS BACKGROUND SYSTEM (SEAMLESS & LIGHTWEIGHT)
        - Base: Soft gradient transitioning between pale blue, near-white & lavender
        - Pattern: Technical blueprint grid with low-opacity lines
        - Lighting: Subtle radial blue glow zones positioned behind the cards
        - Bottom: Layered translucent flowing wave shapes
        - Seamless: Extends edge-to-edge without white gaps
        ========================================================================
      */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Layer 1: Base Atmospheric Gradient (Soft blue -> near-white -> pale lavender/blue) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#edf3fb] via-[#f7faff] to-[#eef4fd]" />

        {/* Layer 2: Subtle Technical Grid Pattern with Low-Opacity Lines */}
        <div
          className="absolute inset-0 opacity-[0.045] [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_98%)]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #004ac6 1px, transparent 1px),
              linear-gradient(to bottom, #004ac6 1px, transparent 1px)
            `,
            backgroundSize: '44px 44px'
          }}
        />

        {/* Layer 3: Soft Radial Blue & Lavender Glow Effects Behind Cards */}
        <div className="absolute -top-32 right-[-5%] w-[680px] h-[680px] rounded-full bg-radial from-[#bfdbfe]/30 via-[#dbeafe]/15 to-transparent blur-3xl" />
        <div className="absolute top-[35%] -left-[8%] w-[720px] h-[720px] rounded-full bg-radial from-[#c7dcfa]/35 via-[#e0eafd]/15 to-transparent blur-3xl" />
        <div className="absolute top-[50%] right-[10%] w-[580px] h-[580px] rounded-full bg-radial from-[#dbeafe]/30 via-[#eff6ff]/15 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 left-[20%] w-[800px] h-[520px] rounded-full bg-radial from-[#bfdbfe]/25 via-[#e0edfd]/10 to-transparent blur-3xl" />

        {/* Layer 4: Subtle Flowing Wave Shapes Near the Bottom of the Section */}
        <svg
          className="absolute bottom-0 inset-x-0 w-full h-48 sm:h-64 lg:h-80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <defs>
            {/* Translucent light-blue gradient for wave 1 */}
            <linearGradient id="servicesWaveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.07" />
            </linearGradient>

            {/* Translucent pale lavender/blue gradient for wave 2 */}
            <linearGradient id="servicesWaveGrad2" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.05" />
              <stop offset="55%" stopColor="#3b82f6" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.04" />
            </linearGradient>
          </defs>

          {/* Flowing Wave Layer 1 (Back wave) */}
          <path
            d="M0,160 C320,80 640,240 960,140 C1200,60 1360,180 1440,120 L1440,320 L0,320 Z"
            fill="url(#servicesWaveGrad1)"
          />

          {/* Flowing Wave Layer 2 (Front wave) */}
          <path
            d="M0,220 C280,150 560,270 880,190 C1160,120 1340,230 1440,180 L1440,320 L0,320 Z"
            fill="url(#servicesWaveGrad2)"
          />

          {/* Subtle curved contour line accent */}
          <path
            d="M0,220 C280,150 560,270 880,190 C1160,120 1340,230 1440,180"
            fill="none"
            stroke="#2563eb"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
        </svg>

        {/* Top & Bottom Smooth Edge Transitions */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/70 via-white/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/60 via-white/20 to-transparent" />
      </div>

      <div className="relative max-w-[1320px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          {/* Eyebrow Label */}
          <div className="animate-work-label inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-blue-100 shadow-xs mb-3.5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
              SERVICES / CAPABILITIES
            </span>
          </div>

          {/* Section Heading */}
          <h2 className="animate-work-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] tracking-tight leading-tight">
            Engineering High-Impact Digital Experiences
          </h2>

          {/* Description Paragraph */}
          <p className="animate-work-desc text-base sm:text-lg text-slate-600 mt-3 leading-relaxed font-normal">
            We partner with ambitious startups and enterprises to architect, design, and deploy resilient digital products built for scale, performance, and conversion.
          </p>
        </div>

        {/* 
          ========================================================================
          3 SERVICE CARDS RESPONSIVE GRID
          Desktop: 3 equal-width cards in 1 row (grid-cols-3)
          Tablet: 2 columns (md:grid-cols-2)
          Mobile: 1 column (grid-cols-1)
          All 3 cards have identical heights & alignment.
          ========================================================================
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch" id="capabilities-categories">
          {projectCategories.map((category, idx) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={idx}
              onExplore={handleOpenCategory}
            />
          ))}
        </div>
      </div>

      {/* 
        ========================================================================
        CATEGORY PROJECT SHOWCASE VIEWER MODAL
        Presents 1 project at a time with Previous / Next navigation (01 / 05)
        ========================================================================
      */}
      {selectedCategoryData && (
        <ProjectModal
          category={selectedCategoryData}
          currentProjectIndex={activeProjectIndex}
          onNavigate={(newIdx) => setActiveProjectIndex(newIdx)}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}
