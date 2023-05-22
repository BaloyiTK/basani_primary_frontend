import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Spinner";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import api_endpoint from "../../utils/config";

const UniformTable = () => {
  const [uniforms, setUniforms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState();
  const [error, setError] = useState();
  const [editingUniform, setEditingUniform] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedPrice, setEditedPrice] = useState("");
  const [editedImage, setEditedImage] = useState(null);

  useEffect(() => {
    try {
      const fetchUniforms = async () => {
        const response = await axios.get(`${api_endpoint}/api/uniform`);
        setUniforms(response.data.uniform);
        setLoading(false);

        console.log(response);
      };

      fetchUniforms();
    } catch (error) {
      setLoading(false);
    }
  }, []);

  const handleEditUniform = (uniform) => {
    setEditingUniform(uniform._id);
    setEditedName(uniform.name);
    setEditedDescription(uniform.description);
    setEditedPrice(uniform.price);
    setEditedImage(uniform.photo);
  };

  const handleCancelEdit = () => {
    setEditingUniform(null);
    setEditedName("");
    setEditedDescription("");
    setEditedPrice("");
  };

  const handleSaveEdit = async (uniform) => {
    const updatedUniforms = uniforms.map((u) => {
      if (u._id === uniform._id) {
        return {
          ...u,
          name: editedName,
          description: editedDescription,
          price: editedPrice,
          photo: editedImage,
        };
      }

      return u;
    });

    try {
      const response = await axios.patch(
        `${api_endpoint}/api/uniform/${uniform._id}`,
        {
          name: editedName,
          description: editedDescription,
          price: editedPrice,
          photo: editedImage,
        }
      );

      console.log(response);
      if (response.status === 200) {
        setUniforms(updatedUniforms);
        setMessage(response.data.message);
        setEditingUniform(null);
        setEditedName("");
        setEditedDescription("");
        setEditedPrice("");
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteUniform = async (uniform) => {
    const uniformId = uniform._id;
    try {
      const response = await axios.delete(
        `${api_endpoint}/api/uniform/${uniformId}`
      );
      if (response.status === 200) {
        const updatedUniforms = uniforms.filter((u) => u._id !== uniformId);
        setUniforms(updatedUniforms);
        setMessage(response.data.message);
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
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
                  {editingUniform === uniform._id ? (
                    <input
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                      className="block w-full border-gray-300 bg-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  ) : (
                    uniform.name
                  )}
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  {editingUniform === uniform._id ? (
                    <input
                      type="text"
                      value={editedDescription}
                      onChange={(e) => setEditedDescription(e.target.value)}
                      className="block w-full border-gray-300 bg-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  ) : (
                    uniform.description
                  )}
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  {editingUniform === uniform._id ? (
                    <input
                      type="text"
                      value={editedPrice}
                      onChange={(e) => setEditedPrice(e.target.value)}
                      className="block w-full border-gray-300 bg-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  ) : (
                    uniform.price
                  )}
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  {editingUniform === uniform._id ? (
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="mb-2"
                      />
                      {editedImage && (
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              src={editedImage}
                              alt="Preview"
                              className="w-10 h-10 mb-2"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={uniform.photo}
                          alt=""
                        />
                      </div>
                    </div>
                  )}
                </td>

                <td className="py-4 px-6 text-center">
  {editingUniform === uniform._id ? (
    <div className="flex justify-center items-center">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
        onClick={() => handleSaveEdit(uniform)}
      >
        Save
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        onClick={handleCancelEdit}
      >
        Cancel
      </button>
    </div>
  ) : (
    <div className="flex justify-center items-center">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
        onClick={() => handleEditUniform(uniform)}
      >
        Edit
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        onClick={() => handleDeleteUniform(uniform)}
      >
        Delete
      </button>
    </div>
  )}
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
