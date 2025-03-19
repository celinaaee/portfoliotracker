class Portfolio {
    constructor(id, userId, name, accountId, createdAt) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.accountId = accountId;
        this.createdAt = createdAt;
        this.assets = []; // Liste over værdipapirer
    }

    // Tilføj et værdipapir til porteføljen
    addAsset(asset) {
        this.assets.push(asset);
    }

    // Fjern et værdipapir fra porteføljen
    removeAsset(assetId) {
        this.assets = this.assets.filter(asset => asset.id !== assetId);
    }

    // Beregn samlet GAK (Gennemsnitlig anskaffelseskurs)
    calculateGAK(assetId) {
        const asset = this.assets.find(a => a.id === assetId);
        if (!asset) return null;
        return asset.totalCost / asset.quantity;
    }

    // Beregn forventet værdi af porteføljen
    calculateExpectedValue() {
        return this.assets.reduce((sum, asset) => sum + asset.getExpectedValue(), 0);
    }
}
