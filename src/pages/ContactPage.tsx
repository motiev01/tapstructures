// src/pages/ContactPage.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

const DEFAULT_FORMSPREE_CODE = ""; // Leave empty in production, fill only for local testing

// Styled components for layout and form elements
const ContactSection = styled.section`
  padding: 5rem 0;
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
  max-width: 600px;
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
  // In src/pages/ContactPage.tsx
const onSubmit = async (data: FormData) => {
  // Check honeypot for bot detection
  if (data.honeypot) {
    return; // It's a bot if honeypot is filled
  }
  
  setIsSubmitting(true);
  setSubmitError(null);
  
  try {
    // Direct implementation with hard-coded Formspree endpoint (temporary for debugging)
    const response = await fetch(process.env.REACT_APP_FORMSPREE_ENDPOINT || '', {
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
    
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || 'Failed to send message');
    }
    
    setSubmitSuccess(true);
    reset(); // Reset form fields
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  } catch (error) {
    console.error('Error submitting form:', error);
    setSubmitError('There was an error sending your message. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};
  
  return (
    <ContactSection>
      <Container>
        <PageHeading>Get in Touch</PageHeading>
        <ContactDescription>
          Have a question or want to discuss a potential project? Fill out the form below
          and I'll get back to you as soon as possible.
        </ContactDescription>
        
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
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </ContactForm>
      </Container>
    </ContactSection>
  );
};

export default ContactPage;