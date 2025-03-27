// src/pages/LandingPage.tsx
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import BackToTopButton from '../components/common/BackToTopButton';
import { ThemedProps, MotionHeadingProps, MotionTextProps } from '../types/theme';
import backgroundVideo from '../assets/videos/LandingPage-Excavator-01.mp4';
import dumptruckImage from '../assets/images/Dumptruck-Tap-01.webp';

// Props for feature cards
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const HeroSection = styled.section`
  padding: 6rem 0;
  text-align: center;
`;

const HeroHeading = styled(motion.h1)<ThemedProps & MotionHeadingProps>`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubheading = styled(motion.p)<ThemedProps & MotionTextProps>`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  color: ${({ theme }) => theme.colors.textLight};
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

const FeaturesSection = styled.section<ThemedProps>`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
`;

const SectionHeading = styled.h2<ThemedProps>`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.25rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const FeatureCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StyledFeatureCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const FeatureIcon = styled.div<ThemedProps>`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const FeatureTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const FeatureDescription = styled.p<ThemedProps>`
  color: ${({ theme }) => theme.colors.textLight};
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const ImageBackgroundSection = styled.section`
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-height: 500px;
    padding: 4rem 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 2;
  }
`;

const ImageContent = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  width: 100%;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    padding-bottom: 2rem;
  }
`;

const ImageHeading = styled(motion.h2)<MotionHeadingProps>`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 1rem;
  }
`;

const ImageText = styled(motion.p)<MotionTextProps>`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
`;

const MissionSection = styled.section<ThemedProps>`
  padding: 8rem 0;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const MissionText = styled(motion.p)<ThemedProps & MotionTextProps>`
  font-size: 1.4rem;
  max-width: 900px;
  margin: 0 auto;
  line-height: 2;
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: 300;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.8;
    padding: 0 1rem;
  }
`;

const MissionHeading = styled(SectionHeading)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 400;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTASection = styled(ImageBackgroundSection)`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: visible;
  
  @media (max-width: 768px) {
    min-height: auto;
    padding: 6rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const CTABackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${dumptruckImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  @media (max-width: 768px) {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-attachment: scroll;
  }
`;

const CTAContent = styled(ImageContent)`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    min-height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

// Animation variants for staggered animations
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Feature cards data
const featureCards: FeatureCardProps[] = [
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
  const [showBackToTop, setShowBackToTop] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.78; // Sets playback speed
    }
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
        <VideoBackground
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </VideoBackground>
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
                  <StyledFeatureCard>
                    <FeatureIcon>{feature.icon}</FeatureIcon>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>
                      {feature.description}
                    </FeatureDescription>
                  </StyledFeatureCard>
                </motion.div>
              ))}
            </FeatureCards>
          </motion.div>
        </Container>
      </FeaturesSection>

      <MissionSection>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <MissionHeading>Our Mission</MissionHeading>
              <MissionText variants={fadeIn}>
                Everyone is a builder. Imaginative architectures scattered throughout the world shape the story of humanity. Some lost to time and others relished in our history books. Building is in our bones. At TapStructures, we will change the way humans build. We believe everyone should have the ability to create, to build, to construct. We hope to empower all those on their journey to explore what's possible. Crafted by hand, guided by intelligence.
              </MissionText>
            </motion.div>
          </motion.div>
        </Container>
      </MissionSection>

      <CTASection>
        <CTABackground />
        <Container>
          <CTAContent>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <ImageHeading>Ready to Get Started?</ImageHeading>
                <ImageText>
                  Hey, I'm Matt Tap! A builder wielding a passion for tackling complex problems with out-of-the-box solutions.
                  I'm currently working towards constructing a wider bridge between tradition and technology.
                  I see new practices taking off, high above the shoulders of giants, fueled by almost unimaginable technological advancements. 
                  I'm set on sending shockwaves through the industry and rallying like-minded trailblazers to join me on this journey. Lets shape the future--together.
                </ImageText>
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
          </CTAContent>
        </Container>
      </CTASection>

      <BackToTopButton
        isVisible={showBackToTop}
        onClick={scrollToTop}
      />
    </>
  );
};

export default LandingPage;