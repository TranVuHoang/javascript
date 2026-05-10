/**
 * Viết hàm gradeExam để phân loại điểm thi, hàm nhận vào điểm
 * sô của một bài thi. Nếu điểm từ 90 trở lên là "Xuất Sắc", từ
 * 80-89 là giỏi, từ 70-79 là khá, từ 60-69 là trung bình, và
 * dưới 60 là yếu.
 */
const gradeExam = (point) => {
  if (point >= 90) {
    return "Excellent";
  } else if (point >= 80) {
    return "Good";
  } else if (point >= 70) {
    return "Credit";
  } else if (point >= 60) {
    return "Tb";
  } else {
    return "Yeu";
  }
};

console.log(">>>", gradeExam(85));
console.log(">>>", gradeExam(55));
