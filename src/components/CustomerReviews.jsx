import React from 'react';

const CustomerReviews = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#1D4ED8] font-serif">
          What Our Visitors Say
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Real experiences from people who explored the beauty and culture of Chitral.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Review Card 1 */}
          <div className="relative w-full max-w-xs min-w-[220px] text-gray-800">
            <blockquote className="bg-gray-50 rounded-lg p-6 text-sm italic relative">
              "The Kalash Festival was an unforgettable experience! The people, the culture, the colors - all amazing. I've never seen anything like it in my travels."
              <div className="absolute bottom-0 left-8 w-0 h-0 border-l-0 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-50 transform translate-y-full"></div>
            </blockquote>
            <div className="flex items-center mt-8 ml-4">
              <img 
                src="https://randomuser.me/api/portraits/women/65.jpg" 
                alt="Ayesha Khan" 
                className="w-16 h-16 rounded-full border-4 border-[#1D4ED8]"
              />
              <div className="ml-4">
                <h5 className="font-bold text-[#1D4ED8] uppercase">Ayesha Khan</h5>
                <span className="text-gray-600 text-sm">Travel Blogger</span>
              </div>
            </div>
          </div>

          {/* Review Card 2 */}
          <div className="relative w-full max-w-xs min-w-[220px] text-gray-800">
            <blockquote className="bg-gray-50 rounded-lg p-6 text-sm italic relative">
              "Tirich Mir took my breath away. The mountain views were spectacular, and our guide made the trek unforgettable. Can't wait to return next season!"
              <div className="absolute bottom-0 left-8 w-0 h-0 border-l-0 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-50 transform translate-y-full"></div>
            </blockquote>
            <div className="flex items-center mt-8 ml-4">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Saeed Ahmed" 
                className="w-16 h-16 rounded-full border-4 border-[#1D4ED8]"
              />
              <div className="ml-4">
                <h5 className="font-bold text-[#1D4ED8] uppercase">Saeed Ahmed</h5>
                <span className="text-gray-600 text-sm">Adventure Photographer</span>
              </div>
            </div>
          </div>

          {/* Review Card 3 */}
          <div className="relative w-full max-w-xs min-w-[220px] text-gray-800">
            <blockquote className="bg-gray-50 rounded-lg p-6 text-sm italic relative">
              "Chitrali hospitality is unmatched! The local cuisine, especially the traditional dishes, were the highlight of our culinary journey through Pakistan."
              <div className="absolute bottom-0 left-8 w-0 h-0 border-l-0 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-50 transform translate-y-full"></div>
            </blockquote>
            <div className="flex items-center mt-8 ml-4">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Fatima Raza" 
                className="w-16 h-16 rounded-full border-4 border-[#1D4ED8]"
              />
              <div className="ml-4">
                <h5 className="font-bold text-[#1D4ED8] uppercase">Fatima Raza</h5>
                <span className="text-gray-600 text-sm">Food Writer</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#1D4ED8] hover:bg-[#1a43b8] text-white font-bold py-2 px-6 rounded-full transition-all duration-300 hover:scale-105">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;