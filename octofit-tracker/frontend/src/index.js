
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Set REACT_APP_CODESPACE_NAME from environment if available
if (!process.env.REACT_APP_CODESPACE_NAME && window.location.hostname.includes('-8000.app.github.dev')) {
  const codespaceName = window.location.hostname.split('-8000.app.github.dev')[0];
  process.env.REACT_APP_CODESPACE_NAME = codespaceName;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
