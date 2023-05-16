import React from "react";

const AccountDetails = () => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <h2 className="text-xl font-bold mb-2">Account Details</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="text-gray-700 font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="appearance-none border shadow-lg rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border shadow-lg rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
