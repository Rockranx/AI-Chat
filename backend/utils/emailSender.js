import nodemailer from 'nodemailer';

const getTransporter = () => {
  // Use Ethereal if no service specified
  if (!process.env.EMAIL_SERVICE || process.env.EMAIL_SERVICE === 'ethereal') {
    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: process.env.ETHEREAL_USER,
        pass: process.env.ETHEREAL_PASSWORD,
      },
    });
  }

  // Mailtrap configuration
  if (process.env.EMAIL_SERVICE === 'mailtrap') {
    return nodemailer.createTransport({
      host: 'live.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });
  }

  // Gmail configuration
  if (process.env.EMAIL_SERVICE === 'gmail') {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // SendGrid configuration
  if (process.env.EMAIL_SERVICE === 'sendgrid') {
    return nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
      },
    });
  }

  throw new Error('Invalid EMAIL_SERVICE specified in environment variables');
};

export const sendEmail = async (to, subject, html) => {
  try {
    const transporter = getTransporter();
    const info = await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_ADDRESS}>`,
      to,
      subject,
      html,
      text: html.replace(/<[^>]+>/g, ''),
    });

    console.log(`Email sent to ${to}: ${info.messageId}`);
    
    // For Ethereal: show preview URL
    if (process.env.EMAIL_SERVICE === 'ethereal') {
      console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
    }
    
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error: error.message };
  }
};