// src/components/VehicleDetailModal.js
import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const VehicleDetailModal = ({ vehicle, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!vehicle) return null;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % vehicle.galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + vehicle.galleryImages.length) % vehicle.galleryImages.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-2xl font-bold text-gray-800">{vehicle.name}</h3>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          {vehicle.galleryImages && vehicle.galleryImages.length > 0 && (
            <div className="mb-6">
              <div className="relative">
                <img 
                  src={vehicle.galleryImages[currentImageIndex]} 
                  alt={`${vehicle.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-72 object-cover rounded-md shadow" 
                />
                {vehicle.galleryImages.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
                    >
                      <FaChevronLeft />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
                    >
                      <FaChevronRight />
                    </button>
                  </>
                )}
              </div>
              {vehicle.galleryImages.length > 1 && (
                 <p className="text-center text-sm text-gray-500 mt-2">
                    Image {currentImageIndex + 1} of {vehicle.galleryImages.length}
                </p>
              )}
            </div>
          )}
          <p className="text-xl font-semibold text-[#1D4ED8] mb-4">{vehicle.pricePerDay}/day</p>
          <p className="text-gray-700 mb-4 leading-relaxed">{vehicle.description}</p>
          {vehicle.features && vehicle.features.length > 0 && (
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Features:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {vehicle.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="p-4 border-t text-right">
            <button 
                onClick={onClose}
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
                Close
            </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailModal;