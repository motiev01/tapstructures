// src/pages/LandingPage.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

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

const LandingPage: React.FC = () => {
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
                I envision an industry mounted on the shoulders of giants and empowered by almost unimaginable technological advancements. 
                I'm looking to send shockwaves through the industry, and for like-minded individuals to join me on this journey. Lets shape the future together.
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
    </>
  );
};

export default LandingPage;