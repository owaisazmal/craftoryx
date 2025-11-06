import Link from 'next/link';
import { App } from '@/types';
import StatusChip from './StatusChip';

interface AppCardProps {
  app: App;
}

export default function AppCard({ app }: AppCardProps) {
  return (
    <article className="cursor-target group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-lg transition-all">
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
        <Link
          href={`/projects/${app.slug}`}
          className="cursor-target text-blue-600 dark:text-blue-400 hover:underline font-medium"
          aria-label={`View details for ${app.name}`}
        >
          View Details →
        </Link>
      </div>
    </article>
  );
}
