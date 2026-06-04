/**
 * Toán tử gán
 *
 * Toán tử        Ví dụ           Tương đương
 * =              x = y           x = y
 * +=             x += y          x = x + y
 * -=             x -= y          x = x - y
 * *=             x *= y          x = x * y
 * /=             x /= y          x = x / y
 * **=             x **= y          x = x ** y
 */
let a = 1;
let b = 2;
console.log(">>> a=", (a += b));
console.log(">>> a=", (a -= b));
console.log(">>> a=", (a *= b));
console.log(">>> a=", (a /= b));
console.log(">>> a=", (a %= b));
console.log(">>> a=", (a **= b));
