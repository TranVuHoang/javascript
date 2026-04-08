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
