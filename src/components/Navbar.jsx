import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { UserCircle, ShieldCheck } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [extraDropdownOpen, setExtraDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (dropdownOpen) setDropdownOpen(false);
    if (extraDropdownOpen) setExtraDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    if (extraDropdownOpen) setExtraDropdownOpen(false);
  };

  const toggleExtraDropdown = () => {
    setExtraDropdownOpen(!extraDropdownOpen);
    if (dropdownOpen) setDropdownOpen(false);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
    if (adminDropdownOpen) setAdminDropdownOpen(false);
  };

  const toggleAdminDropdown = () => {
    setAdminDropdownOpen(!adminDropdownOpen);
    if (userDropdownOpen) setUserDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-1 shadow-lg' : 'py-2'
        }`}
      style={{
        background: scrolled
          ? 'rgba(0, 9, 87, 0.95)'
          : 'linear-gradient(to bottom, rgba(0, 9, 87, 1), rgba(0, 9, 87, 0.8))',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-2 mx-auto">
        <a href="/" className="z-20 flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full"
            style={{ background: 'linear-gradient(135deg, #2D336B, #001A6E)' }}>
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L20 20H4L12 4Z" fill="currentColor" />
            </svg>
          </div>
          <span className="self-center text-2xl font-bold text-white whitespace-nowrap">
            Tridenzic
          </span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="z-20 inline-flex items-center justify-center w-10 h-10 p-2 text-white rounded-lg md:hidden hover:bg-opacity-20 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
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
          className={`${menuOpen ? "block" : "hidden"
            } items-center justify-between font-medium w-full md:flex md:w-auto md:order-1 transition-all duration-300`}
          id="mega-menu-full"
        >
          <ul className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-2 md:mt-0 md:border-0"
            style={{ background: menuOpen ? '#000957' : 'transparent' }}>
            <li>
              <a
                href="/"
                className="block px-4 py-2 text-base text-white rounded hover:bg-white hover:bg-opacity-10 md:p-3"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full px-4 py-2 text-base text-white rounded md:w-auto hover:bg-white hover:bg-opacity-10 md:p-3"
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
                  className="absolute z-10 p-4 mt-1 rounded-lg shadow-lg animate-fadeIn"
                  style={{
                    background: 'rgba(0, 9, 87, 0.97)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  <ul className="grid gap-4 sm:grid-cols-2 min-w-[400px]">
                    <li>
                      <a
                        href="/online-stores"
                        className="block p-3 rounded-lg hover:bg-white hover:bg-opacity-10"
                      >
                        <div className="font-semibold text-white">Online Stores</div>
                        <span className="text-sm text-gray-300">
                          Connect with third-party tools that you're already using.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/segmentation"
                        className="block p-3 rounded-lg hover:bg-white hover:bg-opacity-10"
                      >
                        <div className="font-semibold text-white">Segmentation</div>
                        <span className="text-sm text-gray-300">
                          Optimize your audience.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/marketing-crm"
                        className="block p-3 rounded-lg hover:bg-white hover:bg-opacity-10"
                      >
                        <div className="font-semibold text-white">Marketing CRM</div>
                        <span className="text-sm text-gray-300">
                          Centralize customer data.
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="relative">
              <button
                onClick={toggleExtraDropdown}
                className="flex items-center justify-between w-full px-4 py-2 text-base text-white rounded md:w-auto hover:bg-white hover:bg-opacity-10 md:p-3"
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
                  className="absolute z-10 p-4 mt-1 rounded-lg shadow-lg animate-fadeIn"
                  style={{
                    background: 'rgba(0, 9, 87, 0.97)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  <ul className="grid gap-4 sm:grid-cols-2 min-w-[400px]">
                    <li>
                      <a
                        href="/faq"
                        className="block p-3 rounded-lg hover:bg-white hover:bg-opacity-10"
                      >
                        <div className="font-semibold text-white">FAQs</div>
                        <span className="text-sm text-gray-300">
                          Frequently asked questions.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/support"
                        className="block p-3 rounded-lg hover:bg-white hover:bg-opacity-10"
                      >
                        <div className="font-semibold text-white">Support</div>
                        <span className="text-sm text-gray-300">
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
                className="block px-4 py-2 text-base text-white rounded hover:bg-white hover:bg-opacity-10 md:p-3"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block px-4 py-2 text-base text-white rounded hover:bg-white hover:bg-opacity-10 md:p-3"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="block px-4 py-2 text-base text-white rounded hover:bg-white hover:bg-opacity-10 md:p-3"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block px-4 py-2 text-base text-white rounded hover:bg-white hover:bg-opacity-10 md:p-3"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Avatar Buttons Container */}
          <div className="flex items-center gap-2 mt-3 ml-0 md:mt-0 md:ml-4">
            {/* User Avatar Button */}
            <div className="relative">
              <button
                onClick={toggleUserDropdown}
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full hover:shadow-lg hover:translate-y-[-2px] focus:outline-none"
                style={{
                  background: 'linear-gradient(90deg, #2D336B, #001A6E)',
                  boxShadow: '0 2px 6px rgba(0,9,87,0.3)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <UserCircle className="w-6 h-6 text-white" />
              </button>
              {userDropdownOpen && (
                <div className="absolute right-0 z-10 w-48 mt-2 overflow-hidden rounded-lg shadow-lg animate-fadeIn"
                  style={{
                    background: 'rgba(0, 9, 87, 0.97)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                  <a href="/login" className="block px-4 py-2 text-sm text-white hover:bg-white hover:bg-opacity-10">
                    Login
                  </a>
                  <a href="/signup" className="block px-4 py-2 text-sm text-white hover:bg-white hover:bg-opacity-10">
                    Sign Up
                  </a>
                </div>
              )}
            </div>

            {/* Admin Avatar Button */}
            <div className="relative">
              <button
                onClick={toggleAdminDropdown}
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full hover:shadow-lg hover:translate-y-[-2px] focus:outline-none"
                style={{
                  background: 'linear-gradient(90deg, #4B0082, #800080)',
                  boxShadow: '0 2px 6px rgba(75,0,130,0.3)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <ShieldCheck className="w-6 h-6 text-white" />
              </button>
              {adminDropdownOpen && (
                <div className="absolute right-0 z-10 w-48 mt-2 overflow-hidden rounded-lg shadow-lg animate-fadeIn"
                  style={{
                    background: 'rgba(75, 0, 130, 0.97)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                  <a href="/admin/dashboard" className="block px-4 py-2 text-sm text-white hover:bg-white hover:bg-opacity-10">
                    Admin Dashboard
                  </a>
                  <a href="/admin/settings" className="block px-4 py-2 text-sm text-white hover:bg-white hover:bg-opacity-10">
                    Settings
                  </a>
                  <a href="/admin/logout" className="block px-4 py-2 text-sm text-white hover:bg-white hover:bg-opacity-10">
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Add keyframes for dropdown animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.2s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default Navbar;