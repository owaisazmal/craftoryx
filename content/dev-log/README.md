# Dev Log Posts

This directory contains all dev log posts in Markdown format.

## Adding a New Post

1. Create a new `.md` file in this directory
2. Use the following frontmatter format:

```markdown
---
id: unique-id
title: Your Post Title
slug: your-post-slug
date: YYYY-MM-DD
tags:
  - tag1
  - tag2
summary: "A brief summary of the post (used in listings and meta descriptions)"
---

# Your Post Title

Your content here in Markdown format...
```

## Example

```markdown
---
id: p4
title: My First Week Building FocusFlow
slug: focusflow-week-1
date: 2025-09-08
tags:
  - focusflow
  - swiftui
  - week-1
summary: "First week of development on FocusFlow. Got the basic timer working!"
---

# My First Week Building FocusFlow

This week I started building FocusFlow...

## What I Built

- Timer functionality
- Basic UI
```

## Notes

- The `slug` should be URL-friendly (lowercase, hyphens instead of spaces)
- The `date` should be in `YYYY-MM-DD` format
- Always quote the `summary` field (use double quotes) to avoid YAML parsing errors, especially if it contains colons or other special characters
- You can use full Markdown syntax including:
  - Headings (# ## ###)
  - Lists (- or 1.)
  - Code blocks (```language)
  - Links, images, etc.
- Code blocks with language specified will automatically get syntax highlighting

## Tips

- Use descriptive slugs that match the title
- Keep summaries concise (1-2 sentences)
- Use tags to categorize your posts
- Posts are automatically sorted by date (newest first)

