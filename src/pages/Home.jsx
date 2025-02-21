import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import BusModel from "../components/BusModel"; // Ensure the path is correct
import { Box } from "@react-three/drei";

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
                🚀 Tridenzic Infotech Solutions
              </div>

              <motion.h1
                className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
              >
                ♻️ Optimize Waste Collection with AI & Smart Bins
              </motion.h1>

              <motion.p
                className="mb-8 text-base leading-relaxed text-gray-200 md:text-lg lg:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                🌍 Efficient, Sustainable & Cost-Effective Waste Management
              </motion.p>

              <motion.p
                className="mb-8 text-sm leading-relaxed text-gray-300 md:text-base lg:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Reduce operational costs and carbon footprint with our AI-powered route optimization and smart bins. Our intelligent waste management system ensures timely pickups, prevents overflowing waste, and maximizes efficiency.
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
                aria-label="Get a demo"
                style={{
                  background: 'linear-gradient(90deg, #2D336B, #001A6E)',
                  boxShadow: '0 4px 10px rgba(0,9,87,0.3)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                Get a demo
              </a>
            </motion.div>
          </section>

          {/* Right 3D Bus Model Section */}
          <motion.section
            className="flex justify-center w-full md:w-1/2 md:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Canvas>
              <ambientLight />
              <Box args={[1, 1, 1]} position={[0, 1, 0]} wireframe>
                <meshStandardMaterial color="red" />
              </Box>
              <Suspense fallback={<div style={{ color: "white" }}>Loading Bus...</div>}>
                <BusModel />
              </Suspense>
            </Canvas>

          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Home;
