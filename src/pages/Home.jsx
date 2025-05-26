import React from 'react';

const Home = () => {
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1560347876-aeef00ee58a1')] bg-cover bg-center h-[80vh] flex items-center justify-center">
      <div className="bg-black bg-opacity-50 p-10 rounded-md text-center text-white max-w-xl">
        <h2 className="text-4xl font-extrabold mb-4">Explore the Beauty of Chitral</h2>
        <p className="mb-6 text-lg">Discover scenic valleys, rich culture, and amazing festivals.</p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded">
  Explore Places
</button>
<button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">
  View Festivals
</button>

        </div>
      </div>
    </section>
  );
};

export default Home;
