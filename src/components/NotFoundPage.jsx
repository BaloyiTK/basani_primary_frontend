import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900">Oops! Page not found.</h1>
      <p className="text-lg text-gray-700 mt-4">We couldn't find the page you were looking for.</p>
      <Link to="/" className="text-blue-500 hover:text-blue-700 mt-4">Go back to homepage</Link>
    </div>
  );
}

export default NotFoundPage;
