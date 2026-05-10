/**
 * Hàm `calculateTotalScore` nhận vào tên sinh viên, điểm số và điểm ưu tiên khu vực, sau đó tính tổng điểm và trả về một chuỗi thông báo.
 * @param {string} studentName - Tên sinh viên
 * @param {number} score - Điểm số
 * @param {number} regionalBonus - Điểm ưu tiên khu vực
 * @returns {string} Chuỗi thông báo với tổng điểm của sinh viên
 */

// Bài làm
const calculateTotalScore = (studentName, score, regionalBonus) => {
  let totalScore = score + regionalBonus;
  return `Sinh viên ${studentName} có tổng điểm là: ${totalScore}`;
};
// Sample usage
const result1 = calculateTotalScore("Trần Văn A", 8.5, 1.0);
console.log(result1); // Output: Sinh viên Trần Văn A có tổng điểm là: 9.5
const result2 = calculateTotalScore("Nguyễn Thị B", 7.0, 0.5);
console.log(result2); // Output: Sinh viên Nguyễn Thị B có tổng điểm là: 7.5
