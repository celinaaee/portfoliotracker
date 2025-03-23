//Tomt array som skal fungere som vores database til at gemme brugere mens serveren kører
const brugere = [];


function findUser(username, password) {
    return brugere.find(user => user.username === username && user.password === password);
  }
  
  function userExists(username) {
    return brugere.find(user => user.username === username);
  }
  
  function createUser(username, password) {
    brugere.push({ username, password });
  }