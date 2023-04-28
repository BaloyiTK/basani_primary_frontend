import React, { useState, useEffect } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";
import { Transition } from "@headlessui/react";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((currentImageIndex + 1) % galleryItems.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentImageIndex, galleryItems]);

  const handleNextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === galleryItems.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? galleryItems.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <div className="gallery">
      <div>
        {" "}
        <h2 className=" flex justify-center items-center text-3xl font-semibold text-gray-300 pt-4">
          Photo Gallery
        </h2>
      </div>
      <div className="relative h-screen">
        <Transition
          show={true}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <img
            className="object-contain w-2/3 rounded-lg p-5 mx-auto shadow-md"
            src={galleryItems[currentImageIndex]?.image}
            alt={galleryItems[currentImageIndex]?.title}
          />
        </Transition>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 py-2 bg-gray-900 bg-opacity-75 text-white">
          <div className="flex items-center">
            <span className="mr-2">{currentImageIndex + 1}</span>
            <span className="mr-1">/</span>
            <span>{galleryItems.length}</span>
          </div>
          <div className="flex items-center">
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md mr-4"
              onClick={handlePreviousImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.707 3.293a1 1 0 0 1 1.414 1.414L7.414 10l5.707 5.707a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6z"
                />
              </svg>
            </button>
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
              onClick={handleNextImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.293 16.707a1 1 0 0 1-1.414-1.414L12.586 10 6.293 4.293a1 1 0 1 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
