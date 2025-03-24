// src/pages/AboutPage.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import Card from '../components/common/Card';
import bulldozerImage from '../assets/images/Bulldozer-Tap-01.webp';

const AboutSection = styled.section`
  padding: 5rem 0;
`;

const PageHeading = styled.h1`
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
`;

const BioContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bulldozerImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  border-radius: 1rem;
  overflow: hidden;
  margin: 2rem 0;
  
  @media (hover: none) and (pointer: coarse), (max-width: 768px) {
    background-attachment: scroll;
    -webkit-overflow-scrolling: touch;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;

const BioContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 1rem;
  text-align: center;
  margin: 0 auto;
  width: 90%;
  
  @media (max-width: 768px) {
    width: 95%;
    padding: 1.5rem;
  }
`;

const BioText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SkillName = styled.span`
  font-weight: 500;
`;

const ProjectsSection = styled.section`
  padding: 5rem 0;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
`;

const ProjectRole = styled.p`
  font-style: italic;
  color: ${props => props.theme.colors.textLight};
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const SectionHeading = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
`;

// Animation variants for staggered fade-in animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const EnhancedSkillCard = styled(Card)`
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const SkillIconContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primaryLight};
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-right: 1rem;
`;

const SkillDetails = styled.div`
  flex: 1;
`;

const SkillNameAndLevel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const SkillLevel = styled.span`
  font-size: 0.85rem;
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 6px;
  background-color: ${props => props.theme.colors.backgroundAlt};
  border-radius: 3px;
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div<{ $progress: number }>`
  height: 100%;
  width: ${props => props.$progress}%;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 3px;
  transition: width 1s ease-in-out;
`;

const SkillDescription = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textLight};
  margin: 0;
`;

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

const AboutPage = () => {
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

  // Skills data array with icons for visual representation
  const skills = [
    { name: 'C++, Java, Python, HTML/CSS, Bluebeam, Excel, git.',
      icon: '💻',
      proficiency: 90, // Percentage of proficiency
      description: 'Educational background and creating personal projects and applications.'
    },
    { name: 'C, Assembly, JavaScript, React, Node.js, PyTorch, and more.',
      icon: '💻',
      proficiency: 65, // Percentage of proficiency
      description: 'Educational background and development experience.'
    },
    { name: 'Artificial Intelligence literacy and experience',
      icon: '💻',
      proficiency: 80, // Percentage of proficiency
      description: 'Machine & RL learning, AI agents & frameworks, RAG architectures, MCP protocols, Midjourney, SORA, Claude, Grok, ChatGPT, Gemini, and more..'
    },
    { name: 'Field Expertise',
      icon: '🏗️',
      proficiency: 90,
      description: 'Construction scheduling, coordinating, and managing subcontractors to ensure on-time completion of the project.' 
    },
    { name: 'Project Management',
      icon: '🏗️',
      proficiency: 80,
      description: 'Scopes, budgeting, contracts, Change Orders, RFIs, submittals, punch lists, and building turnover.' 
    },
    { name: 'Markup, Report, and Status Generation',
      icon: '🏗️',
      proficiency: 95,
      description: 'Generating markups and reports, create visual status updates, and track material/equipment deliveries.' },
    { name: 'ADA, FHA, TAS, ANSI Compliance',
      icon: '📘',
      proficiency: 75,
      description: 'Ensuring compliance with ADA, FHA, TAS, and ANSI standards.' },
    { name: 'Experience with Local, State, and Federal Regulations & Codes, including OSHA',
      icon: '🔄',
      proficiency: 75,
      description: 'Understanding and adhering to local, state, and federal regulations and codes, including OSHA.' },
    { name: 'City & 3rd-Party Inspections and Materials Testing',
      icon: '🔄',
      proficiency: 90,
      description: 'Inspecting and testing materials and systems to ensure compliance with specifications and standards.' }, 
    
  ];

  // Projects data array showcasing professional experience
  const projects = [
    {
      title: 'Multifamily Development',
      description: '388-unit luxury apartment community with modern amenities in Fort Worth, TX.\n',
      role: 'Initial field engineering role focused on on-site coordination.'
    },
    {
      title: 'Multifamily Development',
      description: '261-unit luxury apartment community with modern amenities in Grand Prairie, TX.',
      role: 'As Assistant Superintendent, I work with dozens of skilled subcontractors and vendors ensuring project quality and timely completion.'
    },
    {
      title: 'Responsive Web and Embedded Services',
      description: 'Custom web applications for construction management enhancements and automation.\nAs well as, embedded services for field management and minimal effort data collection.',
      role: 'Developing front-end interface, back-end pipeline and scalability, and implementation of user authentication.'
    },
  ];

  return (
    <>
      <AboutSection>
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <PageHeading>About Me</PageHeading>
              <BioContainer>
                <BioContent>
                  <BioText>
                    Hi, I'm Matt Tap! A builder with a passion for solving complex problems with innovative solutions. 
                    I hope to inspire a new age of construction that employs more effective practices while maintaining proven results, drawing on my experience
                    in both field engineering and development.
                  </BioText>
                  <BioText>
                    With a vision to build a business that transforms industries, I'm focused on creating solutions 
                    that weld optimized tools to the foundation of Industry Standard. My background in construction and 
                    computer science gives me a unique perspective on large scale architectures and how to approach complex projects with efficiency and creativity.
                  </BioText>
                </BioContent>
              </BioContainer>
            </motion.div>

            <motion.div variants={fadeIn}>
              <SectionHeading>Skills & Expertise</SectionHeading>
              <SkillsGrid>
                {skills.map((skill, index) => (
                  <motion.div key={index} variants={fadeIn}>
                    <EnhancedSkillCard>
                      <SkillHeader>
                        <SkillIconContainer>{skill.icon}</SkillIconContainer>
                        <SkillDetails>
                          <SkillNameAndLevel>
                            <SkillName>{skill.name}</SkillName>
                            <SkillLevel>{skill.proficiency}%</SkillLevel>
                          </SkillNameAndLevel>
                          <ProgressBarContainer>
                            <ProgressBar $progress={skill.proficiency} />
                          </ProgressBarContainer>
                          <SkillDescription>{skill.description}</SkillDescription>
                        </SkillDetails>
                      </SkillHeader>
                    </EnhancedSkillCard>
                  </motion.div>
                ))}
              </SkillsGrid>
            </motion.div>
          </motion.div>
        </Container>
      </AboutSection>

      <ProjectsSection>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <SectionHeading>Notable Projects</SectionHeading>
              <ProjectsGrid>
                {projects.map((project, index) => (
                  <motion.div key={index} variants={fadeIn}>
                    <ProjectCard>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectDescription>{project.description}</ProjectDescription>
                      <ProjectRole>{project.role}</ProjectRole>
                    </ProjectCard>
                  </motion.div>
                ))}
              </ProjectsGrid>
            </motion.div>
          </motion.div>
        </Container>
      </ProjectsSection>

      <BackToTopButton
        $isVisible={showBackToTop}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </BackToTopButton>
    </>
  );
};

export default AboutPage;