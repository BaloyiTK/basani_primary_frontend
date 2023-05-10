import React, { useState, useEffect } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";
import Spinner from "../Spinner";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);
  const [message, setmessage] = useState();


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
      setmessage( res.data.message );
      setUsers(users.filter((u) => u._id !== userId)); // filter out the user with the specified userId
    } catch (err) {
      console.error(err);
    }
  };

  // Render the table
  return (

    <div id="users" class="bg-white rounded-lg shadow overflow-hidden">
 
  {message && (
    <p class="bg-green-500 text-white py-2 px-4 flex items-center">
      <svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      {message}
    </p>
  )}


  {loading ? (
    <div class="p-4">
      <div class="animate-pulse h-8 w-1/2 bg-gray-300 rounded"></div>
    </div>
  ) : (
  
    <div class="overflow-x-auto">
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th class="py-3 px-6 text-left">Username</th>
            <th class="py-3 px-6 text-left">Email</th>
            <th class="py-3 px-6 text-left">Photo</th>
            <th class="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody class="text-gray-600 text-sm font-light">
          {users &&
            users.map((user) => (
              <tr key={user._id} class="border-b border-gray-200 hover:bg-gray-100">
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="mr-2">
                      <div class="text-md font-medium text-gray-900">{user.username}</div>
                    </div>
                  </div>
                </td>
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="mr-2">
                      <div class="text-md font-medium text-gray-900">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td class="py-3 px-6 text-left">
                  <img src={user.photo} alt={user.username} class="h-10 w-10 rounded-full" />
                </td>
                <td class="py-3 px-6 text-center">
                  <div class="flex justify-center items-center">
                    <button onClick={() => handleDeleteUser(user)} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )}
</div>

 
  
  

  )
};

export default UserTable;
