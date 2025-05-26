import React, { useEffect, useState } from 'react';

// Import images from src/assets/images
import img1 from '../assets/images/chitral1.jpg';
import img2 from '../assets/images/chitral2.jpg';
import img3 from '../assets/images/chitral3.jpg';

const images = [img1, img2, img3];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      Welcome to Chitral
    </div>
  );
};

export default Hero;
