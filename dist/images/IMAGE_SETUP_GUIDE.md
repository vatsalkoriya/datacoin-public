# Image Setup Guide for DataCoin

## Project Image Structure

```
frontend/
├── public/
│   ├── images/
│   │   └── team/
│   │       ├── ceo.jpg
│   │       ├── cto.jpg
│   │       ├── cbo.jpg
│   │       ├── head-design.jpg
│   │       ├── lead-dev.jpg
│   │       ├── qa-lead.jpg
│   │       └── README.md (this file)
│   ├── ceo.jpg (old - can be removed)
│   ├── cto.jpg (old - can be removed)
│   └── ...other assets
└── src/
    └── pages/
        └── About.jsx (references images from /images/team/)
```

## Image Paths in Code

The `About.jsx` file references team member images using these paths:

```javascript
{
  image: '/images/team/ceo.jpg',
  image: '/images/team/cto.jpg',
  image: '/images/team/cbo.jpg',
  image: '/images/team/head-design.jpg',
  image: '/images/team/lead-dev.jpg',
  image: '/images/team/qa-lead.jpg',
}
```

## Routing Confirmation ✅

The `/about` route is properly configured in `App.js`:

```javascript
<Route path="/about" element={<About />} />
```

Navigation: `http://localhost:3000/about`

## How to Add Team Member Images

1. **Prepare Image Files**
   - Size: 300x300px (minimum)
   - Format: JPG, PNG, or WebP
   - File size: < 500KB

2. **Save to Directory**
   - Location: `frontend/public/images/team/`
   - Use the filename as specified in About.jsx:
     - `ceo.jpg`
     - `cto.jpg`
     - `cbo.jpg`
     - `head-design.jpg`
     - `lead-dev.jpg`
     - `qa-lead.jpg`

3. **Automatic Display**
   - Once saved, images will display automatically
   - No code changes needed!

## Fallback Behavior

If an image is not found, the app automatically displays a placeholder:
```
https://via.placeholder.com/300x300?text=MemberName
```

This prevents broken image displays during development.

## Image Styling

- Images are displayed in 300x300px containers with rounded corners (12px radius)
- Zoom animation on hover (1.08x scale)
- Smooth transitions for better UX
- Background gradient for missing images

## Frontend Routes

```
/              - Home page
/services      - Services page
/about         - About page (includes team member images)
/projects      - Projects page
/contact       - Contact page
/login         - Login page
/signup        - Sign up page
```

All routes are properly configured and functional.
