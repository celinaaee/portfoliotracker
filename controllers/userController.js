const userModel = require("../models/userModels");

function login(req, res) {
  const { username, password } = req.body;
  const bruger = userModel.findUser(username, password);

  if (bruger) {
    res.send(`Velkommen, ${username}! Du er nu logget ind.`);
  } else {
    res.send("Forkert brugernavn eller kodeord.");
  }
}

function signup(req, res) {
  const { username, password } = req.body;

  if (userModel.userExists(username)) {
    res.send("Brugernavn er allerede taget. Prøv et andet.");
  } else {
    userModel.createUser(username, password);
    res.send("Bruger oprettet! Du kan nu logge ind.");
  }
}

module.exports = { login, signup };
