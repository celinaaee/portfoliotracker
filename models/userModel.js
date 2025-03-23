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

//Opretter en ny bruger ved at tilføje et objekt med username, email og password til brugere-arrayet.
  function createUser(navn, brugernavn, email, password) {
    brugere.push(new Bruger(navn, brugernavn, email, password));
  }

  