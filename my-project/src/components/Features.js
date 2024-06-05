import React from 'react';
import artsImage from '../assets/arts.jpg';

function Features() {
  return (
    <section id="features" className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">We Cultivate Your Talents</h2>
      <div className="feature-grid grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="feature-item bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={artsImage} alt="Sports" className="w-full h-48 object-cover" />
          <h3 className="text-xl font-bold p-4 bg-gray-900 text-white">Cutting-edge sports facilities</h3>
        </div>
        <div className="feature-item bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={artsImage} alt="Arts" className="w-full h-48 object-cover" />
          <h3 className="text-xl font-bold p-4 bg-gray-900 text-white">A nurturing arts environment</h3>
        </div>
        <div className="feature-item bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={artsImage} alt="Tech" className="w-full h-48 object-cover" />
          <h3 className="text-xl font-bold p-4 bg-gray-900 text-white">Advanced technology labs</h3>
        </div>
      </div>
    </section>
  );
}

export default Features;
