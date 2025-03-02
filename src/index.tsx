// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * The application's entry point that renders the root component to the DOM.
 * 
 * React 18 uses createRoot instead of the legacy ReactDOM.render.
 * StrictMode is enabled for development quality checks.
 */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance measurement - optional but useful
reportWebVitals();