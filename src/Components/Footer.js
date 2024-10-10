import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-purple-500 text-white py-8">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" className="text-xl">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="text-xl">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="text-xl">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="text-xl">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="text-center text-sm">
        © 2024 UniConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
