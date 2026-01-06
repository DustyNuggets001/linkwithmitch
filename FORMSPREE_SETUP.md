# Formspree Setup Instructions

## Step 1: Create Your Formspree Account
1. Go to https://formspree.io
2. Click "Get Started" or "Sign Up"
3. Sign up with your email (mitchell.blyler@presidential.com)
4. Verify your email

## Step 2: Create a New Form
1. Once logged in, click "New Form"
2. Name it: "LinkWithMitch Contact Form"
3. Set email to: mitchell.blyler@presidential.com
4. Click "Create Form"

## Step 3: Get Your Form ID
After creating the form, you'll see a form ID that looks like:
`xyzabc12`

The full endpoint will be:
`https://formspree.io/f/xyzabc12`

## Step 4: Update Your Website
1. Open `contact.html` in your code editor
2. Find this line (around line 64):
   ```html
   <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" style="text-align: left;">
   ```
3. Replace `YOUR_FORMSPREE_ID` with your actual form ID
4. Save the file

## Step 5: Commit and Push
```bash
cd "C:\Users\MitchellBlyler\Documents\Linkwithmitch"
git add contact.html
git commit -m "Add Formspree form ID"
git push
```

## Step 6: Test Your Form
1. Wait for Railway to deploy (2-3 minutes)
2. Visit https://linkwithmitch-production.up.railway.app/contact.html
3. Fill out and submit the test form
4. Check your email - you should receive the submission!

## Step 7: Configure Formspree Settings (Optional but Recommended)

### Custom Thank You Page
In Formspree dashboard → Form Settings → Submissions:
- Redirect URL: `https://linkwithmitch-production.up.railway.app/contact.html?success=true`

### Spam Protection
Already included in your form:
- ✅ Honeypot field (_gotcha)
- ✅ reCAPTCHA (enable in Formspree settings for extra protection)

### Email Notifications
In Formspree → Notifications:
- ✅ Email notifications are ON by default
- Add custom notification template if desired

## Step 8: Connect to Bonzo (Optional - Later)

### Option A: Manual Webhook
1. In Formspree → Webhooks
2. Add webhook URL: (get this from Bonzo support)
3. Formspree will POST form data to Bonzo automatically

### Option B: Zapier Integration
1. Create free Zapier account
2. Trigger: "New Formspree Submission"
3. Action: "Create Lead in Bonzo"
4. Map fields:
   - Name → Name
   - _replyto → Email
   - phone → Phone
   - inquiry_type → Lead Type
   - message → Notes

## Features Included in Your Form:
- ✅ Spam protection (honeypot field)
- ✅ Custom subject line: "New Contact Form Submission - LinkWithMitch"
- ✅ Reply-to field (emails will have user's email as reply-to)
- ✅ Clean field names for easy reading
- ✅ Mobile responsive
- ✅ Matches your site design

## Free Tier Limits:
- 50 submissions/month (upgrade to unlimited for $10/mo if needed)
- Email notifications
- Spam filtering
- File uploads (if you add them later)

## Questions?
Contact Formspree support: https://help.formspree.io/
