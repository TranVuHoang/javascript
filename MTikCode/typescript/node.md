Typescript là ngôn ngữ lập trình được xây dựng dựa trên javascript

TypeScript là phiên bản mở rộng của JavaScript do Microsoft phát triển.

Nó = JavaScript + type.

Ví dụ JavaScript:

```js
let age = 20;
age = "hello"; // vẫn chạy
```

TypeScript:

```js
let age: number = 20;
age = "hello"; // lỗi
```

Ưu điểm:

- phát hiện lỗi sớm
- code dễ maintain
- autocomplete mạnh
- project lớn dễ quản lý hơn

TypeScript hoạt động kiểu:

```
TypeScript code
        ↓
   TypeScript Compiler (tsc)
        ↓
 JavaScript code
        ↓
 Browser / Node.js chạy
```

Các type cơ bản trong TypeScript:

`1. string`

Chuỗi ký tự

```ts
let name: string = "Hoang";
```

`2. number`

Số

```ts
let age: number = 20;
```
