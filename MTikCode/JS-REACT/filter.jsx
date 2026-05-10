// filter: lọc dữ liệu theo 1 điều kiện
// ứng dụng phổ biến của filter trong react là để xoá 1 phần tử ra khỏi danh sách:

const staffs = [
  { name: "Hoàng", onVaction: true },
  { name: "Trang", onVaction: false },
  { name: "Trinh", onVaction: false },
  { name: "Hà", onVaction: true },
];

const availStaffs = staffs.filter((staff) => {
  return staff.onVaction == false;
});
