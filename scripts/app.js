document.addEventListener('DOMContentLoaded', async () => {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    // Function to show status messages
    const showStatus = (message, isError = false) => {
        formStatus.textContent = message;
        formStatus.className = `form-status ${isError ? 'error' : 'success'}`;
        formStatus.style.display = 'block';
    };

    // Get initial CSRF token
    try {
        const response = await fetch('https://tap-contact-worker.matttaparauskas.workers.dev/csrf-token', {
            credentials: 'include'
        });
        const data = await response.json();
        document.getElementById('csrf-token').value = data.token;
    } catch (error) {
        console.error('Failed to get CSRF token:', error);
        showStatus('Failed to initialize form security. Please refresh the page.', true);
    }
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        try {
            // Validate fields
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            const csrfToken = document.getElementById('csrf-token').value;

            if (!name || !email || !subject || !message) {
                throw new Error('Please fill in all fields');
            }

            const formData = { name, email, subject, message, csrfToken };

            const response = await fetch('https://tap-contact-worker.matttaparauskas.workers.dev', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to send message');
            }

            // Get new CSRF token
            const tokenResponse = await fetch('https://tap-contact-worker.matttaparauskas.workers.dev/csrf-token', {
                credentials: 'include'
            });
            const tokenData = await tokenResponse.json();
            document.getElementById('csrf-token').value = tokenData.token;

            // Show success and reset form
            showStatus('Thank you for your message! We\'ll get back to you soon.');
            form.reset();

        } catch (error) {
            showStatus(error.message || 'There was an error sending your message. Please try again.', true);
            console.error('Form submission error:', error);
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });
});