class User {
    constructor(id, username, email, password) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Metode til at kryptere adgangskode
    hashPassword() {
        // Implementér hashing (fx med bcrypt)
    }

    // Metode til at validere adgangskode
    validatePassword(inputPassword) {
        // Sammenlign inputPassword med den hashede adgangskode
    }
}
