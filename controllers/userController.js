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
  const { username, email, password } = req.body;

  if (userModel.userExists(username)) {
    res.render("index", { msg: "Brugernavn er allerede taget." });
  } else {
    userModel.createUser(username, email, password);
    res.redirect("/dashboard");
  }
}

module.exports = { login, signup };
