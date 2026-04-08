# Javascript cho người mới bắt đầu 2021

<pre>
Tìm khoá học ở đâu?
  - Duy nhất trên Udemy
  - Không bán thông qua partner
  - Không upload lên driver để bán

Ai phù hợp để học?
    Bất cứ ai muốn theo lập trình web
    Chưa có kiến thức về lập trình
    Học jav lấy nền tảng học Nodejs

Tài liệu tham khảo
    https://javascript.info
    https://developer.mozila.org/en-US/docs/Web/Javascript
    https://frontendmasters.com/books/front-end-handbook/2018
    https://www.w3schools/js/default.asp
    http://es6-features.org/#Constants
    v.v

Yêu cầu kiến thức:
  HTML/CSS basic
  Biết sử dụng cơ bản vscode
  Biết cách search google

Set up môi trường làm việc

Tổng quan về ngôn ngữ lập trình
  Giải thuật. + ngôn ngữ lập trình
  Học ngôn ngữ lập trình là học cái gì?
  Lịch sử phát triển của javascript
  Javascript làm được những gì?
  Làm sao chạy được file javascript?
  Viết code javascript bằng cái gì?
  EXMAScript
  Những con số thống kê thú vị về javascipt

Ngôn ngữ lập trình javascript
  1. Làm quen với javascript
    - syntax
    - Cách viết function theo 3 cách
    - data type
    - if else
    - loop
  2. Làm quen với boolean

  3. Làm việc với number

  4. Làm việc với string

  5. Làm việc với array

  6. Làm việc với object

  7. Bài tập tổng hợp
    - Học một số giải thuật cơ bản
    - Áp dụng giải các bài toán lập trình

  8. Các concepts chính trong javascript
    - clouse
    - this
    - iife
    - event loop
    - microtask vs macrotask
    - value type vs ref type
    - hoisting
    - scopes
    - ...

  9. Lập trình bất đồng bộ trong javascript
    - promise
    - setTimeout, setInterval
    - Async/ Await
    - Generator

  10. OOP in javascript
      - class
      - Object inheritance

  11. Clean code
      - coding convention
      - DRY/ WET/ AHA
      - SOLID
      - KISS

Làm việc với browser
  - BOM (Browser Object Model)
  - DOM (Document Oject Model)
  - Web APIs
    - Storage
    - Timing (setTimeout, setInterval)
    - Fetch API
    - URL
    - ADVANCED Web Workers API
    - ADVANCED Websocket
    - ADVANCED Canvas API

Labs(bài tập)
  Giải thuật cơ bản
  Các bài toán lập trình cơ bản
  Game: tic-tac-toe
  Game: color-matching
  Và nhiều bài labs nho nhỏ đi kèm với mỗi chủ đề.

Đồ án cuối khoá
  Topic: Viết một ứng dụng CRUD bằng js thuần
   Demo: https://post-ui.vercel.app/
   CRUD trang quản lý post
   Trang Home: list + pagination + loading
   Trang Add/Edit: để tạo mới hoặc update thông tin post
   Trang Detail: để xem thông tin chi tiết của một post
   Sử dụng thư viện lightbox
   Gọi API tương tác với server để lấy dữ liệu
   Cho sẵn UI bằng photoshop, chỉ cần code thêm phần logic

Deployment
  Vercel
</pre>

## Một vài thống kê thú vị về javascript

## Một số lưu ý giúp việc học trở nên hiệu quả hơn

<pre>
  - Sắp xếp thời gian học tập hợp lý, có kế hoạch rõ ràng
  - Không học khi cơ thể đang mệt
  - Không học vì chạy tiến độ
  - Nên xem trọn vẹn video 1, 2 lần để hiểu nội dung trước khi code thử lại để hiểu
  - Khi gặp vấn đề, luôn tìm cách giải quyết với google search
  - Có thắc mắc thì thoải mái trao đổi trên nhóm discord
  - luyện tập, luyện tập và luyện tập mỗi ngày
  Chúc các bạn học tập thật tốt nhé
</pre>

# Chương 2 Cài đặt môi trường làm việc

## Cài đặt code editor - VScode

<pre>
#   Công việc                             Mô tả
1   NodeJS                                JS Runtime Env
2   Git                                   Version Control
3   VScode                                Code Editor
4   VScode Extension                      Improve productivity
5   FiraCode Font                         Font with programing ligatures
6   Discord                               Disscus - thảo luận nhóm

</pre>

## Cài đặt Node và git

<pre>
Cài đặt Node và git
<hr>
Cài đặt Git và setup lần đầu
- Vào trang chủ của GIT
- Tải và cài đặt
- Xác nhận cài đặt thành công với lệnh: git -- version
- Setup git lần đầu
    git config --global user.name "ABC"
    git config --global user.email abc@gmail.com

Lưu ý khi tên và email này là lấy từ thông tin tài khoản Github của bạn, vì thông tin này sẽ được sử dụng khi commit code
</pre>

## Cài đặt VScode và các extensions hữu ích

<pre>
Cài đặt VScode
- Vào trang chủ VScode
- Tải file và cài đặt
- Sau khi hoàn tất, mở VScode lên được giao diện tương tự thế này.
- Bật Auto format on save

Cài đặt extensions cho vscode:
- 1. Bracket Pair Colorizer 2(đã tichs hợp sẵn trong vscode rồi nên k cần cài extension này nữa) ✅
- 2. Javascript (ES6) code snippets: Gõ tắt trong javascript ✅
- 3. ESlint: Tìm bắt lỗi javascript ✅
- 4. Prettier: Format code xịn, mịn
- 5. Code Runner: Thực thi code javascript trực tiếp trên terminal của vscode  ✅
- 6. Live Server: live real time web ✅
- 7. Material Icon theme : đổi icon đẹp cho folder ✅
</pre>

## Cài đặt FiraCode font chữ đẹp

<pre>
Cài đặt Fira code font
1. Vào github FiraCode: https://github.com/tonsky/FiraCode
2. Tải và cài đặt bộ font FiraCode
3. Mở VScode setting.js file và add 2 dòng config này:
    "editor.fontFamily": "'Fira Code'",
    "editor.fontLigatures": true,

</pre>

# Chương 3: Tổng quan về thế giới lập trình

## Kiến trúc của một hệ thống phần mềm
