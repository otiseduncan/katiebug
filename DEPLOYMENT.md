# Deployment Guide - Katie Bugs Country Kitchen

This guide will help you deploy your ecommerce website to the web.

## Quick Start - GitHub Pages (FREE)

The easiest way to get your site online:

### Step 1: Push to GitHub
```bash
# From your project directory
git add .
git commit -m "Complete ecommerce site"
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub: https://github.com/otiseduncan/katiebug
2. Click "Settings"
3. Scroll to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be available at: `https://otiseduncan.github.io/katiebug/`

That's it! Your site is now live! ??

## Other Deployment Options

### Option 1: Netlify (Recommended - FREE)
1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Click "Deploy site"
- **Pros**: Custom domain, automatic HTTPS, continuous deployment
- **URL**: `your-site-name.netlify.app`

### Option 2: Vercel (FREE)
1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
- **Pros**: Very fast, automatic HTTPS, great performance
- **URL**: `your-site-name.vercel.app`

### Option 3: Traditional Web Hosting
Upload these files to any web host via FTP:
- index.html
- styles.css
- script.js
- logo.svg
- README.md

## Adding a Custom Domain

### For GitHub Pages:
1. Buy a domain (GoDaddy, Namecheap, Google Domains)
2. In your domain settings, add these DNS records:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: otiseduncan.github.io
   ```
3. In GitHub Settings > Pages, enter your custom domain
4. Check "Enforce HTTPS"

### For Netlify/Vercel:
1. Go to domain settings in your dashboard
2. Click "Add custom domain"
3. Follow the instructions to update your DNS

## Adding Your Actual Logo

Replace the placeholder logo:
1. Save your ladybug chef logo as `logo.png` or `logo.svg`
2. Place it in the project root directory
3. If using PNG, update `index.html` line 19 to: `<img src="logo.png" ...>`
4. Commit and push:
   ```bash
   git add logo.png
   git commit -m "Add actual logo"
   git push
   ```

## Setting Up Real Payments

To accept actual payments, you'll need to:

### 1. Choose a Payment Processor
- **Stripe** (recommended): https://stripe.com
- **PayPal**: https://paypal.com/business
- **Square**: https://squareup.com

### 2. Add Backend
You'll need a server to process payments securely. Options:
- **Netlify Functions** (serverless, easy)
- **Vercel Serverless Functions**
- **Node.js server** (Heroku, DigitalOcean, AWS)

### 3. Example with Stripe + Netlify Functions
```bash
npm install stripe
```

Create `netlify/functions/create-checkout.js`:
```javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const { items } = JSON.parse(event.body);
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items,
    mode: 'payment',
    success_url: 'https://yoursite.com/success',
    cancel_url: 'https://yoursite.com/cancel',
  });
  
  return {
    statusCode: 200,
    body: JSON.stringify({ url: session.url })
  };
};
```

## Email Setup

To receive order notifications:

### Option 1: EmailJS (FREE)
1. Sign up at https://emailjs.com
2. Create email template
3. Add to your `script.js`:
```javascript
emailjs.send("service_id", "template_id", {
  order: JSON.stringify(cart),
  total: total
});
```

### Option 2: Formspree (FREE)
1. Sign up at https://formspree.io
2. Update contact form action:
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

## Analytics

Track your visitors:

### Google Analytics (FREE)
Add to `<head>` in index.html:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## SEO Optimization

Improve search engine rankings:

### 1. Update Meta Tags
Add to `<head>`:
```html
<meta name="description" content="Homemade jams, preserves, and baked goods from Katie Bugs Country Kitchen">
<meta name="keywords" content="homemade jam, preserves, country kitchen, baked goods">
<meta property="og:title" content="Katie Bugs Country Kitchen">
<meta property="og:description" content="Homemade Goodness from Our Kitchen to Yours">
<meta property="og:image" content="https://yoursite.com/logo.png">
```

### 2. Create sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 3. Submit to Google
- Google Search Console: https://search.google.com/search-console

## Security Checklist

- ? HTTPS enabled (automatic with GitHub Pages, Netlify, Vercel)
- ? No sensitive data in JavaScript
- ? Payment processing server-side only
- ? Regular backups of customer data
- ? Privacy policy page
- ? Terms of service page

## Maintenance

Regular tasks:
1. **Update products** - Edit `script.js` products array
2. **Check orders** - Monitor your email/dashboard
3. **Update prices** - Modify price values in products
4. **Add seasonal items** - Update products for holidays
5. **Backup** - Keep copies of custom changes

## Support

If you need help:
1. Check the README.md file
2. Review this deployment guide
3. Search GitHub issues
4. Contact: support@yoursite.com

## Going Further

Consider these enhancements:
- ?? Email newsletter signup
- ?? Product search functionality
- ? Customer reviews
- ?? Progressive Web App (PWA)
- ?? Shipping calculator
- ?? Multiple payment methods
- ?? Customer accounts
- ?? Order tracking
- ?? Gift cards
- ??? Discount codes

---

**Your site is ready to go live!** ??

Just push to GitHub and enable GitHub Pages, or deploy to Netlify/Vercel with one click.
