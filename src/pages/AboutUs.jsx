import React, { useState } from 'react';
import aboutImage from '../assets/images/about.jpg';


const AboutUs = () => {
  const [showTeam, setShowTeam] = useState(false);

  return (
    <div className="relative">
      {/* Hero Section with Background Image */}
    <div
  className="relative h-96 bg-cover bg-center"
  style={{ backgroundImage: `url(${require('../assets/images/about.jpg')})` }}
>
  <div className="absolute inset-0 bg-black/40"></div>
  <div className="relative z-10 pt-32 container mx-auto px-4">
    <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">
      About Guide To Pakistan
    </h1>
    <p className="text-xl text-white/90 max-w-2xl">
      We are passionate about showcasing the breathtaking beauty and rich culture of Pakistan's northern regions.
    </p>
  </div>
</div>

      {/* White Content Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Our Story Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#1D4ED8] font-serif mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2015, Guide To Pakistan began as a small group of travel enthusiasts dedicated to revealing the hidden gems of Pakistan's northern areas. What started as passion projects has grown into a premier travel service trusted by thousands.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#1D4ED8] bg-opacity-10 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-[#1D4ED8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Our Mission</h3>
                    <p className="text-gray-600">To provide authentic, sustainable travel experiences that connect visitors with Pakistan's stunning landscapes and vibrant cultures.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#3B8686] bg-opacity-10 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-[#3B8686]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Our Approach</h3>
                    <p className="text-gray-600">We focus on responsible tourism that benefits local communities while preserving the natural beauty of these regions.</p>
                  </div>
                </div>
              </div>
            </div>
            
           <div className="rounded-xl overflow-hidden shadow-lg">
  <img 
    src={aboutImage}
    alt="Northern Pakistan"
    className="w-full h-auto object-cover"
  />
</div>

          </div>

         {/* Meet Our Team Section */}
<div className="text-center mb-12">
  <button 
    onClick={() => setShowTeam(!showTeam)}
    className="px-8 py-3 bg-[#1D4ED8] text-white rounded-lg font-medium hover:bg-[#1a43b8] transition duration-300 text-lg"
  >
    {showTeam ? 'Hide Team' : 'Meet Our Team'}
  </button>
</div>

{/* Team Members */}
<div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-300 ${showTeam ? 'block' : 'hidden'}`}>
  {[
    {
      name: "Ali Khan",
      role: "Founder & Guide",
      bio: "10+ years showing travelers the beauty of Northern Pakistan",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      whatsapp: "+92 300 1234567"
    },
    {
      name: "Sara Ahmed",
      role: "Operations Manager",
      bio: "Ensures every trip runs smoothly and safely",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      whatsapp: "+92 301 7654321"
    },
    {
      name: "Jamal Shah",
      role: "Adventure Specialist",
      bio: "Expert in trekking and mountaineering routes",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      whatsapp: "+92 344 1122334"
    },
    {
      name: "Fatima Riaz",
      role: "Cultural Expert",
      bio: "Shares deep knowledge of local traditions",
      img: "https://randomuser.me/api/portraits/women/63.jpg",
      whatsapp: "+92 322 9988776"
    }
  ].map((member, index) => (
    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
      <img 
        src={member.img} 
        alt={member.name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-[#1D4ED8]/30"
      />
      <h3 className="text-xl font-bold text-center text-gray-800">{member.name}</h3>
      <p className="text-[#1D4ED8] text-center font-medium mb-2">{member.role}</p>
      <p className="text-gray-600 text-center text-sm mb-2">{member.bio}</p>
      <p className="text-green-600 text-center text-sm">
        WhatsApp: <a href={`https://wa.me/${member.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="underline">
          {member.whatsapp}
        </a>
      </p>
    </div>
  ))}
</div>


          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '200+', label: 'Tours Organized' },
              { number: '98%', label: 'Satisfied Clients' },
              { number: '15+', label: 'Local Guides' },
              { number: '50+', label: 'Hidden Locations' }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
                <p className="text-3xl font-bold text-[#1D4ED8] mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;