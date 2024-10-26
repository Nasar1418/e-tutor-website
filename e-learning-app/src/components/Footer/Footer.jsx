import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import FooterImg from "../../assets/footer.jpg";

const FooterBg = {
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom center",
};

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div style={FooterBg} className="rounded-t-3xl">
      <div className="bg-primary/5 dark:bg-[#1a1a1a]">
        <div className="container">
          <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 dark:border-gray-700/10 text-black dark:text-gray-300">
            {/* Brand Info Section */}
            <div className="py-8 px-4 space-y-4">
              <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                <MdComputer className="text-secondary dark:text-secondary-dark text-4xl" />
                <p className="">E-Tutor</p>
              </div>
              <p className="dark:text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet, corporis!
              </p>
              <div className="flex items-center justify-start gap-5 !mt-6">
                <a
                  href="#"
                  className="hover:text-secondary dark:hover:text-secondary-dark duration-200"
                >
                  <HiLocationMarker className="text-3xl" />
                </a>
                <a
                  href="#"
                  className="hover:text-secondary dark:hover:text-secondary-dark duration-200"
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a
                  href="#"
                  className="hover:text-secondary dark:hover:text-secondary-dark duration-200"
                >
                  <FaFacebook className="text-3xl" />
                </a>
                <a
                  href="#"
                  className="hover:text-secondary dark:hover:text-secondary-dark duration-200"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
            {/* Footer Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5 dark:text-gray-200">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a
                      href="#"
                      className="hover:text-secondary dark:hover:text-secondary-dark duration-200"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-secondary dark:hover:text-secondary-dark duration-200"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-secondary dark:hover:text-secondary-dark duration-200"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-secondary dark:hover:text-secondary-dark duration-200"
                    >
                      Login
                    </a>
                  </li>
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5 dark:text-gray-200">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a
                      href="#"
                      className="hover:text-secondary dark:hover:text-secondary-dark duration-200"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-secondary dark:hover:text-secondary-dark duration-200"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-secondary dark:hover:text-secondary-dark duration-200"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-secondary dark:hover:text-secondary-dark duration-200"
                    >
                      Login
                    </a>
                  </li>
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5 dark:text-gray-200">
                  Company Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a
                      href="#"
                      className="hover:text-secondary dark:hover:text-secondary-dark duration-200"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-secondary dark:hover:text-secondary-dark duration-200"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-secondary dark:hover:text-secondary-dark duration-200"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-secondary dark:hover:text-secondary-dark duration-200"
                    >
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-0">
            <div className="text-center w-full py-6 border-t-2 border-gray-800/10 dark:border-gray-700/10">
              <span className="text-sm text-black/60 dark:text-gray-400">
                &copy; {year} Developed by Nasar Vali. <br /> All rights
                reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
