import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogSection from './components/BlogSection';
import GallerySection from './components/Sections';



function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Home />
      <BlogSection/>
      <GallerySection/>
      <Footer />
   
    </div>
  );
}

export default App;
