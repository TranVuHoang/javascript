// #1. Static types
let userName = "Hwang Tran";

// #2. type any
let userNumber;
userNumber = "ba";
userNumber = 4;

// #3. Những kiểu dữ liệu căn bản trong typescript:
let catName: string = "miu miu";
let catAge: number;
let isCute: boolean;

catName = "meo meo";
catAge = 3;
isCute = true;

// #4. Array - mảng
// cách 1:
let ratings: number[] = [1, 2, 3, 4, 5];
let petNames: string[] = ["Miu", "Nhọ", "Min"];

// cách 2:
let rating2: Array<number> = [1, 2, 3, 4, 5];
let petNames2: Array<string> = ["Mắm", "Ốc", "Bin"];

// mảng lồng nhau
let matrix: number[][] = [
  [1, 2],
  [0, 1],
  [2, 4],
];

let matrix2: Array<Array<number>> = [
  [1, 2],
  [0, 1],
  [2, 4],
];

// #5. function
function sayHi(): string {
  return "Xin chào, chúc bạn học lập trình vui vẻ";
}

function double(num: number): number {
  return num * 2;
}

const greet = (name: string, title?: string) => {
  if (title) {
    return `xin chào ${title} ${name}`;
  }
  return `Xin chào ${name}`;
};
console.log(greet("An"));

// hàm nhận vào tham số:
function gatherFriends(groupName: string, ...members: string[]) {
  console.log(`>>> Nhóm: ${groupName}`);
  console.log(`>>> Thành viên: ${members.join(", ")}`);
}

gatherFriends("Đi biển", "Kim", "Bình", "Mai");
