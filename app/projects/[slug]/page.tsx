import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAppBySlug, apps } from '@/data/apps';
import StatusChip from '@/components/StatusChip';
import type { Metadata } from 'next';

interface AppDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return apps.map((app) => ({
    slug: app.slug,
  }));
}

export async function generateMetadata({ params }: AppDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    return {
      title: 'App Not Found',
    };
  }

  return {
    title: `${app.name} - ${app.shortDescription}`,
    description: app.description,
    openGraph: {
      title: `${app.name} | CraftoryX`,
      description: app.shortDescription,
      type: 'website',
    },
  };
}

export default async function AppDetailPage({ params }: AppDetailPageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Projects
          </Link>
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white font-mono">
              {app.name}
            </h1>
            <StatusChip status={app.status} />
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
            {app.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>
              Target: {new Date(app.targetDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
            {app.releasedDate && (
              <span>
                Released: {new Date(app.releasedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>
            )}
          </div>
        </div>

        {/* Hero Mockup Placeholder */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl h-96 flex items-center justify-center mb-12 text-white text-center p-8">
          <div>
            <div className="text-6xl mb-4">📱</div>
            <p className="text-lg font-medium">App Screenshot Placeholder</p>
            <p className="text-sm opacity-80">iPhone frame mockup will go here</p>
          </div>
        </div>

        {/* Problem & Solution */}
        <section className="bg-white dark:bg-gray-900 rounded-lg p-8 mb-8 border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
            Problem → Solution
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              The Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{app.problem}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              The Solution
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {app.solution.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Features */}
        <section className="bg-white dark:bg-gray-900 rounded-lg p-8 mb-8 border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
            Key Features
          </h2>
          <ul className="space-y-3">
            {app.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="bg-white dark:bg-gray-900 rounded-lg p-8 mb-8 border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {app.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="bg-white dark:bg-gray-900 rounded-lg p-8 mb-8 border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
            Roadmap
          </h2>
          <ul className="space-y-4">
            {app.roadmap.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={item.done}
                  readOnly
                  className="mt-1 w-5 h-5 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
                  aria-label={`${item.label} - ${item.done ? 'completed' : 'pending'}`}
                />
                <span
                  className={`${
                    item.done
                      ? 'text-gray-500 dark:text-gray-500 line-through'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Changelog */}
        {app.changelog.length > 0 && (
          <section className="bg-white dark:bg-gray-900 rounded-lg p-8 mb-8 border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
              Changelog
            </h2>
            <div className="space-y-6">
              {app.changelog.map((entry, index) => (
                <div key={index} className="border-l-2 border-blue-600 pl-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-bold text-gray-900 dark:text-white font-mono">
                      {entry.version}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(entry.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    {entry.notes.map((note, noteIndex) => (
                      <li key={noteIndex}>{note}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-blue-600 dark:bg-blue-700 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4 font-mono">
            Want to try {app.name}?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {app.links.testflight && (
              <a
                href={app.links.testflight}
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Join TestFlight
              </a>
            )}
            {app.links.appstore && (
              <a
                href={app.links.appstore}
                className="px-8 py-3 bg-blue-700 dark:bg-blue-800 text-white border border-blue-500 rounded-lg font-medium hover:bg-blue-800 dark:hover:bg-blue-900 transition-colors"
              >
                View on App Store
              </a>
            )}
            {!app.links.testflight && !app.links.appstore && (
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get Notified
              </Link>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
