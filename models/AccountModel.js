class Account {
    constructor(id, userId, name, currency, balance, createdAt, bankReference) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.currency = currency;
        this.balance = balance;
        this.createdAt = createdAt;
        this.bankReference = bankReference;
        this.isClosed = false;
    }

    // Metode til at indsætte penge
    deposit(amount) {
        if (this.isClosed) throw new Error("Kontoen er lukket");
        this.balance += amount;
    }

    // Metode til at hæve penge
    withdraw(amount) {
        if (this.isClosed) throw new Error("Kontoen er lukket");
        if (amount > this.balance) throw new Error("Ikke nok saldo");
        this.balance -= amount;
    }

    // Metode til at lukke konto
    closeAccount() {
        this.isClosed = true;
    }

    // Metode til at genåbne konto
    reopenAccount() {
        this.isClosed = false;
    }
}
