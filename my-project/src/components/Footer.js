import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
      <div className="contact-info">
        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
        <p>123 Education St, City</p>
        <p>info@yourinstitution.org</p>
      </div>
      <div className="newsletter">
        <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
        <form id="newsletterForm" className="flex">
          <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 border-none rounded-l-md" required />
          <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-r-md">Subscribe</button>
        </form>
      </div>
      <div className="social-links flex space-x-4">
        <a href="#" className="icon-facebook text-2xl"></a>
        <a href="#" className="icon-twitter text-2xl"></a>
        <a href="#" className="icon-instagram text-2xl"></a>
      </div>
    </footer>
  );
}

export default Footer;
