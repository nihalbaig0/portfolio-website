export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();
    const name = (body?.name || "").trim();
    const email = (body?.email || "").trim();
    const message = (body?.message || "").trim();

    if (!name || !email || !message) {
      return jsonResponse({ error: "Missing required fields." }, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ error: "Invalid email address." }, 400);
    }

    if (name.length > 120 || email.length > 200 || message.length > 5000) {
      return jsonResponse({ error: "Input exceeds allowed length." }, 400);
    }

    if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL || !env.CONTACT_TO_EMAIL) {
      return jsonResponse({ error: "Server email env vars are not configured." }, 500);
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.RESEND_FROM_EMAIL,
        to: [env.CONTACT_TO_EMAIL],
        subject: `Portfolio Contact: ${name}`,
        reply_to: email,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      return jsonResponse({ error: "Failed to send message.", details: errorText }, 502);
    }

    return jsonResponse({ ok: true }, 200);
  } catch (error) {
    return jsonResponse({ error: "Unexpected server error.", details: String(error) }, 500);
  }
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

