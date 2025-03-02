// src/components/common/Button.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

interface ButtonProps {
  primary?: boolean;
  large?: boolean;
  as?: React.ElementType;
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

// Using $ prefix for transient props that shouldn't be passed to the DOM
const StyledButton = styled(motion.button)<{ $primary?: boolean; $large?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.$primary ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.$primary ? 'white' : props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.$large ? '0.8rem 2rem' : '0.6rem 1.5rem'};
  font-size: ${props => props.$large ? '1.1rem' : '1rem'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    background-color: ${props => props.$primary ? props.theme.colors.primaryLight : 'rgba(167, 139, 250, 0.1)'};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    background-color: #e0e0e0;
    border-color: #e0e0e0;
    color: #a0a0a0;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

// This component handles various props like primary, large, onClick, etc.
// The $ prefix for props in StyledButton helps avoid passing them to the DOM element
const Button: React.FC<ButtonProps> = ({ 
  primary = false, 
  large = false, 
  children, 
  as, 
  to, 
  onClick,
  type = 'button',
  disabled = false,
  ...props 
}) => {
  return (
    <StyledButton
      as={as}
      to={to}
      onClick={onClick}
      $primary={primary}
      $large={large}
      type={type}
      disabled={disabled}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;