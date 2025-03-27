import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PortfolioAlbum } from '../../types/portfolio';
import AlbumCard from './AlbumCard';

interface PortfolioGridProps {
  albums: PortfolioAlbum[];
  onAlbumSelect: (album: PortfolioAlbum) => void;
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ albums, onAlbumSelect }) => {
  return (
    <Grid
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {albums.map((album) => (
        <GridItem
          key={album.id}
          variants={itemVariants}
        >
          <AlbumCard
            album={album}
            onClick={() => onAlbumSelect(album)}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default PortfolioGrid; 