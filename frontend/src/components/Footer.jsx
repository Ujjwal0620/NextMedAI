import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-white via-slate-100 to-blue-50 border-t border-gray-200 mt-20 px-6 py-10 rounded-t-2xl shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">
            Medpolis Hospital
          </h2>
          <p className="text-sm text-gray-600 max-w-sm">
            Providing compassionate, expert care with cutting-edge medical technology to improve your well-being.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-blue-500 transition"><Facebook size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition"><Twitter size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition"><Instagram size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-6 md:flex-row text-sm">
          <div className="flex flex-col gap-2">
            <h4 className="text-gray-800 font-semibold mb-1">Explore</h4>
            <a href="#" className="text-gray-500 hover:text-blue-500">Home</a>
            <a href="#" className="text-gray-500 hover:text-blue-500">Our Team</a>
            <a href="#" className="text-gray-500 hover:text-blue-500">Labs</a>
            <a href="#" className="text-gray-500 hover:text-blue-500">Plans</a>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-gray-800 font-semibold mb-1">Services</h4>
            <a href="#" className="text-gray-500 hover:text-blue-500">Medical Consultations</a>
            <a href="#" className="text-gray-500 hover:text-blue-500">Educational Resources</a>
            <a href="#" className="text-gray-500 hover:text-blue-500">Psychological Support</a>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-gray-800 font-semibold mb-1">Contact</h4>
            <p className="text-gray-500">medpolis@example.com</p>
            <p className="text-gray-500">+1 (234) 567-8901</p>
            <p className="text-gray-500">123 Care Lane, Wellness City</p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Medpolis Hospital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
