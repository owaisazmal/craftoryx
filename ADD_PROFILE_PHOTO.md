# How to Add Your Profile Photo

Your profile photo will appear in the collaboration section on the projects page.

## Current Setup

The code is looking for your profile photo at: `/public/profile.jpg`

## Steps to Add Your Photo

### Option 1: Add to Public Folder
1. Save your profile photo as `profile.jpg`
2. Place it in the `/public/` folder
3. The image will automatically appear on the page

### Option 2: Use External URL
If you have your photo hosted elsewhere (e.g., LinkedIn, GitHub), update the Image src in:

**File:** `app/projects/page.tsx` (line 65)

```tsx
<Image
  src="YOUR_PHOTO_URL_HERE"  // Change this line
  alt="Owais Khan - Developer"
  fill
  className="object-cover"
/>
```

### Option 3: Use Different Filename
If your photo has a different name, just move it to `/public/` and update line 65:

```tsx
<Image
  src="/your-photo-name.jpg"  // Change this
  alt="Owais Khan - Developer"
  fill
  className="object-cover"
/>
```

## Recommended Image Specs
- Format: JPG or PNG
- Minimum size: 200x200 pixels
- Recommended: 400x400 pixels (for retina displays)
- The image will be displayed as a circle

## Fallback
If the image doesn't load, it will automatically show a gradient circle with your initials "OK" instead.
