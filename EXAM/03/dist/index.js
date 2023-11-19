"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Drink_1 = require("./Drink");
const VendingMachine_1 = require("./VendingMachine");
function main() {
    //initialize vending machine
    const vendingMachine = new VendingMachine_1.VendingMachine(6);
    const tea = new Drink_1.Drink("Tea", 1.5, 300);
    const coffee = new Drink_1.Drink("Coffee", 2.0, 120);
    const hotChocolate = new Drink_1.Drink("Hot Chocolate", 2.5, 200);
    const latte = new Drink_1.Drink("Latte", 3.5, 220);
    const cappuccino = new Drink_1.Drink("Cappuccino", 2.8, 180);
    const mocha = new Drink_1.Drink("Mocha", 2.1, 150);
    const herbalTe = new Drink_1.Drink("Herbal Tea", 1.75, 300);
    //Get Count
    console.log(vendingMachine.getCount);
    //Add Drinks
    vendingMachine.addDrink(tea);
    vendingMachine.addDrink(coffee);
    vendingMachine.addDrink(hotChocolate);
    vendingMachine.addDrink(latte);
    vendingMachine.addDrink(cappuccino);
    vendingMachine.addDrink(mocha);
    //Try to add drinks when the capacity is full
    vendingMachine.addDrink(herbalTe);
    //Get Count
    console.log(vendingMachine.getCount);
    //Remove Drinks
    console.log(vendingMachine.removeDrink("Herbal Tea"));
    console.log(vendingMachine.removeDrink("Tea"));
    //Get longest drink
    console.log(vendingMachine.getLongest());
    //Get cheapest drink
    console.log(vendingMachine.getCheapest());
    //Buy drink
    console.log(vendingMachine.buyDrink("Cappuccino"));
    //Drinks report
    console.log(vendingMachine.report());
}
main();
