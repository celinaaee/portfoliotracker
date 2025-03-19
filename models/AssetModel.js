class Asset {
    constructor(id, portfolioId, name, ticker, quantity, purchasePrice, currentPrice) {
        this.id = id;
        this.portfolioId = portfolioId;
        this.name = name;
        this.ticker = ticker;
        this.quantity = quantity;
        this.purchasePrice = purchasePrice;
        this.currentPrice = currentPrice;
    }

    // Beregn den forventede værdi
    getExpectedValue() {
        return this.quantity * this.currentPrice;
    }

    // Beregn urealiseret gevinst/tab
    getUnrealizedProfitLoss() {
        return this.getExpectedValue() - (this.quantity * this.purchasePrice);
    }
}
