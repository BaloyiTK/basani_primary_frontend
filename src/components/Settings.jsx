import React, { useState } from "react";
import AccountDetails from "./AccountDetails";
//import SecuritySettings from "./SecuritySettings";

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="bg-gray-100 min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform skew-y-0 rotate-6 sm:rotate-12 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
             
              <h2 className="text-center text-3xl font-extrabold text-gray-900 mt-4">Account Settings</h2>
              <p className="text-center text-sm text-gray-600 mt-1">Change your account settings and manage your preferences.</p>
            </div>
            <div className="mt-10">
              <div className="flex items-center justify-center">
                <button
                  className={`py-4 px-6 block focus:outline-none ${activeTab === "account" ? "text-white bg-indigo-500 hover:bg-indigo-400" : "text-indigo-500 bg-white hover:bg-gray-100"} border-b-2 font-medium border-indigo-500`}
                  onClick={() => setActiveTab("account")}
                >
                  Account Details
                </button>
                <button
                  className={`py-4 px-6 block focus:outline-none ${activeTab === "security" ? "text-white bg-indigo-500 hover:bg-indigo-400" : "text-indigo-500 bg-white hover:bg-gray-100"} border-b-2 font-medium border-indigo-500`}
                  onClick={() => setActiveTab("security")}
                >
                  Security Settings
                </button>
              </div>
              {activeTab === "account" && <AccountDetails />}
              {/* {activeTab === "security" && <SecuritySettings />} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
