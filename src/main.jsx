import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ScreenSizeProvider } from './context/useScreenSizeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScreenSizeProvider>
        <App />
      </ScreenSizeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
