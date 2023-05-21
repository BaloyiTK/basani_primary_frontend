import api_endpoint from "../../utils/config";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Spinner";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const UniformTable = () => {
  const [uniforms, setUniforms] = useState([]);
  const [loading, setloading] = useState(true);
  const [message, setmessage] = useState();
  const [error, seterror] = useState();

  useEffect(() => {
    const fetchUniforms = async () => {
      const response = await axios.get(`${api_endpoint}/api/uniform`);
      setUniforms(response.data.uniform);
      setloading(false);
    };

    fetchUniforms();
  }, []);

  const handleDeleteUniform = async (uniform) => {
    const uniformId = uniform._id;
    try {
      const response = await axios.delete(
        `${api_endpoint}/api/uniform/${uniformId}`
      );
      if (response.status === 200) {
        const updatedUniforms = uniforms.filter(
          (uniform) => uniform._id !== uniformId
        );
        setUniforms(updatedUniforms);
        setmessage(response.data.message)
      }
    } catch (error) {
      console.log(error);
      seterror(error.response.data.message)
    }
  };

  return (
    <div className="rounded-md overflow-x-scroll shadow-lg">
    {error && (
      <div className="flex items-center bg-red-100 text-red-500 px-4 py-3">
        <FaTimesCircle className="mr-2" size={20} />
        <span>{error}</span>
      </div>
    )}
  
    {message && (
      <div className="flex items-center bg-green-100 text-green-500 px-4 py-3">
        <FaCheckCircle className="mr-2" size={20} />
        <span>{message}</span>
      </div>
    )}
  
    {loading ? (
      <div className="flex justify-center items-center h-40">
        <Spinner />
      </div>
    ) : (
      <table className="w-full bg-white divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr className="text-gray-600 text-sm font-medium">
            <th scope="col" className="py-3 px-6 text-left">
              Name
            </th>
            <th scope="col" className="py-3 px-6 text-left">
              Description
            </th>
            <th scope="col" className="py-3 px-6 text-left">
              Price
            </th>
            <th scope="col" className="py-3 px-6 text-left">
              Photo
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {uniforms.map((uniform) => (
            <tr key={uniform._id} className="hover:bg-gray-50">
              <td className="py-4 px-6 whitespace-nowrap">
                {uniform.name}
              </td>
              <td className="py-4 px-6 whitespace-nowrap">
                {uniform.description}
              </td>
              <td className="py-4 px-6 whitespace-nowrap">
                {uniform.price}
              </td>
              <td className="py-4 px-6">
                <img
                  src={uniform.photo}
                  alt={uniform.name}
                  className="w-16 h-16 object-cover rounded-full"
                />
              </td>
              <td className="py-4 px-6 text-center">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full"
                  onClick={() => handleDeleteUniform(uniform)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
  
  );
};

export default UniformTable;
