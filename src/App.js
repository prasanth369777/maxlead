import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Aboutus from './components/pages/Aboutus';
import Contactus from './components/pages/Contactus';
import BlogSectionClassic from './components/pages/Blog';
import FlyerDistribution from './components/pages/Flyers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/blog" element={<BlogSectionClassic />} />
         <Route path="/contact" element={<Contactus />} />
         <Route path="/flyer" element={<FlyerDistribution/>} />
      </Routes>
    </Router>
  );
}

export default App;
