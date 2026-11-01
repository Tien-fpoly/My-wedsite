// ===== CART.JS - QUẢN LÝ GIỎ HÀNG (CHUẨN SILVER - WEB1044) =====
// Khóa lưu trữ giỏ hàng trong localStorage (đồng bộ cả 2 khóa để tương thích)
let CART_STORAGE_KEY = "bss_robux_cart_v2";

function laygh() {
  try {
    let raw = localStorage.getItem(CART_STORAGE_KEY) || localStorage.getItem('gh');
    if (raw) {
      return JSON.parse(raw);
    }
    return [];
  } catch (err) {
    return [];
  }
}


function luugh(giohang) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(giohang));
    localStorage.setItem('gh', JSON.stringify(giohang));
  } catch (err) { }
  capnhatbadge();
  showgh();
}


function capnhatbadge() {
  let cart = laygh();
  let badges = document.querySelectorAll(".cart-count-badge, #cart-badge");
  let totalCount = cart.reduce(function (total, item) {
    // return total + Number(item.soLuong || item.sl || 1);
    return total + 1;
  }, 0);

  badges.forEach(function (badge) {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? "inline-flex" : "none";
  });
}


function themgh(msp) {
  let ma = localStorage.getItem('id');
  if (!ma || !msp) return;
  let sp = msp.find(s => s.id == ma);
  if (!sp) return;
  let slEl = document.getElementById('sl');
  let slThem = slEl ? parseInt(slEl.value) : 1;
  let cart = laygh();
  let vt = cart.findIndex(s => s.id == ma);

  if (vt >= 0) {
    cart[vt].soLuong = (Number(cart[vt].soLuong || cart[vt].sl) || 0) + slThem;
    cart[vt].sl = cart[vt].soLuong;
  } else {
    let spthem = {
      id: ma,
      ten: sp.ten,
      giaRobux: sp.giaRobux || sp.giaban || sp.gia || 0,
      gia: sp.giaRobux || sp.giaban || sp.gia || 0,
      hinh: sp.hinh,
      loai: sp.loai || "",
      soLuong: slThem,
      sl: slThem
    };
    cart.push(spthem);
  }
  luugh(cart);
}


function showgh() {
  let cart = laygh();
  let emptyView = document.getElementById("cart-empty-view");
  let mainContent = document.getElementById("cart-main-content");
  let tableBody = document.getElementById("cart-table-body") || document.getElementById("gh");
  let receiptSection = document.getElementById("receipt-section");

  if (receiptSection && receiptSection.style.display === "block") {
    return;
  }

  // 1. Nếu giỏ hàng rỗng
  if (cart.length === 0) {
    if (emptyView) emptyView.style.display = "block";
    if (mainContent) mainContent.style.display = "none";
    if (tableBody) tableBody.innerHTML = "";

    let qtyTotalEl = document.getElementById("cart-items-total-qty");
    let grandTotalEl = document.getElementById("cart-total-robux");
    let summaryQtyEl = document.getElementById("summary-qty");
    let summaryTotalEl = document.getElementById("summary-total-robux");
    let tongEl = document.getElementById("tong");

    if (qtyTotalEl) qtyTotalEl.textContent = "0";
    if (grandTotalEl) grandTotalEl.textContent = "0";
    if (summaryQtyEl) summaryQtyEl.textContent = "0 món";
    if (summaryTotalEl) summaryTotalEl.textContent = "0";
    if (tongEl) tongEl.innerHTML = "Tổng cộng: 0đ";
    return;
  }

  // 2. Nếu có sản phẩm trong giỏ hàng
  if (emptyView) emptyView.style.display = "none";
  if (mainContent) mainContent.style.display = "grid";

  let totalQty = 0;
  let totalRobux = 0;
  let ch = "";

  cart.forEach(function (sp) {
    let sl = Number(sp.soLuong || sp.sl || 1);
    let gia = Number(sp.giaRobux || sp.gia || 0);
    let thanhtien = gia * sl;
    totalQty += sl;
    totalRobux += thanhtien;

    ch += `
      <tr>
        <td class="col-product" data-label="Vật phẩm">
          <div class="product-info-cell">
            <img src="${sp.hinh}" alt="${sp.ten}" class="product-thumb">
            <div>
              <strong class="product-name">${sp.ten}</strong>
              <span class="product-type">${sp.loai || ""}</span>
            </div>
          </div>
        </td>
        <td class="col-price" data-label="Đơn giá">
          <span class="robux-symbol">R$</span>
          <span class="price-val">${gia.toLocaleString("vi-VN")}</span>
        </td>
        <td class="col-qty" data-label="Số lượng">
          <div class="table-qty-control">
            <button type="button" class="btn-qty" onclick="capnhatsl('${sp.id}', -1)" aria-label="Giảm 1">-</button>
            <span class="qty-num">${sl}</span>
            <button type="button" class="btn-qty" onclick="capnhatsl('${sp.id}', 1)" aria-label="Tăng 1">+</button>
          </div>
        </td>
        <td class="col-subtotal" data-label="Thành tiền" style="text-align: right;">
          <strong class="subtotal-val"><span class="robux-symbol">R$</span> ${thanhtien.toLocaleString("vi-VN")}</strong>
        </td>
        <td class="col-action" data-label="Thao tác" style="text-align: center;">
          <button type="button" class="btn-delete-item" onclick="xoasp('${sp.id}')" title="Xóa món này khỏi giỏ" aria-label="Xóa ${sp.ten} khỏi giỏ hàng">
            🗑️ Xóa
          </button>
        </td>
      </tr>`;
  });

  if (tableBody) {
    tableBody.innerHTML = ch;
  }

  // Cập nhật tổng số lượng và tổng tiền
  let qtyTotalEl = document.getElementById("cart-items-total-qty");
  let grandTotalEl = document.getElementById("cart-total-robux");
  let summaryQtyEl = document.getElementById("summary-qty");
  let summaryTotalEl = document.getElementById("summary-total-robux");
  let tongEl = document.getElementById("tong");

  if (qtyTotalEl) qtyTotalEl.textContent = totalQty;
  if (grandTotalEl) grandTotalEl.textContent = totalRobux.toLocaleString("vi-VN");
  if (summaryQtyEl) summaryQtyEl.textContent = totalQty + " món";
  if (summaryTotalEl) summaryTotalEl.textContent = totalRobux.toLocaleString("vi-VN");
  if (tongEl) tongEl.innerHTML = `Tổng cộng: ${totalRobux.toLocaleString("vi-VN")} R$`;
}


function capnhatsl(ma, pt) {
  let cart = laygh();
  let vt = cart.findIndex(s => s.id == ma);
  if (vt === -1) return;

  // Hỗ trợ cả 2 cách:
  // Cách 1 : input onchange="capnhatsl(id, this)" (pt là element ô input)
  if (typeof pt === "object" && pt !== null && pt.value !== undefined) {
    let slMoi = parseInt(pt.value);
    if (isNaN(slMoi) || slMoi <= 0) {
      cart.splice(vt, 1);
    } else {
      cart[vt].soLuong = slMoi;
      cart[vt].sl = slMoi;
    }
  } else if (typeof pt === "number") {
    // Cách 2: nút bấm tăng giảm +1 / -1
    let currentSl = Number(cart[vt].soLuong || cart[vt].sl || 1);
    let slMoi = currentSl + pt;
    if (slMoi <= 0) {
      cart.splice(vt, 1);
    } else {
      cart[vt].soLuong = slMoi;
      cart[vt].sl = slMoi;
    }
  }

  luugh(cart);
}


function xoasp(id) {
  let cart = laygh();
  let vt = cart.findIndex(s => s.id == id);
  if (vt !== -1) {
    cart.splice(vt, 1);
    luugh(cart);
  }
}


function xoagh() {
  if (confirm("Bạn có chắc chắn muốn xóa tất cả vật phẩm trong giỏ hàng?")) {
    luugh([]);
  }
}

// Khởi chạy khi trang tải xong
document.addEventListener("DOMContentLoaded", function () {
  capnhatbadge();
  showgh();
});
