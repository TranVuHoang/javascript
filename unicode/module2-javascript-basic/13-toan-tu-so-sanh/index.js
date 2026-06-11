let a = 1;
let b = 2;
console.log(">>> a =", a);
console.log(">>> b =", b);
console.log(">>> a > b:", a > b); // false
console.log(">>> a < b:", a < b); // true
console.log(">>> a >= b:", a >= b); // false
console.log(">>> a <= b:", a <= b); // true
console.log(">>> a == b:", a == b); // false
console.log(">>> a === b:", a === b); // false
console.log(">>> a != b:", a != b); // true
console.log(">>> a !== b:", a !== b); // true
console.log("---------------------------------");

const status = 1 === 2;
console.log(">>> status:", status); // false
//---------------------------------------------
// So sánh chuỗi
//---------------------------------------------
console.log("A" < "Z"); // true
console.log("Haha" > "Ha"); // true
console.log("Big" < "Bigbang"); // true
console.log("5" > 4); // true
console.log("01" == 1); // true
console.log("11" == 1); // false
console.log("---------------------------------");

console.log(true == 1); // true
console.log(false == 0); // true
console.log("---------------------------------");

console.log("" == 0); // true
