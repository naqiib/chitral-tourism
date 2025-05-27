// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import BlogSection from './components/BlogSection';
import GallerySection from './components/Sections';
import ServicesSection from './components/ServicesSection';


function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
         
            <BlogSection />
            <GallerySection />
          </>
        } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesSection />} />
       

      </Routes>
      <Footer />
    </div>
  );
}

export default App;