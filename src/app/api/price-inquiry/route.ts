import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      companyName,
      businessType,
      pdvObligation,
      entrepreneurType,
      employees,
      incomingInvoices,
      outgoingInvoices,
      monthlyStatements,
      phone,
      email,
      additionalQuestion
    } = body;

    // Create email transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || 'your-email@gmail.com',
        pass: process.env.SMTP_PASS || 'your-app-password',
      },
    });

    // Email to admin
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Novi upit za cijenu</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #4CAF50; }
          .value { margin-left: 10px; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div style="text-align: center; margin-bottom: 15px;">
              <img src="/assets/img/logo/logo-white.png" alt="Panda Logo" style="width: 120px; height: auto;" />
            </div>
            <h1>Novi upit za cijenu</h1>
            <p>Knjigovodstveni biro Panda</p>
          </div>
          
          <div class="content">
            <div class="field">
              <span class="label">Naziv firme:</span>
              <span class="value">${companyName || 'Nije navedeno'}</span>
            </div>
            
            <div class="field">
              <span class="label">Vrsta djelatnosti:</span>
              <span class="value">${businessType?.join(', ') || 'Nije navedeno'}</span>
            </div>
            
            <div class="field">
              <span class="label">PDV obveznik:</span>
              <span class="value">${pdvObligation?.join(', ') || 'Nije navedeno'}</span>
            </div>
            
            <div class="field">
              <span class="label">Preduzetnik:</span>
              <span class="value">${entrepreneurType?.join(', ') || 'Nije navedeno'}</span>
            </div>
            
            <div class="field">
              <span class="label">Broj zaposlenih:</span>
              <span class="value">${employees || 'Nije navedeno'}</span>
            </div>
            
            <div class="field">
              <span class="label">Prosječan broj ulaznih računa:</span>
              <span class="value">${incomingInvoices || 'Nije navedeno'} (mjesečnih)</span>
            </div>
            
            <div class="field">
              <span class="label">Prosječan broj izlaznih računa:</span>
              <span class="value">${outgoingInvoices || 'Nije navedeno'} (mjesečnih)</span>
            </div>
            
            <div class="field">
              <span class="label">Prosječan broj mjesečnih izvoda:</span>
              <span class="value">${monthlyStatements || 'Nije navedeno'}</span>
            </div>
            
            <div class="field">
              <span class="label">Telefon:</span>
              <span class="value">${phone || 'Nije navedeno'}</span>
            </div>
            
            <div class="field">
              <span class="label">Email:</span>
              <span class="value">${email || 'Nije navedeno'}</span>
            </div>
            
            ${additionalQuestion ? `
            <div class="field">
              <span class="label">Dodatno pitanje:</span>
              <div class="value" style="margin-top: 10px; padding: 10px; background-color: white; border-left: 3px solid #4CAF50;">
                ${additionalQuestion}
              </div>
            </div>
            ` : ''}
          </div>
          
          <div class="footer">
            <p>Ovaj upit je poslat sa web stranice Knjigovodstvenog biroa Panda</p>
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
        <title>Potvrda upita za cijenu</title>
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
            <h1>Hvala vam na upitu!</h1>
            <p>Knjigovodstveni biro Panda</p>
          </div>
          
          <div class="content">
            <p>Poštovani/a,</p>
            
            <p>Zahvaljujemo vam na upitu za cijenu naših usluga. Uskoro ćemo vam poslati detaljnu ponudu prilagođenu vašim potrebama.</p>
            
            <p>Naš tim će analizirati vaše zahtjeve i kontaktirati vas u najkraćem mogućem roku.</p>
            
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
      from: process.env.SMTP_USER || 'your-email@gmail.com',
      to: process.env.ADMIN_EMAIL || 'office@panda.ba',
      subject: '🐼 Novi upit za cijenu - Knjigovodstveni biro Panda',
      html: adminEmailHtml,
    });

    // Send confirmation email to client
    if (email) {
      await transporter.sendMail({
        from: process.env.SMTP_USER || 'your-email@gmail.com',
        to: email,
        subject: 'Potvrda upita za cijenu - Knjigovodstveni biro Panda',
        html: clientEmailHtml,
      });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Upit je uspješno poslat. Uskoro ćemo vas kontaktirati.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Greška pri slanju upita. Molimo pokušajte ponovo.' },
      { status: 500 }
    );
  }
} 