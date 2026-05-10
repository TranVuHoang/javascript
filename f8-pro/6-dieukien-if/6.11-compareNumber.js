/**
 * Viết hàm compareNumber để so sánh 2 số. hàm sẽ trả về chuỗi "số thứ nhất lớn hơn"
 */
const compareNumber = (a, b) => {
  if (a > b) {
    return "Số thứ nhất lớn hơn";
  } else if (a < b) {
    return "Số thứ hai lớn hơn";
  } else {
    return "Hai số hoà minzy";
  }
};

// sample usage
console.log(compareNumber(3, 4));
console.log(compareNumber(5, 2));
console.log(compareNumber(8, 8));
