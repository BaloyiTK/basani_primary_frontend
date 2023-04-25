import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaKey, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom"





export const Username = ({ value, onChange, required }) => (
  <div className="relative">
    <FaUserCircle className="absolute left-4 bottom-1 top-1/2 transform -translate-y-1/2 text-gray-400" />
    <input
      type="text"
      name="username"
      id="username"
      value={value}
      onChange={onChange}
      placeholder="Username"
      className={`px-10 pr-4 py-2 border rounded-md w-full focus:outline-0 shadow-lg 
     
       focus:shadow-blue-500`}
      required={required} // Add this attribute to indicate that the field is required
    />
    <span className="absolute right-0 bottom-1 top-1/2 transform -translate-y-1/2 text-red-500">
      *
    </span>{" "}
  </div>
);

export const Email = ({ value, onChange, required }) => (
  <div className="relative">
    <MdEmail className="absolute left-4 bottom-1 top-1/2 transform -translate-y-1/2 text-gray-400" />
    <input
      type="email"
      name="email"
      id="email"
      value={value}
      onChange={onChange}
      placeholder="Email"
      className={`px-10 pr-4 py-2 border rounded-md w-full focus:outline-0 shadow-lg focus:shadow-blue-500`}
      required={required} // Add this attribute to indicate that the field is required
    />
    <span className="absolute right-0 bottom-1 top-1/2 transform -translate-y-1/2 text-red-500">
      *
    </span>{" "}
  </div>
);

export const Password = ({
  value,
  name,
  id,
  onChange,
  showPassword,
  toggleShowPassword,
  placeholder,
  required,
}) => (
  <div className="relative">
    <FaKey className="absolute left-4 bottom-1 top-1/2 transform -translate-y-1/2 text-gray-400" />

    {showPassword ? (
      <FaEyeSlash
        className="absolute right-4 bottom-1 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
        onClick={toggleShowPassword}
      />
    ) : (
      <FaEye
        className="absolute right-4 bottom-1 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
        onClick={toggleShowPassword}
      />
    )}
    <input
      type={showPassword ? "text" : "password"}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-10 pr-4 py-2 border rounded-md w-full focus:outline-0 shadow-lg focus:shadow-blue-500`}
      required={required}
    />

    <span className="absolute right-0 bottom-1 top-1/2 transform -translate-y-1/2 text-red-500">
      *
    </span>
  </div>
);

export const Submit = ({ value, bgColor }) => (
  <input
    type="submit"
    value={value}
    className={`${bgColor} text-white px-4  py-2 rounded-md self-center hover:opacity-[0.7]`}
  />
);

export const UrlLink = ({ linkTo, typeD, type, onClick }) => {
  return (
    <div className="text-sm ml-2 pb-3">
      <p className="inline-block mr-2">{typeD}</p>
      <Link
        to={linkTo}
        className=" text-blue-500 hover:text-blue-800 underline font-semibold cursor-pointer"
        onClick={onClick}
      >
        {type}
      </Link>
    </div>
  );
};
