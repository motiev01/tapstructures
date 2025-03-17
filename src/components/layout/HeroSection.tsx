// src/components/HeroSection.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import your TAP mascot image
// import TapMascot from '../assets/images/tap-mascot.png';

// Custom styled components
const HeroContainer = styled.section`
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  background-color: #f8f9ff;
`;

const BlueprintBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  pointer-events: none;
  z-index: 0;
  background-image: 
    linear-gradient(${props => props.theme.colors.primary}10 1px, transparent 1px),
    linear-gradient(90deg, ${props => props.theme.colors.primary}10 1px, transparent 1px),
    radial-gradient(circle at 50px 150px, ${props => props.theme.colors.primary}15 10px, transparent 11px),
    radial-gradient(circle at 150px 250px, ${props => props.theme.colors.primary}15 15px, transparent 16px),
    radial-gradient(circle at 250px 100px, ${props => props.theme.colors.primary}15 20px, transparent 21px);
  background-size: 
    40px 40px,
    40px 40px,
    100% 100%,
    100% 100%,
    100% 100%;

  @media (max-width: 768px) {
    background-size: 
      30px 30px,
      30px 30px,
      100% 100%,
      100% 100%,
      100% 100%;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 0.25rem;
  font-weight: 500;
  transition: background-color 0.3s, transform 0.2s;
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryDark || '#8462ff'};
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: white;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 0.25rem;
  font-weight: 500;
  transition: background-color 0.3s, transform 0.2s;
  
  &:hover {
    background-color: ${props => props.theme.colors.backgroundAlt || '#f5f5f7'};
    transform: translateY(-2px);
  }
`;

const IconsContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
`;

const Icon = styled(motion.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  opacity: 0.6;
  
  svg {
    width: 100%;
    height: 100%;
    fill: ${props => props.theme.colors.primary};
  }
`;

const MascotContainer = styled(motion.div)`
  position: absolute;
  right: 5%;
  bottom: 0;
  width: 150px;
  height: auto;
  z-index: 2;
  display: none; /* Hidden by default, enable when you have the mascot image */
  
  @media (max-width: 768px) {
    display: none;
  }
  
  img {
    width: 100%;
    height: auto;
  }
`;

// Blueprint icons as SVG components
const ConstructionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z" />
  </svg>
);

const CircuitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M7,2V4H8V18H4A1,1 0 0,1 3,17V7A1,1 0 0,1 4,6H6V4H7M10,6A1,1 0 0,1 11,7V17A1,1 0 0,1 10,18A1,1 0 0,1 9,17V7A1,1 0 0,1 10,6M15,16H14V18H13V16H11V15H13V13H14V15H16V16H15M8,10H6V11H8V10M8,8H6V9H8V8M8,12H6V13H8V12M8,14H6V15H8V14M8,16H6V17H8V16Z" />
  </svg>
);

const ToolsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M21.71 20.29L20.29 21.71A1 1 0 0 1 18.88 21.71L7 9.85A3.81 3.81 0 0 1 6 10A4 4 0 0 1 2.22 4.7L4.76 7.24L5.29 6.71L6.71 5.29L7.24 4.76L4.7 2.22A4 4 0 0 1 10 6A3.81 3.81 0 0 1 9.85 7L21.71 18.88A1 1 0 0 1 21.71 20.29M2.29 18.88A1 1 0 0 0 2.29 20.29L3.71 21.71A1 1 0 0 0 5.12 21.71L10.59 16.25L7.76 13.42M20 2L16 4V6L13.83 8.17L15.83 10.17L18 8H20L22 4Z" />
  </svg>
);

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <BlueprintBackground />
      
      <IconsContainer>
        <Icon
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ top: '15%', left: '10%' }}
        >
          <ConstructionIcon />
        </Icon>
        
        <Icon
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{ top: '10%', right: '15%' }}
        >
          <CircuitIcon />
        </Icon>
        
        <Icon
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{ bottom: '20%', left: '20%' }}
        >
          <ToolsIcon />
        </Icon>
      </IconsContainer>
      
      <ContentWrapper>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to TapStructures
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Let's merge tradition and intelligence with 2 Taps.
        </Subtitle>
        
        <ButtonContainer
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <PrimaryButton to="/contact">Get in Touch</PrimaryButton>
          <SecondaryButton to="/about">Learn More</SecondaryButton>
        </ButtonContainer>
      </ContentWrapper>
      
      {/* Uncomment when you have the mascot image */}
      {/* <MascotContainer
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <img src={TapMascot} alt="TAP Construction Mascot" />
      </MascotContainer> */}
    </HeroContainer>
  );
};

export default HeroSection;