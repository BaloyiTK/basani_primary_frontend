import React, { useState } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";

const grades = [
  { value: "R", label: "Grade R" },
  { value: "1", label: "Grade 1" },
  { value: "2", label: "Grade 2" },
  { value: "3", label: "Grade 3" },
  { value: "4", label: "Grade 4" },
  { value: "5", label: "Grade 5" },
  { value: "6", label: "Grade 6" },
  { value: "7", label: "Grade 7" },
  { value: "SGB", label: "SGB" },
  { value: "Teachers", label: "Teachers" },
  { value: "Other", label: "Other staff members" },
];

const ContactNumber = () => {
  const [number, setNumber] = useState("");
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [message, setMessage] = useState();
  const [error, setError] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedGrades.length === 0) {
      setError("Please select at least one grade level.");
      return;
    }
    await axios
      .post(`${api_endpoint}/api/contact/add`, {
        number: number,
        grades: selectedGrades,
      })
      .then((response) => {
        setMessage(response.data.message);
        // handle success response
      })
      .catch((error) => {
        setError(error.response.data.message);
        // handle error response
      });
  };

  const handleGradeChange = (event) => {
    const { value, checked } = event.target;
    setSelectedGrades((prevSelectedGrades) => {
      if (checked) {
        return [...prevSelectedGrades, value];
      } else {
        return prevSelectedGrades.filter((grade) => grade !== value);
      }
    });
    setError("");
    setMessage("");
  };

  return (
    <div className="grid justify-center shadow-md p-5 rounded-lg">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : message ? (
        <p className="text-green-500">{message}</p>
      ) : null}
      <div className="pb-5 pt-2">
        <h1 className="text-2xl font-bold mb-4">Add Contact Number</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="number" className="block font-medium mb-2">
              Phone Number
            </label>
            <input
              id="number"
              name="number"
              type="text"
              value={number}
              onChange={(event) => {
                setNumber(event.target.value);
                setError("");
                setMessage("");
              }}
              placeholder="Enter Contact Number"
              className="border-gray-300 shadow-md rounded-lg p-2 outline-none hover:shadow-blue-300 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">SMS to receive</label>
            <div className="grid grid-cols-2 gap-2">
              {grades.map((grade) => (
                <label
                  key={grade.value}
                  className="inline-flex items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={grade.value}
                    checked={selectedGrades.includes(grade.value)}
                    onChange={handleGradeChange}
                    className="form-checkbox h-3 w-3 text-purple-600 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                  />
                  <span className="ml-2">{grade.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-purple-500 text-white rounded-lg py-2 px-4 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
            >
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactNumber;
