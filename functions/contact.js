// functions/contact.js
export async function onRequestPost(context) {
    try {
      // Parse the request body
      const request = context.request;
      const formData = await request.json();
      
      // Validate the request data
      if (!formData.name || !formData.email || !formData.message) {
        return new Response(JSON.stringify({
          success: false,
          message: 'Missing required fields'
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      // Check for honeypot
      if (formData.honeypot) {
        // Return success but don't send email (silently reject bot submissions)
        return new Response(JSON.stringify({
          success: true
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      // Check email format with regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        return new Response(JSON.stringify({
          success: false,
          message: 'Invalid email format'
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      // Set up email content
      const subject = formData.subject || `New Contact from TapStructures: ${formData.name}`;
      const messageContent = `
        Name: ${formData.name}
        Email: ${formData.email}
        
        Message:
        ${formData.message}
      `;
      
      // Send email using Cloudflare Email Routing
      const email = {
        from: "contact-form@tapstructures.com",
        to: "tapstructures@gmail.com",
        subject: subject,
        text: messageContent,
        headers: {
          "Reply-To": formData.email
        }
      };
      
      // Send email using Cloudflare Email Workers
      await context.env.SENDGRID.send(email);
      
      // Return success response
      return new Response(JSON.stringify({
        success: true,
        message: 'Email sent successfully'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
      
    } catch (error) {
      // Log error to Cloudflare
      console.error('Contact form error:', error);
      
      // Return error response
      return new Response(JSON.stringify({
        success: false,
        message: 'Server error processing request'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }