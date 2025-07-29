import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      subject,
      message
    } = body;

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'vanjadjuric.bl@gmail.com',
        pass: process.env.SMTP_PASS || 'your-app-password',
      },
    });

    // Email to admin
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Nova kontakt poruka</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #4CAF50; }
          .value { margin-left: 10px; }
          .message-box { background-color: white; padding: 15px; border-left: 3px solid #4CAF50; margin-top: 10px; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div style="text-align: center; margin-bottom: 15px;">
              <img src="/assets/img/logo/logo-white.png" alt="Panda Logo" style="width: 120px; height: auto;" />
            </div>
            <h1>Nova kontakt poruka</h1>
            <p>Knjigovodstveni biro Panda</p>
          </div>
          
          <div class="content">
            <div class="field">
              <span class="label">Ime:</span>
              <span class="value">${name || 'Nije navedeno'}</span>
            </div>
            
            <div class="field">
              <span class="label">Email:</span>
              <span class="value">${email || 'Nije navedeno'}</span>
            </div>
            
            <div class="field">
              <span class="label">Telefon:</span>
              <span class="value">${phone || 'Nije navedeno'}</span>
            </div>
            
            <div class="field">
              <span class="label">Predmet:</span>
              <span class="value">${subject || 'Nije navedeno'}</span>
            </div>
            
            <div class="field">
              <span class="label">Poruka:</span>
              <div class="message-box">
                ${message || 'Nije navedeno'}
              </div>
            </div>
          </div>
          
          <div class="footer">
            <p>Ova poruka je poslana sa web stranice Knjigovodstvenog biroa Panda</p>
            <p>Datum: ${new Date().toLocaleString('hr-HR')}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Email to client
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Potvrda kontakt poruke</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          .contact-info { background-color: white; padding: 15px; margin: 20px 0; border-left: 3px solid #4CAF50; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div style="text-align: center; margin-bottom: 15px;">
              <img src="/assets/img/logo/logo-white.png" alt="Panda Logo" style="width: 120px; height: auto;" />
            </div>
            <h1>Hvala vam na poruci!</h1>
            <p>Knjigovodstveni biro Panda</p>
          </div>
          
          <div class="content">
            <p>Poštovani/a ${name},</p>
            
            <p>Zahvaljujemo vam na kontaktiranju. Uskoro ćemo vam odgovoriti na vašu poruku.</p>
            
            <p>Naš tim će analizirati vaš zahtjev i kontaktirati vas u najkraćem mogućem roku.</p>
            
            <div class="contact-info">
              <h3>Naši kontakt podaci:</h3>
              <p><strong>Telefon:</strong> +387 65 314 131</p>
              <p><strong>Email:</strong> office@panda.ba</p>
              <p><strong>Adresa:</strong> Bulevar vojvode Stepe Stepanovića 59, 78000 Banja Luka, BiH</p>
            </div>
            
            <p>Srdačan pozdrav,<br>
            <strong>Tim Knjigovodstvenog biroa Panda</strong></p>
          </div>
          
          <div class="footer">
            <p>Ovaj email je automatski generisan. Molimo ne odgovarajte na njega.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER || 'vanjadjuric.bl@gmail.com',
      to: process.env.ADMIN_EMAIL || 'office@panda.ba',
      subject: `🐼 Nova kontakt poruka - ${subject || 'Bez predmeta'}`,
      html: adminEmailHtml,
    });

    // Send confirmation email to client
    if (email) {
      await transporter.sendMail({
        from: process.env.SMTP_USER || 'vanjadjuric.bl@gmail.com',
        to: email,
        subject: 'Potvrda kontakt poruke - Knjigovodstveni biro Panda',
        html: clientEmailHtml,
      });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Poruka je uspješno poslana. Uskoro ćemo vas kontaktirati.' 
    });

  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { success: false, message: 'Greška pri slanju poruke. Molimo pokušajte ponovo.' },
      { status: 500 }
    );
  }
} 