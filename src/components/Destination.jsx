import React from 'react';
import { FaMapMarkerAlt, FaStar, FaHiking, FaSnowflake, FaTree, FaWater } from 'react-icons/fa';
import mountainOverlay from '../assets/images/mountain.png'; // Adjust path as needed

const DestinationsPage = () => {
  const destinations = [
    {
      id: 1,
      name: "Kalash Valleys",
      image: "https://source.unsplash.com/800x600/?kalash+valley",
      description: "Explore the unique culture of the Kalash people in these picturesque valleys known for their vibrant festivals and ancient traditions.",
      highlights: ["Cultural Experience", "Festivals", "Scenic Views"],
      rating: 4.8,
      season: "April to October",
      icon: <FaTree className="text-green-500" />
    },
    {
      id: 2,
      name: "Trich Mir",
      image: "https://source.unsplash.com/800x600/?tirich+mir",
      description: "Pakistan's highest mountain peak outside the Himalaya-Karakoram range, offering challenging treks and breathtaking views.",
      highlights: ["Trekking", "Mountaineering", "Adventure"],
      rating: 4.9,
      season: "June to September",
      icon: <FaSnowflake className="text-blue-300" />
    },
    {
      id: 3,
      name: "Shandur Pass",
      image: "https://source.unsplash.com/800x600/?shandur+pass",
      description: "Famous for the annual Shandur Polo Festival and its stunning high-altitude landscapes at 3,700 meters.",
      highlights: ["Polo Festival", "High Altitude", "Lakes"],
      rating: 4.7,
      season: "July to August",
      icon: <FaHiking className="text-brown-500" />
    },
    {
      id: 4,
      name: "Chitral Gol National Park",
      image: "https://source.unsplash.com/800x600/?national+park+pakistan",
      description: "Home to diverse wildlife including the rare snow leopard and markhor, with beautiful alpine meadows and forests.",
      highlights: ["Wildlife", "Nature", "Hiking"],
      rating: 4.6,
      season: "May to October",
      icon: <FaTree className="text-green-600" />
    },
    {
      id: 5,
      name: "Garama Chashma",
      image: "https://source.unsplash.com/800x600/?hot+springs",
      description: "Natural hot springs with therapeutic properties, surrounded by stunning mountain scenery.",
      highlights: ["Hot Springs", "Relaxation", "Scenic"],
      rating: 4.5,
      season: "Year-round",
      icon: <FaWater className="text-blue-400" />
    },
    {
      id: 6,
      name: "Bumburet Valley",
      image: "https://source.unsplash.com/800x600/?bumburet+valley",
      description: "The largest and most accessible of the Kalash valleys, known for its lush landscapes and cultural richness.",
      highlights: ["Cultural Villages", "Photography", "Local Crafts"],
      rating: 4.7,
      season: "April to November",
      icon: <FaMapMarkerAlt className="text-red-400" />
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#1D4ED8] font-serif">
          Explore Chitral's Destinations
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Discover the breathtaking landscapes, rich culture, and adventure opportunities in Chitral's most spectacular locations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="relative">
                <div className="w-full h-56 overflow-hidden relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <img
                    src={mountainOverlay}
                    alt="Mountain overlay"
                    className="absolute bottom-0 left-0 w-full h-auto opacity-80"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full flex items-center">
                  <FaStar className="text-yellow-500 mr-1" />
                  <span className="font-medium">{destination.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start mb-3">
                  <div className="text-2xl mr-3">{destination.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">{destination.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{destination.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Best Season:</h4>
                  <div className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full inline-block text-sm">
                    {destination.season}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="mt-6 w-full bg-[#1D4ED8] text-white py-2 px-4 rounded-lg hover:bg-[#1a3fb7] transition duration-300">
                  Explore Packages
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Customize Your Chitral Adventure</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Can't find exactly what you're looking for? Contact us to create a personalized itinerary tailored to your interests and schedule.
          </p>
          <button className="bg-[#1D4ED8] text-white py-3 px-8 rounded-lg font-medium hover:bg-[#1a3fb7] transition duration-300">
            Plan My Trip
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsPage;