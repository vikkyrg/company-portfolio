import React, { useState, useEffect, useRef } from 'react';
import { PenTool, Code2, Rocket, Terminal, Sparkles, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const [isInView, setIsInView] = useState(false);
  const [flippedCards, setFlippedCards] = useState({ 1: false, 2: false, 3: false });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle mobile tap-to-flip cleanly without triggering during scrolls
  const handleCardClick = (cardNum) => {
    // Only toggle on mobile / touch screen where hover is unavailable
    if (window.matchMedia('(hover: none)').matches) {
      setFlippedCards((prev) => ({
        ...prev,
        [cardNum]: !prev[cardNum]
      }));
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`relative w-full bg-[#f2f6ff] text-on-surface py-20 sm:py-24 lg:py-28 overflow-hidden ${
        isInView ? 'about-inview' : 'about-anim-ready'
      }`}
      id="about-section"
    >
      {/* 
        ========================================================================
        MATCHING BACKGROUND ARTWORK SYSTEM FROM REFERENCE
        ========================================================================
      */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Soft radial blue lighting aura */}
        <div className="absolute top-[5%] left-[20%] w-[680px] h-[520px] rounded-full bg-radial from-[#dbeafe]/60 via-[#e0e7ff]/30 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-[40%] right-[5%] w-[620px] h-[620px] rounded-full bg-radial from-[#bfdbfe]/40 via-[#dbeafe]/20 to-transparent blur-3xl opacity-75" />

        {/* Technical Dotted Grid Accents */}
        <div
          className="absolute top-10 left-6 sm:left-12 w-28 h-20 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_90%)]"
          style={{
            backgroundImage: 'radial-gradient(#2563eb 1.5px, transparent 1.5px)',
            backgroundSize: '16px 16px'
          }}
        />

        <div
          className="absolute top-8 right-6 sm:right-14 w-36 h-28 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_95%)]"
          style={{
            backgroundImage: 'radial-gradient(#2563eb 1.5px, transparent 1.5px)',
            backgroundSize: '16px 16px'
          }}
        />

        {/* Abstract Fluid Wave Layers at Bottom Edge */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full h-[240px] sm:h-[320px] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <defs>
            <linearGradient id="aboutWaveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#dbeafe" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#eff6ff" stopOpacity="0.10" />
            </linearGradient>
            <linearGradient id="aboutWaveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.50" />
              <stop offset="55%" stopColor="#bfdbfe" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          <path
            d="M -40,160 C 240,60 520,240 880,180 C 1180,120 1340,180 1480,140 L 1480,360 L -40,360 Z"
            fill="url(#aboutWaveGrad1)"
          />

          <path
            d="M -40,220 C 280,120 620,280 1020,210 C 1240,170 1380,220 1480,190 L 1480,360 L -40,360 Z"
            fill="url(#aboutWaveGrad2)"
          />
        </svg>

        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#f8faff] to-transparent pointer-events-none" />
      </div>

      <div className="relative max-w-[1320px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop z-10">
        
        {/* ====================================================================
            HEADER AREA
            ==================================================================== */}
        <div className="animate-about-header max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container" />
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
              Our Discipline
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-on-surface tracking-tight leading-[1.18] mb-4">
            Technology. Creativity.{' '}
            <span className="text-primary-container relative inline-block">
              Engineering.
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-2.5 text-primary-container/40 pointer-events-none"
                viewBox="0 0 160 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 2,7 C 45,2 115,2 158,8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
            Innomatrics Technologies is a software development team creating websites, mobile
            applications, and scalable digital products for businesses worldwide. We bridge thoughtful
            interface design with resilient, production-ready engineering.
          </p>
        </div>

        {/* ====================================================================
            THREE PILLAR CARDS GRID WITH GENUINE 3D CARD FLIP
            ==================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          
          {/* ---------------- CARD 1 — DESIGN CRAFT ---------------- */}
          <div
            onClick={() => handleCardClick(1)}
            className={`animate-about-card-1 flip-card-container perspective-1000 min-h-[360px] sm:min-h-[380px] cursor-pointer group ${
              flippedCards[1] ? 'is-flipped' : ''
            }`}
          >
            <div className="flip-card-inner relative w-full h-full transform-style-3d rounded-3xl shadow-[0_4px_24px_rgba(37,99,235,0.06)] group-hover:shadow-[0_16px_38px_rgba(37,99,235,0.14)]">
              
              {/* FRONT FACE */}
              <div className="backface-hidden absolute inset-0 w-full h-full bg-white rounded-3xl p-7 sm:p-8 border border-[#e2e8f0]/80 flex flex-col justify-between overflow-hidden">
                {/* Top-left ambient card glow */}
                <div className="absolute top-0 left-0 w-36 h-36 bg-radial from-[#dbeafe]/70 to-transparent pointer-events-none -z-0" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-container font-bold">
                      01 / DESIGN CRAFT
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#eff6ff] text-primary-container flex items-center justify-center border border-[#dbeafe] shadow-2xs">
                      <PenTool className="w-4 h-4" strokeWidth={2.2} />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-[22px] font-bold text-on-surface tracking-tight mb-3">
                    Human-Centered UI/UX
                  </h3>

                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Design systems, typography-first editorial layouts, and interactive rapid prototyping tested
                    for clarity and accessibility.
                  </p>
                </div>

                <div className="relative z-10 pt-6 mt-auto flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1f5f9]/80 border border-[#e2e8f0] text-on-surface text-label-sm font-label-sm">
                    <PenTool className="w-3.5 h-3.5 text-primary-container" strokeWidth={2.2} />
                    <span className="font-semibold text-on-surface">Figma · Design Tokens</span>
                  </div>
                  <span className="text-[11px] text-primary-container/80 font-semibold sm:hidden">
                    Tap to flip ↻
                  </span>
                </div>
              </div>

              {/* BACK FACE (Rotated 180deg) */}
              <div className="backface-hidden rotate-y-180 absolute inset-0 w-full h-full bg-gradient-to-br from-white via-white to-[#f0f6ff] rounded-3xl p-7 sm:p-8 border-2 border-primary-container/40 flex flex-col justify-between overflow-hidden shadow-sm">
                {/* Subtle decorative background glow & grid accent */}
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-radial from-[#bfdbfe]/50 to-transparent pointer-events-none -z-0" />

                <div className="relative z-10">
                  {/* Category label & decorative icon */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/10 text-primary-container font-label-sm text-label-sm uppercase tracking-wider font-bold">
                      <Sparkles className="w-3 h-3" />
                      01 / DESIGN APPROACH
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#eff6ff] text-primary-container flex items-center justify-center border border-[#dbeafe]/70">
                      <PenTool className="w-4 h-4" strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Heading */}
                  <h4 className="text-xl sm:text-[22px] font-bold text-on-surface tracking-tight mb-2.5">
                    Designed Around People
                  </h4>

                  {/* Description */}
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4 text-[14px] sm:text-[15px]">
                    Intuitive interfaces, thoughtful visual hierarchy, accessible interactions, and user-focused experiences that turn complex ideas into simple products.
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-white text-primary-container font-label-sm text-xs font-semibold border border-primary-container/20 shadow-2xs">
                      User Research
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white text-primary-container font-label-sm text-xs font-semibold border border-primary-container/20 shadow-2xs">
                      Prototyping
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white text-primary-container font-label-sm text-xs font-semibold border border-primary-container/20 shadow-2xs">
                      Design Systems
                    </span>
                  </div>
                </div>

                {/* Bottom Text & Link Style */}
                <div className="relative z-10 pt-4 mt-auto flex items-center justify-between border-t border-[#e2e8f0]/80">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-container hover:text-secondary transition-colors">
                    Crafted for Impact <ArrowRight className="w-4 h-4" />
                  </span>
                  <span className="text-[11px] text-primary-container/80 font-semibold sm:hidden">
                    Tap to flip ↻
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* ---------------- CARD 2 — FULL-STACK ENGINEERING ---------------- */}
          <div
            onClick={() => handleCardClick(2)}
            className={`animate-about-card-2 flip-card-container perspective-1000 min-h-[360px] sm:min-h-[380px] cursor-pointer group ${
              flippedCards[2] ? 'is-flipped' : ''
            }`}
          >
            <div className="flip-card-inner relative w-full h-full transform-style-3d rounded-3xl shadow-[0_4px_24px_rgba(37,99,235,0.06)] group-hover:shadow-[0_16px_38px_rgba(37,99,235,0.14)]">
              
              {/* FRONT FACE */}
              <div className="backface-hidden absolute inset-0 w-full h-full bg-white rounded-3xl p-7 sm:p-8 border border-[#e2e8f0]/80 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 left-0 w-36 h-36 bg-radial from-[#dbeafe]/70 to-transparent pointer-events-none -z-0" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-container font-bold">
                      02 / FULL-STACK ENGINEERING
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#eff6ff] text-primary-container flex items-center justify-center border border-[#dbeafe] shadow-2xs">
                      <Code2 className="w-4 h-4" strokeWidth={2.2} />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-[22px] font-bold text-on-surface tracking-tight mb-3">
                    Resilient Codebases
                  </h3>

                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Scalable cloud architectures, modern web frameworks, performant native mobile wrappers, and
                    zero-compromise security protocols.
                  </p>
                </div>

                <div className="relative z-10 pt-6 mt-auto flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1f5f9]/80 border border-[#e2e8f0] text-on-surface text-label-sm font-label-sm">
                    <Terminal className="w-3.5 h-3.5 text-primary-container" strokeWidth={2.2} />
                    <span className="font-semibold text-on-surface">Node · React · Cloud Edge</span>
                  </div>
                  <span className="text-[11px] text-primary-container/80 font-semibold sm:hidden">
                    Tap to flip ↻
                  </span>
                </div>
              </div>

              {/* BACK FACE (Rotated 180deg) */}
              <div className="backface-hidden rotate-y-180 absolute inset-0 w-full h-full bg-gradient-to-br from-white via-white to-[#f0f6ff] rounded-3xl p-7 sm:p-8 border-2 border-primary-container/40 flex flex-col justify-between overflow-hidden shadow-sm">
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-radial from-[#bfdbfe]/50 to-transparent pointer-events-none -z-0" />

                <div className="relative z-10">
                  {/* Category label & decorative icon */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/10 text-primary-container font-label-sm text-label-sm uppercase tracking-wider font-bold">
                      <Sparkles className="w-3 h-3" />
                      02 / ENGINEERING APPROACH
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#eff6ff] text-primary-container flex items-center justify-center border border-[#dbeafe]/70">
                      <Code2 className="w-4 h-4" strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Heading */}
                  <h4 className="text-xl sm:text-[22px] font-bold text-on-surface tracking-tight mb-2.5">
                    Built to Scale
                  </h4>

                  {/* Description */}
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4 text-[14px] sm:text-[15px]">
                    Clean architecture, maintainable code, secure integrations, and optimized systems engineered for reliability and long-term growth.
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-white text-primary-container font-label-sm text-xs font-semibold border border-primary-container/20 shadow-2xs">
                      Scalable Architecture
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white text-primary-container font-label-sm text-xs font-semibold border border-primary-container/20 shadow-2xs">
                      Performance
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white text-primary-container font-label-sm text-xs font-semibold border border-primary-container/20 shadow-2xs">
                      Security
                    </span>
                  </div>
                </div>

                {/* Bottom Text & Link Style */}
                <div className="relative z-10 pt-4 mt-auto flex items-center justify-between border-t border-[#e2e8f0]/80">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-container hover:text-secondary transition-colors">
                    Engineered for Reliability <ArrowRight className="w-4 h-4" />
                  </span>
                  <span className="text-[11px] text-primary-container/80 font-semibold sm:hidden">
                    Tap to flip ↻
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* ---------------- CARD 3 — PRODUCT DELIVERY ---------------- */}
          <div
            onClick={() => handleCardClick(3)}
            className={`animate-about-card-3 flip-card-container perspective-1000 min-h-[360px] sm:min-h-[380px] cursor-pointer group md:col-span-2 lg:col-span-1 ${
              flippedCards[3] ? 'is-flipped' : ''
            }`}
          >
            <div className="flip-card-inner relative w-full h-full transform-style-3d rounded-3xl shadow-[0_4px_24px_rgba(37,99,235,0.06)] group-hover:shadow-[0_16px_38px_rgba(37,99,235,0.14)]">
              
              {/* FRONT FACE */}
              <div className="backface-hidden absolute inset-0 w-full h-full bg-white rounded-3xl p-7 sm:p-8 border border-[#e2e8f0]/80 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 left-0 w-36 h-36 bg-radial from-[#dbeafe]/70 to-transparent pointer-events-none -z-0" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-container font-bold">
                      03 / PRODUCT DELIVERY
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#eff6ff] text-primary-container flex items-center justify-center border border-[#dbeafe] shadow-2xs">
                      <Rocket className="w-4 h-4" strokeWidth={2.2} />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-[22px] font-bold text-on-surface tracking-tight mb-3">
                    Agile Execution
                  </h3>

                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Time-boxed sprint cadences, zero-downtime CI/CD deployment pipelines, code reviews, and
                    long-term technical stewardship.
                  </p>
                </div>

                <div className="relative z-10 pt-6 mt-auto flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1f5f9]/80 border border-[#e2e8f0] text-on-surface text-label-sm font-label-sm">
                    <Rocket className="w-3.5 h-3.5 text-primary-container" strokeWidth={2.2} />
                    <span className="font-semibold text-on-surface">CI/CD · Automated Tests</span>
                  </div>
                  <span className="text-[11px] text-primary-container/80 font-semibold sm:hidden">
                    Tap to flip ↻
                  </span>
                </div>
              </div>

              {/* BACK FACE (Rotated 180deg) */}
              <div className="backface-hidden rotate-y-180 absolute inset-0 w-full h-full bg-gradient-to-br from-white via-white to-[#f0f6ff] rounded-3xl p-7 sm:p-8 border-2 border-primary-container/40 flex flex-col justify-between overflow-hidden shadow-sm">
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-radial from-[#bfdbfe]/50 to-transparent pointer-events-none -z-0" />

                <div className="relative z-10">
                  {/* Category label & decorative icon */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/10 text-primary-container font-label-sm text-label-sm uppercase tracking-wider font-bold">
                      <Sparkles className="w-3 h-3" />
                      03 / DELIVERY APPROACH
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#eff6ff] text-primary-container flex items-center justify-center border border-[#dbeafe]/70">
                      <Rocket className="w-4 h-4" strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Heading */}
                  <h4 className="text-xl sm:text-[22px] font-bold text-on-surface tracking-tight mb-2.5">
                    From Idea to Launch
                  </h4>

                  {/* Description */}
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4 text-[14px] sm:text-[15px]">
                    Structured development, iterative feedback, quality testing, and reliable deployment transform ideas into production-ready digital products.
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-white text-primary-container font-label-sm text-xs font-semibold border border-primary-container/20 shadow-2xs">
                      Agile Workflow
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white text-primary-container font-label-sm text-xs font-semibold border border-primary-container/20 shadow-2xs">
                      Testing
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white text-primary-container font-label-sm text-xs font-semibold border border-primary-container/20 shadow-2xs">
                      Deployment
                    </span>
                  </div>
                </div>

                {/* Bottom Text & Link Style */}
                <div className="relative z-10 pt-4 mt-auto flex items-center justify-between border-t border-[#e2e8f0]/80">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-container hover:text-secondary transition-colors">
                    Delivered with Precision <ArrowRight className="w-4 h-4" />
                  </span>
                  <span className="text-[11px] text-primary-container/80 font-semibold sm:hidden">
                    Tap to flip ↻
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
