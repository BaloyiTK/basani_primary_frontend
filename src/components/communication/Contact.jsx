import React, { useState } from "react";
import Map from "./Map";
import axios from "axios"
import api_endpoint from "../../utils/config";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resMessage, setResMessage] = useState("");

  console.log(resMessage)

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    await axios
    .post(`${api_endpoint}/api/email`, {
     name,email,message
    })
    .then((response) => {
      console.log(response.data);
      setResMessage(response.data.message)
    })
    .catch((error) => {
      console.log(error);
      // handle error response
    });

  };
  return (
    <div className="grid m-5">
      <div>
      <p className="text-green-600 flex justify-center">{resMessage}</p>
        <div
          className="flex mx-auto justify-center  text-gray-200 bg-cover rounded-3xl bg-center md:w-1/2"
          style={{ backgroundImage: "url('bg22.webp')" }}
        >
         
          <div className="m-5 w-full max-w-md">
            <div className="flex justify-center">
              {" "}
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            </div>

            <form className="p-5 " onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="type your name here..."
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium  mb-2">
                  Contacts
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="type you contact number here...."
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  placeholder="type your messeage to us here...."
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="6"
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-5">
        <Map />
      </div>
    </div>
  );
};

export default Contact;
