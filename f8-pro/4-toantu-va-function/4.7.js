// Viết hàm cToF để chuyển đổi nhiệt độ từ độ C sang độ F. Công thức chuyển đổi là: F = C * 9/5 + 32
function cToF(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log("Nhiệt độ 0 độ C bằng: ", cToF(0), "độ F");
console.log("Nhiệt độ 100 độ C bằng: ", cToF(100), "độ F");
