import React,{useState} from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.png"; 
import { 
  FaLightbulb, 
  FaBolt, 
  FaUserGraduate, 
  FaGlobe, 
  FaArrowRight,
  FaAngleDown,
} from "react-icons/fa";

const Home = () => {
  const [show, setShow] = useState(false);

  const [taglineOptions,setTaglineOptions] = useState(
    [
      {
        icon: <FaLightbulb style={{backgroundColor:'darkblue',padding:10}} className="text-yellow-400 text-5xl mb-4 mx-auto rounded-full" />,
        text: "Reimagining Learning. Reclaiming Purpose.",
        showText: false
      },
      {
        icon: <FaBolt style={{backgroundColor:'darkblue',padding:10}} className="text-yellow-400 text-5xl mb-4 mx-auto rounded-full" />,
        text: "Where Learning Sparks Change.",
        showText: false
      },
      {
        icon: <FaUserGraduate style={{backgroundColor:'darkblue',padding:10}} className="text-yellow-400 text-5xl mb-4 mx-auto rounded-full"/>,
        text: "Empowering Learners, Transforming Systems.",
        showText: false
      },
      {
        icon: <FaGlobe style={{backgroundColor:'darkblue',padding:10}} className="text-yellow-400 text-5xl mb-4 mx-auto rounded-full" />,
        text: "Learning Beyond Limits.",
        showText: false
      },
      {
        icon: <FaArrowRight 
          style={{
            backgroundColor:'darkblue',padding:10
          }} 
          className="text-yellow-400 text-5xl mb-4 mx-auto rounded-full" 
        />,
        text: "The Shift Begins with You.",
        showText: false
      }
    ]
  )


  // Function to handle the toggle of the tagline options
  // This function updates the state of the tagline options to show or hide the text when clicked
  // The same function is to handle the rotation of the icon
  const handleToggle = (index) => {
    const updatedTaglineOptions = taglineOptions.map((option, i) => {
      if(i === index){
        return { ...option, showText: !option.showText };
      }else{
        return { ...option };
      }
    }
    );
    setTaglineOptions(updatedTaglineOptions);
  }


  
  return (
    <div className="bg-black w-full text-white min-h-screen flex flex-col">

      {/* Hero Section */}
      <div className="relative w-full h-screen flex justify-center items-center">
        <img src={heroImage} alt="Community Event" className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <div className="absolute bg-black bg-opacity-50 p-8 rounded-md text-center">
          <h1 className="text-5xl font-extrabold text-yellow-400">Learning That Transforms</h1>
          <p className="text-lg mt-4 max-w-xl text-center mx-auto">
            ADESUA SESA is a movement where learning sparks change. We coordinate purpose-driven projects, connect underserved communities to opportunity, and empower students to lead with vision.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <Link to="/events" className="bg-yellow-400 text-black px-6 py-3 text-lg font-semibold hover:bg-yellow-500 transition">
              View Events
            </Link>
            <Link to="/partnerships#partnership-support" className="border border-yellow-400 text-yellow-400 px-6 py-3 text-lg font-semibold hover:bg-yellow-400 hover:text-black transition">
              Support Us
            </Link>
          </div>
        </div>
      </div>

      {/* Tagline Options Section */}
      <section className="p-4 bg-gray-700 w-full text-gray-400 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {taglineOptions.map((option, index) => (
            <div key={index} className="py-6 bg-gray-950 bg-opacity-25 backdrop-blur-xl rounded-4xl shadow-xl transform transition-all duration-300">
              {option.icon}
              <div className="flex flex-col items-start justify-center">
                <FaAngleDown
                  onClick={()=>handleToggle(index)}
                  className={`text-yellow-600 mb-4 cursor-pointer transition-transform duration-300 ${option.showText ? 'rotate-180' : ''}`}
                  size={24}
                />
                <h3 key={index} className ={`text-lg w-full transition-all duration-300 font-semibold ${option.showText ? 'inline-block' : 'hidden'}`}>{option.text}</h3>
              </div>
            </div>
            ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <h2 className="text-4xl font-extrabold mb-6">Our Mission</h2>
        <p className="text-lg md:w-3/4 mx-auto text-gray-100">
          To ignite transformational learning by empowering students to explore their authentic paths, solve real-world challenges, and lead purpose-driven projects that bridge opportunity gaps across communities and cultures.
        </p>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
        <h2 className="text-4xl font-extrabold mb-6">Our Vision</h2>
        <p className="text-lg md:w-3/4 mx-auto text-gray-100">
          A world where every learner is seen, heard, and guided to create change—where education moves beyond systems to uncover passion, build purpose, and empower global citizenship.
        </p>
      </section>

    </div>
  );
};

export default Home;
