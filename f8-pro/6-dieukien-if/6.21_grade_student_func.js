//------------------------------------------------
// TẠO HÀM gradeStudent
//------------------------------------------------

/**
 * Tạo một hàm gradeStudent để xếp loại học sinh dựa trên điểm số.
 * Hàm này sẽ nhận vào một tham số score là điểm số của học sinh (một
 * số từ 0 đến 100). Hàm sẽ trả về xếp loại dựa trên các khoảng điểm sau:
 *
 * - Từ 90 trở lên: "Xuất sắc"
 * - 80 đến 90: "Giỏi"
 * - 70 đến 79: "Khá"
 * - 60 đến 69: "Trung bình"
 * - Dưới 60: "Yếu"
 */

const gradeStudent = (score) => {
  switch (true) {
    case score > 90:
      return "Xuất sắc";
    case score >= 80:
      return "Giỏi";
    case score >= 70:
      return "Khá";
    case score >= 60:
      return "Trung bình";
    case score >= 0:
      return "Yếu";

    default:
      return "Điểm chưa đúng định dạng";
  }
};

console.log(`>>> ${gradeStudent(85)}`);
console.log(`>>> ${gradeStudent(55)}`);
console.log(`>>> ${gradeStudent(-20)}`);
