import React, { useState } from "react";
import XLSX from "xlsx";
import axios from "axios";
import api_endpoint from "../../utils/config";

const UploadContacts = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setError("");
    setMessage("");
  };

  const handleFormSubmit = async (event) => {
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
    const data = XLSX.utils.sheet_to_json(sheet, { defval: "", raw: true });
    console.log(data)

    try {
      const response = await axios.post(
        `${api_endpoint}/api/contact/upload`,
        data
      );
      setMessage(response.data);
      console.log(response.data); // handle successful response
    } catch (error) {
      setError(error.response.data.message);
      console.error(error); // handle error
    }
  };

  return (
    <div className="mx-auto p-4  rounded-lg overflow-hidden">
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
