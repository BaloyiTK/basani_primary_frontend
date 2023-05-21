import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container w-[95%] py-12 mx-auto">
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
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/about">About Us</Link>
  </li>
</ul>
          </div>
          <div>
  <h3 className="text-lg font-bold mb-4">Follow Us</h3>

  <ul className="space-y-2">
  <li>
    <a href="https://facebook.com" target="_blank" className="flex items-center">
      <i className="fab fa-facebook text-blue-500 bg-white rounded-full border text-xl mr-1"></i> facebook
    </a>
  </li>
  
</ul>

</div>
        </div>
        <hr className="my-8 border-gray-700" />
        <p className="text-sm text-center">
          &copy; 2023 Basani Primary School. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
