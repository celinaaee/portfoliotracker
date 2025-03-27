//Opretter userModel variabel
//Gemmer data fra userModel.ejs
const userModel = require("../models/userModel");

function login(req, res) {
  const { username, password } = req.body;
  const bruger = userModel.findUser(username, password);

  if (bruger) {
    res.redirect("/dashboard");
  } else {
    res.render("index", { msg: "Forkert brugernavn eller kodeord." });
  }
}

function signup(req, res) {
  const {name, username, email, password } = req.body;

  // if (userModel.userExists(username)) {
  //   res.render("index", { msg: "Brugernavn er allerede taget." });
  // } else {
  //   userModel.createUser(username, email, password);
  //   res.redirect("/dashboard");
  // }

  // inden den her funktion kan man lave if/else der tjekker om bruger eksisterer
  createUser(name, username, email, password);

}

module.exports = { login, signup };
