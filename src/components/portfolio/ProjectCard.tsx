import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  font-size: 0.7rem;
  margin: 0;
  color: #333;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 0.5rem;
  margin: 0.25rem 0 0;
  color: #666;
  line-height: 1.2;
`;

const Location = styled.span`
  color: #888;
  font-size: 0.5rem;
  display: block;
  margin-top: 0.15rem;
`;

const InfoBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.35rem;
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(100%);
  transition: transform 0.3s ease;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

interface ProjectCardProps {
  title: string;
  description: string;
  location: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, location }) => {
  return (
    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Location>{location}</Location>
    </div>
  );
};

export default ProjectCard; 