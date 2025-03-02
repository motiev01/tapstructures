// src/pages/BlogPostPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { blogPosts } from '../data/blogPosts';

// Sample comments data - in a real app, this would come from an API
interface Comment {
  id: number;
  postId: number;
  author: string;
  content: string;
  date: string;
}

const sampleComments: Comment[] = [
  {
    id: 1,
    postId: 1,
    author: "Jane Smith",
    content: "Great insights! I've been seeing more AI tools used in our projects as well. Would love to hear more about specific applications you've found effective.",
    date: "2024-10-16T14:30:00Z"
  },
  {
    id: 2,
    postId: 1,
    author: "Michael Chen",
    content: "The balance between AI automation and human oversight is indeed critical. I appreciate your nuanced take on this topic.",
    date: "2024-10-17T09:15:00Z"
  },
  {
    id: 3,
    postId: 2,
    author: "Sarah Johnson",
    content: "I've been exploring mass timber as well. Have you looked into the regulatory challenges in different regions?",
    date: "2024-10-02T16:45:00Z"
  }
];

// Styled components for the blog post page layout and elements
const PostContainer = styled.article`
  padding: 5rem 0;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const PostHeader = styled.header`
  margin-bottom: 3rem;
`;

const PostTitle = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 1.5rem;
`;

const PostDate = styled.span`
  font-size: 0.9rem;
`;

const PostReadTime = styled.span`
  font-size: 0.9rem;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background-color: ${props => props.theme.colors.primaryLight};
  color: ${props => props.theme.colors.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
`;

// Styling for the blog post content with rich typography
const PostContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  h2 {
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
    color: ${props => props.theme.colors.primary};
  }
  
  h3 {
    font-size: 1.5rem;
    margin: 1.5rem 0 1rem;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  blockquote {
    border-left: 4px solid ${props => props.theme.colors.primary};
    padding-left: 1rem;
    font-style: italic;
    color: ${props => props.theme.colors.textLight};
    margin: 1.5rem 0;
  }
`;

// Container for post download options
const DownloadSection = styled.div`
  display: flex;
  gap: 1rem;
  margin: 3rem 0;
  flex-wrap: wrap;
`;

// Commenting section styling
const CommentsSection = styled.section`
  margin-top: 4rem;
`;

const CommentsSectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`;

const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const CommentCard = styled(Card)`
  padding: 1.5rem;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const CommentAuthor = styled.span`
  font-weight: 600;
`;

const CommentDate = styled.span`
  color: ${props => props.theme.colors.textLight};
  font-size: 0.875rem;
`;

const CommentContent = styled.p`
  margin: 0;
`;

// Form styling for adding comments
const CommentForm = styled.form`
  margin-top: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${props => props.theme.colors.backgroundAlt};
  border-radius: ${props => props.theme.borderRadius};
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${props => props.theme.colors.backgroundAlt};
  border-radius: ${props => props.theme.borderRadius};
  font-family: inherit;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const ErrorMessage = styled.p`
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled(motion.div)`
  background-color: #c6f6d5;
  color: #276749;
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 1.5rem;
`;

const NoCommentsMessage = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-style: italic;
  margin-bottom: 2rem;
`;

const AttachmentsSection = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background-color: ${props => props.theme.colors.backgroundAlt};
  border-radius: ${props => props.theme.borderRadius};
`;

const AttachmentLink = styled.a`
  display: inline-flex;
  align-items: center;
  margin-right: 1rem;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

// Add this after your other styled components, before the CommentFormData interface
const PostImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 2rem 0;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: block;
`;

// Type definition for the comment form data
interface CommentFormData {
  name: string;
  comment: string;
}

const BlogPostPage: React.FC = () => {
  // Extract post ID from URL parameters
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // State management for comments and form submission
  const [commentSubmitSuccess, setCommentSubmitSuccess] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  
  // Initialize react-hook-form for comment submission
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<CommentFormData>();
  
  // Find the blog post based on the URL parameter
  const post = blogPosts.find(post => post.id.toString() === id);
  
  // Effect hook to load comments when the post ID changes
  useEffect(() => {
    // Simulate API call to fetch comments for the current post
    if (id) {
      const postComments = sampleComments.filter(comment => comment.postId.toString() === id);
      setComments(postComments);
    }
  }, [id]);
  
  // Redirect if the post doesn't exist
  useEffect(() => {
    if (!post && id) {
      navigate('/insights');
    }
  }, [post, id, navigate]);
  
  // Handle comment submission
  const onSubmitComment = (data: CommentFormData) => {
    // Create a new comment with the form data
    const newComment: Comment = {
      id: comments.length + 1,
      postId: Number(id),
      author: data.name,
      content: data.comment,
      date: new Date().toISOString()
    };
    
    // Add the new comment to the list
    setComments([...comments, newComment]);
    
    // Show success message
    setCommentSubmitSuccess(true);
    
    // Reset form
    reset();
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setCommentSubmitSuccess(false);
    }, 3000);
  };
  
  // Functions to handle downloading the post in different formats
  const downloadAsTxt = () => {
    if (!post) return;
    
    // Create a text version of the post
    const text = `${post.title}\n\n${post.content}`;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = `${post.title.toLowerCase().replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    
    // Clean up the temporary resources
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };
  
  // Placeholder functions for PDF and DOCX downloads
  // In a real app, you would use libraries like jsPDF or docx-js
  const downloadAsPdf = () => {
    alert('PDF download functionality would be implemented with a library like jsPDF');
  };
  
  const downloadAsDocx = () => {
    alert('DOCX download functionality would be implemented with a library like docx-js');
  };
  
  // If post not found, don't render anything (we'll redirect in the useEffect)
  if (!post) return null;
  
  return (
    <PostContainer>
      <Container>
        <BackLink to="/insights">← Back to Insights</BackLink>
        
        <PostHeader>
          <PostTitle>{post.title}</PostTitle>
          <PostMeta>
            <PostDate>
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </PostDate>
            <PostReadTime>{post.readTime} min read</PostReadTime>
          </PostMeta>
          
          <TagsContainer>
            {post.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagsContainer>
        </PostHeader>
        
        <PostContent>
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {post.images && post.images.map((image, index) => (
            <PostImage 
              key={`image-${index}`} 
              src={image} 
              alt={`Figure ${index + 1}`} 
              loading="lazy" 
            />
          ))}
        </PostContent>
        
        {post.attachments && (
          <AttachmentsSection>
            <h3>Attachments</h3>
            {post.attachments.map((attachment, index) => (
              <AttachmentLink 
                key={index} 
                href={attachment.file} 
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                📎 {attachment.label}
              </AttachmentLink>
            ))}
          </AttachmentsSection>
        )}

        <DownloadSection>
          <Button onClick={downloadAsTxt}>Download as TXT</Button>
          <Button onClick={downloadAsPdf}>Download as PDF</Button>
          <Button onClick={downloadAsDocx}>Download as DOCX</Button>
        </DownloadSection>
        
        <CommentsSection>
          <CommentsSectionTitle>Comments</CommentsSectionTitle>
          
          {comments.length === 0 ? (
            <NoCommentsMessage>Be the first to comment!</NoCommentsMessage>
          ) : (
            <CommentsList>
              {comments.map((comment) => (
                <CommentCard key={comment.id}>
                  <CommentHeader>
                    <CommentAuthor>{comment.author}</CommentAuthor>
                    <CommentDate>
                      {new Date(comment.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </CommentDate>
                  </CommentHeader>
                  <CommentContent>{comment.content}</CommentContent>
                </CommentCard>
              ))}
            </CommentsList>
          )}
          
          {commentSubmitSuccess && (
            <SuccessMessage
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Your comment has been added successfully!
            </SuccessMessage>
          )}
          
          <CommentForm onSubmit={handleSubmit(onSubmitComment)}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="comment">Comment</Label>
              <Textarea 
                id="comment"
                {...register('comment', { required: 'Comment is required' })}
              />
              {errors.comment && <ErrorMessage>{errors.comment.message}</ErrorMessage>}
            </FormGroup>
            
            <Button type="submit" primary>Add Comment</Button>
          </CommentForm>
        </CommentsSection>
      </Container>
    </PostContainer>
  );
};

export default BlogPostPage;