//------------------------------------------------
// TẠO HÀM simpleCalculator
//------------------------------------------------

/**
 * Hàm simpleCalculator thực hiện các phép toán:
 * + - * /
 */

const simpleCalculator = (operator, a, b) => {
  switch (operator) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      if (b === 0) {
        return ">>> Không thể chia cho 0";
      }

      return a / b;

    default:
      return ">>> Phép tính không hợp lệ.";
  }
};

console.log(simpleCalculator("+", 5, 3));
console.log(simpleCalculator("/", 10, 0));
console.log(simpleCalculator("**", 2, 3));
