import { PortfolioAlbum } from '../types/portfolio';

// Sample portfolio data
export const portfolioAlbums: PortfolioAlbum[] = [
  {
    id: 'residential',
    title: 'Generative AI',
    description: 'Exploring the intersection of artificial intelligence and creative expression.',
    thumbnailUrl: 'PortfolioCollectionThumbnails/GenerativeAI.png',
    category: 'GenAI',
    projects: [
      {
        id: 'res-1',
        title: 'AI-Generated Artwork',
        description: 'Digital art created using advanced AI models.',
        imageUrl: 'PersonalPortfolio/port-img (1).jpg',
        date: '2023',
        location: 'Digital',
        category: 'GenAI',
        tags: ['AI', 'Digital Art', 'Machine Learning']
      },
      {
        id: 'res-2',
        title: 'Neural Network Visualizations',
        description: 'Visual representations of AI model architectures.',
        imageUrl: 'PersonalPortfolio/port-img (2).jpg',
        date: '2023',
        location: 'Digital',
        category: 'GenAI',
        tags: ['Neural Networks', 'Visualization', 'AI']
      },
      {
        id: 'res-3',
        title: 'AI-Enhanced Photography',
        description: 'Photography enhanced through AI processing.',
        imageUrl: 'PersonalPortfolio/port-img (3).jpg',
        date: '2023',
        location: 'Digital',
        category: 'GenAI',
        tags: ['AI', 'Photography', 'Digital Art']
      }
    ]
  },
  {
    id: 'sustainable',
    title: 'Personal Collection',
    description: 'Some of the favorite photographs I\'ve had the blessing and fortune to take',
    thumbnailUrl: 'PortfolioCollectionThumbnails/PersonalCollection.png',
    category: 'Photography',
    projects: [
      {
        id: 'photo-1',
        title: 'Urban Perspectives',
        description: 'Architectural lines and urban geometry.',
        imageUrl: 'PersonalPortfolio/port-img (1).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Architecture', 'Urban', 'Design']
      },
      {
        id: 'photo-2',
        title: 'Construction Dynamics',
        description: 'The rhythm of construction in motion.',
        imageUrl: 'PersonalPortfolio/port-img (2).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Construction', 'Motion', 'Development']
      },
      {
        id: 'photo-3',
        title: 'Structural Harmony',
        description: 'The interplay of form and function.',
        imageUrl: 'PersonalPortfolio/port-img (3).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Structure', 'Design', 'Architecture']
      },
      {
        id: 'photo-4',
        title: 'Urban Canvas',
        description: 'City landscapes as artistic expression.',
        imageUrl: 'PersonalPortfolio/port-img (4).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Urban', 'Landscape', 'Art']
      },
      {
        id: 'photo-5',
        title: 'Construction Symphony',
        description: 'The orchestrated dance of development.',
        imageUrl: 'PersonalPortfolio/port-img (5).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Construction', 'Development', 'Progress']
      },
      {
        id: 'photo-6',
        title: 'Industrial Rhythms',
        description: 'Patterns in construction and industry.',
        imageUrl: 'PersonalPortfolio/port-img (6).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Industrial', 'Pattern', 'Design']
      },
      {
        id: 'photo-7',
        title: 'Urban Evolution',
        description: 'Witnessing the city\'s transformation.',
        imageUrl: 'PersonalPortfolio/port-img (7).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Urban', 'Change', 'Development']
      },
      {
        id: 'photo-8',
        title: 'Architectural Details',
        description: 'The fine points of design excellence.',
        imageUrl: 'PersonalPortfolio/port-img (8).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Architecture', 'Detail', 'Design']
      },
      {
        id: 'photo-9',
        title: 'Construction Artistry',
        description: 'Where craftsmanship meets innovation.',
        imageUrl: 'PersonalPortfolio/port-img (9).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Construction', 'Art', 'Innovation']
      },
      {
        id: 'photo-10',
        title: 'Urban Geometry',
        description: 'Mathematical beauty in urban forms.',
        imageUrl: 'PersonalPortfolio/port-img (10).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Geometry', 'Urban', 'Design']
      },
      {
        id: 'photo-11',
        title: 'Site Progress',
        description: 'Documenting construction milestones.',
        imageUrl: 'PersonalPortfolio/port-img (11).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Progress', 'Construction', 'Documentation']
      },
      {
        id: 'photo-12',
        title: 'Equipment Ballet',
        description: 'The graceful movement of heavy machinery.',
        imageUrl: 'PersonalPortfolio/port-img (12).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Equipment', 'Motion', 'Construction']
      },
      {
        id: 'photo-13',
        title: 'Material Stories',
        description: 'The textures and materials of construction.',
        imageUrl: 'PersonalPortfolio/port-img (13).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Materials', 'Texture', 'Construction']
      },
      {
        id: 'photo-14',
        title: 'Urban Renewal',
        description: 'Transformation of city spaces.',
        imageUrl: 'PersonalPortfolio/port-img (14).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Urban', 'Renewal', 'Development']
      },
      {
        id: 'photo-15',
        title: 'Construction Horizons',
        description: 'Future visions taking shape.',
        imageUrl: 'PersonalPortfolio/port-img (15).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Construction', 'Future', 'Development']
      },
      {
        id: 'photo-16',
        title: 'Design Elements',
        description: 'Architectural components in harmony.',
        imageUrl: 'PersonalPortfolio/port-img (16).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Design', 'Architecture', 'Elements']
      },
      {
        id: 'photo-17',
        title: 'Project Flow',
        description: 'The continuous motion of development.',
        imageUrl: 'PersonalPortfolio/port-img (17).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Flow', 'Development', 'Progress']
      },
      {
        id: 'photo-18',
        title: 'Urban Patterns',
        description: 'Repetitive elements in city design.',
        imageUrl: 'PersonalPortfolio/port-img (18).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Pattern', 'Urban', 'Design']
      },
      {
        id: 'photo-19',
        title: 'Construction Moments',
        description: 'Capturing key project phases.',
        imageUrl: 'PersonalPortfolio/port-img (19).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Moments', 'Construction', 'Progress']
      },
      {
        id: 'photo-20',
        title: 'Site Dynamics',
        description: 'The energy of active construction.',
        imageUrl: 'PersonalPortfolio/port-img (20).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Site', 'Activity', 'Construction']
      },
      {
        id: 'photo-21',
        title: 'Urban Framework',
        description: 'The skeleton of city development.',
        imageUrl: 'PersonalPortfolio/port-img (21).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Framework', 'Urban', 'Development']
      },
      {
        id: 'photo-22',
        title: 'Construction Layers',
        description: 'The stratification of building progress.',
        imageUrl: 'PersonalPortfolio/port-img (22).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Layers', 'Construction', 'Progress']
      },
      {
        id: 'photo-23',
        title: 'Design Integration',
        description: 'Where form meets function.',
        imageUrl: 'PersonalPortfolio/port-img (23).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Design', 'Integration', 'Architecture']
      },
      {
        id: 'photo-24',
        title: 'Project Rhythm',
        description: 'The tempo of construction progress.',
        imageUrl: 'PersonalPortfolio/port-img (24).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Rhythm', 'Construction', 'Progress']
      },
      {
        id: 'photo-25',
        title: 'Urban Canvas II',
        description: 'City landscapes in transformation.',
        imageUrl: 'PersonalPortfolio/port-img (25).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Urban', 'Transformation', 'Landscape']
      },
      {
        id: 'photo-26',
        title: 'Construction Poetry',
        description: 'The artistry of building creation.',
        imageUrl: 'PersonalPortfolio/port-img (26).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Poetry', 'Construction', 'Art']
      },
      {
        id: 'photo-27',
        title: 'Site Symphony',
        description: 'Harmonious construction operations.',
        imageUrl: 'PersonalPortfolio/port-img (27).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Symphony', 'Construction', 'Operations']
      },
      {
        id: 'photo-28',
        title: 'Urban Dialogue',
        description: 'Conversations between structures.',
        imageUrl: 'PersonalPortfolio/port-img (28).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Dialogue', 'Urban', 'Architecture']
      },
      {
        id: 'photo-29',
        title: 'Construction Essence',
        description: 'Core elements of building creation.',
        imageUrl: 'PersonalPortfolio/port-img (29).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Essence', 'Construction', 'Elements']
      },
      {
        id: 'photo-30',
        title: 'Project Pulse',
        description: 'The heartbeat of development.',
        imageUrl: 'PersonalPortfolio/port-img (30).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Pulse', 'Development', 'Progress']
      },
      {
        id: 'photo-31',
        title: 'Urban Composition',
        description: 'The arrangement of city elements.',
        imageUrl: 'PersonalPortfolio/port-img (31).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Composition', 'Urban', 'Design']
      },
      {
        id: 'photo-32',
        title: 'Construction Harmony',
        description: 'Balanced elements in development.',
        imageUrl: 'PersonalPortfolio/port-img (32).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Harmony', 'Construction', 'Balance']
      },
      {
        id: 'photo-33',
        title: 'Site Narrative',
        description: 'Stories told through construction.',
        imageUrl: 'PersonalPortfolio/port-img (33).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Narrative', 'Site', 'Construction']
      },
      {
        id: 'photo-34',
        title: 'Urban Rhythm',
        description: 'The beat of city development.',
        imageUrl: 'PersonalPortfolio/port-img (34).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Rhythm', 'Urban', 'Development']
      },
      {
        id: 'photo-35',
        title: 'Construction Flow',
        description: 'Seamless progression of work.',
        imageUrl: 'PersonalPortfolio/port-img (35).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Flow', 'Construction', 'Progress']
      },
      {
        id: 'photo-36',
        title: 'Project Essence',
        description: 'Core aspects of development.',
        imageUrl: 'PersonalPortfolio/port-img (36).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Essence', 'Project', 'Development']
      },
      {
        id: 'photo-37',
        title: 'Urban Symphony',
        description: 'The music of city growth.',
        imageUrl: 'PersonalPortfolio/port-img (37).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Symphony', 'Urban', 'Growth']
      },
      {
        id: 'photo-38',
        title: 'Construction Poetry II',
        description: 'Visual verses in building.',
        imageUrl: 'PersonalPortfolio/port-img (38).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Poetry', 'Construction', 'Visual']
      },
      {
        id: 'photo-39',
        title: 'Site Harmony',
        description: 'Balanced construction operations.',
        imageUrl: 'PersonalPortfolio/port-img (39).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Harmony', 'Site', 'Operations']
      },
      {
        id: 'photo-40',
        title: 'Urban Elements',
        description: 'Components of city life.',
        imageUrl: 'PersonalPortfolio/port-img (40).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Elements', 'Urban', 'Life']
      },
      {
        id: 'photo-41',
        title: 'Construction Dialogue',
        description: 'Communication through building.',
        imageUrl: 'PersonalPortfolio/port-img (41).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Dialogue', 'Construction', 'Communication']
      },
      {
        id: 'photo-42',
        title: 'Project Canvas',
        description: 'Development as artistic expression.',
        imageUrl: 'PersonalPortfolio/port-img (42).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Canvas', 'Project', 'Art']
      },
      {
        id: 'photo-43',
        title: 'Urban Motion',
        description: 'City development in action.',
        imageUrl: 'PersonalPortfolio/port-img (43).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Motion', 'Urban', 'Development']
      },
      {
        id: 'photo-44',
        title: 'Construction Rhythm II',
        description: 'The pulse of building progress.',
        imageUrl: 'PersonalPortfolio/port-img (44).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Rhythm', 'Construction', 'Progress']
      },
      {
        id: 'photo-45',
        title: 'Site Poetry',
        description: 'Artistic moments in development.',
        imageUrl: 'PersonalPortfolio/port-img (45).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Poetry', 'Site', 'Art']
      },
      {
        id: 'photo-46',
        title: 'Urban Framework II',
        description: 'Structural foundations of growth.',
        imageUrl: 'PersonalPortfolio/port-img (46).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Framework', 'Urban', 'Structure']
      },
      {
        id: 'photo-47',
        title: 'Construction Canvas',
        description: 'Building sites as artwork.',
        imageUrl: 'PersonalPortfolio/port-img (47).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Canvas', 'Construction', 'Art']
      },
      {
        id: 'photo-48',
        title: 'Project Symphony',
        description: 'Orchestrated development progress.',
        imageUrl: 'PersonalPortfolio/port-img (48).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Symphony', 'Project', 'Progress']
      },
      {
        id: 'photo-49',
        title: 'Urban Poetry',
        description: 'Poetic moments in city growth.',
        imageUrl: 'PersonalPortfolio/port-img (49).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Poetry', 'Urban', 'Growth']
      },
      {
        id: 'photo-50',
        title: 'Construction Elements II',
        description: 'Building blocks of development.',
        imageUrl: 'PersonalPortfolio/port-img (50).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Elements', 'Construction', 'Development']
      },
      {
        id: 'photo-51',
        title: 'Site Canvas',
        description: 'Construction sites as art.',
        imageUrl: 'PersonalPortfolio/port-img (51).jpg',
        date: '2023',
        location: 'Denver',
        category: 'Photography',
        tags: ['Canvas', 'Site', 'Art']
      },
      {
        id: 'photo-52',
        title: 'Urban Essence',
        description: 'The soul of city development.',
        imageUrl: 'PersonalPortfolio/port-img (52).jpg',
        date: '2023',
        location: 'Colorado',
        category: 'Photography',
        tags: ['Essence', 'Urban', 'Development']
      }
    ]
  },
  {
    id: 'multifamily',
    title: 'Multifamily Communities',
    description: 'Modern residential complexes designed for community living.',
    thumbnailUrl: 'PortfolioCollectionThumbnails/MultifamilyCommunities.png',
    category: 'Residential',
    projects: [
      {
        id: 'mf-1',
        title: 'Urban Living Complex',
        description: 'Contemporary apartment community with shared amenities.',
        imageUrl: 'PersonalPortfolio/port-img (7).jpg',
        date: '2023',
        location: 'Aurora, CO',
        category: 'Residential',
        tags: ['Apartments', 'Urban', 'Community']
      },
      {
        id: 'mf-2',
        title: 'Luxury Condominiums',
        description: 'High-end condominium development with premium features.',
        imageUrl: 'PersonalPortfolio/port-img (8).jpg',
        date: '2023',
        location: 'Denver, CO',
        category: 'Residential',
        tags: ['Luxury', 'Condos', 'Modern']
      },
      {
        id: 'mf-3',
        title: 'Mixed-Use Development',
        description: 'Residential community with integrated retail and office spaces.',
        imageUrl: 'PersonalPortfolio/port-img (9).jpg',
        date: '2023',
        location: 'Colorado Springs, CO',
        category: 'Residential',
        tags: ['Mixed-Use', 'Community', 'Lifestyle']
      }
    ]
  },
  {
    id: 'construction-tech',
    title: 'Construction Technology',
    description: 'Modern machinery and equipment. Innovative solutions transforming the construction industry.',
    thumbnailUrl: 'PortfolioCollectionThumbnails/ConstructionTechnology.png',
    category: 'Technology',
    projects: [
      {
        id: 'tech-1',
        title: 'Digital Twin Implementation',
        description: 'Real-time 3D modeling and monitoring systems for construction sites.',
        imageUrl: 'PersonalPortfolio/port-img (10).jpg',
        date: '2023',
        location: 'Denver, CO',
        category: 'Technology',
        tags: ['Digital Twin', 'BIM', 'IoT']
      },
      {
        id: 'tech-2',
        title: 'AI Safety Monitoring',
        description: 'Advanced AI systems for construction site safety and risk management.',
        imageUrl: 'PersonalPortfolio/port-img (11).jpg',
        date: '2023',
        location: 'Boulder, CO',
        category: 'Technology',
        tags: ['AI', 'Safety', 'Monitoring']
      },
      {
        id: 'tech-3',
        title: 'Robotics Integration',
        description: 'Automated construction systems and robotic assistance platforms.',
        imageUrl: 'PersonalPortfolio/port-img (12).jpg',
        date: '2023',
        location: 'Fort Collins, CO',
        category: 'Technology',
        tags: ['Robotics', 'Automation', 'Innovation']
      }
    ]
  },
  {
    id: 'earthwork',
    title: 'Earthwork',
    description: 'Specialized site preparation, excavation, and soil management services.',
    thumbnailUrl: 'PortfolioCollectionThumbnails/Earthwork.png',
    category: 'Earthwork',
    projects: [
      {
        id: 'earth-1',
        title: 'Mass Excavation',
        description: 'Large-scale site preparation for commercial development.',
        imageUrl: 'PersonalPortfolio/port-img (13).jpg',
        date: '2023',
        location: 'Fort Collins, CO',
        category: 'Earthwork',
        tags: ['Excavation', 'Site Prep', 'Commercial']
      },
      {
        id: 'earth-2',
        title: 'Foundation Systems',
        description: 'Deep foundation and soil stabilization for high-rise structures.',
        imageUrl: 'PersonalPortfolio/port-img (14).jpg',
        date: '2023',
        location: 'Denver, CO',
        category: 'Earthwork',
        tags: ['Foundations', 'Soil', 'Engineering']
      },
      {
        id: 'earth-3',
        title: 'Site Development',
        description: 'Complete site preparation including grading and utility infrastructure.',
        imageUrl: 'PersonalPortfolio/port-img (15).jpg',
        date: '2023',
        location: 'Aurora, CO',
        category: 'Earthwork',
        tags: ['Grading', 'Utilities', 'Development']
      }
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Buildings',
    description: 'State-of-the-art commercial spaces and office buildings.',
    thumbnailUrl: 'PortfolioCollectionThumbnails/Commercial%20Buildings.png',
    category: 'Commercial',
    projects: [
      {
        id: 'com-1',
        title: 'Tech Hub Office Complex',
        description: 'Modern office space designed for tech companies.',
        imageUrl: 'PersonalPortfolio/port-img (4).jpg',
        date: '2023',
        location: 'Denver, CO',
        category: 'Commercial',
        tags: ['Office', 'Tech', 'Modern']
      },
      {
        id: 'com-2',
        title: 'Retail Center',
        description: 'Contemporary retail space with modern amenities.',
        imageUrl: 'PersonalPortfolio/port-img (5).jpg',
        date: '2023',
        location: 'Aurora, CO',
        category: 'Commercial',
        tags: ['Retail', 'Modern', 'Commercial']
      },
      {
        id: 'com-3',
        title: 'Corporate Headquarters',
        description: 'State-of-the-art corporate office building.',
        imageUrl: 'PersonalPortfolio/port-img (6).jpg',
        date: '2023',
        location: 'Boulder, CO',
        category: 'Commercial',
        tags: ['Corporate', 'Office', 'Modern']
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