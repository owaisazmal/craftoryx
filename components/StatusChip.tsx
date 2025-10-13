import { AppStatus } from '@/types';

interface StatusChipProps {
  status: AppStatus;
  className?: string;
}

export default function StatusChip({ status, className = '' }: StatusChipProps) {
  const statusStyles = {
    'Planned': 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    'In Progress': 'bg-blue-200 text-blue-900 dark:bg-blue-900 dark:text-blue-200',
    'Released': 'bg-green-200 text-green-900 dark:bg-green-900 dark:text-green-200',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]} ${className}`}
      role="status"
      aria-label={`Status: ${status}`}
    >
      {status}
    </span>
  );
}
