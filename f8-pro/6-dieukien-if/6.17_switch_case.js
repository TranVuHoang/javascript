//-----------------------------------------
// CẤU TRÚC SWITCH CASE
//-----------------------------------------
month = 5;

switch (month) {
  case 1:
    console.log("Tháng một");
    break;
  case 2:
    console.log("Tháng hai");
    break;
  case 3:
    console.log("Tháng ba");
    break;
  case 4:
    console.log("Tháng bốn");
    break;
  case 5:
    console.log("Tháng năm");
    break;
  case 6:
    console.log("Tháng sáu");
    break;
  case 7:
    console.log("Tháng bảy");
    break;
  case 8:
    console.log("Tháng tám");
    break;
  case 9:
    console.log("Tháng chín");
    break;
  case 10:
    console.log("Tháng mười");
    break;
  case 11:
    console.log("Tháng mười một");
    break;
  case 12:
    console.log("Tháng mười hai");
    break;
  default:
    console.log("Tháng không hợp lệ.");
    break;
}

// Kiểm tra tháng thuộc quí nào
switch (month) {
  case 1:
  case 2:
  case 3:
    console.log("Quí một");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Quí hai");
    break;
  case 7:
  case 8:
  case 9:
    console.log("Quí ba");
    break;
  case 10:
  case 11:
  case 12:
    console.log("Quí tư");
    break;
  default:
    console.log(">>> Tháng không hợp lệ.");
}
