import React, { useState, useEffect } from 'react';
import UniformCard from './UniformCard';

const Uniform = () => {
  const [uniforms, setUniforms] = useState([]);
  const shopAddress = '123 Main Street, Anytown USA';

  useEffect(() => {
    // Fetch uniforms from the database here and set the state
    const fetchedUniforms = [
      { id: 1, name: 'School Shirt', description: 'Short-sleeve school shirt', price: 20, image: 'https://via.placeholder.com/300x300.png?text=School+Shirt' },
      { id: 2, name: 'School Pants', description: 'Navy blue school pants', price: 30, image: 'https://via.placeholder.com/300x300.png?text=School+Pants' },
      { id: 3, name: 'School Skirt', description: 'Pleated school skirt', price: 25, image: 'https://via.placeholder.com/300x300.png?text=School+Skirt' },
      { id: 4, name: 'School Tie', description: 'Navy blue school tie', price: 10, image: 'https://via.placeholder.com/300x300.png?text=School+Tie' },
      { id: 5, name: 'School Jacket', description: 'Navy blue school jacket', price: 50, image: 'https://via.placeholder.com/300x300.png?text=School+Jacket' },
    ];
    setUniforms(fetchedUniforms);
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-8">Uniforms</h1>
      <p className="mb-4">{shopAddress}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {uniforms.map(uniform => (
          <UniformCard key={uniform.id} uniform={uniform} />
        ))}
      </div>
    </div>
  );
};

export default Uniform;
