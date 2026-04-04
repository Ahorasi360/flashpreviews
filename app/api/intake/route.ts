import { NextRequest, NextResponse } from 'next/server';

const SB_URL = 'https://wwaovysvcsesahcltuai.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3YW92eXN2Y3Nlc2FoY2x0dWFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwMjgxNDMsImV4cCI6MjA4NDYwNDE0M30.Ev5d1Dd_BDIsuRkMqWKnz6GQ2JMi26gIX4KC3eob-2w';
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

    // 1. Save to Supabase
    const sbRes = await fetch(`${SB_URL}/rest/v1/flashpreviews_leads`, {
      method: 'POST',
      headers: {
        apikey: SB_KEY,
        Authorization: `Bearer ${SB_KEY}`,
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

    if (!sbRes.ok) {
      const err = await sbRes.text();
      console.error('Supabase error:', err);
    }

    // 2. Send email via Resend
    if (RESEND_KEY) {
      const emailBody = `
<h2>New FlashPreviews Lead</h2>
<table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;width:180px">Name</td><td style="padding:8px;border:1px solid #eee">${full_name}</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Business</td><td style="padding:8px;border:1px solid #eee">${business_name}</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #eee"><a href="mailto:${email}">${email}</a></td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #eee"><a href="tel:${phone}">${phone}</a></td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Business Type</td><td style="padding:8px;border:1px solid #eee">${business_type}</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Service/Practice</td><td style="padding:8px;border:1px solid #eee">${service_type}</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Target Market</td><td style="padding:8px;border:1px solid #eee">${target_market}</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Website</td><td style="padding:8px;border:1px solid #eee">${website_url || '—'}</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Lead Situation</td><td style="padding:8px;border:1px solid #eee">${lead_situation}</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Monthly Budget</td><td style="padding:8px;border:1px solid #eee">${monthly_budget}</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Goal</td><td style="padding:8px;border:1px solid #eee">${goal}</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Notes</td><td style="padding:8px;border:1px solid #eee">${notes || '—'}</td></tr>
</table>
<p style="margin-top:20px;font-size:12px;color:#888">Submitted via FlashPreviews Consulting Group website</p>
      `.trim();

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${RESEND_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'FlashPreviews <onboarding@resend.dev>',
          to: ['flashpreviews@gmail.com'],
          subject: `New Lead: ${business_name} — ${target_market}`,
          html: emailBody,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Intake error:', err);
    return NextResponse.json({ success: false, error: 'Submission failed' }, { status: 500 });
  }
}
