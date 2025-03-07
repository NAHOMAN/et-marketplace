import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-12">
      <p>&copy; 2025 ET Marketplace. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300"
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
