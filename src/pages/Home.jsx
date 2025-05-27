import React from 'react';
import PlaceCard from '../components/PlaceCard';
import CustomerReviews from '../components/CustomerReviews';



import chitral1 from '../assets/images/chitral1.jpg';
import chitral2 from '../assets/images/chitral2.jpg';
import chitral3 from '../assets/images/chitral3.jpg';

import festival1 from '../assets/images/festival1.jpg';
import festival2 from '../assets/images/festival2.jpg';
import festival3 from '../assets/images/festival3.jpg';

import videoClip from '../assets/images/video.mp4';

const Home = () => {
  const popularPlaces = [
    {
      image: chitral1,
      title: "Bumburet Valley",
      location: "Kalash Valleys, Chitral",
      elevation: "2,500 m",
      description: "Known for its breathtaking scenery and the vibrant Kalash culture."
    },
    {
      image: chitral2,
      title: "Tirich Mir",
      location: "Hindu Kush Range",
      elevation: "7,708 m",
      description: "The highest mountain in the Hindu Kush, popular for trekking and sightseeing."
    },
    {
      image: chitral3,
      title: "Shandur Pass",
      location: "Between Chitral and Gilgit",
      elevation: "3,700 m",
      description: "Home of the famous Shandur Polo Ground — the highest in the world."
    }
  ];

  const festivals = [
    {
      image: festival1,
      title: "Kalash Festival",
      location: "Kalash Valleys",
      elevation: "2,500 m",
      description: "A vibrant celebration with dance, music, and rituals held by the Kalash people."
    },
    {
      image: festival2,
      title: "Shandur Polo Festival",
      location: "Shandur Pass",
      elevation: "3,700 m",
      description: "Held at the world's highest polo ground, this festival is a cultural marvel."
    },
    {
      image: festival3,
      title: "Jashn-e-Chitral",
      location: "Chitral Town",
      elevation: "1,500 m",
      description: "A local festival highlighting Chitrali food, crafts, and sports."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Video */}
     {/* Hero Section with Video - Removed white overlay */}
<div className="relative h-[80vh] w-full overflow-hidden">
  <video
    src={videoClip}
    autoPlay
    loop
    muted
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  />
 
<div className="relative h-[80vh] w-full overflow-hidden">
  <video
    src={videoClip}
    autoPlay
    loop
    muted
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  />
  
  {/* Form positioned at bottom */}
 <div className="relative h-[80vh] w-full overflow-hidden">
  <video
    src={videoClip}
    autoPlay
    loop
    muted
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  />

  {/* Form positioned at bottom */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-4xl px-4">
    <div className="bg-white bg-opacity-60 backdrop-blur-md p-4 md:p-6 rounded-lg text-black shadow-xl border border-white border-opacity-30">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center font-serif text-[#1D4ED8]">
        Let’s Discover Pakistan with Guide To Pakistan!
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
        <input type="text" placeholder="Your name" className="px-3 py-1.5 rounded border border-gray-300 bg-white bg-opacity-70 outline-none" />
        <input type="email" placeholder="Your email" className="px-3 py-1.5 rounded border border-gray-300 bg-white bg-opacity-70 outline-none" />
        <input type="tel" placeholder="Phone Number" className="px-3 py-1.5 rounded border border-gray-300 bg-white bg-opacity-70 outline-none" />
        <input type="number" placeholder="Total Participants" className="px-3 py-1.5 rounded border border-gray-300 bg-white bg-opacity-70 outline-none" />
        <input type="text" placeholder="Destination" className="px-3 py-1.5 rounded border border-gray-300 bg-white bg-opacity-70 outline-none" />
        <input type="date" className="px-3 py-1.5 rounded border border-gray-300 bg-white bg-opacity-70 outline-none" />
        <div className="md:col-span-3">
          <button
            type="submit"
            className="w-full bg-[#1D4ED8] hover:bg-[#1a43b8] text-white py-2 rounded-lg font-medium transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
</div>

      {/* Most Popular Places Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#1D4ED8] font-serif">
            Most Popular Places of Chitral
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore the breathtaking landscapes and cultural wonders of Chitral's most iconic destinations.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {popularPlaces.map((place, index) => (
              <PlaceCard
                key={index}
                image={place.image}
                title={place.title}
                location={place.location}
                elevation={place.elevation}
                description={place.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Famous Festivals Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#1D4ED8] font-serif">
            Famous Festivals of Chitral
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Experience the vibrant cultural celebrations that define Chitral's unique heritage.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {festivals.map((festival, index) => (
              <PlaceCard
                key={index}
                image={festival.image}
                title={festival.title}
                location={festival.location}
                elevation={festival.elevation}
                description={festival.description}
              />
            ))}
          </div>
        </div>
      </section>
      <CustomerReviews />
   
    </div>
  );
};

export default Home;