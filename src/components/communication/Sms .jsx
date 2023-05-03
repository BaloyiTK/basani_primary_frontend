import React, { useState } from "react";
import axios from "axios";
import UploadContacts from "./UploadContacts";
import ContactNumber from "./ContactNumber";
import api_endpoint from "../../utils/config"

const grades = [
  { value: "R", name: "Grade R" },
  { value: "1", name: "Grade 1" },
  { value: "2", name: "Grade 2" },
  { value: "3", name: "Grade 3" },
  { value: "4", name: "Grade 4" },
  { value: "5", name: "Grade 5" },
  { value: "6", name: "Grade 6" },
  { value: "7", name: "Grade 7" },
  { value: "Teachers", name: "Teachers" },
  { value: "SGB", name: "SGB" },
  { value: "Other", name: "Other stuff members" },
];

const SmsForm = () => {
  const [message, setMessage] = useState("");
  const [resMessage, setResMessage] = useState("");
  const [error, setError] = useState();
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [sendToAll, setSendToAll] = useState(false);

  const handleGradeChange = (event) => {
    const gradeId = event.target.value;
    if (selectedGrades.includes(gradeId)) {
      setSelectedGrades(selectedGrades.filter((id) => id !== gradeId));
    } else {
      setSelectedGrades([...selectedGrades, gradeId]);
    }
  };

  const handleSendToAllChange = (event) => {
    setSendToAll(event.target.checked);
    setSelectedGrades(
      event.target.checked ? grades.map((grade) => String(grade.id)) : []
    );
    setResMessage("");
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(`${api_endpoint}/api/send-sms`, {
        message,
        selectedGrades,
        sendToAll,
      })
      .then((response) => {
        setResMessage(response.data.message);
        console.log(response.data);
        // handle success response
      })
      .catch((error) => {
        setError(error.response.data.message);
        console.log(error.response.data.message);
        // handle error response
      });
    setMessage("");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 min-h-screen">
      <div className="flex flex-col justify-between">
        <div className="mb-8">
          <ContactNumber />
        </div>
        <div>
          <UploadContacts />
        </div>
      </div>
      <div>
        {error && <p className="text-red-500">{error}</p>}
        {resMessage && <p className="text-green-500">{resMessage}</p>}
        <div className="rounded-lg p-8 shadow-md">
          <h1 className="text-2xl font-bold mb-4">SMS</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="message" className="block font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                  setResMessage("");
                  setError("");
                }}
                className="w-full border-gray-300 rounded-lg p-2 shadow-md outline-none"
                rows="5"
                required
                placeholder="Message..."
              ></textarea>
            </div>
  
            <div className="mb-4">
              <label className="block font-bold mb-3">Sending to</label>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="send-to-all"
                    checked={sendToAll}
                    onChange={handleSendToAllChange}
                    className="form-checkbox text-purple-500"
                  />
                  <span className="ml-2 text-gray-700">Send to all</span>
                </label>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {grades.map((grade) => (
                  <label
                    key={grade.value}
                    className="inline-flex items-center"
                  >
                    <input
                      type="checkbox"
                      name="grade"
                      value={grade.value}
                      checked={selectedGrades.includes(String(grade.value))}
                      onChange={handleGradeChange}
                      className="form-checkbox text-purple-500"
                    />
                    <span className="ml-2 text-gray-700">{grade.name}</span>
                  </label>
                ))}
              </div>
            </div>
  
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-purple-500 text-white rounded-lg py-2 px-4 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  
};

export default SmsForm;
