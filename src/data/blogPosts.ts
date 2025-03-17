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
      content: `Artificial intelligence is reshaping the construction industry in ways that were unimaginable just a decade or even years ago. From optimizing project designs and assessing scope gaps to generating detailed IFC set and Professional Architect approved construction drawings AI is a game changer. As someone who's working at the intersection of technology and construction I\’ve seen firsthand how these modern tools outperform the old days methods in specific use cases and I\’ve learned the importance of using them well.

                AI powered tools will enhance performance, accelerate progress, and empower us to tackle the complex challenges of day to day construction instantly and effortlessly. We will be able to train client models privately and securely(encrypted) to predict project timelines with crazy accuracy, spot potential safety hazards or AHJ violations before they turn into costly problems, pick up any fine details that slipped through the cracks during review, and optimize resource allocation across even the trickiest projects. These advancements don\’t just make us more efficient, they make us more superhuman, letting us deliver better results while cutting waste and time that bloats the industry.
                
                I'm a full believer and see AI\'s huge potential yet the human element is still more critical than ever. AI isn\’t a replacement for skilled pros it\’s an enhancement. Let me say that again. AI IS NOT A REPLACEMENT for everyone. I believe the best implementations will strike a careful balance. AI is great at handling repetitive data heavy tasks like crunching numbers for cost estimates or flagging potential delays which frees up human expertise for creative problem solving and relationship management. The bread and butter of construction and most industries. A well designed building isn\’t just about numbers it\’s about understanding local jurisdictions, client wants/needs, and navigating the surprises that will surely pop up.
                
                There are surely infinite possibilities and ways to run with AI that want to send me off to the races. I think one of the most exciting ventures and one that I want to be help inspire is talking to your docs. Essentially to simplify the tedious sifting and sorting and searching for every document, report, submittal, notice, delivery, status, meeting, etc... It\'s exhausting. In years to come, sooner than we may imagine, we will have fully contextual AI that can give you exactly what you need, when you need it, with no effort. (Especially helpful for our old school guys)
                `,
      date: '2025-03-02',
      readTime: 2, // minutes
      tags: ['Technology', 'Construction', 'Innovation']
    },
    {
      id: 2,
      title: 'From Concept to Completion: Managing Complex Projects',
      preview: 'Coming soon...',
      content: '',
      date: '2025-03-16',
      readTime: 0,
      tags: ['Project Management', 'Field Engineering', 'Leadership']
    },
    {
      id: 3,
      title: 'Best Marketing Practices for Emerging Construction Firms',
      preview: 'A strong web presence is increasingly important for construction companies looking to showcase their portfolio and attract new clients...',
      content: 'A strong web presence is increasingly important for construction companies looking to showcase their portfolio and attract new clients. My background in both construction and web development has given me unique perspective on how construction firms can effectively leverage digital platforms.\n\nVisual elements are paramount - high-quality photography and 3D renderings of projects can convey craftsmanship in ways text simply cannot. Additionally, intuitive site organization that guides potential clients through your project history while highlighting your specific expertise can dramatically improve conversion rates.\n\nMobile optimization is no longer optional, as many potential clients will first encounter your company through smartphones. Performance considerations, particularly for image-heavy portfolios, require careful balance between visual impact and loading times.',
      date: '2025-03-02',
      readTime: 1,
      tags: ['Project Quality', 'Marketing', 'Construction']
    },
    {
      id: 4, // Make sure this is unique and one higher than the previous highest ID
      title: 'Exploring the Future of Construction Technology',
      preview: 'We are living in the future, and the construction industry is no exception...',
      content: 'Full content coming soon',
      date: '2025-03-02', // Use YYYY-MM-DD format
      readTime: 0, // Estimated reading time in minutes
      tags: ['Technology', 'Construction', 'Vision'],
      images: [testImg01]
    }
  ];