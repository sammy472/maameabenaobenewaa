import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHandshake,
  FaBuilding,
  FaDollarSign,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowRight,
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTwitch,
  FaWhatsapp,
} from "react-icons/fa";
import placeHolderImage from "../assets/hero-image.png"; // Placeholder image for partners
import Donations from "../components/Donations";

const partners = [
  {
    id: 1,
    name: "🚀 Tech Innovators Ltd.",
    description: "Supporting tech education and startups worldwide.",
    logo: placeHolderImage,
  },
  {
    id: 2,
    name: "🌿 Green Future Foundation",
    description: "An NGO promoting sustainable solutions globally.",
    logo: placeHolderImage,
  },
  {
    id: 3,
    name: "🤖 Global AI Hub",
    description: "A research organization working on AI-driven solutions.",
    logo: placeHolderImage,
  },
  {
    id: 4,
    name: "🤖 Global AI Hub",
    description: "A research organization working on AI-driven solutions.",
    logo: placeHolderImage,
  },
];

const Partnerships = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Your partnership request has been submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-yellow-400 py-20 px-6 text-center">
        <h1 className="md:text-5xl text-3xl font-extrabold tracking-wide">🤝 Become a Partner & Support</h1>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
          Join us in building impactful partnerships that drive innovation, sustainability, and change. Let's create something great together!
        </p>
        <a href="#partnership-support" className="inline-block mt-8">
          <button className="mt-6 bg-yellow-400 text-black px-6 py-3 font-semibold hover:bg-yellow-500 transition-all duration-300 flex items-center cursor-pointer">
            Get started <FaArrowRight className="inline ml-2" />
          </button>
        </a>
      </div>

      {/* Partners Showcase (Horizontal Scroll) */}
      <div className="bg-white py-12">
        <h2 className="text-4xl font-bold text-center mb-6">🌍 Our Partners</h2>
        <div className="flex overflow-x-scroll space-x-6 px-10">
          {partners.map((partner) => (
            <div key={partner.id} className="min-w-[250px] bg-gray-200 p-6 rounded-sm shadow-md text-center hover:shadow-xl transition">
              <img src={partner.logo} alt={partner.name} className="w-20 h-20 mx-auto rounded-full mb-3 shadow-lg" />
              <h3 className="text-xl font-bold">{partner.name}</h3>
              <p className="text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Partner? (Side-by-Side Cards) */}
      <div className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 min-h-60 rounded-sm shadow-lg flex items-center space-x-4">
          <FaHandshake className="text-yellow-400 text-6xl" />
          <div>
            <h2 className="text-2xl font-semibold">Strong Partnerships</h2>
            <p className="text-gray-600">We work with industry leaders to create impactful initiatives.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-sm min-h-60 shadow-lg flex items-center space-x-4">
          <FaBuilding className="text-yellow-400 text-6xl" />
          <div>
            <h2 className="text-2xl font-semibold">Global Network</h2>
            <p className="text-gray-600">Expand your reach by joining a network of innovators and leaders.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-sm min-h-60 shadow-lg flex items-center space-x-4">
          <FaDollarSign className="text-yellow-400 text-6xl" />
          <div>
            <h2 className="text-2xl font-semibold">Exclusive Benefits</h2>
            <p className="text-gray-600">Enjoy sponsorship opportunities and premium exposure.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-sm min-h-60 shadow-lg flex items-center space-x-4">
          <FaHandshake className="text-yellow-400 text-6xl" />
          <div>
            <h2 className="text-2xl font-semibold">Sustainable Growth</h2>
            <p className="text-gray-600">Work with us on long-term projects that drive meaningful impact.</p>
          </div>
        </div>
      </div>

      {/* Open Partnerships & Support */}
      <div id="partnership-support" className="bg-white mb-6 py-16 px-6 max-w-7xl mx-auto space-y-12 text-gray-800">
        {/* Open Partnerships */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">🤝 Open Partnerships</h2>
          <p className="mb-4">
            At Addishia Sesa, we believe that change is most impactful when it’s done together. We invite individuals, organizations, institutions, and businesses to partner with us in launching projects that will shape the future of education and make a tangible impact on communities across the globe.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Partner with us to create innovative learning experiences for students.</li>
            <li>Join us in launching projects that solve real-world challenges.</li>
            <li>Help us bridge the gap between high-profile schools and underserved communities.</li>
          </ul>
          <p className="mb-2">
            We facilitate the logistics, provide expertise, and guide the project from inception to successful implementation, ensuring that every effort aligns with our mission to empower learners to change the world.
          </p>
          <p>Ready to collaborate? Reach out to us at <a className="text-blue-600 underline" href="mailto:contact@addishiasesa.org">contact@addishiasesa.org</a> or visit our Partnership page to learn more.</p>
        </div>

        {/* Support Our Cause */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">🎯 Support Our Cause</h2>
          <p className="mb-4">
            Our work is powered by a network of passionate individuals and supporters who believe in the power of education to transform lives. If you share our mission to empower students, promote authentic learning, and solve global problems, we welcome your support.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Donate to fund transformative education projects.</li>
            <li>Sponsor a student-led initiative that’s making a difference.</li>
            <li>Volunteer your time or skills to help us scale our impact.</li>
            <li>Spread the word about our mission and help us build a global movement for change.</li>
          </ul>
          <p>Every contribution, big or small, helps us move one step closer to our vision of an education system that is dynamic, authentic, and capable of creating positive change.</p>
          <p className="mt-2">Support today: <a className="text-blue-600 underline" href="mailto:support@adesuasesa.org">support@adesuasesa.org</a> or visit our Support page to learn more.</p>
        </div>
      </div>
      {/* Donations Component */}
      <Donations />
      {/* Contact Form (Split Layout) */}
      <div className="bg-gray-900 text-white py-16 px-6" id="contact">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-sm shadow-lg">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">📩 Partner With Us</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">🏢 Company Name</label>
                <input
                  type="text"
                  className="w-full p-3 bg-gray-700 text-white placeholder-gray-400 focus:border-yellow-400"
                  placeholder="Your company name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">✉️ Contact Email</label>
                <input
                  type="email"
                  className="w-full p-3 bg-gray-700 text-white placeholder-gray-400 focus:border-yellow-400"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">💬 Message</label>
                <textarea
                  className="w-full p-3 bg-gray-700 text-white placeholder-gray-400 focus:border-yellow-400"
                  placeholder="Tell us why you want to partner with us"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button
                type="button"
                className="w-full bg-yellow-400 cursor-pointer text-black font-semibold px-4 py-3 hover:bg-yellow-500 transition"
                onClick={handleSubmit}
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Details + Social Media */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-3xl font-bold text-yellow-400 underline underline-offset-2">Contact Us</h3>
            <p className="flex items-center"><FaPhoneAlt className="text-yellow-400 mr-2" />+212 676 767 288</p>
            <p className="flex items-center"><FaEnvelope className="text-yellow-400 mr-2" />support@addishiasesa.org</p>

            <h3 className="text-2xl font-bold text-yellow-400 mt-4 underline underline-offset-2">Follow Us</h3>
            <div className="flex space-x-4 text-3xl">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} color="#E4405F" />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={20} color="#69C9D0" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} color="#0A66C2" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} color="#1DA1F2" />
              </a>
              <a href="https://www.twitch.com" target="_blank" rel="noopener noreferrer">
                <FaTwitch size={20} color="#9146FF" />
              </a>
              <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={20} color="#25D366" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
