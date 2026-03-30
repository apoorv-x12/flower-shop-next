# GitHub Pages Deployment Guide

## Overview

This Next.js application is configured for automatic deployment to GitHub Pages using GitHub Actions CI/CD.

## Setup Instructions

### 1. **Repository Setup**

- Push your code to GitHub (main or master branch)
- Ensure your repository is public or has GitHub Pages enabled in settings

### 2. **GitHub Pages Settings**

1. Go to your repository → **Settings** → **Pages**
2. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
3. Save the settings

### 3. **First Deployment**

1. The workflow will automatically trigger on push to `main` or `master` branch
2. Go to **Actions** tab to see the deployment progress
3. Once completed, your site will be available at:
   - **For user/organization sites**: `https://<username>.github.io/`
   - **For project repositories**: `https://<username>.github.io/<repo-name>/`

### 4. **Custom Domain (Optional)**

To use a custom domain:

1. In Settings → Pages, enter your custom domain under "Custom domain"
2. Add a CNAME file pointing to your GitHub Pages URL
3. Update DNS records with your domain provider

## How It Works

The workflow (`.github/workflows/deploy.yml`):

1. **Triggers on**:
   - Push to `main` or `master` branch
   - Pull requests to `main` or `master`

2. **Build Process**:
   - Checkouts code
   - Sets up Node.js 20.11.1
   - Installs dependencies with npm
   - Builds the static site
   - Uploads artifacts

3. **Deploy Process**:
   - Deploys to GitHub Pages (only on main/master push, not PRs)
   - Sets environment and outputs deployment URL

## Project Configuration

### `next.config.mjs`

- `output: 'export'` - Enables static HTML export for GitHub Pages
- `images: { unoptimized: true }` - Disables image optimization for static export

### What Was Changed

- ✅ Next.js configured for static export
- ✅ GitHub Actions workflow created
- ✅ Automatic deployment on push
- ✅ No server-side rendering needed

## Features

✓ **Automatic Deployment**: Deploys automatically on every push to main/master
✓ **Pull Request Checks**: Tests build on pull requests
✓ **Fast Builds**: Caching enabled for npm dependencies
✓ **Zero Configuration**: No additional setup needed after initial push

## Troubleshooting

### Build Fails

- Check **Actions** tab for error messages
- Ensure all npm dependencies are installed locally and `npm ci` works
- Verify `next.config.mjs` has correct export settings

### Site Not Updating

- Check GitHub Pages is enabled in Settings
- Verify the action succeeded (green checkmark in Actions)
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Allow 1-2 minutes after push for DNS propagation

### 404 on Navigation

- Ensure all routes are tested locally first
- Static export requires all dynamic routes to be pre-generated
- Check the build output for any errors

## Local Testing

Test the static export locally:

```bash
npm run build
npx serve -s out
```

Then open `http://localhost:3000` to verify the static site works correctly.

## Future Enhancements

If you need server functionality (API routes, form submissions):

- Consider using a third-party form service (Formspree, EmailJS, Netlify Forms)
- Or switch to Vercel/Netlify which support Next.js server features
- Or add an API backend separate from the static site

## Contact Form & Order Now Feature

The contact form is **fully functional** and automatically pre-populates when you click "Order Now" on any product. All animations and responsiveness are preserved.

### ✅ Features Implemented

- **Smart Product Selection**: Click "Order Now" → Message auto-fills with product details
- **Form Submission**: Uses Formspree for email handling (no server needed)
- **Real-time Feedback**: Success/error messages after submission
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Smooth Animations**: All reveal animations and transitions intact
- **Form Validation**: Required fields with proper error handling
- **Loading States**: Visual feedback while sending

### 🔧 Quick Setup (Formspree - 2 minutes)

1. **Sign up** at [formspree.io](https://formspree.io) (free)
2. **Create a form** and copy your Form ID
3. **Update** `components/ContactForm.js` line 35:
   ```javascript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```
4. **Test it** - Submit a message and check your email!

### Alternative Form Services

**EmailJS** (Client-side email)

```bash
npm install @emailjs/browser
```

- No backend required
- 200 emails/month free
- Add your Service ID in ContactForm.js

**Backend API**

- Create your own Node/Express/Python API
- Point `fetch()` in ContactForm.js to your endpoint
- Handles email sending on your server

**Netlify Forms** (if switching from GitHub Pages)

- Free with Netlify hosting
- No setup required

---

**Your site is now ready!** 🚀 Push your changes and watch GitHub Actions deploy automatically.

## Technical Implementation Details

### What Was Fixed

✅ **Order Now Functionality**

- Created client-side `ContactForm` component
- Proper form state management with React hooks
- Dynamic pre-population with product data
- Query parameter handling for static export

✅ **Form Submission**

- Integrated Formspree API for serverless email
- Async form handling with proper error boundaries
- Loading and success states
- Form validation before submission

✅ **Design Integrity**

- All Reveal animations preserved (scroll-triggered fade-in)
- Responsive flex layout maintained
- Hover states and transitions intact
- Mobile-first design working perfectly

✅ **GitHub Pages Compatibility**

- Static export fully configured
- All dynamic routes pre-generated
- Query parameters handled safely
- No server-side features required

### Component Architecture

```
app/contact/page.js (Server Component)
├── Loads product data via searchParams
└── Renders ContactForm (Client Component)
    ├── State management for form data
    ├── Formspree API integration
    └── Real-time feedback UI
```

### Files Modified/Created

- **components/ContactForm.js** - New client form component
- **app/contact/page.js** - Updated to use ContactForm
- **components/ProductCard.js** - Maintained animations
- **app/products/[id]/page.js** - Maintained responsiveness
- **.github/workflows/deploy.yml** - GitHub Actions workflow

### Animations & Transitions Preserved

- **Reveal Component**: Intersection Observer + scroll animations
- **Hover Effects**: All transform and shadow transitions
- **Focus States**: Input ring effects on keyboard navigation
- **Loading States**: Button feedback during submission
- **Success/Error**: Animated status messages

### Responsive Breakpoints

- **Mobile**: Full width, stacked layout
- **Tablet** (md): Two-column on contact page
- **Desktop** (lg): Optimized spacing and sizing

---
