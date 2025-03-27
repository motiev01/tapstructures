import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PortfolioAlbum } from '../../types/portfolio';
import importImage from '../../utils/imageImports';

interface AlbumCardProps {
  album: PortfolioAlbum;
  onClick: () => void;
}

const Card = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const TextContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  border-radius: 8px;
  padding: 0.75rem;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  opacity: 0.9;
  color: white;
`;

const Category = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Fallback = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.2rem;
`;

const AlbumCard: React.FC<AlbumCardProps> = ({ album, onClick }) => {
  const [imageError, setImageError] = useState(false);
  const thumbnailSrc = importImage(album.thumbnailUrl);

  // Log thumbnail loading attempt
  React.useEffect(() => {
    console.log(`AlbumCard: Loading thumbnail for ${album.title}`, {
      thumbnailUrl: album.thumbnailUrl,
      importedSrc: thumbnailSrc
    });
  }, [album.thumbnailUrl, thumbnailSrc, album.title]);

  const handleImageError = () => {
    console.error(`Failed to load image for ${album.title}:`, {
      thumbnailUrl: album.thumbnailUrl,
      importedSrc: thumbnailSrc
    });
    setImageError(true);
  };

  return (
    <Card
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {!imageError ? (
        <Thumbnail 
          src={thumbnailSrc || ''} 
          alt={album.title}
          onError={handleImageError}
        />
      ) : (
        <Fallback>
          {album.title}
          <br />
          <small>Failed to load thumbnail</small>
        </Fallback>
      )}
      <Category>{album.category}</Category>
      <Overlay>
        <TextContainer>
          <Title>{album.title}</Title>
          <Description>{album.description}</Description>
        </TextContainer>
      </Overlay>
    </Card>
  );
};

export default AlbumCard; 