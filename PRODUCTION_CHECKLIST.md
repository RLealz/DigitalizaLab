# Production-Ready React Checklist

A practical guide to avoid common mistakes when vibe-coding React apps.
Based on real fixes applied to the DigitalizaLab project.

---

## Table of Contents

1. [Security](#1-security)
2. [SEO & Meta Tags](#2-seo--meta-tags)
3. [Accessibility (a11y)](#3-accessibility-a11y)
4. [Code Quality & Architecture](#4-code-quality--architecture)
5. [Performance](#5-performance)
6. [Deployment](#6-deployment)
7. [Quick Pre-Deploy Checklist](#7-quick-pre-deploy-checklist)

---

## 1. Security

### Problem: No Security Headers

Vibe-coded apps almost never include security headers. Without them, your site is
vulnerable to clickjacking, XSS, MIME sniffing, and more.

**What to do:** Create a `vercel.json` (or equivalent for your host) with these headers:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" },
        { "key": "Content-Security-Policy", "value": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'" }
      ]
    }
  ]
}
```

**What each header does:**

| Header | Prevents |
|--------|----------|
| `X-Content-Type-Options: nosniff` | Browser guessing file types (MIME sniffing attacks) |
| `X-Frame-Options: DENY` | Your site being embedded in iframes (clickjacking) |
| `Referrer-Policy` | Leaking full URLs to third parties |
| `Permissions-Policy` | Websites accessing camera/mic/location without consent |
| `Strict-Transport-Security` | Downgrade attacks from HTTPS to HTTP |
| `Content-Security-Policy` | XSS by restricting where scripts/styles can load from |

### Problem: External Links Without `rel` Attribute

```jsx
// BAD - opens a security hole
<a href="https://linkedin.com">LinkedIn</a>

// GOOD - prevents the opened page from accessing your window.opener
<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
```

**Why:** Without `rel="noopener noreferrer"`, the page you link to can access
your page's `window.opener` object and potentially redirect your users.

---

## 2. SEO & Meta Tags

### Problem: Bare-Bones `index.html`

Vite scaffolds a minimal `index.html`. AI code generators almost never add SEO tags.
Your site will be invisible to Google and have no preview when shared on social media.

**Minimum required tags:**

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO essentials -->
  <title>Brand | What You Do In 5-8 Words</title>
  <meta name="description" content="One compelling sentence, 150-160 characters max." />
  <link rel="canonical" href="https://yourdomain.com" />

  <!-- Open Graph (Facebook, LinkedIn, Slack, Discord previews) -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourdomain.com" />
  <meta property="og:title" content="Same as <title> or shorter" />
  <meta property="og:description" content="Same as meta description" />
  <meta property="og:image" content="https://yourdomain.com/og-image.png" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Same as og:title" />
  <meta name="twitter:description" content="Same as og:description" />
  <meta name="twitter:image" content="https://yourdomain.com/og-image.png" />

  <!-- Theme color (browser chrome on mobile) -->
  <meta name="theme-color" content="#0067cf" />
</head>
```

### Problem: Missing `robots.txt` and `sitemap.xml`

Search engines look for these files at the root of your domain.

**`public/robots.txt`:**
```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

**`public/sitemap.xml`:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 3. Accessibility (a11y)

Accessibility failures are the #1 most common issue in vibe-coded apps.
These aren't just best practices — they're legal requirements in many countries (ADA, EAA).

### Problem: Icon-Only Buttons With No Label

Screen readers announce "button" with no context for what it does.

```jsx
// BAD - screen reader says "button"
<button onClick={toggleMenu}>
  <Menu size={24} />
</button>

// GOOD - screen reader says "Open navigation menu, button"
<button
  type="button"
  onClick={toggleMenu}
  aria-label="Open navigation menu"
  aria-expanded={isOpen}
  aria-controls="mobile-menu"
>
  <Menu size={24} aria-hidden="true" />
</button>
```

**Key rules:**
- Every interactive element needs a visible label OR `aria-label`
- Icons inside buttons should have `aria-hidden="true"` (the button's label describes them)
- Toggle buttons need `aria-expanded` to announce their current state
- Use `aria-controls` to link a button to the panel it controls

### Problem: Icon-Only Links (Social Media)

```jsx
// BAD - screen reader says "link"
<a href="https://linkedin.com">
  <Linkedin size={20} />
</a>

// GOOD - screen reader says "Follow us on LinkedIn, link"
<a
  href="https://linkedin.com"
  aria-label="Follow us on LinkedIn"
  target="_blank"
  rel="noopener noreferrer"
>
  <Linkedin size={20} aria-hidden="true" />
</a>
```

### Problem: No Skip Navigation Link

Keyboard users have to tab through your entire navbar on every page load.

```jsx
// Add BEFORE your <nav> element
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md"
>
  Skip to main content
</a>

// Add id to your <main> element
<main id="main-content">
```

### Problem: Missing `type` on Buttons

```jsx
// BAD - defaults to type="submit", can accidentally submit forms
<button onClick={handleClick}>Click</button>

// GOOD - explicit type prevents accidental form submission
<button type="button" onClick={handleClick}>Click</button>
```

**Rule:** Always set `type="button"` unless the button is intentionally submitting a form.

### Problem: Dead Links (`href="#"`)

```jsx
// BAD - traps focus, confusing for screen readers, bad for SEO
<a href="#">About</a>

// GOOD - use section anchors if no routing
<a href="#about">About</a>

// ALSO GOOD - use a button if it triggers an action, not navigation
<button type="button" onClick={scrollToAbout}>About</button>
```

### Accessibility Quick Rules

| Element | Required |
|---------|----------|
| `<button>` without visible text | `aria-label` |
| `<a>` without visible text | `aria-label` |
| Toggle button (hamburger, accordion) | `aria-expanded`, `aria-controls` |
| Decorative images/icons | `aria-hidden="true"` |
| `<nav>` element | `aria-label` if multiple navs exist |
| `<main>` element | `id` for skip-nav target |
| Interactive regions | Visible focus indicator (`:focus-visible`) |

---

## 4. Code Quality & Architecture

### Problem: No Error Boundary

If any component throws an error, your entire app white-screens.
React provides error boundaries for this exact reason.

```jsx
// src/components/ui/ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
    // Send to your error tracking service (Sentry, etc.)
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Something went wrong</h1>
          <button onClick={this.handleRetry}>Try Again</button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Wrap your app:
// <ErrorBoundary><App /></ErrorBoundary>
```

### Problem: Hardcoded Data Inside Components

AI generators put arrays of data directly inside component files.
This makes content changes require touching component logic.

```jsx
// BAD - data and presentation mixed together
const Features = () => {
  const features = [
    { title: 'Feature 1', description: '...' },
    { title: 'Feature 2', description: '...' },
  ];
  return <div>{features.map(...)}</div>;
};

// GOOD - separate data from presentation
// src/data/features.js
export const features = [
  { title: 'Feature 1', description: '...' },
  { title: 'Feature 2', description: '...' },
];

// src/components/sections/Features.jsx
import { features } from '../../data/features';
const Features = () => <div>{features.map(...)}</div>;
```

**Why this matters:**
- Content editors can update `src/data/` without touching component code
- Consistent data shape across the app
- Easier to migrate to a CMS later (just change the import source)
- Cleaner diffs in pull requests

### Problem: Using Array Index as React Key

```jsx
// BAD - causes bugs with reordering, filtering, or animations
{items.map((item, index) => (
  <div key={index}>{item.title}</div>
))}

// GOOD - use a stable, unique identifier
{items.map((item) => (
  <div key={item.id}>{item.title}</div>
))}

// OK if items have no id but have a unique field
{items.map((item) => (
  <div key={item.title}>{item.title}</div>
))}
```

### Problem: No PropTypes or TypeScript

Without type checking, you get silent failures instead of clear error messages.

```jsx
// Minimum viable PropTypes for a component
import PropTypes from 'prop-types';

const Button = ({ children, variant, type, disabled, onClick, className }) => {
  // ...component code
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
```

**If starting a new project**, use TypeScript instead — it catches errors at build time,
not just in dev mode.

### Problem: Unused Files Left Behind

Vite scaffolds `App.css` with demo styles. AI generators rarely clean it up.

**Rule:** After scaffolding, delete everything you're not using:
- `App.css` (if using Tailwind)
- `assets/react.svg` (if not using it)
- Default `<header>` content in `App.jsx`
- Any boilerplate comments

### Problem: Inconsistent Data Shapes

```jsx
// BAD - fullQuote only exists on one item, never rendered
const testimonials = [
  { quote: "...", author: "Alice", fullQuote: "..." },  // has fullQuote
  { quote: "...", author: "Bob" },                       // doesn't have fullQuote
  { quote: "...", author: "Carol" },                     // doesn't have fullQuote
];

// GOOD - every item has the same shape
const testimonials = [
  { quote: "Full quote text here.", author: "Alice" },
  { quote: "Full quote text here.", author: "Bob" },
  { quote: "Full quote text here.", author: "Carol" },
];
```

---

## 5. Performance

### Problem: Infinite Animations Running Constantly

AI generators love `repeat: Infinity` animations. These run 24/7, draining battery
and using GPU resources even when the user can't see them.

```jsx
// BAD - runs forever, even on low-power devices
<motion.div
  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
  transition={{ duration: 20, repeat: Infinity }}
/>

// GOOD - respect user preferences
import { useReducedMotion } from 'framer-motion';

const MyComponent = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={shouldReduceMotion ? {} : { scale: [1, 1.1, 1] }}
      transition={shouldReduceMotion ? {} : { duration: 20, repeat: Infinity }}
      className="will-change-transform"  // hint browser to optimize
    />
  );
};
```

### Problem: No Global Reduced-Motion Fallback

Even if you handle Framer Motion, CSS animations and transitions also need to respect
the user's preference.

```css
/* Add to your global CSS (index.css) */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Problem: Blur Effects Without GPU Hints

Large `blur-3xl` elements cause expensive repaints.

```jsx
// BAD
<div className="blur-3xl" />

// GOOD - tells the browser to composite on GPU
<div className="blur-3xl will-change-transform" />
```

### Problem: No Focus Styles for Keyboard Users

Tailwind's `focus:ring` is good, but add a global `:focus-visible` fallback
so nothing ever lacks a visible focus indicator.

```css
/* Global fallback in index.css */
:focus-visible {
  outline: 2px solid #0067cf;
  outline-offset: 2px;
}
```

---

## 6. Deployment

### Asset Caching

Static assets (JS, CSS, images) built by Vite already have content hashes in their
filenames. Tell the CDN to cache them forever:

```json
{
  "source": "/assets/(.*)",
  "headers": [
    { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
  ]
}
```

### SPA Fallback

Single-page apps need all routes to serve `index.html`:

```json
{
  "rewrites": [
    { "source": "/((?!assets/).*)", "destination": "/index.html" }
  ]
}
```

---

## 7. Quick Pre-Deploy Checklist

Run through this before every deploy:

### Security
- [ ] Security headers configured (CSP, X-Frame-Options, HSTS, etc.)
- [ ] All external links have `rel="noopener noreferrer"`
- [ ] No API keys, secrets, or credentials in source code
- [ ] No `dangerouslySetInnerHTML` without sanitization

### SEO
- [ ] `<title>` is descriptive (not "Vite + React")
- [ ] `<meta name="description">` is set
- [ ] Open Graph tags are set (og:title, og:description, og:image)
- [ ] Twitter Card tags are set
- [ ] `robots.txt` exists in `public/`
- [ ] `sitemap.xml` exists in `public/`
- [ ] Canonical URL is set

### Accessibility
- [ ] Every button has `type="button"` (unless it submits a form)
- [ ] Every icon-only button/link has `aria-label`
- [ ] Toggle buttons have `aria-expanded`
- [ ] Decorative elements have `aria-hidden="true"`
- [ ] Skip-nav link exists
- [ ] `<main>` has an `id` for skip-nav
- [ ] No `href="#"` dead links
- [ ] Focus indicators are visible on all interactive elements
- [ ] Color contrast passes WCAG AA (4.5:1 for text)

### Code Quality
- [ ] Error boundary wraps the app
- [ ] No array index used as React `key` (use stable IDs)
- [ ] Data is separated from components (`src/data/` directory)
- [ ] PropTypes or TypeScript on all components
- [ ] No unused files (App.css, template leftovers)
- [ ] All data arrays have consistent shapes
- [ ] ESLint passes with zero errors
- [ ] Build completes with zero warnings

### Performance
- [ ] `prefers-reduced-motion` is respected (CSS + JS)
- [ ] Infinite animations have `useReducedMotion` guard
- [ ] Heavy effects (blur, shadow) use `will-change-transform`
- [ ] Smooth scroll is set in CSS
- [ ] Static assets have cache headers configured
- [ ] No unused CSS files inflating bundle

### Files to Create for Every Project

```
your-project/
├── public/
│   ├── robots.txt          # Search engine rules
│   └── sitemap.xml         # Page listing for crawlers
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── ErrorBoundary.jsx  # Crash fallback
│   └── data/               # Content separated from components
│       ├── navigation.js
│       └── ...
├── vercel.json             # Security headers + caching
└── index.html              # With full SEO meta tags
```

---

## Common AI-Generated Code Smells to Watch For

| Smell | Why It's Bad | Fix |
|-------|-------------|-----|
| `href="#"` everywhere | Dead links, bad UX, bad SEO | Use section anchors or buttons |
| `key={index}` in `.map()` | Breaks animations, reordering | Use `key={item.id}` or `key={item.title}` |
| No `type` on `<button>` | Defaults to submit, causes bugs | Add `type="button"` |
| Data arrays inside components | Hard to maintain, messy diffs | Extract to `src/data/` |
| No error boundary | White screen on any error | Wrap app in `<ErrorBoundary>` |
| Missing ARIA on icon buttons | Invisible to screen readers | Add `aria-label` |
| `repeat: Infinity` animations | Battery drain, motion sickness | Guard with `useReducedMotion` |
| Scaffold files left behind | Dead code, confusing | Delete `App.css`, unused assets |
| No meta tags | Invisible to search, no previews | Add OG + Twitter + description |
| No security headers | XSS, clickjacking, sniffing | Add `vercel.json` or equivalent |

---

*Generated from fixes applied to the DigitalizaLab project.*
