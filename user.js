function dangky() {
    // Kiểm tra dữ liệu trên form nếu không lỗi thì thực hiện
    let ten = document.dk.name.value
    let dt = document.dk.phone.value
    let mk = document.dk.password.value
    let mknl = document.dk.confirm.value
    let tb = ""

    if (ten == "") {
        tb += " Bạn chưa nhập tên"
    } else if (dt == "") {
        tb += " Bạn chưa nhập sđt"
    } else if (mk == "") {
        tb += " Bạn chưa nhập mật khẩu"
    } else if (mknl == "") {
        tb += " Bạn chưa nhập mật khẩu nhập lại"
    } else if (dt != "" && isNaN(dt)) {
        tb += " Số điện thoại nhập chưa phải là số"
    } else if (mk != mknl) {
        tb += " Mật khẩu và mật khẩu nhập lại chưa khớp"
    }

    // Nếu không có lỗi cho đăng ký: lưu lên mảng user ở localStorage
    if (tb == "") {
        let users = localStorage.getItem('u') ? JSON.parse(localStorage.getItem('u')) : []
        let user = { ten: ten, sdt: dt, pass: mk, repass: mknl }

        if (users.find(u => u.sdt == dt)) {
            alert("Tài khoản này đã đăng ký");
        } else {
            users.push(user)
            localStorage.setItem('u', JSON.stringify(users))
            alert('Tài khoản đăng ký thành công');
            window.location.href = "dangnhap.html"
        }
    } else {
        alert("Lỗi đăng ký: " + tb);
    }
}

function dangnhap() {
  let users = localStorage.getItem('u') ? JSON.parse(localStorage.getItem('u')) : [];
  let formDn = document.dn || document.dangnhap;
  let dt = formDn.phone.value;
  let mk = formDn.password.value;
  let tb = "";

  if (dt == "") {
    tb += " Bạn chưa nhập sđt";
  } else if (mk == "") {
    tb += " Bạn chưa nhập mật khẩu";
  } else if (isNaN(dt)) {
    tb += " Số điện thoại nhập chưa phải là số";
  }

  if (tb == "") {
    let user = users.find(u => u.sdt == dt && u.pass == mk);

    if (user) {
      alert("Đăng nhập thành công!");
      localStorage.setItem('userCurrent', JSON.stringify(user));
      window.location.href = "index.html";
    } else {
      alert("Số điện thoại hoặc mật khẩu không chính xác!");
    }
  } else {
    alert("Lỗi đăng nhập:" + tb);
  }
}