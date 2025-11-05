import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { getPostBySlug, posts } from '@/data/posts';
import type { Metadata } from 'next';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: `${post.title} | CraftoryX Dev Log`,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-12 bg-white dark:bg-[#0d1117] min-h-screen">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/dev-log"
          className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
        >
          ← Back to Dev Log
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-6 leading-tight pb-3 border-b border-gray-200 dark:border-gray-800">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="markdown-content prose prose-slate max-w-none dark:prose-invert 
          prose-headings:font-semibold prose-headings:text-gray-900 dark:prose-headings:text-gray-100
          prose-h1:text-2xl prose-h1:text-[1.5rem] prose-h1:mb-4 prose-h1:mt-8 prose-h1:pb-3 prose-h1:border-b prose-h1:border-gray-200 dark:prose-h1:border-gray-800 prose-h1:font-semibold prose-h1:leading-tight
          prose-h2:text-xl prose-h2:text-[1.25rem] prose-h2:mb-3 prose-h2:mt-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-800 prose-h2:font-semibold prose-h2:leading-tight
          prose-h3:text-lg prose-h3:text-[1.125rem] prose-h3:mb-2 prose-h3:mt-4 prose-h3:font-semibold prose-h3:leading-tight
          prose-h4:text-base prose-h4:text-[1rem] prose-h4:mb-2 prose-h4:mt-4 prose-h4:font-semibold prose-h4:leading-tight
          prose-p:text-[16px] prose-p:text-gray-700 dark:prose-p:text-[#c9d1d9] prose-p:leading-7 prose-p:mb-4 prose-p:font-normal
          prose-strong:text-gray-900 dark:prose-strong:text-[#c9d1d9] prose-strong:font-semibold
          prose-ul:text-[16px] prose-ul:text-gray-700 dark:prose-ul:text-[#c9d1d9] prose-ul:mb-4 prose-ul:pl-6 prose-ul:list-disc
          prose-ol:text-[16px] prose-ol:text-gray-700 dark:prose-ol:text-[#c9d1d9] prose-ol:mb-4 prose-ol:pl-6 prose-ol:list-decimal
          prose-li:text-[16px] prose-li:text-gray-700 dark:prose-li:text-[#c9d1d9] prose-li:my-1 prose-li:leading-7
          prose-a:text-blue-600 dark:prose-a:text-[#58a6ff] prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 dark:prose-blockquote:text-[#8b949e]
          prose-code:text-blue-600 dark:prose-code:text-[#c9d1d9] prose-code:bg-gray-100 dark:prose-code:bg-[#161b22] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[85%] prose-code:font-mono prose-code:font-normal
          prose-pre:bg-gray-900 dark:prose-pre:bg-[#161b22] prose-pre:border prose-pre:border-gray-800 dark:prose-pre:border-[#30363d] prose-pre:rounded-lg prose-pre:overflow-x-auto
          prose-hr:border-gray-200 dark:prose-hr:border-[#21262d]
          prose-table:w-full prose-table:border-collapse prose-table:my-4
          prose-th:border prose-th:border-gray-300 dark:prose-th:border-[#30363d] prose-th:px-4 prose-th:py-2 prose-th:bg-gray-50 dark:prose-th:bg-[#161b22] prose-th:text-left prose-th:font-semibold
          prose-td:border prose-td:border-gray-300 dark:prose-td:border-[#30363d] prose-td:px-4 prose-td:py-2
          bg-white dark:bg-[#0d1117] rounded-lg p-8 md:p-10 lg:p-12 border border-gray-200 dark:border-gray-800
          [&>h1]:text-2xl [&>h1]:font-semibold [&>h1]:mb-4 [&>h1]:mt-8 [&>h1]:pb-3 [&>h1]:border-b [&>h1]:border-gray-200 dark:[&>h1]:border-gray-800
          [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mb-3 [&>h2]:mt-6 [&>h2]:pb-2 [&>h2]:border-b [&>h2]:border-gray-200 dark:[&>h2]:border-gray-800
          [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:mb-2 [&>h3]:mt-4
          [&>h4]:text-base [&>h4]:font-semibold [&>h4]:mb-2 [&>h4]:mt-4
          [&>p]:text-base [&>p]:leading-7 [&>p]:mb-4 [&>p]:text-gray-700 dark:[&>p]:text-[#c9d1d9]
          [&>ul]:text-base [&>ul]:mb-4 [&>ul]:pl-6 [&>ul]:text-gray-700 dark:[&>ul]:text-[#c9d1d9]
          [&>ol]:text-base [&>ol]:mb-4 [&>ol]:pl-6 [&>ol]:text-gray-700 dark:[&>ol]:text-[#c9d1d9]
          [&>li]:text-base [&>li]:leading-7 [&>li]:my-1 [&>li]:text-gray-700 dark:[&>li]:text-[#c9d1d9]">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <div className="not-prose">
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-lg !mt-4 !mb-4"
                      customStyle={{
                        margin: 0,
                        borderRadius: '0.5rem',
                      }}
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <code className="bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-3 font-medium">
                Enjoyed this post? Follow along for more updates.
              </p>
              <div className="flex gap-4 justify-center sm:justify-start">
                <a
                  href="https://github.com/owaisazmal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
                <Link
                  href="/dev-log/rss.xml"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"/>
                  </svg>
                  RSS
                </Link>
              </div>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
