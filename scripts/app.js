// Sample project data
const projects = [
    { title: 'Project 1', description: 'Field Engineer on the Ascend at Chisholm Trail 388 unit multifamily community.' },
    { title: 'Project 2', description: 'Building a Construction RAG to further enable the work we do and value we can provide.' },
    { title: 'Project 3', description: 'Hopefully will make this website more useful in the future.' }
  ];
  
  // Dynamically load projects
  const projectGrid = document.getElementById('project-grid');
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    projectGrid.appendChild(projectCard);
  });

  // Blog post data
const blogPosts = [
  {
    title: "Merging Tradition and Intelligence",
    content: "Discuss the emergence of AI and its impact on traditional industries, and how we can adapt to a smarter future.",
  },
  {
    title: "Transforming an Industry",
    content: "Explore how the outdoors can spark creativity and bring inner calm.",
  },
  {
    title: "Projects - Dev - Products",
    content: "Potentially coming soon.",
  },
];

// Dynamically load blog posts

const blogGrid = document.getElementById('blog-grid');
blogPosts.forEach(post => {
  const blogPost = document.createElement('div');
  blogPost.className = 'blog-post';
  blogPost.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.content}</p>
  `;
  blogGrid.appendChild(blogPost);
});

// Add this to your app.js
document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  // Add your form submission logic here
  // Consider adding loading states and error handling
});


// Form validation and security enhancements
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');

  // Regular expressions for validation
  const nameRegex = /^[a-zA-Z\s]{2,50}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const messageRegex = /^[\s\S]{10,1000}$/; // Between 10 and 1000 characters

  // Function to show error message
  const showError = (input, message) => {
      const formGroup = input.parentElement;
      let errorDiv = formGroup.querySelector('.error-message');
      
      if (!errorDiv) {
          errorDiv = document.createElement('div');
          errorDiv.className = 'error-message';
          formGroup.appendChild(errorDiv);
      }
      
      errorDiv.textContent = message;
      errorDiv.style.color = '#dc3545';
      errorDiv.style.fontSize = '0.8rem';
      errorDiv.style.marginTop = '0.25rem';
      input.style.borderColor = '#dc3545';
  };

  // Function to clear error message
  const clearError = (input) => {
      const formGroup = input.parentElement;
      const errorDiv = formGroup.querySelector('.error-message');
      if (errorDiv) {
          errorDiv.remove();
      }
      input.style.borderColor = '#ddd';
  };

  // Real-time validation
  const validateInput = (input, regex, errorMessage) => {
      input.addEventListener('input', () => {
          if (!regex.test(input.value.trim())) {
              showError(input, errorMessage);
          } else {
              clearError(input);
          }
      });
  };

  // Add validation for each field
  validateInput(nameInput, nameRegex, 'Please enter a valid name (2-50 letters only)');
  validateInput(emailInput, emailRegex, 'Please enter a valid email address');
  validateInput(messageInput, messageRegex, 'Message must be between 10 and 1000 characters');

  // Prevent spam by adding a minimum time check
  const startTime = Date.now();
  
  form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Check if form was filled too quickly (potential bot)
      const timeDiff = Date.now() - startTime;
      if (timeDiff < 3000) { // Less than 3 seconds
          alert('Please take your time to fill out the form properly.');
          return;
      }

      // Validate all fields before submission
      let isValid = true;
      
      if (!nameRegex.test(nameInput.value.trim())) {
          showError(nameInput, 'Please enter a valid name');
          isValid = false;
      }
      
      if (!emailRegex.test(emailInput.value.trim())) {
          showError(emailInput, 'Please enter a valid email address');
          isValid = false;
      }
      
      if (!messageRegex.test(messageInput.value.trim())) {
          showError(messageInput, 'Message must be between 10 and 1000 characters');
          isValid = false;
      }

      // Check for common spam patterns
      const spamPatterns = [
          /viagra/i,
          /\[url=/i,
          /https?:\/\//i, // No direct links allowed
          /<[^>]*>/, // No HTML tags
          /\b(free|buy|sell|cheap|discount|offer|winner|won|prize)\b/i
      ];

      const textToCheck = `${nameInput.value} ${subjectInput.value} ${messageInput.value}`.toLowerCase();
      
      for (const pattern of spamPatterns) {
          if (pattern.test(textToCheck)) {
              alert('Your message contains disallowed content. Please revise.');
              return;
          }
      }

      if (isValid) {
          // Show loading state
          const submitButton = form.querySelector('button[type="submit"]');
          const originalText = submitButton.textContent;
          submitButton.disabled = true;
          submitButton.textContent = 'Sending...';

          try {
              // Submit the form if all validations pass
              await fetch(form.action, {
                  method: 'POST',
                  body: new FormData(form)
              });
              
              // Show success message
              form.innerHTML = '<div class="success-message">Thank you for your message! I\'ll get back to you soon.</div>';
          } catch (error) {
              alert('There was an error sending your message. Please try again.');
              submitButton.disabled = false;
              submitButton.textContent = originalText;
          }
      }
  });
});