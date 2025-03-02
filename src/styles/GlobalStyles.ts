// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@500;600;700&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: ${theme.fonts.body};
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
    line-height: 1.6;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.text};
    margin-bottom: 1rem;
  }
  
  h1 {
    font-size: 2.5rem;
    color: ${theme.colors.primary};
  }
  
  h2 {
    font-size: 2rem;
  }
  
  h3 {
    font-size: 1.75rem;
  }
  
  h4 {
    font-size: 1.5rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  button {
    font-family: ${theme.fonts.body};
  }
`;

export default GlobalStyles;