/**
 * Thuộc tính(attribute) và phương thức(method) của kiểu string(chuỗi):
 *
 * 1. length: thuộc tính để kiểm tra độ dài của chuỗi string
 * 2. indexOf(value): Phương thức tìm vị trí đầu tiên tìm thấy
 * 3. lastIndexOf(value): Phương thức tìm vị trí xuất hiện cuối cùng
 * 4. search(value): Phương thức tìm vị trí xuất hiện trong chuỗi
 * 5. slice(value): Phương thức cắt chuỗi
 * 6. replace(): Phương thức ghi đè(thay thế)
 */

let myString = "Học JS tại F8, học JS không khó (JS)";
console.log(">>> myString:", myString);
//--------------------------------------------
// #1. thuộc tính (length)
//--------------------------------------------
console.log(`>>> ${myString} -> có độ dài:`, myString.length);

//--------------------------------------------
// #2. Phương thức indexOf()
//--------------------------------------------
// vị trí đầu tiên tìm thấy trong chuỗi
console.log(
  ">>> vị trí đầu tiên - Index of JS trong chuỗi trên:",
  myString.indexOf("JS"),
);
console.log(
  ">>> vị trí chữ 'JS' từ index 6 trở đi trong chuỗi trên:",
  myString.indexOf("JS", 6),
);

//--------------------------------------------
// vị trí cuối cùng tìm thấy trong chuỗi
//--------------------------------------------
console.log(
  ">>> vị trí cuối cùng tìm thấy từ JS trong chuỗi trên:",
  myString.lastIndexOf("JS"),
);

//--------------------------------------------
// tìm kiếm trong chuỗi
//--------------------------------------------
console.log(">>> ", myString.search("JS"));

//--------------------------------------------
//#5. Phương thức slice()
//--------------------------------------------
console.log(">>> Cắt chuỗi trên:", myString.slice(0)); // không cắt - in hết ra
console.log(">>> Cắt chuỗi trên:", myString.slice()); // không cắt - in hết ra
//cắt chữ "Học JS"
console.log(">>> Cắt chuỗi trên:", myString.slice(0, 6)); // Học JS
// cắt chữ không khó
console.log(">>> Cắt chuỗi:", myString.slice(-14, -1));

//--------------------------------------------
// #6. replace(): Phương thức ghi đè(thay thế)
//--------------------------------------------
// thay thế chữ "JS" xuất hiện đầu tiên
console.log(">>> Thay thế chuỗi:", myString.replace("JS", "Javascript"));
// thay thế tất cả chữ "JS" có trong chuỗi -> dùng biểu thức chính quy
console.log(">>> Thay thế chuỗi:", myString.replace(/JS/g, "Javascript"));

//--------------------------------------------
// #7. convert chuỗi sang IN HOA
//--------------------------------------------
console.log(">>> Chuỗi INHOA:", myString.toUpperCase());

//--------------------------------------------
// #8. Phương thức toLowerCase()- in thường
//--------------------------------------------
console.log(">>> Chuỗi in thường:", myString.toLowerCase());

//----------------------------------------------------------
// #9. Phương thức trim(): loại bỏ khoảng trắng thừa
//----------------------------------------------------------
console.log(">>> Chuỗi in thường:", myString.trim());
