import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import Card from '../components/common/Card';
import BackToTopButton from '../components/common/BackToTopButton';
import excavatorImage from '../assets/images/Excavator-Tap-12.webp';

const ServicesBackground = styled.div<{ $imageUrl: string }>`
  position: relative;
  min-height: 100vh;
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
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
    background-size: cover;
    background-position: center;
  }
`;

const ServicesContent = styled.div`
  position: relative;
  z-index: 2;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const ServiceCard = styled(Card)<{ isSelected: boolean }>`
  aspect-ratio: 1;
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 2px solid ${props => props.isSelected ? props.theme.colors.primary : 'transparent'};
  transition: all 0.3s ease;
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.primary};
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 0.9rem;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background-color: ${props => props.theme.colors.background};
  padding: 2rem;
  border-radius: 1rem;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.textLight};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.backgroundAlt};
    color: ${props => props.theme.colors.primary};
  }
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const ModalDescription = styled.div`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;

  p {
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 1rem 0;

    li {
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;

      &:before {
        content: "•";
        color: ${props => props.theme.colors.primary};
        position: absolute;
        left: 0;
      }
    }
  }
`;

const Breadcrumb = styled.nav`
  padding: 1rem 0;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.textLight};
  font-size: 0.9rem;

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.primaryDark};
    }
  }

  span {
    color: ${props => props.theme.colors.textLight};
  }
`;

const services = [
  {
    id: 1,
    icon: '🏗️',
    title: 'Project Management',
    shortDescription: 'Comprehensive project management solutions for construction projects',
    fullDescription: {
      overview: 'Our project management service provides end-to-end solutions for construction projects of all sizes.',
      features: [
        'Custom project planning and scheduling',
        'Resource allocation and optimization',
        'Budget tracking and cost management',
        'Quality control and safety compliance',
        'Document management and reporting',
        'Team collaboration tools'
      ],
      benefits: [
        'Improved project efficiency',
        'Reduced costs and delays',
        'Better risk management',
        'Enhanced team communication',
        'Real-time project insights'
      ]
    }
  },
  {
    id: 2,
    icon: '💻',
    title: 'Software Solutions',
    shortDescription: 'Custom tailored software development for construction industry',
    fullDescription: {
      overview: 'We develop specialized software solutions tailored to the construction industry\'s unique needs.',
      features: [
        'Custom project management software',
        'Field management applications',
        'Document control systems',
        'Mobile apps for on-site operations',
        'Reporting and analytics tools',
        'Integration with existing systems'
      ],
      benefits: [
        'Streamlined workflows',
        'Improved data accuracy',
        'Enhanced productivity',
        'Better decision-making',
        'Reduced paperwork'
      ]
    }
  },
  {
    id: 3,
    icon: '🛠️',
    title: 'Jobsite Tools',
    shortDescription: 'Advanced tools and equipment for modern construction sites',
    fullDescription: {
      overview: 'Equip your construction teams with cutting-edge tools and equipment designed for modern construction sites.',
      features: [
        'Smart measurement and layout tools',
        'Digital documentation systems',
        'Safety monitoring equipment',
        'Quality control devices',
        'Environmental monitoring tools',
        'Mobile app integration'
      ],
      benefits: [
        'Improved accuracy and precision',
        'Enhanced safety measures',
        'Faster project completion',
        'Better quality control',
        'Reduced rework and errors'
      ]
    }
  },
  {
    id: 4,
    icon: '🤖',
    title: 'AI Integration',
    shortDescription: 'AI-powered solutions for modern construction',
    fullDescription: {
      overview: 'Leverage the power of artificial intelligence to revolutionize your construction operations.',
      features: [
        'AI-powered project planning',
        'Automated quality control',
        'Predictive analytics',
        'Smart resource allocation',
        'Safety monitoring systems',
        'Automated documentation'
      ],
      benefits: [
        'Increased efficiency',
        'Enhanced safety measures',
        'Reduced human error',
        'Faster project completion',
        'Cost optimization'
      ]
    }
  },
  {
    id: 5,
    icon: '🚛',
    title: 'Fleet Management',
    shortDescription: 'Comprehensive fleet management and optimization solutions',
    fullDescription: {
      overview: 'Optimize your construction fleet operations with our comprehensive fleet management solutions.',
      features: [
        'Real-time vehicle tracking and monitoring',
        'Maintenance scheduling and alerts',
        'Fuel efficiency optimization',
        'Driver performance tracking',
        'Compliance and safety monitoring',
        'Cost analysis and reporting'
      ],
      benefits: [
        'Reduced operational costs',
        'Improved fleet utilization',
        'Enhanced safety compliance',
        'Better maintenance planning',
        'Increased equipment lifespan'
      ]
    }
  },
  {
    id: 6,
    icon: '📊',
    title: 'Data Analytics',
    shortDescription: 'Data-driven insights for construction operations',
    fullDescription: {
      overview: 'Transform your construction data into actionable insights with our advanced analytics solutions.',
      features: [
        'Performance analytics',
        'Cost optimization analysis',
        'Resource utilization tracking',
        'Predictive maintenance',
        'Quality metrics analysis',
        'Custom reporting dashboards'
      ],
      benefits: [
        'Data-driven decision making',
        'Improved resource allocation',
        'Better cost control',
        'Enhanced project forecasting',
        'Competitive advantage'
      ]
    }
  },
  {
    id: 7,
    icon: '🔒',
    title: 'Safety & Compliance',
    shortDescription: 'Comprehensive safety and regulatory compliance solutions',
    fullDescription: {
      overview: 'Ensure your construction projects meet all safety standards and regulatory requirements with our comprehensive compliance solutions.',
      features: [
        'OSHA compliance monitoring',
        'Safety protocol development',
        'Regulatory documentation',
        'Training and certification programs',
        'Risk assessment and mitigation',
        'Compliance reporting and tracking'
      ],
      benefits: [
        'Reduced safety incidents',
        'Regulatory compliance assurance',
        'Lower insurance premiums',
        'Enhanced workplace safety',
        'Improved project reputation'
      ]
    }
  }
];

const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ServicesBackground $imageUrl={excavatorImage}>
      <Container>
        <ServicesContent>
          <Breadcrumb>
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </Breadcrumb>

          <ServicesGrid>
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ServiceCard
                  isSelected={selectedService?.id === service.id}
                  onClick={() => handleServiceClick(service)}
                >
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.shortDescription}</ServiceDescription>
                </ServiceCard>
              </motion.div>
            ))}
          </ServicesGrid>
        </ServicesContent>
      </Container>

      <AnimatePresence>
        {selectedService && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={handleCloseModal}>×</CloseButton>
              <ModalTitle>{selectedService.title}</ModalTitle>
              <ModalDescription>
                <p>{selectedService.fullDescription.overview}</p>
                <h3>Key Features</h3>
                <ul>
                  {selectedService.fullDescription.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <h3>Benefits</h3>
                <ul>
                  {selectedService.fullDescription.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </ModalDescription>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>

      <BackToTopButton
        isVisible={showBackToTop}
        onClick={scrollToTop}
      />
    </ServicesBackground>
  );
};

export default ServicesPage; 