import React from 'react';
import 'tailwindcss/tailwind.css';

const SchoolHistory = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto ">
      <div className="px-4 py-2">
        <h2 className="text-xl font-bold text-gray-800">School History</h2>
      </div>
      <div className="bg-gray-100 px-4 py-2">
        <p className="text-gray-600 leading-7">
          Our school has a rich history spanning over 100 years. It was founded in 1920 by John Smith, a visionary educator who believed in the power of education to transform lives.
        </p>
        <p className="text-gray-600 leading-7 mt-3">
          Over the years, our school has grown and evolved, but our commitment to academic excellence and community service remains as strong as ever. We have produced many successful alumni who have gone on to make a positive impact in various fields.
        </p>
      </div>
    </div>
  )
}

export default SchoolHistory;
