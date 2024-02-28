const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a schema for the user collection
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const videoSchema = new mongoose.Schema({
    path: String,
    timestamp: Date,
    metadata: Object,
  });
  
// Create a model based on the schema
const User = mongoose.model('User', userSchema);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to handle user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user in the database
  User.findOne({ username, password }, (err, user) => {
    if (err) {
      res.status(500).json({ message: 'Internal server error' });
    } else if (!user) {
      res.status(401).json({ message: 'Invalid username or password' });
    } else {
      res.status(200).json({ message: 'Login successful' });
    }
  });
});
// Route to retrieve a video by ID
app.get('/videos/:id', (req, res) => {
    const { id } = req.params;
  
    // Find the video in the database by ID
    Video.findById(id, (err, video) => {
      if (err) {
        res.status(500).json({ message: 'Failed to retrieve video from database' });
      } else if (!video) {
        res.status(404).json({ message: 'Video not found' });
      } else {
        // Serve the video file or URL
        res.status(200).json(video);
      }
    });
  });
  
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.post('/videos', (req, res) => {
    const { path, timestamp, metadata } = req.body;
  
    // Create a new video document
    const newVideo = new Video({ path, timestamp, metadata });
  
    // Save the video document to the database
    newVideo.save((err, savedVideo) => {
      if (err) {
        res.status(500).json({ message: 'Failed to save video to database' });
      } else {
        res.status(201).json(savedVideo);
      }
    });
  });
  