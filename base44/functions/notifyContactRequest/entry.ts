import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const body = await req.json();
        const data = body.data || body;

        const serviceLabels = {
            domicile: 'Nettoyage à domicile',
            interieur: 'Nettoyage intérieur',
            exterieur: 'Nettoyage extérieur',
            'formule-complete': 'Formule complète',
            polissage: 'Polissage',
            ceramique: 'Revêtement céramique',
            vitres: 'Vitres teintées',
            autre: 'Autre / Devis personnalisé',
        };

        const serviceLabel = serviceLabels[data.service] || data.service || 'Non précisé';

        const htmlContent = `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:30px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        
        <!-- Header -->
        <tr>
          <td style="background:#0d1117;padding:32px 40px;text-align:center;">
            <p style="margin:0 0 6px 0;color:#c9a96e;font-size:11px;letter-spacing:4px;text-transform:uppercase;">Glow & Details</p>
            <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">Nouvelle demande de contact</h1>
          </td>
        </tr>

        <!-- Service badge -->
        <tr>
          <td style="padding:28px 40px 0 40px;text-align:center;">
            <span style="display:inline-block;background:#c9a96e;color:#0d1117;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:8px 20px;border-radius:20px;">
              ${serviceLabel}
            </span>
          </td>
        </tr>

        <!-- Fields -->
        <tr>
          <td style="padding:28px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              
              <tr>
                <td style="padding:12px 16px;background:#f9f9f9;border-radius:8px 8px 0 0;border-bottom:1px solid #eeeeee;">
                  <p style="margin:0;font-size:10px;color:#999;text-transform:uppercase;letter-spacing:1.5px;">Nom</p>
                  <p style="margin:4px 0 0;font-size:15px;color:#0d1117;font-weight:600;">${data.name || '-'}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px;background:#ffffff;border-bottom:1px solid #eeeeee;">
                  <p style="margin:0;font-size:10px;color:#999;text-transform:uppercase;letter-spacing:1.5px;">Email</p>
                  <p style="margin:4px 0 0;font-size:15px;color:#0d1117;font-weight:600;"><a href="mailto:${data.email}" style="color:#c9a96e;text-decoration:none;">${data.email || '-'}</a></p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px;background:#f9f9f9;border-bottom:1px solid #eeeeee;">
                  <p style="margin:0;font-size:10px;color:#999;text-transform:uppercase;letter-spacing:1.5px;">Téléphone</p>
                  <p style="margin:4px 0 0;font-size:15px;color:#0d1117;font-weight:600;">${data.phone || '-'}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px;background:#ffffff;border-bottom:1px solid #eeeeee;">
                  <p style="margin:0;font-size:10px;color:#999;text-transform:uppercase;letter-spacing:1.5px;">Véhicule</p>
                  <p style="margin:4px 0 0;font-size:15px;color:#0d1117;font-weight:600;">${data.vehicle || '-'}</p>
                </td>
              </tr>

              ${data.message ? `
              <tr>
                <td style="padding:16px;background:#f9f9f9;border-radius:0 0 8px 8px;">
                  <p style="margin:0 0 8px;font-size:10px;color:#999;text-transform:uppercase;letter-spacing:1.5px;">Message</p>
                  <p style="margin:0;font-size:14px;color:#444;line-height:1.7;">${data.message}</p>
                </td>
              </tr>` : ''}

            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#0d1117;padding:20px 40px;text-align:center;">
            <p style="margin:0;color:#555;font-size:11px;">Glow & Details — Formulaire de contact automatique</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

        const { accessToken } = await base44.asServiceRole.connectors.getConnection('gmail');

        const subject = `Nouvelle demande — ${data.name} (${serviceLabel})`;

        const mimeMessage = [
            `To: romain@abstra.org`,
            `Subject: =?UTF-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`,
            `MIME-Version: 1.0`,
            `Content-Type: text/html; charset=UTF-8`,
            ``,
            htmlContent,
        ].join('\r\n');

        const encodedMessage = btoa(unescape(encodeURIComponent(mimeMessage)))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');

        const gmailRes = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ raw: encodedMessage }),
        });

        if (!gmailRes.ok) {
            const err = await gmailRes.text();
            return Response.json({ error: err }, { status: 500 });
        }

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});