import Link from 'next/link';
import { Post } from '@/types';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-lg transition-all">
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-mono group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        <Link href={`/dev-log/${post.slug}`}>
          {post.title}
        </Link>
      </h3>

      <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
        {post.summary}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
          >
            #{tag}
          </span>
        ))}
      </div>

      <Link
        href={`/dev-log/${post.slug}`}
        className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
        aria-label={`Read ${post.title}`}
      >
        Read more →
      </Link>
    </article>
  );
}
