import React, { useState, useEffect } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";
import Spinner from "../Spinner";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);
  const [message, setmessage] = useState();

  console.log(message);

  // Fetch the user data from the server
  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${api_endpoint}/api/users`);
      setUsers(res.data.users);
      setloading(false);
      setmessage(res.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  // Call the fetchUsers function when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle delete user event
  const handleDeleteUser = async (user) => {
    const userId = user._id;
    console.log(userId);
    try {
      const res = await axios.delete(`${api_endpoint}/api/users/${userId}`);
      console.log(res.data.message);
      setmessage( res.data.message );
      setUsers(users.filter((u) => u._id !== userId)); // filter out the user with the specified userId
    } catch (err) {
      console.error(err);
    }
  };

  // Render the table
  return (
    <div>
      {message && (
        <p className="flex items-center text-green-500">
          <FaCheckCircle className=" pr-1" size={20} /> {message}
        </p>
      )}

      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div>
          <table className="w-full table-fixed bg-gray-100 rounded-lg shadow-md">
            <thead>
              <tr className="bg-maroon-800 text-gray-200">
                <th className="w-1/4 px-4 py-2 text-left font-bold border-r border-gray-300">
                  Username
                </th>
                <th className="w-1/4 px-4 py-2 text-left font-bold border-r border-gray-300">
                  Email
                </th>
                <th className="w-1/4 px-4 py-2 text-left font-bold border-r border-gray-300">
                  Photo
                </th>
                <th className="w-1/4 px-4 py-2 text-left font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => (
                  <tr
                    key={user._id}
                    className="bg-white border-b border-gray-200"
                  >
                    <td className="w-1/4 px-4 py-2 border-r border-gray-200">
                      {user.username}
                    </td>
                    <td className="w-1/4 px-4 py-2 border-r border-gray-200">
                      {user.email}
                    </td>
                    <td className="w-1/4 px-4 py-2 border-r border-gray-200">
                      <img
                        className="w-12 h-12 rounded-full"
                        src={user.photo}
                        alt={user.username}
                      />
                    </td>
                    <td className="w-1/4 px-4 py-2">
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleDeleteUser(user)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserTable;
