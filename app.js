const express = require("express");
const app = express();
const PORT = 3001;

// Middleware
//Gør alt i 'public' tilgængeligt for browseren (JS, CSS osv.)
app.use(express.static("public"));

app.set("view engine", "ejs") //henviser til vores view mappe - sætter ejs som template til rendering af views 
app.use(express.urlencoded({extended: true}));

const brugere = []; // Her gemmes brugerne i hukommelsen mens serveren kører

// Simple route
app.get("/", (req, res) => {
  res.render("index" ,{msg: "hi"});
});

//POST til bruger log in
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const bruger = brugere.find(user => user.username === username && user.password === password);

  if (bruger) {
    res.send(`Velkommen, ${username}! Du er nu logget ind.`);
  } else {
    res.send("Forkert brugernavn eller kodeord.");
  }
});


app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  // Tjek om brugeren allerede findes
  const findesAllerede = brugere.find(user => user.username === username);

  if (findesAllerede) {
    res.send("Brugernavn er allerede taget. Prøv et andet.");
  } else {
    // Gem brugeren
    brugere.push({ username, password });
    res.send("Bruger oprettet! Du kan nu logge ind.");
  }
});

app.get("/dashboard", (req, res) => {
  // Midlertidige dummy-data (til du henter det fra DB)
  const username = "Celina";
  const totalVaerdi = 224543;
  const realiseretGevinst = 10241;
  const urealisaretGevinst = 25015;

  const topVaerdiListe = [];
  const topProfitListe = [];

  res.render("dashboard", {
    username,
    totalVaerdi,
    realiseretGevinst,
    urealisaretGevinst,
    topVaerdiListe,
    topProfitListe
  });
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});