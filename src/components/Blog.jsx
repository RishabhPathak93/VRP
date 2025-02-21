import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      title: "How to Build Your MVP Fast and Efficiently",
      excerpt:
        "Learn the key strategies and tools to quickly develop a Minimum Viable Product (MVP) that gets you to market faster...",
      date: "January 15, 2025",
      image: "https://via.placeholder.com/400x250",
      link: "/blog/BlogDetail",
    },
    {
      title: "The Importance of Source Code Documentation for Startups",
      excerpt:
        "Effective source code documentation ensures better collaboration and smoother onboarding for new developers...",
      date: "January 10, 2025",
      image: "https://via.placeholder.com/400x250",
      link: "/blog/source-code-documentation",
    },
    {
      title: "Leveraging AI and Machine Learning in MVP Development",
      excerpt:
        "Explore how integrating AI and ML in your MVP can help make smarter decisions, improve user experience, and scale...",
      date: "January 5, 2025",
      image: "https://via.placeholder.com/400x250",
      link: "/blog/ai-in-mvp-development",
    },
  ];

  return (
    <div className="blog-section py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
          Our Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="blog-card   border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                src={post.image}
                alt={post.title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {post.title}
                </h3>
                <p className="text-base text-gray-500 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center text-gray-500 dark:text-gray-400 text-sm">
                  <span>{post.date}</span>
                  <a
                    href={post.link}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
