# Collaborators Management Guide

The collaboration section on the Projects page displays floating bubbles for you and your collaborators in an Apple Watch-style layout.

## File Location

All collaborator data is managed in: **`/data/collaborators.ts`**

## How to Add/Update Collaborators

### Structure

Each collaborator has the following properties:

```typescript
{
  id: number;              // Unique identifier (increment for each new collaborator)
  name: string;            // Full name of the collaborator
  initials: string;        // 2-3 character initials (e.g., "OK", "JD")
  color: string;           // Tailwind gradient classes (e.g., "from-blue-500 to-purple-600")
  imageUrl?: string;       // Optional: Profile photo URL
  link?: string;           // Optional: Link when bubble is clicked
}
```

### Example: Adding a New Collaborator

```typescript
{
  id: 6,
  name: 'John Doe',
  initials: 'JD',
  color: 'from-cyan-500 to-blue-600',
  imageUrl: 'https://example.com/john-profile.jpg',
  link: 'https://linkedin.com/in/johndoe',
}
```

### Available Gradient Colors

Choose from these Tailwind gradient combinations:

- `from-blue-500 to-purple-600` (Blue to Purple)
- `from-green-500 to-teal-600` (Green to Teal)
- `from-pink-500 to-rose-600` (Pink to Rose)
- `from-orange-500 to-red-600` (Orange to Red)
- `from-indigo-500 to-blue-600` (Indigo to Blue)
- `from-cyan-500 to-blue-600` (Cyan to Blue)
- `from-yellow-500 to-orange-600` (Yellow to Orange)
- `from-purple-500 to-pink-600` (Purple to Pink)
- `from-emerald-500 to-green-600` (Emerald to Green)
- `from-violet-500 to-purple-600` (Violet to Purple)

## Usage Examples

### 1. Collaborator with Profile Photo and Link

```typescript
{
  id: 2,
  name: 'Sarah Johnson',
  initials: 'SJ',
  color: 'from-pink-500 to-rose-600',
  imageUrl: 'https://example.com/sarah.jpg',
  link: 'https://github.com/sarahjohnson',
}
```

### 2. Collaborator with Only Initials (No Photo)

```typescript
{
  id: 3,
  name: 'Mike Chen',
  initials: 'MC',
  color: 'from-green-500 to-teal-600',
  link: 'https://twitter.com/mikechen',
}
```

### 3. Placeholder (No Link, No Photo)

```typescript
{
  id: 4,
  name: 'Future Collaborator',
  initials: 'FC',
  color: 'from-indigo-500 to-blue-600',
}
```

## Image Sources

You can use images from:
- **LinkedIn**: Right-click profile photo → Copy image address
- **GitHub**: `https://github.com/username.png`
- **Custom URL**: Any publicly accessible image URL
- **Local**: Upload to `/public/` folder and use `/filename.jpg`

## Tips

1. **Initials**: Keep to 2-3 characters for best appearance
2. **Image Size**: Recommended 200x200px or larger
3. **Links**: Can be absolute URLs or relative paths (e.g., `/#about-the-developer`)
4. **IDs**: Must be unique - increment from the highest existing ID
5. **Testing**: After adding, check the Projects page to see the bubbles in action

## Current Collaborators

As of now:
1. **Owais Khan (OK)** - Developer (you)
2. **C1-C4** - Placeholders for future collaborators

## Questions?

The bubbles will automatically:
- Float and bounce around the container
- Collide with each other realistically
- Only be clickable if a `link` is provided
- Show image if `imageUrl` is provided, otherwise show gradient with initials
- Display hover effects on clickable bubbles
