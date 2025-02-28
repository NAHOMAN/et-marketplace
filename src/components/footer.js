import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} ET Marketplace. All rights reserved.</p>
      <div className="mt-2 flex justify-center space-x-4">
        <Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
        <Link to="/terms-of-service" className="hover:text-gray-300">Terms of Service</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
      </div>
    </footer>
  );
};

export default Footer;
