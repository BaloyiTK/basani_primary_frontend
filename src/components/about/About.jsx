import React from 'react';

const About = () => {
  return (
    <div className="mx-20 mt-40">
      <div className="text-center md:text-left mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">About Our School</h2>
        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt ipsum vel mi auctor, vel congue dolor accumsan. Integer a ante eu nisi imperdiet vulputate at eget elit.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt ipsum vel mi auctor, vel congue dolor accumsan. Integer a ante eu nisi imperdiet vulputate at eget elit.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt ipsum vel mi auctor, vel congue dolor accumsan. Integer a ante eu nisi imperdiet vulputate at eget elit.</p>
        </div>
      </div>
    </div>
  )
}

export default About;
