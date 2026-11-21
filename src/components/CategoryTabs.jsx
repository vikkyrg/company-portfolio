import React, { useRef, useState, useEffect } from 'react';
import {
  Globe,
  Smartphone,
  Code2,
  Layers
} from 'lucide-react';

export default function CategoryTabs({ categories, activeTab, onSelectTab, counts = {} }) {
  const containerRef = useRef(null);
  const tabRefs = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
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

  // Update sliding indicator position and width based on selected tab
  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = tabRefs.current[activeTab];
      const containerEl = containerRef.current;
      if (activeEl && containerEl) {
        const activeRect = activeEl.getBoundingClientRect();
        const containerRect = containerEl.getBoundingClientRect();
        
        // Exact offset within scrollable container
        const leftPos = activeRect.left - containerRect.left + containerEl.scrollLeft;
        
        setIndicatorStyle({
          left: leftPos,
          width: activeRect.width,
          opacity: 1
        });

        checkScrollFades();
      }
    };

    updateIndicator();

    // Auto-scroll active tab into view smoothly on mobile/tablet
    const activeEl = tabRefs.current[activeTab];
    const containerEl = containerRef.current;
    if (activeEl && containerEl && containerEl.scrollWidth > containerEl.clientWidth) {
      const activeRect = activeEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();

      // Check if active tab is partially or completely off-screen
      if (activeRect.left < containerRect.left + 16 || activeRect.right > containerRect.right - 16) {
        activeEl.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest'
        });
      }
    }

    window.addEventListener('resize', updateIndicator, { passive: true });
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeTab, categories]);

  const getTabIcon = (id) => {
    switch (id) {
      case 'websites':
        return (
          <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 shrink-0 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
          </svg>
        );
      case 'applications':
        return <Smartphone className="w-3.5 sm:w-4 h-3.5 sm:h-4 shrink-0 stroke-[2.2] transition-colors duration-300" />;
      case 'custom-software':
        return <Code2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 shrink-0 stroke-[2.2] transition-colors duration-300" />;
      case 'in-development':
        return <Layers className="w-3.5 sm:w-4 h-3.5 sm:h-4 shrink-0 stroke-[2.2] transition-colors duration-300" />;
      default:
        return <Globe className="w-3.5 sm:w-4 h-3.5 sm:h-4 shrink-0 stroke-[2.2] transition-colors duration-300" />;
    }
  };

  return (
    <div className="w-full flex justify-center mb-10 sm:mb-14 px-2 sm:px-4">
      {/* Responsive Wrapper with Side Fade Indicators on Mobile */}
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
          className="relative flex items-center p-1 sm:p-2 bg-white/95 backdrop-blur-md rounded-full border border-blue-100/80 shadow-[0_4px_24px_rgba(37,99,235,0.06),0_1px_3px_rgba(0,0,0,0.02)] gap-1 sm:gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
        >
          {/* Shared Sliding Indicator Pill */}
          <div
            className="absolute top-1 sm:top-2 bottom-1 sm:bottom-2 rounded-full bg-[#0b5cff] shadow-[0_4px_14px_rgba(11,92,255,0.35)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none"
            style={{
              transform: `translateX(${indicatorStyle.left}px)`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.opacity
            }}
            aria-hidden="true"
          />

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
                className={`group relative z-10 px-3.5 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-[11.5px] sm:text-sm tracking-tight transition-colors duration-300 whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 sm:gap-2 select-none outline-none focus-visible:ring-2 focus-visible:ring-[#0b5cff] focus-visible:ring-offset-2 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[#1e293b] hover:text-[#0b5cff] hover:bg-blue-50/70'
                }`}
              >
                {getTabIcon(cat.id)}
                <span>{cat.label}</span>
                {typeof count === 'number' && (
                  <span
                    className={`text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-full font-semibold transition-colors duration-300 ${
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
