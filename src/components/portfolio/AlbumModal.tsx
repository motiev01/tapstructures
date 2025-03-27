import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioAlbum } from '../../types/portfolio';
import ImageModal from './ImageModal';
import importImage from '../../utils/imageImports';

interface AlbumModalProps {
  album: PortfolioAlbum | null;
  onClose: () => void;
  isLoading: boolean;
}

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
  overflow-y: auto;
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 1200px;
  width: 100%;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Header = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: white;
  max-width: 800px;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  border-radius: 8px;
  margin: 0.75rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  text-align: center;
`;

const ProjectLocation = styled.p`
  font-size: 0.9rem;
  color: white;
  margin: 0.5rem 0 0;
  text-align: center;
  font-style: italic;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 1.2rem;
  color: #666;
`;

const ImageFallback = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  color: #666;
  font-size: 1.2rem;
`;

interface ProjectImageWrapperProps {
  project: {
    imageUrl: string;
    title: string;
  };
  onClick: () => void;
}

const ProjectImageWrapper: React.FC<ProjectImageWrapperProps> = ({ project, onClick }) => {
  const [imageError, setImageError] = useState(false);
  const imageSrc = importImage(project.imageUrl);

  const handleImageError = () => {
    console.error(`Failed to load image: ${project.imageUrl}`);
    setImageError(true);
  };

  return imageError ? (
    <ImageFallback>{project.title}</ImageFallback>
  ) : (
    <ProjectImage
      src={imageSrc || ''}
      alt={project.title}
      onError={handleImageError}
      onClick={onClick}
    />
  );
};

const AlbumModal: React.FC<AlbumModalProps> = ({ album, onClose, isLoading }) => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  if (isLoading) {
    return (
      <ModalOverlay>
        <LoadingSpinner>Loading...</LoadingSpinner>
      </ModalOverlay>
    );
  }

  if (!album) return null;

  return (
    <>
      <ModalOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <ModalContent
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <Header>
            <Title>{album.title}</Title>
            <Description>{album.description}</Description>
          </Header>

          <ProjectsGrid>
            {album.projects.map(project => (
              <ProjectCard
                key={project.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ProjectImageWrapper
                  project={project}
                  onClick={() => setSelectedImage({ url: project.imageUrl, title: project.title })}
                />
                <ProjectInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  {project.location && <ProjectLocation>{project.location}</ProjectLocation>}
                </ProjectInfo>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </ModalContent>
      </ModalOverlay>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            imageUrl={importImage(selectedImage.url) || ''}
            title={selectedImage.title}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default AlbumModal; 