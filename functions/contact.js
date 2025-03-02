// Simplified Cloudflare Pages Function for contact form
export async function onRequest(context) {
  // Only handle POST requests for the contact form
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }
  
  try {
    // Process the form data
    const formData = await context.request.json();
    
    // Get the Formspree form code from environment variable
    const formspreeCode = context.env.FORMSPREE_CODE;
    if (!formspreeCode) {
      throw new Error("Missing Formspree configuration");
    }
    
    // Forward the request to Formspree
    const response = await fetch(`https://formspree.io/f/${formspreeCode}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'New Contact from Website',
        message: formData.message
      })
    });
    
    // Return the Formspree response to the client
    const result = await response.json();
    return new Response(JSON.stringify(result), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    // Return a structured error response
    return new Response(JSON.stringify({
      success: false,
      message: "Server error processing request"
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}