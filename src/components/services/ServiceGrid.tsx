import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Service } from '../../types/services';
import ServiceCard from './ServiceCard';

interface ServiceGridProps {
  services: Service[];
  onServiceSelect: (service: Service) => void;
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding: 3rem;
  max-width: 1600px;
  margin: 0 auto;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
  scroll-behavior: smooth;
 
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
 
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
    gap: 2rem;
  }
`;

const GridItem = styled(motion.div)`
  width: 100%;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const ServiceGrid: React.FC<ServiceGridProps> = ({ services, onServiceSelect }) => {
  return (
    <Grid
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {services.map((service) => (
        <GridItem
          key={service.id}
          variants={itemVariants}
        >
          <ServiceCard
            service={service}
            onClick={() => onServiceSelect(service)}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ServiceGrid; 