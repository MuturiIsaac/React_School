import React, { useState } from 'react';
import personImage from '../assets/person1.jpg';

function Team() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const teamMembers = [
    { name: 'Jane Doe', role: 'Principal', image: personImage },
    { name: 'John Smith', role: 'Head of Sciences', image: personImage },
    { name: 'John Smith', role: 'Head of Sciences', image: personImage },
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section id="team" className="py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">Meet Our Team</h2>
      <div className="team-slider flex overflow-hidden">
        {teamMembers.map((member, index) => (
          <div key={index} className={`team-member flex-shrink-0 w-full transition-transform duration-500 ${currentSlide === index ? 'block' : 'hidden'}`}>
            <img src={member.image} alt={`Team Member ${index + 1}`} className="w-40 h-40 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
      <div className="slider-nav mt-8">
        <button onClick={prevSlide} className="prev bg-blue-700 text-white w-10 h-10 rounded-full mx-2">❮</button>
        <button onClick={nextSlide} className="next bg-blue-700 text-white w-10 h-10 rounded-full mx-2">❯</button>
      </div>
    </section>
  );
}

export default Team;
