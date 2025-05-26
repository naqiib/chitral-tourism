import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white text-center p-4">
      &copy; {new Date().getFullYear()} Chitral Tourism. All rights reserved.
    </footer>
  );
};

export default Footer;
