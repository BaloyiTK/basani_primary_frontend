import React, { useState } from "react";
import XLSX from "xlsx";
import axios from "axios";
import api_endpoint from "../../utils/config";

const UploadContacts = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState();
  const [message, setMessage] = useState();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setError("");
    setMessage("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const reader = new FileReader();
    reader.onload = handleFileRead;
    reader.readAsArrayBuffer(file);
  };

  const handleFileRead = async (event) => {
    const content = event.target.result;
    const workbook = XLSX.read(content, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);

    console.log(error)
    
console.log(message)

    await axios
      .post(`${api_endpoint}/api/contact/upload`, data)
      .then((response) => {
        setMessage(response.data)
        console.log(response.data); // handle successful response
      
      })
      .catch((error) => {
        setError(error.response.data.message)
        console.error(error); // handle error
        
      });
  };

  return (
    <div className="flex justify-center items-center  shadow-md">
      <form onSubmit={handleFormSubmit} className="rounded-lg">
        <div className="mb-4">
          <label
            className=" flex justify-center items-center text-gray-700 font-bold m-10 "
            htmlFor="file"
          >
            Upload Contacts
          </label>
          <input
            className="shadow bg-white appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            name="file"
            onChange={handleFileChange}
            accept=".xlsx"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Upload Contacts
        </button>
      </form>
    </div>
  );
};

export default UploadContacts;
