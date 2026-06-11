console.log(5 + 2); //7
console.log(5 - 2); //3
console.log(5 * 2); //10
console.log(5 / 2); //2.5
console.log(5 % 2); //1(chia lấy dư)
console.log(5 ** 2); //25(5 luỹ thừa 2)

console.log("----------------------------");
/** Các toán hạng không phải số */
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("5" / 2); //2.5
console.log("5" % 2); //1
console.log("5" % "2"); //1
console.log("5a" % 2); //NaN
console.log("5a" % "2"); //NaN
console.log("5b" ** 2); //NaN
console.log(NaN * 2); // NaN

/** Toán tử nối chuỗi */
let a = "10";
let b = 2;
let c = a + b;
console.log(">>> c =", c, "| type:", typeof c);

/** Ép kiểu dữ liệu */
a = "10";
let x = Number(a);
console.log(">>> a =", x, "| type:", typeof x);
// không ảnh hưởn đến số
console.log(+1); //1

// Chuyển đổi các kiểu dữ liệu khác thành số
console.log(+true); //1
console.log(+false); //0
console.log(+"abc"); //NaN
console.log(+""); //0
console.log(+null); //0
console.log(+undefined); //NaN
console.log(+{ x: 1 }); // NaN

// Toán tử gán
let message = "Hello";
let x1, y, z, t;
x1 = y = z = t = "Hello";
console.log(">>> x =", x1);
console.log(">>> y =", y);
console.log(">>> z =", z);
console.log(">>> t =", t);

let n = 1;
n = n + 5;
console.log(">>> n =", n);
n = "JS";
console.log(">>> n:", n);

// Toán tử ++, --
let count = 1;
count++;
count++;
count--;
--count;
console.log(">>> count =", count); //1

let total = 1;
total = count++;
console.log(">>> count =", count); // 2
console.log(">>> total = ", total); // 1

let a1 = 10;
let b1 = 20;
let c1 = 30;
let d1 = (a1 + b1, b1 + c1);
console.log(">>> d1 =", d1); // 50
