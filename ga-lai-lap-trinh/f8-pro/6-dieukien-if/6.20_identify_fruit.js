//------------------------------------------------
// TẠO HÀM identifyFruit
//------------------------------------------------

/**
 * Tạo hàm identifyFruit để xác định loại qủa dựa trên màu sắc.
 * Hàm sẽ nhận một tham số color, là màu sắc của quả. Dựa vào
 * màu sắc, hãy trả về tên của loại quả theo các quy tắc sau:
 *
 * - Màu đỏ hoặc hồng: "Táo"
 * - Màu vàng: "Chuối"
 * - Màu tím: "Nho"
 * - Màu cam hoặc màu xanh: "Cam"
 *
 * => Sử dụng kỹ thuật fallthrough trong cấu trúc switch-case
 */
const identifyFruit = (color) => {
  switch (color) {
    case "đỏ":
    case "hồng":
      return "Táo";

    case "vàng":
      return "Chuối";

    case "tím":
      return "Nho";

    case "cam":
    case "xanh":
      return "Cam";

    default:
      return "Không xác định";
  }
};

const color = "xanh";

const result = identifyFruit(color);

console.log(`>>> ${result}`);
