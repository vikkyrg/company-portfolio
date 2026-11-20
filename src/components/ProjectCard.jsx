import React from 'react';

export default function ProjectCard({ project, onSelect, index = 0 }) {
  const renderMockup = () => {
    switch (project.mockupType) {
      case 'browser-image':
        return (
          <div className="w-full bg-surface-container-low rounded-xl overflow-hidden shadow-sm mb-space-lg flex flex-col">
            <div className="h-9 bg-surface-container-low px-4 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/40"></span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant/80">{project.url}</span>
              <span className="material-symbols-outlined text-[14px] text-outline">lock</span>
            </div>
            <div className="relative h-64 bg-surface-container-lowest overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={project.imageAlt}
                src={project.image}
              />
              <div className="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm">
                <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                  {project.badgeText}
                </span>
              </div>
            </div>
          </div>
        );

      case 'mobile-finflow':
        return (
          <div className="w-full bg-surface-container-low rounded-xl p-6 shadow-sm mb-space-lg flex justify-center items-center">
            <div className="w-64 bg-on-surface rounded-[2rem] p-3 shadow-lg flex flex-col">
              <div className="w-20 h-4 bg-on-surface-variant/40 rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Current Balance</span>
                  <span className="font-label-sm text-label-sm text-primary font-bold">USD</span>
                </div>
                <div className="font-headline-md text-headline-md font-bold text-on-surface leading-none">
                  {project.balance}
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="bg-primary text-on-primary text-center py-1.5 rounded-md font-label-sm text-label-sm font-semibold">
                    Send
                  </div>
                  <div className="bg-surface-container-high text-on-surface text-center py-1.5 rounded-md font-label-sm text-label-sm font-semibold">
                    Deposit
                  </div>
                </div>
                <div className="pt-2">
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold block mb-1">
                    Recent Activity
                  </span>
                  <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                    <span className="font-body-sm text-body-sm font-medium text-on-surface">Stripe Payout</span>
                    <span className="font-body-sm text-body-sm font-bold text-primary">+$3,400</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'mobile-carepulse':
        return (
          <div className="w-full bg-surface-container-low rounded-xl p-6 shadow-sm mb-space-lg flex justify-center items-center">
            <div className="w-64 bg-on-surface rounded-[2rem] p-3 shadow-lg flex flex-col">
              <div className="w-20 h-4 bg-on-surface-variant/40 rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Today's Schedule</span>
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                </div>
                <div className="p-3 bg-surface-container-low rounded-lg">
                  <span className="font-label-sm text-label-sm text-primary font-bold">14:00 PM · HD Video</span>
                  <span className="font-headline-sm text-headline-sm font-semibold text-on-surface block mt-1">
                    {project.doctor}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{project.specialty}</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-surface-container-highest/60 text-label-sm">
                  <span className="text-on-surface-variant font-semibold">Avg Heart Rate</span>
                  <span className="text-primary font-bold">{project.bpm}</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'saas-kanban':
        return (
          <div className="w-full bg-surface-container-low rounded-xl overflow-hidden shadow-sm mb-space-lg flex flex-col">
            <div className="h-9 bg-surface-container-low px-4 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/40"></span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant/80">{project.url}</span>
              <span className="material-symbols-outlined text-[14px] text-outline">tune</span>
            </div>
            <div className="h-64 p-4 bg-surface-container-lowest grid grid-cols-2 gap-3 overflow-hidden">
              <div className="bg-surface-container-low p-3 rounded-lg flex flex-col gap-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-label-sm text-label-sm font-bold text-on-surface">In Progress</span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm font-semibold">
                    3
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-2.5 rounded shadow-sm">
                  <span className="font-body-sm text-body-sm font-semibold text-on-surface block leading-snug">
                    Refactor Redis connection pool
                  </span>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-label-sm text-label-sm text-primary font-bold">INFRA-204</span>
                    <span className="w-4 h-4 rounded-full bg-primary-container text-on-primary text-[8px] flex items-center justify-center font-bold">
                      JD
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-2.5 rounded shadow-sm">
                  <span className="font-body-sm text-body-sm font-semibold text-on-surface block leading-snug">
                    Implement Webhook retries
                  </span>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">API-91</span>
                    <span className="w-4 h-4 rounded-full bg-secondary-container text-on-primary text-[8px] flex items-center justify-center font-bold">
                      AL
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-low p-3 rounded-lg flex flex-col gap-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-label-sm text-label-sm font-bold text-on-surface">Done</span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm font-semibold">
                    12
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-2.5 rounded shadow-sm opacity-80">
                  <span className="font-body-sm text-body-sm font-semibold text-on-surface block leading-snug">
                    Setup multi-region replication
                  </span>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">SYS-102</span>
                    <span className="w-4 h-4 rounded-full bg-on-surface text-surface-container-lowest text-[8px] flex items-center justify-center font-bold">
                      ✓
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'saas-analytics':
        return (
          <div className="w-full bg-surface-container-low rounded-xl overflow-hidden shadow-sm mb-space-lg flex flex-col">
            <div className="h-9 bg-surface-container-low px-4 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/40"></span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant/80">{project.url}</span>
              <span className="material-symbols-outlined text-[14px] text-outline">tune</span>
            </div>
            <div className="h-64 p-5 bg-surface-container-lowest flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Annualized ARR
                  </span>
                  <span className="font-label-sm text-label-sm text-primary font-bold">{project.growth}</span>
                </div>
                <div className="font-headline-md text-headline-md font-bold text-on-surface">{project.arr}</div>
              </div>
              <div className="pt-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant block mb-2">
                  Ingestion Throughput (req/sec)
                </span>
                <div className="flex items-end gap-2 h-20 bg-surface-container-low p-2 rounded-lg">
                  <div className="w-full bg-primary-fixed rounded-t" style={{ height: '35%' }}></div>
                  <div className="w-full bg-primary-fixed rounded-t" style={{ height: '55%' }}></div>
                  <div className="w-full bg-primary-fixed rounded-t" style={{ height: '45%' }}></div>
                  <div className="w-full bg-primary-fixed rounded-t" style={{ height: '75%' }}></div>
                  <div className="w-full bg-primary-fixed rounded-t" style={{ height: '60%' }}></div>
                  <div className="w-full bg-primary-fixed rounded-t" style={{ height: '90%' }}></div>
                  <div className="w-full bg-primary-container rounded-t" style={{ height: '100%' }}></div>
                </div>
              </div>
              <div className="flex justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
                <span>Net Retention: 124%</span>
                <span className="text-on-surface font-semibold">9.4M Data Points/hr</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Calculate subtle stagger delay for project cards
  const cardDelay = `${0.35 + index * 0.12}s`;

  return (
    <article
      className="animate-work-card group flex flex-col bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-space-lg"
      data-category={project.category}
      style={{ animationDelay: cardDelay }}
    >
      {renderMockup()}

      {/* Metadata & Details */}
      <div className="flex items-center gap-2 mb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
          {project.type}
        </span>
      </div>

      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
        {project.title}
      </h3>

      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
        {project.description}
      </p>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mb-space-lg">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 rounded-md bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Link */}
      <div className="mt-auto pt-space-sm flex items-center">
        <button
          type="button"
          onClick={() => onSelect && onSelect(project)}
          className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary font-semibold hover:text-secondary group-hover:translate-x-1 transition-all cursor-pointer"
        >
          View Project Details{' '}
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </article>
  );
}
