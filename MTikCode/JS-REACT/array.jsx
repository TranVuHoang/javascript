// Tạo mảng cho tên rồi dùng hàm map để tự động render từng phần tử trong mảng
const names = [Hoàng, Trang, Trinh];

const App = () => {
  return (
    <div className="">
      <h1>Danh sách tên</h1>
      {names.map((name, index) => {
        return <h2 key={index}>{name}</h2>;
      })}
      <h2>Hoàng</h2>
      <h2>Trang</h2>
      <h2>Trinh</h2>
    </div>
  );
};
