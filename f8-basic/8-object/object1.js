/**
 * Object trong JS
 */

const myInfo = {
  // Các thuộc tính: name, age, address, tel
  name: "Hoàng Trần",
  age: 29,
  address: "Hưng Yên, VN",
  tel: +84123456789,

  // Phương thức(method) getName
  getName: () => {
    return myInfo.name;
  },
};

console.log(">>> myInfo:", myInfo);

myInfo.email = "info@gmail.com";
console.log(">>> myInfo:", myInfo);
console.log(">>> address:", myInfo.address);
console.log(">>> phone:", myInfo.tel);

// Xoá key-value trong object
delete myInfo.age;
console.log(">>> myInfo:", myInfo);

console.log(">>> getName:", myInfo.getName());
