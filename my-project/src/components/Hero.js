import React from 'react';

function Hero() {
  return (
    <section id="hero" className="bg-cover bg-center text-white text-center py-32" style={{ backgroundImage: 'url("path/to/hero-image.jpg")' }}>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Education for All</h1>
      <p className="text-lg md:text-xl mb-8">Providing a high-quality learning experience for local students and refugees.</p>
      <button className="cta-btn bg-orange-500 text-white px-6 py-3 rounded-full font-bold">Learn More</button>
    </section>
  );
}

export default Hero;
