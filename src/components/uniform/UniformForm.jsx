import React, { useState } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";

const UniformForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    photo: "",
  });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        `${api_endpoint}/api/uniform`,
        Data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // do something with response data
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitData(formData);
  };
	
  return (
	<div className="max-w-md mx-auto py-4 px-8 bg-white shadow-lg rounded-lg">
	  <h1 className="text-2xl font-bold mb-6">Add Team Member</h1>
	  <form onSubmit={handleSubmit}>
		<div className="mb-4">
		  <label
			htmlFor="name"
			className="block text-gray-700 font-bold mb-2"
		  >
			Name
		  </label>
		  <input
			type="text"
			id="name"
			name="name"
			value={formData.name}
			onChange={handleInputChange}
			className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
		  />
		</div>
  
		<div className="mb-4">
		  <label
			htmlFor="description"
			className="block text-gray-700 font-bold mb-2"
		  >
			description
		  </label>
		  <input
			type="text"
			id="description"
			name="description"
			value={formData.description}
			onChange={handleInputChange}
			className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
		  />
		</div>
  
		<div className="mb-4">
		  <label
			htmlFor="price"
			className="block text-gray-700 font-bold mb-2"
		  >
			Price
		  </label>
		  <input
			type="text"
			id="price"
			name="price"
			value={formData.price}
			onChange={handleInputChange}
			className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
		 Publish
		</button>
	  </form>
	</div>
  );
  
}

export default UniformForm