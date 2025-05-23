import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { preloadCategoryImages } from '@/services/imageService'
import './index.css'
import App from './App'

// Preload category images for better performance
preloadCategoryImages();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
