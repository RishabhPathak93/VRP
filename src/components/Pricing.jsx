import { motion } from "framer-motion";
import TiltedCard from "./TiltedCard";
import Ribbons from "../components/Ribbons";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Basic Plan",
      price: "$499",
      duration: "/project",
      features: [
        "Frontend Development",
        "Backend Development",
        "Basic Documentation",
        "1 Month Support"
      ],
      gradient: "from-purple-500/20 via-blue-500/20 to-cyan-500/20",
      image: "https://source.unsplash.com/600x400/?coding,technology"
    },
    {
      title: "Standard Plan",
      price: "$999",
      duration: "/project",
      features: [
        "Frontend & Backend Development",
        "Source Code Documentation",
        "AIML Application",
        "2 Months Support"
      ],
      gradient: "from-orange-500/20 via-red-500/20 to-purple-500/20",
      image: "https://source.unsplash.com/600x400/?developer,software"
    },
    {
      title: "Premium Plan",
      price: "$1499",
      duration: "/project",
      features: [
        "Complete Web & Mobile App",
        "Advanced AIML Integration",
        "End-to-End Testing",
        "6 Months Support"
      ],
      gradient: "from-green-500/20 via-teal-500/20 to-blue-500/20",
      image: "https://source.unsplash.com/600x400/?ai,technology"
    }
  ];

  return (
    <div className="min-h-screen px-4 py-16" style={{ background: 'linear-gradient(135deg, #000957, #2D336B)' }}>
    <div className="absolute inset-0 z-100">
        <Ribbons
          baseThickness={30}
          colors={['#00F5FF', '#B400FB', '#FC4A9E']}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={false}
          enableShaderEffect={true}
        />
      </div>
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-4xl font-extrabold text-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Our Pricing Plans
          </span>
        </motion.h2>

        <motion.div 
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div key={index} className="flex flex-col items-center">
              <TiltedCard
                captionText={plan.title}
                containerHeight="300px"
                containerWidth="100%"
                imageHeight="300px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                imageSrc={plan.image} 
                overlayContent={
                  <div className="w-full h-full p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-[15px]">
                    <h3 className="mb-2 text-xl font-semibold text-white">{plan.title}</h3>
                    <p className="text-3xl font-extrabold text-white">{plan.price}
                      <span className="text-xl font-normal text-gray-300"> {plan.duration}</span>
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-gray-300">
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 mt-4 text-sm text-white transition duration-300 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/25"
                    >
                      Choose Plan
                    </motion.button>
                  </div>
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
