import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Tabla } from './Tabla.jsx'
import Juego from './vistas/Juego.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Juego/>
    <Tabla/>
  </StrictMode>,
)
