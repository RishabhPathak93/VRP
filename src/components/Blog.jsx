import { motion } from "framer-motion";
import TiltedCard from "./TiltedCard";

const Blog = () => {
  const blogPosts = [
    {
      title: "How to Build Your MVP Fast and Efficiently",
      excerpt:
        "Learn the key strategies and tools to quickly develop a Minimum Viable Product (MVP) that gets you to market faster...",
      date: "January 15, 2025",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
      link: "/blog/BlogDetail",
      gradient: "from-purple-500/20 via-blue-500/20 to-cyan-500/20"
    },
    {
      title: "The Importance of Source Code Documentation for Startups",
      excerpt:
        "Effective source code documentation ensures better collaboration and smoother onboarding for new developers...",
      date: "January 10, 2025",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
      link: "/blog/source-code-documentation",
      gradient: "from-orange-500/20 via-red-500/20 to-purple-500/20"
    },
    {
      title: "Leveraging AI and Machine Learning in MVP Development",
      excerpt:
        "Explore how integrating AI and ML in your MVP can help make smarter decisions, improve user experience, and scale...",
      date: "January 5, 2025",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
      link: "/blog/ai-in-mvp-development",
      gradient: "from-green-500/20 via-teal-500/20 to-blue-500/20"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen px-4 py-16" 
      style={{ background: 'linear-gradient(135deg, #000957, #2D336B)' }}>
      <div className="absolute inset-0 z-100">
     
      </div>
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-4xl font-extrabold text-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Our Latest Blog Posts
          </span>
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col items-center"
            >
              <TiltedCard
                imageSrc={post.image}
                altText={post.title}
                captionText={post.title}
                containerHeight="300px"
                containerWidth="100%"
                imageHeight="300px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="w-full h-full p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-[15px]">
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-300 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-cyan-300">
                        {post.date}
                      </span>
                      <motion.a
                        href={post.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 text-sm text-white transition duration-300 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/25"
                      >
                        Read More
                      </motion.a>
                    </div>
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

export default Blog;