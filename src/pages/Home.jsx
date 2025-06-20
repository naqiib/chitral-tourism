import React, { useState } from 'react';
import PlaceCard from '../components/PlaceCard';
import CustomerReviews from '../components/CustomerReviews';

// Image imports (ensure these paths are correct relative to Home.js)
import chitral1 from '../assets/images/chitral1.jpg';
import chitral2 from '../assets/images/chitral2.jpg';
import chitral3 from '../assets/images/chitral3.jpg';

import festival1 from '../assets/images/festival1.jpg';
import festival2 from '../assets/images/festival2.jpg';
import festival3 from '../assets/images/festival3.jpg';

import videoClip from '../assets/images/video.mp4';

const Home = () => {
    // State to manage form input values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        participants: '',
        destination: '',
        date: ''
    });
    // State to manage loading, error, and success states for the booking process
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null); // 'null', 'pending', or 'success'

    // Define your destination options
    const destinationOptions = [
        "Gilgit",
        "Hunza",
        "Skardu",
        "Chitral",
        "Kalash Valley"
    ];

    // Handle changes in form inputs to update state
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        // Clear any previous error/success messages and reset success status when user starts typing again
        setError(null);
        setSuccess(null);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(null); // Reset success state to null before new attempt

        try {
            // Construct the date string in YYYY-MM-DD format for consistency with Date type
            const formattedDate = formData.date ? new Date(formData.date).toISOString().split('T')[0] : '';

            const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, date: formattedDate }),
            });

            if (response.ok) {
                setSuccess('Booking successful!'); // Set success message
                // Clear the form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    participants: '',
                    destination: '',
                    date: ''
                });
                // After a short delay, clear the success message and enable the button again
                setTimeout(() => {
                    setSuccess(null);
                }, 3000); // Message disappears after 3 seconds
            } else {
                const errorData = await response.json();
                setError(errorData.error || 'Something went wrong with the booking.');
            }
        } catch (err) {
            console.error('Error submitting booking:', err);
            setError('An unexpected error occurred. Please try again later.');
        } finally {
            setIsLoading(false); // Reset loading state regardless of success or failure
        }
    };

    // Determine button text based on state
    const getButtonText = () => {
        if (isLoading) {
            return 'Booking...';
        }
        if (success) {
            return 'Booked!'; // Indicate success
        }
        return 'Book Now';
    };

    // --- Your existing data for popular places and festivals ---
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
            <div className="relative h-[80vh] w-full overflow-hidden">
                <video
                    src={videoClip}
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />

                {/* Form positioned at bottom */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-3xl px-4">
                    <div className="bg-white bg-opacity-60 backdrop-blur-md p-3 md:p-4 rounded-lg text-black shadow-xl border border-white border-opacity-30">
                        <h2 className="text-xl md:text-2xl font-bold mb-3 text-center font-serif text-[#1D4ED8]">
                            Let's Discover Pakistan!
                        </h2>
                        <form className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                className="px-2 py-1 rounded border border-gray-300 bg-white bg-opacity-70 outline-none text-sm"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email"
                                value={formData.email}
                                onChange={handleChange}
                                className="px-2 py-1 rounded border border-gray-300 bg-white bg-opacity-70 outline-none text-sm"
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="px-2 py-1 rounded border border-gray-300 bg-white bg-opacity-70 outline-none text-sm"
                                required
                            />
                            <input
                                type="number"
                                name="participants"
                                placeholder="Participants"
                                value={formData.participants}
                                onChange={handleChange}
                                className="px-2 py-1 rounded border border-gray-300 bg-white bg-opacity-70 outline-none text-sm"
                                required
                                min="1"
                            />
                            <select
                                name="destination"
                                value={formData.destination}
                                onChange={handleChange}
                                className="px-2 py-1 rounded border border-gray-300 bg-white bg-opacity-70 outline-none text-sm"
                                required
                            >
                                <option value="" disabled>Select Destination</option>
                                {destinationOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="px-2 py-1 rounded border border-gray-300 bg-white bg-opacity-70 outline-none text-sm"
                                required
                            />
                            <div className="md:col-span-3">
                                <button
                                    type="submit"
                                    className={`w-full py-1.5 rounded-lg font-medium transition duration-300 text-sm
                                        ${isLoading ? 'bg-gray-400 cursor-not-allowed' :
                                          success ? 'bg-green-600 hover:bg-green-700' :
                                          'bg-[#1D4ED8] hover:bg-[#1a43b8]'} text-white`}
                                    disabled={isLoading || success} // Disable if loading or successfully booked
                                >
                                    {getButtonText()}
                                </button>
                            </div>
                            {/* Display success or error messages conditionally */}
                            {success && (
                                <p className="md:col-span-3 text-center text-green-600 mt-2 text-sm font-semibold animate-fade-in-down">
                                    {success} 🎉
                                </p>
                            )}
                            {error && (
                                <p className="md:col-span-3 text-center text-red-600 mt-2 text-sm font-semibold animate-shake">
                                    {error} ❌
                                </p>
                            )}
                        </form>
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