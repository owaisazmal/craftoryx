import React from 'react';

export const skillIcons: Record<string, React.ReactNode> = {
  Swift: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M11.992 2.007c-5.523 0-10 4.477-10 10 0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.523-4.476-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1.5-8.5h3v3h-3v-3z"/>
      <path d="M8.5 6.5l7 7M15.5 6.5l-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  SwiftUI: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="none"/>
      <path d="M9 9h6v6H9z"/>
      <path d="M9 3v6M15 3v6M9 15v6M15 15v6M3 9h6M15 9h6"/>
    </svg>
  ),
  UIKit: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <rect x="6" y="6" width="5" height="5" fill="white"/>
      <rect x="13" y="6" width="5" height="5" fill="white"/>
      <rect x="6" y="13" width="5" height="5" fill="white"/>
      <rect x="13" y="13" width="5" height="5" fill="white"/>
    </svg>
  ),
  Combine: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="8" cy="12" r="2"/>
      <circle cx="16" cy="12" r="2"/>
      <path d="M10 12h4M14 12h4"/>
      <path d="M8 10l4 4M16 10l-4 4"/>
    </svg>
  ),
  CoreData: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
      <ellipse cx="12" cy="19" rx="9" ry="3"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  CloudKit: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96zM12 12l-2 2 2 2 2-2-2-2z"/>
    </svg>
  ),
  CoreML: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      <circle cx="12" cy="7" r="2" fill="currentColor"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <circle cx="12" cy="17" r="2" fill="currentColor"/>
    </svg>
  ),
  Vision: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  HealthKit: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  ),
  WidgetKit: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <rect x="3" y="3" width="8" height="8" rx="1.5"/>
      <rect x="13" y="3" width="8" height="8" rx="1.5"/>
      <rect x="3" y="13" width="8" height="8" rx="1.5"/>
      <rect x="13" y="13" width="8" height="8" rx="1.5"/>
    </svg>
  ),
  'App Store Optimization': (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"/>
      <path d="M7 16l4-4 4 4 6-6"/>
      <line x1="7" y1="12" x2="17" y2="12"/>
    </svg>
  ),
  Accessibility: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
};

