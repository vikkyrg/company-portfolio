import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import contactIllustrationImg from '../assets/contact.png';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Web Application / E-Commerce',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isInView, setIsInView] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setFormData({ name: '', email: '', phone: '', projectType: 'Web Application / E-Commerce', message: '' });
    }, 2000);
  };

  return (
    <section
      ref={sectionRef}
      className={`relative w-full bg-[#f2f6ff] text-on-surface py-20 sm:py-24 lg:py-28 overflow-hidden ${
        isInView ? 'contact-inview' : 'contact-anim-ready'
      }`}
      id="contact-section"
    >
      {/* 
        ========================================================================
        MATCHING BACKGROUND ARTWORK SYSTEM FROM REFERENCE
        - Soft ambient light blue/lavender backdrop (#f2f6ff)
        - Sweeping layered translucent wave curves in upper right corner
        - Discrete technical blueprint dot matrix in corners
        - Soft radial blue glow behind title & card
        ========================================================================
      */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Soft radial blue lighting aura */}
        <div className="absolute top-[10%] right-[12%] w-[680px] h-[580px] rounded-full bg-radial from-[#bfdbfe]/40 via-[#dbeafe]/20 to-transparent blur-3xl opacity-80" />
        <div className="absolute -bottom-10 left-[10%] w-[640px] h-[480px] rounded-full bg-radial from-[#dbeafe]/50 via-[#eff6ff]/25 to-transparent blur-3xl opacity-75" />

        {/* Technical Dotted Grid Accents (matching top-left & bottom-right reference) */}
        <div
          className="absolute top-10 left-6 sm:left-12 w-28 h-20 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_90%)]"
          style={{
            backgroundImage: 'radial-gradient(#2563eb 1.5px, transparent 1.5px)',
            backgroundSize: '16px 16px'
          }}
        />

        <div
          className="absolute bottom-10 right-6 sm:right-14 w-36 h-28 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_95%)]"
          style={{
            backgroundImage: 'radial-gradient(#2563eb 1.5px, transparent 1.5px)',
            backgroundSize: '16px 16px'
          }}
        />

        {/* Abstract Fluid Wave Layers at Top & Sides (matching reference image) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-45"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <defs>
            <linearGradient id="contactWaveGrad1" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.50" />
              <stop offset="50%" stopColor="#dbeafe" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#eff6ff" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="contactWaveGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.40" />
              <stop offset="60%" stopColor="#bfdbfe" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Sweeping wave flow across upper right background */}
          <path
            d="M 720,-40 C 920,80 1140,40 1480,240 L 1480,-40 Z"
            fill="url(#contactWaveGrad1)"
          />

          {/* Soft curving wave through lower section */}
          <path
            d="M -40,680 C 320,580 720,740 1200,640 C 1360,600 1440,640 1480,620 L 1480,840 L -40,840 Z"
            fill="url(#contactWaveGrad2)"
          />
        </svg>

        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#f2f6ff] to-transparent pointer-events-none" />
      </div>

      <div className="relative max-w-[1320px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop z-10">
        
        {/* ====================================================================
            MAIN CONTACT CARD — Matching Reference Design & Specification
            - White surface with 28–36px rounded corners
            - Subtle blue-tinted border & soft ambient shadow
            - Left: Eyebrow label, bold heading, narrative, CTA buttons
            - Right: contact.png illustration with ambient glow & subtle float
            - Bottom: Neat single-row contact details with thin divider
            ==================================================================== */}
        <div className="animate-contact-card relative w-full bg-white rounded-[28px] sm:rounded-[36px] shadow-[0_8px_38px_rgba(37,99,235,0.08)] border border-[#e2e8f0]/90 overflow-hidden">
          
          {/* Subtle interior lighting aura */}
          <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-radial from-[#eff6ff] via-[#f8faff] to-transparent pointer-events-none -z-0" />

          {/* Card Upper Section: Two-Column Responsive Layout */}
          <div className="relative z-10 p-7 sm:p-10 lg:p-14 pb-8 sm:pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* LEFT SIDE: Contact Content (55–60%) */}
              <div className="lg:col-span-7 flex flex-col items-start max-w-2xl">
                
                {/* Eyebrow Label with blue bullet dot */}
                <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-container" />
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                    LET'S BUILD SOMETHING
                  </span>
                </div>

                {/* Main Headline */}
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-on-surface tracking-tight leading-[1.18] mb-4">
                  Have a project in{' '}
                  <span className="text-primary-container relative inline-block">
                    mind?
                    {/* Subtle underline sketch arc under "mind?" */}
                    <svg
                      className="absolute -bottom-1.5 left-0 w-full h-2.5 text-primary-container/40 pointer-events-none"
                      viewBox="0 0 120 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M 2,7 C 35,2 85,2 118,8"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h2>

                {/* Supporting Paragraph */}
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8 max-w-xl">
                  Let's turn your ideas into impactful digital experiences. Whether you're planning a website,
                  mobile application, SaaS platform, or a custom software solution, our team is ready to help
                  bring your vision to life.
                </p>

                {/* Primary Action Button: Opens the Schedule Architecture Call Form */}
                <div className="flex items-center gap-3.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-primary-container text-white font-label-md text-label-md hover:bg-secondary transition-all duration-300 shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 cursor-pointer group"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE: contact.png Illustration (40–45%) */}
              <div className="lg:col-span-5 flex items-center justify-center relative">
                <div className="relative w-full max-w-[440px] flex items-center justify-center">
                  
                  {/* Ambient Soft Blue Radial Glow directly behind the graphic */}
                  <div
                    className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-full bg-radial from-[#bfdbfe]/50 via-[#dbeafe]/25 to-transparent blur-2xl -z-10 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* High Quality Illustration with Subtle Floating Animation */}
                  <img
                    src={contactIllustrationImg}
                    alt="Innomatrics Technologies Digital Communication & Collaboration"
                    className="animate-contact-float w-full h-auto object-contain max-h-[300px] sm:max-h-[340px] drop-shadow-md select-none pointer-events-none transition-transform duration-700"
                    loading="eager"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* ====================================================================
              BOTTOM CONTACT DETAILS ROW
              - Thin horizontal divider
              - Clean single-row layout with vertical separators
              - Direct email, phone, and global location with Lucide icons
              ==================================================================== */}
          <div className="relative z-10 border-t border-[#e2e8f0]/90 px-6 sm:px-10 lg:px-12 py-5 bg-[#fafcff]/80">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-6 text-sm">
              
              {/* Email item */}
              <a
                href="mailto:hello@innomatricstech.com"
                className="group flex items-center gap-2.5 text-on-surface-variant hover:text-primary-container transition-colors duration-200 cursor-pointer shrink-0"
              >
                <Mail className="w-4 h-4 text-primary-container shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-semibold text-on-surface group-hover:text-primary-container transition-colors whitespace-nowrap">
                  hello@innomatricstech.com
                </span>
              </a>

              {/* Divider (Desktop) */}
              <span className="hidden lg:block w-px h-4 bg-[#cbd5e1]/70 shrink-0" aria-hidden="true" />

              {/* Phone item (guaranteed single line with whitespace-nowrap) */}
              <a
                href="tel:+918431655799"
                className="group flex items-center gap-2.5 text-on-surface-variant hover:text-primary-container transition-colors duration-200 cursor-pointer shrink-0"
              >
                <Phone className="w-4 h-4 text-primary-container shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-semibold text-on-surface group-hover:text-primary-container transition-colors whitespace-nowrap">
                  +91 84316 55799
                </span>
              </a>

              {/* Divider (Desktop) */}
              <span className="hidden lg:block w-px h-4 bg-[#cbd5e1]/70 shrink-0" aria-hidden="true" />

              {/* Location item (formatted in 4 clean stacked lines per reference) */}
              <div className="flex items-start gap-2.5 text-on-surface-variant min-w-0">
                <MapPin className="w-4 h-4 text-primary-container shrink-0 mt-0.5" />
                <div className="font-semibold text-xs sm:text-sm text-on-surface leading-relaxed flex flex-col">
                  <span>2nd Floor, Akshay Complex,</span>
                  <span>No. 01, 16th Main Rd,</span>
                  <span>BTM 2nd Stage,</span>
                  <span>Bengaluru - 560076, India</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Engineering Call Scheduling Modal (Preserved Functionality) */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-2xl border border-surface-container relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-on-surface-variant hover:text-on-surface p-1 rounded-lg cursor-pointer"
            >
              ✕
            </button>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
              Schedule Architecture Call
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Connect with our principal software architects for an engineering consultation.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-primary-fixed/30 text-center text-primary font-semibold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Thank you! We have received your request and will reach out shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-11 px-3 rounded-lg bg-surface-container-low border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary-container text-body-md text-on-surface"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                    Work Email
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-3 rounded-lg bg-surface-container-low border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary-container text-body-md text-on-surface"
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-11 px-3 rounded-lg bg-surface-container-low border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary-container text-body-md text-on-surface"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                    Project Scope
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full h-11 px-3 rounded-lg bg-surface-container-low border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary-container text-body-md text-on-surface"
                  >
                    <option>Web Application / E-Commerce</option>
                    <option>iOS / Android Mobile App</option>
                    <option>Cloud SaaS Architecture</option>
                    <option>Other / Bespoke R&amp;D</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                    Brief Overview
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-lg bg-surface-container-low border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary-container text-body-md text-on-surface"
                    placeholder="Tell us about your timeline, targets, and existing stack..."
                  />
                </div>
                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors cursor-pointer"
                  >
                    Request Call
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
