// src/pages/InsightsPage.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import Card from '../components/common/Card';
import { blogPosts } from '../data/blogPosts';

// Styled components for the blog listing page
const BlogSection = styled.section`
  padding: 5rem 0;
`;

const PageHeading = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
`;

const PageDescription = styled.p`
  font-size: 1.1rem;
  max-width: 800px;
  margin-bottom: 3rem;
`;

// Grid layout for blog post cards with responsive behavior
const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

// Card representation of each blog post with hover animation
const BlogCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const BlogPreview = styled.p`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
`;

// Metadata section for post details with flex layout
const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors.textLight};
  font-size: 0.875rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const BlogDate = styled.span``;

const BlogReadTime = styled.span``;

// Container for blog post tags with flex layout for inline display
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

// Visual representation of a tag with branded color scheme
const Tag = styled.span`
  background-color: ${props => props.theme.colors.primaryLight};
  color: ${props => props.theme.colors.primary};
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
`;

// Animation variants for staggered entrance animations
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
      staggerChildren: 0.1 // Slight delay between each child animation
    }
  }
};

const InsightsPage: React.FC = () => {
  return (
    <BlogSection>
      <Container>
        <PageHeading>Insights</PageHeading>
        <PageDescription>
          Explore my thoughts and opinions on topics ranging from construction and trending business models to optimizing and addressing LLM context window limitations. 
          Every blue moon, a spark of curiosity will ignite in me thats not easily extinguished. I hope to use this feature as a medium to explore these ideas and share
          them with those who are intrigued.
          These short reads reflect my experiences and perspectives on industry trends and innovations.
          I'm no expert and claim no ethos towards the accuracy or fact-checking of this content other than what's explicity provided. As such I will do my best to ensure
          validity and accuracy in my posts, but at the end of the day these are personal opinions and not an attempt at professional advice. I hope to inspire you
          to learn something new or revisit an old idea with a fresh perspective.
        </PageDescription>
        
        {/* Animation container with staggered children animations */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <BlogGrid>
            {/* Map through blog posts data to render each post card */}
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={fadeIn}>
                <BlogCard 
                  as={Link} 
                  to={`/insights/${post.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <BlogTitle>{post.title}</BlogTitle>
                  <TagsContainer>
                    {post.tags.map((tag, index) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                  </TagsContainer>
                  <BlogPreview>{post.preview}</BlogPreview>
                  <BlogMeta>
                    <BlogDate>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</BlogDate>
                    <BlogReadTime>{post.readTime} min read</BlogReadTime>
                  </BlogMeta>
                </BlogCard>
              </motion.div>
            ))}
          </BlogGrid>
        </motion.div>
      </Container>
    </BlogSection>
  );
};

export default InsightsPage;