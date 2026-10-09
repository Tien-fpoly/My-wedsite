// ===== 1. MẢNG DỮ LIỆU VẬT PHẨM =====
// Mỗi vật phẩm là một object; thêm hoặc sửa thông tin ngay trong mảng này.
// Các trang chủ, danh sách và chi tiết đều đọc dữ liệu từ đây.
let sanpham = [
  {
    id: "honey",
    ten: "Honey",
    hinh: "images/Honey.jpg",
    loai: "Tài nguyên",
    congdung: "Dùng để mua vật phẩm và nâng cấp ong."
  },
  {
    id: "ticket",
    ten: "Ticket",
    hinh: "images/Ticket.png",
    loai: "Tiền tệ",
    congdung: "Dùng để mua ong hiếm và vật phẩm đặc biệt."
  },
  {
    id: "royal-jelly",
    ten: "Royal Jelly",
    hinh: "images/royal-jelly.jpg",
    loai: "Vật phẩm",
    congdung: "Dùng để thay đổi loại ong ngẫu nhiên."
  },
  {
    id: "glue",
    ten: "Glue",
    hinh: "images/Glue.jpg",
    loai: "Nguyên liệu",
    congdung: "Dùng để chế tạo trang bị."
  },
  {
    id: "star-jelly",
    ten: "Star Jelly",
    hinh: "images/star-jelly.jpg",
    loai: "Vật phẩm hiếm",
    congdung: "Dùng để biến ong thành ong hiếm hoặc ong sự kiện."
  }
];

// ===== 2. TẠO HTML CHO DANH SÁCH VẬT PHẨM =====
// Nhận mảng vật phẩm và trả về HTML để hiển thị các thẻ.
function showAllsp(msp) {
  let nd = "";

  msp.forEach((sp) => {
    nd += `
      <article class="item-card">
        <a class="item-card-link" href="item-detail.html?id=${encodeURIComponent(sp.id)}"
           aria-label="Xem chi tiết ${sp.ten}">
          <img src="${sp.hinh}" alt="${sp.ten}" loading="lazy">
          <h3>${sp.ten}</h3>
          <p class="item-card-type">${sp.loai}</p>
          <p class="item-card-usage">${sp.congdung}</p>
          <span class="item-card-more">Xem chi tiết →</span>
        </a>
      </article>`;
  });

  return nd;
}

// ===== 3. TẠO HTML CHI TIẾT VẬT PHẨM =====
// Lấy id từ URL, tìm object tương ứng trong mảng rồi dựng nội dung chi tiết.
function showCT(msp) {
  const ma = new URLSearchParams(window.location.search).get("id");
  const sp = msp.find((item) => item.id === ma);
  let nd = ``;

  if (!sp) {
    nd = `
      <p class="item-not-found">
        Không tìm thấy vật phẩm. Vui lòng chọn một vật phẩm trong danh sách.
      </p>`;
    return nd;
  }

  document.title = `${sp.ten} - Bee Swarm Simulator`;

  nd = `
    <img class="item-detail-image" src="${sp.hinh}" alt="${sp.ten}">
    <div class="item-detail-content">
      <h2>${sp.ten}</h2>
      <p class="item-detail-type">Loại: ${sp.loai}</p>
      <h3>Công dụng</h3>
      <p>${sp.congdung}</p>
    </div>`;

  return nd;
}

// ===== 4. ĐỔ DỮ LIỆU VÀO CÁC TRANG =====
// Những vùng có data-item-list sẽ nhận danh sách; trang chủ và trang Vật Phẩm
// dùng chung hàm showAllsp và cùng mảng sanpham.
document.querySelectorAll("[data-item-list]").forEach((danhSach) => {
  danhSach.innerHTML = showAllsp(sanpham);
});

// Trang chi tiết có vùng data-item-detail; trang khác không có thì bỏ qua.
const chiTiet = document.querySelector("[data-item-detail]");
if (chiTiet) {
  chiTiet.innerHTML = showCT(sanpham);
}
