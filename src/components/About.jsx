import React from "react";
import Rishabh from "../assets/Rishabh.png"
const About = () => {
  return (
    <div className="px-6 py-16 w-full">
      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-lg p-16 gap-8 max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">About Tridenzic Infotech Solutions</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Comprehensive and Innovative Technology Solutions</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Tridenzic Infotech Solutions, we provide comprehensive and innovative technology solutions. 
            Our expertise covers MVP development, web development, full-stack projects, AI/ML integration, 
            and deep learning activities that help businesses transform and scale with ease.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our team of experts is committed to delivering top-notch solutions that are both efficient and scalable. 
            We help organizations implement cutting-edge technologies to meet their business needs in the ever-evolving digital landscape.
          </p>
          <button className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition">
            Contact Us
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <ul className="list-none text-gray-800 space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-green-500">&#10003;</span> MVP Development
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">&#10003;</span> Web Development
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">&#10003;</span> Full-Stack Projects
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">&#10003;</span> AI/ML Integration
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">&#10003;</span> Deep Learning Activities
            </li>
          </ul>
          <div className="mt-6">
            <img
              src="creation.jpg" // Replace with the correct image path
              alt="Creation Desk"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="text-center mt-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Meet Our Founder, CEO & CTO</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 bg-gradient-to-r from-blue-500 to-blue-300 p-16 rounded-xl shadow-lg w-full">
          <img
            src={Rishabh} 
            alt="Rishabh Pathak"
            className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-xl"
          />
          <div className="max-w-2xl text-left text-white">
            <h3 className="text-3xl font-semibold mb-4">Rishabh Pathak</h3>
            <p className="text-lg mb-4">
              Rishabh Pathak, the visionary Founder, CEO, and CTO of Tridenzic Infotech Solutions, holds a B.Tech degree
              in Artificial Intelligence and Data Science from Mumbai University. With years of hands-on experience, 
              he has honed his expertise in creating transformative AI-driven systems.
            </p>
            <p className="text-lg">
              Under his leadership, Tridenzic Infotech Solutions is revolutionizing industries by integrating cutting-edge 
              technologies such as AI, ML, and Deep Learning. His ability to create innovative systems that solve complex 
              problems has earned him recognition as a leader in the tech space.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
