# Instructions for Adding Real Reviews to reviews.html

## Overview
When you're ready to replace placeholder reviews with actual customer testimonials, follow these guidelines to maintain consistency, compliance, and accessibility.

## HTML Structure for Each Review

Use this exact structure for each review card:

```html
<div class="review-card-full">
  <div class="stars" aria-hidden="true">★★★★★</div>
  <blockquote class="review-text">
    <p>"{Exact review text, trimmed only for length—no edits to wording}"</p>
    <footer class="review-author">— {Name or Initials}, {source e.g., Google/Experience.com/Facebook}</footer>
  </blockquote>
  <p class="review-meta">Source: <a href="{link to the review or profile}" target="_blank" rel="noopener noreferrer">{Source Name}</a></p>
</div>
```

## Star Rating Guidelines

- **5-star review**: `★★★★★`
- **4-star review**: `★★★★☆`
- **3-star review**: `★★★☆☆`
- Always include `aria-hidden="true"` on the stars div for screen reader accessibility

## Content Guidelines

### Review Text
- **Use exact wording** from the original review
- **Only trim for length** if necessary—do NOT edit or rephrase
- Keep quotation marks around the review text
- If a review contains promises or rate claims, include it **verbatim** (don't amplify elsewhere)

### Attribution
- Use reviewer's name or initials as they appear on the original platform
- Include source platform (Google, Experience.com, Facebook, Yelp, etc.)
- Format: `— J.S., Google` or `— Jennifer Smith, Experience.com`

### Source Links
- Link directly to the review or reviewer profile when possible
- Always use `target="_blank" rel="noopener noreferrer"` for external links
- Format: `Source: <a href="URL" target="_blank" rel="noopener noreferrer">Google Reviews</a>`

## Optional Enhancements

### Review Images/Screenshots
If adding images of reviews:
```html
<div class="review-image">
  <img src="images/reviews/review-google-js.jpg"
       alt="Google review from J.S.: very responsive and supportive"
       loading="lazy">
</div>
```
- Use optimized JPG or WebP format
- Include descriptive alt text that summarizes the review
- Add `loading="lazy"` for performance

### Review Schema (Structured Data)
Optional: Add Review schema markup for SEO benefits. Example:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": "Jennifer S."
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "reviewBody": "Exact review text here",
  "datePublished": "2024-11-15",
  "itemReviewed": {
    "@type": "Service",
    "name": "Mortgage Loan Services",
    "provider": {
      "@type": "Person",
      "name": "Mitch Blyler"
    }
  }
}
</script>
```

## Compliance Requirements

1. **No edits to review wording** (except trimming for length)
2. **External links must have** `target="_blank" rel="noopener noreferrer"`
3. **Do not add guarantees or rate claims** beyond what's in the original review
4. **Maintain accessibility** with proper semantic HTML (`<blockquote>`, `<footer>`)
5. **Keep star ratings accurate** to the original review

## Accessibility Checklist

- ✅ Stars use `aria-hidden="true"` (decorative)
- ✅ Review text in `<blockquote>` element
- ✅ Author attribution in `<footer>` element
- ✅ External links have proper `rel` attributes
- ✅ Images have descriptive alt text
- ✅ Proper heading hierarchy maintained

## Example: Complete Review Card

```html
<div class="review-card-full">
  <div class="stars" aria-hidden="true">★★★★★</div>
  <blockquote class="review-text">
    <p>"Mitch was incredibly helpful throughout our entire home buying process. He explained every step clearly and made sure we understood all our options. His response time was excellent—often answering questions within minutes. We couldn't have asked for a better mortgage experience!"</p>
    <footer class="review-author">— Jennifer S., Google</footer>
  </blockquote>
  <p class="review-meta">Source: <a href="https://www.google.com/search?q=Mitchell+Blyler+Mortgage+Reviews" target="_blank" rel="noopener noreferrer">Google Reviews</a></p>
</div>
```

## Where to Find the Reviews Page

**File location**: `reviews.html`
**Current status**: Contains placeholder reviews that need to be replaced

## Process Summary

1. Collect real reviews from Google, Experience.com, Facebook, Yelp, etc.
2. For each review, create a `review-card-full` div using the structure above
3. Copy exact review text (trim only if necessary)
4. Add proper star rating (adjust if not 5 stars)
5. Include reviewer name/initials and source
6. Link to the original review or platform profile
7. Test accessibility and links
8. Commit and push changes

---

**Last Updated**: 2025-12-02
**Related Files**: `reviews.html`, `css/pages.css` (review card styling)
