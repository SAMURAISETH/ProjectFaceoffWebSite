import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index2.css'
import App from './Acr.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)