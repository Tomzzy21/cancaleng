import nodemailer from 'nodemailer';

export const sendContactEmail = async ({ name, email, phone, message }) => {
  // Create a test account if in development
  const testAccount = await nodemailer.createTestAccount();

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.ethereal.email',
    port: process.env.EMAIL_PORT || 587,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER || testAccount.user,
      pass: process.env.EMAIL_PASSWORD || testAccount.pass,
    },
  });

  // Email options
  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_FROM || email}>`,
    to: process.env.EMAIL_TO || 'info@cancalengineering.com',
    subject: `New Contact Form Submission from ${name}`,
    text: `
      You have received a new message from your website contact form.
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      
      Message:
      ${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #111827;">New Contact Form Submission</h2>
        <p>You have received a new message from your website contact form.</p>
        
        <div style="background-color: #f9fafb; padding: 1.5rem; border-radius: 0.5rem; margin: 1.5rem 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          
          <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid #e5e7eb;">
            <p style="font-weight: 600; margin-bottom: 0.5rem;">Message:</p>
            <p style="white-space: pre-line; background-color: white; padding: 1rem; border-radius: 0.375rem; border: 1px solid #e5e7eb;">
              ${message}
            </p>
          </div>
        </div>
        
        <p style="font-size: 0.875rem; color: #6b7280; margin-top: 2rem;">
          This message was sent from the contact form on Cancal Engineering's website.
        </p>
      </div>
    `,
  };

  // Send email
  const info = await transporter.sendMail(mailOptions);
  
  // Log the preview URL in development
  if (process.env.NODE_ENV !== 'production') {
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  }
  
  return info;
};

export default sendContactEmail;
