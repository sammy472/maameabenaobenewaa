import React, { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import placeHolderImage from "../assets/hero-image.png"; // Placeholder image for events

// Event data with added 'status' for filtering purposes
const events = [
  {
    id: 1,
    title: "Tech for Change Summit",
    date: "May 15, 2025",
    location: "Accra, Ghana",
    image: placeHolderImage,
    status: "upcoming", // Add 'upcoming' or 'finished'
  },
  {
    id: 2,
    title: "Youth Leadership Workshop",
    date: "June 22, 2025",
    location: "Marrakech, Morocco",
    image: placeHolderImage,
    status: "upcoming", // Add 'upcoming' or 'finished'
  },
  {
    id: 3,
    title: "STEM Girls Bootcamp",
    date: "July 10, 2025",
    location: "Lagos, Nigeria",
    image: placeHolderImage,
    status: "finished", // Add 'upcoming' or 'finished'
  },
  {
    id: 4,
    title: "Blockchain Innovation Conference",
    date: "January 10, 2023",
    location: "Cape Town, South Africa",
    image: placeHolderImage,
    status: "finished", // Add 'upcoming' or 'finished'
  },
];

const Events = () => {
  const [filter, setFilter] = useState("All"); // Default filter is 'all'

  // Get today's date to determine if an event is finished or upcoming
  const today = new Date();

  // Filter events based on the selected filter type
  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    if (filter === "All") {
      return true;
    }
    if (filter === "Upcoming") {
      return eventDate >= today; // Show upcoming events
    }
    if (filter === "Finished") {
      return eventDate < today; // Show finished events
    }
    return true;
  });

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen py-20 px-6">
      <h1 className="text-4xl font-bold text-yellow-400 text-center mb-10">{filter} Events</h1>

      {/* Filter buttons */}
      <div className="flex justify-center space-x-4 mb-10">
        <button
          onClick={() => setFilter("All")}
          className={`py-2 px-4 transition-colors ${
            filter === "All" ? "bg-yellow-400 text-black" : "bg-gray-300 text-black"
          } hover:bg-yellow-500 cursor-pointer`}
        >
          All Events
        </button>
        <button
          onClick={() => setFilter("Upcoming")}
          className={`py-2 px-4 transition-colors ease-in-out duration-100 ${
            filter === "Upcoming" ? "bg-yellow-400 text-black" : "bg-gray-300 text-black"
          } hover:bg-yellow-500 cursor-pointer`}
        >
          Upcoming Events
        </button>
        <button
          onClick={() => setFilter("Finished")}
          className={`py-2 px-4 transition-colors ${
            filter === "Finished" ? "bg-yellow-400 text-black" : "bg-gray-300 text-black"
          } hover:bg-yellow-500 cursor-pointer`}
        >
          Finished Events
        </button>
      </div>

      {/* Events List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xs shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={event.image} alt={event.title} className="w-full h-56 object-cover rounded-t-xs" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-black">{event.title}</h2>
                <div className="flex items-center mt-4 text-gray-600">
                  <FaCalendarAlt className="text-yellow-400 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center mt-2 text-gray-600">
                  <FaMapMarkerAlt className="text-yellow-400 mr-2" />
                  <span>{event.location}</span>
                </div>
                <button className="mt-6 flex items-center justify-between bg-yellow-400 text-black px-6 py-2 hover:bg-yellow-500 transition-all duration-300 ease-in-out cursor-pointer">
                  <span>Learn More</span>
                  <FaArrowRight className="ml-2 text-lg" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl text-gray-600">No events to show based on the selected filter.</p>
        )}
      </div>
    </div>
  );
};

export default Events;
