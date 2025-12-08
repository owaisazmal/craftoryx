import { App } from '@/types';

export const apps: App[] = [
  {
    id: 'a0',
    name: 'SocioBlock',
    slug: 'socioblock',
    shortDescription: 'Screen time management through gamification and social accountability',
    description: 'A SwiftUI-based iOS application designed to help users manage and reduce their screen time through gamification, social accountability, and detailed analytics.',
    status: 'In Progress',
    targetDate: '2025-10',
    tech: ['SwiftUI', 'Swift Charts', 'HealthKit', 'UserNotifications'],
    links: {
      testflight: '#',
    },
    features: [
      'Real-time screen time tracking',
      'Streak-based gamification',
      'Social leaderboards (Friends & Global)',
      'Detailed analytics with charts',
      'Accountability partner alerts',
      'Badge achievement system'
    ],
    roadmap: [
      { label: 'MVP - Dashboard & tracking UI', done: true },
      { label: 'Beta - Streak system & badges', done: true },
      { label: 'v1.0 - Screen Time API integration', done: false },
      { label: 'v1.1 - Social features & backend', done: false }
    ],
    changelog: [
      {
        date: '2025-10-15',
        version: '0.2.0',
        notes: [
          'Added streak tracking with visual progress',
          'Implemented badge achievement system',
          'Created social leaderboards UI',
          'Added accountability partner alerts'
        ]
      },
      {
        date: '2025-10-01',
        version: '0.1.0',
        notes: [
          'Initial prototype with dashboard',
          'Basic analytics charts',
          'Dark theme implementation',
          'Custom navigation system'
        ]
      }
    ],
    problem: 'People struggle with excessive screen time but lack motivation to change habits. Traditional screen time apps are boring and lack social accountability.',
    solution: [
      'Gamified experience with streaks and badges',
      'Social competition through leaderboards',
      'Accountability partners for motivation',
      'Beautiful analytics for awareness'
    ],
    locked: false
  },
  {
    id: 'a1',
    name: 'FocusFlow',
    slug: 'focusflow',
    shortDescription: 'Pomodoro timer with ambient soundscapes and productivity analytics',
    description: 'A beautifully designed Pomodoro timer that helps you stay focused with ambient soundscapes and tracks your productivity over time.',
    status: 'In Progress',
    targetDate: '2025-11',
    tech: ['SwiftUI', 'Combine', 'CoreData', 'WidgetKit'],
    links: {
      testflight: '#',
    },
    features: [
      'Customizable Pomodoro intervals',
      'Ambient soundscapes (rain, cafe, forest)',
      'Productivity analytics and insights',
      'Home screen widgets',
      'Dark mode support'
    ],
    roadmap: [
      { label: 'MVP - Core timer functionality', done: true },
      { label: 'Beta - Add soundscapes', done: true },
      { label: 'v1.0 - Analytics dashboard', done: false },
      { label: 'v1.1 - Widget support', done: false }
    ],
    changelog: [
      {
        date: '2025-10-05',
        version: '0.2.0',
        notes: [
          'Added 5 ambient soundscapes',
          'Improved timer accuracy',
          'Fixed background audio issues'
        ]
      },
      {
        date: '2025-09-20',
        version: '0.1.0',
        notes: [
          'Initial beta release',
          'Basic Pomodoro timer',
          'Simple UI with dark mode'
        ]
      }
    ],
    problem: 'Traditional Pomodoro apps are cluttered and lack the ambient environment that helps many people focus.',
    solution: [
      'Clean, distraction-free interface',
      'High-quality ambient soundscapes',
      'Data-driven productivity insights'
    ],
    locked: true
  },
  {
    id: 'a2',
    name: 'BudgetWise',
    slug: 'budgetwise',
    shortDescription: 'Smart expense tracker with AI-powered categorization and insights',
    description: 'Track your expenses effortlessly with AI-powered categorization and get personalized financial insights.',
    status: 'Planned',
    targetDate: '2025-12',
    tech: ['SwiftUI', 'CoreML', 'CloudKit', 'Charts'],
    links: {},
    features: [
      'AI expense categorization',
      'Budget goals and alerts',
      'Interactive spending charts',
      'Recurring expense tracking',
      'iCloud sync across devices'
    ],
    roadmap: [
      { label: 'MVP - Basic expense logging', done: false },
      { label: 'Beta - AI categorization', done: false },
      { label: 'v1.0 - Budget tracking', done: false },
      { label: 'v1.1 - CloudKit sync', done: false }
    ],
    changelog: [],
    problem: 'Manual expense tracking is tedious and most apps require too much input from users.',
    solution: [
      'One-tap expense logging',
      'Automatic categorization with CoreML',
      'Smart insights without manual setup'
    ],
    locked: true
  },
  {
    id: 'a3',
    name: 'HabitStack',
    slug: 'habitstack',
    shortDescription: 'Build lasting habits with streak tracking and motivational reminders',
    description: 'Build and maintain positive habits with visual streak tracking, smart reminders, and motivational quotes.',
    status: 'Planned',
    targetDate: '2026-01',
    tech: ['SwiftUI', 'UserNotifications', 'CoreData', 'HealthKit'],
    links: {},
    features: [
      'Visual habit streak calendar',
      'Smart reminder scheduling',
      'Daily motivational quotes',
      'HealthKit integration',
      'Habit templates library'
    ],
    roadmap: [
      { label: 'MVP - Habit tracking', done: false },
      { label: 'Beta - Reminders system', done: false },
      { label: 'v1.0 - HealthKit integration', done: false },
      { label: 'v1.1 - Social features', done: false }
    ],
    changelog: [],
    problem: 'Building new habits is hard, and most apps focus on tracking rather than motivation.',
    solution: [
      'Visual progress that motivates',
      'Smart reminders at optimal times',
      'Integrated with health data'
    ],
    locked: true
  },
  {
    id: 'a4',
    name: 'QuickNote AI',
    slug: 'quicknote-ai',
    shortDescription: 'Voice-to-text notes with AI summaries and smart organization',
    description: 'Capture thoughts instantly with voice-to-text, get AI-powered summaries, and automatic smart organization.',
    status: 'Planned',
    targetDate: '2026-02',
    tech: ['SwiftUI', 'Speech', 'NaturalLanguage', 'CoreML'],
    links: {},
    features: [
      'Voice-to-text transcription',
      'AI-powered note summaries',
      'Smart tag suggestions',
      'Quick capture widget',
      'Markdown support'
    ],
    roadmap: [
      { label: 'MVP - Basic note taking', done: false },
      { label: 'Beta - Voice input', done: false },
      { label: 'v1.0 - AI summaries', done: false },
      { label: 'v1.1 - Advanced search', done: false }
    ],
    changelog: [],
    problem: 'Note-taking apps are either too simple or too complex, and organizing notes takes too much effort.',
    solution: [
      'Instant voice capture',
      'Automatic organization with AI',
      'Powerful yet simple interface'
    ],
    locked: true
  },
  {
    id: 'a5',
    name: 'WorkoutLog',
    slug: 'workoutlog',
    shortDescription: 'Minimalist workout tracker with progress visualization and rest timers',
    description: 'Track your workouts with a clean, distraction-free interface, visualize progress, and stay on pace with rest timers.',
    status: 'Planned',
    targetDate: '2026-03',
    tech: ['SwiftUI', 'HealthKit', 'Charts', 'WidgetKit'],
    links: {},
    features: [
      'Quick workout logging',
      'Rest period timers',
      'Progress charts',
      'Exercise library',
      'HealthKit integration'
    ],
    roadmap: [
      { label: 'MVP - Workout logging', done: false },
      { label: 'Beta - Exercise library', done: false },
      { label: 'v1.0 - Progress charts', done: false },
      { label: 'v1.1 - Workout plans', done: false }
    ],
    changelog: [],
    problem: 'Fitness apps are bloated with social features when users just want to track workouts efficiently.',
    solution: [
      'Fast, focused workout entry',
      'Clear progress visualization',
      'No social distractions'
    ],
    locked: true
  },
  {
    id: 'a6',
    name: 'ReadingList',
    slug: 'readinglist',
    shortDescription: 'Beautiful reading tracker with quotes, notes, and reading goals',
    description: 'Track your reading journey, save memorable quotes, take notes, and achieve your reading goals.',
    status: 'Planned',
    targetDate: '2026-04',
    tech: ['SwiftUI', 'CoreData', 'Vision', 'ShareExtension'],
    links: {},
    features: [
      'Reading progress tracking',
      'Quote and note capture',
      'Reading goals and stats',
      'Book cover scanning',
      'Share extension for quick adds'
    ],
    roadmap: [
      { label: 'MVP - Book tracking', done: false },
      { label: 'Beta - Quote capture', done: false },
      { label: 'v1.0 - Reading goals', done: false },
      { label: 'v1.1 - Social sharing', done: false }
    ],
    changelog: [],
    problem: 'Goodreads is cluttered, and simple reading trackers lack features for capturing insights.',
    solution: [
      'Clean, focused interface',
      'Easy quote and note capture',
      'Personal reading analytics'
    ],
    locked: true
  },
  {
    id: 'a7',
    name: 'WaterReminder',
    slug: 'waterreminder',
    shortDescription: 'Stay hydrated with smart reminders and intake tracking visualization',
    description: 'Track your daily water intake with beautiful visualizations and smart reminders tailored to your routine.',
    status: 'Planned',
    targetDate: '2026-05',
    tech: ['SwiftUI', 'HealthKit', 'UserNotifications', 'WidgetKit'],
    links: {},
    features: [
      'Quick water logging',
      'Smart hydration reminders',
      'Daily intake visualization',
      'HealthKit integration',
      'Apple Watch companion'
    ],
    roadmap: [
      { label: 'MVP - Water tracking', done: false },
      { label: 'Beta - Smart reminders', done: false },
      { label: 'v1.0 - HealthKit sync', done: false },
      { label: 'v1.1 - Watch app', done: false }
    ],
    changelog: [],
    problem: 'Water reminder apps send annoying notifications and lack integration with health data.',
    solution: [
      'Context-aware reminders',
      'One-tap logging',
      'Seamless HealthKit integration'
    ],
    locked: true
  },
  {
    id: 'a8',
    name: 'TaskFlow',
    slug: 'taskflow',
    shortDescription: 'Kanban-style task manager with time tracking and focus modes',
    description: 'Manage tasks with a visual Kanban board, track time spent, and use focus mode to eliminate distractions.',
    status: 'Planned',
    targetDate: '2026-06',
    tech: ['SwiftUI', 'CoreData', 'CloudKit', 'WidgetKit'],
    links: {},
    features: [
      'Kanban board interface',
      'Built-in time tracking',
      'Focus mode',
      'Subtasks and checklists',
      'iCloud sync'
    ],
    roadmap: [
      { label: 'MVP - Kanban board', done: false },
      { label: 'Beta - Time tracking', done: false },
      { label: 'v1.0 - Focus mode', done: false },
      { label: 'v1.1 - Team collaboration', done: false }
    ],
    changelog: [],
    problem: 'Task managers are either too simple or overly complex project management tools.',
    solution: [
      'Visual Kanban workflow',
      'Integrated time tracking',
      'Balance of simplicity and power'
    ],
    locked: true
  },
  {
    id: 'a9',
    name: 'MealPlanner',
    slug: 'mealplanner',
    shortDescription: 'Weekly meal planning with recipe management and shopping lists',
    description: 'Plan your weekly meals, manage recipes, and generate smart shopping lists automatically.',
    status: 'Planned',
    targetDate: '2026-07',
    tech: ['SwiftUI', 'CoreData', 'CloudKit', 'Vision'],
    links: {},
    features: [
      'Weekly meal calendar',
      'Recipe library',
      'Auto-generated shopping lists',
      'Nutrition tracking',
      'Recipe photo scanning'
    ],
    roadmap: [
      { label: 'MVP - Meal planning', done: false },
      { label: 'Beta - Recipe management', done: false },
      { label: 'v1.0 - Shopping lists', done: false },
      { label: 'v1.1 - Nutrition data', done: false }
    ],
    changelog: [],
    problem: 'Meal planning apps are complicated and dont integrate recipe management with shopping.',
    solution: [
      'Visual weekly planner',
      'Recipe library with photos',
      'Smart shopping list generation'
    ],
    locked: true
  },
  {
    id: 'a10',
    name: 'SleepTracker',
    slug: 'sleeptracker',
    shortDescription: 'Smart sleep tracking with insights and bedtime routine builder',
    description: 'Track your sleep quality, get personalized insights, and build better bedtime routines for improved rest.',
    status: 'Planned',
    targetDate: '2026-08',
    tech: ['SwiftUI', 'HealthKit', 'CoreML', 'UserNotifications'],
    links: {},
    features: [
      'Sleep quality tracking',
      'Bedtime routine builder',
      'Sleep insights with ML',
      'Smart wake alarms',
      'HealthKit integration'
    ],
    roadmap: [
      { label: 'MVP - Sleep logging', done: false },
      { label: 'Beta - Routine builder', done: false },
      { label: 'v1.0 - AI insights', done: false },
      { label: 'v1.1 - Smart alarms', done: false }
    ],
    changelog: [],
    problem: 'Sleep tracking requires expensive hardware or provides generic advice without personalization.',
    solution: [
      'HealthKit-based tracking',
      'Personalized AI insights',
      'Actionable routine recommendations'
    ],
    locked: true
  }
];

export const getFeaturedApps = () => apps.slice(0, 3);
export const getAppBySlug = (slug: string) => apps.find(app => app.slug === slug);
export const getAppsByStatus = (status: string) =>
  status === 'All' ? apps : apps.filter(app => app.status === status);
