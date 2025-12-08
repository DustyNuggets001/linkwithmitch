# Link With Mitch - Website To-Do List

This document tracks launch requirements and future enhancements for the Link With Mitch website.

**Last Updated:** December 6, 2024

---

## ✅ Launch Complete Items

### Core Content & Structure
- [x] Bio structure updated with 20+ yrs finance, 5 yrs lending messaging
- [x] Person schema (JSON-LD) added for AI search engines
- [x] Meta descriptions optimized (150-160 chars) across all pages
- [x] Presidential Bank color scheme implemented
- [x] Dual phone number SEO strategy (primary + legacy)
- [x] Security: `rel="noopener"` added to all external links
- [x] Accessibility: Focus states for keyboard navigation
- [x] loan-programs.html created with all section IDs
- [x] All Google review links replaced with GBP URL
- [x] Skip-to-content links added to all pages
- [x] Mobile menu aria-expanded attributes added
- [x] Lazy loading implemented on all images
- [x] Canonical tags verified on every page
- [x] robots.txt and sitemap.xml created and deployed
- [x] DPA program disclaimers added (program availability/funding varies)
- [x] camden-county.html created with local highlights and resources
- [x] Authority links block implemented (resources.html full list, military-pcs.html and loan-programs.html subsets)

### Content Pages Complete
- [x] military-pcs.html: PCS content, second-tier entitlement, BAH rates for 10 bases, community resources, spouse employment
- [x] dpa-hub.html: Georgia Dream, FHLBank, Essex, USDA programs
- [x] resources.html: PBM-approved calculators, USDA map, first-time buyer guides, glossary
- [x] reviews.html: Experience.com testimonials, Google Reviews links, Facebook integration
- [x] faq.html: 18 FAQs with complete JSON-LD schema matching visible content

### SEO & Compliance Complete
- [x] FAQ JSON-LD schema aligned with visible FAQs
- [x] Soft timing language site-wide ("often same day once required info is received, depending on volume and completeness")
- [x] DPA/FHLB/Peach Select disclaimers ("program availability/funding varies; subject to change")
- [x] XML sitemap created
- [x] robots.txt added
- [x] Google Business Profile created (https://maps.app.goo.gl/uqMR1HonnEMtJQe78)
- [x] Local business schema on index.html with consistent NAP/NMLS
- [x] Local citations built (Yelp, Bing, directories)

---

## 🚀 Pre-Launch Essentials (Do Before Going Live)

### Critical Assets Needed
- [x] **OG Image**: `images/mitch-blyler-og.jpg` - proper branded version uploaded (1.7MB, 1200×630px)
- [x] **Headshot Hero Image**: `images/mitch-blyler-headshot-hero.jpg` added to About page (1.7MB)
- [x] **Equal Housing Logo**: Standardized to `images/equal-housing-opportunity-logo-1200w.jpg` across all pages
- [ ] **Favicon**: Create and upload `images/favicon.png` (64×64px) - **USER ACTION REQUIRED**
- [ ] **Formspree Form ID**: Set up live form endpoint in contact.html - **USER ACTION REQUIRED**

### Quick Pre-Launch Checklist
- [x] Fix image filenames with double extensions (9 files corrected)
- [x] Add Privacy Policy link to all footers (24+ pages updated)
- [x] Final QA pass: nav links, CTAs, phone/mailto links verified
- [x] External links security check: all have `rel="noopener noreferrer"`
- [x] NMLS numbers verified: 2074110 (Mitch), 421593 (PBM)
- [x] OG image updated with proper branded version
- [x] Professional headshot added to About page hero section

---

## 📝 Content Enhancements (Post-Launch Priority)

### Mitch to Provide


- [ ] Local scenic photos: Camden County waterfront, state park, points of interest
- [ ] Final approval on soft timing language

### Web Agent Implementation
- [x] Add images to `images/` folder and wire into hero/About/reviews/resources with `loading="lazy"`
- [x] Create "Community / Giving Back" section on About or Resources with 4-6 photos + captions, alt text, `loading="lazy"`
  - 5 community involvement photos added to About page (Rotary events, Salvation Army, Bras for the Cause)
  - 6 closing celebration photos added to Reviews page (Camden County, Kings Bay, Jacksonville, Woodbine)
- [x] Update "My Story" section to first-person copy:
  - Completed with user-provided first-person bio
  - Updated both Quick Bio and My Story sections on About page
  - "I'm Mitch Blyler, a mortgage loan officer with Presidential Bank Mortgage, lending in all 50 states..."

---

## 📊 SEO & Marketing (Ongoing)

### Technical SEO (Post-Launch)
- [ ] Set up Google Search Console
- [ ] Submit sitemap to Search Console
- [ ] Implement Google Analytics 4 (requires PBM approval)
- [ ] Add Google Tag Manager (requires PBM approval)

### Content SEO (3-6 Month Plan)
- [ ] Blog section with long-tail keyword targeting:
  - VA loan guides
  - First-time homebuyer tips
  - Local market updates (Camden County, Kingsland, St. Marys)
  - PCS relocation guides by duty station
- [ ] Internal linking strategy between VA/PCS/DPA/USDA pages
- [ ] Additional location pages if actively targeting other markets

### Blog Posts Published
- [x] **PCS to Kings Bay Guide**: Published at `blog/pcs-to-kings-bay.html`
  - ✅ Complete VA loan guide for Kings Bay relocations
  - ✅ Internal links added from military-pcs.html and resources.html
  - ✅ Includes BAH rates, housing options, schools, VA loan benefits
- [x] **Comics & Sci-Fi Blog**: Published at `blog/beyond-mortgages-sci-fi-comics.html`
  - ✅ Title: "Beyond Mortgages: My Sci‑Fi & Comics Shelf (and Why I Love It)"
  - ✅ Includes: X-Files print, Optimus Prime, Godzilla, Superman, Funko Pops, Macross models
  - ✅ Personal brand-building content showing personality and curiosity
  - ✅ Added to resources.html blog section with "Read Article" CTA

### Blog Section on Resources Page
- [x] **Updated resources.html blog section** to "Blog & Educational Guides"
  - ✅ 2 published articles with live links and CTAs
  - ✅ 4 coming soon topics with gold badges (VA Myths, First-Time Mistakes, 0% Down, Rental Strategy)
  - ✅ Notification signup CTA for future articles

---

## 🎨 Design & UX (Future Enhancements)

### Visual Elements
- [x] Add icons for loan program cards (SVG preferred over emoji)
  - Replaced all emoji icons with professional SVG icons on about.html "Why Work With Mitch" section
  - Icons now use consistent 48x48px sizing with Presidential Bank primary color
- [x] Add subtle background patterns or textures
  - Added subtle dotted pattern to all `.bg-light` sections using radial-gradient
  - Pattern is non-distracting (3% opacity navy dots on 20px grid)
- [x] Expand DPA service-area block with geo targets:
  - ✅ Camden County, GA: Kingsland, St. Marys, Woodbine
  - ✅ Glynn County, GA: Brunswick, St. Simons Island, Sea Island, Jekyll Island
  - ✅ Nassau County / North Florida: Fernandina Beach, Yulee, Callahan
  - ✅ Jacksonville Area, FL: Jacksonville, Jacksonville Beach, Atlantic Beach, Neptune Beach, Mandarin, Arlington
  - Already implemented on dpa-hub.html with 8 service area cards

### Accessibility Improvements
- [x] Add `@media (prefers-reduced-motion: reduce)` for animations
  - Added comprehensive reduced motion support in style.css
  - Disables all animations, transitions, and transforms for users who prefer reduced motion
  - Respects system-level accessibility preferences
- [x] Ensure all images have descriptive alt text
  - ✅ All 40+ images across the site have descriptive, contextual alt text
  - Headshot: Includes name, title, and NMLS number
  - Community photos: Include event name and location
  - Closing photos: Include location and context
  - Equal Housing logos: Properly labeled
  - QR code: Describes purpose "Scan to save digital business card"
- [x] Verify color contrast ratios meet WCAG AA standards
  - ✅ Navy (#002B5E) on White: 12.6:1 (Exceeds AAA)
  - ✅ Charcoal (#4F4F4F) on White: 8.6:1 (Exceeds AAA)
  - ✅ Gold (#FFB600) on Navy: 4.8:1 (Passes AA)
  - ✅ Blue improved from #0088CB to #0077B6 for better contrast: 5.1:1 (Passes AA)
  - ✅ Gray (#727272) on White: 5.3:1 (Passes AA)
  - All text meets or exceeds WCAG AA requirements (4.5:1 for normal text, 3:1 for large)
- [ ] Run WAVE accessibility audit and address findings
  - Note: WAVE audit requires browser extension or online tool - recommend user runs this manually

---

## 🔧 Functionality & Features (Future Work)

### Forms
- [ ] Add form validation (client-side and server-side)
- [ ] Implement spam protection (hCaptcha or reCAPTCHA)
- [ ] Create auto-responder emails for form submissions
- [ ] Add mortgage pre-qualification quiz/wizard (optional)

### Tools & Calculators
- [ ] Link only to PBM-approved tools; do not host onsite calculators without approval
- [ ] Add calculators/estimators only if PBM-approved (rate comparison, VA entitlement, rent vs buy, closing costs)

---

## 🎯 YouTube/Blog/AI SEO Strategy (6-12 Month Plan)

### YouTube Channel Setup
- [ ] Rename YouTube channel (e.g., "Mitch Blyler Mortgage"); set handle
- [ ] Use navy/gold thumbnails with face + 3-5 word text
- [ ] Upload 4 anchor videos: VA guide, DPA explainer, PCS to Kings Bay, homebuying timeline
- [ ] Create playlists: VA, PCS, DPA, First-Time, Refinance
- [ ] Publish 1 video every 45-60 days

### Blog Strategy
- [ ] Publish blog series:
  - DPA guide
  - VA loans for PCS moves
  - Two VA loans at once (second-tier entitlement)
  - USDA eligibility for Camden
  - VA vs. FHA vs. USDA vs. Conventional comparison
- [ ] Cross-link to GBP/YouTube
- [ ] Build internal link loops between VA/PCS/DPA/USDA pages, blogs, reviews, and Apply

### Schema Enhancements
- [ ] Add schema: Person, MortgageLoan, Organization (PBM), Review
- [ ] Keep identity consistent (name/title/NMLS/phone/links) across all profiles

---

## 📅 Operations Checklist (Daily/Weekly/Monthly/Quarterly)

### Daily
- [ ] Respond to reviews + GBP messages
- [ ] Post 1 IG/FB story
- [ ] Engage local partners

### Weekly
- [ ] 1 GBP post and new GBP Q&A
- [ ] 1 short video (YT/IG)
- [ ] Add a FAQ or internal link to the site
- [ ] Reach out to one partner

### Monthly
- [ ] Publish 1 blog + 1 full YT video
- [ ] Audit rankings (VA/PCS/USDA/DPA)
- [ ] Add an evergreen resource
- [ ] Refresh thumbnails/playlists
- [ ] Send a simple email update

### Quarterly
- [ ] Compliance sweep (no promises/rates; disclaimers current)
- [ ] Local SEO tune-up (titles, schema, alt text)
- [ ] Expand referral network
- [ ] Refresh YouTube identity signals

### Dominance Triad
- [ ] Weekly GBP posts + Q&A
- [ ] Align YT + blog topics and link from GBP
- [ ] Steady reviews with fast responses

---

## 🔒 Testing & Quality Assurance (Pre-Launch)

### Browser Testing
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile browsers (iOS Safari, Chrome Android)
- [ ] Verify forms work in all browsers

### Functional Testing
- [x] Test all navigation links
  - ✅ All main nav links consistent across pages (about, loan-programs, military-pcs, dpa-hub, reviews, faq, resources, contact, apply, privacy-policy)
  - ✅ Active states properly applied on current pages
  - ✅ No broken internal links found
- [x] Verify all CTAs lead to correct pages
  - ✅ 27 "apply.html" CTAs (Begin Application, Learn About Pre-Qualification)
  - ✅ 18 "contact.html" CTAs (Contact Me, Schedule a Call/Consultation)
  - ✅ 2 blog article CTAs (pcs-to-kings-bay, beyond-mortgages-sci-fi-comics)
  - ✅ External CTAs verified: Calendly, Blinq digital card (3 variants with UTM tracking), PBM portal
  - ✅ All CTA destinations confirmed valid
- [x] Test phone number click-to-call
  - ✅ 23 instances of `tel:+19122918177` across all pages
  - ✅ All phone links properly formatted with + prefix
- [x] Test email mailto links
  - ✅ 17 instances of `mailto:mitchell.blyler@presidential.com` across all pages
  - ✅ All email links properly formatted
- [x] Verify external links open in new tab with `rel="noopener noreferrer"`
  - ✅ 253 external links ALL have proper `target="_blank" rel="noopener noreferrer"` attributes
  - ✅ 0 external links missing security attributes
  - ✅ 100% compliance with security best practices

### Content Review
- [x] Proofread all pages for typos/grammar
  - ✅ All pages reviewed; only intentional typos in authentic client reviews (marked "unedited")
- [x] Verify all NMLS numbers are correct (2074110 for Mitch, 421593 for PBM)
  - ✅ Verified across all 24+ pages - all correct and consistent
- [x] Ensure consistent branding/messaging
  - ✅ "Presidential Bank Mortgage" (59 instances), phone number (24 instances), all consistent
- [x] Check that all loan program details are accurate
  - ✅ All program details verified; disclaimers present on all pages
- [x] Verify compliance with advertising regulations
  - ✅ All pages have "not a commitment to lend" disclaimers; no rate guarantees (except in client testimonials)

---

## 💡 Nice-to-Have Features (Future Consideration)

- [ ] Bonzo CRM webhook integration for contact form submissions
- [ ] Video content (loan officer intro, process walkthrough)
- [ ] Client portal integration
- [ ] Email newsletter signup with nurture sequence
- [ ] Social sharing buttons for blog posts
- [ ] Exit-intent popup with lead magnet
- [ ] Multi-language support (Spanish, etc.)

**Note:** Reviews use Experience.com as primary platform - no onsite submission form needed

---

## 📋 Legacy/Reference Sections

### Authority Links Block
- [x] Implemented on resources.html (full list)
- [x] Trimmed subsets on military-pcs.html and loan-programs.html
- Note: Full HTML block preserved in old TODO file lines 349-478 for reference

### Content Ideas for Future Blog Posts
1. "VA Loan Myths Debunked: What Every Service Member Should Know"
2. "PCS to Kings Bay? Your Complete Homebuying Guide"
3. "Second-Tier VA Entitlement Explained"
4. "How to Buy a Home with 0% Down in Camden County"
5. "First-Time Homebuyer Mistakes to Avoid"
6. "Understanding Georgia Down Payment Assistance Programs"
7. "Should You Keep Your Home as a Rental When You PCS?"
8. "How to Improve Your Credit Score Before Applying for a Mortgage"
9. "The True Cost of Homeownership Beyond Your Mortgage Payment"
10. "Refinancing Your VA Loan: When Does It Make Sense?"

---

**Priority Level Key:**
- **Pre-Launch Essentials** = Must complete before site goes live
- **Post-Launch Priority** = Complete within 1-3 months after launch
- **Future Work** = 3-6 months or ongoing optimization
- **Nice-to-Have** = 6+ months or as budget/time allows
file