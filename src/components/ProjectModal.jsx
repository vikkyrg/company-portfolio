import React, { useEffect, useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Layers,
  Zap,
  Clock,
  Sparkles
} from 'lucide-react';
import TechBadge from './TechBadge';

export default function ProjectModal({ project, projectsList = [], onSelectProject, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageTransitioning, setIsImageTransitioning] = useState(false);

  // Gallery images (up to 5)
  const galleryImages = (project?.images && project.images.length > 0)
    ? project.images
    : (project?.image ? [project.image] : []);
  const totalImages = galleryImages.length;
  const currentImage = galleryImages[currentImageIndex] || project?.image;

  // Determine active project index within current list
  const currentIndex = projectsList.findIndex((p) => p.id === project?.id);
  const totalProjects = projectsList.length;
  const hasPrevProject = currentIndex > 0;
  const hasNextProject = currentIndex >= 0 && currentIndex < totalProjects - 1;

  // Reset image index whenever project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.id]);

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
        handleImageChange('prev');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
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

  if (!project) return null;

  const handleProjectSwitch = (newIndex) => {
    if (newIndex >= 0 && newIndex < totalProjects && onSelectProject) {
      onSelectProject(projectsList[newIndex]);
    }
  };

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
    }, 180);
  };

  const isInDevelopment = project.statusType === 'in-development';
  const isComingSoon = project.statusType === 'coming-soon';
  const isApplication = project.category === 'applications';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 lg:p-10 bg-slate-950/70 backdrop-blur-md animate-fade-in select-none"
      onClick={onClose}
    >
      <div
        className={`relative w-full flex items-center justify-center ${
          isApplication ? 'max-w-[1140px]' : 'max-w-[1200px]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Project Arrow (Desktop) */}
        {totalProjects > 1 && (
          <button
            type="button"
            onClick={() => handleProjectSwitch(currentIndex - 1)}
            disabled={!hasPrevProject}
            className={`hidden md:flex absolute -left-14 lg:-left-16 z-30 w-12 h-12 rounded-full items-center justify-center border transition-all duration-200 shadow-xl ${
              hasPrevProject
                ? 'bg-white hover:bg-blue-50/80 text-primary border-slate-200 hover:border-primary/40 hover:scale-105 active:scale-95 cursor-pointer'
                : 'bg-white/60 text-slate-300 border-slate-200/50 cursor-not-allowed opacity-50'
            }`}
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.2]" />
          </button>
        )}

        {/* Modal Main Box */}
        <div className="relative w-full max-h-[90vh] flex flex-col bg-white rounded-3xl shadow-[0_24px_60px_rgba(15,23,42,0.22)] border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="sticky top-0 z-20 px-6 sm:px-8 py-4 bg-white/95 backdrop-blur-xs border-b border-slate-100 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <span className="font-mono text-xs sm:text-xs font-bold uppercase tracking-wider text-primary">
                {project.categoryLabel}
              </span>
              <span className="text-slate-300 font-light">/</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 truncate">
                {project.title}
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {/* Project index indicator */}
              {currentIndex >= 0 && (
                <div className="font-mono text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  <span className="text-primary font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
                  <span className="text-slate-400 mx-1">/</span>
                  <span>{String(totalProjects).padStart(2, '0')}</span>
                </div>
              )}

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors focus:outline-none cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="overflow-y-auto px-6 sm:px-8 lg:px-10 py-7 sm:py-8 custom-scrollbar flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Image Viewer (Portrait container for Applications, Landscape for Websites) */}
              <div className={`${isApplication ? 'lg:col-span-5' : 'lg:col-span-6'} flex flex-col gap-3`}>
                <div
                  className={`relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm group flex items-center justify-center ${
                    isApplication
                      ? 'h-[440px] sm:h-[500px] md:h-[540px] bg-gradient-to-b from-slate-100/90 via-slate-50 to-slate-100/90 p-4'
                      : 'aspect-[16/10] bg-slate-100'
                  }`}
                >
                  <img
                    key={`${project.id}-${currentImageIndex}`}
                    src={currentImage}
                    alt={project.title}
                    className={`transition-opacity duration-200 ${
                      isApplication
                        ? 'h-full w-auto max-w-full object-contain rounded-xl drop-shadow-[0_12px_28px_rgba(15,23,42,0.18)]'
                        : 'w-full h-full object-cover object-top'
                    } ${isImageTransitioning ? 'opacity-40' : 'opacity-100'}`}
                  />

                  {/* Previous Image */}
                  {totalImages > 1 && (
                    <button
                      type="button"
                      onClick={() => handleImageChange('prev')}
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-primary border border-slate-200 shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      aria-label="Previous Screenshot"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                    </button>
                  )}

                  {/* Next Image */}
                  {totalImages > 1 && (
                    <button
                      type="button"
                      onClick={() => handleImageChange('next')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-primary border border-slate-200 shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      aria-label="Next Screenshot"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                    </button>
                  )}

                  {/* Image Counter */}
                  {totalImages > 1 && (
                    <div className="absolute bottom-3 right-3 z-20 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-xs text-white font-mono text-[11px] font-semibold border border-white/10">
                      <span className="text-blue-300 font-bold">{String(currentImageIndex + 1).padStart(2, '0')}</span>
                      <span className="text-slate-400 mx-1">/</span>
                      <span>{String(totalImages).padStart(2, '0')}</span>
                    </div>
                  )}

                  {/* Status Banner only for ongoing projects */}
                  {(isInDevelopment || isComingSoon) && (
                    <div className="absolute top-3 left-3 z-20">
                      {isInDevelopment ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-semibold shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          In Development
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-semibold shadow-sm">
                          <Sparkles className="w-3 h-3" />
                          Coming Soon
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Dots indicator */}
                {totalImages > 1 && (
                  <div className="flex items-center justify-center gap-1.5 pt-1">
                    {galleryImages.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={() => setCurrentImageIndex(dotIdx)}
                        className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                          dotIdx === currentImageIndex ? 'w-6 bg-primary' : 'w-1.5 bg-slate-200 hover:bg-slate-300'
                        }`}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Project Details */}
              <div className={`${isApplication ? 'lg:col-span-7' : 'lg:col-span-6'} flex flex-col items-start text-left`}>
                {/* Status or Stage */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
                    {project.categoryLabel}
                  </span>
                  {project.expectedLaunch && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 font-medium border border-amber-200">
                      Target: {project.expectedLaunch}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-base text-slate-600 leading-relaxed font-normal mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Badges with Official Logos */}
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-primary" />
                  <span className="font-bold text-xs uppercase tracking-wider text-slate-900">
                    Technology Stack
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <TechBadge key={idx} name={tag} size="md" />
                  ))}
                </div>

                {/* Key Features */}
                {project.features && (
                  <>
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-4 h-4 text-primary fill-primary" />
                      <span className="font-bold text-xs uppercase tracking-wider text-slate-900">
                        Key Features &amp; Architecture
                      </span>
                    </div>
                    <div className="space-y-2.5 w-full mb-6">
                      {project.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-left">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700 leading-relaxed">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Action CTA */}
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-secondary text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-slate-600 text-xs font-medium">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span>Live demo will be made available upon launch</span>
                  </div>
                )}
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
            className={`hidden md:flex absolute -right-14 lg:-right-16 z-30 w-12 h-12 rounded-full items-center justify-center border transition-all duration-200 shadow-xl ${
              hasNextProject
                ? 'bg-white hover:bg-blue-50/80 text-primary border-slate-200 hover:border-primary/40 hover:scale-105 active:scale-95 cursor-pointer'
                : 'bg-white/60 text-slate-300 border-slate-200/50 cursor-not-allowed opacity-50'
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
