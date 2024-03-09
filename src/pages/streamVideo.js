import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoPlayer = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [recentImages, setRecentImages] = useState([]);

  useEffect(() => {
    // Fetch the video URL from the server
    const fetchVideoUrl = async () => {
      try {
        const response = await axios.get('http://localhost:3000/videos/latest'); // Change the endpoint as needed
        if (response.data.path) {
          setVideoUrl(response.data.path);
        } else {
          console.error('Video URL not found');
        }
      } catch (error) {
        console.error('Failed to fetch video URL:', error.message);
      }
    };

    // Fetch recent images from the server
    const fetchRecentImages = async () => {
      try {
        const response = await axios.get('http://localhost:3000/images/recent'); // Change the endpoint as needed
        setRecentImages(response.data);
      } catch (error) {
        console.error('Failed to fetch recent images:', error.message);
      }
    };

    fetchVideoUrl();
    fetchRecentImages();

    // Set up a timer to periodically fetch the latest video URL and recent images
    const interval = setInterval(() => {
      fetchVideoUrl();
      fetchRecentImages();
    }, 5000); // Fetch every 5 seconds, adjust as needed

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="container">
      <h1>Live Stream</h1>
      <div className="row">
        <div className="col-md-8">
          {videoUrl ? (
            <video controls autoPlay className="w-100">
              <source src={videoUrl} type="application/x-mpegURL" />
              Your browser does not support the video tag or the HLS format.
            </video>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="col-md-4">
          <h2>Recent Images</h2>
          <div className="row">
            {recentImages.map((image, index) => (
              <div key={index} className="col-md-6 mb-2">
                <img src={`data:image/jpeg;base64,${image.stream}`} alt={`Image ${index}`} className="img-fluid" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
