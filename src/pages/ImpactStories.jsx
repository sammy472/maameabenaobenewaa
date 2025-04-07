import React, { useState } from "react";

const impactStories = [
  {
    id: 1,
    title: "From Chalkboards to Code: A Village Transformed",
    shortDescription:
      "In a remote village in Ghana, students who had never seen a computer now build websites...",
    fullDescription:
      "In a remote village in Ghana, students who had never seen a computer now build websites and program microcontrollers. AddishiaSesa introduced solar-powered computer labs and volunteer-led coding bootcamps. What started with curiosity turned into a movement of young innovators building solutions for their communities.",
    image: "https://images.unsplash.com/photo-1581092334561-77994e7966b4",
  },
  {
    id: 2,
    title: "Girls Breaking Barriers in STEM",
    shortDescription:
      "Young girls are not just participating but leading projects in robotics and data science...",
    fullDescription:
      "Through our mentorship and coding bootcamps, young girls from rural towns are not just participating but leading projects in robotics and data science. They’ve gone on to compete in regional competitions, build AI models for agriculture, and become STEM mentors to their peers.",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
  },
  {
    id: 3,
    title: "Solar-Powered Learning Hubs",
    shortDescription:
      "Where electricity was once a luxury, solar energy now powers digital classrooms...",
    fullDescription:
      "Where electricity was once a luxury, solar energy now powers digital classrooms that run day and night. AddishiaSesa deployed mobile solar kits that brought light and learning to over 12 villages. Education no longer sleeps in these parts of Africa.",
    image: "https://images.unsplash.com/photo-1603570411194-4761b95c0d09",
  },
];

const ImpactStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const openModal = (story) => {
    setSelectedStory(story);
  };

  const closeModal = () => {
    setSelectedStory(null);
  };

  return (
    <section className="bg-white text-white py-20 px-6 relative z-0">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
          💡 Impact Stories
        </h2>
        <p className="text-gray-800 max-w-2xl mx-auto">
          Real lives, real transformations. Discover how our initiatives are
          reshaping futures.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {impactStories.map((story) => (
          <div
            key={story.id}
            className="bg-gray-200 text-black rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-yellow-500">
                {story.title}
              </h3>
              <p className="text-gray-800 text-sm">{story.shortDescription}</p>
              <button
                className="mt-4 bg-gray-900 hover:bg-yellow-500 text-gray-200 px-4 py-2 rounded font-semibold transition duration-300"
                onClick={() => openModal(story)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
          Want to share your story?
        </h3>
        <p className="text-gray-800 mb-4">
          We’d love to hear how Adesua Sesa made an impact in your life.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded font-semibold transition duration-300">
          Submit Your Story
        </button>
      </div>

      {/* Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-yellow-500 text-2xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedStory.image}
              alt={selectedStory.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6 text-black">
              <h2 className="text-2xl font-semibold text-yellow-500 mb-2">
                {selectedStory.title}
              </h2>
              <p className="text-gray-800">{selectedStory.fullDescription}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImpactStories;
