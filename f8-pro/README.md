# 1. Bắt đầu

### Thiết lập mục tiêu học tập

- Xác định rõ ràng mục tiêu cá nhân khi học javascript
- Đặt mục tiêu ngắn hạn và dài hạn, đảm bảo rằng chúng SMART(cụ thể, đo lường được, đạt được, thực tế, và có thời gian biểu)

### Lên kế hoạch và lịch trình học tập

- Phân chia thời gian học hàng ngày/ hàng tuần
- Sắp xếp thời gian học theo khung giờ phù hợp và hiệu quả nhất

### Tạo môi trường học tập lý tưởng

- Chọn không gian yên tĩnh, thoải mái.

### Sử dụng phương pháp học tập phù hợp

- Áp dụng phương pháp học Pomodoro hoặc các kỹ thuật quản lý thời gian khác.
- Thay đổi phương pháp học: đọc, viết, thực hành, dạy lại.

### Thực hành và lặp lại

- Thực hành ngay sau khi học lý thuyết.
- Lặp lại nội dung đã học để củng cố kiến thức.

### Ghi chép và tổng hợp kiến thức

- Ghi chép những ý quan trọng trong quá trình học.
- Tổng hợp và ôn tập nội dung thường xuyên.

### Sử dụng nguồn học liệu đa dạng

- Tìm kiếm các nguồn học liệu khác nhau: sách, video, v.v.
- Tham gia các diễn đàn, nhóm học tập.

### Giữ tinh thần lạc quan và kiên trì

- Đối mặt với khó khăn trong quá trình học.
- Đặt ra mục tiêu nhỏ và tự thưởng khi hoàn thành chúng.

### Đánh giá tiến độ và điều chỉnh phương pháp

- Tự đánh giá hoặc nhờ người khác đánh giá tiến độ học tập.
- Điều chỉnh phương pháp học nếu cần thiết.

### Viết code trong tâm thế KHÔNG SỢ SAI

- Bất cứ thành quả nào đạt được cũng đến sau những thất bại

- Hãy suy nghĩ giống như cách mà người thành công suy nghĩ

# 2. Tìm hiểu về Javascript

2.1 Javascript là gì?

## Giới thiệu về js

- Lịch sử javascript: Từ Mocha đến js
- Tại sao JavaScript lại quan trọng?
- “Cây hài” trong làng ngôn ngữ lập trình

## JavaScript phía Máy khách và Máy chủ

- Phía máy khách
- Phía máy chủ

## Tích hợp js vào trang web

# 3 Biến(Variables)

- Biến là gì?
- Cách khai báo biến
- Lưu trữ và cập nhật giá trị
- Nguyên tắc đặt tên biến
- Lỗi thường gặp

- Biến là gì?
  -- Biến dùng để khai lưu trữ dữ liệu, mỗi biến có 1 tên và chứa giá trị cụ thể, nếu biến chưa gán giá trị thì sẽ là undefine

- Cách khai báo biến
  => Có 3 cách để khai báo biến trong javascript:
- var: Được sử dụng trong js cũ, có phạm vi rộng
- let: Có phạm vi hẹp hơn, chỉ tồn tại trong khối code gần nhất.
- const: Giống let nhưng giá trị không thể thay đổi sau khi được gán.
- ví dụ: `var storeName = "Cửa hàng xe máy điện Vinfast";` `let priceEvogrand = "12.000.000 VNĐ"` `const storeAddress = "khu công nghiệp Đình Vũ, Cát Hải, tp Hải Phòng"`

- Lưu trữ và cập nhật giá trị
  => Biến có thể được gán và thay đổi giá trị:
- `let riceQuantity = 100;`
- `riceQuantity = 150;` // Cập nhật lại số lượng gạo
- `let storeName = "Cửa hàng tạp hoá;`
- `storeName = " Cửa hàng bác Sơn";` // Cập nhật tên cửa hàng
- Note: Trường hợp cập nhật giá trị của một biến đã được khai báo với `const` được dùng để định nghiã những giá trị không thay đổi trong suốt quá trình chạy chương trình.

# Chương 5 Nối chuỗi và nội suy

<pre>
# Tìm hiểu về chuỗi
  # Chuỗi là gì?
  # Tạo chuỗi với nháy đơn
  # Tạo chuỗi với nháy kép
  # Tạo chuỗi với backticks
# Nối chuỗi
  # Toán tử nối chuỗi
  # Ví dụ nối chuỗi
  # Lưu ý khi sử dụng
# Templates literals
  # Tempalte literals là gì?
  # Nội suy chuỗi
  # Ví dụ nội suy chuỗi
# Lỗi thường gặp
  Hãy tưởng tượng bạn có hai người bạn, Hoàng và Trang. Hoàng rất giỏi kể chuyện nhưng chỉ thích nói từng phần nhỏ một. Trang lại thích nối những phần chuyện của Hoàng lại với nhau để thành 1 câu chuyện hoàn chỉnh. Trong lập trình js, Hoàng giống như những chuỗi văn bản đơn lẻ, còn linh giống như toán tử nối chuỗi và nội suy, giúp ghép nối và tạo ra một câu chuyện liền mạch, tức là một chuỗi văn bản hoàn chỉnh.

Toán tử nối chuỗi và nội suy, giúp ghép nối và tạo ra một chuỗi văn bản hoàn chỉnh

# Tìm hiểu về chuỗi

# Chuỗi là gì?
Chuỗi là một dữ liệu trong javascript, được sử dụng để biểu diễn văn bản. Để tạo chuỗi ta có thể sử dụng dấu nháy đơn ', dấu nháy kép " hoặc backticks ` bao quanh văn bản.

Ví dụ:
  'This is a string!'; // Tạo chuỗi với nháy đơn
  "This is another string"; // Tạo chuỗi với nháy kép
  `This is yet another string!`; // Tạo chuỗi với backticks

# Tạo chuỗi với nháy đơn
  - Đặc điểm: Đây là cách truyền thống để tạo chuỗi
  - Ứng dụng: Được sử dụng phổ biến cho các chuỗi đơn giản, không cần xuống dòng. Rất hữu ích khi chuỗi chứa các dấu ngáy kép bên trong.

# Tạo chuỗi với nháy kép
  - Đặc điểm: Tương tự dấu nháy đơn nhưng thường được sử dụng khi chuỗi chứa dấu nháy đơn.
  - ứng dụng: Hữu ích khi bạn muốn bao gồm nháy đơn trong chuỗi mà không cần dùng ký tự thoát(\ - Escap character).
  Ví dụ: "Đây là 'Javascript"
  - Định nghĩa: dấu Escape character:
    Trong lập trình, "Escape character" là một ký tự đặc biệt được sử dụng để "thoát" khỏi chức năng thông thường của các ký tự khác. Nó cho phép biểu diễn các ký tự không thể nhận trực tiếp vào code hoặc có ý nghĩa đặc biệt trong ngôn ngữ lập trình.
    Trong javascript, ký tự backslash (\) là một escape character. Nó được sử dụng để chèn các ký tự đặc biệt vào chuỗi, như ký tự xuống dòng (\n), tab (\t), hoặc để chèn dấu nháy đơn (\') và dấu nháy kép (\") mà không bị xung đột.
  Ví du:
    let message = 'Đây là cách sử dụng dáu nháy đơn: \' trong một chuỗi';

# Tạo chuôi với dấu `(backticks)
  - Đặc điểm: Hỗ trợ nội suy chuỗi(cho phép chèn biến hoặc biểu thức vào chuỗi), và cho phép xuồng dòng trực tiếp trong chuỗi.
  - Ứng dụng: Cực kỳ hữu ích khi cần kết hợp chuỗi và biến hoặc khi tạo chuỗi nhiều dòng.
  - Ví dụ:
    let name = "Javascript";
    let message = `Xin chào, đây là ${name}!
    Chúng ta có thể xuống dòng trực tiếp.`;

  Sử dụng ${name} bên trong backticks được gọi là "Nội suy", điều này sẽ được nhắc tới ở phía

# Nối chuỗi
# Toán tử nối chuỗi
  Toán tử nối chuỗi cho phép kế hợp hai hoặc nhiều chuỗi thành một chuỗi. Điều này đạt được bằng cách sử dụng ký tự + để nối chuỗi lại với nhau

  // Nối chuỗi
  let greeting = "Xin chào" + " tôi là" + " Hoàng.";
  console.log(greeting); // Xin chào, tôi là Hoàng.

  => Lý do sử dụng: Nối chuỗi hữu ích trong việc tạo ra kết quả động, ví dụ kết hợp tên người dùng với thông điệp chào mừng.

# Ví dụ chuỗi
  Nối chuỗi vs chuỗi:
    'Xin' + ' chào!'; // Xin chào!
  Chuỗi lưu vào biến sau đó nối:
    let greeting = "Xin";
    let message = greeting + " chào!";
    console.log(message); // Xin chào!
  Chuỗi chứa nháy đơn:
    let message = "Đây là chuỗi chứa dấu nháy đơn: I'm learning Javascript!";
    console.log(message); // Đây là chuỗi chứa dấu nháy đơn: I'm learning Javascript!
  Chuỗi chứa nháy kép:
    let message = ' Đây là chuỗi chứa dáu nháy kép: "Javascript is fun!"';
    console.log(message); // Đây là chuỗi chứa dấu nháy kép: "Javascript is fun!"
# Lưu ý khi sử dụng
  Khi sử dụng toán tử nối chuỗi + trong js, điều quan trọng cần lưu ý là sự khác biệt giữa nối chuỗi và cộng số. Toán tử + có thể gây nhầm lẫn vì nó được sử dụng cho cả hai mục đích này.

  Theo bạn, đoạn code dưới đây có kết quả là gì?
  '2' + 2;//?
  => Không phải 4, thực tế nó là '22'
  Javascript xác định hành vi của toán tử + dựa trên kiểu dữ liệu của các toán hạng. Nếu một trong các toán hạng là chuỗi, + sẽ thực hiện nối chuỗi. nếu cả hai toán hạng đề là số, + sẽ thực hiện cộng số.

Thứ tự thực hiện của các phép toán

Thứ tự các toán hạng và toán tử quyết định kết quả cuả biếu thức. Ví dụ: 3 + 4 + "5" sẽ trả về "75" chứ không phải "345" vì phép cộng được thực hiện trước, sau đó kết quả được nối với chuỗi "5".

Chuyển đổi kiểu dữ liệu tự động

Javascript thực hiện chuyển đổi kiểu dữ liệu tự động trong một số trường hợp. Ví dụ: "3" + 4 + 5 trả về "345" chứ không phải 12 vì "3" là chuỗi, khiến các số tiếp theo được chuyển đổi thành chuỗi và nối lại.

Làm sao để tránh nhầm lẫn?

  Để tránh nhầm lẫn, nên tránh sử dụng toán tử + cho cả nối chuỗi và cộng số trong cùng một biểu thức. Nên sử dụng dấu ngoặc đơn () hoặc tách biểu thức thành các biến riêng biệt.

  Cách làm sai:
  let a = 10;
  let b = 20;
  let message ='Tổng của ' + a + ' và ' + b + ' là: ' + a + b;
  console.log(message); // Tổng của 10 và 20 là: 1020

  Cách làm đúng(cách 1)
  let a = 10;
  let b = 20;
  let message ='Tổng của ' + a + ' và ' + b + ' là: ' + (a + b);
  console.log(message); // Tổng của 10 và 20 là: 30

  Cách làm đúng(cách 2)
  let a = 10;
  let b = 20;
  let total = a + b; // thực hiện phép cộng trước
  let message ='Tổng của ' + a + ' và ' + b + ' là: ' + total;
  console.log(message); // Tổng của 10 và 20 là: 30

  Cách làm đúng(cách 3)
  let a = 10;
  let b = 20;
  let total = a + b;
  let message = `Tổng của ${a} và ${b} là: ${total}`;
  console.log(message); // Tổng của 10 và 20 là 30;

  Cách số 3 nên dùng vì: Việc tách biến total và dùng template literals(hỗ trợ nội suy) gíup code có ý nghĩa và dễ đọc hơn.

# Template literals là gì?
  Đây là một tính năng mới được giới thiệu trong ES6. Template literals sử dụng dấu backticks(`) để định nghĩa chuỗi thay vì dấu nháy đơn (') hoặc nháy kép (").

  Điểm đặc biệt của template literals là khả năng thực hiện nội suy - tức là chèn biến hoặc biểu thức trực tiếp vào trong chuỗi. Điều này được thực hiện thông qua cú pháp ${expression}.

  Ngoài ra, Template listerals còn hỗ trợ việc tạo chuỗi đa dòng mà không cần sử dụng ký tự xuống dòng \n.

  "Template listerals" còn được gọi là "template strings". Cả hai cách gọi này đều nói tới việc sử dụng backticks để tạo chuỗi với đặc điểm là cho phép nội suy - tức là chèn biến hoặc biểu thức trực tiếp vào trong chuỗi.

# Nội suy chuỗi
  Nội suy chuỗi cho phép chèn trực tiếp các biến hoặc biểu thức vào trong 1 chuỗi. Điều này được thực hiện thông qua cú pháp ` `, $ và {}.

# Lỗi thường gặp
  - Sử dụng nhầm ký tự tạo chuỗi: Trong chuỗi tạo bởi dấu nháy đơn lại chứa dấu nháy đơn ('') mà không sử dụng ký tự thoát(\), và tương tự với chuỗi tạo bởi dấu nháy kép ("") và backticks (``).
  - Nhầm lẫn giữa nối chuỗi và cộng số: "2" + 2 sẽ trả về "22" chứ không phải 4.

Tóm tắt:
  - Chuỗi trong javascript:
    - Chuỗi là kiểu dữ liệu dùng để biểu diễn văn bản.
    - Có thể tạo chuỗi bằng dáu nháy đơn (''), nháy kép ("") hoặc dấu backticks (``).
  - Nối chuỗi:
    - Sử dụng toán tử + để nối chuỗi
    - Lưu ý sự khác biệt giữa nối chuỗi và cộng số
  - Template literals(template strings)
    - Sử dụng backticks để tạo chuỗi đa năng hơn.
    - Hỗ trợ nội suy biến và biểu thức (${expression}).
    - Cho phép xuống dòng trực tiếp trong chuỗi.
  - Các lưu ý quan trọng:
    - Chú ý đến loại dấu nháy sử dụng để tránh lỗi.
    - Phân biệt rõ ràng giữa nối chuỗi và cộng số
    - Tránh sử dụng + cho cả nối chuỗi và cộng số trong cùng một biểu thức.



</pre>
