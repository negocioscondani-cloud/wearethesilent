import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      email,
      name,
      phone,
      points = 0,
      restaurantName = 'Soda La Ceiba',
      restaurantPhone = '2222-0000',
      restaurantAddress = 'Escazú centro, 100 m norte de la iglesia',
    } = body || {};

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { ok: false, error: 'Correo electrónico inválido' },
        { status: 400 }
      );
    }

    const firstName = (name || 'Cliente').trim().split(' ')[0];
    const subject = `¡Bienvenido al Club de Puntos de ${restaurantName}, ${firstName}! 🎉`;

    const html = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 540px; margin: 0 auto; background: #FAF7F2; border: 1px solid #E5DEC9; border-radius: 18px; overflow: hidden; color: #16241C;">
        <div style="background: #0F5B3E; color: #FFFFFF; padding: 28px 24px; text-align: center;">
          <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; opacity: 0.85;">Club de Fidelidad Oficial</span>
          <h1 style="margin: 8px 0 4px; font-size: 26px; font-weight: 800;">${restaurantName}</h1>
          <p style="margin: 0; font-size: 14px; opacity: 0.9;">¡Gracias por registrarte en nuestro Club de Puntos!</p>
        </div>
        <div style="padding: 26px 24px;">
          <p style="font-size: 16px; margin-top: 0;">Hola <strong>${name || firstName}</strong>,</p>
          <p style="font-size: 14.5px; line-height: 1.6; color: #3D4C43;">
            Tu cuenta en el Club de Puntos de <strong>${restaurantName}</strong> ya está activa. A partir de hoy, cada vez que nos visites acumularás puntos automáticamente para canjear por platos, bebidas y postres gratis.
          </p>
          <div style="background: #FFFFFF; border: 1px solid #D6DFD7; border-radius: 14px; padding: 18px; margin: 20px 0; text-align: center;">
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #5B6B61; display: block;">Tu saldo actual</span>
            <strong style="font-size: 38px; color: #0F5B3E; display: block; line-height: 1.1; margin: 6px 0;">${points} pts</strong>
            <span style="font-size: 13px; color: #5B6B61;">Correo vinculado: <strong>${email}</strong>${phone ? ` · Tel: <strong>${phone}</strong>` : ''}</span>
          </div>
          <p style="font-size: 14px; line-height: 1.5; color: #3D4C43;">
            <strong>¿Cómo acceder a tus puntos en tu próxima visita?</strong><br/>
            Escanea el código QR de tu mesa, entra a la sección <em>Puntos</em> o <em>Perfil</em> e inicia sesión con tu cuenta de Google o ingresando tu correo <strong>${email}</strong>.
          </p>
          <hr style="border: none; border-top: 1px solid #E5DEC9; margin: 22px 0;" />
          <p style="font-size: 12px; color: #6E7D74; margin: 0; text-align: center;">
            ${restaurantName} · ${restaurantAddress} · Tel: ${restaurantPhone}
          </p>
        </div>
      </div>
    `;

    // Si existe RESEND_API_KEY configurada en el entorno, enviamos el correo vía Resend API
    const resendKey = process.env.RESEND_API_KEY;
    let providerSent = false;
    if (resendKey) {
      try {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || `${restaurantName} <onboarding@resend.dev>`,
            to: [email],
            subject,
            html,
          }),
        });
        providerSent = res.ok;
      } catch (err) {
        console.warn('Resend send warning:', err);
      }
    }

    return NextResponse.json({
      ok: true,
      providerSent,
      email,
      subject,
      html,
      sentAt: Date.now(),
    });
  } catch (error) {
    console.error('Error in /api/mesaya-welcome:', error);
    return NextResponse.json(
      { ok: false, error: 'No se pudo procesar el correo de bienvenida' },
      { status: 500 }
    );
  }
}
