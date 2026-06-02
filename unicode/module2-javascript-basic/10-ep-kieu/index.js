console.log(String(123), typeof String(123)); // "123 string"
console.log(String(NaN), typeof String(NaN)); // "NaN string"
console.log(String(false), typeof String(false)); // "false string"
console.log(String(undefined), typeof String(undefined)); // "undefined string"
console.log(String(null), typeof String(null)); // "null string"
console.log(
  String({ name: "Hoàng Trần" }),
  typeof String({ name: "Hoàng Trần" }),
); // "{object, object} string"

let a = 12;
console.log("" + a, typeof ("" + a)); // 12 string
a = "10";
let b = "5";
console.log(">>> check a/b = ", a / b);

console.log("10" / "5"); //2

//---------------------------------------------------
// # Ép kiểu thành number
//---------------------------------------------------
console.log(">>> Check ép kiểu number:");
console.log(Number("")); //0
console.log(Number(" ")); //0
console.log(Number("Hello")); // NaN
console.log(Number("10")); // 10
console.log(Number("   10 ")); // 10
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number("10e5")); // 1000000
console.log(Number(NaN)); // NaN
