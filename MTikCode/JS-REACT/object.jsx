// object -> đối tượng
// python thì object gọi là dictionary
// javascript thì gọi là object

// ví dụ về object:
const cat = {
  name: "Doreamon",
  age: 4,
  color: "blue",
};
const name = cat.name;
const age = cat.age;
const color = cat.color;

// ta có thể viết gọn lại thành:
const { name, age, color } = cat;

// spread operator(để sao chép và chỉnh sửa 1 OBJECT)
const cat2 = { ...cat, color: "yellow" };

// spread operator(để sao chép và chỉnh sửa 1 ARRAY)
const arr = [1, 2, 3, 4, 5];
console.log("arr: ", arr);
const arr2 = [...arr, 6, 7, 8, 9];
console.log("arr2:", arr2);
