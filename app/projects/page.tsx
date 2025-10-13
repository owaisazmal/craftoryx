'use client';

import { useState } from 'react';
import { apps } from '@/data/apps';
import { AppStatus } from '@/types';
import AppCard from '@/components/AppCard';
import type { Metadata } from 'next';

const filters: ('All' | AppStatus)[] = ['All', 'Released', 'In Progress', 'Planned'];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<'All' | AppStatus>('All');

  const filteredApps = activeFilter === 'All'
    ? apps
    : apps.filter(app => app.status === activeFilter);

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
            All Projects
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            10 iOS apps, built with Swift, shipping throughout 2025-2026.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-3 mb-8" role="tablist" aria-label="Filter projects by status">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400'
              }`}
              role="tab"
              aria-selected={activeFilter === filter}
              aria-controls="projects-grid"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Apps Grid */}
        <div
          id="projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="tabpanel"
        >
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {filteredApps.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No apps found for this filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
