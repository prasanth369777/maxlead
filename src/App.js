import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Aboutus from './components/pages/Aboutus';
import Contactus from './components/pages/Contactus';
import BlogSectionClassic from './components/pages/Blog';
import FlyerDistribution from './components/pages/Flyers';
import PrintingServices from './components/pages/PrintingServices';
import DigitalMarketing from './components/pages/Digitalmarketing';
import Outdoorads from './components/pages/outdoorads';
import Clients from './components/pages/client';
import Industries from './components/pages/industries';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/blog" element={<BlogSectionClassic />} />
         <Route path="/contact" element={<Contactus />} />
         <Route path="/flyer" element={<FlyerDistribution/>} />
          <Route path="/printing" element={<PrintingServices/>} />
          <Route path="/digital" element={<DigitalMarketing/>} />
          <Route path="/outdoor" element={<Outdoorads/>} />
          <Route path="/work" element={<Clients/>} />
           <Route path="/industries" element={<Industries/>} />
      </Routes>
    </Router>
  );
}

export default App;
