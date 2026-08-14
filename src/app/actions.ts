'use server';

import { Resend } from 'resend';

interface FormSubmissionData {
  businessName: string;
  province: string;
  phone: string;
  email: string;
  productDesc: string;
  promo?: string;
  driveUrl?: string;
}

export async function submitApplication(data: FormSubmissionData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY is not defined. Email submission bypassed.");
    return { success: false, error: "RESEND_API_KEY not configured" };
  }

  const resend = new Resend(apiKey);
  const ownerEmail = "daniel@studioboom.online";
  
  try {
    // 1. Send email to owner
    await resend.emails.send({
      from: 'The Silent Studio <onboarding@resend.dev>',
      to: ownerEmail,
      subject: `Nueva Solicitud: ${data.businessName}`,
      html: `
        <div style="font-family: sans-serif; color: #1F2A2E; max-width: 600px; margin: 0 auto; border: 1px solid rgba(31,42,46,0.1); padding: 20px;">
          <h2 style="font-family: serif; border-bottom: 2px solid #FF8C42; padding-bottom: 10px; color: #1F2A2E;">Nueva Solicitud de Videos Publicitarios</h2>
          <p>Se ha recibido una nueva solicitud para la producción de 5 videos IA.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid rgba(31,42,46,0.08); font-weight: bold; width: 180px;">Negocio:</td>
              <td style="padding: 8px; border-bottom: 1px solid rgba(31,42,46,0.08);">${data.businessName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid rgba(31,42,46,0.08); font-weight: bold;">Provincia:</td>
              <td style="padding: 8px; border-bottom: 1px solid rgba(31,42,46,0.08);">${data.province}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid rgba(31,42,46,0.08); font-weight: bold;">WhatsApp:</td>
              <td style="padding: 8px; border-bottom: 1px solid rgba(31,42,46,0.08);">${data.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid rgba(31,42,46,0.08); font-weight: bold;">Correo:</td>
              <td style="padding: 8px; border-bottom: 1px solid rgba(31,42,46,0.08);">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid rgba(31,42,46,0.08); font-weight: bold;">Descripción:</td>
              <td style="padding: 8px; border-bottom: 1px solid rgba(31,42,46,0.08);">${data.productDesc}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid rgba(31,42,46,0.08); font-weight: bold;">Promoción:</td>
              <td style="padding: 8px; border-bottom: 1px solid rgba(31,42,46,0.08);">${data.promo || 'Ninguna'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid rgba(31,42,46,0.08); font-weight: bold;">Enlaces / Fotos:</td>
              <td style="padding: 8px; border-bottom: 1px solid rgba(31,42,46,0.08);">${data.driveUrl || 'No provisto'}</td>
            </tr>
          </table>
        </div>
      `
    });

    // 2. Send email to client
    await resend.emails.send({
      from: 'The Silent Studio <onboarding@resend.dev>',
      to: data.email,
      subject: 'Tu solicitud de videos con IA está en proceso - The Silent Studio',
      html: `
        <div style="font-family: sans-serif; color: #1F2A2E; max-width: 600px; margin: 0 auto; border: 1px solid rgba(31,42,46,0.1); padding: 25px; background-color: #FBF6EC;">
          <h2 style="font-family: serif; color: #E8672A; border-bottom: 1px solid rgba(31,42,46,0.14); padding-bottom: 10px; margin-top: 0;">¡Hola! Tu solicitud está en proceso.</h2>
          <p>Hemos recibido correctamente la información de tu negocio <strong>${data.businessName}</strong>.</p>
          <p>El paquete de 5 videos publicitarios en formato vertical (9:16) con ganchos psicológicos por <strong>$150 USD</strong> está en fase de preparación.</p>
          
          <div style="background-color: white; border-left: 4px solid #FF8C42; padding: 15px; margin: 20px 0; font-size: 14px;">
            <strong>¿Qué sigue ahora?</strong>
            <ul style="margin-top: 8px; padding-left: 20px; line-height: 1.6;">
              <li>Un director creativo revisará la oferta de tu negocio y redactará los 5 guiones personalizados.</li>
              <li>Nos comunicaremos a tu WhatsApp <strong>${data.phone}</strong> para enviarte los guiones y coordinar el pago inicial del 50% ($75 USD / ₡39,000 SINPE).</li>
              <li>Aprobados los guiones, iniciamos producción y te entregamos los videos listos para tus redes.</li>
            </ul>
          </div>
          
          <p style="font-size: 13px; color: #4A5A5E; margin-bottom: 0;">Gracias por confiar en <strong>The Silent Studio</strong>. Pronto nos pondremos en contacto contigo.</p>
        </div>
      `
    });

    return { success: true };
  } catch (error: any) {
    console.error("Failed to send email via Resend:", error);
    return { success: false, error: error.message || "Email sending failed" };
  }
}
