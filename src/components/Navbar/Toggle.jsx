import React from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import the icons you need
const Toggle = ({ toggleTheme, darkMode }) => {
  return (
    <button onClick={toggleTheme} className="ml-4">
      {darkMode ? (
        <FaSun className="text-yellow-400 text-2xl" /> // Light mode icon
      ) : (
        <FaMoon className="text-indigo-500 text-2xl" /> // Dark mode icon
      )}
    </button>
  );
};

export default Toggle;
