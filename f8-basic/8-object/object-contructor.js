/**
 * object constructor: React ít dùng -> k cần học sâu phần này.
 */

// Tạo Object constructor
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = () => {
    return `${this.firstName} ${this.lastName}`;
  };
}

let author = new User("Hoàng", "Trần", "Avatar");
let user = new User("Vũ", "Nguyễn", "Avatar");

console.log(">>> author", author);
console.log(">>> user", user);

author.title = "Lorem ipsum dolor sit amet.";
user.comment = "Lorem ipsum dolor, sit amet consectetur adipisicing.";
console.log(">>> author", author);
console.log(">>> user", user);

console.log(">>> author:", author.getName());
console.log(">>> user:", user.getName());

/**
 * 8.4 Tạo object constructor Animal
 * Hãy tạo object constructor cho nhóm Animal có 3 thuộc tính là name, leg và speed. Trong đó, name là để lưu tên động vật, leg là số lượng chân và speed là tốc độ di chuyển của động vật đó.
 *
  Sau đó, hãy tạo một đối tượng từ object constructor trên để mô tả 1 con vẹt, lưu đối tượng vào biến parrot.
*/

const Animal = function (name, leg, speed) {
  this.name = name;
  this.leg = leg;
  this.speed = speed;
};
const parrot = new Animal("Phượng Hoàng", 2, 2.0);
console.log(">>> parrot:", parrot);
