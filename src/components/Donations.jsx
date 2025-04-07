import React, { useReducer, useState } from "react";
import { FaHeart, FaDonate, FaUser, FaEnvelope, FaPhoneAlt, FaHome, FaComment } from "react-icons/fa";

const initialState = { totalDonations: 0, donations: [] };

const donationReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DONATION":
      return {
        totalDonations: state.totalDonations + action.payload.amount,
        donations: [...state.donations, action.payload],
      };
    default:
      return state;
  }
};

const Donation = () => {
  const [state, dispatch] = useReducer(donationReducer, initialState);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    amount: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.amount || formData.amount <= 0) {
      alert("Please enter a valid donation amount!");
      return;
    }

    dispatch({ type: "ADD_DONATION", payload: { ...formData, amount: Number(formData.amount) } });
    alert("🎉 Thank you for your donation!");
    setFormData({ name: "", email: "", phone: "", address: "", amount: "", message: "" });
  };

  return (
    <div className="bg-gray-800 min-h-screen py-20 px-6 text-white">
      <h1 className="text-4xl font-bold text-yellow-400 text-center mb-10">💖 Make a Difference</h1>

      {/* Live Donation Counter */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold">Total Donations Raised:</h2>
        <p className="text-3xl font-bold text-yellow-400">${state.totalDonations}</p>
      </div>

      <div className="bg-white text-black p-6 rounded-xs shadow-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">🌟 Support Our Cause</h2>

        <form className="space-y-5">
          {/* Name */}
          <div className="flex items-center bg-gray-200 p-3 rounded-xs">
            <FaUser className="text-gray-600 mr-3" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-gray-200 p-3 rounded-xs">
            <FaEnvelope className="text-gray-600 mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex items-center bg-gray-200 p-3 rounded-xs">
            <FaPhoneAlt className="text-gray-600 mr-3" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
              required
            />
          </div>

          {/* Address */}
          <div className="flex items-center bg-gray-200 p-3 rounded-xs">
            <FaHome className="text-gray-600 mr-3" />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
              required
            />
          </div>

          {/* Donation Amount */}
          <div className="flex items-center bg-gray-200 p-3 rounded-xs">
            <FaDonate className="text-gray-600 mr-3" />
            <input
              type="number"
              name="amount"
              placeholder="Donation Amount ($)"
              value={formData.amount}
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
              min="1"
              required
            />
          </div>

          {/* Message */}
          <div className="flex items-center bg-gray-200 p-3 rounded-xs">
            <FaComment className="text-gray-600 mr-3" />
            <textarea
              name="message"
              placeholder="Leave a message (optional)"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Donate Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-yellow-400 text-black w-full py-3 rounded-xs font-semibold text-lg flex items-center justify-center hover:bg-yellow-500 transition duration-300"
          >
            Donate Now <FaHeart className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donation;
