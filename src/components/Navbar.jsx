import React from 'react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1320px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-space-md">
        {/* Brand / Logo */}
        <a
          className="flex items-center gap-3 group"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            src={logoImg}
            alt="Innomatrics Technologies Logo"
            className="w-9 h-9 object-contain rounded-lg group-hover:scale-105 transition-transform duration-200"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface font-bold leading-none">
              Innomatrics
            </span>
            <span className="font-label-sm text-label-sm tracking-wider uppercase text-outline mt-0.5 leading-none">
              Technologies
            </span>
          </div>
        </a>

        {/* Action Button & Avatar & Mobile Toggle */}
        <div className="flex items-center gap-space-md">
          <a
            className="hidden sm:inline-flex items-center justify-center h-10 px-space-lg rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-secondary focus:ring-2 focus:ring-primary-container focus:ring-offset-2 transition-all duration-150 shadow-[0_1px_3px_0_rgba(17,24,39,0.03)] cursor-pointer"
            href="#contact-section"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Talk
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>

        </div>
      </div>
    </header>
  );
}
