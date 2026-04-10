import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/plus-jakarta-sans/800.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import './styles/global.css';

import '@fontsource/syne/400.css';
import '@fontsource/syne/700.css';
import '@fontsource/syne/800.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';

import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/700.css';

import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
