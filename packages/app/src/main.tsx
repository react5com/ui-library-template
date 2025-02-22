import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/1-reset.scss'
import './styles/2-colors.scss'
import './index.css'
import './i18n';

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
