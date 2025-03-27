/**
 * Utility function to import images from assets/images directory
 */
const importImage = (imagePath: string) => {
  try {
    return require(`../assets/images/${imagePath}`);
  } catch (error) {
    console.error(`Error loading image: ${imagePath}`);
    return null;
  }
};

export default importImage; 