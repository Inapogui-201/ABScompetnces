import React, { useState, useEffect } from 'react';
import IMAGE from '../assets/images/image.png';
import IMAGES from '../assets/images/horizon2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Training', path: '/training' },
    { label: 'Consulting', path: '/consulting' },
    { label: 'Coaching', path: '/coaching' },
    { label: 'Team Building', path: '/team-building' },
    { label: 'Contact', path: '/contact' },
  ];

  const socialIcons = [
    { icon: faFacebookF, link: '#', color: '#1877F2' },
    { icon: faTwitter, link: '#', color: '#1DA1F2' },
    { icon: faLinkedinIn, link: '#', color: '#0A66C2' },
    { icon: faInstagram, link: '#', color: '#E4405F' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-gradient-to-r from-red-50 to-white">
        <img src={IMAGES} alt="Brand" className="w-48 hover:opacity-90 transition-opacity" />
        <div className="flex space-x-6">
          <a href="mailto:contact@abscompetences.com" className="flex items-center text-sm space-x-2 text-gray-700 hover:text-red-600">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>contact@abscompetences.com</span>
          </a>
          <a href="tel:+212522305236" className="flex items-center text-sm space-x-2 text-gray-700 hover:text-red-600">
            <FontAwesomeIcon icon={faPhone} />
            <span>+212 522 30 52 36</span>
          </a>
        </div>
        <div className="flex space-x-4">
          {socialIcons.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-red-600 transition-all duration-300"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <img src={IMAGE} alt="Logo" className="h-10 md:h-14 transition-transform hover:scale-105 cursor-pointer" />
        {/* Mobile Menu Button */}
        <button
          className="p-2 text-black rounded-md md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} className="w-6 h-6" />
        </button>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.path}
              className={`font-medium transition-colors ${
                scrolled ? 'text-black hover:text-red-600' : 'text-white hover:text-red-300'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white/90 backdrop-blur-md z-40 transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full py-6 px-4">
          <button
            className="absolute top-4 right-4 p-2 rounded-md text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
          </button>

          {/* Navigation Links */}
          <nav className="mt-16 flex flex-col space-y-4">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.path}
                className="block text-lg font-medium text-black hover:text-red-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links and Contact Info */}
          <div className="mt-auto pt-6 border-t border-gray-200">
            <div className="flex justify-center space-x-4 mb-4">
              {socialIcons.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-red-600 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
            <div className="text-center text-sm space-y-2">
              <a href="mailto:contact@abscompetences.com" className="text-gray-700 hover:text-red-600 block">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                contact@abscompetences.com
              </a>
              <a href="tel:+212522305236" className="text-gray-700 hover:text-red-600 block">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                +212 522 30 52 36
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
