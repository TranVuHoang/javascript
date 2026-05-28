/**
 * Viết hàm createLink để tạo một chuỗi HTML cho một liên kết. Hàm sẽ nhận vào hai tham số: URL và văn bản hiển thị. Hàm sẽ trả về một chuỗi có định dạng như sau:
 * <a href="URL">văn bản hiển thị</a>
 */
const createLink = (url, text) => {
  return `<a href="${url}">${text}</a>`;
};
// Sample usage
const link1 = createLink("https://www.google.com", "Google");
console.log(link1); // Output: <a href="https://www.google.com">Google</a>

const link2 = createLink("https://www.facebook.com", "Facebook");
console.log(link2); // Output: <a href="https://www.facebook.com">Facebook</a>
