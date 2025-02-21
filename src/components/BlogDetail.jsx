import { motion } from "framer-motion";
import Ribbons from "../components/Ribbons";

const BlogDetail = () => {
  const blogPost = {
    title: "How to Build Your MVP Fast and Efficiently",
    content:
      "Building a Minimum Viable Product (MVP) quickly and efficiently is crucial for startups and entrepreneurs. In this post, we explore the best practices and tools that can help you achieve your goal of getting a product to market faster...",
    author: "John Doe",
    date: "January 15, 2025",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6 py-16">
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl mt-5 overflow-hidden border border-gray-700 shadow-lg bg-black/30 backdrop-blur-xl rounded-2xl"
      >
        {/* Blog Image */}
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="object-cover w-full h-80 rounded-t-2xl"
        />

        <div className="p-8">
          {/* Title & Metadata */}
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-extrabold leading-tight text-white"
          >
            {blogPost.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-3 text-sm text-gray-400"
          >
            Published on <span className="text-cyan-400">{blogPost.date}</span> by{" "}
            <span className="font-medium text-gray-200">{blogPost.author}</span>
          </motion.p>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 text-lg leading-relaxed text-gray-300"
          >
            <p>{blogPost.content}</p>
            <p className="mt-4 text-gray-400">
              Continue reading to learn about additional tips and insights that will help you
              build an MVP that meets user expectations.
            </p>
          </motion.div>

          {/* Back to Blog Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex justify-start mt-8"
          >
            <a
              href="/blog"
              className="px-6 py-3 text-base font-medium text-white transition duration-300 rounded-lg shadow-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:scale-105"
            >
              ← Back to Blog
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogDetail;
