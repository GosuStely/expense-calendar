import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import University from './components/University.jsx'
import Gym from './components/Gym.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/university" element={<University />} />
        <Route path="/gym" element={<Gym />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>,
)
