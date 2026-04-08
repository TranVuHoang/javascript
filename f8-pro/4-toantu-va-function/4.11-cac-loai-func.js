/**
 * Các loại function:
 * 1. Function declaration
 * 2. Function expression
 * 3. Arrow function
 * 4. Anonymous function
 * 5. Recursive function
 * 6. Higher-order function
 * 7. Generator function
 * 8. Async function
 * 9. IIFE (Immediately Invoked Function Expression)
 * 10. Callback function
 */
// 1. Function declaration
function showGreeting() {
  console.log("Xin chào các bạn!");
  console.log("Đây là khoá JS Pro!");
}
showGreeting(); // Gọi hàm

function showGreeting3(title, mesage) {
  console.log(title);
  console.log(mesage);
}
showGreeting3("Xin chào các bạn!", "Đây là khoá JS Pro!");

// Hàm có tham số(parameters)
function showGreeting4(
  title = "Xin chào các bạn!",
  message = "Đây là khoá JS Pro!",
) {
  console.log(title);
  console.log(message);
}
showGreeting4();
showGreeting4("Chào mừng các bạn đến với khoá học JS Pro!");

// 2. Function expression
const showGreeting2 = function () {
  console.log("Xin chào các bạn!");
  console.log("Đây là khoá JS Pro!");
};
showGreeting2(); // Gọi hàm
// 3. Arrow function
const showGreeting5 = () => {
  console.log("Xin chào các bạn!");
  console.log("Đây là khoá JS Pro!");
};
showGreeting5(); // Gọi hàm

// tính tích a và b bằng arrow function
const multiply = (a, b) => {
  return a * b;
};
console.log("Kết quả của phép nhân là: ", multiply(3, 3));

// Hàm nhận một số và trả về kết quả của phép nhân số đó với 2 bằng arrow function
const double1 = (number) => {
  return number * 2;
};
const double2 = (number) => number * 2; // Cách viết ngắn gọn hơn
const double3 = (number) => number * 2; // Cách viết ngắn gọn hơn nữa
console.log("Kết quả của phép nhân là: ", double(2));
console.log("Kết quả của phép nhân là: ", double(5));
