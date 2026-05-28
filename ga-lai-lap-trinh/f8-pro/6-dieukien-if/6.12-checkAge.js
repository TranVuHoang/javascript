const checkAge = (age) =>
  age > 18 || age === 18 ? "Người lớn" : "Vị thành niên";

console.log(checkAge(20));
console.log(checkAge(16));
