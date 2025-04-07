import React,{ useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Events from './pages/Events';
import Partnerships from './pages/Partnerships';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import ImpactStories from './pages/ImpactStories';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path='/partnerships' element={<Partnerships/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/impact-stories' element={<ImpactStories/>}/>
          </Routes>
          <Footer />
    </Router>
  )
}

export default App
