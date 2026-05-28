// Sinh viên 1: Hoàng Văn Hùng
// Sinh viên 2: Nguyễn Văn A
// Sinh viên 3: Trần Thị B

// Hãy viết một hàm có tên là calculateArea để tính diện tích của một hình chữ nhật. Hàm này sẽ nhận vào hai tham số là chiều dài và chiều rộng của hình chữ nhật, và trả về diện tích của nó. Công thức tính diện tích của hình chữ nhật là: Diện tích = Chiều dài x Chiều rộng.

function calculateArea(length, width) {
    return length * width;
}

// Ví dụ sử dụng hàm calculateArea
const length = 5;
const width = 3;
const area = calculateArea(length, width);
console.log(`Diện tích của hình chữ nhật có chiều dài ${length} và chiều rộng ${width} là: ${area}`);   