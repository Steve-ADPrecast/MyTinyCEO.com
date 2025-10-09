# SendGrid Email Setup Guide for MyTinyCEO.com

This guide will walk you through setting up SendGrid for your contact form, step by step.

---

## Step 1: Create SendGrid API Key

1. **Log in to SendGrid**
   - Go to: https://app.sendgrid.com/

2. **Navigate to API Keys**
   - Go to: https://app.sendgrid.com/settings/api_keys
   - Click the **"Create API Key"** button (top right)

3. **Configure the API Key**
   - **Name:** `MyTinyCEO Website Contact Form`
   - **API Key Permissions:** Select **"Restricted Access"**
   - Scroll down to **"Mail Send"** and toggle it **ON**
   - All other permissions can stay OFF
   - Click **"Create & View"**

4. **Copy Your API Key**
   - ⚠️ **IMPORTANT:** Copy the API key immediately - you can only see it once!
   - It will look like: `SG.xxxxxxxxxxxxxxxxxx.yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy`
   - Save it somewhere temporarily (we'll use it in the next steps)

---

## Step 2: Verify Sender Email Address

SendGrid requires you to verify the email address that sends emails from your website.

### Option A: Verify Single Sender (Recommended - Easier)

1. **Navigate to Sender Authentication**
   - Go to: https://app.sendgrid.com/settings/sender_auth
   - Click **"Verify a Single Sender"**

2. **Fill Out the Form**
   - **From Name:** `MyTinyCEO`
   - **From Email Address:** `noreply@mytinyceo.com` (or `steve@4castconcrete.com` if you prefer)
   - **Reply To:** `steve@4castconcrete.com`
   - **Company Address:** Your business address
   - **Nickname:** `MyTinyCEO Contact Form`

3. **Verify Email**
   - Click **"Create"**
   - Check your email inbox (the "From Email Address" you entered)
   - Click the verification link in the email from SendGrid
   - ✅ You'll see "Verified!" status in SendGrid

### Option B: Domain Authentication (Advanced - Better Deliverability)

If you want better email deliverability and to send from @mytinyceo.com:

1. Go to: https://app.sendgrid.com/settings/sender_auth
2. Click **"Authenticate Your Domain"**
3. Follow SendGrid's wizard to add DNS records to your domain
4. Update the API endpoint code to use your verified domain email

---

## Step 3: Add API Key to Local Development

1. **Open the `.env` file** in the root of your project
   - File location: `/Website/.env`

2. **Replace the placeholder with your actual API key:**
   ```
   SENDGRID_API_KEY=SG.your_actual_api_key_here
   ```

3. **Save the file**

4. **Test locally** (optional):
   ```bash
   npm run dev
   ```
   - Navigate to http://localhost:4321/contact
   - Fill out and submit the contact form
   - Check if you receive the email at steve@4castconcrete.com

⚠️ **IMPORTANT:** Never commit the `.env` file to Git! It's already in `.gitignore`.

---

## Step 4: Add API Key to Vercel (Production)

Once you've deployed your site to Vercel:

1. **Go to Your Vercel Project Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select your **MyTinyCEO.com** project

2. **Navigate to Environment Variables**
   - Click on **"Settings"** tab
   - Click on **"Environment Variables"** in the left sidebar

3. **Add New Environment Variable**
   - Click **"Add New"** button
   - **Key:** `SENDGRID_API_KEY`
   - **Value:** Paste your SendGrid API key (starts with `SG.`)
   - **Environments:** Select all (Production, Preview, Development)
   - Click **"Save"**

4. **Redeploy Your Site**
   - Go to the **"Deployments"** tab
   - Click the **"..."** menu on the latest deployment
   - Click **"Redeploy"**
   - OR: Just push a new commit to trigger automatic deployment

---

## Step 5: Update Sender Email in Code (If Needed)

If you verified a different email address than `noreply@mytinyceo.com`:

1. **Open:** `src/pages/api/contact.ts`

2. **Find line with `from:`** (around line 42)
   ```typescript
   from: 'noreply@mytinyceo.com', // Must be a verified sender in SendGrid
   ```

3. **Change to your verified email:**
   ```typescript
   from: 'steve@4castconcrete.com', // Must be a verified sender in SendGrid
   ```

4. **Commit and push the change:**
   ```bash
   git add src/pages/api/contact.ts
   git commit -m "Update SendGrid sender email"
   git push
   ```

---

## Testing Your Contact Form

### Local Testing
1. Start dev server: `npm run dev`
2. Go to: http://localhost:4321/contact
3. Fill out the form and submit
4. Check your email (steve@4castconcrete.com)

### Production Testing
1. After deploying to Vercel with environment variable
2. Go to: https://mytinyceo.com/contact
3. Fill out and submit the form
4. Check your email

---

## Troubleshooting

### Form shows "Email service not configured"
- ❌ API key is missing or incorrect
- ✅ Double-check the API key in Vercel environment variables
- ✅ Make sure you redeployed after adding the variable

### Form shows "Failed to send message"
- ❌ Sender email is not verified in SendGrid
- ✅ Check sender verification status: https://app.sendgrid.com/settings/sender_auth
- ✅ Make sure the `from:` email in the code matches your verified sender

### Email not received
- ✅ Check your spam/junk folder
- ✅ Check SendGrid Activity feed: https://app.sendgrid.com/email_activity
- ✅ Verify your API key has "Mail Send" permission

### "Network error" message
- ❌ API endpoint is not deployed or not accessible
- ✅ Make sure `/api/contact.ts` is deployed
- ✅ Check browser console for detailed error messages

---

## SendGrid Free Tier Limits

- **100 emails/day** free forever
- No credit card required
- Perfect for contact forms on small websites

If you need more volume, SendGrid has paid plans starting at $19.95/month for 50,000 emails.

---

## Security Notes

- ✅ API key is stored in environment variables (not in code)
- ✅ `.env` file is in `.gitignore` (not committed to Git)
- ✅ Form has basic validation and error handling
- ✅ User email is set as `replyTo` for easy responses

---

## Need Help?

- **SendGrid Docs:** https://docs.sendgrid.com/
- **SendGrid Support:** https://support.sendgrid.com/
- **Vercel Docs:** https://vercel.com/docs/environment-variables

---

**All set!** Your contact form should now be fully functional with SendGrid email delivery. 📧
