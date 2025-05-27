import React from 'react';

import { FaBusAlt, FaUtensils, FaHotel, FaMapMarkedAlt } from 'react-icons/fa';

// Sample image URLs (replace with your own or import locally)
const services = [
  {
    icon: <FaBusAlt size={28} className="text-blue-600" />,
    title: 'Transport Services',
    description: 'Comfortable travel with private cars and tourist buses around Chitral.',
    details: ['Private Cars', 'Tourist Buses', 'Pick & Drop Services'],
    image: 'https://source.unsplash.com/400x250/?bus,travel' // sample
  },
  {
    icon: <FaUtensils size={28} className="text-blue-600" />,
    title: 'Restaurant Services',
    description: 'Enjoy delicious Chitrali cuisine at top-rated restaurants.',
    details: ['Trich Mir View Restaurant', 'Green Restaurant', 'Local Cuisine'],
    image: 'https://source.unsplash.com/400x250/?restaurant,food'
  },
  {
    icon: <FaHotel size={28} className="text-blue-600" />,
    title: 'Hotel Stay',
    description: 'Stay in premium or affordable hotels with top-class service.',
    details: ['Hindukush Heights', 'PTDC Motel', 'Guest Houses'],
    image: 'https://source.unsplash.com/400x250/?hotel,room'
  },
  {
    icon: <FaMapMarkedAlt size={28} className="text-blue-600" />,
    title: 'Tour Guide',
    description: 'Get guided tours from friendly locals who know Chitral best.',
    details: ['Cultural Sites', 'Festivals', 'Local Treks'],
    image: 'https://source.unsplash.com/400x250/?guide,mountains'
  },
];

const ServicesSection = () => {
  return (
    <div className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12 text-[#1D4ED8]">Services We Offer</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 text-left"
          >
            <img src={service.image} alt={service.title} className="w-full h-40 object-cover" />
            <div className="p-5">
              <div className="mb-2 flex items-center gap-2">{service.icon}<span className="font-semibold">{service.title}</span></div>
              <p className="text-sm text-gray-600 mb-2">{service.description}</p>
              <ul className="list-disc pl-4 text-sm text-gray-500">
                {service.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;