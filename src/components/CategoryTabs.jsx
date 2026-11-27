import React, { useRef, useState, useEffect } from 'react';
import {
  Globe,
  Smartphone,
  Code2,
  Layers,
  LayoutGrid
} from 'lucide-react';

export const getCategoryIcon = (id, className = "w-4 h-4") => {
  switch (id) {
    case 'websites':
      return <Globe className={className} />;
    case 'applications':
      return <LayoutGrid className={className} />;
    case 'custom-software':
      return <Code2 className={className} />;
    case 'in-development':
      return <Layers className={className} />;
    default:
      return <Globe className={className} />;
  }
};

export default function CategoryTabs({ categories, activeTab, onSelectTab, counts = {} }) {
  const containerRef = useRef(null);
  const tabRefs = useRef({});
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  // Update edge fade indicators when container scrolls or resizes
  const checkScrollFades = () => {
    const el = containerRef.current;
    if (!el) return;
    const canScroll = el.scrollWidth > el.clientWidth;
    if (!canScroll) {
      setShowLeftFade(false);
      setShowRightFade(false);
      return;
    }
    setShowLeftFade(el.scrollLeft > 6);
    setShowRightFade(el.scrollLeft + el.clientWidth < el.scrollWidth - 6);
  };

  useEffect(() => {
    checkScrollFades();

    // Auto-scroll active tab into view smoothly on mobile/tablet if partially hidden
    const activeEl = tabRefs.current[activeTab];
    const containerEl = containerRef.current;
    if (activeEl && containerEl && containerEl.scrollWidth > containerEl.clientWidth) {
      const activeRect = activeEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();

      if (activeRect.left < containerRect.left + 16 || activeRect.right > containerRect.right - 16) {
        activeEl.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest'
        });
      }
    }

    window.addEventListener('resize', checkScrollFades, { passive: true });
    return () => window.removeEventListener('resize', checkScrollFades);
  }, [activeTab]);

  return (
    <div className="w-full flex flex-col items-center mt-3 sm:mt-0 mb-8 sm:mb-14 px-2 sm:px-4">
      {/* 
        ========================================================================
        HORIZONTAL TAB NAVIGATION
        - Clean, instant, professional tab switching
        - No moving sliding indicators or delayed animations
        - Preserves identical layout, dimensions, icons, and badges
        ========================================================================
      */}
      <div className="relative max-w-full">
        {/* Left Fade Overflow Indicator (Mobile) */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#F8FBFF] to-transparent z-20 pointer-events-none rounded-l-full transition-opacity duration-200 sm:hidden ${
            showLeftFade ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* Right Fade Overflow Indicator (Mobile) */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#F8FBFF] to-transparent z-20 pointer-events-none rounded-r-full transition-opacity duration-200 sm:hidden ${
            showRightFade ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* Scrollable Navigation Pill Track */}
        <div
          ref={containerRef}
          onScroll={checkScrollFades}
          role="tablist"
          aria-label="Portfolio Category Filters"
          className="relative flex items-center p-1 sm:p-2 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full border border-blue-100/80 shadow-[0_4px_24px_rgba(37,99,235,0.06),0_1px_3px_rgba(0,0,0,0.02)] gap-1 sm:gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
        >
          {/* Individual Tab Buttons */}
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            const count = counts[cat.id];

            return (
              <button
                key={cat.id}
                ref={(el) => (tabRefs.current[cat.id] = el)}
                role="tab"
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                type="button"
                onClick={() => onSelectTab(cat.id)}
                className={`group relative z-10 px-3.5 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-full font-medium text-[11.5px] sm:text-sm tracking-tight transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 sm:gap-2 select-none outline-none focus-visible:ring-2 focus-visible:ring-[#0b5cff] focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-[#0b5cff] text-white font-semibold shadow-[0_4px_14px_rgba(11,92,255,0.35)]'
                    : 'text-[#1e293b] hover:text-[#0b5cff] hover:bg-blue-50/70 bg-transparent'
                }`}
              >
                {getCategoryIcon(cat.id, "w-3.5 sm:w-4 h-3.5 sm:h-4 shrink-0 transition-colors duration-150")}
                <span>{cat.label}</span>
                {typeof count === 'number' && (
                  <span
                    className={`text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-full font-semibold transition-colors duration-150 ${
                      isActive
                        ? 'bg-white/25 text-white'
                        : 'bg-blue-50 text-[#0b5cff] group-hover:bg-blue-100/90'
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
