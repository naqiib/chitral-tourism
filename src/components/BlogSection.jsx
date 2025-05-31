import React from 'react';
import kalashImage from '../assets/images/kalash.jpg';
import shandurImage from '../assets/images/shandur.jpg';
import bumburetImage from '../assets/images/bumburet.jpg';

const blogs = [
  {
    title: "Exploring Kalash Valley with Our Guests",
    date: "May 10, 2025",
    description:
      "Our recent trip to the stunning Kalash Valley with guests was filled with culture, nature, and unforgettable memories. Here's a glimpse into our experience.",
    image: kalashImage,
  },
  {
    title: "Majestic Views from Shandur Pass",
    date: "April 25, 2025",
    description:
      "A breathtaking journey with tourists to the world’s highest polo ground — Shandur Pass. Scenic routes and snow-capped peaks made it a highlight.",
    image: shandurImage,
  },
  {
    title: "A Day at Bumburet Valley",
    date: "April 15, 2025",
    description:
      "Our team guided clients through the beauty of Bumburet Valley, known for its greenery, traditional houses, and serene atmosphere.",
    image: bumburetImage,
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#1D4ED8] font-serif">
          Our Blog
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Take a look at the incredible places we’ve visited with our clients and their experiences.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-[#1D4ED8]">{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <p className="text-gray-700 text-sm">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
