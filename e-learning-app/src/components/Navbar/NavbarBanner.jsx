import React, { useState } from "react";
import { motion } from "framer-motion";

const NavbarBanner = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-primary dark:bg-primary-dark text-sm text-center font-semibold p-1 hidden lg:block relative"
      >
        Are you a University or School Student for an Online tutoring
        partnership?
        <a href="#" className="text-secondary dark:text-secondary-dark ml-2">
          Talk to us
        </a>
        <div
          className="absolute top-1/2 right-10 cursor-pointer -translate-y-1/2"
          onClick={() => setIsOpen(false)}
        >
          X
        </div>
      </motion.div>
    )
  );
};

export default NavbarBanner;