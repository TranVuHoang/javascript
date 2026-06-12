/**
 * Một số điều cần biết về function
 *
 * 1. Khi function đặt trùng tên?
 * 2. Khai báo biến trong hàm?
 * 3. Định nghĩa hàm trong hàm?
 */
const showMessage = () => {
  console.log(">>> check message 1");
};

function showMessage2() {
  console.log(">>> check message 2");
}

function showMessage3() {
  console.log(">>> check message 3");
}
showMessage();

//-----------------------------------------------
// #2. Khai báo biến trong hàm
//-----------------------------------------------
const showMessage4 = () => {
  let fullname = "Hoàng Trần";

  console.log(">>> fullname:", fullname);
};
showMessage4();

//-----------------------------------------------
// #3. Định nghĩa hàm trong hàm
//-----------------------------------------------
const showMessage5 = () => {
  const showHello = () => {
    console.log("Hello World!");
  };
  showHello();
};
showMessage5();
