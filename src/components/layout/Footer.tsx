// src/components/layout/Footer.tsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.backgroundAlt};
  padding: 3rem 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterHeading = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const FooterText = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 0.9rem;
  line-height: 1.5;
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: ${props => props.theme.colors.textLight};
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterHeading>TapStructures</FooterHeading>
          <FooterText>
            Merging innovation and expertise to pioneer a new path forward. 
            Construction and development solutions that inspire.
          </FooterText>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Navigation</FooterHeading>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/insights">Insights</FooterLink>
          <FooterLink to="/portfolio">Portfolio</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
          
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Contact</FooterHeading>
          <FooterText>
            Email: <a href="mailto:tapstructures@gmail.com" style={{ color: 'inherit' }}>tapstructures@gmail.com</a>
          </FooterText>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        © {currentYear} TapStructures. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;