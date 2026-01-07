import React from 'react';
import Navigation from '../Navigation';
import Hero from '../Hero';
import Services from '../Services';
import About from '../About';
import Work from '../Work';
import Process from '../Process';
import Blogsec from '../Blog1';
import FAQ from '../FAQ';
import Testimonials from '../Testimonials';
import Contact from '../Contact';
import Footer from '../Footer';

export default function Home() {
  return (
    <div className="bg-slate-900 text-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Work />
      <Process />
      <Blogsec />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
