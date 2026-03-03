# Team Member Images

This folder contains profile images for team members displayed in the About section.

## Image Paths

Images are referenced in `/src/pages/About.jsx` with the following paths:

```
/images/team/ceo.jpg          - Mahesh Gupta (CEO & Founder)
/images/team/cto.jpg          - Raju kr Tiwari (CTO)
/images/team/cbo.jpg          - Michael Chen (CBO - Chief Business Officer)
/images/team/head-design.jpg  - Emma Wilson (Head of Design)
/images/team/lead-dev.jpg     - David Kumar (Lead Developer)
/images/team/qa-lead.jpg      - Lisa Anderson (Quality Assurance Lead)
```

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Dimensions**: 300x300px (minimum) - Square format recommended
- **File Size**: Keep under 500KB for optimal performance
- **Quality**: Use professional headshots or team photos

## Adding New Images

1. Place the image file in this directory with the appropriate name
2. The app will automatically display the image
3. If an image is missing, a placeholder will be shown automatically

## Placeholder Fallback

If an image is not found, the app displays a placeholder image using placeholder.com service:
```
https://via.placeholder.com/300x300?text=MemberName
```

This ensures the page doesn't break if images are missing during development.
