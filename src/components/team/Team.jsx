import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";
import Spinner from "../Spinner";

const Team = () => {
  const [membersData, setMembersData] = useState({ members: [], member: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [membersResponse, memberResponse] = await Promise.all([
        axios.get(`${api_endpoint}/api/team`),
        axios.get(`${api_endpoint}/api/team/principal`)
      ]);
      setMembersData({ members: membersResponse.data, member: memberResponse.data });
      setLoading(false);
    };
    fetchData();
  }, []);

  const members = useMemo(() => {
    return membersData.members.filter(m => m.position !== membersData.member.position);
  }, [membersData.members, membersData.member]);

  const member = useMemo(() => {
    return membersData.member;
  }, [membersData.member]);

  return (
    <div className="bg-gray-100 max-w-5xl mx-auto mt-10 bg-#713F12 p-5">
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h2 className="flex justify-center items-center pb-6 font-bold text-3xl">
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
            {members.map((m, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-32 h-32 rounded-full object-cover"
                />
                <h2 className="mt-4 text-xl font-bold">{m.name}</h2>
                <p className="text-gray-500">{m.position}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
