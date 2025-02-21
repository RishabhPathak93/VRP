import React from "react";

const Pricing = () => {
  return (
    <div className="pricing-section py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12">
          Our Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="pricing-card w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
              Basic Plan
            </h3>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">499</span>
              <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/project</span>
            </div>
            <ul className="space-y-5 my-7">
              <li className="flex items-center">
                <span className="text-base text-gray-500 dark:text-gray-400 ms-3">Frontend Development</span>
              </li>
              <li className="flex items-center">
                <span className="text-base text-gray-500 dark:text-gray-400 ms-3">Backend Development</span>
              </li>
              <li className="flex items-center">
                <span className="text-base text-gray-500 dark:text-gray-400 ms-3">Basic Documentation</span>
              </li>
              <li className="flex items-center">
                <span className="text-base text-gray-500 dark:text-gray-400 ms-3">1 Month Support</span>
              </li>
            </ul>
            <button className="btn bg-blue-600 text-white w-full py-2 px-6 rounded-lg">Choose Plan</button>
          </div>

          {/* Standard Plan */}
          <div className="pricing-card w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
              Standard Plan
            </h3>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">999</span>
              <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/project</span>
            </div>
            <ul className="space-y-5 my-7">
              <li className="flex items-center">
                <span className="text-base text-gray-500 dark:text-gray-400 ms-3">Frontend & Backend Development</span>
              </li>
              <li className="flex items-center">
                <span className="text-base text-gray-500 dark:text-gray-400 ms-3">Source Code Documentation</span>
              </li>
              <li className="flex items-center">
                <span className="text-base text-gray-500 dark:text-gray-400 ms-3">AIML Application</span>
              </li>
              <li className="flex items-center">
                <span className="text-base text-gray-500 dark:text-gray-400 ms-3">2 Months Support</span>
              </li>
            </ul>
            <button className="btn bg-blue-600 text-white w-full py-2 px-6 rounded-lg">Choose Plan</button>
          </div>

          {/* Premium Plan */}
          <div className="pricing-card w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
              Premium Plan
            </h3>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">1999</span>
              <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/project</span>
            </div>
            <ul className="space-y-5 my-7">
              <li className="flex items-center">
                <span className="text-base text-gray-500 dark:text-gray-400 ms-3">Complete MVP Development</span>
              </li>
              <li className="flex items-center">
                <span className="text-base text-gray-500 dark:text-gray-400 ms-3">Advanced AIML Solutions</span>
              </li>
              <li className="flex items-center">
                <span className="text-base text-gray-500 dark:text-gray-400 ms-3">Full Source Code Documentation</span>
              </li>
              <li className="flex items-center">
                <span className="text-base text-gray-500 dark:text-gray-400 ms-3">Unlimited Support</span>
              </li>
              <li className="flex items-center">
                <span className="text-base text-gray-500 dark:text-gray-400 ms-3">Deployment Assistance</span>
              </li>
            </ul>
            <button className="btn bg-blue-600 text-white w-full py-2 px-6 rounded-lg">Choose Plan</button>
          </div>

          {/* Enterprise Plan */}
          <div className="pricing-card w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
              Enterprise Plan
            </h3>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">4999</span>
              <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/project</span>
            </div>
            <ul className="space-y-5 my-7">
              <li className="flex items-center">
                <span className="text-base text-gray-500 dark:text-gray-400 ms-3">Custom Enterprise Solutions</span>
              </li>
              <li className="flex items-center">
                <span className="text-base text-gray-500 dark:text-gray-400 ms-3">Full Backend, Frontend, and API Development</span>
              </li>
              <li className="flex items-center">
                <span className="text-base text-gray-500 dark:text-gray-400 ms-3">Advanced AIML & AI Solutions</span>
              </li>
              <li className="flex items-center">
                <span className="text-base text-gray-500 dark:text-gray-400 ms-3">In-depth Documentation & Source Code</span>
              </li>
              <li className="flex items-center">
                <span className="text-base text-gray-500 dark:text-gray-400 ms-3">Unlimited Support & Maintenance</span>
              </li>
              <li className="flex items-center">
                <span className="text-base text-gray-500 dark:text-gray-400 ms-3">Dedicated Project Manager</span>
              </li>
            </ul>
            <button className="btn bg-blue-600 text-white w-full py-2 px-6 rounded-lg">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
