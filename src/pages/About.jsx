import React,{useState} from "react";
import { 
  FaUsers, 
  FaChalkboardTeacher, 
  FaHandshake, 
  FaGift, 
  FaSchool, 
  FaPeopleCarry, 
  FaLightbulb, 
  FaHandHoldingHeart, 
  FaGlobe, 
  FaCog,
  FaAngleDown
} from "react-icons/fa";

// Replace this URL with the community manager's actual photo URL
const managerPhoto = "https://randomuser.me/api/portraits/women/5.jpg";

const AboutUs = () => {
  // State to manage the visibility of the text in the core values section
  const [coreValues, setCoreValues] = useState([
    {
      id: 1,
      icon: <FaLightbulb className="text-yellow-500 mr-2" />,
      title: "Authenticity",
      description:
        "We honor each learner’s voice, passion, and unique path, ensuring that education is truly representative of their individuality.",
      showText: false,
    },
    {
      id: 2,
      icon: <FaGlobe className="text-yellow-500 mr-2" />,
      title: "Change",
      description:
        "Learning should drive real, measurable impact. We focus on transformative education that brings about tangible change in communities.",
      showText: false,
    },
    {
      id: 3,
      icon: <FaPeopleCarry className="text-yellow-500 mr-2" />,
      title: "Cultural Wisdom",
      description:
        "Rooted in African systems of thought and learning, our approach embraces cultural wisdom, diversity, and heritage.",
      showText: false,
    },
    {
      id: 4,
      icon: <FaUsers className="text-yellow-500 mr-2" />,
      title: "Equity",
      description:
        "We work to close gaps between the privileged and the under-resourced, ensuring equitable access to opportunities for all learners.",
      showText: false,
    },
    {
      id: 5,
      icon: <FaHandHoldingHeart className="text-yellow-500 mr-2" />,
      title: "Leadership",
      description:
        "We grow learners into leaders with global responsibility, fostering skills and attributes that empower them to lead with purpose.",
      showText: false,
    },
    {
      id: 6,
      icon: <FaLightbulb className="text-yellow-500 mr-2" />,
      title: "Creativity",
      description:
        "We nurture creativity and innovation in all forms of learning, encouraging students to think outside the box and solve problems creatively.",
      showText: false,
    },
  ]);

  // Function to toggle the visibility of the text in the core values section
  const toggleText = (id) => { 
    setCoreValues((prevValues) =>
      prevValues.map((value) =>
        value.id === id ? { ...value, showText: !value.showText } : value
      )
    );
  }

  return (
    <div className="bg-gray-800 min-h-screen py-20 px-6">
      {/* Manager Section */}
      <div className="text-center mb-16">
        <img src={managerPhoto} alt="Community Manager" className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Meet Maame Abena Obenewaa</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto text-justify p-4">
          Maame Abena Obenewaa is a passionate community leader and organizer, dedicated to empowering students and connecting them with opportunities for growth. With over 10 years of experience in event management, Jane has worked tirelessly to create impactful events for students, fostering collaboration and knowledge-sharing across schools and universities. Her mission is to bridge the gap between education, collaboration, and community support, with a focus on creating sustainable change through partnerships, sponsorships, and charitable donations. She believes in the power of community and collaboration to create lasting, positive change.
        </p>
      </div>

      {/* What We Do */}
      <div className="text-center mb-16 bg-gray-300 p-2 rounded-xs shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">What We Do</h2>
        <p className="text-lg text-gray-800 max-w-3xl mx-auto text-justify p-4">
          ADESUA SESA is an Africa-rooted, globally-minded educational movement that:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto bg-gray-200 p-4 rounded-xs shadow-lg">
          <div className="bg-gray-300 pb-6 rounded-xs shadow-lg">
            <h3 className="text-2xl w-full min-h-16 bg-black font-semibold text-yellow-400 mb-4 flex items-center p-2">
              <FaLightbulb className="text-yellow-500 mr-2" /> Coordinates Student-Led Projects
            </h3>
            <p className="text-gray-700 p-6 text-justify">
              We coordinate student-led, purpose-driven projects with social impact, empowering students to create meaningful change in their communities.
            </p>
          </div>
          <div className="bg-gray-300 pb-6 rounded-xs shadow-lg">
            <h3 className="text-2xl w-full min-h-16 bg-black font-semibold text-yellow-400 mb-4 flex items-center p-2">
              <FaHandshake className="text-yellow-500 mr-2" /> Bridges High-Profile Institutions
            </h3>
            <p className="text-gray-700 p-6 text-justify">
              We bridge high-profile institutions with underserved communities through impactful learning partnerships, promoting equity and growth.
            </p>
          </div>
          <div className="bg-gray-300 pb-6 rounded-xs shadow-lg">
            <h3 className="text-2xl w-full min-h-16 bg-black font-semibold text-yellow-400 mb-4 flex items-center p-2">
              <FaCog className="text-yellow-500 mr-2" /> Facilitates Project-Based Learning
            </h3>
            <p className="text-gray-700 p-6 text-justify">
              Our focus is on project-based learning (PBL), extending beyond standard curriculums to provide students with hands-on, real-world problem-solving experiences.
            </p>
          </div>
          <div className="bg-gray-300 pb-6 rounded-xs shadow-lg">
            <h3 className="text-2xl w-full min-h-16 bg-black font-semibold text-yellow-400 mb-4 flex items-center p-2">
              <FaChalkboardTeacher className="text-yellow-500 mr-2" /> Trains Educators in Innovation
            </h3>
            <p className="text-gray-700 p-6 text-justify">
              We provide professional development for educators, helping them shift from traditional teaching to innovative, learner-centered approaches.
            </p>
          </div>
          <div className="bg-gray-300 pb-6 rounded-xs shadow-lg">
            <h3 className="text-2xl w-full min-h-16 bg-black font-semibold text-yellow-400 mb-4 flex items-center p-2">
              <FaUsers className="text-yellow-500 mr-2" /> Advocates for Authentic Education
            </h3>
            <p className="text-gray-700 p-6 text-justify">
              We advocate for authenticity in education, promoting systems that emphasize passion, impact, and meaning rather than rote memorization.
            </p>
          </div>
        </div>
      </div>

      {/* Our Core Values */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Our Core Values</h2>
        <div className="grid gap-8 max-w-6xl mx-auto">
          {coreValues.map((value) => (
            <div key={value.id} className={`${!value.showText ? "bg-black" : "bg-gray-900"} pb-6 rounded-xs shadow-lg`}>
              <h3 className="text-2xl w-full min-h-16 bg-black font-semibold text-yellow-400 mb-4 flex items-center p-2 cursor-pointer justify-between" onClick={() => toggleText(value.id)}>
                <span className="relative flex flex-row justify-between items-center">
                  {value.icon} {value.title}
                </span> 
                {
                  value.showText ? <FaAngleDown className="text-yellow-500 ml-2 relative right-0 transition-transform duration-500 ease-in-out" /> : <FaAngleDown className="text-yellow-500 ml-2 rotate-180 relative right-0 transition-transform duration-500 ease-in-out" />
                }
              </h3>
              {value.showText && (
                <p className="text-gray-100 p-6 text-justify">
                  {value.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Our Programs */}
      <div className="text-center mb-16 bg-gray-300 p-2 rounded-xs shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Programs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto bg-gray-200 p-4 rounded-xs shadow-lg">
          <div className="bg-gray-300 pb-6 rounded-xs shadow-lg">
            <h3 className="text-2xl w-full min-h-16 bg-black font-semibold text-yellow-400 mb-4 flex items-center p-2">
              <FaUsers className="text-yellow-500 mr-2" /> Project Incubator Hubs
            </h3>
            <p className="text-gray-700 p-6 text-justify">
              Support for student-led social impact projects, empowering learners to take ownership of their projects and create social change.
            </p>
          </div>
          <div className="bg-gray-300 pb-6 rounded-xs shadow-lg">
            <h3 className="text-2xl w-full min-h-16 bg-black font-semibold text-yellow-400 mb-4 flex items-center p-2">
              <FaSchool className="text-yellow-500 mr-2" /> School Connect
            </h3>
            <p className="text-gray-700 p-6 text-justify">
              Partnering high-resource schools with underfunded schools to create learning exchanges, fostering cross-community collaboration.
            </p>
          </div>
          <div className="bg-gray-300 pb-6 rounded-xs shadow-lg">
            <h3 className="text-2xl w-full min-h-16 bg-black font-semibold text-yellow-400 mb-4 flex items-center p-2">
              <FaHandHoldingHeart className="text-yellow-500 mr-2" /> Change Agents Fellowship
            </h3>
            <p className="text-gray-700 p-6 text-justify">
              Training young learners in purpose discovery and solution design, equipping them with the skills to create sustainable impact.
            </p>
          </div>
        </div>
      </div>

      {/* Audience */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Our Audience</h2>
        <ul className="text-lg text-gray-400 max-w-3xl mx-auto text-justify p-4 list-disc">
          <li>Students (primary to university)</li>
          <li>Educators and school leaders</li>
          <li>High-profile institutions and schools</li>
          <li>Under-resourced communities and schools</li>
          <li>Global education influencers, NGOs, and donors</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
