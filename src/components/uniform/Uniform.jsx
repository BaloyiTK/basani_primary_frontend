import React, { useState, useEffect } from "react";
import UniformCard from "./UniformCard";
import api_endpoint from "../../utils/config";
import axios from "axios";
import Spinner from "../Spinner";

const Uniform = () => {
  const [uniforms, setUniforms] = useState([]);
  const shopAddress = "606 Mandiwana Street, Chiawelo ext 1, Soweto 1818";
  const tradingHours = "Monday to Fiday: 07:00 - 18:00";
  const contactNumber = "079 449 4917 / 071 907 1975";
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchUniforms = async () => {
      const response = await axios.get(`${api_endpoint}/api/uniform`);
      setUniforms(response.data.uniform);
      setloading(false);
    };

    fetchUniforms();
  }, []);

  return (
    <div className="container mx-auto mt-20">
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div>
          {" "}
          <h1 className="flex justify-center  text-3xl font-bold mb-8">Official Uniform</h1>
          <div className="p-[5%]">
          <p className="font-semibold">
            Shop Address :{<span className="font-normal">{shopAddress}</span>}
          </p>
          <p className=" font-semibold">
            Trading Hours :{<span className="font-normal">{tradingHours}</span>}
          </p>
          <p className="mb-4 font-semibold">
            Contacts Number :
            {<span className="font-normal">{contactNumber}</span>}
          </p>

          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow-md">
            {uniforms &&
              uniforms.map((uniform) => (
                <div key={uniform._id} className="relative">
                  <UniformCard uniform={uniform} />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Uniform;
