import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import InsightsPage from './pages/InsightsPage';
import BlogPostPage from './pages/BlogPostPage';
import PortfolioPage from './pages/PortfolioPage';

/**
 * The App component serves as the entry point for the application.
 * It sets up React Router for client-side navigation and wraps all content
 * in the Layout component, which provides consistent structure with header and footer.
 *
 * Routes are defined for each page of the application:
 * - Landing/Home page at the root URL
 * - About page for professional bio and project highlights
 * - Contact page with form functionality
 * - Insights page for the blog listing
 * - Individual blog post pages with dynamic routing based on post ID
 * - Portfolio page showcasing personal work
 */
const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:id" element={<BlogPostPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;