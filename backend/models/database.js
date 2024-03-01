const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

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
  name: String,
  email: String,
});

// Define a schema for the image collection
const imageSchema = new mongoose.Schema({
  image_id: Number,
  category_id: Number,
  bbox: [Number],
  score: Number,
});

// Define a schema for the video collection
const videoSchema = new mongoose.Schema({
  path: String,
  timestamp: Date,
  metadata: Object,
});

// Create models based on the schemas
const User = mongoose.model('User', userSchema);
const Image = mongoose.model('Image', imageSchema);
const Video = mongoose.model('Video', videoSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to handle user registration
app.post('/register', async (req, res) => {
  const { username, password, name, email } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword, name, email });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: 'Failed to save user to database' });
  }
});

// Route to handle user login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user in the database
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).send('Invalid username or password');
    }

    // Compare the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).send('Invalid username or password');
    }

    res.status(200).send('Login successful');
  } catch (error) {
    res.status(500).send('Internal server error');
  }
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

// Route to store image data
app.post('/images', (req, res) => {
  const imageData = req.body;

  // Create a new image document
  const newImage = new Image(imageData);

  // Save the image document to the database
  newImage.save((err, savedImage) => {
    if (err) {
      res.status(500).json({ message: 'Failed to save image to database' });
    } else {
      res.status(201).json(savedImage);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
