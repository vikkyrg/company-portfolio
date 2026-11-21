import React from 'react';
import { ArrowUpRight, Info, Laptop, Smartphone, Monitor } from 'lucide-react';
import TechBadge from './TechBadge';

export default function ProjectCard({ project, onSelect, index = 0, isRevealed = true }) {
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
      className={`group relative flex flex-col bg-white rounded-[22px] border border-blue-50/80 shadow-[0_6px_25px_rgba(37,99,235,0.06),0_1px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(11,92,255,0.12),0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 transition-shadow duration-300 overflow-hidden ${isRevealed ? 'portfolio-card-revealed' : 'portfolio-card-hidden'
        }`}
      style={{
        animationDelay: isRevealed ? staggerDelay : '0ms'
      }}
    >
      {/* 1. Project Thumbnail: Portrait for Applications, Landscape for Websites */}
      <div
        className={`relative w-full overflow-hidden cursor-pointer ${
          isApplication
            ? 'h-72 sm:h-80 md:h-84 bg-gradient-to-b from-slate-100/90 via-blue-50/40 to-slate-100/90 p-4 flex items-center justify-center'
            : 'aspect-[16/10] bg-gradient-to-b from-slate-50 to-slate-100'
        }`}
        onClick={() => onSelect && onSelect(project)}
      >
        <img
          src={project.image}
          alt={project.title}
          className={`transition-transform duration-500 ease-out group-hover:scale-105 ${
            isApplication
              ? 'h-full w-auto max-w-full object-contain rounded-xl drop-shadow-[0_8px_20px_rgba(15,23,42,0.14)]'
              : 'w-full h-full object-cover object-top'
          }`}
          loading="lazy"
        />

        {/* Top-Left: Status Badge only for ongoing projects */}
        {(isInDevelopment || isComingSoon) && (
          <div className="absolute top-3.5 left-3.5 z-10">
            {isInDevelopment ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-slate-800 text-xs font-semibold backdrop-blur-md shadow-xs border border-slate-100">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                In Development
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-slate-800 text-xs font-semibold backdrop-blur-md shadow-xs border border-slate-100">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Coming Soon
              </span>
            )}
          </div>
        )}

        {/* Top-Right: Blue circular device icon */}
        <div className="absolute top-3.5 right-3.5 z-10 w-7 h-7 rounded-lg bg-[#0b5cff]/90 backdrop-blur-md flex items-center justify-center shadow-xs">
          {renderDeviceBadge()}
        </div>
      </div>

      {/* 2. Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Project Title with top-right diagonal arrow icon */}
          <h3
            onClick={() => onSelect && onSelect(project)}
            className="text-lg sm:text-[19px] font-bold text-slate-900 group-hover:text-[#0b5cff] transition-colors cursor-pointer leading-snug mb-2 flex items-center gap-1.5"
          >
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0b5cff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </h3>

          {/* Short Description */}
          <p className="text-[13.5px] text-slate-500 leading-relaxed font-normal mb-5 line-clamp-2">
            {project.description}
          </p>

          {/* Redesigned Technology Stack Badges with Official Logos */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
            {project.tags.map((tag, idx) => (
              <TechBadge key={idx} name={tag} />
            ))}
          </div>
        </div>

        {/* 3. Card Footer */}
        <div className="pt-4 border-t border-slate-100/90 flex items-center justify-between gap-3 mt-auto">
          {/* Project Details button with info icon */}
          <button
            type="button"
            onClick={() => onSelect && onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-slate-700 hover:text-[#0b5cff] transition-colors cursor-pointer"
          >
            <Info className="w-4 h-4 text-slate-400" />
            <span>Project Details</span>
          </button>

          {/* Blue Live Demo Button */}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0b5cff] hover:bg-[#004cd8] text-white text-xs sm:text-[13px] font-semibold shadow-xs hover:shadow-[0_4px_14px_rgba(11,92,255,0.35)] hover:-translate-y-0.5 transition-all duration-150 cursor-pointer"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <button
              type="button"
              onClick={() => onSelect && onSelect(project)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 text-[#0b5cff] hover:bg-blue-100 text-xs sm:text-[13px] font-semibold transition-colors cursor-pointer"
            >
              <span>Preview</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
