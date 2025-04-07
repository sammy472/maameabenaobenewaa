import React, { useState,useReducer } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent! 🎉");
  };

  return (
    <div className="bg-gray-800 min-h-screen py-20 px-6 justify-center items-center flex flex-col">
      <h1 className="text-4xl font-bold text-yellow-400 text-center mb-10">📞 Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8 w-full justify-center">
        <div className="bg-white p-6 rounded-xs shadow-lg justify-center">
          <h2 className="text-2xl font-semibold text-black mb-4">Get In Touch 📬</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-2">✉️ Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-gray-300 p-3 outline-none text-black rounded-[1px]"
                placeholder="Your email address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 mb-2">💬 Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-gray-300 p-3 outline-none text-black rounded-[1px]"
                placeholder="Write your message here"
              />
            </div>
            <button
              type="button"
              className="bg-yellow-400 text-black px-4 py-2 hover:bg-yellow-500 transition-all duration-300 rounded-[1px] font-semibold cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-xs shadow-lg">
          <h2 className="text-2xl font-semibold text-black mb-4">Our Contact Information 📍</h2>
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-yellow-400 text-2xl mr-3" />
            <p className="text-gray-700">+212 676 767 288</p>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-yellow-400 text-2xl mr-3" />
            <p className="text-gray-700">contact@communitymanager.com</p>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-yellow-400 text-2xl mr-3" />
            <p className="text-gray-700">123 Community Ave Bouskoura, Casablanca, Morocco</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
