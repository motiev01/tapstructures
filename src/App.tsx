import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import InsightsPage from './pages/InsightsPage';
import BlogPostPage from './pages/BlogPostPage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import EducationPage from './pages/EducationPage';
import ScrollToTop from './components/ScrollToTop';

/**
 * The App component serves as the entry point for the application.
 * Updated: Added ScrollToTop component to automatically scroll to top on page navigation
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
 * - Services page showcasing available services
 * - Education page for educational resources
 */
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:id" element={<BlogPostPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/education" element={<EducationPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;