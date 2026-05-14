import { NextRequest, NextResponse } from 'next/server';

const SB_URL = 'https://wwaovysvcsesahcltuai.supabase.co';
// Use service role key from env (bypasses RLS, lets server write the lead).
// Fallback to anon key for the embedded value is intentionally NOT included —
// we want a clear error if the env var is missing rather than a silent RLS fail.
const SB_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const RESEND_KEY = process.env.RESEND_API_KEY || '';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      full_name, business_name, email, phone,
      business_type, service_type, target_market,
      website_url, lead_situation, monthly_budget,
      goal, notes,
    } = body;

    // Basic validation — server-side guard against empty submissions.
    if (!full_name || !email) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields (name and email).' },
        { status: 400 }
      );
    }

    let supabaseSucceeded = false;
    let emailSucceeded = false;
    const errors: string[] = [];

    // 1. Save to Supabase (server-side, service role bypasses RLS)
    if (SB_SERVICE_KEY) {
      try {
        const sbRes = await fetch(`${SB_URL}/rest/v1/flashpreviews_leads`, {
          method: 'POST',
          headers: {
            apikey: SB_SERVICE_KEY,
            Authorization: `Bearer ${SB_SERVICE_KEY}`,
            'Content-Type': 'application/json',
            Prefer: 'return=minimal',
          },
          body: JSON.stringify({
            full_name, business_name, email, phone,
            business_type, service_type, target_market,
            website_url, lead_situation, monthly_budget,
            goal, notes,
            lead_status: 'new',
            source: 'flashpreviews_site',
          }),
        });

        if (sbRes.ok) {
          supabaseSucceeded = true;
        } else {
          const errText = await sbRes.text();
          errors.push(`Supabase ${sbRes.status}: ${errText.slice(0, 200)}`);
          console.error('[intake] Supabase write failed:', sbRes.status, errText);
        }
      } catch (sbErr) {
        errors.push(`Supabase exception: ${sbErr instanceof Error ? sbErr.message : 'unknown'}`);
        console.error('[intake] Supabase exception:', sbErr);
      }
    } else {
      errors.push('SUPABASE_SERVICE_ROLE_KEY env var not set');
      console.error('[intake] SUPABASE_SERVICE_ROLE_KEY env var missing');
    }

    // 2. Send email via Resend
    if (RESEND_KEY) {
      try {
        const emailBody = `
<h2>New FlashPreviews Lead</h2>
<table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;width:180px">Name</td><td style="padding:8px;border:1px solid #eee">${full_name}</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Business</td><td style="padding:8px;border:1px solid #eee">${business_name || '—'}</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #eee"><a href="mailto:${email}">${email}</a></td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #eee"><a href="tel:${phone}">${phone || '—'}</a></td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Business Type</td><td style="padding:8px;border:1px solid #eee">${business_type || '—'}</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Service/Practice</td><td style="padding:8px;border:1px solid #eee">${service_type || '—'}</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Target Market</td><td style="padding:8px;border:1px solid #eee">${target_market || '—'}</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Website</td><td style="padding:8px;border:1px solid #eee">${website_url || '—'}</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Lead Situation</td><td style="padding:8px;border:1px solid #eee">${lead_situation || '—'}</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Monthly Budget</td><td style="padding:8px;border:1px solid #eee">${monthly_budget || '—'}</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Goal</td><td style="padding:8px;border:1px solid #eee">${goal || '—'}</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Notes</td><td style="padding:8px;border:1px solid #eee">${notes || '—'}</td></tr>
</table>
<p style="margin-top:20px;font-size:12px;color:#888">Submitted via FlashPreviews Consulting Group website</p>
        `.trim();

        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { Authorization: `Bearer ${RESEND_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: 'FlashPreviews <leads@out.multiservicios360.net>',
            to: ['flashpreviews@gmail.com'],
            reply_to: email,
            subject: `New Lead: ${business_name || full_name} — ${target_market || 'no market specified'}`,
            html: emailBody,
          }),
        });

        if (resendRes.ok) {
          emailSucceeded = true;
        } else {
          const errText = await resendRes.text();
          errors.push(`Resend ${resendRes.status}: ${errText.slice(0, 200)}`);
          console.error('[intake] Resend send failed:', resendRes.status, errText);
        }
      } catch (eErr) {
        errors.push(`Resend exception: ${eErr instanceof Error ? eErr.message : 'unknown'}`);
        console.error('[intake] Resend exception:', eErr);
      }
    } else {
      errors.push('RESEND_API_KEY env var not set');
      console.error('[intake] RESEND_API_KEY env var missing');
    }

    // Success = at least one of the two paths captured the lead.
    // If both failed, return 500 so the user sees something went wrong
    // and we don't silently lose the submission.
    if (!supabaseSucceeded && !emailSucceeded) {
      return NextResponse.json(
        { success: false, error: 'Submission failed. Please call (310) 437-3343 directly.', diagnostics: errors },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      saved: supabaseSucceeded,
      emailed: emailSucceeded,
      ...(errors.length ? { warnings: errors } : {}),
    });
  } catch (err) {
    console.error('[intake] Unexpected error:', err);
    return NextResponse.json(
      { success: false, error: 'Submission failed. Please call (310) 437-3343 directly.' },
      { status: 500 }
    );
  }
}
