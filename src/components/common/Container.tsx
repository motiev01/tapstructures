// src/components/common/Container.tsx
import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
  narrow?: boolean;
}

// Using $ prefix for transient props in styled-components
const StyledContainer = styled.div<{ $narrow?: boolean }>`
  width: 100%;
  max-width: ${props => props.$narrow ? '800px' : '1200px'};
  padding: 0 1.5rem;
  margin: 0 auto;
`;

// This component passes the narrow prop as $narrow to avoid DOM attribute issues
const Container: React.FC<ContainerProps> = ({ children, narrow = false }) => {
  return <StyledContainer $narrow={narrow}>{children}</StyledContainer>;
};

export default Container;