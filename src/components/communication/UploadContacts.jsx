import React, { useState } from "react";
import XLSX from "xlsx";
import axios from "axios";
import api_endpoint from "../../utils/config";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const UploadContacts = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setError("");
    setMessage("");
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setUploading(true)
    const reader = new FileReader();
    reader.onload = handleFileRead;
    reader.readAsArrayBuffer(file);
  };

  const handleFileRead = async (event) => {
    const content = event.target.result;
    const workbook = XLSX.read(content, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet, { defval: "", raw: true });
    console.log(data)

    try {
      const response = await axios.post(
        `${api_endpoint}/api/contact/upload`,
        data
      );
     setMessage(response.data.message);
      console.log(response.data); // handle successful response
      setUploading(false)
    } catch (error) {
      setError(error.response.data.message);
      console.error(error); // handle error
    }
  };

  return (


    <div className="mx-auto p-4  rounded-lg overflow-hidden">
      
      <div className="flex flex-col">
  {uploading && (
    <div className="flex items-center">
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm10-5.291a7.962 7.962 0 01-2 5.291l3 2.647A8.01 8.01 0 0120 12h-4z"
        ></path>
      </svg>
      <p className="">Adding event...</p>
    </div>
  )}
   {error && (
    <p className="flex items-center text-red-500">
      <FaTimesCircle className="pr-1" size={20} /> {error}
    </p>
  )}
  {message && (
    <p className="flex items-center text-green-500">
      <FaCheckCircle className="pr-1" size={20} /> {message}
    </p>
  )}  
</div>
      <div className="px-4">
        <h1 className="text-gray-900 font-bold text-2xl">Upload Contacts</h1>
        <p className="text-gray-600 mt-1">
          Please select an .xlsx file to upload.
        </p>
      </div>
      <form onSubmit={handleFormSubmit} className="px-4 ">
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
