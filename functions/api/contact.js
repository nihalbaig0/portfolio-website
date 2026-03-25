const RESEND_URL = "https://api.resend.com/emails";

function cleanEnvValue(value) {
  if (value == null) return "";
  let s = String(value).trim();
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    s = s.slice(1, -1).trim();
  }
  return s;
}

/** Resend only accepts `email@x.com` or `Name <email@x.com>`. Normalizes Cloudflare env quirks (newlines, smart brackets, missing <>). */
function normalizeResendFrom(raw) {
  let s = cleanEnvValue(raw);
  if (!s) return "";

  s = s.replace(/[\u200B-\u200D\uFEFF]/g, "");
  s = s.replace(/\s+/g, " ").trim();
  s = s.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">");

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRe.test(s)) return s;

  const named = s.match(/^(.+?)\s*<\s*([^>]+?)\s*>\s*$/);
  if (named) {
    const name = named[1].trim();
    const addr = named[2].trim();
    if (name && emailRe.test(addr)) return `${name} <${addr}>`;
  }

  const loose = s.match(/^(.+?)\s+([^\s@]+@[^\s@]+\.[^\s@]+)$/);
  if (loose) {
    const name = loose[1].trim();
    const addr = loose[2].trim();
    if (name && emailRe.test(addr)) return `${name} <${addr}>`;
  }

  return "";
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function corsHeaders(request) {
  const origin = request.headers.get("Origin") || "*";
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function jsonResponse(request, data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders(request),
    },
  });
}

export async function onRequestOptions(context) {
  const { request } = context;
  return new Response(null, {
    status: 204,
    headers: corsHeaders(request),
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const name = (body?.name || "").trim();
    const email = (body?.email || "").trim();
    const message = (body?.message || "").trim();

    if (!name || !email || !message) {
      return jsonResponse(request, { error: "Missing required fields." }, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse(request, { error: "Invalid email address." }, 400);
    }

    if (name.length > 120 || email.length > 200 || message.length > 5000) {
      return jsonResponse(request, { error: "Input exceeds allowed length." }, 400);
    }

    const apiKey = cleanEnvValue(env.RESEND_API_KEY);
    const from = normalizeResendFrom(env.RESEND_FROM_EMAIL);
    const to = cleanEnvValue(env.CONTACT_TO_EMAIL);

    if (!apiKey || !to) {
      return jsonResponse(
        request,
        {
          error:
            "Server email env vars are not configured. Set RESEND_API_KEY, RESEND_FROM_EMAIL, and CONTACT_TO_EMAIL in Cloudflare Pages.",
        },
        500
      );
    }

    if (!from) {
      return jsonResponse(
        request,
        {
          error:
            "RESEND_FROM_EMAIL is missing or not in a valid format. Use either noreply@contact.nihalbaig.com or Portfolio <noreply@contact.nihalbaig.com> (no line breaks; angle brackets around the address).",
        },
        500
      );
    }

    const textBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const htmlBody = `
<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Message:</strong></p>
<p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
`.trim();

    const resendResponse = await fetch(RESEND_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `Portfolio Contact: ${name}`,
        reply_to: email,
        text: textBody,
        html: htmlBody,
      }),
    });

    const rawText = await resendResponse.text();
    let details = rawText;

    try {
      const parsed = JSON.parse(rawText);
      const parts = [
        parsed.name,
        parsed.message,
        parsed.error?.message,
        Array.isArray(parsed.errors)
          ? parsed.errors.map((e) => e.message).filter(Boolean).join(" ")
          : null,
      ].filter(Boolean);
      details = parts.length ? parts.join(" — ") : rawText;
    } catch {
      // keep rawText
    }

    if (!resendResponse.ok) {
      const clientStatus = resendResponse.status >= 500 ? 502 : 400;
      const subdomainHint =
        "If Resend shows only a subdomain as verified (e.g. contact.nihalbaig.com), set RESEND_FROM_EMAIL to an address on that exact host, such as Portfolio <noreply@contact.nihalbaig.com>. Using @nihalbaig.com will fail unless the root domain is verified separately in Resend.";
      return jsonResponse(
        request,
        {
          error:
            "Email could not be sent. Check Resend: `from` must match a verified domain, API key, and recipient.",
          details,
          hint: subdomainHint,
          resendStatus: resendResponse.status,
        },
        clientStatus
      );
    }

    return jsonResponse(request, { ok: true }, 200);
  } catch (error) {
    return jsonResponse(
      request,
      { error: "Unexpected server error.", details: String(error) },
      500
    );
  }
}
