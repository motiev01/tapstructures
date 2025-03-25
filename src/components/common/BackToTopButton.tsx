// src/components/common/BackToTopButton.tsx
// Created a shared BackToTopButton component to avoid duplication across pages
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface BackToTopButtonProps {
  isVisible: boolean;
  onClick: () => void;
}

const StyledBackToTopButton = styled(motion.button)<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: ${props => props.$isVisible ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
  }
`;

const BackToTopButton: React.FC<BackToTopButtonProps> = ({ isVisible, onClick }) => {
  return (
    <StyledBackToTopButton
      $isVisible={isVisible}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      ↑
    </StyledBackToTopButton>
  );
};

export default BackToTopButton; 