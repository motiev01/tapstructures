// src/components/layout/Layout.tsx
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import Header from './Header';
import Footer from './Footer';
import GlobalStyles from '../../styles/GlobalStyles';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

interface LayoutProps {
  children: React.ReactNode;
}

// The Layout component serves as the structural foundation for the entire application
// It wraps all page content with the necessary theme provider, global styles, header, and footer
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageContainer>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </PageContainer>
    </ThemeProvider>
  );
};

export default Layout;