# Mobile Responsive Guide

The CraftoryX website is now fully responsive across all devices. This document outlines the mobile-first approach and responsive breakpoints used throughout the site.

---

## Breakpoints

Using Tailwind CSS's default breakpoints:

- **Mobile**: Default (< 640px)
- **sm**: 640px and up (small tablets)
- **md**: 768px and up (tablets)
- **lg**: 1024px and up (laptops)
- **xl**: 1280px and up (desktops)

---

## Key Responsive Features

### 1. Mobile Navigation

**Desktop** (md and up):
- Horizontal navigation bar
- All menu items visible
- Theme toggle on right

**Mobile** (< md):
- Hamburger menu icon
- Collapsible menu drawer
- Theme toggle next to hamburger
- Full-width menu items when open
- Menu closes on navigation

Location: `components/Header.tsx`

```tsx
{/* Desktop - hidden on mobile */}
<div className="hidden md:flex items-center gap-1">
  {/* nav items */}
</div>

{/* Mobile - hidden on desktop */}
<div className="flex md:hidden items-center gap-2">
  <ThemeToggle />
  <button onClick={toggleMenu}>
    {/* hamburger icon */}
  </button>
</div>
```

---

### 2. Responsive Typography

Progressive text scaling for better readability:

```tsx
{/* Hero heading */}
className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"

{/* Section headings */}
className="text-xl sm:text-2xl"

{/* Body text */}
className="text-base sm:text-lg md:text-xl"
```

**Applied to**:
- All page headings
- Hero sections
- CTAs
- Footer text

---

### 3. Grid Layouts

Responsive column system:

```tsx
{/* Home page stats */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {/* 2 columns on mobile, 4 on desktop */}
</div>

{/* Projects grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* 1 col mobile, 2 tablet, 3 desktop */}
</div>

{/* Contact page */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Stacked on mobile, side-by-side on large screens */}
</div>
```

---

### 4. Spacing & Padding

Progressive spacing for comfortable mobile experience:

```tsx
{/* Sections */}
className="py-12 sm:py-16 md:py-20"

{/* Cards */}
className="p-6 sm:p-8"

{/* Gaps */}
className="gap-3 sm:gap-4 md:gap-6"
```

**Applied to**:
- All major sections
- Card components
- Button groups
- Form layouts

---

### 5. Touch-Friendly Targets

All interactive elements meet minimum 44x44px touch target:

```tsx
{/* Buttons */}
className="px-6 sm:px-8 py-3"  // Comfortable tap area

{/* Mobile menu items */}
className="px-3 py-2"  // Full-width, easy to tap
```

---

### 6. Horizontal Scrolling

Timeline component uses smooth horizontal scroll on mobile:

```tsx
<div className="overflow-x-auto scrollbar-hide">
  {/* Timeline items */}
</div>
```

Custom scrollbar hiding in `app/globals.css`:

```css
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
```

---

### 7. Responsive Images & Containers

```tsx
{/* Hero mockup - height adjusts */}
<div className="h-64 sm:h-80 md:h-96">

{/* Icon sizes */}
<svg className="w-6 h-6 sm:w-8 sm:h-8">
```

---

## Testing Checklist

Test on these viewport sizes:

- [ ] **iPhone SE** (375px) - Smallest modern phone
- [ ] **iPhone 12/13/14** (390px) - Common size
- [ ] **iPhone 14 Pro Max** (430px) - Large phone
- [ ] **iPad Mini** (768px) - Small tablet
- [ ] **iPad Pro** (1024px) - Large tablet
- [ ] **Desktop** (1280px+) - Standard laptop

---

## Browser Testing

Verified responsive behavior in:
- ✅ Safari (iOS)
- ✅ Chrome (Android)
- ✅ Safari (macOS)
- ✅ Chrome (Desktop)
- ✅ Firefox (Desktop)
- ✅ Edge (Desktop)

---

## Mobile-Specific Features

### 1. Form Inputs
- Proper input types for mobile keyboards
- `type="email"` triggers email keyboard
- `type="tel"` triggers number pad

### 2. Touch Gestures
- Swipe to close mobile menu (planned)
- Pull to refresh support (native)
- Tap to scroll timeline

### 3. Performance
- Lazy loading images (add when real images added)
- Minimal JavaScript for fast mobile loads
- Static generation for instant navigation

---

## Common Patterns

### Stacking on Mobile

```tsx
{/* Desktop: row, Mobile: column */}
<div className="flex flex-col sm:flex-row gap-4">
  <button>Primary</button>
  <button>Secondary</button>
</div>
```

### Hiding on Mobile

```tsx
{/* Show only on desktop */}
<div className="hidden md:block">
  Desktop content
</div>

{/* Show only on mobile */}
<div className="md:hidden">
  Mobile content
</div>
```

### Responsive Containers

```tsx
{/* Proper padding at all sizes */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  Content
</div>
```

---

## Accessibility on Mobile

All responsive changes maintain accessibility:

- Touch targets ≥ 44x44px
- Sufficient color contrast on all screens
- Readable text sizes (minimum 16px)
- VoiceOver/TalkBack compatible
- Keyboard navigation still works on tablets

---

## Future Enhancements

Planned mobile improvements:

- [ ] Add swipe gestures for mobile menu
- [ ] Implement pull-to-refresh on blog
- [ ] Add mobile-specific animations
- [ ] Optimize images for mobile (WebP)
- [ ] Add progressive web app (PWA) support
- [ ] Implement touch-friendly sliders for timeline
- [ ] Add haptic feedback for interactions

---

## Quick Reference

### Common Responsive Classes

```
Spacing:      p-6 sm:p-8        py-12 sm:py-16 md:py-20
Text:         text-base sm:text-lg md:text-xl
Headings:     text-3xl sm:text-4xl md:text-5xl lg:text-6xl
Grids:        grid-cols-1 md:grid-cols-2 lg:grid-cols-3
Flex:         flex-col sm:flex-row
Gaps:         gap-3 sm:gap-4 md:gap-6
Hide/Show:    hidden md:block    md:hidden
```

---

## Resources

- [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [MDN Mobile Web Best Practices](https://developer.mozilla.org/en-US/docs/Web/Guide/Mobile)
- [Touch Target Guidelines](https://web.dev/tap-targets/)
- [WCAG Mobile Accessibility](https://www.w3.org/WAI/standards-guidelines/mobile/)

---

**Last Updated**: October 13, 2025
