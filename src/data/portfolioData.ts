import { PortfolioAlbum } from '../types/portfolio';

// Sample portfolio data
export const portfolioAlbums: PortfolioAlbum[] = [
  {
    id: 'residential',
    title: 'Residential Projects',
    description: 'Custom homes and residential renovations showcasing modern design and quality craftsmanship.',
    thumbnailUrl: '/images/portfolio/residential-thumb.jpg',
    category: 'Residential',
    projects: [
      {
        id: 'res-1',
        title: 'Modern Mountain Home',
        description: 'A contemporary mountain residence with panoramic views.',
        imageUrl: '/images/portfolio/residential/project1.jpg',
        date: '2023',
        location: 'Boulder, CO',
        category: 'Residential',
        tags: ['Modern', 'Mountain', 'Custom Home']
      },
      {
        id: 'res-2',
        title: 'Luxury Home Renovation',
        description: 'Complete renovation of a luxury home with modern amenities.',
        imageUrl: '/images/portfolio/port-img-1.jpg',
        date: '2023',
        location: 'Denver, CO',
        category: 'Residential',
        tags: ['Renovation', 'Luxury', 'Modern']
      },
      {
        id: 'res-3',
        title: 'Custom Family Home',
        description: 'Spacious family home with custom features and sustainable design.',
        imageUrl: '/images/portfolio/port-img-2.jpg',
        date: '2023',
        location: 'Colorado Springs, CO',
        category: 'Residential',
        tags: ['Custom', 'Family', 'Sustainable']
      }
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Buildings',
    description: 'State-of-the-art commercial spaces and office buildings.',
    thumbnailUrl: '/images/portfolio/commercial-thumb.jpg',
    category: 'Commercial',
    projects: [
      {
        id: 'com-1',
        title: 'Tech Hub Office Complex',
        description: 'Modern office space designed for tech companies.',
        imageUrl: '/images/portfolio/port-img-3.jpg',
        date: '2023',
        location: 'Denver, CO',
        category: 'Commercial',
        tags: ['Office', 'Tech', 'Modern']
      },
      {
        id: 'com-2',
        title: 'Retail Center',
        description: 'Contemporary retail space with modern amenities.',
        imageUrl: '/images/portfolio/port-img-4.jpg',
        date: '2023',
        location: 'Aurora, CO',
        category: 'Commercial',
        tags: ['Retail', 'Modern', 'Commercial']
      },
      {
        id: 'com-3',
        title: 'Corporate Headquarters',
        description: 'State-of-the-art corporate office building.',
        imageUrl: '/images/portfolio/port-img-5.jpg',
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
    thumbnailUrl: '/images/portfolio/industrial-thumb.jpg',
    category: 'Industrial',
    projects: [
      {
        id: 'ind-1',
        title: 'Manufacturing Plant',
        description: 'Large-scale manufacturing facility with advanced equipment.',
        imageUrl: '/images/portfolio/port-img-6.jpg',
        date: '2023',
        location: 'Aurora, CO',
        category: 'Industrial',
        tags: ['Manufacturing', 'Factory', 'Industrial']
      },
      {
        id: 'ind-2',
        title: 'Distribution Center',
        description: 'Modern distribution facility with advanced logistics.',
        imageUrl: '/images/portfolio/port-img-7.jpg',
        date: '2023',
        location: 'Denver, CO',
        category: 'Industrial',
        tags: ['Distribution', 'Logistics', 'Modern']
      },
      {
        id: 'ind-3',
        title: 'Warehouse Complex',
        description: 'Large-scale warehouse with modern amenities.',
        imageUrl: '/images/portfolio/port-img-8.jpg',
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
    thumbnailUrl: '/images/portfolio/infrastructure-thumb.jpg',
    category: 'Infrastructure',
    projects: [
      {
        id: 'inf-1',
        title: 'River Bridge',
        description: 'Modern bridge connecting communities across the river.',
        imageUrl: '/images/portfolio/port-img-9.jpg',
        date: '2023',
        location: 'Colorado Springs, CO',
        category: 'Infrastructure',
        tags: ['Bridge', 'Public', 'Infrastructure']
      },
      {
        id: 'inf-2',
        title: 'Highway Expansion',
        description: 'Major highway expansion project with modern design.',
        imageUrl: '/images/portfolio/port-img-10.jpeg',
        date: '2023',
        location: 'Denver, CO',
        category: 'Infrastructure',
        tags: ['Highway', 'Road', 'Public']
      },
      {
        id: 'inf-3',
        title: 'Transit Hub',
        description: 'Modern transit center with multiple transport options.',
        imageUrl: '/images/portfolio/port-img-11.jpg',
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
    thumbnailUrl: '/images/portfolio/renovation-thumb.jpg',
    category: 'Renovation',
    projects: [
      {
        id: 'ren-1',
        title: 'Historic Building Restoration',
        description: 'Restoration of a 100-year-old building to modern standards.',
        imageUrl: '/images/portfolio/port-img-12.jpg',
        date: '2023',
        location: 'Fort Collins, CO',
        category: 'Renovation',
        tags: ['Historic', 'Restoration', 'Modern']
      },
      {
        id: 'ren-2',
        title: 'Office Building Upgrade',
        description: 'Modern renovation of an existing office building.',
        imageUrl: '/images/portfolio/port-img-13.jpg',
        date: '2023',
        location: 'Denver, CO',
        category: 'Renovation',
        tags: ['Office', 'Modern', 'Upgrade']
      },
      {
        id: 'ren-3',
        title: 'Shopping Center Renovation',
        description: 'Complete renovation of a shopping center.',
        imageUrl: '/images/portfolio/port-img-14.jpg',
        date: '2023',
        location: 'Aurora, CO',
        category: 'Renovation',
        tags: ['Retail', 'Modern', 'Renovation']
      }
    ]
  },
  {
    id: 'sustainable',
    title: 'Sustainable Projects',
    description: 'Green building and sustainable construction projects.',
    thumbnailUrl: '/images/portfolio/sustainable-thumb.jpg',
    category: 'Sustainable',
    projects: [
      {
        id: 'sus-1',
        title: 'LEED Platinum Office',
        description: 'Net-zero energy office building with sustainable features.',
        imageUrl: '/images/portfolio/port-img-15.jpg',
        date: '2023',
        location: 'Boulder, CO',
        category: 'Sustainable',
        tags: ['LEED', 'Green', 'Sustainable']
      },
      {
        id: 'sus-2',
        title: 'Eco-Friendly Retail',
        description: 'Sustainable retail space with green features.',
        imageUrl: '/images/portfolio/port-img-16.jpg',
        date: '2023',
        location: 'Denver, CO',
        category: 'Sustainable',
        tags: ['Green', 'Retail', 'Eco-Friendly']
      },
      {
        id: 'sus-3',
        title: 'Solar-Powered Facility',
        description: 'Industrial facility powered by renewable energy.',
        imageUrl: '/images/portfolio/port-img-17.jpg',
        date: '2023',
        location: 'Colorado Springs, CO',
        category: 'Sustainable',
        tags: ['Solar', 'Renewable', 'Green']
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