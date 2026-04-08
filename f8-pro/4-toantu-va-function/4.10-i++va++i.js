let i = 1;
i++;
i++;
console.log(i);

let j = 1;
let result = ++j + i++ - j-- + --j + ++j;
console.log(result); // 2 + 2 - 3 + 1 + 2 = 4
