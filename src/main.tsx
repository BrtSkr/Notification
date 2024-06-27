import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

//CSS imports
import './css/index.css';
import './css/App.css';
import './css/utility.css';
import './css/animations.css';
import './css/pages.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
