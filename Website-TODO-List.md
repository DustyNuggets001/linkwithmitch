# Link With Mitch - Website To-Do List
**Quick Reference Guide**

---

## 🔥 IMMEDIATE PRIORITIES (This Week)

### ⚡ BLINQ INTEGRATION - ✅ COMPLETE!
- [x] **Get your Blinq card URL** - ✅ DONE! https://blinq.me/gQqni4m3dLJW
- [x] **Download your Blinq QR code** as PNG from Blinq dashboard - ✅ DONE!
- [x] **Save QR code** to `/images/mitch-blinq-qr.png` in your website folder - ✅ DONE!
- [x] **Find & Replace** in all HTML files - ✅ DONE! Updated 28+ files (32 instances)
  - ✅ index.html, about.html, contact.html, apply.html, faq.html, loan-programs.html
  - ✅ military-pcs.html, pcs/index.html, pcs/kings-bay.html, and 19 other pages
- [ ] **Test** the "Save Contact Card" buttons and QR code on mobile

**SUCCESS:** Blinq integration is fully operational across the entire site! QR code displays on contact page.

**Where Blinq appears:**
- ✅ contact.html - Full "Save Contact" section with QR code
- ✅ about.html - "Save My Contact Card" button in CTA section
- ✅ index.html - Subtle link below hero buttons
- ✅ All pages - Footer link "Save Mitch's digital business card"

**Tracking:** All Blinq links include UTM parameters so you can see which pages drive the most saves!

### Content Pages - ✅ ALL COMPLETE!
- [x] **military-pcs.html** - ✅ COMPLETE! PCS relocation info, second-tier entitlement, links to base guides
- [x] **dpa-hub.html** - ✅ COMPLETE! Georgia Dream, FHLBank, Essex programs with 8 service area cards
- [x] **resources.html** - ✅ COMPLETE! Mortgage calculators, guides, checklists, blog section
- [x] **reviews.html** - ✅ COMPLETE! Reviews page with real client testimonials
  - ✅ **DONE:** Placeholder reviews replaced with actual client feedback!

### 📍 PCS Base Guides (NEW!)
**Status:** Hub created at `/pcs/` with 1 complete guide + 9 templates ready

- [x] **Kings Bay (Complete)** - `/pcs/kings-bay.html` - Full guide with BAH, neighborhoods, schools
- [ ] **NAS Jacksonville, FL** - Copy kings-bay.html, update content (BAH $2,112, Jax Beach area)
- [ ] **NS Mayport, FL** - Copy kings-bay.html, update content (BAH $2,112, Atlantic Beach area)
- [ ] **NS Norfolk, VA** - Copy kings-bay.html, update content (BAH $2,334, VA Beach/Chesapeake)
- [ ] **NB San Diego, CA** - Copy kings-bay.html, update content (BAH $3,279, Coronado/Chula Vista)
- [ ] **Camp Lejeune, NC** - Copy kings-bay.html, update content (BAH $1,728, Jacksonville NC)
- [ ] **Fort Liberty, NC** - Copy kings-bay.html, update content (BAH $1,740, Fayetteville area)
- [ ] **Fort Cavazos, TX** - Copy kings-bay.html, update content (BAH $1,686, Killeen/Harker Heights)
- [ ] **JBLM, WA** - Copy kings-bay.html, update content (BAH $2,532, Tacoma/Lakewood)
- [ ] **NAS Pensacola, FL** - Copy kings-bay.html, update content (BAH $1,902, Gulf Breeze/Pace)

**How to Complete Each Base:**
1. Copy `/pcs/kings-bay.html` to new filename (e.g., `nas-jacksonville.html`)
2. Update title, meta description with base name
3. Replace "Kings Bay" references with new base name throughout
4. Update BAH section with current rates (use DoD calculator)
5. Update Base Overview (location, mission, commands, base housing provider)
6. Update Neighborhoods section (research 3-5 popular areas with commute times, prices)
7. Update Commute & Transportation (gates, traffic patterns, tolls)
8. Update Schools (local school districts, on-base CDC info)
9. Update Spouse Employment (local employers, chamber of commerce)
10. Update Key Contacts (base housing, FFSC, relocation office, utilities)
11. Test all links and verify accuracy

### Photos & Images
- [ ] Add professional headshot photo (hero section, about page)
- [ ] Create Open Graph social sharing image (1200x630px) → save as `/images/mitch-blyler-og.jpg`
- [ ] Create favicon (16x16, 32x32) → save in root folder
- [ ] Add apple-touch-icon.png for mobile

---

## 📱 WEEK 1-2 PRIORITIES

### Forms & Integration
- [ ] Replace Formspree placeholder with real form backend on contact.html
  - Current: `action="https://formspree.io/f/YOUR_FORM_ID"`
  - Update with actual form endpoint
- [ ] Add spam protection (reCAPTCHA or hCaptcha)
- [ ] Set up auto-responder emails

### Analytics & Tracking
- [ ] Set up Google Analytics 4
  - Add tracking code to all pages before `</head>`
- [ ] Set up Google Search Console
  - Verify domain ownership
  - Submit sitemap.xml
- [ ] Create XML sitemap

### Mobile Menu
- [ ] Test mobile menu toggle functionality
  - Make sure js/main.js has the toggle code
  - Test on actual mobile devices

---

## 📊 WEEK 3-4 PRIORITIES

### SEO Basics
- [ ] Create robots.txt file
- [ ] Add XML sitemap.xml
- [ ] Submit sitemap to Google Search Console
- [ ] Verify all meta descriptions are under 160 characters
- [ ] Check that all images have alt text (when you add images)

### Tools & Calculators
- [ ] Add mortgage calculator to resources.html
  - Option 1: Embed from trusted provider
  - Option 2: Use iframe from calculator service
- [ ] Add VA loan eligibility checker link
- [ ] Add USDA eligibility map link

### Legal Pages
- [ ] Create privacy-policy.html
- [ ] Create terms.html (terms of service/disclaimer)
- [ ] Add cookie consent banner (if using analytics)

---

## 🎨 MONTH 2 PRIORITIES

### Design Improvements
- [ ] Replace emoji icons with professional SVG icons
- [ ] Add smooth scroll for anchor link navigation
- [ ] Add "Back to Top" button on long pages
- [ ] Test all pages on mobile devices (iPhone, Android)

### Performance
- [ ] Compress all images (use TinyPNG or similar)
- [ ] Convert images to WebP format
- [ ] Run Lighthouse audit in Chrome DevTools
- [ ] Fix any performance issues found

### Content
- [ ] Proofread all pages for typos
- [ ] Ensure NMLS numbers are correct everywhere
- [ ] Double-check loan program details are accurate

---

## 📈 MONTH 3+ PRIORITIES

### Marketing Setup
- [ ] Set up Google Business Profile (if not already done)
- [ ] Create email newsletter signup form
- [ ] Set up email marketing platform (Mailchimp, Constant Contact, etc.)
- [ ] Create social media posting schedule

### Blog/Content (Optional but Recommended)
- [ ] Create blog section for SEO
  - Start with 3-5 posts from ideas in PROJECT_TODO.md
  - Examples: "VA Loan Myths Debunked", "PCS to Kings Bay Guide"
- [ ] Add FAQ schema markup to faq.html

### Advanced Features
- [ ] Add live chat widget (optional)
- [ ] Create video content (loan officer intro)
- [ ] Add testimonial submission form
- [ ] Set up A/B testing for CTAs

---

## ✅ TESTING CHECKLIST (Before Any Major Update)

### Browser Testing
- [ ] Test on Chrome (Windows & Mac)
- [ ] Test on Firefox
- [ ] Test on Safari (Mac & iPhone)
- [ ] Test on Edge

### Mobile Testing
- [ ] Test on iPhone Safari
- [ ] Test on Android Chrome
- [ ] Verify all CTAs are easily tappable (44x44px minimum)

### Link Testing
- [ ] Click every navigation link
- [ ] Click all footer links
- [ ] Test phone number click-to-call
- [ ] Test email mailto links
- [ ] Verify Apply Now buttons go to correct page
- [ ] Check that external links open in new tab

### Content Review
- [ ] Spell check all pages
- [ ] Verify NMLS 2074110 is correct everywhere
- [ ] Check that Presidential Bank NMLS 421593 is in all footers
- [ ] Verify both phone numbers are correct:
  - Primary: (912) 291-8177
  - Legacy: (912) 270-5172

---

## 🔐 SECURITY & COMPLIANCE

### Security Basics
- [ ] Verify HTTPS is working (https://linkwithmitch.com)
- [ ] Check SSL certificate is valid
- [ ] Add security.txt file (optional but recommended)

### Compliance
- [ ] Review Equal Housing Opportunity requirements
- [ ] Ensure all disclaimers mention "not a commitment to lend"
- [ ] Verify NMLS numbers are displayed prominently
- [ ] Add "Licensed in All 50 States" where applicable

---

## 📞 QUICK CONTACT INFO REFERENCE

**Always use these exact numbers:**
- Primary Phone (clickable): (912) 291-8177
- Legacy Phone (SEO only): (912) 270-5172
- Email: mitchell.blyler@presidential.com
- NMLS: 2074110
- Company NMLS: 421593
- Office: 3441 Cypress Mill Rd Suite 102, Brunswick, GA 31520

---

## 🎯 MONTHLY MAINTENANCE

### Every Month
- [ ] Review Google Analytics for traffic patterns
- [ ] Check Google Search Console for errors
- [ ] Test all forms to ensure they're working
- [ ] Check for broken links using tool (screaming frog, etc.)
- [ ] Update any outdated content

### Every Quarter
- [ ] Update loan program information if anything changed
- [ ] Refresh testimonials/reviews
- [ ] Check competitor websites for ideas
- [ ] Review and update FAQ answers

### Every Year
- [ ] Renew SSL certificate (if not auto-renewing)
- [ ] Review all content for accuracy
- [ ] Update copyright year in footer (currently 2025)
- [ ] Review and update PROJECT_TODO.md

---

## 💡 QUICK WINS (Do These Anytime You Have 15 Minutes)

- [ ] Add one client testimonial to reviews.html
- [ ] Write one FAQ answer
- [ ] Optimize one image
- [ ] Update one page's meta description
- [ ] Add alt text to one image
- [ ] Fix one typo
- [ ] Test one feature on mobile

---

## 📝 NOTES & IDEAS

_Use this space to jot down ideas, feedback, or things you notice:_

-
-
-
-

---

**Last Updated:** December 2024
**Next Review Date:** _____________
**Priority Focus This Week:** _____________

**For detailed explanations and full task list, see: PROJECT_TODO.md**
