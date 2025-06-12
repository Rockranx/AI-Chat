import { sendEmail } from './emailSender.js';
import crypto from 'crypto';

export const generateResetToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

export const sendPasswordResetEmail = async (email, token) => {
  const resetLink = `${process.env.CLIENT_URL}/restore-password/${token}`;
  
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #2563eb;">Password Reset Request</h2>
      <p>We received a request to reset your password. Click the button below to reset it:</p>
      <p style="text-align: center; margin: 30px 0;">
        <a href="${resetLink}" 
           style="display: inline-block; padding: 12px 24px; background-color: #2563eb; 
                  color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
          Reset Password
        </a>
      </p>
      <p>Or copy this link to your browser:</p>
      <p style="word-break: break-all; background-color: #f3f4f6; padding: 10px; border-radius: 5px;">
        ${resetLink}
      </p>
      <p>This link will expire in 10 minutes.</p>
      <p>If you didn't request a password reset, please ignore this email.</p>
      <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
        © ${new Date().getFullYear()} Mental Health App. All rights reserved.
      </p>
    </div>
  `;

  return sendEmail(
    email,
    'Password Reset Request',
    emailHtml
  );
};