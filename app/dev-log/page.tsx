import { posts } from '@/data/posts';
import PostCard from '@/components/PostCard';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dev Log - Weekly Build Updates',
  description: 'Weekly development logs, technical deep dives, and lessons learned from building 10 iOS apps in 12 months.',
};

export default function DevLogPage() {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
            Dev Log
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Weekly development logs, technical deep dives, and lessons learned.
          </p>
          <Link
            href="/dev-log/rss.xml"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"/>
            </svg>
            Subscribe via RSS
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="space-y-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No posts yet. Check back soon for weekly updates!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
