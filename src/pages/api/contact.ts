import type { APIRoute } from 'astro';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key from environment variables
if (import.meta.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse the JSON body from the request
    const body = await request.json();
    const { name, email, category, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing required fields'
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Check if API key is configured
    if (!import.meta.env.SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY is not configured');
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Email service not configured. Please try again later.'
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Compose the email
    const emailContent = {
      to: 'steve@4castconcrete.com', // Your email
      from: 'noreply@mytinyceo.com', // Must be a verified sender in SendGrid
      replyTo: email, // User's email for easy replies
      subject: `MyTinyCEO Contact Form: ${category || 'General Question'}`,
      text: `
Name: ${name}
Email: ${email}
Category: ${category || 'Not specified'}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a5f;">New Contact Form Submission</h2>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Category:</strong> ${category || 'Not specified'}</p>
          </div>

          <div style="margin: 20px 0;">
            <strong>Message:</strong>
            <p style="background-color: #ffffff; padding: 15px; border-left: 4px solid #1B6B6B; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">

          <p style="color: #6b7280; font-size: 12px;">
            This message was sent via the MyTinyCEO.com contact form.
          </p>
        </div>
      `
    };

    // Send the email via SendGrid
    await sgMail.send(emailContent);

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Your message has been sent successfully!'
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error: any) {
    console.error('Error sending email:', error);

    // Return error response
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to send message. Please try again or email directly.',
        details: error.message
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
