import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home as HomeIcon, User, Briefcase, Mail } from 'lucide-react'; // Import Icon

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/home"><HomeIcon size={20}/> Home</Link>
        <Link to="/about"><User size={20}/> About</Link>
        <Link to="/portfolio"><Briefcase size={20}/> Portfolio</Link>
        <Link to="/contact"><Mail size={20}/> Contact</Link>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;