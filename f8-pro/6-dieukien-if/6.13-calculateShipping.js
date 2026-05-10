/**
 * Viết hàm calculateShipping để tính phí vận chuyển dựa trên
 * khoảng cách. Phí cố định là 5000đ cho 5km đầu, và 1000đ cho mỗi
 * km tiếp theo
 */

// Cách 1
const calculateShipping = (num) => {
  if (num <= 5) {
    return 5000;
  }
  return 5000 + 1000 * (num - 5);
};

// Cách 2: ternary operator(toán tử 3 ngôi)
const calculateShipping2 = (num) => (num <= 5 ? 5000 : 5000 + 1000 * (num - 5));

const result1 = calculateShipping2(3);
const result2 = calculateShipping2(7);

console.log(">>> price 1: ", result1);
console.log(">>> price 2: ", result2);
