/**
 * Viết hàm classifyStudent để phân loại sinh viên dựa vào
 * điểm trung bình: trên 8 là "Giỏi", từ 6-8 là "Khá",
 * dưới 6 là "Trung bình".
 */

// Cách 1:
const classifyStudent = (point) => {
  if (point > 8) {
    return "Giỏi";
  } else if (point >= 6) {
    return "Khá";
  } else {
    return "Trung bình";
  }
};

// Cách 2 dùng ternary operator
const classifyStudent2 = (point) =>
  point > 8 ? "Giỏi" : point >= 6 ? "Khá" : "Trung bình";

console.log(">>> ", classifyStudent2(9));
console.log(">>> ", classifyStudent2(6.5));
console.log(">>> ", classifyStudent2(7));
