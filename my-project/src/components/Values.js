import React from 'react';

function Values() {
  return (
    <section id="values" className="py-16 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">Our Core Values</h2>
      <div className="values-grid grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="value-item">
          <i className="icon-book text-5xl text-blue-700 mb-4"></i>
          <h3 className="text-xl font-bold">Academic Excellence</h3>
        </div>
        <div className="value-item">
          <i className="icon-diversity text-5xl text-blue-700 mb-4"></i>
          <h3 className="text-xl font-bold">Inclusive Community</h3>
        </div>
        <div className="value-item">
          <i className="icon-globe text-5xl text-blue-700 mb-4"></i>
          <h3 className="text-xl font-bold">Global Perspective</h3>
        </div>
      </div>
    </section>
  );
}

export default Values;
