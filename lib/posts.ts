import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/types';

const postsDirectory = path.join(process.cwd(), 'content/dev-log');

export function getAllPosts(): Post[] {
  // Get all markdown files in the posts directory
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      // Remove .md extension from filename to get slug
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        id: data.id || slug,
        title: data.title,
        slug: data.slug || slug,
        date: data.date,
        tags: data.tags || [],
        summary: data.summary,
        content: content,
        coverImage: data.coverImage,
      } as Post;
    });

  // Sort posts by date in descending order (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): Post | undefined {
  const allPosts = getAllPosts();
  return allPosts.find((post) => post.slug === slug);
}

export function getRecentPosts(count: number = 3): Post[] {
  const allPosts = getAllPosts();
  return allPosts.slice(0, count);
}

