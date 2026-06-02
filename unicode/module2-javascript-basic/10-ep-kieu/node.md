## #10. Ép kiểu trong javascript

```
Ép kiểu là quá trình chuyển từ kiểu dữ liệu này sang kiểu dữ liệu khác để thuận tiện
trong quá trình xây dựng chương trình.

Để chuyển đổi bất kỳ kiểu dữ liệu nào sang string, bạn có thể dùng hàm String(value);
ví dụ:
```

```js
console.log(String(1)); // "1"
console.log(String(NaN)); // "NaN"
console.log(String(Infynity)); // "Infynity"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
```

```
# ÉP KIỂU DỮ LIỆU SANG NUMBER
Khi thực hiện tính toán, JS sẽ chuyển đổi các kiểu dữ liệu về kiểu dữ liệu number.
Ví dụ phép chia giữa 2 string:
```

```js
console.log("10" / "2"); //5
```

```
Bời vì string "10" và "2" được chuyển đổi về kiểu number thành số 10 và số 2.
Nên kết quả thu được là 5.

Để chuyển đổi bất kỳ kiểu dữ liệu nào thành number, bạn có thể dùng hàm Number(value),
ví dụ:
```

```js
console.log(Number("")); //0
console.log(Number(" ")); //0
console.log(Number("Hello")); // NaN
console.log(Number("10")); // 10
console.log(Number("   10 ")); // 10
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number("10e5")); // 1000000
```

```
Note: Một số quy luậ chuyển đổi(ép) kiểu dữ liệu về number:
- null : chuyển về number thành 0
- undefined : chuyển về number thành NaN
- true : chuyển về number thành 1
- false : chuyển về number thành 0
- null : chuyển về number thành 0
- string "": chuyển về number thành 0
- string khác rỗng và có thể chuyển về number thì sẽ thành: số tương ứng
- string khác rỗng và không thể chuyển về number thì sẽ thành: NaN
```

```
# ÉP KIỂU DỮ LIỆU SANG BOOLEAN

Để ép kiểu  dữ liệu sang boolean, bạn có thể dùng hàm Boolean(value);
Quy luật chuyển đổi sang boolean như sau:

Note: Một số quy luậ chuyển đổi(ép) kiểu dữ liệu về number:
- 0: chuyển về boolean thành: false
- "": chuyển về boolean thành: false
- null: chuyển về boolean thành: false
- undefined: chuyển về boolean thành: false
- NaN: chuyển về boolean thành: false
- Những giá trị còn lại sẽ chuyển thành : true

```
