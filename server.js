require('dotenv').config()
const express = require("express");

//intialize a express app
const app = express();

//some sample routes

app.get("/", (req, res) => {
  res.status(200).json({ message: "From here again" });
});

app.get('/secret', (req, res) => {
  res.status(200).json({ message: process.env.SECRET})
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server up and running on http://localhost:${port}`);
});
