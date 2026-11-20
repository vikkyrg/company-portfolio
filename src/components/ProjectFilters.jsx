import React from 'react';

export default function ProjectFilters({ filters, activeFilter, onFilterChange }) {
  return (
    <div className="inline-flex p-1 bg-surface-container-low rounded-xl gap-1" id="portfolio-filters">
      {filters.map((tab) => {
        const isActive = activeFilter === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onFilterChange(tab.id)}
            className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all cursor-pointer ${
              isActive
                ? 'bg-on-surface text-surface-container-lowest shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
