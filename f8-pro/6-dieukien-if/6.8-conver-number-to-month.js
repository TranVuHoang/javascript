/**
 * Viết hàm convertNumberToMonth trong JavaScript nhận vào một số nguyên từ 1 đến 12 và trả về tên tháng tương ứng. Nếu số không hợp lệ, hàm sẽ trả về "Số không hợp lệ".
 * @param {number} monthNumber - Số nguyên từ 1 đến 12
 * @returns {string} Tên tháng hoặc thông báo lỗi
 */

// Cách 1: Sử dụng câu lệnh if-else
const convertNumberToMonth1 = (monthNumber) => {
  if (monthNumber === 1) {
    return "Tháng 1";
  } else if (monthNumber === 2) {
    return "Tháng 2";
  } else if (monthNumber === 3) {
    return "Tháng 3";
  } else if (monthNumber === 4) {
    return "Tháng 4";
  } else if (monthNumber === 5) {
    return "Tháng 5";
  } else if (monthNumber === 6) {
    return "Tháng 6";
  } else if (monthNumber === 7) {
    return "Tháng 7";
  } else if (monthNumber === 8) {
    return "Tháng 8";
  } else if (monthNumber === 9) {
    return "Tháng 9";
  } else if (monthNumber === 10) {
    return "Tháng 10";
  } else if (monthNumber === 11) {
    return "Tháng 11";
  } else if (monthNumber === 12) {
    return "Tháng 12";
  } else {
    return "Số không hợp lệ";
  }
};

// Cách 2: Sử dụng mảng để lưu tên tháng
const convertNumberToMonth = (monthNumber) => {
  if (monthNumber < 1 || monthNumber > 12) {
    return "Số không hợp lệ";
  }

  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12"
  ];

  return months[monthNumber - 1];
};
// Sample usage
console.log(convertNumberToMonth(1)); // Output: Tháng 1
console.log(convertNumberToMonth(12)); // Output: Tháng 12
console.log(convertNumberToMonth(13)); // Output: Số không hợp lệ 
