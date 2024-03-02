import React, { useState } from 'react';
import axios from 'axios';

const UploadVideoForm = () => {
  const [path, setPath] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [metadata, setMetadata] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/videos', {
        path,
        timestamp,
        metadata: JSON.parse(metadata),
      });
      if (response.status === 201) {
        setMessage('Video uploaded successfully');
      }
    } catch (error) {
      setMessage('Failed to upload video');
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Video Path:</label>
          <input type="text" value={path} onChange={(e) => setPath(e.target.value)} required />
        </div>
        <div>
          <label>Timestamp:</label>
          <input type="datetime-local" value={timestamp} onChange={(e) => setTimestamp(e.target.value)} required />
        </div>
        <div>
          <label>Metadata (JSON):</label>
          <textarea value={metadata} onChange={(e) => setMetadata(e.target.value)} required />
        </div>
        <button type="submit">Upload Video</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadVideoForm;
