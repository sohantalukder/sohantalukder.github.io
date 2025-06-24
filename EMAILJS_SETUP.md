# EmailJS Setup Guide - Fix Gmail API Invalid Grant Error

## Issue
You're seeing the error: "Gmail_API: Invalid grant. Please reconnect your Gmail account"

This happens when your EmailJS service connection to Gmail has expired or needs to be reauthorized.

## Solution

### Step 1: Go to EmailJS Dashboard
1. Visit [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign in to your account

### Step 2: Reconnect Gmail Service
1. Go to **Email Services** in your dashboard
2. Find your existing Gmail service (service_1drssed)
3. Click on **Settings** or **Edit**
4. Click **Connect Account** or **Reconnect**
5. Follow the OAuth flow to reauthorize Gmail access
6. Make sure to grant all necessary permissions

### Step 3: Verify Template
1. Go to **Email Templates** 
2. Find your template (template_txiorsb)
3. Make sure it has the following variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{reply_to}}`

### Step 4: Test the Connection
1. In EmailJS dashboard, use the **Test** feature
2. Send a test email to verify everything works

## Alternative Solution: Create New Service

If reconnecting doesn't work, create a new service:

### Option 1: Use Gmail
1. Create a new Email Service
2. Choose Gmail
3. Connect your Gmail account
4. Update your environment variables with the new service ID

### Option 2: Use Alternative Email Service
Consider using these more reliable alternatives:

#### EmailJS with Outlook/Hotmail
1. Create new service with Outlook
2. More stable than Gmail for automated emails

#### SendGrid (Recommended for Production)
1. Sign up for SendGrid
2. Get API key
3. Switch to SendGrid service in EmailJS

## Update Environment Variables
After creating new service, update your `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID="your_new_service_id"
NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY="your_template_id"
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="your_public_key"
```

## Email Template Example
Create/update your EmailJS template with this structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply to: {{reply_to}}
```

## Testing
After setup:
1. Clear browser cache
2. Try sending a test message from your contact form
3. Check your inbox and spam folder

## Backup Plan
The updated contact form now includes fallback messaging that directs users to contact you directly at mdtalukder.sohan@gmail.com if EmailJS fails.

## Common Issues & Solutions

### Issue: "User not found"
- Solution: Make sure the Gmail account is the same one used in EmailJS

### Issue: "Template not found"
- Solution: Verify template ID in environment variables

### Issue: "Invalid API key"
- Solution: Regenerate public key in EmailJS dashboard

### Issue: Still getting errors
- Solution: Try using a different email service provider or contact EmailJS support

## Need Help?
If you continue having issues:
1. Check EmailJS documentation
2. Contact EmailJS support
3. Consider switching to a backend email solution using Nodemailer or SendGrid directly 