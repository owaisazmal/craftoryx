import Link from 'next/link';
import { App } from '@/types';
import StatusChip from './StatusChip';

interface AppCardProps {
  app: App;
}

export default function AppCard({ app }: AppCardProps) {
  const isLocked = app.locked ?? false;

  const CardContent = (
    <>
      {/* Locked Overlay */}
      {isLocked && (
        <div className="absolute inset-0 backdrop-blur-[2px] bg-gray-100/50 dark:bg-gray-800/50 rounded-lg flex items-center justify-center z-10">
          <div className="bg-white dark:bg-gray-900 px-6 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 shadow-lg">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-semibold text-gray-700 dark:text-gray-300 font-mono">Coming Soon</span>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white font-mono">
          {app.name}
        </h3>
        <StatusChip status={app.status} />
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
        {app.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {app.tech.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500 dark:text-gray-400">
          Target: {new Date(app.targetDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
        </span>
        {!isLocked && (
          <span className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Click to learn more
            </span>
            <svg
              className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:animate-click transition-opacity duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
          </span>
        )}
      </div>
    </>
  );

  if (isLocked) {
    return (
      <article className="cursor-target group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 transition-all opacity-60 pointer-events-none">
        {CardContent}
      </article>
    );
  }

  return (
    <Link href={`/projects/${app.slug}`} className="block">
      <article className="cursor-target group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 transition-all hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-lg cursor-pointer">
        {CardContent}
      </article>
    </Link>
  );
}
