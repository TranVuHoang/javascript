/**
 * Mảng trong Javascript - Array
 *
 * 1. Tạo mảng
 * - Cách tạo
 * - Sử dụng cách nào? Tại sao?
 * - Kiểm tra data type
 *
 * 2. Truy xuất mảng
 * - Độ dài mảng
 * - Lấy phần tử theo index
 */

let languages = [
  "Javascript",
  "PHP",
  "Ruby",
  "Dart",
  null,
  undefined,
  function () {},
  {},
  123,
];
console.log(">>> language:", languages);
console.log(">>> type:", typeof languages);
// kiểm tra có phải mảng k
console.log(Array.isArray(languages));

console.log(languages[0]);
