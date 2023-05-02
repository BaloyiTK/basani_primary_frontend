import React, { useState, useEffect } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";
import Spinner from "../Spinner";

const TeamTable = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditableMode] = useState(false);

  useEffect(() => {
    const fetchTeam = async () => {
      const response = await axios.get(`${api_endpoint}/api/team`);
      setTeam(
        response.data.map((member) => ({
          ...member,
          isEditing: false, // add isEditing property to each member object
        }))
      );
      setLoading(false);
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

  const handleEdit = async (member) => {
    const memberId = member._id;
    setEditableMode(true)

    // try {
    //   await axios.put(`${api_endpoint}/api/team/${memberId}`, member);
    //   console.log(`Member with ID ${memberId} updated successfully`);

    //   const updatedTeam = team.map((m) =>
    //     m._id === memberId ? { ...member, isEditing: false } : m
    //   );
    //   setTeam(updatedTeam);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleSave = async (member) => {}
  const handleCancel = async (member) => {setEditableMode(false)}


  return (
    <div className="container mx-auto py-8">
      {loading ? (
        <Spinner />
      ) : (
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
                           
                              <p className="text-gray-900 font-bold">
                                {member.name}
                              </p>
                           
                          
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
                        {editMode ?     
                          <td className=" flex px-4 py-3">
                            <div className="flex items-center px-2">
                              <button
                                onClick={() => handleSave(member)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                              >
                                Save
                              </button>
                            </div>
                            <div className="flex items-center">
                              <button
                                onClick={() => handleCancel(member)}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                              >
                                Cancel
                              </button>
                            </div>
                          </td> 
                          :     
                          <td className=" flex px-4 py-3">
                            <div className="flex items-center px-2">
                              <button
                                onClick={() => handleDelete(member)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                              >
                                Delete
                              </button>
                            </div>
                            <div className="flex items-center">
                              <button
                                onClick={() => handleEdit(member)}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                              >
                                Edit
                              </button>
                            </div>
                          </td> 
                        }
                    
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  
};

export default TeamTable;
