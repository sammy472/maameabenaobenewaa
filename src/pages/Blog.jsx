import React from "react";
import { FaVideo, FaImage, FaNewspaper, FaRegLightbulb } from "react-icons/fa";

// Sample Blog Posts
const posts = [
  {
    id: 1,
    title: "🌍 Empowering Rural Students Through Tech",
    type: "story",
    date: "April 6, 2025",
    cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f", // new image
    excerpt: "See how one student-led project is transforming education in Ghana.",
  },
  {
    id: 2,
    title: "🎥 Launch Recap: AddishiaSesa 2025",
    type: "video",
    date: "March 29, 2025",
    cover: "https://images.unsplash.com/photo-1581090700227-1e8e7b6c1c64", // new image
    excerpt: "Watch the highlights from our global project launch and hear from our founders.",
  },
  {
    id: 3,
    title: "📰 New Partnership with GreenFuture",
    type: "news",
    date: "March 15, 2025",
    cover: "https://images.unsplash.com/photo-1618005198919-d3d4b5d17f8c", // new image
    excerpt: "AddishiaSesa signs partnership deal to promote sustainability in education.",
  },
  {
    id: 4,
    title: "📸 Behind the Scenes: Rural Outreach",
    type: "photo",
    date: "February 20, 2025",
    cover: "https://images.unsplash.com/photo-1509099836639-18ba1795216d", // new image
    excerpt: "Capturing unforgettable moments from our outreach programs.",
  },
];

// Sample Gallery Images
const galleryImages = [
  "https://images.unsplash.com/photo-1549924231-f129b911e442",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216",
];

// Helper to get icon based on type
const getIcon = (type) => {
  switch (type) {
    case "video":
      return <FaVideo className="text-yellow-400 mr-2" />;
    case "photo":
      return <FaImage className="text-yellow-400 mr-2" />;
    case "news":
      return <FaNewspaper className="text-yellow-400 mr-2" />;
    case "story":
    default:
      return <FaRegLightbulb className="text-yellow-400 mr-2" />;
  }
};

const Blog = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-yellow-400 text-black py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">📢 Our Blog & Updates</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Stay updated with the latest stories, videos, projects and partnerships from the AddishiaSesa community.
        </p>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white text-black rounded overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
          >
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 space-y-2">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center font-semibold uppercase">
                  {getIcon(post.type)}
                  {post.type}
                </div>
                <span>{post.date}</span>
              </div>
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-gray-700">{post.excerpt}</p>
              <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 font-semibold">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Section */}
      <div className="bg-gray-800 text-black py-20">
        <h2 className="text-4xl font-bold text-center mb-10 text-yellow-500">📸 Project Gallery</h2>
        <div className="flex overflow-x-scroll space-x-2 px-2">
          {galleryImages.map((url, index) => (
            <div key={index} className="min-w-[350px] rounded-lg shadow-md hover:shadow-xl">
              <img
                src={url}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-900 py-16 text-center">
        <h2 className="text-3xl font-bold text-yellow-400">Have a Story to Share?</h2>
        <p className="mt-2 text-gray-400">Send your photos, videos, or stories to blog@addishiasesa.org</p>
      </div>
    </div>
  );
};

export default Blog;
