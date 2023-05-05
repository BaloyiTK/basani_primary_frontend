import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ handleLogout }) => {
  return (
    <div className="absolute bg-white rounded-lg shadow-md py-2 mt-2">
      <Link
        to="/dashboard"
        className="block px-4 py-2 text-black-500 hover:bg-gray-100"
      >
        Dashboard
      </Link>
      <Link
        to="/profile"
        className="block px-4 py-2 text-black-500 hover:bg-gray-100"
      >
        Profile
      </Link>
      <button
        onClick={handleLogout}
        className="block w-full text-left px-4 py-2 text-black-500 hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  );
};

export default DropdownMenu;
