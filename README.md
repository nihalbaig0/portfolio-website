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

**Subdomain vs root domain:** Resend verifies **one hostname at a time**. If the dashboard shows **contact.nihalbaig.com** as verified (not `nihalbaig.com`), then `RESEND_FROM_EMAIL` **must** use that host, e.g. `Portfolio <noreply@contact.nihalbaig.com>`. A `from` address like `you@nihalbaig.com` will be rejected until you verify the root domain separately or change `from` to the verified subdomain.
- `CONTACT_TO_EMAIL` - where contact form messages should be delivered

After setting env vars, redeploy your Pages project.

### Troubleshooting

- **`net::ERR_NAME_NOT_RESOLVED`** in the console is often unrelated to your site (browser extensions like Grammarly, ad blockers, or a third-party script). If `POST /api/contact` still runs, focus on the response status for that request instead.

- **`502` / “failed to send”** usually means the Pages Function ran but **Resend rejected the request**. Typical fixes:
  - **`RESEND_FROM_EMAIL`** must use an address on a **domain you verified** in the Resend dashboard. If you only verified **`contact.nihalbaig.com`**, the sender must be something like **`noreply@contact.nihalbaig.com`**, not `@nihalbaig.com`, unless the root domain is verified too.
  - **`RESEND_API_KEY`** must be the full secret key from Resend (often starts with `re_`), with **no extra spaces** when pasted into Cloudflare.
  - **`CONTACT_TO_EMAIL`** should be a normal inbox you control.
  - After changing env vars, trigger a **new production deployment** on Pages so Workers pick them up.

- **Local `npm run dev`**: `/api/contact` is a Cloudflare Pages Function and **does not run inside Vite**. Test the form on your **deployed** Pages URL, or use [`wrangler pages dev`](https://developers.cloudflare.com/workers/wrangler/commands/#dev-1) with your build output.
