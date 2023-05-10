import React, { useState, useEffect } from "react";
import EventForm from "../events/EventForm ";
import EventsTable from "../events/EventsTable ";
import GalleryFrom from "../gallery/GalleryForm";
import GalleryTable from "../gallery/GalleryTable";
import Sms from "../communication/Sms ";
import TeamForm from "../team/TeamForm";
import axios from "axios";
import { authActions } from "../../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import api_endpoint from "../../utils/config";
import UserForm from "../users/UserForm";
import UserTable from "../users/UserTable";
import UniformForm from "../uniform/UniformForm";
import UniformTable from "../uniform/UniformTable";
import AnnouncementsTable from "../announcement/AnnouncementsTable";
import AnnouncementForm from "../announcement/AnnouncementForm";
import ProgramForm from "../programs/ProgramForm";
import ProgramTable from "../programs/ProgramTable";
import Settings from "../Settings";
import Spinner from "../Spinner";
import StatsForm from "../StatsFrom";
import Table from "../team/Table";
import DashboardSummary from "./DashboardSummary";
axios.defaults.withCredentials = true;

const AdminDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("dashboard");
  const [loading, setloading] = useState(true);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showStatsForm, setShowStatsForm] = useState(false);
  const [showTeamForm, setShowTeamForm] = useState(false);
  const [showProgramForm, setShowProgramForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [showAnnouncementForm, setShowAnnouncementForm] = useState(false);
  const [showUniformForm, setShowUniformForm] = useState(false);
  const [showGalleryForm, setShowGalleryForm] = useState(false);
  const [username, setUsername] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = [
    { label: "Dashboard", value: "dashboard" },
    { label: "Communication", value: "communication" },
    { label: "Team", value: "team" },
    { label: "Events", value: "events" },
    { label: "Users", value: "users" },
    { label: "Announcements", value: "announcements" },
    { label: "Gallery", value: "gallery" },
    { label: "Programs", value: "programs" },
    { label: "Uniform", value: "uniform" },
    { label: "Statistics", value: "statistics" },
    { label: "Settings", value: "settings" },
  ];

  const handleCategoryClick = (value) => {
    setSelectedCategory(value);
    setShowEventForm(false);
    setShowTeamForm(false);
    setShowGalleryForm(false);
    setShowUserForm(false);
    setShowUniformForm(false);
    setShowAnnouncementForm(false);
    setShowProgramForm(false);
    setShowStatsForm(false);
  };

  const handleToggleEventForm = () => {
    setShowEventForm(!showEventForm);
  };
  const handleToggleStatsForm = () => {
    setShowStatsForm(!showStatsForm);
  };

  const handleToggleTeamForm = () => {
    setShowTeamForm(!showTeamForm);
  };
  const handleToggleGalleryForm = () => {
    setShowGalleryForm(!showGalleryForm);
  };
  const handleToggleUserForm = () => {
    setShowUserForm(!showUserForm);
  };
  const handleToggleUniformForm = () => {
    setShowUniformForm(!showUniformForm);
  };
  const handleToggleAnnouncementForm = () => {
    setShowAnnouncementForm(!showAnnouncementForm);
  };
  const handleToggleProgramForm = () => {
    setShowProgramForm(!showProgramForm);
  };

  const renderTable = () => {
    if (
      showEventForm ||
      showTeamForm ||
      showGalleryForm ||
      showUserForm ||
      showUniformForm ||
      showAnnouncementForm ||
      showProgramForm ||
      showStatsForm
    ) {
      return null;
    }

    switch (selectedCategory) {
      case "events":
        setTimeout(() => {
          // check if screen width is less than 768 pixels
          if (window.matchMedia("(max-width: 767px)").matches) {
            const eventDiv = document.getElementById("events"); // replace "smsDiv" with the ID of your actual element
            if (eventDiv) {
              eventDiv.scrollIntoView({ behavior: "smooth" });
            }
          }
        }, 100); // wait for 100 milliseconds before executing the code
        return <EventsTable />;
      case "communication":
        setTimeout(() => {
          // check if screen width is less than 768 pixels
          if (window.matchMedia("(max-width: 767px)").matches) {
            const smsDiv = document.getElementById("sms"); // replace "smsDiv" with the ID of your actual element
            if (smsDiv) {
              smsDiv.scrollIntoView({ behavior: "smooth" });
            }
          }
        }, 100); // wait for 100 milliseconds before executing the code
        return <Sms />;

      case "team":
        setTimeout(() => {
          // check if screen width is less than 768 pixels
          if (window.matchMedia("(max-width: 767px)").matches) {
            const smsDiv = document.getElementById("team"); // replace "smsDiv" with the ID of your actual element
            if (smsDiv) {
              smsDiv.scrollIntoView({ behavior: "smooth" });
            }
          }
        }, 100); // wait for 100 milliseconds before executing the code
        return <Table />;

      case "gallery":
        setTimeout(() => {
          // check if screen width is less than 768 pixels
          if (window.matchMedia("(max-width: 767px)").matches) {
            const smsDiv = document.getElementById("gallery"); // replace "smsDiv" with the ID of your actual element
            if (smsDiv) {
              smsDiv.scrollIntoView({ behavior: "smooth" });
            }
          }
        }, 100); // wait for 100 milliseconds before executing the code
        return <GalleryTable />;
      case "users":
        setTimeout(() => {
          // check if screen width is less than 768 pixels
          if (window.matchMedia("(max-width: 767px)").matches) {
            const smsDiv = document.getElementById("users"); // replace "smsDiv" with the ID of your actual element
            if (smsDiv) {
              smsDiv.scrollIntoView({ behavior: "smooth" });
            }
          }
        }, 100); // wait for 100 milliseconds before executing the code
        return <UserTable />;
      case "dashboard":
        setTimeout(() => {
          // check if screen width is less than 768 pixels
          if (window.matchMedia("(max-width: 767px)").matches) {
            const smsDiv = document.getElementById("dashboard"); // replace "smsDiv" with the ID of your actual element
            if (smsDiv) {
              smsDiv.scrollIntoView({ behavior: "smooth" });
            }
          }
        }, 100); // wait for 100 milliseconds before executing the code
        return <DashboardSummary />;
      case "uniform":
        setTimeout(() => {
          // check if screen width is less than 768 pixels
          if (window.matchMedia("(max-width: 767px)").matches) {
            const smsDiv = document.getElementById("uniform"); // replace "smsDiv" with the ID of your actual element
            if (smsDiv) {
              smsDiv.scrollIntoView({ behavior: "smooth" });
            }
          }
        }, 100); // wait for 100 milliseconds before executing the code
        return <UniformTable />;
      case "announcements":
        setTimeout(() => {
          // check if screen width is less than 768 pixels
          if (window.matchMedia("(max-width: 767px)").matches) {
            const smsDiv = document.getElementById("announcements"); // replace "smsDiv" with the ID of your actual element
            if (smsDiv) {
              smsDiv.scrollIntoView({ behavior: "smooth" });
            }
          }
        }, 100); // wait for 100 milliseconds before executing the code
        return <AnnouncementsTable />;
      case "programs":
      case "announcements":
        setTimeout(() => {
          // check if screen width is less than 768 pixels
          if (window.matchMedia("(max-width: 767px)").matches) {
            const smsDiv = document.getElementById("programs"); // replace "smsDiv" with the ID of your actual element
            if (smsDiv) {
              smsDiv.scrollIntoView({ behavior: "smooth" });
            }
          }
        }, 100); // wait for 100 milliseconds before executing the code
        return <ProgramTable />;
      case "settings":
        return <Settings />;
      case "statistics":
        setTimeout(() => {
          // check if screen width is less than 768 pixels
          if (window.matchMedia("(max-width: 767px)").matches) {
            const smsDiv = document.getElementById("statistics"); // replace "smsDiv" with the ID of your actual element
            if (smsDiv) {
              smsDiv.scrollIntoView({ behavior: "smooth" });
            }
          }
        }, 100); // wait for 100 milliseconds before executing the code
        return;
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
        setloading(false);
      } catch (error) {
        dispatch(authActions.logout());
        console.error(error);
        navigate("/login");
      }
    };

    fetchUser();
  }, [dispatch, navigate]);

  return (
    <div className="bg-gray-100 min-h-full">
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          {" "}
          <Spinner />
        </div>
      ) : (
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
          <div className="md:col-span-4 flex-grow p-8 bg-slate-300">
            {selectedCategory === "dashboard" ? (
              <dir>
                {" "}
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Welcome back, {username}
                </h2>
                <p className="text-gray-700 mb-8">Here's a quick summary.</p>
              </dir>
            ) : null}

            <div className="mt-4">
              {selectedCategory !== "communication" &&
                selectedCategory !== "dashboard" &&
                selectedCategory !== "settings" && (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
                    onClick={() => {
                      if (selectedCategory === "events") {
                        handleToggleEventForm();
                      } else if (selectedCategory === "team") {
                        handleToggleTeamForm();
                      } else if (selectedCategory === "gallery") {
                        handleToggleGalleryForm();
                      } else if (selectedCategory === "users") {
                        handleToggleUserForm();
                      } else if (selectedCategory === "uniform") {
                        handleToggleUniformForm();
                      } else if (selectedCategory === "announcements") {
                        handleToggleAnnouncementForm();
                      } else if (selectedCategory === "programs") {
                        handleToggleProgramForm();
                      } else if (selectedCategory === "statistics") {
                        handleToggleStatsForm("statistics");
                      }
                      setSelectedCategory(selectedCategory);
                    }}
                  >
                    {showEventForm ||
                    showTeamForm ||
                    showGalleryForm ||
                    showUserForm ||
                    showUniformForm ||
                    showAnnouncementForm ||
                    showStatsForm
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
              {showUserForm && <UserForm className="w-1/2 mx-auto" />}
              {showUniformForm && <UniformForm className="w-1/2 mx-auto" />}
              {showProgramForm && <ProgramForm className="w-1/2 mx-auto" />}
              {showAnnouncementForm && (
                <AnnouncementForm className="w-1/2 mx-auto" />
              )}
              {showStatsForm && <StatsForm className="w-1/2 mx-auto" />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
