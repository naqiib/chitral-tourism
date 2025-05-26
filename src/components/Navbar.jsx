import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Brand/Logo */}
          <Link 
            to="/" 
            className="text-white text-2xl font-bold uppercase tracking-wider hover:text-white/80 transition-colors"
          >
            Chitral
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {[
              { path: "/", name: "Home" },
              { path: "/about", name: "About" },
              { path: "/destinations", name: "Destinations" },
              { path: "/services", name: "Services" },
              { path: "/contact", name: "Contact" }
            ].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`text-white px-3 py-2 uppercase text-sm font-medium hover:text-white/80 transition-colors ${
                  index === 0 ? 'text-white/90 font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col space-y-1.5">
              <span className={`h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>
          <div className="pt-4 pb-2 space-y-2">
            {[
              { path: "/", name: "Home" },
              { path: "/about", name: "About" },
              { path: "/destinations", name: "Destinations" },
              { path: "/services", name: "Services" },
              { path: "/contact", name: "Contact" }
            ].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`block px-3 py-2 text-white uppercase text-sm font-medium hover:bg-white/10 rounded transition-colors ${
                  index === 0 ? 'bg-white/20' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;