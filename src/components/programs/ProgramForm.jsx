import React, { useState } from "react";
import axios from "axios";
import api_endpoint from '../../utils/config';
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ProgramForm = () => {
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		photo: "",
	  });
	
	  const [message, setmessage] = useState();
	  const [error, seterror] = useState();

	  const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		seterror("")
		setmessage("")
	  };
	
	  const handlePhotoChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
		  setFormData({ ...formData, photo: reader.result });
		};
	  };
	
	  const submitData = async (Data) => {
		try {

		  const response = await axios.post(
			`${api_endpoint}/api/program`,
			Data,
			{
			  withCredentials: true,
			  headers: {
				"Content-Type": "application/json",
			  },
			}
		  );

		  setmessage(response.data.message)

		} catch (error) {
		  console.error(error);
		  seterror(error.response.data.message)
		}
	  };
	
	  const handleSubmit = (e) => {
		e.preventDefault();
	
		submitData(formData);
		seterror("")
		setmessage("")
	  };
	
	  return (
		<div className="max-w-md mx-auto py-4 px-8 bg-white shadow-lg rounded-lg">

{error && (
        <p className="flex items-center text-red-500">
          <FaTimesCircle className=" pr-1" size={20} /> {"error"}
        </p>
      )}

      {message && (
        <p className="flex items-center text-green-500">
          <FaCheckCircle className=" pr-1" size={20} /> {message}
        </p>
      )}
		  <h1 className="text-2xl font-bold mb-6">Add School Program</h1>
		  <form onSubmit={handleSubmit}>
			<div className="mb-4">
			  <label
				htmlFor="name"
				className="block text-gray-700 font-bold mb-2"
			  >
				Title
			  </label>
			  <input
				type="text"
				id="title"
				name="title"
				value={formData.title}
				onChange={handleInputChange}
				className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow-lg appearance-none focus:outline-none focus:shadow-outline"
			  />
			</div>
			<div className="mb-4">
			  <label
				htmlFor="position"
				className="block text-gray-700 font-bold mb-2"
			  >
				Description
			  </label>
			  <input
				type="text"
				id="description"
				name="description"
				value={formData.description}
				onChange={handleInputChange}
				className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow-lg appearance-none focus:outline-none focus:shadow-outline"
			  />
			</div>
			<div className="mb-4">
			  <label
				htmlFor="photo"
				className="block text-gray-700 font-bold mb-2"
			  >
				Photo
			  </label>
			  <input
				type="file"
				id="photo"
				name="photo"
				onChange={handlePhotoChange}
				className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
			  />
			</div>
			<button
			  type="submit"
			  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			>
			  Publish Program
			</button>
		  </form>
		</div>
	  );
}

export default ProgramForm