# 🎨 Customization Guide

## Quick Customization Tips

### 1. Change Brand Name
Replace "DataCoin" with your company name in:
- `src/components/Navbar.jsx` (Logo text)
- `src/components/Footer.jsx` (Company name)
- `package.json` (name field)
- `public/index.html` (title tag)

### 2. Update Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #6366f1;      /* Change this */
  --secondary-color: #ec4899;    /* And this */
  --dark-bg: #0f172a;
  --light-bg: #f8fafc;
  --text-dark: #1e293b;
  --text-light: #64748b;
  --border-color: #e2e8f0;
}
```

### 3. Update Company Information
**Footer** (`src/components/Footer.jsx`):
```javascript
<p>📧 your-email@company.com</p>
<p>📱 +1 (555) 000-0000</p>
<p>📍 Your City, State</p>
```

**Contact** (`src/pages/Contact.jsx`):
```javascript
const contactMethods = [
  {
    icon: '📧',
    title: 'Email',
    value: 'your-email@company.com',
    description: 'Send us your inquiry anytime'
  },
  // ... update all contact info
];
```

### 4. Add Your Services
**Home & Services pages**: Replace the sample services with your actual services:

```javascript
const services = [
  {
    id: 1,
    icon: '🎯',  // Change emoji
    title: 'Your Service Name',
    description: 'Your service description here',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    technologies: ['Tech 1', 'Tech 2']
  },
  // Add more services...
];
```

### 5. Update Project Portfolio
**Projects Page** (`src/pages/Projects.jsx`):
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    category: 'web',
    image: '🎨',  // Change emoji
    client: 'Client Name',
    description: 'Project description',
    technologies: ['React', 'Node.js'],
    result: 'Project results/impact'
  },
  // Add more projects...
];
```

### 6. Update Team Members
**About Page** (`src/pages/About.jsx`):
```javascript
const team = [
  {
    id: 1,
    name: 'Your Name',
    role: 'Your Position',
    image: '👨‍💼',  // Change emoji
    bio: 'Your bio here'
  },
  // Add more team members...
];
```

### 7. Update Company Values
**About Page** (`src/pages/About.jsx`):
```javascript
const values = [
  {
    title: 'Your Value',
    description: 'Description of what this value means to your company'
  },
  // Add more values...
];
```

### 8. Update Company Timeline
**About Page** (`src/pages/About.jsx`):
```javascript
const timeline = [
  { year: '2023', event: 'Company milestone or achievement' },
  { year: '2024', event: 'Another important milestone' },
  // Add more timeline events...
];
```

### 9. Update FAQ Section
**Contact Page** (`src/pages/Contact.jsx`):
```javascript
<div className="faq-item">
  <h4>Your Question Here?</h4>
  <p>Your answer here with details about your services/company.</p>
</div>
```

### 10. Update Hero Background Types
You can use different background styles for different pages:
```javascript
// Gradient background
<Hero backgroundType="gradient" ... />

// Dark background
<Hero backgroundType="dark" ... />

// Light background
<Hero backgroundType="light" ... />
```

---

## 🎯 Adding New Pages

### Example: Adding a Blog Page

1. **Create the file** `src/pages/Blog.jsx`:
```javascript
import React from 'react';
import Hero from '../components/Hero';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog">
      <Hero 
        title="Our Blog"
        subtitle="Latest News & Insights"
        backgroundType="dark"
      />
      {/* Add blog content here */}
    </div>
  );
};

export default Blog;
```

2. **Create styles** `src/pages/Blog.css`

3. **Add route** in `src/App.js`:
```javascript
import Blog from './pages/Blog';

// Add to Routes:
<Route path="/blog" element={<Blog />} />
```

4. **Add navigation link** in `src/components/Navbar.jsx`:
```javascript
<li><Link to="/blog">Blog</Link></li>
```

---

## 🖼️ Adding Images

### Replace Emojis with Images

**In any component:**
```javascript
// Before (emoji):
<div className="project-image">🛍️</div>

// After (image):
<img 
  src="/images/ecommerce.jpg" 
  alt="E-Commerce Platform"
  className="project-image"
/>
```

### Image Folder Structure
```
public/
├── images/
│   ├── projects/
│   │   ├── project1.jpg
│   │   ├── project2.jpg
│   ├── team/
│   │   ├── team-member1.jpg
│   │   ├── team-member2.jpg
│   ├── services/
│   │   └── service-icons/
```

---

## 📧 Setting Up Form Submission

### Using EmailJS

1. **Install:**
```bash
npm install @emailjs/browser
```

2. **Update Contact.jsx:**
```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  ).then(() => {
    setSubmitted(true);
  });
};
```

### Using Backend API
```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  
  fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(data => setSubmitted(true));
};
```

---

## 🔍 SEO Optimization

### Add Meta Tags
Edit `public/index.html`:
```html
<meta name="description" content="DataCoin - Professional Technology Services">
<meta name="keywords" content="web development, mobile apps, cloud solutions">
<meta name="author" content="Your Company">
<meta property="og:title" content="DataCoin Services">
<meta property="og:description" content="Professional technology solutions">
<meta property="og:image" content="/images/og-image.jpg">
```

### Update Page Titles
In each page component, add at the top:
```javascript
useEffect(() => {
  document.title = 'Services - DataCoin';
}, []);
```

---

## 🎯 Performance Tips

### 1. Code Splitting
```javascript
// Import pages with lazy loading
const Home = lazy(() => import('./pages/Home'));

// Use Suspense
<Suspense fallback={<Loading />}>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</Suspense>
```

### 2. Image Optimization
```bash
# Install image optimizer
npm install next-optimized-images
```

### 3. CSS Optimization
- Minify CSS for production
- Remove unused styles
- Use CSS modules if needed

---

## 🚀 Deployment Checklist

- [ ] Update all company information
- [ ] Replace all sample data
- [ ] Set up form submission
- [ ] Add real images
- [ ] Add favicon (public/favicon.ico)
- [ ] Update page titles and meta tags
- [ ] Test on mobile devices
- [ ] Test all navigation links
- [ ] Test form validation
- [ ] Add analytics
- [ ] Set up SSL certificate
- [ ] Configure domain name
- [ ] Run `npm run build`
- [ ] Deploy to hosting service

---

## 📚 Useful Resources

### React
- https://react.dev
- https://reactrouter.com

### CSS
- https://developer.mozilla.org/en-US/docs/Web/CSS
- https://css-tricks.com

### Hosting
- Vercel: https://vercel.com
- Netlify: https://netlify.com
- AWS: https://aws.amazon.com

### SEO Tools
- Google Search Console
- Lighthouse
- SEO Audit Tools

---

## 💡 Tips & Best Practices

1. **Keep data organized** - Use separate data files for content
2. **Reuse components** - Create more reusable components
3. **Test responsiveness** - Always test on mobile
4. **Optimize images** - Compress images before uploading
5. **Cache busting** - Add version numbers to assets
6. **Monitor performance** - Use Chrome DevTools
7. **Maintain consistency** - Stick to the color scheme
8. **Regular backups** - Back up your code regularly

---

**Happy Customizing! 🎉**
