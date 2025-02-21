import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [extraDropdownOpen, setExtraDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleExtraDropdown = () => {
    setExtraDropdownOpen(!extraDropdownOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-10"
            alt="Tridenzic Logo"
          />
          <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">
            Tridenzic
          </span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } items-center justify-between font-medium w-full md:flex md:w-auto md:order-1`}
          id="mega-menu-full"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4  border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 px-4 text-lg text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-4 text-lg text-gray-900 rounded md :w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500"
              >
                Services
                <svg
                  className="w-3 h-3 ms-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div
                  className="absolute mt-2 bg-white shadow-lg rounded-lg border border-gray-200 p-4 dark:bg-gray-800 z-10"
                  id="mega-menu-full-dropdown"
                >
                  <ul className="grid gap-4 sm:grid-cols-2">
                    <li>
                      <a
                        href="/online-stores"
                        className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div className="font-semibold">Online Stores</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already using.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/segmentation"
                        className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div className="font-semibold">Segmentation</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Optimize your audience.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/marketing-crm"
                        className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div className="font-semibold">Marketing CRM</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Centralize customer data.
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <button
                onClick={toggleExtraDropdown}
                className="flex items-center justify-between w-full py-2 px-4 text-lg text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500"
              >
                More
                <svg
                  className="w-3 h-3 ms-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {extraDropdownOpen && (
                <div
                  className="absolute mt-2 bg-white shadow-lg rounded-lg border border-gray-200 p-4 dark:bg-gray-800 z-10"
                  id="mega-menu-extra-dropdown"
                >
                  <ul className="grid gap-4 sm:grid-cols-2">
                    <li>
                      <a
                        href="/faq"
                        className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div className="font-semibold">FAQs</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Frequently asked questions.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/support"
                        className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div className="font-semibold">Support</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          24/7 customer support.
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a
                href="/pricing"
                className="block py-2 px-4 text-lg text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 px-4 text-lg text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="block py-2 px-4 text-lg text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 px-4 text-lg text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* "Get Started" Button */}
          <button className="ml-0 mt-3 md:mt-0 md:ml-4 bg-blue-600 text-white text-lg font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;