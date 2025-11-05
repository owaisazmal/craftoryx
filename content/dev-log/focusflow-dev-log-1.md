---
id: p2
title: FocusFlow Dev Log #1 - Building the Timer Core
slug: focusflow-dev-log-1
date: 2025-09-15
tags:
  - focusflow
  - architecture
  - swiftui
summary: "Week 1 of FocusFlow development. Building the core timer logic with Combine, handling background states, and designing the UI."
---

# FocusFlow Dev Log #1: Building the Timer Core

This week, I built the foundation of FocusFlow's Pomodoro timer using SwiftUI and Combine. Here's what I learned and what's next.

## This Week's Progress

Built the foundation of FocusFlow's Pomodoro timer using SwiftUI and Combine. The core functionality is working, but there were some interesting challenges along the way.

### Architecture Decisions

**Timer State Management**

```swift
@Published var timerState: TimerState = .idle
@Published var secondsRemaining: Int = 1500 // 25 minutes
```

Used Combine's `Timer.publish` for accurate countdown. Had to handle edge cases around:

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

SwiftUI's `Canvas` API made the circular timer beautiful and performant.

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

