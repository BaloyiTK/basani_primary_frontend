import React, { useState, useEffect } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";
import { useSelector } from "react-redux";
import Spinner from "../Spinner";

const Team = () => {
  const [members, setMembers] = useState([]);
  const [member, setMember] = useState([]);
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const fetchMembers = async () => {
      const response = await axios.get(`${api_endpoint}/api/team`);
      setMembers(response.data);
      setloading(false)
    };

    const fetchMember = async () => {
      const response = await axios.get(
        `${api_endpoint}/api/team/principal`
      );
      setMember(response.data);
      setloading(false)
    };

    fetchMember();
    fetchMembers();
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-#713F12 p-5">
      {loading ? <div><Spinner/></div> : <div>  <h2 className="flex justify-center items-center pb-6 font-bold text-3xl">
        Meet our team
      </h2>
      <div className="text-center mb-6">
        <div className="grid justify-center items-center h-full">
          <img
            src={member.photo}
            alt={member.name}
            className="w-48 h-48 rounded-full object-cover"
          />
          <h2 className="mt-4 text-2xl font-bold">{member.name}</h2>
          <p className="text-gray-500">{member.position}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {members.map(
          (m, index) =>
            // only render if name and position are not equal
            member.position !== m.position && (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-32 h-32 rounded-full object-cover"
                />
                <h2 className="mt-4 text-xl font-bold">{m.name}</h2>
                <p className="text-gray-500">{m.position}</p>
              </div>
            )
        )}
      </div></div> }
    
    </div>
  );
};

export default Team;
