import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

const MoreDropdown = ({ setMenuOpen, isMobile }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleClick = (path) => {
    setActiveTab(path);
    if (path === "/more") {
      setDropdownVisible(!dropdownVisible);
    } else {
      setDropdownVisible(false);
      if (isMobile) {
        setMenuOpen(false);
      }
    }
  };

  return (
    <li>
      <div className="relative p-5 md:p-0 flex justify-center items-center">
        <button
          className={`text-black-500 font-bold no-underline mr-4 focus:outline-none hover:text-gray-300`}
          onClick={() => handleClick("/more")}
        >
          More <FontAwesomeIcon icon={faChevronDown} className="" />
        </button>
        {dropdownVisible && (
          <ul className="absolute top-2/3 md:top-full md:left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            <li>
              <Link
                to="/gallery"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => handleClick("/gallery")}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/uniform"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => handleClick("/uniform")}
              >
                Uniform
              </Link>
            </li>
          </ul>
        )}
      </div>
    </li>
  );
};

export default MoreDropdown;
