import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api_endpoint from "../../utils/config";
import MoreDropdown from "./MoreDropdown";
import { useMediaQuery } from 'react-responsive';

const NavLinks = ({ setMenuOpen }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const history = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleClick = (path) => {
  

    setActiveTab(path);
    if (path === "/more") {
      setDropdownVisible(!dropdownVisible);
    } else {
      setDropdownVisible(false);
    }
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  const handleLogout = async () => {
    await axios
      .get(`${api_endpoint}/api/logout`, null)
      .then(() => {
        dispatch(authActions.logout());
        history("/login");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const isActive = (path) => {
    return location.pathname === path || activeTab === path
      ? `text-green-500`
      : "";
  };

  return (
    <ul className="absolute text-gray-200 mt-[7%] left-0 right-0 flex-col-1 justify-center items-center   bg-maroon-900 z-50 md:relative md:flex md:bg-white md:justify-between md:items-center md:mt-0 md:text-gray-900">
      {" "}
      <li>
        <Link
          to="/"
          className={`flex justify-center items-center p-5 md:p-0 text-black-500 font-bold no-underline mr-4 ${isActive(
            "/"
          )} hover:text-gray-300`}
          onClick={() => handleClick("/")}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className={`flex justify-center items-center p-5 md:p-0 text-black-500 font-bold no-underline mr-4 ${isActive(
            "/about"
          )} hover:text-gray-300`}
          onClick={() => handleClick("/about")}
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          className={`flex justify-center items-center p-5 md:p-0 text-black-500 font-bold no-underline mr-4 ${isActive(
            "/contact"
          )} hover:text-gray-300`}
          onClick={() => handleClick("/contact")}
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className={` flex justify-center items-center p-5 md:p-0 text-black-500 font-bold no-underline mr-4 ${isActive(
            "/dashboard"
          )} hover:text-gray-300`}
          onClick={() => handleClick("/dashboard")}
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          to="/events"
          className={` flex justify-center items-center p-5 md:p-0 text-balck-500 font-bold no-underline mr-4 ${isActive(
            "/events"
          )} hover:text-gray-300`}
          onClick={() => handleClick("/events")}
        >
          Events
        </Link>
      </li>
      <li>
        <Link
          to="team"
          className={` flex justify-center items-center p-5 md:p-0 text-black-500 font-bold no-underline mr-4 ${isActive(
            "/team"
          )}hover:text-gray-300 `}
          onClick={() => handleClick("/team")}
        >
          Our Team
        </Link>
      </li>
      <MoreDropdown />
      {isLoggedIn && (
        <li>
          <Link
            to="/login"
            className={`flex justify-center items-center p-5 md:p-0 text-black-500 font-bold no-underline mr-4 ${isActive(
              "/login"
            )}hover:text-gray-300 `}
            onClick={handleLogout}
          >
            Logout
          </Link>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
