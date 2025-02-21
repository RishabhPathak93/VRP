import { FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-white" style={{ background: 'linear-gradient(135deg, #2D336B, #001A6E)' }}>
      <div className="container px-6 pt-4 pb-3 mx-auto">
        <div className="md:flex md:justify-between">
          {/* Logo section */}
          <div className="mb-8 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold text-white whitespace-nowrap">
                Tridenzic
              </span>
            </a>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-white uppercase">
                Resources
              </h2>
              <ul className="font-medium text-gray-400">
                <li className="mb-3">
                  <a href="https://flowbite.com/" className="transition-colors hover:text-white hover:underline">
                    Tridenzic
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="transition-colors hover:text-white hover:underline">
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-white uppercase">
                Follow us
              </h2>
              <ul className="font-medium text-gray-400">
                <li className="mb-3">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="transition-colors hover:text-white hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="transition-colors hover:text-white hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="font-medium text-gray-400">
                <li className="mb-3">
                  <a href="#" className="transition-colors hover:text-white hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Bottom section */}
        <div className="flex flex-row items-center justify-center gap-10 text-center">
          <span className="text-sm text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Tridenzic
            </a>
            . All Rights Reserved.
          </span>

          {/* Social icons */}
          <div className="flex mt-4 space-x-6 sm:mt-0">
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <FaDiscord className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;