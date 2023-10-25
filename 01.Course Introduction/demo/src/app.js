var greetingsMessage = "Hello";
greetingsMessage = "Ok";
greetingsMessage = "Ok (Updated) ".concat(123);
// greetingsMessage = 11;
// console.log("string", greetingsMessage);
var numberOfHouses = 4;
numberOfHouses = 10100010111;
numberOfHouses = 7e3;
numberOfHouses = 3.14;
// numberOfHouses = "Pesho 123";
// console.log("number", numberOfHouses);
var isDog = true;
isDog = false;
isDog = 5 > 2;
isDog = [1, 2, 3, 4].some(function (e) { return e === 1; });
// 1/0 are not mapped to booleans true/false
// isDog = { name: "Kircho", breed: "nemska ovcharka" };
// console.log("boolean", isDog);
var uniqueSymbol = Symbol("myUniqueSymbol");
var anotherUniqueSymbol = Symbol("myUniqueSymbol");
var areEqual = uniqueSymbol === anotherUniqueSymbol;
// console.log("symbol - areEqual", areEqual);
var person;
// person = 123;
// console.log("undefinded", person);
var dogs = null;
// dogs = 123;
// console.log("null", dogs);
var arrOfNumbers = [1, 2, 3, 4];
// console.log("array of numbers", arrOfNumbers);
var arrOfRandomStrings = ["Pesho", "Dog", "Mice", "Card"];
// console.log("array of string", arrOfRandomStrings);
var arrOfBools = [true, false, true];
var arrOfObj = [
    { name: "Pesho2", age: 33 },
    { name: "Pesho1", age: 12 },
];
// console.log("array of objects", arrOfObj);
var numAndStrTuples = [18, "Pesho"];
//                key value
numAndStrTuples = [1, "Mitko"];
// console.log("number and string tuples ", numAndStrTuples);
// enum DaysOfWorkWeek {
//   Monday, // 0
//   Tuesday, // 1
//   Wednesday, // 2
//   Thursday, // 3
//   Friday, // 4
// }
// console.log("enum", DaysOfWorkWeek.Wednesday);
var DaysOfWorkWeek;
(function (DaysOfWorkWeek) {
    DaysOfWorkWeek[DaysOfWorkWeek["Monday"] = 1200] = "Monday";
    DaysOfWorkWeek["Tuesday"] = "Kuche";
    DaysOfWorkWeek[DaysOfWorkWeek["Wednesday"] = 300] = "Wednesday";
    DaysOfWorkWeek[DaysOfWorkWeek["Thursday"] = 4] = "Thursday";
    DaysOfWorkWeek[DaysOfWorkWeek["Friday"] = 5] = "Friday";
})(DaysOfWorkWeek || (DaysOfWorkWeek = {}));
// console.log("enum", DaysOfWorkWeek.Monday);
// console.log("enum", DaysOfWorkWeek.Tuesday);
// console.log("enum", DaysOfWorkWeek.Wednesday);
var a = 5;
a = "Poker";
a = { name: "Gosho" };
a = [{ name: "Gosho" }, { name: "Gosho2" }];
a = null;
// console.log("any", a);
var b = 5;
b = "Poker";
b = { name: "Gosho" };
b = [{ name: "Gosho" }, { name: "Gosho2" }];
b = null;
// console.log("unknown", b);
function greetings(name) {
    console.log("Hello, ".concat(name, "! This is 'void' example in TS!"));
}
// greetings("Pesho");
function printPersonDetail(name, age) {
    //   if (typeof age !== "undefined") {
    return "Hello ".concat(name, "! You are ").concat(age, " y/o.");
    //   }
    //   return "Hello " + name;
}
// console.log(printPersonDetail("Mitko"));
// console.log(printPersonDetail("Pesho", 18));
// let personsArray: string[] | null = null;
// function fetchPersons() {
//   personsArray = ["Mitko", "Pesho", "Kiro"];
// }
// console.log("personArray before", personsArray);
// fetchPersons();
// console.log("personArray after", personsArray);
var test = 1;
test = [1, 2, 3];
var obj = { name: " Pesho", fullName: "Pesho Todorv" };
// console.log("intersection", obj);
var statusMsg;
statusMsg = "success";
statusMsg = "error";
var catPesho = {
    breed: "ulichna",
    weigth: 12,
    name: "Pesho",
    age: 3,
};
var point = { x: 22, y: -12 };
var newPoint = {};
Object.keys(point).forEach(function (key) {
    newPoint[key] = point[key] * 10;
});
// console.log("demo keyof ", newPoint);
// type TreeNode {
//     value: number;
//     left?: TreeNode;
//     right?: TreeNode
// }
// Recursive Types
