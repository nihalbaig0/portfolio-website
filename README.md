# Portfolio Website

This project is built with React + Vite and deployed on Cloudflare Pages.

## Contact form (Cloudflare Pages Functions)

The contact form posts to `POST /api/contact`, implemented in:

- `functions/api/contact.js`

It uses the Resend API to deliver email.

### Required Cloudflare Pages environment variables

Set these in Cloudflare Pages -> Settings -> Environment variables:

- `RESEND_API_KEY` - your Resend API key
- `RESEND_FROM_EMAIL` - a verified sender address in Resend (example: `Portfolio <noreply@yourdomain.com>`)
- `CONTACT_TO_EMAIL` - where contact form messages should be delivered

After setting env vars, redeploy your Pages project.
