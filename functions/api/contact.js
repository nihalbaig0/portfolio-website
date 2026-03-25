const RESEND_URL = "https://api.resend.com/emails";

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

    const apiKey = (env.RESEND_API_KEY || "").trim();
    const from = (env.RESEND_FROM_EMAIL || "").trim();
    const to = (env.CONTACT_TO_EMAIL || "").trim();

    if (!apiKey || !from || !to) {
      return jsonResponse(
        request,
        {
          error:
            "Server email env vars are not configured. Set RESEND_API_KEY, RESEND_FROM_EMAIL, and CONTACT_TO_EMAIL in Cloudflare Pages.",
        },
        500
      );
    }

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
        reply_to: [email],
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    const rawText = await resendResponse.text();
    let details = rawText;

    try {
      const parsed = JSON.parse(rawText);
      details =
        parsed.message ||
        parsed.error?.message ||
        (Array.isArray(parsed.errors) && parsed.errors.map((e) => e.message).filter(Boolean).join(" ")) ||
        rawText;
    } catch {
      // keep rawText
    }

    if (!resendResponse.ok) {
      const clientStatus = resendResponse.status >= 500 ? 502 : 400;
      return jsonResponse(
        request,
        {
          error:
            "Email could not be sent. Check Resend: verified `from` domain, API key, and recipient.",
          details,
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
