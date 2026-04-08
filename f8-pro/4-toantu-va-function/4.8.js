// 1. Diện tich hinh chu nhat
function calculateRectangleArea(length, width) {
  return length * width;
}
// 2. Diện tích hình tròn
function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}
// 3. Diện tích hình tam giác
function calculateTriangleArea(base, height) {
  return (base * height) / 2;
}
// 4. Diện tích hình vuông
function calculateSquareArea(side) {
  return side * side;
}
// 5. Diện tích hình thoi
function calculateRhombusArea(diagonal1, diagonal2) {
  return (diagonal1 * diagonal2) / 2;
}
// 6. Diện tích hình bình hành
function calculateParallelogramArea(base, height) {
  return base * height;
}
// 7. Diện tích hình quạt
function calculateSectorArea(radius, angle) {
  return (angle / 360) * Math.PI * radius * radius;
}
// 8. Diện tích hình elip
function calculateEllipseArea(semiMajorAxis, semiMinorAxis) {
  return Math.PI * semiMajorAxis * semiMinorAxis;
}
// 9. Diện tích hình nón
function calculateConeArea(radius, slantHeight) {
  return Math.PI * radius * (radius + slantHeight);
}
// 10. Diện tích hình cầu
function calculateSphereArea(radius) {
  return 4 * Math.PI * radius * radius;
}
console.log(calculateRectangleArea(5, 3));
console.log(calculateCircleArea(5));
console.log(calculateTriangleArea(5, 3));
console.log(calculateSquareArea(5));
console.log(calculateRhombusArea(5, 3));
console.log(calculateParallelogramArea(5, 3));
console.log(calculateSectorArea(5, 90));
console.log(calculateEllipseArea(5, 3));
console.log(calculateConeArea(5, 3));
console.log(calculateSphereArea(5));
