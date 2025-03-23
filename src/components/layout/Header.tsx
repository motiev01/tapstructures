// src/components/layout/Header.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: ${props => props.theme.colors.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled(Link)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const NavItems = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  background-color: ${props => props.theme.colors.background};
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 200;
`;

const MobileNavItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  align-self: flex-end;
`;

// Using $ prefix for custom props to avoid DOM warnings
const NavLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${props => props.$isActive ? props.theme.colors.primary : props.theme.colors.text};
  text-decoration: none;
  font-weight: ${props => props.$isActive ? '600' : '500'};
  font-size: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 2px;
    width: ${props => props.$isActive ? '100%' : '0'};
    background-color: ${props => props.theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo to="/">TapStructures</Logo>
      
      <NavItems>
        <NavLink to="/" $isActive={isActivePath('/')}>Home</NavLink>
        <NavLink to="/about" $isActive={isActivePath('/about')}>About</NavLink>
        <NavLink to="/services" $isActive={isActivePath('/services')}>Services</NavLink>
        <NavLink to="/portfolio" $isActive={isActivePath('/portfolio')}>Portfolio</NavLink>
        <NavLink to="/insights" $isActive={isActivePath('/insights')}>Insights</NavLink>
        <NavLink to="/education" $isActive={isActivePath('/education')}>Education</NavLink>
        <NavLink to="/contact" $isActive={isActivePath('/contact')}>Contact</NavLink>
      </NavItems>
      
      <MobileMenuButton onClick={toggleMobileMenu}>
        ☰
      </MobileMenuButton>
      
      {mobileMenuOpen && (
        <MobileMenu
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ type: 'tween' }}
        >
          <CloseButton onClick={toggleMobileMenu}>✕</CloseButton>
          <MobileNavItems>
            <NavLink to="/" $isActive={isActivePath('/')} onClick={toggleMobileMenu}>Home</NavLink>
            <NavLink to="/about" $isActive={isActivePath('/about')} onClick={toggleMobileMenu}>About</NavLink>
            <NavLink to="/services" $isActive={isActivePath('/services')} onClick={toggleMobileMenu}>Services</NavLink>
            <NavLink to="/portfolio" $isActive={isActivePath('/portfolio')} onClick={toggleMobileMenu}>Portfolio</NavLink>
            <NavLink to="/insights" $isActive={isActivePath('/insights')} onClick={toggleMobileMenu}>Insights</NavLink>
            <NavLink to="/education" $isActive={isActivePath('/education')} onClick={toggleMobileMenu}>Education</NavLink>
            <NavLink to="/contact" $isActive={isActivePath('/contact')} onClick={toggleMobileMenu}>Contact</NavLink>
          </MobileNavItems>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;