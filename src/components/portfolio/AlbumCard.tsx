import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PortfolioAlbum } from '../../types/portfolio';

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

const Thumbnail = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
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
`;

const Description = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  opacity: 0.9;
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

const AlbumCard: React.FC<AlbumCardProps> = ({ album, onClick }) => {
  return (
    <Card
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Thumbnail imageUrl={album.thumbnailUrl} />
      <Category>{album.category}</Category>
      <Overlay>
        <Title>{album.title}</Title>
        <Description>{album.description}</Description>
      </Overlay>
    </Card>
  );
};

export default AlbumCard; 