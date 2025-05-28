import React from 'react';
// FaCar is removed from here as its primary use in this section's title is moved
import { FaUtensils, FaStar, FaStarHalfAlt, FaMapMarkedAlt, FaHiking } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* The "Our Comprehensive Services" h2 has been removed from this component */}
        
        {/* Transport Services Section - The title and icon are removed from here */}
        <div className="mb-12"> {/* Adjusted margin as the direct title is gone */}
          {/* 
            The following block is MOVED to App.js (or the parent component):
            <div className="flex items-center mb-8">
              <FaCar className="text-blue-600 text-3xl mr-4" />
              <h3 className="text-2xl font-bold text-gray-800">Transport Services</h3>
            </div> 
          */}
          
          {/* Grid for transport cards starts directly */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://source.unsplash.com/800x500/?luxury+car,mountains" 
                alt="Private Cars" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 text-gray-800">Private Vehicles</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Toyota Corolla (4 passengers) - $60/day</li>
                  <li>Toyota Prado (6 passengers) - $90/day</li>
                  <li>Hiace Van (12 passengers) - $120/day</li>
                  <li>All vehicles with AC and experienced drivers</li>
                  <li>24/7 availability with GPS tracking</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://source.unsplash.com/800x500/?tourist+bus,mountains" 
                alt="Tourist Buses" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 text-gray-800">Tourist Buses</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>25-seater luxury coach - $200/day</li>
                  <li>40-seater deluxe bus - $300/day</li>
                  <li>All buses with AC, reclining seats</li>
                  <li>On-board entertainment systems</li>
                  <li>Professional tour guides available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Restaurant Services Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <FaUtensils className="text-blue-600 text-3xl mr-4" />
            <h3 className="text-2xl font-bold text-gray-800">Dining Options</h3>
          </div>
          {/* ... rest of dining options content (3 cards) ... */}
           <div className="grid md:grid-cols-3 gap-6">
            {/* Premium Restaurant */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="https://source.unsplash.com/800x500/?luxury+restaurant,mountains" 
                  alt="Premium Restaurant" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded flex items-center">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 text-gray-800">Trich Mir View Restaurant</h4>
                <p className="text-gray-600 mb-3">5-star dining with panoramic mountain views</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><FaStar className="text-yellow-500 mr-1" /> Fine Chitrali cuisine</li>
                  <li className="flex items-center"><FaStar className="text-yellow-500 mr-1" /> International menu options</li>
                  <li className="flex items-center"><FaStar className="text-yellow-500 mr-1" /> $15-$30 per person</li>
                </ul>
              </div>
            </div>

            {/* Medium Restaurant */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="https://source.unsplash.com/800x500/?restaurant,pakistan" 
                  alt="Medium Restaurant" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded flex items-center">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 text-gray-800">Green Restaurant</h4>
                <p className="text-gray-600 mb-3">4-star quality with local organic ingredients</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><FaStar className="text-yellow-500 mr-1" /> Traditional Chitrali dishes</li>
                  <li className="flex items-center"><FaStar className="text-yellow-500 mr-1" /> Fresh mountain trout special</li>
                  <li className="flex items-center"><FaStar className="text-yellow-500 mr-1" /> $8-$15 per person</li>
                </ul>
              </div>
            </div>

            {/* Normal Restaurant */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="https://source.unsplash.com/800x500/?local+restaurant,pakistan" 
                  alt="Normal Restaurant" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded flex items-center">
                  <FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 text-gray-800">Chitrali Dastarkhwan</h4>
                <p className="text-gray-600 mb-3">Authentic local dining experience</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><FaStar className="text-yellow-500 mr-1" /> Home-style Chitrali meals</li>
                  <li className="flex items-center"><FaStar className="text-yellow-500 mr-1" /> Famous for Chapli Kebabs</li>
                  <li className="flex items-center"><FaStar className="text-yellow-500 mr-1" /> $3-$8 per person</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Guide Services Section */}
        <div>
          <div className="flex items-center mb-8">
            <FaMapMarkedAlt className="text-blue-600 text-3xl mr-4" />
            <h3 className="text-2xl font-bold text-gray-800">Guide Services</h3>
          </div>
          {/* ... rest of guide services content (2 cards) ... */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://source.unsplash.com/800x500/?tour+guide,mountains" 
                alt="Cultural Guide" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 text-gray-800">Cultural Guides</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Kalash Valley experts - $25/day</li>
                  <li>Historical site specialists</li>
                  <li>Festival guides (Chilam Joshi, Uchal)</li>
                  <li>Multilingual options available</li>
                  <li>Photography guidance included</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://source.unsplash.com/800x500/?hiking,guide" 
                alt="Trekking Guide" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 text-gray-800">Trekking Guides</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Trich Mir base camp experts - $40/day</li>
                  <li>Certified mountain guides</li>
                  <li>Equipment rental available</li>
                  <li>Custom trekking itineraries</li>
                  <li>First aid certified</li>
                </ul>
                <div className="mt-4 flex items-center">
                  <FaHiking className="text-blue-600 mr-2" />
                  <span className="text-sm text-gray-500">All guides licensed by Pakistan Tourism Department</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;