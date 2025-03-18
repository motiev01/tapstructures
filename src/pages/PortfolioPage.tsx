import React, { useState } from 'react';
import '../styles/PortfolioPage.css';

// Define the image type interface
interface PortfolioImage {
  id: number;
  src: any; // Using any type because require() returns a module object
  alt: string;
}

// This component will be placed in the /pages directory
const PortfolioPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);

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
    { id: 9, src: require('../assets/images/port-img-9.jpg'), alt: 'Project 9' }
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
      <p>Explore a world of Architecture you may have never known. Browse some of the favorite photographs I've had the opportunity to take.</p>
      
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
    </div>
  );
};

export default PortfolioPage;