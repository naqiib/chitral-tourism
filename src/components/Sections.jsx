import React from 'react';
import img1 from '../assets/images/kalash.jpg';
import img2 from '../assets/images/shandur.jpg';
import img3 from '../assets/images/bumburet.jpg';
import img4 from '../assets/images/garamchashma.jpg';

const GallerySection = () => {
  const galleryItems = [
    {
      img: img1,
      title: "Kalash Valley",
      description: "The home of the Kalash people with unique culture and festivals"
    },
    {
      img: img2,
      title: "Shandur Pass",
      description: "Famous for the highest polo ground in the world"
    },
    {
      img: img3,
      title: "Bumburet",
      description: "Lush green valley in the Kalash region"
    },
    {
      img: img4,
      title: "Garam Chashma",
      description: "Known for its hot springs and stunning landscapes"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Gallery Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These wild and beautiful places of Pakistan's northern areas will certainly enchant you 
            to plan your exciting trip and forget all your anxieties.
          </p>
        </div>

        {/* 3D Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transform-style-preserve-3d perspective-500">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="box relative w-full h-72 bg-black transition-all duration-500 transform-style-preserve-3d overflow-hidden shadow-lg hover:z-10 hover:scale-110 hover:shadow-xl group"
            >
              <div className="imgBx absolute inset-0 w-full h-full before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-gradient-to-b before:from-red-600 before:to-black before:opacity-0 before:transition-opacity before:duration-500 before:mix-blend-multiply group-hover:before:opacity-80">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="content absolute inset-0 z-10 flex p-6 box-border items-end">
                <div>
                  <h2 className="text-white uppercase mb-2 text-xl font-bold transition-all duration-500 transform translate-y-20 group-hover:translate-y-0 delay-100">
                    {item.title}
                  </h2>
                  <p className="text-white text-sm transition-all duration-500 transform translate-y-20 group-hover:translate-y-0 delay-150">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .perspective-500 {
          perspective: 500px;
        }
        .container:hover .box:not(:hover) {
          transform: rotateY(15deg) scale(0.95);
        }
        .container:hover .box:hover ~ .box {
          transform: rotateY(-15deg) scale(0.95);
        }
      `}</style>
    </section>
  );
};

export default GallerySection;