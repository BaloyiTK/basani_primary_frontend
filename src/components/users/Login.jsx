import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import api_endpoint from "../../utils/config";
axios.defaults.withCredentials = true;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState()
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post(
        `${api_endpoint}/api/login`,
        { email, password },
        { withCredentials: true, credentials: "include" }
      )
      .then((response) => {
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.response.data.message)
      });
  };


  return (
    <div className="bg-gray-100 min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-gray-500 shadow-lg transform skew-y-0 rotate-6 sm:rotate-12 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-gradient-to-r from-gray-300 to-gray-200 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <p className="text-red-400 flex justify-center">
                {error && error}
              </p>
              <h2 className="text-center text-3xl font-extrabold text-gray-800">
                Admin Login
              </h2>
            </div>
            <form
              onSubmit={handleSubmit}
              className="w-[90%] flex flex-col gap-10 py-10 md:w-full"
            >
              <div className="flex flex-col">
                <label
                  className="text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none border shadow-lg rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setError("");
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="appearance-none border shadow-lg rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
                <Link
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  to="/forgot-password"
                >
                  Forgot Password?
                </Link>
              </div>
            </form>
            <div className="text-center">
              <p className="text-gray-600 text-sm">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-bold text-blue-500 hover:text-blue-800"
                >
                  Register here.
                </Link>
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm">
                Want to go back to the website?{" "}
                <Link
                  to="/"
                  className="font-bold text-blue-500 hover:text-blue-800"
                >
                  Visit our website.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  
};

export default Login;
