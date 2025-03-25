import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import Card from '../components/common/Card';
import BackToTopButton from '../components/common/BackToTopButton';

const EducationSection = styled.section`
  padding: 5rem 0;
`;

const PageHeading = styled.h1`
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
`;

const PageDescription = styled.p`
  font-size: 1.1rem;
  max-width: 800px;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.textLight};
`;

const TableOfContents = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ContentCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
  transition: transform 0.3s ease;
`;

const ContentIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
`;

const ContentTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const ContentDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const ContentLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primaryDark};
  }
`;

// Animation variants for staggered animations
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

const educationContent = [
  {
    icon: '🏗️',
    title: 'Construction Management',
    description: 'Learn about project planning, scheduling, resource allocation, and quality control in construction management.',
    link: '/education/construction-management'
  },
  {
    icon: '💻',
    title: 'Software Development',
    description: 'Explore programming fundamentals, web development, and software engineering principles.',
    link: '/education/software-development'
  },
  {
    icon: '🤖',
    title: 'Artificial Intelligence',
    description: 'Understanding AI concepts, machine learning, and their applications in construction.',
    link: '/education/artificial-intelligence'
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    description: 'Learn about data analysis, visualization, and decision-making in construction projects.',
    link: '/education/data-analytics'
  },
  {
    icon: '📋',
    title: 'Project Documentation',
    description: 'Best practices for documentation, reporting, and communication in construction projects.',
    link: '/education/project-documentation'
  },
  {
    icon: '🔒',
    title: 'Safety & Compliance',
    description: 'Understanding safety protocols, regulations, and compliance requirements in construction.',
    link: '/education/safety-compliance'
  }
];

const EducationPage: React.FC = () => {
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

  return (
    <>
      <EducationSection>
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <PageHeading>Educational Resources</PageHeading>
              <PageDescription>
                Explore our comprehensive collection of educational content designed to help you stay ahead in the construction industry. 
                From traditional construction management to cutting-edge technology integration, find resources that match your learning needs.
              </PageDescription>
            </motion.div>

            <motion.div variants={fadeIn}>
              <TableOfContents>
                {educationContent.map((content, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeIn}
                    whileHover={{ scale: 1.02 }}
                  >
                    <ContentCard>
                      <ContentIcon>{content.icon}</ContentIcon>
                      <ContentTitle>{content.title}</ContentTitle>
                      <ContentDescription>{content.description}</ContentDescription>
                      <ContentLink to={content.link}>
                        Learn More →
                      </ContentLink>
                    </ContentCard>
                  </motion.div>
                ))}
              </TableOfContents>
            </motion.div>
          </motion.div>
        </Container>
      </EducationSection>

      <BackToTopButton
        isVisible={showBackToTop}
        onClick={scrollToTop}
      />
    </>
  );
};

export default EducationPage; 