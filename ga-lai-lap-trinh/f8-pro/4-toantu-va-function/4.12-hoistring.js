// hoisting là một cơ chế trong JavaScript, nơi các khai báo biến và hàm được "nâng lên" lên đầu phạm vi của chúng trước khi mã được thực thi. Điều này có nghĩa là bạn có thể sử dụng các biến và hàm trước khi chúng được khai báo trong mã của bạn.

// Ví dụ về hoisting với biến
console.log(x); // undefined (do x được hoisted nhưng chưa được gán giá trị)
var x = 5;
console.log(x); // 5

// Ví dụ về hoisting với hàm function declaration
greet(); // "Hello!" (do greet được hoisted hoàn chỉnh)
function greet() {
  console.log("Hello!");
}
// Ví dụ về hoisting với hàm function expression
try {
  sayHi(); // TypeError: sayHi is not a function (do sayHi được hoisted nhưng chỉ là undefined)
} catch (error) {
  console.error(error);
}
var sayHi = function () {
  console.log("Hi!");
};
sayHi(); // "Hi!" (sau khi sayHi được gán giá trị)

// học hoisting để hiểu cách JavaScript xử lý các khai báo biến và hàm, giúp bạn tránh được những lỗi phổ biến khi sử dụng chúng trong mã của mình.

function run() {
  return sum(2, 3); // hoisting cho phép gọi hàm sum trước khi nó được khai báo

  function sum(a, b) {
    return a + b;
  }
}
const result = run();
console.log(result); // 5
