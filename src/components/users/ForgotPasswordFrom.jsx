import React, { useState } from "react";
import { Email, Submit } from "../UserInput";
import { apiRequest } from "../../utils/formHelpers";
import api_endpoint from "../../utils/config";

const ForgotPassword = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState({});
  const [inputData, setInputData] = useState({
    email: "",
  });

  console.log(error)



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
    <div className=" flex justify-center">
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col p-4  mt-20 justify-center space-y-4 md:shadow-2xl"
      >

        {error.message &&  <p className="text-red-500">{error.message}</p>}
        <p className="text-green-500">{message}</p>
      

        <div className="bg-gray-800 h-10 flex items-center justify-center mb-10">
          <h2 className=" flex justify-center m-20 font-bold text-white ">
            Forgot Password
          </h2>
        </div>

        <Email value={inputData.email} onChange={handleInputChange} required />

        <Submit value="Reset" bgColor="bg-green-600" className="m-10 pb-10" />
      </form>
    </div>
  );
};

export default ForgotPassword;
