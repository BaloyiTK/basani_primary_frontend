import React, { useState } from "react";
import { Password, Submit, UrlLink } from "../UserInput";
import axios from "axios";

import { apiRequest } from "../../utils/formHelpers";
import { useNavigate } from "react-router-dom";
import api_endpoint from "../../utils/config";
axios.defaults.withCredentials = true;

const ResetPassword = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [error, setError] = useState({});
  const [resetLink, setResetLink] = useState("");
  const [message, setMessage] = useState("");
  const [inputData, setInputData] = useState({
    password: "",
    confirmPassword: "",
  });

  const toggleShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevInputData) => ({
      ...prevInputData,
      [name]: value,
    }));
    setMessage("");
    setError("");
    setResetLink("");
  };

  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inputData.password !== inputData.confirmPassword) {
      setError({ message: "Passwords do not match" });
      return;
    }

    try {
      const myKeyValues = window.location.search;
      const urlParams = new URLSearchParams(myKeyValues);
      const token = urlParams.get("token");

      axios
        .post(
          `${api_endpoint}/api/resetpassword?token=${token}`,
          inputData,
          { withCredentials: true }
        )
        .then((response) => {
          setMessage(response.data.message);
        })
        .catch((error) => {
          setError(error.response.data);
          setResetLink(error.response.data.link);
        });
    } catch (error) {
      console.log(error);
      setError(error.response);
      setResetLink(error.response);
    }
  };

  return (
    <div className="w-[95%] mx-auto md:w-1/3 mt-20">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 md:shadow-2xl"
      >
       

        {resetLink && (
          <UrlLink
            linkTo={"/forgot-password"}
            typeD={"Please"}
            type={"request new link"}
            // onClick={handleResetClick}
          />
        )}

        {message && <li className="text-green-600">{message}</li>}

        <div className="bg-gray-800 h-10 flex items-center justify-center mb-10">
          <h2 className=" flex justify-center m-20 font-bold text-white ">
            Password Reset
          </h2>
        </div>

        <Password
          value={inputData.password}
          name="password"
          id="password"
          onChange={handleInputChange}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
          placeholder="new password"
          required
        />

        <Password
          value={inputData.confirmPassword}
          name="confirmPassword"
          id="confirmPassword"
          onChange={handleInputChange}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
          placeholder="confirm password"
          required
        />

        <Submit value="Submit" bgColor="bg-green-600" />
      </form>
    </div>
  );
};

export { ResetPassword };
