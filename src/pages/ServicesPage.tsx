import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import ServiceGrid from '../components/services/ServiceGrid';
import ServiceModal from '../components/services/ServiceModal';
import { services } from '../data/services';
import { Service } from '../types/services';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const PageHeading = styled(motion.h1)`
  text-align: center;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageDescription = styled(motion.p)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
`;

const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <PageContainer>
      <Container>
        <PageHeading
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </PageHeading>
        
        <PageDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore our comprehensive range of construction services designed to meet your project needs. From project management to advanced technology solutions, we provide the tools and expertise to ensure your success.
        </PageDescription>

        <ServiceGrid
          services={services}
          onServiceSelect={handleServiceSelect}
        />

        <ServiceModal
          service={selectedService}
          onClose={handleCloseModal}
        />
      </Container>
    </PageContainer>
  );
};

export default ServicesPage; 