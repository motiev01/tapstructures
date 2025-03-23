// src/pages/LandingPage.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import excavatorImage from '../assets/images/Excavator-Tap-12.png';

const HeroSection = styled.section`
  padding: 6rem 0;
  text-align: center;
`;

const HeroHeading = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubheading = styled(motion.p)`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  color: ${props => props.theme.colors.textLight};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeaturesSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.backgroundAlt};
`;

const SectionHeading = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.25rem;
  color: ${props => props.theme.colors.primary};
`;

const FeatureCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
`;

const FeatureTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
`;

const CTASection = styled.section`
  padding: 5rem 0;
  text-align: center;
`;

const ImageBackgroundSection = styled.section`
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${excavatorImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(0.7);
    z-index: 1;
  }
`;

const ImageContent = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  width: 100%;
`;

const ImageHeading = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ImageText = styled(motion.p)`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

// Animation variants for staggered animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Add this before your LandingPage component
const featureCards = [
  {
    icon: '🏗️',
    title: 'Field & Project Management Solutions',
    description: 'We provide comprehensive data-driven results, customized company architecture and consultation, field enhancements and tools, document handling, and much more... We\'re blending years of industry expertise with state of the art intelligence to create higher quality AND more profitable construction companies.'
  },
  {
    icon: '💻',
    title: 'Software and Hardware Development',
    description: 'Currently building customizable and unique solutions to empower a new generation of builders. We offer critical on-site tools, a powerhouse of in-office solutions, web services that showcase your project quality, and an elevated connection with your partners and clients utilizing effective marketing strategies and support.'
  },
  {
    icon: '💡',
    title: 'Fresh Approaches',
    description: 'We\'re bringing a fresh set of eyes to a hardened team of professionals with the full power of AI technologies to implement creative approaches and solve deep-seated issues across industries. Unbound by obsolete practices but humbly grounded in their battle-tested experience.'
  }
];

const BackToTopButton = styled(motion.button)<{ $isVisible: boolean }>`
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

const LandingPage: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <HeroSection>
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <HeroHeading variants={fadeIn}>
              Welcome to TapStructures
            </HeroHeading>
            <HeroSubheading variants={fadeIn}>
              Let's merge tradition and intelligence with 2 Taps.
            </HeroSubheading>
            <motion.div variants={fadeIn}>
              <ButtonGroup>
                <Button 
                  as={Link} 
                  to="/contact" 
                  primary 
                  large
                >
                  Get in Touch
                </Button>
                <Button 
                  as={Link} 
                  to="/about" 
                  large
                >
                  Learn More
                </Button>
              </ButtonGroup>
            </motion.div>
          </motion.div>
        </Container>
      </HeroSection>

      <ImageBackgroundSection>
        <Container>
          <ImageContent>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <ImageHeading variants={fadeIn}>
                Building the Future of Construction
              </ImageHeading>
              <ImageText variants={fadeIn}>
                Combining cutting-edge technology with industry expertise to revolutionize how we build
              </ImageText>
              <motion.div variants={fadeIn}>
                <Button 
                  as={Link} 
                  to="/services" 
                  primary 
                  large
                >
                  Explore Our Services
                </Button>
              </motion.div>
            </motion.div>
          </ImageContent>
        </Container>
      </ImageBackgroundSection>

      <FeaturesSection>
        <Container>
          <SectionHeading>What We Offer</SectionHeading>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <FeatureCards>
              {featureCards.map((feature, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <FeatureCard>
                    <FeatureIcon>{feature.icon}</FeatureIcon>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>
                      {feature.description}
                    </FeatureDescription>
                  </FeatureCard>
                </motion.div>
              ))}
            </FeatureCards>
          </motion.div>
        </Container>
      </FeaturesSection>

      <CTASection>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <SectionHeading>Ready to Get Started?</SectionHeading>
              <HeroSubheading>
                Hi, I'm Matt Tap! A builder wielding a passion for solving complex problems with out-of-the-box solutions.
                I'm currently working towards constructing a wider bridge between tradition and technology.
                I envision new practices mounted high on the shoulders of giants and empowered by almost unimaginable technological advancements. 
                I'm looking to send shockwaves through the industry, and for like-minded trailblazers to join me on this journey. Lets shape the future together.
              </HeroSubheading>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Button 
                as={Link} 
                to="/contact" 
                primary 
                large
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </CTASection>

      <BackToTopButton
        $isVisible={showBackToTop}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </BackToTopButton>
    </>
  );
};

export default LandingPage;