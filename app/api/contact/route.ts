import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY || 're_123');
    const { name, email, phone, organisation, application, message } = await req.json();

    const fromAddress = process.env.EMAIL_FROM || 'InvisiShield ArmorFilm™ <onboarding@resend.dev>';
    const toAddresses = (process.env.EMAIL_TO || 'info@invisishieldfilm.com')
      .split(',')
      .map((e) => e.trim())
      .filter(Boolean);

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: toAddresses,
      replyTo: email,
      subject: `New Quote Request — ${name}${organisation ? ` (${organisation})` : ''}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Quote Request</title>
</head>
<body style="margin:0;padding:0;background-color:#080B10;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#080B10;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#0B1F3A;padding:32px 40px;border-top:4px solid #1E6BFF;">
              <p style="margin:0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.2em;color:#5593ff;">InvisiShield ArmorFilm™</p>
              <h1 style="margin:12px 0 0;font-size:28px;font-weight:900;color:#ffffff;text-transform:uppercase;letter-spacing:-1px;">New Quote Request</h1>
              <p style="margin:8px 0 0;font-size:13px;color:#B8C1CC;">Received via invisishieldfilm.com</p>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="height:3px;background:linear-gradient(90deg,#1E6BFF,#00D4FF 60%,transparent);"></td></tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#0d1826;padding:36px 40px;">

              <!-- Contact Summary -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding:0 0 16px;">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.18em;color:#5593ff;">From</p>
                    <p style="margin:0;font-size:22px;font-weight:800;color:#ffffff;">${name}</p>
                    ${organisation ? `<p style="margin:4px 0 0;font-size:14px;color:#B8C1CC;">${organisation}</p>` : ''}
                  </td>
                </tr>
              </table>

              <!-- Detail rows -->
              <table width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td style="padding:12px 0;border-top:1px solid rgba(30,107,255,0.15);">
                    <p style="margin:0 0 2px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;color:#5593ff;">Email</p>
                    <a href="mailto:${email}" style="color:#ffffff;font-size:14px;text-decoration:none;">${email}</a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;border-top:1px solid rgba(30,107,255,0.15);">
                    <p style="margin:0 0 2px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;color:#5593ff;">Phone</p>
                    <p style="margin:0;color:#ffffff;font-size:14px;">${phone || '—'}</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;border-top:1px solid rgba(30,107,255,0.15);">
                    <p style="margin:0 0 2px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;color:#5593ff;">Application Type</p>
                    <p style="margin:0;color:#ffffff;font-size:14px;">${application || '—'}</p>
                  </td>
                </tr>

                ${message ? `
                <tr>
                  <td style="padding:12px 0;border-top:1px solid rgba(30,107,255,0.15);">
                    <p style="margin:0 0 8px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;color:#5593ff;">Message</p>
                    <div style="background:rgba(30,107,255,0.06);border-left:3px solid #1E6BFF;padding:14px 16px;border-radius:2px;">
                      <p style="margin:0;color:#B8C1CC;font-size:14px;line-height:1.7;">${message.replace(/\n/g, '<br/>')}</p>
                    </div>
                  </td>
                </tr>` : ''}

              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="background-color:#0B1F3A;padding:24px 40px;text-align:center;border-top:1px solid rgba(30,107,255,0.2);">
              <a href="mailto:${email}?subject=Re: Your InvisiShield Quote Request"
                 style="display:inline-block;background:#1E6BFF;color:#ffffff;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;padding:12px 28px;border-radius:999px;text-decoration:none;box-shadow:4px 4px 0px rgba(30,107,255,0.5);">
                Reply to ${name.split(' ')[0]}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#080B10;padding:20px 40px;text-align:center;border-top:2px solid rgba(30,107,255,0.2);">
              <p style="margin:0;font-size:10px;color:rgba(184,193,204,0.4);text-transform:uppercase;letter-spacing:0.12em;">
                InvisiShield ArmorFilm™ &nbsp;·&nbsp; PO Box 52, Detroit, ME 04929 &nbsp;·&nbsp; 207-947-1999
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    console.error('Server side error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
