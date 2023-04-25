import React, { useState } from "react";
import axios from "axios";
import UploadContacts from "./UploadContacts";
import ContactNumber from "./ContactNumber";
import api_endpoint from "../../utils/config";


const grades = [
  { id: 1, name: "Grade 1" },
  { id: 2, name: "Grade 2" },
  { id: 3, name: "Grade 3" },
  { id: 4, name: "SGB" },
  { id: 5, name: "Teachers" },
  { id: 6, name: "Other stuff members" },
];

const SmsForm = () => {
  const [message, setMessage] = useState("");
  const [resMessage, setResMessage] = useState("");
  const [error, setError] = useState();
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [sendToAll, setSendToAll] = useState(false);

  console.log(resMessage);
  console.log(error);

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
        setError(error);
        console.log(error);
        // handle error response
      });
  };

  return (
    <div className="grid grid-cols-2 gap-8 min-h-screen p-8">
      <div>
        <div className="mb-8">
          <ContactNumber />
        </div>
        <div>
          <UploadContacts />
        </div>
      </div>
      <div className="rounded-lg p-2 shadow-md">
        <p className="text-green-500">{resMessage}</p>
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
              onChange={(event) => setMessage(event.target.value)}
              className="w-full border-gray-300 rounded-lg p-2 shadow-md outline-none"
              rows="5"
              required
              placeholder="Message..."
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Select Grade Level</label>
            <div className="grid grid-cols-2 gap-4">
              {grades.map((grade) => (
                <label key={grade.id} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="grade"
                    value={grade.id}
                    checked={selectedGrades.includes(String(grade.id))}
                    onChange={handleGradeChange}
                    className="form-checkbox text-purple-500"
                  />
                  <span className="ml-2 text-gray-700">{grade.name}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center ">
              <input
                type="checkbox"
                name="send-to-all"
                checked={sendToAll}
                onChange={handleSendToAllChange}
                className="form-checkbox text-purple-500 "
              />
              <span className="ml-2 text-gray-700">Send to all</span>
            </label>
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
  );
};

export default SmsForm;
