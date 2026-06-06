/**
 * Kiểu number trong JS
 *
 * 1. Tạo giá trị number
 * - Các cách tạo
 * - Dùng cách nào? Tại sao?
 * - Kiểm tra data type
 *
 * 2. Làm việc với number
 * - to string
 * - to fixed
 */
const age = 29;
console.log(">>> age:", age); // >>> age: 29

const PI = 3.14;
console.log(">>> PI:", PI); // >>> PI: 3.14

let result = 20 / "2";
console.log(">>> result:", result); // >>> result: 10

result = 20 / "ABC";
console.log(">>> result:", result); // >>> result: NaN
console.log(">>> check: ", isNaN(result));

// Phương thức toFixed(): Làm tròn số thập phân
const numberTest = 29034.20394239;
console.log(">>> numberTest ban đầu:", numberTest); // 29034
console.log(">>> numberTest làm tròn đến hàng chục:", numberTest.toFixed(2)); // 29034.20
console.log(">>> numberTest sau khi làm tròn:", numberTest.toFixed()); // 29034
