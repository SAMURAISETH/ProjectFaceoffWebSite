import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './ind.css'
import APP from './APP.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <APP />
  </StrictMode>,
)
