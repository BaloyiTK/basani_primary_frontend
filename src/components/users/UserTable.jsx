import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api_endpoint from '../../utils/config';

const UserTable = () => {
  // Define the initial state for the user data
  const [users, setUsers] = useState([]);

  console.log(users)

  // Fetch the user data from the server
  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${api_endpoint}/api/users`);
      setUsers(res.data.users);
    } catch (err) {
      console.error(err);
    }
  };

  // Call the fetchUsers function when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle delete user event
  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`/users/${id}`);
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  // Render the table
  return (
    <table className="w-full table-auto border-collapse border border-gray-400">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2">Username</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Photo</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users  && users.map((user) => (
          <tr key={user._id} className="border-b border-gray-400">
            <td className="px-4 py-2">{user.username}</td>
            <td className="px-4 py-2">{user.email}</td>

            <td className="px-4 py-2"><img src={user.photo} alt={user.username}/></td>
            <td className="px-4 py-2">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleDeleteUser(user._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))} 
      </tbody>
    </table>
  );
};

export default UserTable;
