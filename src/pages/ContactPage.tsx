// src/pages/ContactPage.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import mascotImage from '../assets/images/test-img-01.webp';
import Container from '../components/common/Container';
import Button from '../components/common/Button';


// Styled components for layout and form elements
const ContactSection = styled.section`
  padding: 5rem 0;
`;

// New flexible container for layout
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: flex-start;
  justify-content: space-between;
`;

// Left column for form
const FormColumn = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
`;

// Right column for mascot
const MascotColumn = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  
  @media (max-width: 1024px) {
    order: -1; // Places mascot above form on mobile
    width: 100%;
    padding: 0 0 2rem 0;
  }
`;

const MascotImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const PageHeading = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
`;

const ContactDescription = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin-bottom: 2.5rem;
`;

const ContactForm = styled.form`
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${props => props.theme.colors.backgroundAlt};
  border-radius: ${props => props.theme.borderRadius};
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${props => props.theme.colors.backgroundAlt};
  border-radius: ${props => props.theme.borderRadius};
  font-family: inherit;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const ErrorMessage = styled.p`
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled(motion.div)`
  background-color: #c6f6d5;
  color: #276749;
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 1.5rem;
`;

// Hidden field for bot detection (honeypot)
const HoneypotField = styled.div`
  display: none;
`;

// Interface for form data to ensure type safety
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string; // For bot detection
}

const LoadingSpinner = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-left: 0.5rem;
  border: 0.2em solid rgba(255,255,255,0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ContactPage: React.FC = () => {
  // State to track form submission progress and results
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  // Initialize react-hook-form
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<FormData>();
  
  // Form submission handler
  const onSubmit = async (data: FormData) => {
    // Check honeypot for bot detection
    if (data.honeypot) {
      return; // It's a bot if honeypot is filled
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const endpoint = 'https://formspree.io/f/mdkaqwdo';
      console.log('Attempting to send to Formspree:', {
        url: endpoint,
        data: {
          name: data.name,
          email: data.email,
          subject: data.subject || 'New Contact from Website',
          message: data.message
        }
      });

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject || 'New Contact from Website',
          message: data.message
        }),
      });
      
      console.log('Formspree response:', {
        status: response.status,
        ok: response.ok
      });
      
      const result = await response.json();
      console.log('Formspree result:', result);

      if (!response.ok || result.error) {
        throw new Error(result.error || `HTTP error! status: ${response.status}`);
      }
      
      setSubmitSuccess(true);
      reset(); // Reset form fields
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : 'There was an error sending your message. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <ContactSection>
      <Container>
        <PageHeading>Get in Touch</PageHeading>
        <ContactDescription>
          Have a vision for the future of your industry? Want to discuss a potential project or venture? Fill out the form below
          and let's forge a new path forward together.
        </ContactDescription>
        
        <FlexContainer>
          <FormColumn>
            {submitSuccess && (
              <SuccessMessage
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Your message has been sent successfully! I'll get back to you soon.
              </SuccessMessage>
            )}
            
            {submitError && (
              <ErrorMessage>{submitError}</ErrorMessage>
            )}
            
            <ContactForm onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name"
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Please enter a valid email'
                    }
                  })}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="subject">Subject (Optional)</Label>
                <Input 
                  id="subject"
                  type="text"
                  {...register('subject')}
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message"
                  {...register('message', { required: 'Message is required' })}
                  aria-invalid={errors.message ? 'true' : 'false'}
                />
                {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
              </FormGroup>
              
              {/* Hidden honeypot field to catch bots */}
              <HoneypotField>
                <Input 
                  type="text"
                  {...register('honeypot')}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </HoneypotField>
              
              <Button 
                type="submit" 
                primary 
                large
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    Sending
                    <LoadingSpinner aria-hidden="true" />
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </ContactForm>
          </FormColumn>
          
          <MascotColumn>
            <MascotImage 
              src={mascotImage} 
              alt="TAP Construction Mascot" 
              width="400"
              height="400"
            />
          </MascotColumn>
        </FlexContainer>
      </Container>
    </ContactSection>
  );
};

export default ContactPage;