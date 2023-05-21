import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Email, Submit } from "../UserInput";
import { apiRequest } from "../../utils/formHelpers";
import api_endpoint from "../../utils/config";

const ForgotPassword = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState({});
  const [inputData, setInputData] = useState({
    email: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    await apiRequest(`${api_endpoint}/api/forgotpassword`, inputData)
      .then((res) => {
        setMessage(res.message);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevInputData) => ({
      ...prevInputData,
      [name]: value,
    }));

    setError("");
    setMessage("");
  };

  return (
    <div className="flex justify-center h-screen">
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col w-1/2 justify-center space-y-4 md:shadow-2xl"
      >
        <div className=" flex justify-center items-center">

        {error.message && <p className="text-red-500">{error.message}</p>}
        {message && <p className="text-green-500">{message}</p>}

        </div>
 

        <div className="bg-gray-800 h-10 flex items-center justify-center mb-10">
          <h2 className="flex justify-center m-20 font-bold text-white">
            Forgot Password
          </h2>
        </div>

        <Email value={inputData.email} onChange={handleInputChange} required />

        <Submit value="Reset" bgColor="bg-green-600" className="m-10 pb-10" />

        <p className="text-center text-sm">
          Remember your password?{" "}
          <Link className="text-blue-500 font-bold" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
