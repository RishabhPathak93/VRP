import React from "react";
import { motion } from "framer-motion";  // Import framer-motion for animation

const BlogDetail = ({ match }) => {
  const blogPost = {
    title: "How to Build Your MVP Fast and Efficiently",
    content:
      "Building a Minimum Viable Product (MVP) quickly and efficiently is crucial for startups and entrepreneurs. In this post, we explore the best practices and tools that can help you achieve your goal of getting a product to market faster...",
    author: "John Doe",
    date: "January 15, 2025",
    image: "https://via.placeholder.com/800x400",
  };

  return (
    <div className="blog-detail py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="blog-detail-container   border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Blog Post Image */}
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-80 object-cover rounded-t-lg"
          />

          <div className="p-8">
            {/* Title and Date */}
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
              {blogPost.title}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
              Published on {blogPost.date} by <span className="font-medium">{blogPost.author}</span>
            </p>

            {/* Blog Post Content */}
            <motion.div
              className="blog-content text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p>{blogPost.content}</p>
              <p className="mt-4">
                Continue reading to learn about additional tips and insights that will help you build an MVP that meets user expectations.
              </p>
            </motion.div>

            {/* Back to Blog Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-full flex justify-start"
            >
              <a
                href="/blog"
                className="btn bg-blue-600 text-white text-sm md:text-base px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                aria-label="Back to blog"
              >
                Back to Blog
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetail;
