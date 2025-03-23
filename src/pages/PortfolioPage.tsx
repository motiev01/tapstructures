import React, { useState, useEffect } from 'react';
import '../styles/PortfolioPage.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Define the image type interface
interface PortfolioImage {
  id: number;
  src: any; // Using any type because require() returns a module object
  alt: string;
}

const BackToTopButton = styled(motion.button)<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: ${props => props.$isVisible ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
  }
`;

// This component will be placed in the /pages directory
const PortfolioPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Define portfolio images using require()
  const portfolioImages: PortfolioImage[] = [
    { id: 1, src: require('../assets/images/port-img-1.jpg'), alt: 'Project 1' },
    { id: 2, src: require('../assets/images/port-img-2.jpg'), alt: 'Project 2' },
    { id: 3, src: require('../assets/images/port-img-3.jpg'), alt: 'Project 3' },
    { id: 4, src: require('../assets/images/port-img-4.jpg'), alt: 'Project 4' },
    { id: 5, src: require('../assets/images/port-img-5.jpg'), alt: 'Project 5' },
    { id: 6, src: require('../assets/images/port-img-6.jpg'), alt: 'Project 6' },
    { id: 7, src: require('../assets/images/port-img-7.jpg'), alt: 'Project 7' },
    { id: 8, src: require('../assets/images/port-img-8.jpg'), alt: 'Project 8' },
    { id: 9, src: require('../assets/images/port-img-9.jpg'), alt: 'Project 9' },
    { id: 10, src: require('../assets/images/port-img-10.jpeg'), alt: 'Project 10' },
    { id: 11, src: require('../assets/images/port-img-11.jpg'), alt: 'Project 11' },
    { id: 12, src: require('../assets/images/port-img-12.jpg'), alt: 'Project 12' },
    { id: 13, src: require('../assets/images/port-img-13.jpg'), alt: 'Project 13' },
    { id: 14, src: require('../assets/images/port-img-14.jpg'), alt: 'Project 14' },
    { id: 15, src: require('../assets/images/port-img-15.jpg'), alt: 'Project 15' },
    { id: 16, src: require('../assets/images/port-img-16.jpg'), alt: 'Project 16' },
    { id: 17, src: require('../assets/images/port-img-17.jpg'), alt: 'Project 17' },
    { id: 18, src: require('../assets/images/port-img-18.jpg'), alt: 'Project 18' },
    { id: 19, src: require('../assets/images/port-img-19.jpg'), alt: 'Project 19' },
    { id: 20, src: require('../assets/images/port-img-20.jpg'), alt: 'Project 20' },
    { id: 21, src: require('../assets/images/port-img-21.jpg'), alt: 'Project 21' },
    { id: 22, src: require('../assets/images/port-img-22.jpg'), alt: 'Project 22' },
    { id: 23, src: require('../assets/images/port-img-23.jpeg'), alt: 'Project 23' },
    { id: 24, src: require('../assets/images/port-img-24.jpg'), alt: 'Project 24' },
    // Add more as needed
  ];

  const openLightbox = (image: PortfolioImage): void => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = (): void => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="portfolio-container">
      <h1>Portfolio</h1>
      <p>Explore a world of Architecture you may have never known.</p>
      <p>Browse some of the favorite photographs that I've had the fortune & opportunity to take.</p>
      
      <div className="portfolio-grid">
        {portfolioImages.map((image) => (
          <div 
            key={image.id} 
            className="portfolio-item" 
            onClick={() => openLightbox(image)}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              onError={(e) => {
                console.error(`Failed to load image: ${image.id}`);
                const target = e.target as HTMLImageElement;
                if (!target.src.includes('placeholder')) {
                  target.src = `https://via.placeholder.com/800x600?text=Project+${image.id}`;
                }
              }}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeLightbox}>&times;</span>
            <img 
              className="lightbox-content" 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.includes('placeholder')) {
                  target.src = `https://via.placeholder.com/800x600?text=Project+${selectedImage.id}`;
                }
              }}
            />
          </div>
        </div>
      )}

      <BackToTopButton
        $isVisible={showBackToTop}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </BackToTopButton>
    </div>
  );
};

export default PortfolioPage;