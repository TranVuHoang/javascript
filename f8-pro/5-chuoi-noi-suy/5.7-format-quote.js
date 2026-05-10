// Viết hàm formatQuote trong javascript nhận vào một chuỗi và tên tác giả. Hàm sẽ trả về một chuỗi có định dạng như sau:
// "quote" - tác giả

/**
 * Bài làm
 */
const formatQuote = (quote, author) => {
  return `"${quote}" - ${author}`;
};
// Sample usage
const quote1 = formatQuote("Học, học nữa, học mãi", "Lê Nin");
console.log(quote1); // Output: "Học, học nữa, học mãi" - Lê Nin

const quote2 = formatQuote(
  "Sống là cho đâu chỉ nhận riêng mình",
  "Nguyễn Ái Quốc",
);
console.log(quote2); // Output: "Sống là cho đâu chỉ nhận riêng mình" - Nguyễn Ái Quốc
