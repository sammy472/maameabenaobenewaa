import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHome, FaInfoCircle, FaEnvelope, FaShieldAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Description */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">ADESUA SESA</h2>
          <p className="mt-2 text-gray-400">
            Empowering communities through technology and innovation.
          </p>
        </div>

        {/* Quick Links (Icons Only) */}
        <div>
          <h3 className="text-xl font-semibold text-amber-300">Quick Links</h3>
          <div className="mt-3 flex space-x-6 text-gray-400">
            <a href="/" className="hover:text-yellow-400">
              <FaHome size={24} />
            </a>
            <a href="/about" className="hover:text-yellow-400">
              <FaInfoCircle size={24} />
            </a>
            <a href="/contact" className="hover:text-yellow-400">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-md font-semibold text-amber-400">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} className="text-blue-600 hover:text-blue-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="text-blue-400 hover:text-blue-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="text-pink-500 hover:text-pink-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="text-blue-700 hover:text-blue-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} ADESUA SESA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
