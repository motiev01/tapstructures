import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main application', () => {
  render(<App />);
  // Basic smoke test to ensure the component renders without crashing
  expect(document.querySelector('div')).toBeInTheDocument();
});
