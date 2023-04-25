import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api_endpoint from "../utils/config";

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleClick = (path) => {
    setActiveTab(path);
    if (path === "/more") {
      setDropdownVisible(!dropdownVisible);
    } else {
      setDropdownVisible(false);
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
    <div className=" bg-maroon flex items-center justify-center border-b-4 border-maroon-900">
      <div className=" container  w-[90%] h-[20%] flex items-center  justify-between ">
        <div class="flex items-center  justify-center ">
          <div class="flex flex-col items-center">
            <Link to="/">
              <img
                src="./LOGO3.png"
                alt="Logo"
                class="text-white bg-transparent"
              />
            </Link>
            <span class="text-green-600 font-semibold">
              BASANI PRIMARY SCHOOL
            </span>
          </div>
        </div>

        <div>
          <nav className="hi">
            <ul className="flex justify-between items-center">
              <li>
                <Link
                  to="/"
                  className={`text-black-500 font-bold no-underline mr-4 ${isActive(
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
                  className={`text-black-500 font-bold no-underline mr-4 ${isActive(
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
                  className={`text-black-500 font-bold no-underline mr-4 ${isActive(
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
                  className={`text-black-500 font-bold no-underline mr-4 ${isActive(
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
                  className={`text-balck-500 font-bold no-underline mr-4 ${isActive(
                    "/events"
                  )} hover:text-gray-300`}
                  onClick={() => handleClick("/events")}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="teachers"
                  className={`text-black-500 font-bold no-underline mr-4 ${isActive(
                    "/teachers"
                  )}hover:text-gray-300 `}
                  onClick={() => handleClick("/teachers")}
                >
                  Our Team
                </Link>
              </li>
              <li>
                <div className="relative">
                  <button
                    className={`text-black-500 font-bold no-underline mr-4 focus:outline-none hover:text-gray-300`}
                    onClick={() => handleClick("/more")}
                  >
                    More <FontAwesomeIcon icon={faChevronDown} className="" />
                  </button>
                  {dropdownVisible && (
                    <ul className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
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
                      <li>
                        <Link
                          to="/vacancies"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          onClick={() => handleClick("/vacancies")}
                        >
                          Vacancies
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              {isLoggedIn && (
                <li>
                  {" "}
                  <li>
                    <Link
                      to="/login"
                      className={`text-black-500 font-bold no-underline mr-4 ${isActive(
                        "/login"
                      )}hover:text-gray-300 `}
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </li>
                </li>
              )}

              <li></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
