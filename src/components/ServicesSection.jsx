// src/components/ServicesSection.js
import React, { useState } from 'react';
import { FaCar, FaUtensils, FaStar, FaMapMarkedAlt, FaHiking, FaBed, FaHotel, FaPhone } from 'react-icons/fa';

// CSS for Transport Cards
import '../CardStyles.css'; 

// Modals
import VehicleDetailModal from './VehicleDetailModal';
import RestaurantDetailModal from './RestaurantDetailModal'; 

// --- Local Image Imports ---
import carImageSrc from '../assets/images/car.jpg'; 
import busImageSrc from '../assets/images/buses.webp';
import dubaiCafeImg from '../assets/images/dubai.jpg'; 
import fokkerRestaurantImg from '../assets/images/Fokker.webp';
import bechaanRestaurantImg from '../assets/images/bechaan.jpg';
import trekimgnp from '../assets/images/trek1.jpg';
import trekimgice from '../assets/images/trek2.jpg';
import pamirInnImg from '../assets/images/hotels/pamir.jpg';
import ayunFortInnImg from '../assets/images/hotels/ayunfort.jpg';
import hindukushHeightsImg from '../assets/images/hotels/hindukush.jpg';
import innjigaanHotelImg from '../assets/images/hotels/innjigaan.jpg'; 


// --- Data Definitions ---
const transportOptions = [
  {
    id: 'privatecar', name: 'Private Car Service', pricePerDay: '$75', initialImage: carImageSrc, hoverImage: carImageSrc,
    description: 'Experience the ultimate convenience and personalized travel with our Private Car Service. Ideal for solo adventurers, couples, or small families, our fleet of modern, well-maintained sedans and compact SUVs ensures a comfortable and stylish journey through the breathtaking landscapes of Chitral. Whether you need an airport transfer, a dedicated car for daily excursions, or transport to remote valleys, our professional chauffeurs are at your service. Enjoy the freedom to explore at your own pace, with the reliability and comfort you deserve. All vehicles are equipped with modern amenities and adhere to strict safety standards.',
    features: ['Comfortably seats 2-4 passengers with luggage.','Choice of sedans (e.g., Toyota Corolla) or compact SUVs (e.g., Honda BR-V).','Fully air-conditioned for all-weather comfort.','Professional, courteous, and knowledgeable local driver.','GPS navigation for efficient route planning.','Flexible itineraries: customize your daily travel plans.','Ideal for airport pickups/drop-offs, city tours, and inter-village travel.','Bottled water provided for passengers.','24/7 customer support and roadside assistance.','Regularly sanitized and maintained for hygiene and safety.','Transparent pricing with no hidden fees.'],
    galleryImages: [ carImageSrc, carImageSrc, carImageSrc ]
  },
  {
    id: 'touristbus', name: 'Group Tourist Bus', pricePerDay: '$250', initialImage: busImageSrc, hoverImage: busImageSrc,
    description: 'Our Group Tourist Bus service is the perfect solution for larger families, tour groups, and corporate delegations looking to explore Chitral together. We offer a range of bus sizes, from comfortable coasters to larger coaches, all designed for passenger comfort and safety on mountain roads. Enjoy panoramic views from large windows, relax in comfortable seating, and let our experienced drivers navigate the routes. Our buses are well-suited for longer journeys, ensuring that your group travels in unison, making for a more cohesive and enjoyable touring experience. We can also accommodate requests for on-board guides to enrich your journey.',
    features: ['Variety of bus sizes: 20-seater Coasters, 30-seater, and 40-seater coaches available.','Comfortable, spacious seating with ample legroom.','Powerful air-conditioning systems for a pleasant environment.','Experienced, licensed, and professional bus drivers familiar with local routes.','Sufficient overhead and undercarriage luggage storage.','Large windows for excellent sightseeing opportunities.','PA system for announcements and communication (in larger coaches).','Ideal for group excursions, multi-day tours, and event transportation.','Regular maintenance and safety checks.','Option to include a local tour guide (additional charges may apply).','Cost-effective solution for group travel.'],
    galleryImages: [ busImageSrc, busImageSrc, busImageSrc ]
  },
];

const restaurantData = [
  {
    id: 'dubaicafe', img: dubaiCafeImg, name: "Dubai Cafe Chitral", description: "A popular spot for diverse local & continental dishes.", address: "Shahi Qilla Road, Chitral Town", priceRange: "$5 - $18", contact: "+92 123 4567890",
    detailedDescription: "Dubai Cafe is a well-known eatery in the heart of Chitral, offering a vibrant ambiance perfect for families and groups. Their extensive menu caters to various tastes, featuring authentic Chitrali dishes like Ghalmandi and Shrosh, as well as popular Pakistani cuisine, continental items such as pasta and steaks, and a selection of fast food favorites. They are also known for their fresh juices and local tea.", specialties: ["Chitrali Cuisine", "Continental Dishes", "Fast Food", "Fresh Juices"], hours: "10 AM - 11 PM", galleryImages: [dubaiCafeImg, dubaiCafeImg, dubaiCafeImg]
  },
  {
    id: 'fokkerrestaurant', img: fokkerRestaurantImg, name: "Fokker Restaurant", description: "Unique themed dining with robust BBQ and Pakistani dishes.", address: "Airport Road, Chitral", priceRange: "$10 - $25", contact: "+92 234 5678901",
    detailedDescription: "Fokker Restaurant, often nostalgically named, provides a unique dining experience in Chitral. While its theme might vary, it typically offers a comfortable setting with a menu that might include robust BBQ platters, traditional Karahi, and a selection of well-prepared Pakistani dishes. It's a place where locals and tourists alike can enjoy a hearty meal. Some may offer views overlooking scenic parts of the valley.", specialties: ["BBQ Platters", "Pakistani Karahi", "Local Breads"], hours: "12 PM - 10 PM", galleryImages: [fokkerRestaurantImg, fokkerRestaurantImg, fokkerRestaurantImg]
  },
  {
    id: 'bechaanrestaurant', img: bechaanRestaurantImg, name: "Bechaan Restaurant", description: "Authentic home-style Chitrali food, a true taste of the region.", address: "Goldur, Upper Chitral", priceRange: "$4 - $12", contact: "+92 345 6789012",
    detailedDescription: "Bechaan Restaurant offers an unpretentious and authentic dive into Chitrali home-style cooking. It's the place to go if you want to experience traditional flavors prepared with care. Their menu often features seasonal specialties and dishes that have been passed down through generations, such as various types of 'Sajji', 'Kalli (local spinach)', and hearty meat stews. The ambiance is simple, focusing on the quality and authenticity of the food.", specialties: ["Authentic Chitrali Home-Style Cooking", "Seasonal Dishes"], hours: "11 AM - 9 PM", galleryImages: [bechaanRestaurantImg, bechaanRestaurantImg, bechaanRestaurantImg]
  }
];

const guideServicesData = [
  {
    id: 'cultural', type: "Cultural & Historical Guides", image: trekimgnp, description: "Immerse yourself in Chitral's rich culture and history with our expert local guides, exploring ancient valleys, vibrant festivals, and historical landmarks.", specialties: ["Kalash Valley Immersion","Chitral Fort & Shahi Masjid Exploration","Festival Guidance (Chilam Joshi, Uchal)","Local Traditions & Daily Life Insights"],
    idealFor: "History buffs, cultural enthusiasts, photographers.", priceIndicator: "$25 - $40 / day"
  },
  {
    id: 'adventure', type: "Adventure & Trekking Guides", image: trekimgice, description: "Embark on unforgettable adventures into Chitral's pristine wilderness with our certified and experienced mountain guides, ensuring safety and enhancing your trek.", specialties: ["Terich Mir Base Camp Treks","Shandur Pass & Polo Experience","Broghil Valley & Karomber Lake Treks","Alpine Lake Discovery Hikes"],
    idealFor: "Trekkers, mountaineers, nature lovers.", priceIndicator: "$40 - $70 / day"
  }
];

const hotelData = [
  {
    id: 'pamirriverside', name: "Pamir Riverside Inn", image: pamirInnImg, rating: "4.5", reviewCount: "12 reviews", tagline: "#1 of 2 inns in Chitral", address: "Noghor Gardens, adj. Mahtar's Fort, Chitral",
    description: "Nestled by the river, Pamir Riverside Inn offers serene views and comfortable lodging, ideal for a retreat near historical landmarks. Enjoy peaceful mornings and easy access to local culture.",
    features: ["Riverside Location", "Scenic Views", "Comfortable Rooms", "Free WiFi", "Garden Area"],
    priceIndicator: "From $60", contact: "(0943) XXXX-XXX" 
  },
  {
    id: 'ayunfortinn', name: "Ayun Fort Inn", image: ayunFortInnImg, rating: "4.5", reviewCount: "29 reviews", tagline: "#1 of 5 lodges in Chitral", address: "Kalash Valley Rd, Ayun Town, Chitral",
    description: "Located in Ayun Town at the gateway to the Kalash Valleys, Ayun Fort Inn provides a unique blend of traditional architecture, modern comfort, and warm hospitality.",
    features: ["Gateway to Kalash", "Traditional Architecture", "Courtyard Garden", "Local Cuisine Restaurant"],
    priceIndicator: "From $70", contact: "(0943) YYYY-YYY" 
  },
  {
    id: 'hindukushheights', name: "Hindukush Heights", image: hindukushHeightsImg, rating: "5.0", reviewCount: "Guest Rated", starCategory: "3-star hotel", address: "Gangoreen, Mastuj Rd, Chitral", contact: "(0943) 413151",
    description: "A renowned 3-star hotel offering exceptional service, stunning panoramic mountain views, and a range of amenities for a luxurious and memorable stay in Chitral.",
    features: ["Panoramic Mountain Views", "Fine Dining", "Well-appointed Rooms", "Excellent Service"],
    priceIndicator: "From $120"
  },
  {
    id: 'hotelinjigaan', name: "Hotel Innjigaan", image: innjigaanHotelImg, rating: "4.2", reviewCount: "Guest Rated", tagline: "Scenic Valley Location", address: "Lotkuh Valley, Garam Chashma, Chitral",
    description: "Situated in the picturesque Lotkuh Valley near Garam Chashma, Hotel Innjigaan offers a peaceful escape with easy access to natural hot springs and beautiful trekking trails.",
    features: ["Near Hot Springs", "Scenic Valley Location", "Comfortable Rooms", "Trekking Assistance"],
    priceIndicator: "From $40", contact: "(0943) ZZZZ-ZZZ" 
  }
];


const ServicesSection = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isRestaurantModalOpen, setIsRestaurantModalOpen] = useState(false);

  const handleOpenVehicleModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsVehicleModalOpen(true);
  };
  const handleCloseVehicleModal = () => {
    setIsVehicleModalOpen(false);
    setSelectedVehicle(null);
  };
  const handleOpenRestaurantModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsRestaurantModalOpen(true);
  };
  const handleCloseRestaurantModal = () => {
    setIsRestaurantModalOpen(false);
    setSelectedRestaurant(null);
  };

  // Separator Component
  const Separator = () => (
    <div className="my-16 md:my-20"> 
      <hr className="border-t-2 border-blue-600 w-1/2 mx-auto" /> {/* Blue separator line */}
    </div>
  );

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#1D4ED8] font-serif">
          All About Our Services
        </h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          We are dedicated to providing you with a comprehensive range of services to ensure your visit to Chitral is comfortable, enjoyable, and memorable. Explore our offerings below to plan your perfect trip.
        </p>
        
        {/* Transport Services Section */}
        <div className="mb-0"> 
          <div className="flex items-center mb-4">
            <FaCar className="text-blue-600 text-3xl mr-4" />
            <h3 className="text-2xl font-bold text-gray-800">Transport Options</h3>
          </div>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Travel with ease and comfort. Select a vehicle below to see more details and book your ride. Our fleet is regularly maintained to ensure safety and reliability for your journeys across Chitral's diverse terrain.
          </p>
          <div className="flex flex-wrap justify-center items-start gap-10 md:gap-16">
            {transportOptions.map((vehicle) => (
              <div key={vehicle.id} className="card">
                <div className="container-image"> <img src={vehicle.initialImage} alt={vehicle.name} className="image-circle" /> </div>
                <div className="content">
                  <div className="detail"> <span>{vehicle.name}</span> <span className="price">{vehicle.pricePerDay}/day</span> <button onClick={() => handleOpenVehicleModal(vehicle)}>More Details</button> </div>
                  <div className="product-image"> <div className="box-image"> <img src={vehicle.hoverImage} alt={`${vehicle.name} view`} className="img-product" /> </div> </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Restaurant Services Section */}
        <div className="mb-0"> 
          <div className="flex items-center mb-4"> <FaUtensils className="text-blue-600 text-3xl mr-4" /> <h3 className="text-2xl font-bold text-gray-800">Culinary Experiences</h3> </div>
          <p className="text-gray-600 mb-10 leading-relaxed"> Savor the unique flavors of Chitral, from fine dining with breathtaking views to authentic local eateries. Discover culinary delights that will tantalize your taste buds. Click on a restaurant for more information. </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transform-style-preserve-3d perspective-800 container">
            {restaurantData.map((item) => (
              <div key={item.id} onClick={() => handleOpenRestaurantModal(item)} className="box cursor-pointer relative w-full h-80 bg-black transition-all duration-500 transform-style-preserve-3d overflow-hidden shadow-lg hover:z-10 hover:scale-105 hover:shadow-2xl group" >
                <div className="imgBx absolute inset-0 w-full h-full before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black/80 via-black/40 to-transparent before:opacity-60 before:transition-opacity before:duration-500 group-hover:before:opacity-90">
                  <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="content-overlay absolute inset-0 z-10 flex flex-col justify-end p-5 box-border text-shadow-sm">
                  <div>
                    <h4 className="text-white uppercase mb-1 text-xl font-bold transition-all duration-500 transform translate-y-16 group-hover:translate-y-0 delay-100">{item.name}</h4>
                    <p className="text-gray-200 text-sm mb-2 transition-all duration-500 transform translate-y-16 group-hover:translate-y-0 delay-150 line-clamp-2">{item.description}</p>
                    <p className="text-yellow-400 text-sm font-medium transition-all duration-500 transform translate-y-16 group-hover:translate-y-0 delay-200">{item.priceRange}</p>
                    <button className="mt-3 text-xs bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300 transform translate-y-16 group-hover:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={(e) => { e.stopPropagation(); handleOpenRestaurantModal(item); }}>
                        More Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Guide Services Section */}
        <div className="mb-0"> 
          <div className="flex items-center mb-4"> <FaMapMarkedAlt className="text-blue-600 text-3xl mr-4" /> <h3 className="text-2xl font-bold text-gray-800">Expert Local Guides</h3> </div>
          <p className="text-gray-600 mb-10 leading-relaxed"> Enhance your Chitral adventure with our passionate and knowledgeable local guides. Whether you seek cultural immersion, historical insights, or thrilling treks, our guides are dedicated to making your journey unforgettable and safe. </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {guideServicesData.map((guide) => (
              <div key={guide.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                <div className="relative h-64 w-full overflow-hidden">
                  <img src={guide.image} alt={guide.type} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <h4 className="absolute bottom-4 left-4 text-2xl font-semibold text-white tracking-tight text-shadow-md">{guide.type}</h4>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">{guide.description}</p>
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-800 mb-2">Specialties Include:</h5>
                    <ul className="space-y-1">
                      {guide.specialties.slice(0, 3).map((specialty, index) => ( <li key={index} className="flex items-start text-xs text-gray-600"> <FaStar className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" size={12}/> <span>{specialty}</span> </li> ))}
                       {guide.specialties.length > 3 && <li className="text-xs text-gray-500 italic ml-5">...and more!</li>}
                    </ul>
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-200">
                     <p className="text-sm text-gray-700 mb-1"><strong className="font-medium">Ideal for:</strong> {guide.idealFor}</p>
                     <div className="flex justify-between items-center"> <p className="text-sm text-gray-500">All guides are licensed & experienced.</p> <p className="text-lg font-bold text-blue-600">{guide.priceIndicator}</p> </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Accommodation / Hotel Section */}
        <div> 
          <div className="flex items-center mb-4">
            <FaHotel className="text-blue-600 text-3xl mr-4" />
            <h3 className="text-2xl font-bold text-gray-800">Comfortable Stays in Chitral</h3>
          </div>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Find your perfect stay in Chitral, from charming inns steeped in history to comfortable hotels with stunning mountain views. We partner with a selection of quality accommodations to suit various preferences and budgets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {hotelData.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
              >
                <div className="relative h-60 md:h-64 w-full overflow-hidden">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  {hotel.rating && (
                     <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs px-2 py-1 rounded-md shadow flex items-center">
                        {hotel.rating} <FaStar size={10} className="ml-1" />
                     </div>
                  )}
                  <h4 className="absolute bottom-4 left-4 text-xl lg:text-2xl font-semibold text-white tracking-tight text-shadow-md line-clamp-2">{hotel.name}</h4>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  {hotel.tagline && <p className="text-xs text-blue-600 font-medium uppercase mb-2">{hotel.tagline}</p>}
                  <p className="text-gray-700 text-sm mb-3 leading-relaxed line-clamp-3 flex-grow">{hotel.description}</p>
                  
                  {hotel.features && hotel.features.length > 0 && (
                    <div className="mb-3">
                      <h5 className="text-xs font-semibold text-gray-700 mb-1.5">Key Features:</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {hotel.features.slice(0, 4).map((feature, index) => ( 
                          <span key={index} className="bg-gray-100 text-gray-700 text-[10px] px-2 py-0.5 rounded-full">{feature}</span>
                        ))}
                        {hotel.features.length > 4 && <span className="text-[10px] text-gray-500 italic">+ more</span>}
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-auto pt-3 border-t border-gray-200">
                     {hotel.address && (
                        <div className="text-xs text-gray-500 mb-2 flex items-start">
                            <FaMapMarkedAlt size={14} className="mr-2 mt-0.5 flex-shrink-0 text-gray-400"/> 
                            <span className="line-clamp-1">{hotel.address}</span>
                        </div>
                     )}
                     <div className="flex justify-between items-center">
                        {hotel.contact ? 
                            <a href={`tel:${hotel.contact.replace(/\D/g,'')}`} className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline flex items-center">
                                <FaPhone size={12} className="mr-1.5" /> {hotel.contact}
                            </a>
                            : <span className="text-sm text-gray-400">Contact for details</span>
                        }
                        {hotel.priceIndicator && <p className="text-lg font-bold text-green-600">{hotel.priceIndicator}</p>}
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      {isVehicleModalOpen && <VehicleDetailModal vehicle={selectedVehicle} onClose={handleCloseVehicleModal} />}
      {isRestaurantModalOpen && <RestaurantDetailModal restaurant={selectedRestaurant} onClose={handleCloseRestaurantModal} />}

      {/* Custom Styles */}
      <style jsx global>{`
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .perspective-800 { perspective: 800px; }
        .container:hover > .box:not(:hover) { transform: rotateY(20deg) scale(0.9); opacity: 0.7; }
        .container:hover > .box:hover ~ .box { transform: rotateY(-20deg) scale(0.9); opacity: 0.7; }
        .text-shadow-sm { text-shadow: 1px 1px 2px rgba(0,0,0,0.5); }
        .text-shadow-md { text-shadow: 1px 1px 3px rgba(0,0,0,0.6); }
        .line-clamp-1 { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; }
        .line-clamp-2 { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
        .line-clamp-3 { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; }
      `}</style>
    </section>
  );
};

export default ServicesSection;