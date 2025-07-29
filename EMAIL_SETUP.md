# Email Setup Guide

## Setup Required for Email Functionality

### 1. Create Environment File
Create a `.env.local` file in the root directory with:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=office@panda.ba
```

### 2. Gmail Setup (Recommended)
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an "App Password" (not your regular password)
3. Use that app password in `SMTP_PASS`

### 3. Alternative Email Services
- **SendGrid**: Free tier (100 emails/day)
- **Mailgun**: Free tier (5,000 emails/month)
- **Resend**: Free tier (3,000 emails/month)

## How It Works

### Form Submission
1. User fills out the price inquiry form
2. Form data is sent to `/api/price-inquiry`
3. Two emails are sent:
   - **Admin email**: Detailed inquiry to `office@panda.ba`
   - **Client email**: Confirmation to the user's email

### Email Templates
- **Professional HTML emails** with your branding
- **All form data included** in admin email
- **Confirmation message** sent to client
- **Responsive design** for mobile devices

## Testing
1. Fill out the form on `/upit-za-cijenu`
2. Check your email for the inquiry
3. Check the client's email for confirmation

## Deployment Notes
- Ensure your server allows SMTP connections
- Some hosting providers block SMTP (check with your host)
- Consider using a professional email service for production 