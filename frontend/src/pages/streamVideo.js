import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoPlayer = () => {
  const [videoUrl, setVideoUrl] = useState('');

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

    fetchVideoUrl();

    // Set up a timer to periodically fetch the latest video URL
    const interval = setInterval(fetchVideoUrl, 5000); // Fetch every 5 seconds, adjust as needed

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div>
      <h1>Live Stream</h1>
      {videoUrl ? (
        <video controls autoPlay>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VideoPlayer;
