export type AppStatus = 'Planned' | 'In Progress' | 'Released';

export interface App {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  status: AppStatus;
  targetDate: string;
  releasedDate?: string;
  tech: string[];
  links: {
    testflight?: string;
    appstore?: string;
    github?: string;
  };
  features: string[];
  roadmap: RoadmapItem[];
  changelog: ChangelogEntry[];
  heroImage?: string;
  problem: string;
  solution: string[];
  locked?: boolean;
}

export interface RoadmapItem {
  label: string;
  done: boolean;
}

export interface ChangelogEntry {
  date: string;
  version: string;
  notes: string[];
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  tags: string[];
  summary: string;
  content: string;
  coverImage?: string;
}

export interface TimelineMonth {
  month: string;
  appCount: number;
  year: number;
}
