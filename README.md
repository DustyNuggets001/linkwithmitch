# Link With Mitch - Mortgage Website

Professional mortgage lending website for Mitch Blyler, NMLS 2074110, Presidential Bank Mortgage.

## 🌟 Features

- **Modern, Mobile-First Design** - Responsive across all devices
- **SEO Optimized** - Schema markup for LocalBusiness and FAQ pages
- **Fast Loading** - Optimized CSS and minimal JavaScript
- **Conversion Focused** - Clear CTAs throughout the site
- **Professional Styling** - Navy, gold, and white color scheme

## 📁 Site Structure

```
/
├── index.html              # Home page with hero, trust badges, reviews
├── about.html              # About Mitch - full bio and credentials
├── contact.html            # Contact form and information
├── apply.html              # Application page with Bonzo integration
├── faq.html                # FAQ with schema markup and toggles
├── loan-programs.html      # Loan programs overview (placeholder)
├── military-pcs.html       # Military/PCS support (placeholder)
├── dpa-hub.html            # Down payment assistance (placeholder)
├── reviews.html            # Client reviews (placeholder)
├── resources.html          # Resources and downloads (placeholder)
├── css/
│   ├── style.css           # Main stylesheet
│   └── pages.css           # Page-specific styles
└── js/
    ├── main.js             # Mobile menu and navigation
    └── faq.js              # FAQ toggle functionality
```

## 🚀 Deployment to Railway

Since you already have GitHub and Railway connected:

### Step 1: Commit Your Files

```bash
git add .
git commit -m "Initial website build with home, about, contact, apply, and FAQ pages"
git push origin main
```

### Step 2: Railway will automatically deploy

Railway should automatically detect the changes and deploy your site.

### Step 3: Configure Custom Domain

1. Go to your Railway project settings
2. Add your custom domain: `linkwithmitch.com`
3. Update DNS records as instructed by Railway

## 📝 Next Steps - Content to Add

### Priority 1: Update Placeholder Pages

The following pages were created as placeholders and need full content:

1. **loan-programs.html** - Add detailed loan program information
2. **military-pcs.html** - Add PCS relocation and military content
3. **dpa-hub.html** - Add down payment assistance content
4. **reviews.html** - Add client testimonials and reviews
5. **resources.html** - Add downloadable resources

### Priority 2: Integration Setup

1. **Bonzo Application Link** - Update in [apply.html](apply.html#L75)
   - Replace `https://www.bonzo.app` with your actual application link

2. **Calendly Integration** - Update in [contact.html](contact.html#L56)
   - Replace `https://calendly.com/mitchblyler` with your actual Calendly link

3. **Contact Form** - Update in [contact.html](contact.html#L72)
   - Replace `YOUR_FORM_ID` with your Formspree form ID
   - Or integrate with your preferred form service

4. **Email Address** - Update throughout site
   - Replace `mitch@linkwithmitch.com` with your actual email

### Priority 3: SEO & Analytics

1. Add Google Analytics tracking code
2. Add Google Search Console verification
3. Create and submit sitemap.xml
4. Add robots.txt file
5. Optimize meta descriptions for remaining pages

### Priority 4: Content Enhancements

1. Add professional headshot photo
2. Add closing photos for reviews page
3. Create downloadable PDF resources
4. Add blog section (optional)
5. Expand FAQ with more questions

## 🎨 Customization

### Colors

The site uses CSS variables defined in [css/style.css](css/style.css):

```css
--navy: #1a365d
--gold: #d4af37
--white: #ffffff
--gray-light: #f7fafc
```

Update these in the `:root` selector to change the color scheme.

### Logo

Add your logo by:
1. Saving logo image to `/images/logo.png`
2. Updating [index.html](index.html#L35) navigation

## 📱 Testing

Test the website locally:

```bash
# Option 1: Using Python
python -m http.server 8000

# Option 2: Using VS Code Live Server extension
# Right-click index.html > Open with Live Server
```

Visit `http://localhost:8000` in your browser.

## ✅ Completed Features

- [x] Home page with hero and CTAs
- [x] About page with full bio
- [x] Contact page with form
- [x] Apply page with application steps
- [x] FAQ page with schema markup and toggles
- [x] Mobile-responsive navigation
- [x] Professional styling
- [x] SEO-optimized structure
- [x] LocalBusiness schema markup
- [x] FAQ schema markup

## 📞 Support

For questions about the website:
- **Developer**: Claude Code
- **Owner**: Mitch Blyler
- **NMLS**: 2074110

## 🔒 Compliance Notes

- All pages include proper disclaimers
- NMLS number displayed in footer and navigation
- No rate guarantees or misleading claims
- Professional, compliant tone throughout
