/**
 * Toán tử trong JS
 */

// #1. Toán tử số học
let a = 5;
const b = 10;
const c = 15;
const sum = a + b;
console.log(">>> check sum: ", sum);

const d = a * b + c;
console.log(">>> check d: ", d);

console.log(`${c} / ${b} = `, c / b);

const x = a++; // 5
console.log(">>> check x: ", x);

const y = a--; // 6
console.log(">>> check y: ", y); // 6

const x1 = 5; // number
const x2 = "5"; // string
console.log(x1 == x2); // true
console.log(x1 === x2); // false

// # Toán tử logic
let isAdult = true;
let hasID = false;
console.log(isAdult && hasID); // false
console.log(isAdult || hasID); // true
console.log(!hasID); //true
