import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ucapan from './Ucapan.jsx'
import Kenangan from './Kenangan.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/kartu_ucapan_for_ipit" element={<Ucapan />} />
        <Route path="/galeri_kenangan" element={<Kenangan />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
