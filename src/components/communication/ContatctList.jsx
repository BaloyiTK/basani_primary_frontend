import React, { useState, useEffect } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";
import getSmsGradeColor from "./smsGrades";
import api_endpoint from "../../utils/config";
import axios from "axios";

const ContactList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null); // State variable to store the selected contact
  const [deleting, setDeleting] = useState(false)

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`${api_endpoint}/api/contact`)
      .then((response) => {
        setContacts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredContacts = contacts.filter((contact) =>
    contact.number.includes(searchTerm)
  );

  const handleContactClick = (index) => {
    const clickedContact = filteredContacts[index];

    if (selectedContact === clickedContact) {
      // If the clicked contact is the same as the currently selected contact, clear the selection
      setSelectedContact(null);
    } else {
      setSelectedContact(clickedContact);
    }
  };

  const handleDeleteClick = async (contact) => {
    setDeleting(true)
    try {
      const res = await axios.delete(
        `${api_endpoint}/api/contact/${contact._id}`
      );

      setDeleting(false)

      // Filter out the deleted contact from the contacts array
      setContacts((prevContacts) =>
        prevContacts.filter((c) => c._id !== contact._id)
      );

  
    } catch (error) {
      console.error(error);
      setDeleting(false)
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full">
        <div className="relative">
          <FaSearch className="absolute h-5 w-5 left-3 top-2 text-gray-400" />
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search contacts by phone number..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        {isLoading ? (
          <div className="mt-4">Loading...</div>
        ) : (
          <ul className="max-h-screen mt-4 overflow-x-auto bg-black text-white">
            {filteredContacts.map((contact, index) => (
              <li
                key={index}
                className={`p-2 ${
                  selectedContact === contact
                    ? "bg-gray-300 relative border-b border-white text-black"
                    : ""
                }`}
                onClick={() => handleContactClick(index)}
              >
                <span>{contact.number}</span>
                <div className="mt-2">
                  {contact.grades &&
                    contact.grades.map((grade, index) => (
                      <span
                        key={index}
                        className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${getSmsGradeColor(
                          grade
                        )} mr-2`}
                      >
                        {grade}
                      </span>
                    ))}
                </div>
                {selectedContact === contact && (
                  <div className="mt-2 absolute right-1 top-0 bottom-0 flex justify-center items-center">
                    <FaTrash
                      className="h-5 w-5 text-red-500 cursor-pointer hover:text-red-600"
                      onClick={() => handleDeleteClick(contact)}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ContactList;
