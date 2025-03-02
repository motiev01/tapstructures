// src/data/blogPosts.ts
import testImg01 from '../assets/images/test-img-01.webp';


export interface BlogPost {
    id: number;
    title: string;
    preview: string;
    content: string;
    date: string;
    readTime: number;
    tags: string[];
    images?: string[];
    attachments?: {
      label: string;
      file: string;
      type: 'pdf' | 'doc' | 'other';
    }[];
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'AI in Construction: My Take',
      preview: 'Artificial intelligence is transforming the construction industry in profound ways, from design optimization and risk assessment to...',
      content: 'Artificial intelligence is transforming the construction industry in profound ways, from design optimization and risk assessment to all out Constuction/Shop Drawing Generation. As someone working at the intersection of technology and construction, I\'ve seen the benefits of using modern technologies firsthand(and knowing how to wield them), in comparison to the "old days"\n\nAI-powered tools will enhance, accelerate, and empower us to predict project timelines with greater accuracy, identify potential safety hazards before they become problems, and optimize resource allocation across complex projects(more efficient and effective). \n\nHowever, the human element remains more important than ever - AI serves as an enhancement to skilled professionals, not a replacement. The most successful implementations I\'ve seen maintain this balance, using AI to handle repetitive tasks while freeing human expertise for creative problem-solving and relationship management.',
      date: '2024-10-15',
      readTime: 5, // minutes
      tags: ['Technology', 'Construction', 'Innovation']
    },
    {
      id: 2,
      title: 'From Concept to Completion: Managing Complex Projects',
      preview: 'Managing multifaceted construction projects requires a delicate balance of technical knowledge, interpersonal skills, and strategic thinking...',
      content: 'Managing multifaceted construction projects requires a delicate balance of technical knowledge, interpersonal skills, and strategic thinking. Drawing from my experience managing the development of a 388-unit luxury apartment community, I\'ve compiled key insights about effective project management in construction.\n\nCommunication remains the foundation of success, particularly when coordinating between architects, engineers, contractors, and clients. Early identification of potential challenges, combined with flexible contingency planning, has repeatedly saved time and resources across projects of all sizes.\n\nTechnology integration, from BIM modeling to project management software, continues to transform how we approach complex projects, enabling better visualization, improved collaboration, and more accurate forecasting.',
      date: '2024-09-15',
      readTime: 8,
      tags: ['Project Management', 'Field Engineering', 'Leadership']
    },
    {
      id: 3,
      title: 'Best Marketing Practices for Emerging Construction Firms',
      preview: 'A strong web presence is increasingly important for construction companies looking to showcase their portfolio and attract new clients...',
      content: 'A strong web presence is increasingly important for construction companies looking to showcase their portfolio and attract new clients. My background in both construction and web development has given me unique perspective on how construction firms can effectively leverage digital platforms.\n\nVisual elements are paramount - high-quality photography and 3D renderings of projects can convey craftsmanship in ways text simply cannot. Additionally, intuitive site organization that guides potential clients through your project history while highlighting your specific expertise can dramatically improve conversion rates.\n\nMobile optimization is no longer optional, as many potential clients will first encounter your company through smartphones. Performance considerations, particularly for image-heavy portfolios, require careful balance between visual impact and loading times.',
      date: '2024-09-01',
      readTime: 4,
      tags: ['Project Quality', 'Marketing', 'Construction']
    },
    {
      id: 4, // Make sure this is unique and one higher than the previous highest ID
      title: 'Exploring the Future of Construction Technology',
      preview: 'We are living in the future, and the construction industry is no exception.',
      content: 'The full content of your blog post. You can use \n\n to create paragraph breaks that will render properly on the page.',
      date: '2024-11-15', // Use YYYY-MM-DD format
      readTime: 7, // Estimated reading time in minutes
      tags: ['Relevant', 'Tags', 'Here'],
      images: [testImg01]
    }
  ];