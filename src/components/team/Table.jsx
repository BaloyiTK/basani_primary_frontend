import React, { useState, useEffect } from "react";
import TableButtons from "./TableButtons ";
import api_endpoint from "../../utils/config";
import axios from "axios";

const Table = () => {
  const [rows, setRows] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedPosition, seteditedPosition] = useState("");
  const [editedImage, setEditedImage] = useState(null);

  const handleEdit = (row) => {
    setEditingRow(row._id);
    setEditedName(row.name);
    setEditedImage(row.photo);
    seteditedPosition(row.position);
  };

  const handleCancel = () => {
    setEditingRow(null);
    setEditedName("");
    setEditedImage(null);
  };

  const handleSave = async (row) => {
    const newRows = rows.map((r) => {
      if (r._id === row._id) {
        return {
          ...r,
          name: editedName,
          position: editedPosition,
          photo: editedImage,
        };
      }
      return r;
    });

    await axios
      .patch(`${api_endpoint}/api/team/${row._id}`, {
        name: editedName,
        position: editedPosition,
        photo: editedImage,
      })
      .then((res) => {
        // Handle success
        console.log(res);
        console.log("Form submitted successfully");
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });

    setRows(newRows);
    setEditingRow(null);
    setEditedName("");
    seteditedPosition("");
    setEditedImage(null);
  };

  const handleDelete = async (row) => {
    const newRows = rows.filter((r) => r._id !== row._id);
    setRows(newRows);
    const memberId = row._id;

    try {
      const res = await axios.delete(`${api_endpoint}/api/team/${memberId}`);
    } catch (error) {
      console.error(error);
      //  setError(error.message);
    }
  };

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };
  const handlePositionChange = (event) => {
    seteditedPosition(event.target.value);
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

  useEffect(() => {
    axios.get(`${api_endpoint}/api/team`).then((response) => {
      setRows(response.data);
    });
  }, []);

  return (
    <div className="bg-gray-100 py-2 " id="team">
      <div className="md:max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Team Members</h1>
        <div className="shadow overflow-hidden border-b border-gray-200  w-full overflow-x-scroll h-screen overflow-y-scroll">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-500">
              <tr className="bg-gray-300 border-b border-gray-300">
                <th
                  scope="col"
                  className="px-1 py-3 text-left text-md  text-gray-600 font-bold uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-1 py-3 text-left text-md  text-gray-600 font-bold uppercase tracking-wider"
                >
                  Position
                </th>
                <th
                  scope="col"
                  className="px- py-3 text-left text-md  text-gray-600 font-bold uppercase tracking-wider"
                >
                  Image
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rows.map((row) => (
                <tr className="hover:bg-zinc-300" key={row._id}>
                  <td className="px- py-4 whitespace-nowrap border-b border-gray-300 ">
                    {editingRow === row._id ? (
                      <input
                        type="text"
                        value={editedName}
                        onChange={handleNameChange}
                        className="block w-fit border-gray-500 bg-gray-500 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    ) : (
                      <div className="flex items-center">
                        <div className="">
                          <div className="text-sm text-gray-900 font-bold">
                            {row.name}
                          </div>
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="px-1 py-4 whitespace-nowrap border-b border-gray-300">
                    {editingRow === row._id ? (
                      <input
                        type="text"
                        value={editedPosition}
                        onChange={handlePositionChange}
                        className="block w-fit border-gray-300 bg-gray-500 text-white shadow-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    ) : (
                      <div className="flex items-center ">
                        <div className="">
                          <div className="text-sm font-medium text-gray-500">
                            {row.position}
                          </div>
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="px-1 py-4 whitespace-nowrap border-b border-gray-300 ">
                    {editingRow === row._id ? (
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
                            src={row.photo}
                            alt=""
                          />
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="px- py-4 whitespace-nowrap text-right text-sm font-medium border-b border-gray-300">
                    <TableButtons
                      row={row}
                      editingRow={editingRow}
                      onEdit={handleEdit}
                      onCancel={handleCancel}
                      onSave={handleSave}
                      onDelete={handleDelete}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
