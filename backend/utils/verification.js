import { sendEmail } from './emailSender.js';
import crypto from 'crypto';

export const generateVerificationToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

export const sendVerificationEmail = async (email, token) => {
  // Point to backend API route
  const verificationLink = `${process.env.API_BASE_URL}/api/auth/verify-email/${token}`;
  
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Email Verification</h2>
      <p>Please verify your email address to complete your registration:</p>
      <p>
        <a href="${verificationLink}" 
           style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; 
                  color: white; text-decoration: none; border-radius: 5px;">
          Verify Email
        </a>
      </p>
      <p>Or copy this link to your browser:</p>
      <p style="word-break: break-all;">${verificationLink}</p>
      <p>This link will expire in 24 hours.</p>
      <p>If you didn't create an account, please ignore this email.</p>
    </div>
  `;

  return sendEmail(
    email,
    'Verify Your Email Address',
    emailHtml
  );
};