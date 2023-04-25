import React, { useState, useEffect } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  console.log(galleryItems);

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

  return (
    <div>
      <h1>Gallery</h1>
    </div>
  );
};

export default Gallery;
