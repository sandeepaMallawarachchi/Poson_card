const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// POST /template/upload - Handle selected image
app.post('/template/upload', (req, res) => {
  const { image } = req.body;
  if (!image) {
    return res.status(400).send('No image selected.');
  }

  res.status(200).send('Image selected and processed successfully.');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});