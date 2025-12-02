# Link With Mitch - Setup Instructions

## Critical Tasks Before Launch

### 1. Formspree Contact Form Setup

**Status:** ⚠️ REQUIRED - Contact form will not work until completed

**Location:** `contact.html` line 93

**Steps:**
1. Go to [formspree.io](https://formspree.io)
2. Sign up with email: `mitchell.blyler@presidential.com`
3. Create a new form project
4. Copy the form endpoint (looks like: `https://formspree.io/f/abc123xyz`)
5. Update `contact.html` line 93:
   ```html
   <!-- BEFORE -->
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

   <!-- AFTER (replace with your actual ID) -->
   <form action="https://formspree.io/f/YOUR_ACTUAL_ID" method="POST">
   ```
6. Test the form by submitting a test message
7. Check your email inbox for the test submission

**Formspree Free Plan:**
- 50 submissions/month
- Email notifications
- Spam filtering
- File uploads (if needed)

---

### 2. Add Missing Images

#### A. Open Graph Image (`images/mitch-blyler-og.jpg`)

**Purpose:** Preview image when sharing site on social media (Facebook, LinkedIn, Twitter)

**Specifications:**
- **Dimensions:** 1200px × 630px (exact - required by social platforms)
- **Format:** JPG or PNG
- **File size:** Under 1MB
- **Content suggestions:**
  - Professional photo of Mitch Blyler
  - Presidential Bank Mortgage logo
  - Text overlay: "VA Loan Specialist | Licensed in All 50 States"
  - Phone: (912) 291-8177
  - NMLS 2074110
  - Background: Presidential Bank navy (#002B5E) with gold accents (#C5A572)

**Tools to create:**
- Canva (easiest): Use "Facebook Post" template (1200×630)
- Photoshop/GIMP: Create 1200×630 canvas
- Online tool: [OG Image Generator](https://og-playground.vercel.app/)

**After creating:**
1. Save as `mitch-blyler-og.jpg`
2. Place in `images/` folder
3. Verify file size < 1MB
4. Test with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
5. Test with [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

#### B. Favicon (`images/favicon.png`)

**Purpose:** Browser tab icon, bookmarks icon

**Specifications:**
- **Dimensions:** 64px × 64px (or 32×32 minimum)
- **Format:** PNG with transparency
- **Content suggestions:**
  - Letter "M" in Presidential Bank navy
  - House icon
  - Presidential Bank logo mark
  - Simple, recognizable at small sizes

**Tools to create:**
- [Favicon.io](https://favicon.io/) - Free favicon generator
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Multi-size generator
- Photoshop/GIMP: 64×64 canvas with transparent background

**After creating:**
1. Save as `favicon.png` (64×64 or 32×32)
2. Place in `images/` folder
3. Optional: Also create `favicon.ico` (multi-size: 16, 32, 48)
4. Test by opening site in browser - check tab icon

---

## Pre-Launch Verification Checklist

### Forms & Functionality
- [ ] Formspree form ID updated in `contact.html`
- [ ] Submit test contact form and receive email
- [ ] Verify form warning box is visible
- [ ] Check all form fields work (Name, Email, Phone, Message)
- [ ] Confirm no sensitive data can be submitted

### Images & Assets
- [ ] OG image (`mitch-blyler-og.jpg`) exists in `images/`
- [ ] Favicon (`favicon.png`) exists in `images/`
- [ ] Equal Housing logo displays on all pages
- [ ] Test social sharing on Facebook (shows OG image)
- [ ] Test social sharing on LinkedIn (shows OG image)
- [ ] Browser tab shows favicon

### Navigation & Links
- [ ] Mobile menu opens/closes correctly
- [ ] All navigation links work
- [ ] "Begin Application" button goes to apply.html
- [ ] Phone number links open phone app: `tel:+19122918177`
- [ ] All external links open in new tabs
- [ ] PCS "Back to All Bases" links work

### Compliance Verification
- [ ] Search site for "Apply Now" - should be 0 results
- [ ] Search site for "Get Pre-Qualified" (as button) - should be 0 results
- [ ] Search site for "get you pre-qualified" - should be 0 results
- [ ] Educational disclaimers visible on all page footers
- [ ] Equal Housing logo visible on all page footers
- [ ] Contact form warning box visible

### Cross-Browser Testing
- [ ] Test on Chrome (desktop)
- [ ] Test on Firefox (desktop)
- [ ] Test on Safari (Mac/iOS)
- [ ] Test on Edge (Windows)
- [ ] Test on mobile Chrome (Android)
- [ ] Test on mobile Safari (iOS)
- [ ] Mobile navigation works on touchscreens

### Performance & SEO
- [ ] All pages load without console errors
- [ ] SSL certificate active (Railway auto-provisions)
- [ ] Site loads on https://linkwithmitch-production.up.railway.app
- [ ] No broken images (404 errors)
- [ ] No broken links (404 pages)

---

## Railway Deployment

**Auto-Deploy Status:** ✅ Active

- **Trigger:** Git push to `main` branch
- **URL:** https://linkwithmitch-production.up.railway.app
- **Deploy time:** ~2-3 minutes after push

**To deploy changes:**
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Railway automatically deploys the latest commit from the main branch.

---

## Git Repository

- **Repo:** https://github.com/DustyNuggets001/linkwithmitch.git
- **Branch:** main
- **Recent commits:**
  - `f79343b` - Fix: Replace remaining 'Get pre-qualified' on homepage
  - `4cdac45` - PHASE 1 FINAL: Remove remaining promise/guarantee language
  - `04f64d0` - PHASE 1: Critical Mortgage Compliance Updates

---

## Support Resources

### Formspree
- Dashboard: https://formspree.io/forms
- Documentation: https://help.formspree.io/

### Image Tools
- Canva: https://www.canva.com
- Favicon Generator: https://favicon.io/
- OG Image Playground: https://og-playground.vercel.app/

### Testing Tools
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
- Google Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

### Railway
- Dashboard: https://railway.app/
- Deployment logs: Check Railway dashboard for deploy status

---

## Phase 2 (Future Enhancements)

**Not required for launch, but recommended:**

1. **Reorder PCS Cards** - Prioritize complete guides first (Kings Bay, Fort Stewart, NAS Jacksonville)
2. **Add Image Lazy Loading** - When adding more images to pages
3. **Content Expansion** - Add more neighborhood details, photos, local resources
4. **SEO Optimization** - Meta descriptions, structured data enhancements
5. **Analytics** - Add Google Analytics or similar tracking
6. **Performance Optimization** - Minify CSS/JS, optimize images

---

## Contact

**Website Owner:** Mitch Blyler
**Email:** mitchell.blyler@presidential.com
**Phone:** (912) 291-8177
**NMLS:** 2074110

**Developer Notes:**
- All Phase 1 compliance updates completed ✅
- Zero non-compliant language remaining ✅
- Ready for launch pending Formspree setup + images ✅
