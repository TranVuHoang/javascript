function calculateAverage(diemToan, diemLy, diemHoa) {
  return (diemToan + diemLy + diemHoa) / 3;
}
// Sinh viên 1
const diemToan1 = 8;
const diemLy1 = 7;
const diemHoa1 = 6;

const diemTB1 = calculateAverage(8, 7, 6);
console.log("Điểm trung bình của sinh viên 1 là: " + diemTB1);

// Sinh viên 2
const diemToan2 = 9;
const diemLy2 = 8;
const diemHoa2 = 7;
const diemTB2 = calculateAverage(9, 8, 7);
console.log("Điểm trung bình của sinh viên 2 là: ", diemTB2);

// Sinh viên 3
const diemToan3 = 7;
const diemLy3 = 6;
const diemHoa3 = 5;
const diemTB3 = calculateAverage(7, 6, 5);
console.log(`Điểm trung bình của sinh viên 3 là: ${diemTB3}`);

/**
 * Định nghĩa hàm
 */
function showGreeting(title) {
  console.log(title);
  console.log("Đây là khoá JS Pro!");
}
/**
 * Gọi hàm
 * code sẽ được thực thi khi hàm được gọi
 */
showGreeting();
showGreeting();
showGreeting();

// Hàm có tham số(parameters)
showGreeting("Xin chào các bạn!");
showGreeting("Chào mừng các bạn đến với khoá học JS Pro!");

function showGreeting3(title, mesage) {
  console.log(title);
  console.log(mesage);
}
showGreeting3("Xin chào các bạn!", "Đây là khoá JS Pro!");

/**
 * Tham số có giá trị mặc định
 */
function showGreeting4(
  title = "Xin chào các bạn!",
  message = "Đây là khoá JS Pro!",
) {
  console.log(title);
  console.log(message);
}
showGreeting4();
showGreeting4("Chào mừng các bạn đến với khoá học JS Pro!");

// Hàm có giá trị trả về (return value)
function calculateArea(length, width) {
  return length * width;
}
const area = calculateArea(5, 3);
console.log(`Diện tích của hình chữ nhật là: ${area}`);
