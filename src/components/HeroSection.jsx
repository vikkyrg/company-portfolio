import React from 'react';
import { Monitor, Smartphone, Layers } from 'lucide-react';
import homeMockupImg from '../assets/home.png';

export default function HeroSection() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen bg-white text-on-surface pt-24 sm:pt-28 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 flex flex-col justify-center overflow-hidden">
      {/* 
        PREMIUM ABSTRACT BACKGROUND SYSTEM
        - Fills the viewport; the fixed navbar overlays the hero
        - High-opacity bottom blue wave system: ZERO white gap at the bottom
        - The blue design flows all the way to bottom:0 and continues seamless
      */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Soft radial backdrop behind the laptop & tablet mockups */}
        <div className="absolute right-[-4%] top-[2%] w-[580px] sm:w-[760px] lg:w-[960px] h-[520px] sm:h-[680px] lg:h-[820px] rounded-full bg-radial from-[#bfdbfe]/60 via-[#dbeafe]/35 to-transparent blur-3xl opacity-85" />

        {/* Ambient glow behind heading / top badge */}
        <div className="absolute left-[-5%] top-[-5%] w-[480px] sm:w-[620px] h-[400px] sm:h-[500px] rounded-full bg-radial from-[#bfdbfe]/45 via-[#e0e7ff]/25 to-transparent blur-3xl opacity-80" />

        {/* Main Background SVG Canvas extending to full bottom */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 900"
        >
          <defs>
            {/* Top-Right Big Organic Wave Gradient */}
            <linearGradient id="topRightWaveGrad" x1="100%" y1="0%" x2="40%" y2="70%">
              <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.85" />
              <stop offset="45%" stopColor="#dbeafe" stopOpacity="0.55" />
              <stop offset="85%" stopColor="#eff6ff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Top Center-Left Crest Gradient */}
            <linearGradient id="topCenterWaveGrad" x1="50%" y1="0%" x2="20%" y2="60%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#dbeafe" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Bottom Foundation Tone: solid visible soft-blue base that eliminates any white */}
            <linearGradient id="bottomBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#bfdbfe" stopOpacity="0.90" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.80" />
            </linearGradient>

            {/* Bottom Primary Wave Gradient - Rich, crisp blue matching reference */}
            <linearGradient id="bottomWaveGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.90" />
              <stop offset="35%" stopColor="#93c5fd" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#bfdbfe" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.50" />
            </linearGradient>

            {/* Bottom Secondary Layered Wave Gradient */}
            <linearGradient id="bottomWaveGrad2" x1="100%" y1="100%" x2="0%" y2="20%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.85" />
              <stop offset="55%" stopColor="#bfdbfe" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.45" />
            </linearGradient>

            {/* Arched Contour Stroke Gradient */}
            <linearGradient id="archStrokeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
              <stop offset="35%" stopColor="#3b82f6" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#60a5fa" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* 1. TOP CREST SHAPES */}
          {/* Top-Right Big Organic Inward Flow */}
          <path
            d="M 880,-40 C 1040,120 1260,180 1480,90 L 1480,-40 Z"
            fill="url(#topRightWaveGrad)"
            className="animate-wave-drift-1"
          />
          {/* Top-Center subtle curving veil */}
          <path
            d="M 380,-40 C 460,80 620,130 760,40 C 820,-5 860,-40 880,-40 Z"
            fill="url(#topCenterWaveGrad)"
            className="animate-wave-drift-2"
          />

          {/* 2. RIGHT-SIDE MASSIVE ORGANIC BULGE BEHIND MOCKUPS */}
          <g className="animate-wave-entrance-3">
            <path
              d="M 1480,60 C 1320,100 1140,240 1120,440 C 1100,640 1280,780 1480,840 Z"
              fill="url(#topRightWaveGrad)"
              opacity="0.80"
              className="animate-wave-drift-1"
            />
          </g>

          {/* 3. ELEGANT ARCHED FLOW LINE WITH ACCENT ORB */}
          <path
            d="M 280,680 C 420,380 680,180 1020,140"
            fill="none"
            stroke="url(#archStrokeGrad)"
            strokeWidth="1.6"
            className="hidden md:block"
          />
          <circle
            cx="820"
            cy="154"
            r="6"
            fill="#2563eb"
            className="hidden md:block animate-orb-float"
            opacity="0.9"
          />
          <circle
            cx="820"
            cy="154"
            r="12"
            fill="#93c5fd"
            className="hidden md:block animate-orb-float"
            opacity="0.50"
          />

          {/* 
            4. VISIBLE BLUE BOTTOM WAVE DESIGN (Zero white gap)
            Starts from y=620 and sweeps organically down through y=960.
            The entire lower portion is saturated in light blue tones.
          */}
          {/* Foundation Base: solid soft-blue bedrock that eliminates any white */}
          <path
            d="M -40,680 C 140,640 320,660 520,720 C 720,780 980,790 1200,730 C 1340,690 1420,710 1480,730 L 1480,960 L -40,960 Z"
            fill="url(#bottomBaseGrad)"
          />

          {/* Layer A (Secondary Flowing Wave) */}
          <g className="animate-wave-entrance-3">
            <path
              d="M -40,730 C 220,680 460,700 720,760 C 980,820 1220,770 1480,730 L 1480,960 L -40,960 Z"
              fill="url(#bottomWaveGrad2)"
              className="animate-wave-drift-2"
            />
          </g>

          {/* Layer B (Main Foreground Flowing Wave - prominent blue crest as in reference) */}
          <g className="animate-wave-entrance-1">
            <path
              d="M -40,640 C 140,580 320,560 500,640 C 680,720 880,810 1100,770 C 1260,740 1380,750 1480,780 L 1480,960 L -40,960 Z"
              fill="url(#bottomWaveGrad1)"
              className="animate-wave-drift-1"
            />
          </g>

          {/* Layer C (Left Corner Flowing Curl Accent) */}
          <g className="animate-wave-entrance-2">
            <path
              d="M -40,760 C 80,730 220,690 380,720 C 480,740 540,790 580,830 L 580,960 L -40,960 Z"
              fill="url(#bottomWaveGrad2)"
              opacity="0.95"
            />
          </g>
        </svg>

        {/* Solid light-blue bottom-edge anchor ensuring zero white gap into next section */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#bfdbfe]/80 to-transparent" />
      </div>

      <div className="relative max-w-[1360px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-8 xl:gap-12">
          
          {/* Left Side — Text Content (45% ~ 5 of 12 cols) */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start z-10">
            {/* Small Badge */}
            <div className="animate-hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xs text-on-surface text-label-sm font-label-sm uppercase tracking-wider mb-5 shadow-xs border border-surface-container/80">
              <span className="w-2 h-2 rounded-full bg-primary-container shrink-0"></span>
              <span className="font-semibold tracking-wide">INNOMATRICS TECHNOLOGIES</span>
            </div>

            {/* Main Heading - Refined typography with brand blue highlight */}
            <h1 className="animate-hero-heading text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] font-bold text-on-surface tracking-tight leading-[1.15] mb-4 max-w-xl">
              Turning Ideas Into Powerful{' '}
              <span className="text-primary-container inline-block">Digital Products</span>.
            </h1>

            {/* Description - controlled width for optimal readability */}
            <p className="animate-hero-desc text-[15px] sm:text-base lg:text-[17px] text-on-surface-variant leading-relaxed mb-3 max-w-lg">
              We design and develop modern websites, mobile applications, and scalable software solutions that help businesses grow, innovate, and succeed in the digital world.
            </p>

            {/* Subtle secondary supporting line */}
            <p className="animate-hero-desc text-sm font-semibold text-on-surface tracking-wide mb-7">
              Design. Develop. Deliver.
            </p>

            {/* Action Buttons - Horizontally aligned on desktop, clean touch targets */}
            <div className="animate-hero-buttons flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo('#work-section')}
                className="inline-flex items-center justify-center h-11 sm:h-12 px-6 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              >
                Explore Our Work
              </button>
              <button
                type="button"
                onClick={() => scrollTo('#contact-section')}
                className="inline-flex items-center justify-center h-11 sm:h-12 px-6 rounded-lg bg-white text-on-surface font-label-md text-label-md hover:bg-surface-container-low border border-outline-variant/60 transition-colors shadow-xs cursor-pointer whitespace-nowrap"
              >
                Let's Discuss Your Project
              </button>
            </div>

            {/* Service categories row with Lucide icons */}
            <div className="animate-hero-services flex flex-wrap items-center gap-x-5 gap-y-2 text-on-surface text-[13px] sm:text-sm font-medium">
              <div className="inline-flex items-center gap-2">
                <Monitor className="w-4 h-4 text-primary-container shrink-0" strokeWidth={2} />
                <span>Websites</span>
              </div>
              <span className="text-outline-variant select-none hidden sm:inline">•</span>
              <div className="inline-flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-primary-container shrink-0" strokeWidth={2} />
                <span>Mobile Apps</span>
              </div>
              <span className="text-outline-variant select-none hidden sm:inline">•</span>
              <div className="inline-flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary-container shrink-0" strokeWidth={2} />
                <span>SaaS Products</span>
              </div>
            </div>
          </div>

          {/* Right Side — Image with Ambient Backdrop Glow & Soft Device Shadow (55% ~ 7 of 12 cols) */}
          <div className="lg:col-span-7 xl:col-span-7 flex items-center justify-center lg:justify-end w-full relative">
            <div className="animate-hero-image relative w-full flex justify-center lg:justify-end">
              {/* Soft radial glow directly cradling the mockup graphic */}
              <div
                className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-full bg-primary-fixed/40 blur-2xl -z-10 pointer-events-none"
                aria-hidden="true"
              />

              {/* Soft ambient ground shadow beneath the devices */}
              <div
                className="absolute -bottom-4 inset-x-[10%] h-10 bg-primary-fixed-variant/15 blur-xl rounded-full -z-10 pointer-events-none"
                aria-hidden="true"
              />

              <img
                src={homeMockupImg}
                alt="Innomatrics Technologies Digital Products Mockup"
                className="w-full max-w-[680px] lg:max-w-none h-auto object-contain block select-none drop-shadow-sm transition-transform duration-700 hover:scale-[1.01]"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
