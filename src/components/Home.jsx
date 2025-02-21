import React from "react";
import HomeImage from "../assets/Home.png"; // Rename the import
import { motion } from "framer-motion";  // Import framer-motion

const Home = () => {
  return (
    <div className="banner_85 bg-white dark:bg-gray-900 min-h-screen flex items-center pt-16 md:pt-0">
      {/* Added padding to prevent overlap with Navbar */}
      <div className="container mx-auto px-4 max-w-7.5xl"> {/* Adjusted to max-w-7.5xl */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
          {/* Left Text Section */}
          <section className="banner-leftTxt flex flex-col items-start text-gray-900 dark:text-white w-full md:w-1/2">
            <motion.div
              className="title-section mb-6 text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="subtitle text-sm uppercase text-blue-600 font-bold">
                Tridenzic Infotech Solutions
              </div>

              <motion.h1
                className="section-title text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Build Your MVP, Fast, Affordable, and Stress-Free
              </motion.h1>

              <motion.p
                className="content text-base md:text-lg lg:text-xl mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Transform your ideas into reality, quickly. We take your concept
                and turn it into a market-ready MVP in record time.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-full flex justify-center md:justify-start"
            >
              <a
                href="/sign-up/"
                className="btn bg-blue-600 text-white text-sm md:text-base px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                aria-label="Book a demo"
              >
                Book a demo
              </a>
            </motion.div>
          </section>

          {/* Right Image Section */}
          <motion.section
            className="banner-rightImg w-full md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.img
              src={HomeImage} 
              alt="AI-powered solutions for building MVPs quickly"
              className="rounded-lg shadow-lg w-full max-w-md md:max-w-full h-auto transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Home;
