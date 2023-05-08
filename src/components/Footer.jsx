import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>1781 Mhinga Street</p>
            <p>Chiawelo, Soweto, 1818</p>
            <p>Phone: 011 980 5590</p>
            <p>Email: basaniprimary@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#">
                  <i className="fab fa-facebook fa-2x hover:text-blue-500"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter fa-2x hover:text-blue-500"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram fa-2x hover:text-pink-500"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube fa-2x hover:text-red-500"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <p className="text-sm text-center">&copy; 2023 Basani Primary School. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

