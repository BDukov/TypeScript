// interface CityInfo {
//     name: string;
//     population: number;
//     treasury: number;
//     taxRate: number;
//     collectTaxes(): void;
//     applyGrowth(percent: number): void;
//     applyRecession(percent: number): void;
// }
// function cityTaxes(name: string, population: number, treasury: number): CityInfo {
//     const currentCity: CityInfo = {
//         name,
//         population,
//         treasury,
//         taxRate: 10,
//         collectTaxes(): void {
//             this.treasury = this.treasury + (this.population * this.taxRate);
//         },
//         applyGrowth(percent: number): void {
//             this.population = this.population + (this.population * (percent / 100));
//         },
//         applyRecession(percent: number): void {
//             this.treasury = this.treasury - (this.treasury * (percent / 100));
//         }
//     };
//     return currentCity;
// }
// const city = cityTaxes('Tortuga', 7000, 15000);
// console.log(city);
// city.collectTaxes();
// console.log(city.treasury);
// city.applyGrowth(5);
// console.log(city.population);
class City {
    constructor(name, population, treasury) {
        this.name = name;
        this.population = population;
        this.treasury = treasury;
        this.taxRate = 10;
    }
    collectTaxes() {
        this.treasury = this.treasury + (this.population * this.taxRate);
    }
    applyGrowth(percent) {
        this.population = this.population + (this.population * (percent / 100));
    }
    applyRecession(percent) {
        this.treasury = this.treasury - (this.treasury * (percent / 100));
    }
}
function cityTaxes(name, population, treasury) {
    const currentCity = new City(name, population, treasury);
    // console.log(currentCity);
    let output = {
        name: currentCity.name,
        population: currentCity.population,
        treasury: currentCity.treasury,
        taxRate: currentCity.taxRate,
        collectTaxes: typeof (currentCity.collectTaxes()),
        applyGrowth: currentCity.applyGrowth(),
        applyRecession: currentCity.applyRecession()
    };
    console.log(output);
    return currentCity;
}
const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);
