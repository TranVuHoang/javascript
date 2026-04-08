// Tạo hàm swapNumbers
// Viết hàm swapNumbers để đổi chỗ giá trị của hai biến a và b mà không sử dụng biến trung gian. Ví dụ: nếu a = 5 và b = 10, sau khi gọi hàm swapNumbers(a, b), giá trị của a sẽ là 10 và giá trị của b sẽ là 5.
// TH1 sử dụng biến trung gian
function swapNumbers(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return `${a} và ${b} đã được đổi chỗ thành ${b} và ${a}`;
}
console.log(swapNumbers(5, 10));

// TH2 không sử dụng biến trung gian
function swapNumbers2(a, b) {  
  a = a + b; // a = 5 + 10 = 15
  b = a - b; // b = 15 - 10 = 5
  a = a - b; // a = 15 - 5 = 10
  return `${a} và ${b} đã được đổi chỗ thành ${b} và ${a}`;
}
console.log(swapNumbers2(5, 10));
