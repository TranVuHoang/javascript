/**
GIỚI THIỆU MỘT SỐ HÀM built-in
  1. alert
  2. console
  3. confirm
  4. prompt
  5. set timeout: Chạy 1 lần code logic sau 1 khoảng thời gian
  6. set interval: Chạy nhiều lần(lặp đi lặp lại) code logic sau 1 ktg
 */

var fullname = "Hoàng Trần";

// console.log
console.log(fullname);

// cofirm
confirm("Xác nhận bạn đủ tuổi.");

// prompt
const name = prompt("Nhập tên của bạn:");

//alert
// alert("Welcome");

// setTimeout: xét sau khoảng thời gian thì chạy logic 1 lần duy nhất
setTimeout(() => {
  alert("Welcome", fullname);
}, 1000);

// setInterval: xét sau khoảng thời gian thì chạy logic nhiều lần
setInterval(() => {
  console.log("Xin chào", Math.random());
}, 1000);
