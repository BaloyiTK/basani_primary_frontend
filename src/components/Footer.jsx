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
            <p>Chiawelo, Soweto RSA 1818</p>
            <p>Phone: 011 980 5590</p>
            <p>Email: info@example.com</p>
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
        <p className="text-sm text-center">&copy; 2023 Basani Promary School. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;



//GRAPHCMS_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjQ0MzUzMTYsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsOGRoN2dyeDFzbmswMXVlOHM4NDExcjYvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjFhZTE3ZjZjLTA3YzUtNGVkMi1iNGFjLWVjNDRjNThlNjhiOSIsImp0aSI6ImNsOG1wdDllNTN6MW8wMXVsN2x2aDltaTAifQ.f5gGc-7NhQdnSKF0LqmXnfMNAR1Bu_VxU-UsQLrat_m7mAyD-bEa15X1uP-oniey1yHTvKVeIDP50lcvcYan70FzJPZZe_lvQc-HB6RB7xWGoYV84YIV8pTwUloG1gQbzsjTP8eOTbpDu60C8exYLnK3hUjvTyTObMGr_jLE9gelSB6NWJlrWv-t0HSePEA1Aa6ReIF4zCz9dulrG0gpr1jicdsa4HGNPIk0NHxXRnBCdCPkgiOQJzG_jSOZ9LL1XiWA84_ncJSwqmrEYsazBzS6n66O4C-6NdzL9-20Hb473N5-DqmlHeWuuKNFayE7lPLuX9yrJQ4PrhbN5PaPTmBKvGfOmRECP3F8PoPKBLebrtfa-QJFgwbz-abMKJykESyFeKX7i2DadCWCEB8-OB6hBOwmAuqKdrgdFmg8tmpJC6DJAnIm7y_p55_ebpAib1T_6THFv-nlcwzoO3HG0KyrSesyohPd3Tfezwr1IKFVZWHQ_sfbUZZTBrdHZwZ8YI-pSkuY3OwcDTgAOivEshLI-TFd4FIc8SpQ9xqRqvZQqdob3cCdr50IQYD_stTTt5D8aovXZ7BSDEXFCuIy0mqKBj7MHpjoE7w8ACvt8Aniwoanhbnd7LBmzpg1cOs5C695BgfSyOU2a1ZELtv62I0HZyyH7U5uzH3EAJZTt_8'
