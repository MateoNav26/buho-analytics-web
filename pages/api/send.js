// pages/api/send.js

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const tuCorreo = 'info@buho-analytics.com';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // 1. Parsear los datos del frontend
    const { nombre, email, desafio } = req.body;

    // 2. Validación
    if (!nombre || !email) {
      // El desafío es opcional, así que no lo validamos como requerido
      return res.status(400).json({ error: 'Nombre y Email son requeridos.' });
    }

    const fromEmail = 'web@buho-analytics.com'; // De tu dominio verificado

    // 3. Enviar el correo (CONTENIDO ADAPTADO A TU MODAL)
    const { data, error } = await resend.emails.send({
      from: `Búho Analytics Form <${fromEmail}>`,
      to: [tuCorreo],
      subject: `Nuevo Contacto - ${nombre}`,
      reply_to: email,
      text: `Nuevo mensaje de contacto del formulario web:\n\n
        Nombre: ${nombre}\n
        Email: ${email}\n
        Desafío: ${desafio || 'No especificado'}
      `,
    });

    if (error) {
      console.error("Error al enviar email desde Resend:", error);
      return res.status(500).json({ error: 'Error interno al enviar el correo.' });
    }

    return res.status(200).json({ message: '¡Mensaje enviado con éxito!' });

  } catch (exception) {
    console.error("Excepción en /api/send:", exception);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
}