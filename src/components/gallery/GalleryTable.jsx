import React, { useState, useEffect } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";

const GalleryTable = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  console.log(galleryItems);

  // Fetch gallery items from the backend API on component mount
  useEffect(() => {
    axios
      .get(`${api_endpoint}/api/gallery`)
      .then((response) => {
        setGalleryItems(response.data.gallery);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Delete a gallery item from the backend API
  const deleteGalleryItem = (itemId) => {
    axios
      .delete(`${api_endpoint}/api/gallery/${itemId}`)
      .then((response) => {
        // Remove the deleted item from the gallery items list
        setGalleryItems(galleryItems.filter((item) => item._id !== itemId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto=">
    <table className="min-w-full divide-y divide-gray-200">
  <thead className="bg-gray-50">
    <tr>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Image
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Actions
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    {galleryItems.map((item) => (
      <tr key={item._id}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img
                className="w-full h-full rounded-md object-cover"
                src={item.image}
                alt="Gallery item"
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {item.Image}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <button
              onClick={() => deleteGalleryItem(item._id)}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default GalleryTable;
