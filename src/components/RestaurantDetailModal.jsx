// src/components/RestaurantDetailModal.js
import React, { useState } from 'react';
import { FaTimes, FaMapMarkerAlt, FaPhone, FaClock, FaUtensils, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const RestaurantDetailModal = ({ restaurant, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!restaurant) return null;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % restaurant.galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + restaurant.galleryImages.length) % restaurant.galleryImages.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-4 transition-opacity duration-300">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b bg-gray-50">
          <h3 className="text-2xl font-bold text-gray-800">{restaurant.name}</h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-red-600 transition-colors"
            aria-label="Close modal"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {/* Image Gallery */}
          {restaurant.galleryImages && restaurant.galleryImages.length > 0 && (
            <div className="mb-6">
              <div className="relative rounded-lg overflow-hidden shadow-md">
                <img 
                  src={restaurant.galleryImages[currentImageIndex]} 
                  alt={`${restaurant.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-72 md:h-96 object-cover " 
                />
                {restaurant.galleryImages.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 transition focus:outline-none"
                      aria-label="Previous image"
                    >
                      <FaChevronLeft size={18}/>
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 transition focus:outline-none"
                      aria-label="Next image"
                    >
                      <FaChevronRight size={18}/>
                    </button>
                  </>
                )}
              </div>
              {restaurant.galleryImages.length > 1 && (
                 <p className="text-center text-xs text-gray-500 mt-2">
                    Image {currentImageIndex + 1} of {restaurant.galleryImages.length}
                </p>
              )}
            </div>
          )}

          {/* Price Range */}
          <p className="text-xl font-semibold text-[#1D4ED8] mb-4">{restaurant.priceRange}</p>
          
          {/* Detailed Description */}
          {restaurant.detailedDescription && (
            <p className="text-gray-700 mb-6 leading-relaxed">{restaurant.detailedDescription}</p>
          )}

          {/* Specialties */}
          {restaurant.specialties && restaurant.specialties.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <FaUtensils className="mr-2 text-gray-600" /> Specialties:
              </h4>
              <div className="flex flex-wrap gap-2">
                {restaurant.specialties.map((specialty, index) => (
                  <span key={index} className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">{specialty}</span>
                ))}
              </div>
            </div>
          )}
          
          {/* Address, Contact, Hours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm text-gray-600">
            {restaurant.address && (
              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 text-gray-500 flex-shrink-0" size={18} />
                <span>{restaurant.address}</span>
              </div>
            )}
            {restaurant.contact && (
              <div className="flex items-start">
                <FaPhone className="mr-3 mt-1 text-gray-500 flex-shrink-0" size={16} />
                <a href={`tel:${restaurant.contact}`} className="hover:text-blue-600">{restaurant.contact}</a>
              </div>
            )}
            {restaurant.hours && (
              <div className="flex items-start md:col-span-2"> {/* Hours can span full width on medium screens if needed */}
                <FaClock className="mr-3 mt-1 text-gray-500 flex-shrink-0" size={16} />
                <span>{restaurant.hours}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-5 border-t text-right bg-gray-50">
            <button 
                onClick={onClose}
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
                Close
            </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailModal;