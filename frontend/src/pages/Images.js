import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Images() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('mongodb+srv://<username>:<password>@weapon-detector.qgq5kfl.mongodb.net/images');
        setImages(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages();
  }, []);

  const fetchImageById = async (imageId) => {
    try {
      const response = await axios.get(`mongodb+srv://<username>:<password>@weapon-detector.qgq5kfl.mongodb.net/images/${imageId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return (
    <div>
      <h2>Images</h2>
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-md-4">
            <ImageComponent imageId={image.image_id} fetchImageById={fetchImageById} />
          </div>
        ))}
      </div>
    </div>
  );
}

const ImageComponent = ({ imageId, fetchImageById }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      const imageData = await fetchImageById(imageId);
      setImage(imageData);
    };
    loadImage();
  }, [imageId, fetchImageById]);

  return image ? (
    <img src={`data:image/jpeg;base64,${image.stream}`} alt={`Image ${imageId}`} className="img-fluid" />
  ) : (
    <p>Loading...</p>
  );
};

export default Images;
