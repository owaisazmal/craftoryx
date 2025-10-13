'use client';

interface TimelineProps {
  className?: string;
}

const timelineData = [
  { month: 'Nov 2025', count: 1 },
  { month: 'Dec 2025', count: 1 },
  { month: 'Jan 2026', count: 1 },
  { month: 'Feb 2026', count: 1 },
  { month: 'Mar 2026', count: 1 },
  { month: 'Apr 2026', count: 1 },
  { month: 'May 2026', count: 1 },
  { month: 'Jun 2026', count: 1 },
  { month: 'Jul 2026', count: 1 },
  { month: 'Aug 2026', count: 1 },
];

export default function Timeline({ className = '' }: TimelineProps) {
  return (
    <div className={`w-full ${className}`}>
      <h3 className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-4">
        Release Timeline
      </h3>
      <div className="relative flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {timelineData.map((item, index) => (
          <div
            key={item.month}
            className="flex-shrink-0 flex flex-col items-center"
          >
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-lg border-2 ${
                index === 0
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50'
              }`}
              aria-label={`${item.month}: ${item.count} app release target`}
            >
              <span className="text-xl sm:text-2xl font-bold font-mono text-gray-900 dark:text-white">
                {item.count}
              </span>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400 mt-2 text-center whitespace-nowrap">
              {item.month}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
