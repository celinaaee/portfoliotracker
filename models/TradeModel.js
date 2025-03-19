class Trade {
    constructor(id, portfolioId, assetId, type, quantity, pricePerUnit, totalCost, fee, date) {
        this.id = id;
        this.portfolioId = portfolioId;
        this.assetId = assetId;
        this.type = type; // "BUY" eller "SELL"
        this.quantity = quantity;
        this.pricePerUnit = pricePerUnit;
        this.totalCost = totalCost;
        this.fee = fee;
        this.date = date;
    }

    // Udfør en handel og opdater porteføljen
    executeTrade(portfolio) {
        const asset = portfolio.assets.find(a => a.id === this.assetId);

        if (this.type === "BUY") {
            if (!asset) {
                portfolio.addAsset(new Asset(this.assetId, portfolio.id, "Unknown", "UNK", this.quantity, this.pricePerUnit, this.pricePerUnit));
            } else {
                asset.quantity += this.quantity;
                asset.purchasePrice = ((asset.purchasePrice * (asset.quantity - this.quantity)) + (this.pricePerUnit * this.quantity)) / asset.quantity;
            }
        } else if (this.type === "SELL") {
            if (!asset || asset.quantity < this.quantity) {
                throw new Error("Ikke nok aktier til at sælge");
            }
            asset.quantity -= this.quantity;
        }
    }
}
