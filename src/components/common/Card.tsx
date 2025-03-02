// src/components/common/Card.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  elevated?: boolean;
  onClick?: () => void;
}

// Using $ prefix for transient props
const StyledCard = styled(motion.div)<{ $elevated?: boolean }>`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius};
  padding: 1.5rem;
  box-shadow: ${props => props.$elevated 
    ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' 
    : '0 1px 3px rgba(0, 0, 0, 0.1)'};
  transition: box-shadow 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  &:hover {
    box-shadow: ${props => props.$elevated 
      ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
      : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'};
  }
`;

// Passing elevated prop as $elevated to avoid DOM attribute issues
const Card: React.FC<CardProps> = ({ children, elevated = false, onClick }) => {
  return (
    <StyledCard 
      $elevated={elevated} 
      onClick={onClick}
      whileHover={{ y: elevated ? -5 : 0 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {children}
    </StyledCard>
  );
};

export default Card;