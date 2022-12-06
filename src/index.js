import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextUid from './ContextUid';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextUid>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextUid>
);
