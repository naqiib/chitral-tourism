import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust scroll threshold if needed
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial state based on scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/destinations", name: "Destinations" },
    { path: "/services", name: "Services" },
    { path: "/contact", name: "Contact" }
  ];

  // Define base padding for links
  const linkPadding = "px-4 py-2"; // Common padding for all links

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled 
          ? 'backdrop-blur-md bg-[#1D4ED8]/80 py-3 shadow-lg' // Scrolled: blueish blur, slightly more opacity & padding
          : 'bg-transparent py-5' // Not Scrolled: transparent, more vertical padding
        }`
      }
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-white text-2xl font-bold uppercase tracking-widest hover:text-white/80 transition-colors duration-300"
          >
            Chitral
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-3"> {/* Reduced space-x slightly for dabbas */}
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              
              // Base classes for all desktop links
              let linkClasses = `${linkPadding} rounded-full text-sm uppercase font-medium transition-all duration-300 ease-in-out`;

              if (scrolled) {
                // SCROLLED STATE STYLING
                if (isActive) {
                  linkClasses += ' bg-white text-[#1D4ED8] shadow-md';
                } else {
                  linkClasses += ' text-white hover:bg-white/20';
                }
              } else {
                // NOT SCROLLED STATE STYLING (with blue dabbas for inactive)
                if (isActive) {
                  linkClasses += ' bg-white text-[#1D4ED8] shadow-md'; // Active link stands out
                } else {
                  // Inactive links get the blue dabba
                  linkClasses += ' bg-[#1D4ED8] text-white hover:bg-blue-700 shadow-sm'; // Using Tailwind's blue-700 for hover on the dabba
                }
              }

              return (
                <Link key={index} to={item.path} className={linkClasses}>
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`block h-0.5 w-6 bg-white transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {/* Mobile menu background will implicitly follow the main nav's background when scrolled */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${isOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
            ${scrolled && isOpen ? 'bg-transparent' : ''} // Keep mobile menu transparent if nav is transparent
          `}
        >
          {/* Add a conditional background for mobile when navbar is transparent but menu is open */}
          <div className={`
            pt-4 pb-2 space-y-2 mt-2 rounded-md
            ${!scrolled && isOpen ? 'bg-[#1D4ED8]/90' : ''} 
            ${scrolled && isOpen ? 'bg-transparent' : ''} 
          `}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`block px-4 py-3 rounded text-white text-sm uppercase transition duration-300 ${
                  location.pathname === item.path ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'
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
