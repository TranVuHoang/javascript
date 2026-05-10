/** Hàm checkInteger kiểm tra số nhập vào có phải số nguyên hay k */
const checkInteger = number => number % 1 === 0 ? `>>>  là số nguyên` : `>>>  không phải số nguyên`;

// Sample usage
console.log(checkInteger(4)); // ">>> Số nguyên"
console.log(checkInteger(3.14)); // ">>> Số nguyên"
