## #9. Các kiểu dữ liệu trong JS

```
Kiểu dữ liệu là gì?

Kiểu dữ liệu là một cách phân loại dữ liệu cho trình biên dịch hoặc trình thông dịch hiểu về kiểu của dữ liệu đang sử dụng.

Đối với nhiều ngôn ngữ lập trình, khi khai báo một biến, bạn phải chỉ rõ biến đó thuộc
kiểu dữ liệu gì. Nhưng đối với JS thì kháccahk, một biến có thể thuộc bất kỳ kiểu dữ liệu nào => Dynamic Type
Ví dụ:
```

```js
let x = 999;
console.log(x); // 999

x = "Hello World";
console.log(x); // Hello World
```

```
Bạn thấy rằng, biến x ban đầu được gán giá trị kiểu số. Nhưng sau đó, mình gán lại giá
trị kiểu chuỗi ký tự cho biến x, và không có lỗi nào xảy ra.

Đây vừa là ưu điểm, nhưng cũng là nhược điểm của JS.
- Ưu điểm: Kiểu dữ liệu động(Dynamic Type) gíup việc lập trình trở nên linh hoạt hơn.
- Nhược điểm: Khi chương trình trở nên phức tạp, số lượng dòng code nhiều lên,
có thể bạn sẽ khó kiểm soát kiểu dữ liệu của biến, dẫn đến sai trong việc xử lý, tính toán.
```
```
CÁC KIỂU DỮ LIỆU TRONG JAVASCRIPT

JS có 8 kiểu dữ liệu cơ bản, trong đó: có 7 kiểu dữ liệu nguyên thuỷ
(boolean, null, undefined, number, BigInt, string, symbol) và 1 kiểu dữ liệy tham chiếu (object).
- Kiểu dữ liệu nguyên thuỷ: là kiểu dl mà giá trị không thể thay đổi được. Đây là kiểu dl
ứng với "level thấp nhất" của ngôn ngữ lập trình.

- Kiểu dữ liệu tham chiếu (object): Là tập hợn của các ngôn ngữ 