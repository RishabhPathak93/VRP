import HomeImage from "../assets/Home.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex items-center min-h-screen pt-16 md:pt-0" style={{ background: 'linear-gradient(to bottom, #000957, #0f1546)' }}>
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:gap-16">
          {/* Left Text Section */}
          <section className="flex flex-col items-start w-full text-white md:w-1/2">
            <motion.div
              className="mb-8 text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="mb-3 text-sm font-bold uppercase" style={{ color: '#8AABFF' }}>
                Tridenzic Infotech Solutions
              </div>

              <motion.h1
                className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
              >
                Build Your MVP, Fast, Affordable, and Stress-Free
              </motion.h1>

              <motion.p
                className="mb-8 text-base leading-relaxed text-gray-200 md:text-lg lg:text-xl"
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
              className="flex justify-center w-full md:justify-start"
            >
              <a
                href="/sign-up/"
                className="inline-block font-medium text-white text-sm md:text-base px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
                aria-label="Book a demo"
                style={{ 
                  background: 'linear-gradient(90deg, #2D336B, #001A6E)',
                  boxShadow: '0 4px 10px rgba(0,9,87,0.3)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                Book a demo
              </a>
            </motion.div>
          </section>

          {/* Right Image Section */}
          <motion.section
            className="flex justify-center w-full md:w-1/2 md:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 rounded-xl opacity-70" 
                style={{ 
                  background: 'radial-gradient(circle at center, rgba(45,51,107,0.4), rgba(0,9,87,0.8))',
                  filter: 'blur(20px)',
                  transform: 'translate(10px, 10px)'
                }} 
              />
              <img
                src={HomeImage}
                alt="AI-powered solutions for building MVPs quickly"
                className="relative z-10 w-full h-auto max-w-md shadow-2xl rounded-xl md:max-w-full"
                style={{ border: '1px solid rgba(138, 171, 255, 0.3)' }}
              />
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Home;