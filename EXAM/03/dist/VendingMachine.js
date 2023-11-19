"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    get getCount() {
        return this.drinks.length;
    }
    ;
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    // getCount(): number {
    //     return this.drinks.length;
    // }
    addDrink(drink) {
        if (this.getCount < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const index = this.drinks.findIndex(drink => drink.name === name);
        if (index !== -1) {
            this.drinks.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    }
    //need to implement this method toSting problem
    getLongest() {
        const longest = this.drinks.reduce((prev, current) => (current.volume > prev.volume ? current : prev));
        return longest.toString();
    }
    getCheapest() {
        const cheapest = this.drinks.reduce((prev, current) => (current.price < prev.price ? current : prev));
        return cheapest.toString();
    }
    buyDrink(name) {
        const drink = this.drinks.find(drink => drink.name === name);
        return drink.toString();
    }
    report() {
        const report = this.drinks.map(drink => drink.toString()).join("\n");
        return `Drinks available:\n${report}`;
    }
}
exports.VendingMachine = VendingMachine;
