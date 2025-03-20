const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.static("public"));

app.set("view engine", "ejs") //henviser til vores view mappe - sætter ejs som template til rendering af views 
app.use(express.urlencoded({extended: true}));

// Simple route
app.get("/", (req, res) => {
  res.render("index");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});