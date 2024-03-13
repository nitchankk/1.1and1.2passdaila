class Stock {
    constructor() {
        this.stockItems = [];
    }

    findItemIndex(id) {
        return this.stockItems.findIndex(item => item.itemID === id);
    }

    addItem(id, amount) {
        if (id == null || amount == null || id === undefined || amount === undefined) {
            return -1;
        }

        const index = this.findItemIndex(id);
        if (index !== -1) {
            this.stockItems[index].quantity += amount;
            return amount;
        } else {
            this.stockItems.push({ itemID: id, quantity: amount });
            return amount;
        }
    }

    addItems(items) {
        let addedCount = 0;
        items.forEach(item => {
            const addedAmount = this.addItem(item.itemID, item.quantity);
            if (addedAmount !== -1) {
                addedCount++;
            }
        });
        return addedCount;
    }

    sell(id, amount) {
        const index = this.findItemIndex(id);
        if (index !== -1) {
            if (this.stockItems[index].quantity >= amount) {
                this.stockItems[index].quantity -= amount;
                return amount;
            } else {
                const soldAmount = this.stockItems[index].quantity;
                this.stockItems[index].quantity = 0;
                return soldAmount;
            }
        } else {
            return -1;
        }
    }

    getAllStockAmount() {
        return this.stockItems.reduce((total, item) => total + item.quantity, 0);
    }
}

// Example usage:
const stock = new Stock();
stock.addItems([{ itemID: 102, quantity: 23 }, { itemID: 103, quantity: 53 }, { itemID: 103, quantity: 0 }]);
console.log(stock.getAllStockAmount()); // Output: 76

stock.addItems([{ itemID: 102, quantity: 103 }, { itemID: null, quantity: 51 }, { itemID: 103, quantity: 51 }]);
console.log(stock.getAllStockAmount()); // Output: 279

console.log(stock.sell(103, 50)); // Output: 50
console.log(stock.getAllStockAmount()); // Output: 229
