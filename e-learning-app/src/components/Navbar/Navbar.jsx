import React, { useState } from "react";
import { NavbarMenu } from "../../assets/mockData/data";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu";
import Toggle from "./Toggle";
const Navbar = ({ toggleTheme, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container flex justify-between items-center py-6 flex-wrap  ">
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold ">
            <MdComputer className="text-3xl text-secondary dark:text-secondary-dark" />
            <p className="dark:text-textColor-dark">E-TUTOR</p>
          </div>
          {/*  Menu Section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block text-textColor dark:text-textColor-dark text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary dark:hover:text-secondary-dark transition-all duration-300 font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* dark mode */}
          <div className=" space-x-6">
            <Toggle toggleTheme={toggleTheme} darkMode={darkMode} />
          </div>
          {/*  CTA Button Section */}
          <div className="hidden lg:block space-x-4">
            <button className="font-semibold dark:text-textColor-dark">
              Sign in
            </button>
            <button className="text-white bg-secondary dark:bg-secondary-dark font-semibold rounded-full px-6 py-2">
              {" "}
              Register
            </button>
          </div>
          {/* mobile Hamburger Menu */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.div>

      {/*  Mobile Menu */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
