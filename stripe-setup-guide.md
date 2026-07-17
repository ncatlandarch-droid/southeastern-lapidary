# Stripe Setup Guide for Southeastern Lapidary Associates

Hello Donald! Welcome to the digital storefront for Southeastern Lapidary Associates. This guide will walk you through setting up your Stripe account to securely process payments for your lapidary products and merchandise.

## Step 1: Create a Stripe Account
1. Go to [Stripe.com](https://stripe.com) and click **"Start now"**.
2. Create an account using your business email address.
3. Verify your email by clicking the link sent to your inbox.

## Step 2: Activate Your Account
1. Log in to your new Stripe dashboard.
2. Click on **"Activate payments"** in the top menu or on the dashboard homepage.
3. Fill out the business details. You'll need information like your business structure, address, and Employer Identification Number (EIN) or SSN.

## Step 3: Connect Your Bank Account
1. During the activation process, you'll be prompted to link a bank account for your payouts.
2. Provide your business bank routing and account numbers so Stripe knows where to send your funds.

## Step 4: Complete Verification
1. Stripe may ask for identity verification (like a driver's license or passport) to comply with financial regulations. Follow the prompts to upload these documents securely.

## Step 5: Locate Your API Keys
1. Once activated, go to the **"Developers"** tab on the top right, then click **"API keys"** in the left menu.
2. You will see two sets of keys: **Publishable key** and **Secret key**.
3. *Note: Keep your Secret key absolutely secure. Never share it via email or text.*

## Step 6: Add Keys to Netlify
Your website is hosted on Netlify, which is where we securely store these keys.
1. Log into your Netlify dashboard and select the SLA project.
2. Go to **Site configuration > Environment variables**.
3. Add a new variable named `STRIPE_SECRET_KEY` and paste your Stripe Secret key as the value.
4. If applicable, add your Publishable key as `STRIPE_PUBLISHABLE_KEY`.

## Security Reminders
- **Never share your secret keys.**
- Use two-factor authentication (2FA) for your Stripe account to add an extra layer of security.
- Regularly review your transactions in the Stripe dashboard.

---

### Need Help?
If you get stuck or need assistance at any point during this setup, don't hesitate to reach out to Chris at **Think! Design and Planning, LLC**. We're here to help make sure everything is running smoothly!
