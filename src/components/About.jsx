import { motion } from 'framer-motion';
import Rishabh from "../assets/Rishabh.png";

const About = () => {
  return (
    <div className="w-full min-h-screen px-6 py-16" 
      style={{ background: 'linear-gradient(135deg, #000957, #2D336B)' }}>
      <div className="absolute inset-0 z-100">
        
      </div>
      
      {/* About Section */}
      <div 
        className="flex flex-col items-center max-w-6xl gap-8 p-8 mx-auto mt-6 border shadow-xl md:flex-row backdrop-blur-lg bg-white/10 rounded-xl border-white/20 md:p-16"
      >
        {/* Left Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1"
        >
          <h2 className="mb-4 text-3xl font-bold text-white">About Tridenzic Infotech Solutions</h2>
          <h3 className="mb-4 text-xl font-semibold text-gray-200">Comprehensive and Innovative Technology Solutions</h3>
          <p className="mb-4 leading-relaxed text-gray-300">
            At Tridenzic Infotech Solutions, we provide comprehensive and innovative technology solutions. 
            Our expertise covers MVP development, web development, full-stack projects, AI/ML integration, 
            and deep learning activities that help businesses transform and scale with ease.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            Our team of experts is committed to delivering top-notch solutions that are both efficient and scalable. 
            We help organizations implement cutting-edge technologies to meet their business needs in the ever-evolving digital landscape.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 mt-4 font-semibold text-white transition duration-200 rounded-lg shadow-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-xl"
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-start flex-1 gap-6"
        >
          <ul className="w-full space-y-4 text-gray-200 list-none">
            {['MVP Development', 'Web Development', 'Full-Stack Projects', 'AI/ML Integration', 'Deep Learning Activities'].map((item, index) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                className="flex items-center gap-3 p-3 transition duration-200 border rounded-lg bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10"
              >
                <span className="text-xl text-green-400">✓</span>
                {item}
              </motion.li>
            ))}
          </ul>
          <motion.div 
            className="w-full mt-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src="/api/placeholder/400/300"
              alt="Creation Desk"
              className="h-auto max-w-full border shadow-lg rounded-xl border-white/20"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Founder Section */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <h2 className="mb-6 text-4xl font-bold text-white">Meet Our Founder, CEO & CTO</h2>
        <motion.div 
          className="flex flex-col items-center justify-center gap-8 p-8 border shadow-lg md:flex-row backdrop-blur-lg bg-white/10 md:p-16 rounded-xl border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            src={Rishabh} 
            alt="Rishabh Pathak"
            className="object-cover w-48 h-48 border-4 rounded-full shadow-xl border-white/50"
          />
          <div className="max-w-2xl text-left">
            <h3 className="mb-4 text-3xl font-semibold text-white">Rishabh Pathak</h3>
            <p className="mb-4 text-lg leading-relaxed text-gray-200">
              Rishabh Pathak, the visionary Founder, CEO, and CTO of Tridenzic Infotech Solutions, holds a B.Tech degree
              in Artificial Intelligence and Data Science from Mumbai University. With years of hands-on experience, 
              he has honed his expertise in creating transformative AI-driven systems.
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
              Under his leadership, Tridenzic Infotech Solutions is revolutionizing industries by integrating cutting-edge 
              technologies such as AI, ML, and Deep Learning. His ability to create innovative systems that solve complex 
              problems has earned him recognition as a leader in the tech space.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;