import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const PlaceCard = ({ image, title, location, elevation, description }) => {
  const tiltRef = useRef();

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 10,
        speed: 500,
        perspective: 1800,
        glare: true,
        'max-glare': 0.1,
        scale: 1.03,
        reset: true
      });
    }

    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div 
      ref={tiltRef}
      className="relative w-full aspect-[9/12] rounded-[1.75rem] overflow-hidden bg-cover bg-center shadow-lg transition-all duration-300 ease-out hover:shadow-xl cursor-pointer"
      style={{ backgroundImage: `url(${image})` }}
      data-tilt
    >
      {/* Inner border overlay */}
      <div 
        className="absolute inset-[14px] rounded-[1.375rem] pointer-events-none z-10 border border-white/20"
        data-tilt-transform-element
      ></div>

      {/* Content area */}
      <div 
        className="absolute inset-[14px] rounded-[1.375rem] overflow-hidden flex flex-col justify-end z-5 p-4 sm:p-5 lg:p-7"
        data-tilt-transform-element
      >
        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[75%] bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent pointer-events-none z-15"></div>

        {/* Elevation badge */}
        {elevation && (
          <div 
            className="absolute top-4 right-4 bg-white/90 rounded-full px-4 py-2 text-[#1D4ED8] text-xs font-semibold tracking-tight flex items-center gap-2 shadow-md z-25"
            data-tilt-transform-element
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2L6.5 12h11L12 2zm5.5 11l-5.5 9-5.5-9h11z"/>
            </svg>
            {elevation}
          </div>
        )}

        {/* Text block */}
        <div className="relative z-20 text-center text-white" data-tilt-transform-element>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 tracking-tight">
            {title}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg font-light text-gray-200">
            {location}
          </p>
        </div>

        {/* Description */}
        <p className="text-white text-sm sm:text-base mb-4 z-20 relative" data-tilt-transform-element>
          {description}
        </p>

        {/* Button */}
        <button 
          className="relative z-20 bg-[#1D4ED8] hover:bg-[#1a43b8] text-white font-semibold py-3 px-7 rounded-full text-center min-w-[190px] max-w-[85%] mx-auto transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 tracking-tight mt-4 shadow-md"
          data-tilt-transform-element
        >
          Explore More
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5l7 7-7 7"></path>
            <path d="M5 12h14"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PlaceCard;