const { executeQuery } = require('../database');

class Bruger {
  constructor(navn, brugernavn, email, password){
    this.navn = navn;
    this.brugernavn = brugernavn;
    this.email = email;
    this.password = password;
  }
  tilføjBruger(){

  }
}

//Tomt array som skal fungere som vores database til at gemme brugere mens serveren kører
const brugere = [];

//Søger i brugere-arrayet efter en bruger, hvor både brugernavn og adgangskode passer
function findUser(username, password) {
  return brugere.find(user => user.username === username && user.password === password);
}

//Tjekker om der allerede findes en bruger med det pågældende brugernavn.
function userExists(username) {
  return brugere.find(user => user.username === username);
}

async function createUser(name, username, email, password) {
  const query = `
    INSERT INTO Users (name, username, email, password)
    VALUES (@name, @username, @email, @password)
  `;

  const params = {
    name,
    username,
    email,
    password
  };

  try {
    await executeQuery(query, params);
    console.log('✅ Bruger oprettet!');
  } catch (err) {
    console.error('❌ Kunne ikke oprette bruger:', err.message);
  }
}

// Eksportér funktioner
module.exports = {
  createUser
};
