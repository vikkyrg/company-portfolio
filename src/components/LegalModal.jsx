import React, { useEffect } from 'react';
import { X, ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

export default function LegalModal({ type, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!type) return null;

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          badge: 'LEGAL & PRIVACY',
          title: 'Privacy Policy',
          lastUpdated: 'November 2026',
          icon: Lock,
          sections: [
            {
              heading: '1. Information We Collect',
              text: 'Innomatrics Technologies LLC collects information that you provide directly to us when requesting an architecture consultation, contacting our team, or collaborating on engineering deliverables. This includes your name, company email address, organization name, and technical project scope specifications.'
            },
            {
              heading: '2. How We Use Information',
              text: 'We use the collected information solely to assess technical feasibility, deliver bespoke engineering and digital product design services, execute contractual commitments, and provide ongoing infrastructure support. We do not sell, rent, or monetize your personal or corporate data to third parties.'
            },
            {
              heading: '3. Data Protection & Confidentiality',
              text: 'All proprietary code, project briefs, and technical designs are treated under strict non-disclosure obligations. We employ industry-standard AES-256 encryption at rest and TLS 1.3 in transit across all internal systems and client collaboration repositories.'
            },
            {
              heading: '4. Third-Party Infrastructure',
              text: 'Our web applications and cloud deployments utilize certified enterprise cloud providers (including AWS, Vercel, and Cloudflare) compliant with SOC 2 Type II and ISO 27001 data protection standards.'
            },
            {
              heading: '5. Your Rights & Contact',
              text: 'You may request verification, correction, or permanent deletion of any personal data stored in our systems by contacting our compliance officer at legal@innomatrics.com.'
            }
          ]
        };
      case 'terms':
        return {
          badge: 'TERMS OF ENGAGEMENT',
          title: 'Terms of Service',
          lastUpdated: 'November 2026',
          icon: FileText,
          sections: [
            {
              heading: '1. Master Services Agreement',
              text: 'All custom software development, mobile application development, UI/UX architecture, and advisory services provided by Innomatrics Technologies LLC are governed by mutually executed Statements of Work (SOW) and Master Services Agreements.'
            },
            {
              heading: '2. Intellectual Property Rights',
              text: 'Upon receipt of final milestone payments, full ownership of custom source code, design tokens, prototypes, and bespoke digital assets transfers entirely to the client, with perpetual rights granted as stipulated in our engagement contracts.'
            },
            {
              heading: '3. Engineering Standards & Code Delivery',
              text: 'Our engineering adheres to modern industry practices, including automated linting, test suites, and peer code reviews. We guarantee a standard 30-day post-launch warranty period for resolving any reproducible defects identified within the agreed project specifications.'
            },
            {
              heading: '4. Limitation of Liability',
              text: 'Innomatrics Technologies LLC shall not be held liable for indirect, incidental, or consequential damages resulting from third-party cloud infrastructure downtime, unvetted external API disruptions, or client-managed deployments.'
            },
            {
              heading: '5. Governing Law',
              text: 'These terms are governed and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.'
            }
          ]
        };
      case 'security':
      default:
        return {
          badge: 'INFRASTRUCTURE & COMPLIANCE',
          title: 'Security Architecture',
          lastUpdated: 'November 2026',
          icon: ShieldCheck,
          sections: [
            {
              heading: '1. Zero-Trust Cloud Architecture',
              text: 'We apply strict zero-trust security postures across every layer of product development. Identity management mandates hardware multi-factor authentication (WebAuthn/FIDO2) and granular role-based access control (RBAC).'
            },
            {
              heading: '2. Cryptographic Protocols & Storage',
              text: 'All databases, user credentials, and API secrets are protected using cryptographic hashing (Argon2id) and AES-256-GCM encryption. Sensitive environment keys are managed exclusively via hardware key vaults.'
            },
            {
              heading: '3. CI/CD Pipeline & Automated Audits',
              text: 'Every pull request passes through automated static application security testing (SAST), software composition analysis (SCA) for vulnerable packages, and secret-leak detection hooks before reaching production environments.'
            },
            {
              heading: '4. Regulatory Standards & Compliance',
              text: 'Our systems and cloud deployments are structured to satisfy the rigorous criteria of SOC 2 Type II, ISO/IEC 27001, HIPAA (for healthcare platforms), and GDPR/CCPA privacy standards.'
            },
            {
              heading: '5. Responsible Disclosure Program',
              text: 'We welcome reports from independent security researchers. Vulnerability disclosures should be submitted directly to security@innomatrics.com with cryptographic proof-of-concept logs.'
            }
          ]
        };
    }
  };

  const data = getContent();
  const IconComponent = data.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-slate-950/65 backdrop-blur-md animate-fade-in select-none"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[820px] max-h-[85vh] flex flex-col bg-white rounded-[24px] shadow-2xl border border-slate-200/90 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 px-6 sm:px-8 py-4 bg-white/95 backdrop-blur-md border-b border-slate-200/80 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-primary shrink-0">
              <IconComponent className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary">
                {data.badge}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-tight">
                {data.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden sm:inline-block font-mono text-[11px] text-slate-400">
              Updated {data.lastUpdated}
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto px-6 sm:px-8 py-6 sm:py-8 space-y-6 custom-scrollbar text-left">
          {data.sections.map((section, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>{section.heading}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-20 px-6 sm:px-8 py-3.5 bg-slate-50/95 backdrop-blur-md border-t border-slate-200/80 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-500">
            Innomatrics Technologies LLC · Official Legal Archive
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200 shadow-2xs transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
