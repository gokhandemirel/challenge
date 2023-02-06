import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import '../src/assets/css/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <div id="custom-append-container" />
  </React.StrictMode>,
)
