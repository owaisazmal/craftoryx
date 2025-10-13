'use client';

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

export default function ProgressBar({ current, total, className = '' }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Apps shipped
        </span>
        <span className="text-sm font-bold text-gray-900 dark:text-white font-mono">
          {current}/{total}
        </span>
      </div>
      <div
        className="relative w-full h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={`${current} out of ${total} apps shipped`}
      >
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
        {/* Milestone ticks */}
        <div className="absolute inset-0 flex justify-between px-[10%]">
          {Array.from({ length: total - 1 }).map((_, i) => (
            <div
              key={i}
              className="w-0.5 h-full bg-white/30"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
