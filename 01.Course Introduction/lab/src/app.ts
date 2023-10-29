// 1. Hello World

const text: string = "Hellow World";

console.log(text);

console.log(`---------------------------------------------------------`);

// 2. Numbers 1 to 10

let output: number;

for (let index = 1; index <= 10; ++index) {
  output = index;
  console.log(output);
}

console.log(`---------------------------------------------------------`);

// 3.Calculate Rectangle Area

function calcRectangleArea(a: number, b: number) {
  let area = a * b;
  console.log(area);
}

calcRectangleArea(5, 7);
calcRectangleArea(6, 8);

console.log(`---------------------------------------------------------`);

// 4. Convertor Inches to Centimeters

function inchesToCentimeters(inches: number) {
  let centimeters = inches * 2.54;
  console.log(centimeters);
}

inchesToCentimeters(5);
inchesToCentimeters(7);

console.log(`---------------------------------------------------------`);

// 5. Calculate Circle Area

function calcCircleArea(radius: number) {
  let area = Math.PI * radius * radius;
  console.log(area.toFixed(2));
}

calcCircleArea(5);

console.log(`---------------------------------------------------------`);

// 6. String Length

function stringLength(str: string) {
  console.log(str.length);
}

stringLength("chocolate");
stringLength("pasta");

console.log(`---------------------------------------------------------`);

// 7. Largest Number

function largestNumber(a: number, b: number, c: number) {
  console.log(Math.max(a, b, c));
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);

console.log(`---------------------------------------------------------`);

// 8. Sum of Numbers N..M

function sumAllNumbers(n: string, m: string) {
  let num1 = Number(n);
  let num2 = Number(m);
  let sum = 0;

  for (let index = num1; index <= num2; index++) {
    sum = sum + index;
  }
  console.log(sum);
}

sumAllNumbers("1", "5");
sumAllNumbers("-8", "20");

console.log(`---------------------------------------------------------`);

// 9. Day of Week

function dayOfWeek(day: string) {
  switch (day) {
    case "Monday":
      console.log(1);
      break;
    case "Tuesday":
      console.log(2);
      break;
    case "Wednesday":
      console.log(3);
      break;

    case "Thursday":
      console.log(4);
      break;

    case "Friday":
      console.log(5);
      break;
    default:
      console.log("Invalid");
      break;
  }
}

dayOfWeek("Monday");
dayOfWeek("Friday");