import React, { useEffect, useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Code2,
  Zap,
  Server,
  Layers,
  Database,
  ArrowRight,
  Globe
} from 'lucide-react';
import TechBadge from './TechBadge';

export default function ProjectModal({ project, projectsList = [], onSelectProject, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images (up to 5) - Supports array of string URLs or image objects ({ src, alt, label })
  const galleryImages = (project?.images && project.images.length > 0)
    ? project.images
    : (project?.image ? [project.image] : []);
  const totalImages = galleryImages.length;
  const activeImageItem = galleryImages[currentImageIndex] || project?.image;
  const currentImageSrc = typeof activeImageItem === 'object' && activeImageItem?.src
    ? activeImageItem.src
    : activeImageItem;
  const currentImageAlt = typeof activeImageItem === 'object' && activeImageItem?.alt
    ? activeImageItem.alt
    : project?.title;
  const currentImageLabel = typeof activeImageItem === 'object' && activeImageItem?.label
    ? activeImageItem.label
    : null;

  // Determine active project index within current list
  const currentIndex = projectsList.findIndex((p) => p.id === project?.id);
  const totalProjects = projectsList.length;
  const hasPrevProject = currentIndex > 0;
  const hasNextProject = currentIndex >= 0 && currentIndex < totalProjects - 1;

  // Reset image index whenever project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.id]);

  // Preload next gallery image on idle/interaction for smooth instant transitions
  useEffect(() => {
    if (totalImages > 1) {
      const nextIdx = (currentImageIndex + 1) % totalImages;
      const nextItem = galleryImages[nextIdx];
      const nextSrc = typeof nextItem === 'object' && nextItem?.src ? nextItem.src : nextItem;
      if (nextSrc) {
        const img = new Image();
        img.src = nextSrc;
      }
    }
  }, [currentImageIndex, totalImages, galleryImages]);

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
        if (totalImages > 1) {
          setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : totalImages - 1));
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (totalImages > 1) {
          setCurrentImageIndex((prev) => (prev < totalImages - 1 ? prev + 1 : 0));
        }
      }
    };

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [totalImages, onClose]);

  if (!project) return null;

  const handleProjectSwitch = (newIndex) => {
    if (newIndex >= 0 && newIndex < totalProjects && onSelectProject) {
      onSelectProject(projectsList[newIndex]);
    }
  };

  const handleImageChange = (direction) => {
    if (totalImages <= 1) return;
    if (direction === 'prev') {
      setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : totalImages - 1));
    } else {
      setCurrentImageIndex((prev) => (prev < totalImages - 1 ? prev + 1 : 0));
    }
  };

  const isInDevelopment = project.statusType === 'in-development';
  const isComingSoon = project.statusType === 'coming-soon';
  const isApplication = project.category === 'applications';
  const stackItems = project.stack || project.tags || project.technologies || [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 lg:p-8 bg-slate-950/75 backdrop-blur-xs animate-fade-in select-none"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[1240px] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Project Arrow (Desktop) */}
        {totalProjects > 1 && (
          <button
            type="button"
            onClick={() => handleProjectSwitch(currentIndex - 1)}
            disabled={!hasPrevProject}
            className={`hidden xl:flex absolute -left-16 z-30 w-12 h-12 rounded-full items-center justify-center border transition-all duration-200 shadow-xl ${
              hasPrevProject
                ? 'bg-white hover:bg-blue-50 text-[#0b5cff] border-slate-200 hover:border-[#0b5cff]/40 hover:scale-105 active:scale-95 cursor-pointer'
                : 'bg-white/60 text-slate-300 border-slate-200/50 cursor-not-allowed opacity-40'
            }`}
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.2]" />
          </button>
        )}

        {/* Modal Main Box */}
        <div className="relative w-full max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-[0_24px_60px_rgba(15,23,42,0.22)] border border-slate-200 overflow-hidden text-left">
          
          {/* Modal Header */}
          <div className="sticky top-0 z-20 px-6 sm:px-8 py-4 bg-white/95 backdrop-blur-md border-b border-slate-100 flex items-center justify-between gap-4">
            {/* Left side: Label, Separator, Project Name */}
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <span className="font-mono text-xs sm:text-xs font-bold uppercase tracking-wider text-[#0b5cff]">
                {project.categoryLabel || 'PROJECTS IN DEVELOPMENT'}
              </span>
              <span className="text-slate-300 font-light">/</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
                {project.title}
              </span>
            </div>

            {/* Right side: Project Counter & Close Button */}
            <div className="flex items-center gap-3 shrink-0">
              {currentIndex >= 0 && (
                <div className="font-mono text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  <span className="text-[#0b5cff] font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
                  <span className="text-slate-400 mx-1">/</span>
                  <span>{String(totalProjects).padStart(2, '0')}</span>
                </div>
              )}

              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors focus:outline-none cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Main Modal Body */}
          <div className="overflow-y-auto px-6 sm:px-8 lg:px-10 py-7 sm:py-8 custom-scrollbar flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Left Column – Project Image Gallery */}
              <div className={`${isApplication ? 'lg:col-span-5' : 'lg:col-span-6'} flex flex-col gap-3.5`}>
                <div
                  className={`relative w-full rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm group flex items-center justify-center ${
                    isApplication
                      ? 'h-[440px] sm:h-[500px] md:h-[540px] bg-gradient-to-b from-slate-100/90 via-slate-50 to-slate-100/90 p-4'
                      : 'aspect-[16/10] bg-slate-100'
                  }`}
                >
                  {currentImageSrc ? (
                    <img
                      key={`${project.id}-${currentImageIndex}`}
                      src={currentImageSrc}
                      alt={currentImageAlt}
                      decoding="async"
                      loading="eager"
                      className={`select-none ${
                        isApplication
                          ? 'h-full w-auto max-w-full object-contain rounded-xl drop-shadow-[0_12px_28px_rgba(15,23,42,0.18)]'
                          : 'w-full h-full object-contain object-center'
                      }`}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50/70 via-white to-blue-100/50 p-8 text-center select-none">
                      <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-blue-100 flex items-center justify-center text-[#0b5cff] mb-3.5">
                        <Globe className="w-8 h-8 stroke-[1.8]" />
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight mb-1">
                        {project.title}
                      </h4>
                      <p className="text-xs text-[#0b5cff] font-medium mb-3">
                        {project.url || 'Website Live Showcase'}
                      </p>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0b5cff] text-[11px] font-semibold border border-blue-200/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        Screenshots Gallery Ready for Integration
                      </span>
                    </div>
                  )}

                  {/* Previous Screenshot Button */}
                  {totalImages > 1 && (
                    <button
                      type="button"
                      onClick={() => handleImageChange('prev')}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-[#0b5cff] border border-slate-200 shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      aria-label="Previous Screenshot"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                    </button>
                  )}

                  {/* Next Screenshot Button */}
                  {totalImages > 1 && (
                    <button
                      type="button"
                      onClick={() => handleImageChange('next')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-[#0b5cff] border border-slate-200 shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      aria-label="Next Screenshot"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                    </button>
                  )}

                  {/* Image Counter (e.g. 01 / 05) */}
                  {totalImages > 1 && (
                    <div className="absolute bottom-3 right-3 z-20 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-xs text-white font-mono text-[11px] font-semibold border border-white/10">
                      <span className="text-blue-300 font-bold">{String(currentImageIndex + 1).padStart(2, '0')}</span>
                      <span className="text-slate-400 mx-1">/</span>
                      <span>{String(totalImages).padStart(2, '0')}</span>
                    </div>
                  )}

                  {/* Status Badge */}
                  {(isInDevelopment || isComingSoon || project.status) && (
                    <div className="absolute top-3 left-3 z-20">
                      {isInDevelopment || project.status === 'In Development' ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-semibold shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          In Development
                        </span>
                      ) : isComingSoon ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                          Coming Soon
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-white text-xs font-semibold shadow-sm">
                          {project.status}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Image pagination dots */}
                {totalImages > 1 && (
                  <div className="flex items-center justify-center gap-1.5 pt-0.5">
                    {galleryImages.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={() => setCurrentImageIndex(dotIdx)}
                        className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                          dotIdx === currentImageIndex ? 'w-6 bg-[#0b5cff]' : 'w-1.5 bg-slate-200 hover:bg-slate-300'
                        }`}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column – Project Information */}
              <div className={`${isApplication ? 'lg:col-span-7' : 'lg:col-span-6'} flex flex-col items-start text-left`}>
                
                {/* 1. Project Category and Target/Status */}
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#0b5cff] font-bold">
                    {project.categoryLabel || 'Projects in Development'}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0b5cff] font-medium border border-blue-200">
                    Status: {project.status || 'In Development'}
                  </span>
                  {project.projectType && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium border border-slate-200">
                      {project.projectType}
                    </span>
                  )}
                </div>

                {/* 2. Project Name */}
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug mb-3">
                  {project.title}
                </h3>

                {/* 3. Project Description */}
                <p className="text-base text-slate-600 leading-relaxed font-normal mb-6">
                  {project.shortDescription || project.description}
                </p>

                {/* 4. TECHNOLOGY STACK (Rendered if stack has verified items) */}
                {stackItems.length > 0 && (
                  <>
                    <div className="flex items-center gap-2 mb-3">
                      <Code2 className="w-4 h-4 text-[#0b5cff]" />
                      <span className="font-bold text-xs uppercase tracking-wider text-slate-900">
                        Technology Stack
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {stackItems.map((tech, idx) => (
                        <TechBadge key={idx} name={tech} size="md" />
                      ))}
                    </div>
                  </>
                )}

                {/* 5. KEY FEATURES & ARCHITECTURE */}
                {project.features && project.features.length > 0 && (
                  <div className="w-full mb-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-4 h-4 text-[#0b5cff] fill-[#0b5cff]" />
                      <span className="font-bold text-xs uppercase tracking-wider text-slate-900">
                        Key Features &amp; Architecture
                      </span>
                    </div>
                    <div className="space-y-2 w-full">
                      {project.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-left">
                          <CheckCircle2 className="w-4 h-4 text-[#0b5cff] shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700 leading-snug">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Website Architecture Pages if present */}
                    {project.architectureText && (
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-600">
                        <Layers className="w-4 h-4 text-[#0b5cff] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-slate-800">Website Architecture: </span>
                          <span className="text-slate-600">{project.architectureText}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* 6. Additional Project Information / Development Status */}
                <div className="w-full pt-4 border-t border-slate-100 flex items-center justify-between gap-4 flex-wrap">
                  {!isApplication && project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0b5cff] hover:bg-blue-700 text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
                    >
                      <span>Launch Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : !isApplication ? (
                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Active Development – Production release planned upon completion</span>
                    </div>
                  ) : null}

                  {/* Mobile Project Navigation Buttons */}
                  {totalProjects > 1 && (
                    <div className="flex items-center gap-2 xl:hidden ml-auto">
                      <button
                        type="button"
                        onClick={() => handleProjectSwitch(currentIndex - 1)}
                        disabled={!hasPrevProject}
                        className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${
                          hasPrevProject
                            ? 'bg-white border-slate-200 text-slate-700 hover:bg-blue-50 hover:text-[#0b5cff] cursor-pointer'
                            : 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed'
                        }`}
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                        <span>Prev</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleProjectSwitch(currentIndex + 1)}
                        disabled={!hasNextProject}
                        className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${
                          hasNextProject
                            ? 'bg-white border-slate-200 text-slate-700 hover:bg-blue-50 hover:text-[#0b5cff] cursor-pointer'
                            : 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed'
                        }`}
                      >
                        <span>Next</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Next Project Arrow (Desktop) */}
        {totalProjects > 1 && (
          <button
            type="button"
            onClick={() => handleProjectSwitch(currentIndex + 1)}
            disabled={!hasNextProject}
            className={`hidden xl:flex absolute -right-16 z-30 w-12 h-12 rounded-full items-center justify-center border transition-all duration-200 shadow-xl ${
              hasNextProject
                ? 'bg-white hover:bg-blue-50 text-[#0b5cff] border-slate-200 hover:border-[#0b5cff]/40 hover:scale-105 active:scale-95 cursor-pointer'
                : 'bg-white/60 text-slate-300 border-slate-200/50 cursor-not-allowed opacity-40'
            }`}
            aria-label="Next Project"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.2]" />
          </button>
        )}
      </div>
    </div>
  );
}
