import React, { useState, useRef } from 'react';
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
  scroll-behavior: smooth;
  margin: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #6B46C1;
    border-radius: 4px;
  }
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
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  border-radius: 8px;
  margin: 0.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  text-align: center;
`;

const ProjectLocation = styled.p`
  font-size: 0.6rem;
  color: white;
  margin: 0.25rem 0 0;
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

const ScrollToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #6B46C1;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 2000;
  opacity: 0.9;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
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
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; index: number } | null>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    const modalContent = modalContentRef.current;
    if (modalContent) {
      modalContent.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  if (isLoading) {
    return (
      <ModalOverlay>
        <LoadingSpinner>Loading...</LoadingSpinner>
      </ModalOverlay>
    );
  }

  if (!album) return null;

  const handleNext = () => {
    if (!selectedImage || !album) return;
    const nextIndex = selectedImage.index + 1;
    if (nextIndex < album.projects.length) {
      const nextProject = album.projects[nextIndex];
      setSelectedImage({
        url: nextProject.imageUrl,
        title: nextProject.title,
        index: nextIndex
      });
    }
  };

  const handlePrev = () => {
    if (!selectedImage || !album) return;
    const prevIndex = selectedImage.index - 1;
    if (prevIndex >= 0) {
      const prevProject = album.projects[prevIndex];
      setSelectedImage({
        url: prevProject.imageUrl,
        title: prevProject.title,
        index: prevIndex
      });
    }
  };

  return (
    <>
      <ModalOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <ModalContent
          ref={modalContentRef}
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
            {album.projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ProjectImageWrapper
                  project={project}
                  onClick={() => setSelectedImage({ 
                    url: project.imageUrl, 
                    title: project.title,
                    index
                  })}
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

      <ScrollToTopButton
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.9, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </ScrollToTopButton>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            imageUrl={importImage(selectedImage.url) || ''}
            title={selectedImage.title}
            onClose={() => setSelectedImage(null)}
            onNext={handleNext}
            onPrev={handlePrev}
            hasNext={selectedImage.index < (album?.projects.length || 0) - 1}
            hasPrev={selectedImage.index > 0}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default AlbumModal; 