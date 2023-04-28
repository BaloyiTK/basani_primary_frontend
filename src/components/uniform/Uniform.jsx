import React, { useState, useEffect } from 'react';
import UniformCard from './UniformCard';
import api_endpoint from '../../utils/config';
import axios from 'axios';

const Uniform = () => {
  const [uniforms, setUniforms] = useState([]);
  const shopAddress = '123 Main Street, Anytown USA';

  useEffect(() => {
    const fetchUniforms = async () => {
      const response = await axios.get(`${api_endpoint}/api/uniform`);
      setUniforms(response.data.uniform);
    };

    fetchUniforms();
  }, []);



  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-4xl font-bold mb-8">Official Uniform</h1>
      <p className="mb-4">Shop Address :{shopAddress}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow-md">
        {uniforms &&
          uniforms.map((uniform) => (
            <div key={uniform.id} className="relative">
              <UniformCard uniform={uniform} />
  
            </div>
          ))}
      </div>
    </div>
  );
};

export default Uniform;

