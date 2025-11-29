
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from '../../assets/logo.png'


const Footer = () => {
  return (
    <footer className="bg-[#03213F] text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold tracking-wider flex justify-center items-center ">
           <img src={logo} className="w-5 h-5 mr-3" alt="" /> NextApp
          </h1>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            
            <a href="#" className="hover:text-gray-300">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>

        
        <div className="border-t border-gray-600 my-4"></div>

      
        <p className="text-center text-sm">
          Copyright © 2025 - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;



