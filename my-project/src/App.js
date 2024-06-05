import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Features from './components/Features';
import Values from './components/Values';
import Team from './components/Team';
import Admission from './components/Admission';
import Testimonial from './components/Testimonial';
import Supporters from './components/Supporters';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Welcome />
      <Features />
      <Values />
      <Team />
      <Admission />
      <Testimonial />
      <Supporters />
      <Footer />
    </div>
  );
}

export default App;
