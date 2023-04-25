import FormErrors from "./FormErrors";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions, tabActions } from "../../store";
import { Email, Password, Submit, UrlLink } from "../UserInput";
import { apiRequest } from "../../utils/formHelpers";
import axios from "axios";
axios.defaults.withCredentials = true;

const SignIn = () => {
  
  const [showPassword, setshowPassword] = useState(false);

  const toggleShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const handleSignUpClick = () => {
    dispatch(tabActions.register());
  };

  const [error, setError] = useState({});
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
   await apiRequest("http://localhost:3001/api/user/login", inputData, {
      withCredentials: true,
    })
      .then(() => {
        dispatch(authActions.login());
        dispatch(tabActions.welcome());
        history("/user");
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
  };

  return (
    <div className="w-[95%] mx-auto md:w-1/3 mt-20">
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 md:shadow-2xl"
      >
        <FormErrors errors={error} />

        <div className="bg-gray-800 h-10 flex items-center justify-center mb-10">
          <h2 className=" flex justify-center m-20 font-bold text-white ">
            Sign In
          </h2>
        </div>

        <Email
          inputValue={inputData.email}
          onChange={handleInputChange}
          required
        />

        <Password
          inputValue={inputData.password}
          name="password"
          onChange={handleInputChange}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
          placeholder="password"
          required
        />

        <Submit inputValue="Sign In" bgColor="bg-green-600" />

        <UrlLink
          linkTo={"/forgot-password"}
          typeD={"Forgot Password?"}
          type={"Reset"}
        />

        <UrlLink
          linkTo={"/register"}
          typeD={"Don't have an account?"}
          type={"Sign Up"}
          onClick={handleSignUpClick}
        />
      </form>
    </div>
  );
};

export default SignIn;
