// Toán tử ++ --
// Prefix & Postfix
let a = 6;
console.log(">>> a=", a);
a++;
console.log(">>> a=", a);

a = 6;
console.log(">>> a=", --a); //a= 5

a = 6;
console.log(">>> a=", ++a); //a= 7

a = 6;
console.log(">>> a=", a++); //a= 6

a = 6;
let output = a++ + --a; //6+6=12
console.log(">>> output=", output); //output= 12

a = 6;
output = ++a * 2 - a-- * 2; // 7*2-7*2=0
console.log(">>> output=", output); //output= 0
