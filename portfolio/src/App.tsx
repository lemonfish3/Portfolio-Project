import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/nav'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import ImageAPI from './pages/image_api'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/image-api" element={<ImageAPI />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

