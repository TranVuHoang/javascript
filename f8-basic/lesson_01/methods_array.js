/**
 * Làm việc với Array
 *
 * 1. toString()
 * 2. join()
 * 3. pop()
 * 4. push()
 * 5. shift()
 * 6. unshift()
 * 7. splice()
 * 8. concat
 */
let languages = ["JS", "PHP", "Ruby"];

// chuyển đổi kiểu array sang string
console.log(languages.toString()); // JS,PHP,Ruby
console.log(languages.join()); // JS,PHP,Ruby
console.log(languages.join("")); // JSPHPRuby
console.log(languages.join(", ")); // JS, PHP, Ruby
console.log(languages.join(" - ")); // JS - PHP - Ruby

// Xoá phần tử cuối mảng
console.log(languages.pop()); // xoá hẳn phần tử cuối mảng và trả về phần tử đã xoá, mảng gốc sẽ được xoá phần tử cuối mảng
console.log(languages);

//-----------------------------------------------
// #4. Thêm phần tử vào cuối mảng
//-----------------------------------------------
console.log(languages.push("React", "Java")); // trả về độ dài của mảng mới sau khi đã push thêm mới
console.log(languages);

//----------------------------------------------------------------
// #5.Shift() Xoá phần tử đầu mảng và trả về phần tử đã xoá
//----------------------------------------------------------------
console.log(languages.shift()); //"JS"
console.log(languages);

//----------------------------------------------------------------
// #6.unShift() Thêm phần tử vào đầu mảng và
// trả về độ dài mới của mảng
//----------------------------------------------------------------
console.log(languages.unshift("Dart"));
console.log(languages);

//----------------------------------------------------------------
// #7.splice(index, n) Xoá phần tử từ vị trí index
// splice(indexX, 0, indexY): chèn thêm phần tử vào vị trí bất kỳ trong mảng
//----------------------------------------------------------------

// xoá phần tử
languages.splice(1, 2);
console.log(languages);

// chèn vào
languages.splice(1, 0, "TS");
console.log(languages);

//----------------------------------------------------------------
// #8.concat() nối 2 mảng với nhau
//----------------------------------------------------------------
let language2 = ["Dart", "Ruby"];
// nối 2 mảng bằng concat
console.log(languages.concat(language2));
// nối 2 mảng với ES6
console.log([...languages, ...language2]);

//----------------------------------------------------------------
// #9.slice(): Cắt 1 hoặc nhiều element(phần tử) trong mảng
// trả về mảng chứa các phần tử từ vị trí cắt
//----------------------------------------------------------------
console.log(languages.slice(1, 2));
console.log(languages.slice(1));
console.log(languages.slice(-2, -1));
console.log(languages);
