import React, { useState, useEffect } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";
import { Transition } from "@headlessui/react";
import Spinner from "../Spinner";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const response = await axios.get(`${api_endpoint}/api/gallery`);
        setGalleryItems(response.data.gallery);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGalleryItems();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((currentImageIndex + 1) % galleryItems.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentImageIndex, galleryItems.length]);

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
    <div className="md:h-screen">
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <div>
            <h2 className="flex justify-center items-center text-3xl font-bold text-gray-900 pt-10">
              Photo Gallery
            </h2>
          </div>
          <div className="relative min-h-fit">
            <Transition
              show={true}
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-1000"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div class="flex items-center justify-center">
                <img
                  class="w-full h-[400px] pt-5 object-cover rounded-lg shadow-md md:w-2/3 md:h-[500px]"
                  src={galleryItems[currentImageIndex]?.image}
                  alt="Basani Primary School"
                  onLoad={() => {
                    setLoading(false);
                  }}
                />
              </div>
            </Transition>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 py-2  bg-gray-900 bg-opacity-75 text-white">
              <div className="flex items-center">
                <span className="mr-2">{currentImageIndex + 1}</span>
                <span className="mr-1">/</span>
                <span>{galleryItems.length}</span>
              </div>
              <div className="flex items-center">
                <button
                  className="bg-gray-800 hover:bg-gray-300 text-white hover:text-black px-4 py-2 rounded-md mr-4"
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
                  className="bg-gray-800 hover:bg-gray-300 text-white hover:text-black px-4 py-2 rounded-md"
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
        </>
      )}
    </div>
  );
};

export default Gallery;
