import { Drink } from "./Drink";

export class VendingMachine {
    buttonCapacity: number; //number
    drinks: Drink[];
    get getCount(): number {
        return this.drinks.length;
    };

    constructor(buttonCapacity: number) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }

    // getCount(): number {
    //     return this.drinks.length;
    // }

    addDrink(drink: Drink): void {
        if (this.getCount < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }

    removeDrink(name: string): boolean {
        const index = this.drinks.findIndex(drink => drink.name === name);
        if (index !== -1) {
            this.drinks.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }


//need to implement this method toSting problem
    getLongest(): string {
        const longest = this.drinks.reduce((prev, current) => (current.volume > prev.volume ? current : prev));
       
        return longest.toString();
    }

    getCheapest(): string {
        const cheapest = this.drinks.reduce((prev, current) => (current.price < prev.price ? current : prev));

        return cheapest.toString();
    }

    buyDrink(name:string): string {
        const drink = this.drinks.find(drink => drink.name === name);
        
        return drink.toString();
   
    }

    report(): string {
        const report = this.drinks.map(drink => drink.toString()).join("\n");
        return `Drinks available:\n${report}`;
    }
}