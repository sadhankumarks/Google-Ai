import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ContextProvider from './context/Context';
import { createRoot } from 'react-dom/client'; 

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);

/* AIzaSyAR4H35UNHWudaytviJw3F3rEO8c7n9xhk  */