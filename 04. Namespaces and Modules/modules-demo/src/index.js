import xx123 from "./utils/person-util";
import { nameCapitalizer } from "./utils/person-util";
const person1 = { age: 22, name: "mitko" };
const person2 = { name: "mitko2" };
const personOneCapitalized = nameCapitalizer(person1);
console.log(person1);
console.log(personOneCapitalized);
const personTwoCapitalized = nameCapitalizer(person2);
console.log(person2);
console.log(personTwoCapitalized);
console.log(xx123());
