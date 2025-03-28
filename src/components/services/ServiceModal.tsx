import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Service } from '../../types/services';
import importImage from '../../utils/imageImports';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: 12px;
  padding: 2rem;
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
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const ServiceTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  
  &:before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    left: 0;
  }
`;

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const thumbnailSrc = importImage(service.modalImageUrl || service.thumbnailUrl);

  return (
    <AnimatePresence>
      <ModalOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <ModalContent
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <ServiceImage src={thumbnailSrc || ''} alt={service.title} />
          <ServiceTitle>{service.title}</ServiceTitle>
          <ServiceDescription>{service.description}</ServiceDescription>
          <FeaturesList>
            {service.features?.map((feature, index) => (
              <FeatureItem key={index}>{feature}</FeatureItem>
            ))}
          </FeaturesList>
        </ModalContent>
      </ModalOverlay>
    </AnimatePresence>
  );
};

export default ServiceModal; 