/**
 * Hiểu hơn về câu lệnh điều kiện if
 * và phép so sánh
 */
let a = 1;
let b = 2;
let condition = a < b;
console.log(">>> condition: ", condition);

if (condition) {
  console.log("a < b");
} else {
  console.log("a >= b");
}

condition = a < b && a < 0;
console.log(">>> condition: ", condition);

/**
 * Toán tử && sẽ quan tâm đến giá trị thuộc: 0, "", undefine, null, NaN, false khi gặp sẽ lấy luôn chúng từ trái qua phải, nếu k gặp 6TH trên thì lấy giá trị cuối cùng, ví dụ:
 * "A" && "B" && "C"; -> lấy "C"
 * "A" && false && "C"; -> lấy false
 */
let result = "A" && "B" && "C";
console.log(">>> result: ", result); // C

/**
 * Toán tử || sẽ quan tâm đến giá trị đúng đầu tiên từ trái qua phải để lấy làm giá trị, ví dụ:
 * "A" || "B" || "C"; -> lấy "A"
 * "A" || false || "C"; -> lấy "A"
 */
result = "A" || "B" || "C" || false || "D";
console.log(">>> result: ", result); // C
