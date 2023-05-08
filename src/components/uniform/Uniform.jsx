import React, { useState, useEffect } from 'react';
import UniformCard from './UniformCard';
import api_endpoint from '../../utils/config';
import axios from 'axios';
import Spinner from '../Spinner';

const Uniform = () => {
  const [uniforms, setUniforms] = useState([]);
  const shopAddress = 'xxx xxxx Street, Chiawelo Soweto 1818';
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const fetchUniforms = async () => {
      const response = await axios.get(`${api_endpoint}/api/uniform`);
      setUniforms(response.data.uniform);
      setloading(false)
    };

    fetchUniforms();
  }, []);



  return (
    <div className="container mx-auto mt-20">

      {loading ? <div><Spinner/></div>: <div> <h1 className="text-3xl font-bold mb-8">Official Uniform</h1>
      <p className="mb-4">Shop Address :{shopAddress}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow-md">
        {uniforms &&
          uniforms.map((uniform) => (
            <div key={uniform._id} className="relative">
              <UniformCard uniform={uniform} />
  
            </div>
          ))}
      </div></div>}
     
    </div>
  );
}

export default Uniform;

