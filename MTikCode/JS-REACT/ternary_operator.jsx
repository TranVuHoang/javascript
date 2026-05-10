// ternary operator(toán tử 3 ngôi)
// -> đây là một trong những kỹ thuật quan trọng nhất sẽ gặp khi code react

// ví dụ khong dùng ternary operator:
const age = 9;

// viết if-else theo kiểu truyền thống -> dài dòng
if (age >= 18) {
  console.log("Bạn đủ tuổi xem nội dung này.");
} else {
  console.log("Bạn không có tuổi 😂");
}

// viết if-else theo toán tử 3 ngôi (ternary operator)
console.log(
  age >= 19 ? "Bạn đủ tuổi xem nội dung này." : "Bạn không có tuổi 😂",
);

// viết theo ký tự &&
const App = () => {
  const isLoginIn = true;

  return;
  <div>{isLoginIn && <button>Đăng xuất </button>}</div>;
};
// nếu isLoginIn = true => trả ra button ngược lại thì k trả về gì
