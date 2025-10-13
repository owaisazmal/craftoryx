import { Post } from '@/types';

export const posts: Post[] = [
  {
    id: 'p1',
    title: 'Starting the 10 Apps in 12 Months Challenge',
    slug: 'starting-the-challenge',
    date: '2025-09-01',
    tags: ['announcement', 'planning'],
    summary: 'Introducing CraftoryX: my journey to ship 10 production-ready iOS apps in one year. Here\'s why I\'m doing this and what to expect.',
    content: `# Starting the 10 Apps in 12 Months Challenge

## Why This Challenge?

As an iOS developer, I've always wanted to push my limits and ship real products. This challenge is about more than just coding—it's about:

- **Shipping consistently**: Moving from idea to App Store
- **Learning in public**: Sharing wins, failures, and lessons
- **Building a portfolio**: 10 real apps with real users
- **Mastering Swift**: Deep diving into SwiftUI, Combine, CoreML, and more

## The Rules

1. **Swift only**: All apps built with Swift and native iOS frameworks
2. **Ship to App Store**: Each app must be publicly available
3. **Weekly updates**: Transparent dev logs every week
4. **Quality bar**: Each app must be polished and accessible
5. **One year deadline**: August 31, 2026

## What's Next

I'm starting with **FocusFlow**, a Pomodoro timer app. It's simple enough to ship quickly but has room for interesting features like ambient soundscapes and analytics.

Follow along as I document every step of the journey. The good, the bad, and the rejected by App Store review.

Let's build something amazing.
`,
  },
  {
    id: 'p2',
    title: 'FocusFlow Dev Log #1: Building the Timer Core',
    slug: 'focusflow-dev-log-1',
    date: '2025-09-15',
    tags: ['focusflow', 'architecture', 'swiftui'],
    summary: 'Week 1 of FocusFlow development. Building the core timer logic with Combine, handling background states, and designing the UI.',
    content: `# FocusFlow Dev Log #1: Building the Timer Core

## This Week's Progress

Built the foundation of FocusFlow's Pomodoro timer using SwiftUI and Combine.

### Architecture Decisions

**Timer State Management**
\`\`\`swift
@Published var timerState: TimerState = .idle
@Published var secondsRemaining: Int = 1500 // 25 minutes
\`\`\`

Used Combine's \`Timer.publish\` for accurate countdown. Had to handle edge cases around:
- App backgrounding
- Timer precision on older devices
- State restoration after force quit

**Background Audio**
The trickiest part was keeping the timer running when the app is backgrounded. iOS has strict rules here. Solution:
- Background audio capability
- Silent audio track to keep app alive
- Local notifications for timer completion

### UI Implementation

Clean, minimal design with:
- Large circular progress indicator
- Start/Pause/Reset controls
- Interval configuration (work/break durations)

SwiftUI's \`Canvas\` API made the circular timer beautiful and performant.

### Metrics

- **Lines of code**: ~800
- **Time spent**: 12 hours
- **Tests written**: 15 unit tests
- **Crashes**: 0 (so far!)

### Next Week

- Add ambient soundscapes (rain, cafe noise, forest)
- Implement audio mixing
- TestFlight beta to 10 users

## Lessons Learned

1. **Background execution is hard**: iOS's strict background policies require creative solutions
2. **Combine is powerful**: Once you grok publishers, timer logic becomes elegant
3. **Test early**: Unit tests caught 3 timing bugs before they became issues

Stay tuned for next week's update on audio implementation!
`,
  },
  {
    id: 'p3',
    title: 'The Importance of Accessibility in Indie Apps',
    slug: 'accessibility-in-indie-apps',
    date: '2025-10-01',
    tags: ['accessibility', 'ui', 'best-practices'],
    summary: 'Why accessibility isn\'t optional, even for indie apps. Practical tips for VoiceOver, Dynamic Type, and color contrast.',
    content: `# The Importance of Accessibility in Indie Apps

## Why Accessibility Matters

As indie developers, we might think "I'll add accessibility later." But:

1. **15% of users** have some form of disability
2. **Everyone benefits** from good accessibility (elderly users, temporary injuries, bright sunlight)
3. **It's the right thing to do**

## What I'm Implementing

### VoiceOver Support
\`\`\`swift
Button("Start Timer") { }
  .accessibilityLabel("Start 25 minute focus session")
  .accessibilityHint("Starts the Pomodoro timer")
\`\`\`

Every interactive element has proper labels and hints.

### Dynamic Type
All text scales with user preferences:
\`\`\`swift
Text("FocusFlow")
  .font(.title)
  .dynamicTypeSize(.large)
\`\`\`

### Color Contrast
Using SF Symbols and ensuring 4.5:1 contrast ratio minimum. Testing with Xcode's accessibility inspector.

### Keyboard Navigation
Full keyboard support for iPad users and those using assistive switches.

## Testing Checklist

- [ ] VoiceOver can navigate all screens
- [ ] All buttons have accessibility labels
- [ ] Color contrast meets WCAG AA
- [ ] Dynamic Type doesn't break layouts
- [ ] Reduce Motion is respected

## Resources

- [Apple's Accessibility Guidelines](https://developer.apple.com/accessibility/)
- [WCAG 2.1 Standards](https://www.w3.org/WAI/WCAG21/quickref/)

Building accessible apps isn't extra work—it's part of building great apps.
`,
  },
];

export const getPostBySlug = (slug: string) => posts.find(post => post.slug === slug);
export const getRecentPosts = (count: number = 3) => posts.slice(0, count);
