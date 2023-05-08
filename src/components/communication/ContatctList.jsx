import React, { useState,useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import api_endpoint from '../../utils/config';
import axios from 'axios';


const getSmsGradeColor = (grade) => {
  switch (grade) {
    case 'R':
      return 'bg-green-500 text-white';
    case '1':
      return 'bg-green-400 text-white';
    case '2':
      return 'bg-yellow-500 text-white';
    case '3':
      return 'bg-yellow-400 text-gray-900';
    case '4':
      return 'bg-red-500 text-white';
    case '5':
      return 'bg-red-400 text-white';
      case '6':
        return 'bg-maroon-400 text-white';
        case '7':
          return 'bg-red-400 text-white';
          case 'SGB':
            return 'bg-gray-400 text-white';
            case 'Other':
              return 'bg-red-400 text-white';
              case 'Teachers':
                return 'bg-pink-400 text-white';
    default:
      return 'bg-gray-400 text-white';
  }
};

const ContactList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [contacts, setcontacts] = useState([])

  console.log(contacts)

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.number.includes(searchTerm)
  );

  useEffect(() => {
    axios
      .get(`${api_endpoint}/api/contact`)
      .then((response) => {
        setcontacts(response.data);
     //   setloading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="w-full">
      <div className="bg-white shadow-md rounded my-6">
        <div className="px-4 py-2 flex items-center">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search contacts by phone number..."
            className="border rounded-lg py-2 px-4 w-full"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <ul className='w-80 max-h-screen overflow-y-scroll overflow-x-scroll'>
          {filteredContacts.map((contact, index) => (
            <li key={index} className="flex justify-between py-2 px-4">
              <span>{contact.number}</span>
              <div className="flex items-center space-x-2">
                {contact.grades.map((grade, index) => (
                  <span
                    key={index}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      getSmsGradeColor(grade)
                    }`}
                  >
                    {grade}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactList;
