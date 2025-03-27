import { PortfolioAlbum } from '../types/portfolio';

// Sample portfolio data
export const portfolioAlbums: PortfolioAlbum[] = [
  {
    id: 'residential',
    title: 'Generative AI',
    description: 'Exploring the intersection of artificial intelligence and creative expression.',
    thumbnailUrl: 'port-img-1.jpg',
    category: 'GenAI',
    projects: [
      {
        id: 'res-1',
        title: 'AI-Generated Artwork',
        description: 'Digital art created using advanced AI models.',
        imageUrl: 'port-img-1.jpg',
        date: '2023',
        location: 'Digital',
        category: 'GenAI',
        tags: ['AI', 'Digital Art', 'Machine Learning']
      },
      {
        id: 'res-2',
        title: 'Neural Network Visualizations',
        description: 'Visual representations of AI model architectures.',
        imageUrl: 'port-img-2.jpg',
        date: '2023',
        location: 'Digital',
        category: 'GenAI',
        tags: ['Neural Networks', 'Visualization', 'AI']
      },
      {
        id: 'res-3',
        title: 'AI-Enhanced Photography',
        description: 'Photography enhanced through AI processing.',
        imageUrl: 'port-img-3.jpg',
        date: '2023',
        location: 'Digital',
        category: 'GenAI',
        tags: ['AI', 'Photography', 'Digital Art']
      }
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Buildings',
    description: 'State-of-the-art commercial spaces and office buildings.',
    thumbnailUrl: 'port-img-3.jpg',
    category: 'Commercial',
    projects: [
      {
        id: 'com-1',
        title: 'Tech Hub Office Complex',
        description: 'Modern office space designed for tech companies.',
        imageUrl: 'port-img-3.jpg',
        date: '2023',
        location: 'Denver, CO',
        category: 'Commercial',
        tags: ['Office', 'Tech', 'Modern']
      },
      {
        id: 'com-2',
        title: 'Retail Center',
        description: 'Contemporary retail space with modern amenities.',
        imageUrl: 'port-img-4.jpg',
        date: '2023',
        location: 'Aurora, CO',
        category: 'Commercial',
        tags: ['Retail', 'Modern', 'Commercial']
      },
      {
        id: 'com-3',
        title: 'Corporate Headquarters',
        description: 'State-of-the-art corporate office building.',
        imageUrl: 'port-img-5.jpg',
        date: '2023',
        location: 'Boulder, CO',
        category: 'Commercial',
        tags: ['Corporate', 'Office', 'Modern']
      }
    ]
  },
  {
    id: 'industrial',
    title: 'Industrial Facilities',
    description: 'Heavy-duty industrial and manufacturing facilities.',
    thumbnailUrl: 'port-img-6.jpg',
    category: 'Industrial',
    projects: [
      {
        id: 'ind-1',
        title: 'Manufacturing Plant',
        description: 'Large-scale manufacturing facility with advanced equipment.',
        imageUrl: 'port-img-6.jpg',
        date: '2023',
        location: 'Aurora, CO',
        category: 'Industrial',
        tags: ['Manufacturing', 'Factory', 'Industrial']
      },
      {
        id: 'ind-2',
        title: 'Distribution Center',
        description: 'Modern distribution facility with advanced logistics.',
        imageUrl: 'port-img-7.jpg',
        date: '2023',
        location: 'Denver, CO',
        category: 'Industrial',
        tags: ['Distribution', 'Logistics', 'Modern']
      },
      {
        id: 'ind-3',
        title: 'Warehouse Complex',
        description: 'Large-scale warehouse with modern amenities.',
        imageUrl: 'port-img-8.jpg',
        date: '2023',
        location: 'Colorado Springs, CO',
        category: 'Industrial',
        tags: ['Warehouse', 'Storage', 'Industrial']
      }
    ]
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure Projects',
    description: 'Bridges, roads, and public infrastructure development.',
    thumbnailUrl: 'port-img-9.jpg',
    category: 'Infrastructure',
    projects: [
      {
        id: 'inf-1',
        title: 'River Bridge',
        description: 'Modern bridge connecting communities across the river.',
        imageUrl: 'port-img-9.jpg',
        date: '2023',
        location: 'Colorado Springs, CO',
        category: 'Infrastructure',
        tags: ['Bridge', 'Public', 'Infrastructure']
      },
      {
        id: 'inf-2',
        title: 'Highway Expansion',
        description: 'Major highway expansion project with modern design.',
        imageUrl: 'port-img-10.jpeg',
        date: '2023',
        location: 'Denver, CO',
        category: 'Infrastructure',
        tags: ['Highway', 'Road', 'Public']
      },
      {
        id: 'inf-3',
        title: 'Transit Hub',
        description: 'Modern transit center with multiple transport options.',
        imageUrl: 'port-img-11.jpg',
        date: '2023',
        location: 'Boulder, CO',
        category: 'Infrastructure',
        tags: ['Transit', 'Public', 'Modern']
      }
    ]
  },
  {
    id: 'renovation',
    title: 'Renovation Projects',
    description: 'Historic building renovations and modern upgrades.',
    thumbnailUrl: 'port-img-12.jpg',
    category: 'Renovation',
    projects: [
      {
        id: 'ren-1',
        title: 'Historic Building Restoration',
        description: 'Restoration of a 100-year-old building to modern standards.',
        imageUrl: 'port-img-12.jpg',
        date: '2023',
        location: 'Fort Collins, CO',
        category: 'Renovation',
        tags: ['Historic', 'Restoration', 'Modern']
      },
      {
        id: 'ren-2',
        title: 'Office Building Upgrade',
        description: 'Modern renovation of an existing office building.',
        imageUrl: 'port-img-13.jpg',
        date: '2023',
        location: 'Denver, CO',
        category: 'Renovation',
        tags: ['Office', 'Modern', 'Upgrade']
      },
      {
        id: 'ren-3',
        title: 'Shopping Center Renovation',
        description: 'Complete renovation of a shopping center.',
        imageUrl: 'port-img-14.jpg',
        date: '2023',
        location: 'Aurora, CO',
        category: 'Renovation',
        tags: ['Retail', 'Modern', 'Renovation']
      }
    ]
  },
  {
    id: 'sustainable',
    title: 'Personal Collection',
    description: 'Some of the favorite photographs I\'ve had the blessing and fortune to take',
    thumbnailUrl: 'port-img-2.jpg',
    category: 'Photography',
    projects: [
      {
        id: 'sus-1',
        title: 'Mountain Sunrise',
        description: 'Capturing the first light of day in the Rockies.',
        imageUrl: 'port-img-2.jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Nature', 'Mountains', 'Sunrise']
      },
      {
        id: 'sus-2',
        title: 'Urban Nightscape',
        description: 'City lights painting the night sky.',
        imageUrl: 'port-img-5.jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['City', 'Night', 'Urban']
      },
      {
        id: 'sus-3',
        title: 'Desert Sunset',
        description: 'The golden hour in the desert landscape.',
        imageUrl: 'port-img-9.jpg',
        date: '2023',
        location: 'Arizona',
        category: 'Photography',
        tags: ['Desert', 'Sunset', 'Nature']
      }
    ]
  }
];

// Function to fetch album details (simulated API call)
export const fetchAlbumDetails = async (albumId: string): Promise<PortfolioAlbum> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const album = portfolioAlbums.find(a => a.id === albumId);
  if (!album) {
    throw new Error('Album not found');
  }
  
  return album;
}; 