// This file is kept for backward compatibility
// New posts should be added as markdown files in content/dev-log/
// See lib/posts.ts for the new markdown-based loader

import { getAllPosts, getPostBySlug as getPostBySlugFromFiles, getRecentPosts as getRecentPostsFromFiles } from '@/lib/posts';

export const posts = getAllPosts();
export const getPostBySlug = getPostBySlugFromFiles;
export const getRecentPosts = getRecentPostsFromFiles;
