import React from 'react';
import supporterImage from '../assets/person4.jpg';

function Supporters() {
  return (
    <section id="supporters" className="py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">Our Key Supporters</h2>
      <div className="logo-grid grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        <img src={supporterImage} alt="Supporter 1" />
        <img src={supporterImage} alt="Supporter 2" />
        {/* More supporter logos */}
      </div>
    </section>
  );
}

export default Supporters;
