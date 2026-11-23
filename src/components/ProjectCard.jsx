import React, { memo } from 'react';
import { ArrowUpRight, Info, Laptop, Smartphone, Monitor } from 'lucide-react';
import TechBadge from './TechBadge';

function ProjectCard({ project, onSelect, index = 0, isRevealed = true, compact = false }) {
  const isInDevelopment = project.statusType === 'in-development';
  const isComingSoon = project.statusType === 'coming-soon';
  const isApplication = project.category === 'applications';

  const renderDeviceBadge = () => {
    if (isApplication) {
      return <Smartphone className="w-3.5 h-3.5 text-white" />;
    }
    if (project.category === 'custom-software') {
      return <Laptop className="w-3.5 h-3.5 text-white" />;
    }
    return <Monitor className="w-3.5 h-3.5 text-white" />;
  };

  // Stagger delay calculation: ~160ms per card index
  const staggerDelay = `${index * 160}ms`;

  return (
    <article
      className={`group relative flex flex-col bg-white rounded-2xl sm:rounded-[22px] border border-blue-50/80 shadow-[0_4px_20px_rgba(37,99,235,0.06),0_1px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(11,92,255,0.12),0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden ${
        isRevealed ? 'portfolio-card-revealed' : 'portfolio-card-hidden'
      }`}
      style={{
        animationDelay: isRevealed ? staggerDelay : '0ms'
      }}
    >
      {/* 1. Project Thumbnail: Portrait for Applications, Landscape for Websites */}
      <div
        className={`relative w-full overflow-hidden cursor-pointer ${
          isApplication
            ? compact
              ? 'h-48 sm:h-80 bg-gradient-to-b from-slate-100/90 via-blue-50/40 to-slate-100/90 p-2 sm:p-4 flex items-center justify-center'
              : 'h-72 sm:h-80 md:h-84 bg-gradient-to-b from-slate-100/90 via-blue-50/40 to-slate-100/90 p-4 flex items-center justify-center'
            : 'aspect-[16/10] bg-gradient-to-b from-slate-50 to-slate-100'
        }`}
        onClick={() => onSelect && onSelect(project)}
      >
        <img
          src={project.image}
          alt={project.title}
          width={isApplication ? 300 : 640}
          height={isApplication ? 533 : 400}
          decoding="async"
          loading="lazy"
          className={`transition-transform duration-500 ease-out group-hover:scale-105 ${
            isApplication
              ? 'h-full w-auto max-w-full object-contain rounded-xl drop-shadow-[0_8px_20px_rgba(15,23,42,0.14)]'
              : 'w-full h-full object-cover object-top'
          }`}
        />

        {/* Top-Left: Status Badge only for ongoing projects */}
        {(isInDevelopment || isComingSoon) && (
          <div className="absolute top-2 sm:top-3.5 left-2 sm:left-3.5 z-10">
            {isInDevelopment ? (
              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/95 text-slate-800 text-[10px] sm:text-xs font-semibold backdrop-blur-md shadow-xs border border-slate-100">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-amber-500 animate-pulse" />
                In Dev
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/95 text-slate-800 text-[10px] sm:text-xs font-semibold backdrop-blur-md shadow-xs border border-slate-100">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-purple-500" />
                Soon
              </span>
            )}
          </div>
        )}

        {/* Top-Right: Blue circular device icon */}
        <div className="absolute top-2 sm:top-3.5 right-2 sm:right-3.5 z-10 w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#0b5cff]/90 backdrop-blur-md flex items-center justify-center shadow-xs">
          {renderDeviceBadge()}
        </div>
      </div>

      {/* 2. Card Content */}
      <div className={`flex-1 flex flex-col justify-between ${compact ? 'p-3 sm:p-6' : 'p-4 sm:p-6'}`}>
        <div>
          {/* Project Title with top-right diagonal arrow button / icon */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3
              onClick={() => onSelect && onSelect(project)}
              className="text-sm sm:text-[19px] font-bold text-slate-900 group-hover:text-[#0b5cff] transition-colors cursor-pointer leading-snug line-clamp-2"
            >
              {project.title}
            </h3>

            {/* Compact direct link/open action */}
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Open ${project.title} live demo`}
                className="w-7 h-7 shrink-0 rounded-lg bg-blue-50/80 hover:bg-[#0b5cff] text-[#0b5cff] hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ) : (
              <button
                type="button"
                onClick={() => onSelect && onSelect(project)}
                aria-label={`View ${project.title} details`}
                className="w-7 h-7 shrink-0 rounded-lg bg-blue-50/80 hover:bg-[#0b5cff] text-[#0b5cff] hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed font-normal mb-3 sm:mb-5 line-clamp-2">
            {project.description}
          </p>

          {/* Redesigned Technology Stack Badges with Official Logos */}
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-6">
            {project.tags.slice(0, compact ? 2 : 4).map((tag, idx) => (
              <TechBadge key={idx} name={tag} />
            ))}
          </div>
        </div>

        {/* 3. Card Footer */}
        <div className="pt-2.5 sm:pt-4 border-t border-slate-100/90 flex items-center justify-between gap-2 mt-auto">
          {/* Project Details button with info icon */}
          <button
            type="button"
            onClick={() => onSelect && onSelect(project)}
            className="inline-flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-[13px] font-semibold text-slate-700 hover:text-[#0b5cff] transition-colors cursor-pointer"
          >
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>Details</span>
          </button>

          {/* Blue Live Demo Button */}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl bg-[#0b5cff] hover:bg-[#004cd8] text-white text-[11px] sm:text-[13px] font-semibold shadow-xs hover:shadow-[0_4px_14px_rgba(11,92,255,0.35)] transition-all cursor-pointer"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          ) : (
            <button
              type="button"
              onClick={() => onSelect && onSelect(project)}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl bg-blue-50 text-[#0b5cff] hover:bg-blue-100 text-[11px] sm:text-[13px] font-semibold transition-colors cursor-pointer"
            >
              <span>Preview</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default memo(ProjectCard, (prevProps, nextProps) => {
  return (
    prevProps.project.id === nextProps.project.id &&
    prevProps.isRevealed === nextProps.isRevealed &&
    prevProps.index === nextProps.index &&
    prevProps.compact === nextProps.compact
  );
});
