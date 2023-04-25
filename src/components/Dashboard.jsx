import React, { useState, useEffect } from "react";
import EventForm from "./events/EventForm ";
import EventsTable from "./events/EventsTable ";
import GalleryFrom from "./gallery/GalleryForm";
import GalleryTable from "./gallery/GalleryTable";
import Sms from "./communication/Sms ";
import TeamForm from "./team/TeamForm";
import TeamTable from "./team/TeamTable ";
import axios from "axios";
import { authActions } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import api_endpoint from "../utils/config";
axios.defaults.withCredentials = true;
  


const AdminDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("dashboard");
  const [showEventForm, setShowEventForm] = useState(false);
  const [showTeamForm, setShowTeamForm] = useState(false);
  const [showGalleryForm, setShowGalleryForm] = useState(false);
  const [username, setUsername] = useState();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const categories = [
    { label: "Dashboard", value: "dashboard" },
    { label: "Communication", value: "communication" },
    { label: "Team", value: "team" },
    { label: "Events", value: "events" },
    { label: "Announcements", value: "announcements" },
    { label: "Gallery", value: "gallery" },
    { label: "Programs", value: "programs" },
    { label: "Uniform", value: "uniform" },
    { label: "Settings", value: "settings" },
    { label: "Users", value: "users" },
  ];

  const handleCategoryClick = (value) => {
    setSelectedCategory(value);
    setShowEventForm(false);
    setShowTeamForm(false);
    setShowGalleryForm(false);
  };

  const handleToggleEventForm = () => {
    setShowEventForm(!showEventForm);
  };

  const handleToggleTeamForm = () => {
    setShowTeamForm(!showTeamForm);
  };
  const handleToggleGalleryForm = () => {
    setShowGalleryForm(!showGalleryForm);
  };

  const renderTable = () => {
    if (showEventForm || showTeamForm || showGalleryForm) {
      return null;
    }

    switch (selectedCategory) {
      case "events":
        return <EventsTable />;
      case "communication":
        return <Sms />;
      case "team":
        return <TeamTable />;
      case "gallery":
        return <GalleryTable />;
      // Add other cases for other tables here
      default:
        return null;
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${api_endpoint}/api/user`, {
          withCredentials: true,
        });
        setUsername(response.data.username);
        dispatch(authActions.login());
      } catch (error) {      
        dispatch(authActions.logout());
        console.error(error);  
         navigate("/login");
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-5 h-full">
        <div className="md:col-span-1 border-r border-gray-200 px-8 py-6 bg-maroon-900 t">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">
            Admin Dashboard
          </h2>
          <ul className="list-none">
            {categories.map((category) => (
              <li className="mb-1 border-1 pb-1" key={category.value}>
                <button
                  className={`block py-2 px-4 text-gray-300 rounded-md transition duration-200 
          ${
            selectedCategory === category.value
              ? "bg-gray-200 text-gray-900"
              : "hover:bg-gray-200 hover:text-gray-900"
          }`}
                  onClick={() => handleCategoryClick(category.value)}
                >
                  {category.label}
                </button>
                <hr className="my-2 border-0 border-t border-gray-600" />
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4 flex-grow p-8 bg-slate-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome back, {username}
          </h2>
          <p className="text-gray-700 mb-8">
            Here's a quick summary of your school's performance.
          </p>
          <div className="mt-4">
            {selectedCategory !== "communication" &&
              selectedCategory !== "dashboard" && (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
                  onClick={() => {
                    if (selectedCategory === "events") {
                      handleToggleEventForm();
                    } else if (selectedCategory === "team") {
                      handleToggleTeamForm();
                    } else if (selectedCategory === "gallery") {
                      handleToggleGalleryForm();
                    }
                    setSelectedCategory(selectedCategory);
                  }}
                >
                  {showEventForm || showTeamForm || showGalleryForm
                    ? `Show ${selectedCategory}`
                    : `Add ${selectedCategory}`}
                </button>
              )}
          </div>
          <div className="mt-8">
            {renderTable()}
            {showEventForm && <EventForm className="w-1/2 mx-auto" />}
            {showTeamForm && <TeamForm className="w-1/2 mx-auto" />}
            {showGalleryForm && <GalleryFrom className="w-1/2 mx-auto" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
