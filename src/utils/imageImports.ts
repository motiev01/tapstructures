/**
 * Utility function to import images from assets/images directory
 */
const importImage = (imagePath: string) => {
  try {
    // Try to import the image
    const image = require(`../assets/images/${imagePath.replace(/%20/g, ' ')}`);
    console.log(`Successfully loaded image: ${imagePath}`);
    return image;
  } catch (error) {
    console.error(`Error loading image: ${imagePath}`);
    console.error('Error details:', error);
    return null;
  }
};

export default importImage; 