import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1D4ED8] font-serif">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#1D4ED8] text-white p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Our Location</h4>
                    <p className="text-gray-600">123 Mountain View Road, Chitral, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#1D4ED8] text-white p-3 rounded-full mr-4">
                    <FaPhone className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Phone Number</h4>
                    <p className="text-gray-600">+92 123 4567890</p>
                    <p className="text-gray-600">+92 987 6543210</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#1D4ED8] text-white p-3 rounded-full mr-4">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email Address</h4>
                    <p className="text-gray-600">info@chitraltravel.com</p>
                    <p className="text-gray-600">bookings@chitraltravel.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#1D4ED8] text-white p-3 rounded-full mr-4">
                    <FaClock className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Working Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Find Us on Map</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.325715758193!2d71.7853143152086!3d35.85182298030748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDUxJzA2LjYiTiA3McKwNDcnMTMuNiJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }}
                  allowFullScreen="" 
                  loading="lazy"
                  title="Chitral Travel Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#1D4ED8] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#1a3fb7] transition duration-300 flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;