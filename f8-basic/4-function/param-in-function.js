/**
 * 1. Tham số?
 * - Định nghĩa
 * - Kiểu dữ liệu
 * - Tính private?
 * - 1 tham số
 * - Nhiều tham số
 *
 * 2. Truyền tham số
 * - 1 tham số
 * - Nhiều tham số
 *
 * 3. Arguments?
 * - Đối tượng arguments
 * - Giới thiệu vòng for
 */
// Hàm có 1 tham số
const writeLog = (message) => {
  console.log(message);
};
writeLog(">>> Test message");

// Hàm có 2 tham số
const writeLog2 = (message, message2) => {
  console.log(message);
  console.log(message2);
};
writeLog2("Hello, ", "Trang Trang");
// arguments
const writeLog3 = (...arguments) => {
  let myString = "";

  for (let param of arguments) {
    myString += `${param} -`;
  }
  console.log(myString);
};
writeLog3("Log 1", "Log 2");
