import React, { useState } from 'react';
import logoImg from '../assets/logo.png';
import LegalModal from './LegalModal';

export default function Footer({ onNavigate }) {
  const [activeLegalModal, setActiveLegalModal] = useState(null);

  const handleNav = (e, targetId, filterCategory) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetId, filterCategory);
    }
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLegal = (e, type) => {
    e.preventDefault();
    setActiveLegalModal(type);
  };

  return (
    <>
      <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_8px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1320px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pt-10 pb-8 sm:pt-12 sm:pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-8 gap-x-gutter-desktop items-start">
            {/* Brand Column */}
            <div className="lg:col-span-5 flex flex-col pr-0 lg:pr-space-xl">
              <a
                className="flex items-center gap-3 mb-3 group"
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
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed mb-4">
                Engineering high-impact web ecosystems, native mobile experiences, and resilient cloud architectures
                with Swiss editorial precision and modern digital craft.
              </p>
              <div className="flex items-center gap-space-sm">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  Global Engineering Studio
                </span>
              </div>
            </div>

            {/* Practice Column */}
            <div className="lg:col-span-3 flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-semibold tracking-wide uppercase mb-3">
                Practice
              </span>
              <ul className="flex flex-col space-y-2.5">
                <li className="flex items-center">
                  <a
                    className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-150 cursor-pointer"
                    href="#work-section"
                    onClick={(e) => handleNav(e, '#work-section', 'websites')}
                  >
                    Websites
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-150 cursor-pointer"
                    href="#work-section"
                    onClick={(e) => handleNav(e, '#work-section', 'mobile')}
                  >
                    Mobile Apps
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-150 cursor-pointer"
                    href="#work-section"
                    onClick={(e) => handleNav(e, '#work-section', 'saas')}
                  >
                    SaaS Platforms
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="lg:col-span-2 flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-semibold tracking-wide uppercase mb-3">
                Company
              </span>
              <ul className="flex flex-col space-y-2.5">
                <li className="flex items-center">
                  <a
                    className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-150 cursor-pointer"
                    href="#about-section"
                    onClick={(e) => handleNav(e, '#about-section')}
                  >
                    About Us
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-150 cursor-pointer"
                    href="#about-section"
                    onClick={(e) => handleNav(e, '#about-section')}
                  >
                    Capabilities
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-150 cursor-pointer"
                    href="#contact-section"
                    onClick={(e) => handleNav(e, '#contact-section')}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect Column */}
            <div className="lg:col-span-2 flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-semibold tracking-wide uppercase mb-3">
                Connect
              </span>
              <ul className="flex flex-col space-y-2.5">
                <li className="flex items-center">
                  <a
                    className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-150"
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-150"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-150"
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter / X
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Legal bar */}
          <div className="pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-on-surface-variant font-body-sm text-body-sm border-t border-surface-container-low">
            <p>© 2026 Innomatrics Technologies LLC. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button
                type="button"
                className="hover:text-primary transition-colors duration-150 cursor-pointer bg-transparent border-none p-0 text-inherit font-inherit"
                onClick={(e) => handleOpenLegal(e, 'privacy')}
              >
                Privacy Policy
              </button>
              <button
                type="button"
                className="hover:text-primary transition-colors duration-150 cursor-pointer bg-transparent border-none p-0 text-inherit font-inherit"
                onClick={(e) => handleOpenLegal(e, 'terms')}
              >
                Terms of Service
              </button>
              <button
                type="button"
                className="hover:text-primary transition-colors duration-150 cursor-pointer bg-transparent border-none p-0 text-inherit font-inherit"
                onClick={(e) => handleOpenLegal(e, 'security')}
              >
                Security
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Legal Document Modal */}
      {activeLegalModal && (
        <LegalModal
          type={activeLegalModal}
          onClose={() => setActiveLegalModal(null)}
        />
      )}
    </>
  );
}
