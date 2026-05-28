/**
 * Viết hàm checkEvenOdd trong JavaScript nhận vào một số nguyên và trả về "Even" nếu số đó là chẵn, hoặc "Odd" nếu số đó là lẻ.
 * @param {number} number - Số nguyên cần kiểm tra
 * @returns {string} "Even" nếu số là chẵn, "Odd" nếu số là lẻ
 */
// Cách 1: Sử dụng câu lệnh if-else
const checkEvenOdd = (number) => {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

// Cách 2: Sử dụng câu lệnh if-else ngắn gọn hơn
const checkEvenOddTernary3 = (number) => {
  if (number % 2 === 0) {
    return "Even";
  }
  return "Odd";
};

// Cách 3: Sử dụng toán tử điều kiện (ternary operator)
const checkEvenOddTernary2 = (number) => {
  const isEven = number % 2 === 0; // Biến boolean để kiểm tra nếu số là chẵn
  return isEven ? "Even" : "Odd";
};

// Cách 4: Sử dụng toán tử điều kiện (ternary operator)
const checkEvenOddTernary = (number) => {
  return number % 2 === 0 ? "Even" : "Odd";
};

// Sample usage
const result3 = checkEvenOddTernary(10);
console.log(result3); // Output: Even

let number4 = 15;
const result4 = checkEvenOddTernary(number4);
console.log(`${number4} is an ${result4.toLowerCase()} number.`); // Output: 15 is an odd number.
const result1 = checkEvenOdd(4);
console.log(result1); // Output: Even

const result2 = checkEvenOdd(7);
console.log(result2); // Output: Odd
