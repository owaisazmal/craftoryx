import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/types';

const postsDirectory = path.join(process.cwd(), 'content/dev-log');

export function getAllPosts(): Post[] {
  try {
    // Get all markdown files in the posts directory
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter((name) => name.endsWith('.md') && name.toLowerCase() !== 'readme.md')
      .map((fileName) => {
        try {
          // Remove .md extension from filename to get slug
          const slug = fileName.replace(/\.md$/, '');
          const fullPath = path.join(postsDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const { data, content } = matter(fileContents);

          // Skip if missing required fields
          if (!data.title || !data.date) {
            return null;
          }

          // Convert date to string format (YYYY-MM-DD)
          let dateString: string;
          if (data.date instanceof Date) {
            dateString = data.date.toISOString().split('T')[0];
          } else if (typeof data.date === 'string') {
            dateString = data.date;
          } else {
            return null;
          }

          return {
            id: data.id || slug,
            title: data.title,
            slug: data.slug || slug,
            date: dateString,
            tags: data.tags || [],
            summary: data.summary,
            content: content,
            coverImage: data.coverImage,
          } as Post;
        } catch (error) {
          console.error(`Error processing ${fileName}:`, error);
          return null;
        }
      })
      .filter((post): post is Post => post !== null);

    // Sort posts by date in descending order (newest first)
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

export function getPostBySlug(slug: string): Post | undefined {
  const allPosts = getAllPosts();
  return allPosts.find((post) => post.slug === slug);
}

export function getRecentPosts(count: number = 3): Post[] {
  const allPosts = getAllPosts();
  return allPosts.slice(0, count);
}

