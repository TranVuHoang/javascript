/**
 * Kiểu dữ liệu trong JS
 *
 * 1. Kiểu dữ liệu nguyên thuỷ - . primitiv data
 * - number
 * - string
 * - boolean
 * - undefined
 * - null
 * - symbol
 * - BigInt
 *
 * 2. Kiểu dữ liệu tham chiếu
 * - function
 * - array
 * - object
 * - ...
 */

// #1. Kiểu number
let a = 1;
let b = 2;
let c = 1.5;
console.log(">>> a =", a, "; type:", typeof a);
console.log(">>> b =", b, "; type:", typeof b);
console.log(">>> c =", c, "; type:", typeof c);

// #2. Kiểu string
var fullname = `Hoàng " 'Trần`;
console.log(">>> fullname: ", fullname, "; type: ", typeof fullname);

//3. Kiểu boolean
let isSuccess = true;
console.log(">>> isSuccess: ", isSuccess, "; type: ", typeof isSuccess);

// #4. Kiểu undefined
let age;
console.log(">>> age:", age, "; type: ", typeof age);

// #5. Kiểu null
let isNull = null;
console.log(">>> isNull:", isNull, "; type: ", typeof isNull);

// #6.Kiểu symbol
const id = Symbol("id");
const id2 = Symbol("id");

// #7. Kiểu BigInt
const x = 999999999999999999999999999999n;
console.log(">>> x:", x, "; type: ", typeof x);

//--------------------------------------------------
// Kiểu dữ liệu tham chiếu
//--------------------------------------------------

// function type
const myFunction = () => {
  console.log("Hello World!");
};
myFunction();

// Object type
const user = {
  name: "Hoàng IT",
  age: 29,
  address: "Hung Yen",
};
console.log(">>> user:", user, "; type: ", typeof user);

const languagePrograms = [
  "HTML",
  "CSS",
  "JS",
  "TS",
  "ReactJS",
  "PHP",
  "Laravel",
  "NodeJS",
  "SQL",
  "MySQL",
  "MongoDB",
];
console.log(
  ">>> languagePrograms:",
  languagePrograms,
  "; type: ",
  typeof languagePrograms,
);
