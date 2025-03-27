import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import AlbumModal from '../components/portfolio/AlbumModal';
import { portfolioAlbums, fetchAlbumDetails } from '../data/portfolioData';
import { PortfolioAlbum, PortfolioState } from '../types/portfolio';

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

const PortfolioPage: React.FC = () => {
  const [state, setState] = useState<PortfolioState>({
    selectedAlbum: null,
    isModalOpen: false,
    isLoading: false,
    error: null
  });

  const handleAlbumSelect = async (album: PortfolioAlbum) => {
    setState(prev => ({
      ...prev,
      selectedAlbum: album,
      isModalOpen: true,
      isLoading: true,
      error: null
    }));

    try {
      const albumDetails = await fetchAlbumDetails(album.id);
      setState(prev => ({
        ...prev,
        selectedAlbum: albumDetails,
        isLoading: false
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Failed to load album details',
        isLoading: false
      }));
    }
  };

  const handleCloseModal = () => {
    setState(prev => ({
      ...prev,
      isModalOpen: false,
      selectedAlbum: null,
      error: null
    }));
  };

  return (
    <PageContainer>
      <Container>
        <PageHeading
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Portfolio
        </PageHeading>
        
        <PageDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover a captivating array of collections across a broad range of media. Some portfolios reveal our commitment to pioneering innovation, reliability, and quality in construction and others explore a world of architecture you may have never known. If you'd like to see your project showcased or have suggestions for generative media, send me a message over on the contact page.
        </PageDescription>

        <PortfolioGrid
          albums={portfolioAlbums}
          onAlbumSelect={handleAlbumSelect}
        />

        <AlbumModal
          album={state.selectedAlbum}
          onClose={handleCloseModal}
          isLoading={state.isLoading}
        />
      </Container>
    </PageContainer>
  );
};

export default PortfolioPage;