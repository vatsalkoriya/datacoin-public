# DataCoin - Modern Service-Based Company Website

A beautiful, modern, and responsive website for a service-based technology company built with React and React Router.

## 🌟 Features

✅ **Modern Design** - Clean, contemporary UI with gradient colors and smooth animations
✅ **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
✅ **Perfect Routing** - Seamless navigation with React Router v6
✅ **All Pages Implemented** - Complete website with 5 main pages
✅ **Service Showcase** - Display all services with features and technologies
✅ **Project Portfolio** - Filterable project gallery with case studies
✅ **Team Section** - Professional team member profiles
✅ **Contact Form** - Functional contact form with validation
✅ **Modern UI Components** - Cards, buttons, forms with smooth transitions
✅ **SEO Friendly** - Semantic HTML and meta tags ready

## 📁 Project Structure

```
src/
├── pages/
│   ├── Home.jsx              # Landing page with hero, stats, services, features
│   ├── Home.css
│   ├── Services.jsx          # Detailed services with features and tech stack
│   ├── Services.css
│   ├── Projects.jsx          # Portfolio with filterable projects
│   ├── Projects.css
│   ├── About.jsx             # Company story, values, team, timeline
│   ├── About.css
│   ├── Contact.jsx           # Contact form and information
│   └── Contact.css
├── components/
│   ├── Navbar.jsx            # Navigation bar with mobile menu
│   ├── Navbar.css
│   ├── Footer.jsx            # Footer with links and social media
│   ├── Footer.css
│   ├── Hero.jsx              # Reusable hero section component
│   └── Hero.css
├── App.js                    # Main app with routing setup
├── App.css                   # Global styles and utilities
├── index.js                  # Entry point
├── index.css                 # Global CSS variables and base styles
└── package.json              # Dependencies configuration
```

## 🎨 Color Scheme & Design

**Primary Colors:**
- Primary: `#6366f1` (Indigo)
- Secondary: `#ec4899` (Pink)
- Dark Background: `#0f172a`
- Light Background: `#f8fafc`
- Text Dark: `#1e293b`
- Text Light: `#64748b`

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000`

> **Backend URL**
>
> The frontend reads the API base address from the `REACT_APP_API_URL`
> environment variable (defaults to `http://localhost:5000/api`).
> For production deployments, set it to your hosted backend, e.g.:
>
> ```bash
> REACT_APP_API_URL=https://datacoinsoftwarepvtltd.onrender.com/api
> ```


## 📄 Pages Overview

### 1. **Home** (`/`)
- Hero section with call-to-action
- Statistics showcase
- Services preview
- Why choose us section

### 2. **Services** (`/services`)
- Detailed service descriptions
- Key features for each service
- Technologies used
- Service delivery process

### 3. **Projects** (`/projects`)
- Portfolio showcase
- Filterable projects by category
- Project cards with results and technologies

### 4. **About** (`/about`)
- Company story and vision
- Core values
- Timeline of company milestones
- Team member profiles

### 5. **Contact** (`/contact`)
- Contact information
- Functional contact form
- FAQ section

## 🔄 Routing

```javascript
- /              → Home
- /services      → Services
- /projects      → Projects
- /about         → About
- /contact       → Contact
```

## 📦 Tech Stack

- **React** 19.2.4
- **React Router DOM** 6.20.0
- **CSS3** with CSS Variables
- **JavaScript ES6+**

## 📱 Responsive Design

Fully responsive design with breakpoints for desktop, tablet, and mobile devices.

## 🚀 Production Build

```bash
npm run build
```

## 📄 License

Open source project available under MIT License.


