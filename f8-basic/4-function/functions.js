/**
 * Các loại function
 *
 * 1. Declaration function
 * 2. Expression function
 * 3. Arrow function(hàm mũi tên ES6)
 */

//-----------------------------------------------------
// #1. Declaration function
//-----------------------------------------------------
function showMessage() {
  console.log(">>> Say hi.");
}
showMessage();

//-----------------------------------------------------
// #2. Expression function
//-----------------------------------------------------
const showmessage2 = function () {
  console.log(">>> Say hello.");
};
showmessage2();

//-----------------------------------------------------
// #3. Arrow function
//-----------------------------------------------------
const showMessage3 = () => {
  console.log(">>> Hello Trang Trang.");
};
showMessage3();
