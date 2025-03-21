const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
//Gør alt i 'public' tilgængeligt for browseren (JS, CSS osv.)
app.use(express.static("public"));

app.set("view engine", "ejs") //henviser til vores view mappe - sætter ejs som template til rendering af views 
app.use(express.urlencoded({extended: true}));

// Simple route
app.get("/", (req, res) => {
  res.render("index" ,{msg: "hi"});
});

//POST til bruger log in
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Her kunne du validere brugeren
  res.send(`Modtaget login for: ${username}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});