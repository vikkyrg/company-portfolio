import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.06)]'
          : 'bg-[#F4F8FF]/85 backdrop-blur-sm border-b border-blue-100/60 shadow-[0_1px_8px_rgba(37,99,235,0.03)]'
      }`}
    >
      <div className="h-14 sm:h-16 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand: Company Logo & Company Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3.5 group cursor-pointer select-none"
          title="Innomatrics Technologies"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-white shadow-sm border border-slate-100 flex items-center justify-center p-1 group-hover:shadow-md group-hover:scale-105 transition-all duration-200">
            <img
              src={logoImg}
              alt="Innomatrics Technologies Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 leading-none group-hover:text-primary transition-colors">
              Innomatrics
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-slate-400 mt-0.5 leading-none">
              Technologies
            </span>
          </div>
        </a>

        {/* Clean, compact status indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50/90 border border-slate-200/70 text-slate-600 text-xs font-medium transition-colors">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="hidden sm:inline">Portfolio Showcase</span>
          <span className="sm:hidden">Portfolio</span>
        </div>
      </div>
    </header>
  );
}
