import api_endpoint from "../../utils/config";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Spinner";

const UniformTable = ({ data, onDelete }) => {
  const [uniforms, setUniforms] = useState([]);
  const [loading, setloading] = useState(true);

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
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" rounded-md overflow-hidden">
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <table className="w-full bg-white shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Photo</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {uniforms.map((uniform) => (
              <tr
                key={uniform.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {uniform.name}
                </td>
                <td className="py-3 px-6 text-left">{uniform.description}</td>
                <td className="py-3 px-6 text-left">{uniform.price}</td>
                <td className="py-3 px-6 text-left">
                  <img
                    src={uniform.photo}
                    alt={uniform.name}
                    className="w-16 h-16"
                  />
                </td>
                <td className="py-3 px-6 text-center">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
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
