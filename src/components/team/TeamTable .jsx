import React, { useState, useEffect } from "react";
import axios from "axios";
import TeamForm from "./TeamForm";
import api_endpoint from "../../utils/config";

const TeamTable = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      const response = await axios.get(`${api_endpoint}/api/team`);
      setTeam(response.data);
    };
    fetchTeam();
  }, []);

  const handleDelete = async (member) => {
    const memberId = member._id;

    try {
      await axios.delete(`${api_endpoint}/api/team/${memberId}`);
      console.log(`Member with ID ${memberId} deleted successfully`);

      const updatedTeam = team.filter((m) => m._id !== memberId);
      setTeam(updatedTeam);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="overflow-x-auto">
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300">
                  <th className="px-4 py-3 text-left text-gray-600 font-bold">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-gray-600 font-bold">
                    Position
                  </th>
                  <th className="px-4 py-3 text-left text-gray-600 font-bold">
                    Photo
                  </th>
                  <th className="px-4 py-3 text-left text-gray-600 font-bold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {team &&
                  team.map((member) => (
                    <tr key={member._id} className="border-b border-gray-300">
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <div>
                            <p className="text-gray-900 font-bold">
                              {member.name}
                            </p>
                            <p className="text-gray-500">{member.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-500">
                        {member.position}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-full h-full rounded-sm"
                              src={member.photo}
                              alt={member.name}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-3">
                        <div className="flex items-center">
                          <button
                            onClick={() => handleDelete(member)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamTable;
