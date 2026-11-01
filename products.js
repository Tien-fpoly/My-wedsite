// ===== KHO DỮ LIỆU TỔNG HỢP BEE SWARM SIMULATOR =====
// Phân biệt rõ:
// 1. Vật phẩm bán (isForSale: true): có giá Robux, nút Thêm giỏ và thanh toán.
// 2. Ong & Trang bị wiki (isForSale: false): chỉ xem chi tiết thông tin, KHÔNG bán.
// Mỗi sản phẩm dùng chung các trường id, ten, hinh, loai, danhMuc; id phải là duy nhất
// vì được dùng để tìm sản phẩm, mở trang chi tiết và lưu sản phẩm trong giỏ.

let tatCaSanPham = [
  // ==========================================
  // --- A. VẬT PHẨM BÁN BẰNG ROBUX (SHOP) ---
  // ==========================================
  {
    id: "honey",
    ten: "Honey",
    hinh: "images/Honey.jpg",
    loai: "Tài nguyên",
    danhMuc: "vat-pham",
    isForSale: true,
    giaRobux: 50,
    tags: ["#honey", "#matong", "#tainguyen", "#farm", "#nangcap"],
    congdung: "Dùng để mua vật phẩm và nâng cấp ong.",
    moTaChiTiet:
      "Mật ong (Honey) là tài nguyên cơ bản và quan trọng nhất trong Bee Swarm Simulator. Dùng để mở rộng ô tổ ong, mua trang bị và nâng cấp đàn ong tăng tốc độ thu thập phấn hoa.",
  },
  {
    id: "ticket",
    ten: "Ticket",
    hinh: "images/Ticket.png",
    loai: "Tiền tệ",
    danhMuc: "vat-pham",
    isForSale: true,
    giaRobux: 150,
    tags: ["#ticket", "#ve", "#tiente", "#event", "#startreat"],
    congdung: "Dùng để mua ong hiếm và vật phẩm đặc biệt.",
    moTaChiTiet:
      "Vé (Ticket) là loại tiền tệ cao cấp trong game. Dùng tại Ticket Tent để mua các chú ong Event cực mạnh (Tabby Bee, Photon Bee, Cobalt Bee, Crimson Bee) và Star Treat.",
  },
  {
    id: "royal-jelly",
    ten: "Royal Jelly",
    hinh: "images/royal-jelly.jpg",
    loai: "Vật phẩm",
    danhMuc: "vat-pham",
    isForSale: true,
    giaRobux: 100,
    tags: ["#royal-jelly", "#suaongchua", "#roll", "#gifted", "#mythic"],
    congdung: "Dùng để thay đổi loại ong ngẫu nhiên.",
    moTaChiTiet:
      "Sữa ong chúa (Royal Jelly) dùng để biến đổi một chú ong trong tổ thành loại ong ngẫu nhiên khác. Có cơ hội quay ra ong Gifted hoặc ong Mythic quý hiếm phục vụ việc build đội hình.",
  },
  {
    id: "glue",
    ten: "Glue",
    hinh: "images/Glue.jpg",
    loai: "Nguyên liệu",
    danhMuc: "vat-pham",
    isForSale: true,
    giaRobux: 180,
    tags: ["#glue", "#keo", "#nguyenlieu", "#chetao", "#gummy"],
    congdung: "Dùng để chế tạo trang bị.",
    moTaChiTiet:
      "Keo (Glue) là nguyên liệu chế tạo trang bị cao cấp (như Gummy Mask, Gummy Boots). Tăng khả năng kết dính phấn hoa và thu gom kẹo Goo trên khắp các cánh đồng.",
  },
  {
    id: "star-jelly",
    ten: "Star Jelly",
    hinh: "images/star-jelly.jpg",
    loai: "Vật phẩm hiếm",
    danhMuc: "vat-pham",
    isForSale: true,
    giaRobux: 350,
    tags: ["#star-jelly", "#thachsao", "#hiem", "#giftedbee", "#bonus"],
    congdung: "Dùng để biến ong thành ong hiếm hoặc ong sự kiện.",
    moTaChiTiet:
      "Thạch sao (Star Jelly) là vật phẩm cực kỳ quý giá. Đảm bảo 100% biến một chú ong thành dạng Gifted Bee (ong đột biến phát sáng) với các chỉ số Hive Bonus tăng cường toàn đội.",
  },

  // ==========================================
  // --- B. CÁC LOẠI ONG (BEES.HTML) ---
  // ==========================================
  {
    id: "basic-bee",
    ten: "Basic Bee",
    hinh: "images/basic-bee.png",
    loai: "Common Bee",
    danhMuc: "ong",
    isForSale: false,
    tags: ["#basic", "#common", "#khoi-dau", "#ong", "#pollen"],
    congdung: "Tạo phấn cơ bản, khởi đầu hành trình nuôi ong.",
    moTaChiTiet:
      "Chú ong đầu tiên của mọi người chơi trong Bee Swarm Simulator. Khi biến đổi thành Gifted Basic Bee, chú ong này mang lại Hive Bonus cực khủng: nhân x1.2 tổng lượng Pollen của toàn đàn!",
  },
  {
    id: "brave-bee",
    ten: "Brave Bee",
    hinh: "images/brave-bee.jpg",
    loai: "Rare Bee",
    danhMuc: "ong",
    isForSale: false,
    tags: ["#brave", "#rare", "#attack", "#danh-quai", "#sat-thuong"],
    congdung: "Tăng sức tấn công và bảo vệ đàn ong.",
    moTaChiTiet:
      "Brave Bee là chú ong dũng cảm sở hữu chỉ số Attack cao ở giai đoạn đầu game, hỗ trợ người chơi tiêu diệt bọ cánh cứng Ladybug, Rhino Beetle và nhện Spider nhanh chóng.",
  },
  {
    id: "bubble-bee",
    ten: "Bubble Bee",
    hinh: "images/bubble-bee.jpg",
    loai: "Epic Bee",
    danhMuc: "ong",
    isForSale: false,
    tags: ["#bubble", "#epic", "#bong-bong", "#blue-team", "#blue-pollen"],
    congdung: "Tạo bong bóng giúp tăng mạnh phấn xanh.",
    moTaChiTiet:
      "Bubble Bee thả những quả bong bóng nước lên cánh đồng hoa xanh, khi nổ sẽ thu gom lượng lớn Blue Pollen và hồi phục lại độ tươi tốt cho các đóa hoa bị thu hoạch.",
  },
  {
    id: "music-bee",
    ten: "Music Bee",
    hinh: "images/music-bee.jpg",
    loai: "Legendary Bee",
    danhMuc: "ong",
    isForSale: false,
    tags: ["#music", "#legendary", "#melody", "#focus", "#token-link"],
    congdung: "Tăng Focus, Melody và hút token phấn diện rộng.",
    moTaChiTiet:
      "Music Bee là một trong những chú ong Legendary quan trọng nhất cho mọi đội hình. Cung cấp Melody (tăng 100% Critical Power), Focus tăng tỉ lệ chí mạng và Token Link gom sạch hạt phấn.",
  },
  {
    id: "fuzzy-bee",
    ten: "Fuzzy Bee",
    hinh: "images/fuzzy-bee.jpg",
    loai: "Mythic Bee",
    danhMuc: "ong",
    isForSale: false,
    tags: ["#fuzzy", "#mythic", "#nang-cap-hoa", "#pollination", "#toi-uu"],
    congdung: "Nâng cấp hoa dại thành hoa vàng và hoa sao trên cánh đồng.",
    moTaChiTiet:
      "Fuzzy Bee là ong Thần thoại (Mythic) có khả năng thụ phấn nâng cấp toàn bộ hoa trên cánh đồng, biến hoa thường thành hoa cấp cao để thu về lượng mật khổng lồ.",
  },
  {
    id: "vicious-bee",
    ten: "Vicious Bee",
    hinh: "images/vicious-bee.jpg",
    loai: "Event Bee",
    danhMuc: "ong",
    isForSale: false,
    tags: ["#vicious", "#event", "#stingers", "#spike", "#boss"],
    congdung: "Gây sát thương đâm gai cực mạnh lên Boss và quái.",
    moTaChiTiet:
      "Vicious Bee sở hữu chiêu thức triệu hồi bãi gai nhọn (Impale) xiên thẳng vào quái vật, là sát thủ diệt Boss hàng đầu (Crab, Tunnel Bear, Stump Snail) trong Bee Swarm Simulator.",
  },

  // ==================================================
  // --- C. ĐỘI HÌNH TEAM BLUE (BLUE.HTML) ---
  // ==================================================
  {
    id: "diamond-mask",
    ten: "Diamond Mask",
    hinh: "images/diamond-mask.jpg",
    loai: "Trang Bị Blue",
    danhMuc: "blue",
    isForSale: false,
    tags: ["#diamond-mask", "#trang-bi", "#blue", "#diamond-drain", "#endgame"],
    congdung: "x3 Dung lượng balô, kích hoạt nội tại Diamond Drain.",
    moTaChiTiet:
      "Chiếc mặt nạ kim cương tối thượng dành cho người chơi hệ Blue Hive. Tăng x3 sức chứa phấn xanh và nội tại Diamond Drain gom sạch mật ong của cả cánh đồng trong tích tắc.",
  },
  {
    id: "coconut-canister-blue",
    ten: "Coconut Canister",
    hinh: "images/coconut-canister.jpg",
    loai: "Trang Bị Cao Cấp",
    danhMuc: "blue",
    isForSale: false,
    tags: ["#canister", "#balo", "#trang-bi", "#coconut", "#roi-dua"],
    congdung: "Bình chứa mật dừa tối tân, tự động ném dừa gom phấn diện rộng.",
    moTaChiTiet:
      "Bình chứa mật dừa cao cấp đặt tại Coconut Cave. Dung lượng khổng lồ, khi đầy phấn sẽ kích hoạt Coconut Haste và ném dừa dọn sạch cánh đồng hoa.",
  },
  {
    id: "coconut-clogs-blue",
    ten: "Coconut Clogs",
    hinh: "images/coconut-clogs.jpg",
    loai: "Trang Bị Tốc Độ",
    danhMuc: "blue",
    isForSale: false,
    tags: ["#clogs", "#giay", "#trang-bi", "#toc-do", "#coconut-haste"],
    congdung: "Tăng tốc độ chạy cực đại và tạo dấu chân dừa Coconut Haste.",
    moTaChiTiet:
      "Đôi guốc dừa tăng mạnh tốc độ di chuyển trên mọi cánh đồng hoa, kết hợp cùng Coconut Canister tạo combo farm mật tối thượng.",
  },
  {
    id: "pop-star-ssa",
    ten: "Pop Star (SSA)",
    hinh: "images/ssa-star-blue.jpg",
    loai: "Bùa Sao Blue",
    danhMuc: "blue",
    isForSale: false,
    tags: ["#popstar", "#ssa", "#bua-sao", "#blue", "#x2-mat-ong"],
    congdung: "Bong bóng gom phấn đại dương, nhân đôi mật ong xanh.",
    moTaChiTiet:
      "Nội tại tối thượng của bùa Supreme Star Amulet dành cho Blue Team. Kích hoạt bão bong bóng khổng lồ giúp nhân nhiều lần lượng mật thu hoạch được.",
  },
  {
    id: "buoyant-bee",
    ten: "Buoyant Bee",
    hinh: "images/buoyant-bee.jpg",
    loai: "Mythic Blue Bee",
    danhMuc: "blue",
    isForSale: false,
    tags: ["#buoyant", "#mythic", "#blue", "#balloons", "#tang-balo"],
    congdung: "Thả bong bóng xanh, tăng sức chứa balô tức thời.",
    moTaChiTiet:
      "Trụ cột không thể thiếu của Blue Hive. Buoyant Bee tạo ra những quả bóng bay chứa mật dự trữ, giúp người chơi farm liên tục hàng giờ mà không lo tràn balô.",
  },
  {
    id: "tadpole-bee",
    ten: "Tadpole Bee",
    hinh: "images/tadpola-bee.jpg",
    loai: "Mythic Blue Bee",
    danhMuc: "blue",
    isForSale: false,
    tags: ["#tadpole", "#mythic", "#blue", "#frog", "#ech-con"],
    congdung: "Triệu hồi ếch con tạo mưa bong bóng nước.",
    moTaChiTiet:
      "Tadpole Bee gọi đàn ếch con nhảy nhót trên đồng hoa, kích hoạt cơn mưa bong bóng làm nở rộ hoa xanh và tăng tốc độ farm phấn cực đại.",
  },
  {
    id: "diamond-bee",
    ten: "Diamond Bee",
    hinh: "images/diamond-bee.jpg",
    loai: "Legendary Blue Bee",
    danhMuc: "blue",
    isForSale: false,
    tags: ["#diamond-bee", "#legendary", "#blue", "#honey-gift", "#blue-boost"],
    congdung: "Tạo Honey Gift và tích lũy Blue Boost.",
    moTaChiTiet:
      "Chú ong kim cương cung cấp Blue Boost liên tục và thả các túi quà Honey Gift tăng trực tiếp số mật ong bạn đang có.",
  },
  {
    id: "bubble-bee-blue",
    ten: "Bubble Bee",
    hinh: "images/bubble-bee.jpg",
    loai: "Epic Blue Bee",
    danhMuc: "blue",
    isForSale: false,
    tags: ["#bubble", "#epic", "#blue", "#bong-bong"],
    congdung: "Tạo bong bóng nước gom phấn xanh diện rộng.",
    moTaChiTiet:
      "Cung cấp các bong bóng liên tục phủ kín đồng hoa xanh, kích hoạt kỹ năng Bubble Bomb thu hoạch phấn nhanh chóng.",
  },
  {
    id: "music-bee-blue",
    ten: "Music Bee",
    hinh: "images/music-bee.jpg",
    loai: "Legendary Blue Bee",
    danhMuc: "blue",
    isForSale: false,
    tags: ["#music", "#legendary", "#blue", "#melody", "#focus"],
    congdung: "Melody, Focus và Token Link gom phấn.",
    moTaChiTiet:
      "Duy trì Melody x2 sát thương chí mạng và Focus tăng tỉ lệ đánh trúng cho toàn đội ong Blue.",
  },
  {
    id: "basic-bee-blue",
    ten: "Gifted Basic Bee",
    hinh: "images/basic-bee.png",
    loai: "Common Gifted Bee",
    danhMuc: "blue",
    isForSale: false,
    tags: ["#gifted-basic", "#common", "#blue", "#x12pollen"],
    congdung: "Hive Bonus: Tăng x1.2 tổng lượng phấn toàn đàn.",
    moTaChiTiet:
      "Chú ong đột biến quan trọng bậc nhất mà bất cứ người chơi hệ Blue nào cũng cần sở hữu trong tổ ong.",
  },
  {
    id: "fuzzy-bee-blue",
    ten: "Fuzzy Bee",
    hinh: "images/fuzzy-bee.jpg",
    loai: "Mythic Blue Bee",
    danhMuc: "blue",
    isForSale: false,
    tags: ["#fuzzy", "#mythic", "#blue", "#pollination"],
    congdung: "Thụ phấn nâng cấp hoa xanh thành hoa sao rực rỡ.",
    moTaChiTiet:
      "Nâng cấp chất lượng các bông hoa xanh trên Pine Tree Forest để Buoyant Bee thu hoạch tối đa lượng mật.",
  },
  {
    id: "commander-bee",
    ten: "Commander Bee",
    hinh: "images/music-bee.jpg",
    loai: "Rare Blue Bee",
    danhMuc: "blue",
    isForSale: false,
    tags: ["#commander", "#rare", "#blue", "#focus", "#chi-mang"],
    congdung: "Cung cấp Focus và tăng tỉ lệ đánh chí mạng.",
    moTaChiTiet:
      "Chỉ huy dàn ong, cung cấp hiệu ứng Focus liên tục giúp toàn đội tăng sát thương chí mạng và tăng lượng phấn thu thập được.",
  },

  // ==================================================
  // --- D. ĐỘI HÌNH TEAM RED (RED.HTML) ---
  // ==================================================
  {
    id: "demon-mask",
    ten: "Demon Mask",
    hinh: "images/demon-mask.jpg",
    loai: "Trang Bị Red",
    danhMuc: "red",
    isForSale: false,
    tags: ["#demon-mask", "#trang-bi", "#red", "#ignite", "#sat-thuong"],
    congdung: "Kích hoạt hiệu ứng Ignite và tăng sát thương cực lớn.",
    moTaChiTiet:
      "Mặt nạ ác ma tối thượng của Red Team. Tăng 100% Red Pollen, kích hoạt hiệu ứng ngọn lửa địa ngục thiêu đốt toàn bộ hoa đỏ trên đồng hoa.",
  },
  {
    id: "coconut-canister-red",
    ten: "Coconut Canister",
    hinh: "images/coconut-canister.jpg",
    loai: "Trang Bị Cao Cấp",
    danhMuc: "red",
    isForSale: false,
    tags: ["#canister", "#balo", "#trang-bi", "#red", "#coconut"],
    congdung: "Bình chứa mật dừa tối tân, tự động ném dừa gom phấn diện rộng.",
    moTaChiTiet:
      "Bình chứa mật dừa cao cấp đặt tại Coconut Cave. Dung lượng khổng lồ, hỗ trợ Red Team farm liên tục không lo tràn balô.",
  },
  {
    id: "coconut-clogs-red",
    ten: "Coconut Clogs",
    hinh: "images/coconut-clogs.jpg",
    loai: "Trang Bị Tốc Độ",
    danhMuc: "red",
    isForSale: false,
    tags: ["#clogs", "#giay", "#trang-bi", "#red", "#toc-do"],
    congdung: "Tăng tốc độ chạy cực đại và tạo dấu chân dừa Coconut Haste.",
    moTaChiTiet:
      "Đôi guốc dừa tăng mạnh tốc độ di chuyển trên cánh đồng ớt và cánh đồng dâu tây, tối ưu hóa vòng quay thu hoạch phấn đỏ.",
  },
  {
    id: "scorch-star-ssa",
    ten: "Scorch Star (SSA)",
    hinh: "images/ssa-star-red.png",
    loai: "Bùa Sao Red",
    danhMuc: "red",
    isForSale: false,
    tags: ["#scorchstar", "#ssa", "#bua-sao", "#red", "#thieu-dot"],
    congdung: "Thiêu đốt cánh đồng hoa đỏ, tạo bão phấn rực lửa.",
    moTaChiTiet:
      "Nội tại thần thánh của bùa SSA dành cho Red Team. Kích hoạt quầng lửa thiêu đốt thu về hàng tỷ mật ong mỗi giây trên cánh đồng ớt (Pepper Patch).",
  },
  {
    id: "spicy-bee",
    ten: "Spicy Bee",
    hinh: "images/spicy-bee.jpg",
    loai: "Mythic Red Bee",
    danhMuc: "red",
    isForSale: false,
    tags: ["#spicy", "#mythic", "#red", "#lua", "#flame-fuel"],
    congdung: "Triệu hồi ngọn lửa đỏ rực và tăng tốc độ farm lửa.",
    moTaChiTiet:
      "Trái tim của đội hình Red Hive. Spicy Bee liên tục phóng hỏa tạo các ngọn lửa bao quanh cánh đồng, nhân nhiều lần lượng Red Pollen thu thập.",
  },
  {
    id: "precise-bee",
    ten: "Precise Bee",
    hinh: "images/precise-bee.jpg",
    loai: "Mythic Red Bee",
    danhMuc: "red",
    isForSale: false,
    tags: ["#precise", "#mythic", "#red", "#hong-tam", "#sniper"],
    congdung: "Tạo hồng tâm thiện xạ, siêu sát thương chí mạng.",
    moTaChiTiet:
      "Tay bắn tỉa cự phách của đàn ong. Bắn trúng tâm bia giúp chuyển đổi tức thời phấn hoa trong balô thành mật ong nguyên chất mà không cần về tổ.",
  },
  {
    id: "demon-bee",
    ten: "Demon Bee",
    hinh: "images/demon-bee.jpg",
    loai: "Legendary Red Bee",
    danhMuc: "red",
    isForSale: false,
    tags: ["#demon-bee", "#legendary", "#red", "#red-bomb", "#flame"],
    congdung: "Tạo Flame và kích nổ Red Bomb diện rộng.",
    moTaChiTiet:
      "Demon Bee hỗ trợ Red Team bằng cách thả bom phấn đỏ và tạo ra các ngọn lửa thiêu đốt quái vật xung quanh.",
  },
  {
    id: "rage-bee",
    ten: "Rage Bee",
    hinh: "images/music-bee.jpg",
    loai: "Epic Red Bee",
    danhMuc: "red",
    isForSale: false,
    tags: ["#rage", "#epic", "#red", "#cuong-no", "#attack"],
    congdung: "Tích lũy Rage token, tăng mạnh sức tấn công.",
    moTaChiTiet:
      "Cung cấp các hạt Rage tăng sát thương cắn của đàn ong lên mức tối đa để dễ dàng hạ gục bọ hung và cua dừa.",
  },
  {
    id: "riley-bee",
    ten: "Riley Bee",
    hinh: "images/music-bee.jpg",
    loai: "Rare Red Bee",
    danhMuc: "red",
    isForSale: false,
    tags: ["#riley", "#rare", "#red", "#red-boost", "#hoa-do"],
    congdung: "Cung cấp Red Boost và hỗ trợ cánh đồng đỏ.",
    moTaChiTiet:
      "Chú ong đỏ trung thành của Riley Bee Guard, giúp duy trì hiệu ứng Red Boost x3 liên tục trong các phiên farm.",
  },
  {
    id: "basic-bee-red",
    ten: "Gifted Basic Bee",
    hinh: "images/basic-bee.png",
    loai: "Common Gifted Bee",
    danhMuc: "red",
    isForSale: false,
    tags: ["#gifted-basic", "#common", "#red", "#x12pollen"],
    congdung: "Hive Bonus: Tăng x1.2 tổng lượng Pollen toàn đàn.",
    moTaChiTiet: "Gia tăng 20% lượng phấn thu thập trên mọi cánh đồng hoa đỏ.",
  },
  {
    id: "fuzzy-bee-red",
    ten: "Fuzzy Bee",
    hinh: "images/fuzzy-bee.jpg",
    loai: "Mythic Red Bee",
    danhMuc: "red",
    isForSale: false,
    tags: ["#fuzzy", "#mythic", "#red", "#pollination"],
    congdung: "Nâng cấp hoa dại thành hoa đỏ rực rỡ cấp cao.",
    moTaChiTiet:
      "Giúp hoa trên Pepper Patch nở to tối đa để ngọn lửa của Spicy Bee thiêu đốt đạt sản lượng mật kỷ lục.",
  },
  {
    id: "music-bee-red",
    ten: "Music Bee",
    hinh: "images/music-bee.jpg",
    loai: "Legendary Red Bee",
    danhMuc: "red",
    isForSale: false,
    tags: ["#music", "#legendary", "#red", "#melody", "#focus"],
    congdung: "Melody, Focus và Token Link tối ưu sát thương.",
    moTaChiTiet:
      "Cung cấp Melody giúp sát thương của Precise Bee và Demon Bee tăng gấp đôi.",
  },

  // ==================================================
  // --- E. ĐỘI HÌNH TEAM WHITE (WHITE.HTML) ---
  // ==================================================
  {
    id: "gummy-mask",
    ten: "Gummy Mask",
    hinh: "images/gummy-mask.jpg",
    loai: "Trang Bị White",
    danhMuc: "white",
    isForSale: false,
    tags: ["#gummy-mask", "#trang-bi", "#white", "#goo", "#coin-scatter"],
    congdung: "Tạo vũng kẹo Goo x2 mật ong và kích hoạt Coin Scatter.",
    moTaChiTiet:
      "Mặt nạ huyền thoại hệ White Hive. Tương thích xuất sắc với mọi cánh đồng, biến phấn hoa thành tiền xu mật ong bay tung tóe khắp bản đồ.",
  },
  {
    id: "coconut-canister-white",
    ten: "Coconut Canister",
    hinh: "images/coconut-canister.jpg",
    loai: "Trang Bị Cao Cấp",
    danhMuc: "white",
    isForSale: false,
    tags: ["#canister", "#balo", "#trang-bi", "#white", "#coconut"],
    congdung: "Bình chứa mật dừa tối tân, tự động ném dừa gom phấn diện rộng.",
    moTaChiTiet:
      "Dung lượng balô cực lớn kết hợp cùng Coconut Haste giúp White Team tích tụ hàng tỷ mật ong trong các phiên kích hoạt Goo.",
  },
  {
    id: "gummy-boots",
    ten: "Gummy Boots",
    hinh: "images/gummy-boots.jpg",
    loai: "Trang Bị Đỉnh Cao",
    danhMuc: "white",
    isForSale: false,
    tags: ["#gummy-boots", "#giay", "#trang-bi", "#white", "#keo-dinh"],
    congdung: "Đôi giày đắt giá nhất game, để lại vết dính kẹo x2 mật tức thì.",
    moTaChiTiet:
      "Đôi giày quyền lực và uy tín nhất Bee Swarm Simulator. Bước chân đến đâu kẹo dẻo nở rộ đến đó, nhân bội lần thu hoạch mật ong trắng.",
  },
  {
    id: "gummy-star-ssa",
    ten: "Gummy Star (SSA)",
    hinh: "images/ssa-star-white.jpg",
    loai: "Bùa Sao White",
    danhMuc: "white",
    isForSale: false,
    tags: ["#gummy-star", "#ssa", "#bua-sao", "#white", "#goo-bung-no"],
    congdung: "Bao phủ cánh đồng bằng lớp kẹo Goo siêu dày, x2 mật ong trắng.",
    moTaChiTiet:
      "Nội tại thần thoại tối ưu hóa toàn bộ lượng mật từ vũng Goo cho White Hive, giúp bạn đạt kỷ lục hàng trăm tỷ mật trong nháy mắt.",
  },
  {
    id: "vector-bee",
    ten: "Vector Bee",
    hinh: "images/vector-bee.jpg",
    loai: "Mythic White Bee",
    danhMuc: "white",
    isForSale: false,
    tags: ["#vector", "#mythic", "#white", "#tam-giac", "#triangulate"],
    congdung: "Tạo lưới tam giác Triangulate quét sạch phấn trắng diện rộng.",
    moTaChiTiet:
      "Trụ cột số một của White Hive. Vector Bee liên kết với các chú ong khác tạo thành mạng lưới tam giác phấn hoa thu gom toàn bộ cánh đồng.",
  },
  {
    id: "gummy-bee",
    ten: "Gummy Bee",
    hinh: "images/gummy-bee.jpg",
    loai: "Event White Bee",
    danhMuc: "white",
    isForSale: false,
    tags: ["#gummy-bee", "#event", "#white", "#gangle", "#goo"],
    congdung: "Thả kẹo dẻo Goo liên tục, tăng 100% mật thu hoạch từ kẹo.",
    moTaChiTiet:
      "Chú ong kẹo dẻo ngộ nghĩnh nhận từ Gummy Bear. Rải kẹo ngọt khắp lối đi và tăng cường sức mạnh cho Gummy Mask.",
  },
  {
    id: "precise-bee-white",
    ten: "Precise Bee",
    hinh: "images/precise-bee.jpg",
    loai: "Mythic White Bee",
    danhMuc: "white",
    isForSale: false,
    tags: ["#precise", "#mythic", "#white", "#supercrit"],
    congdung: "Hồng tâm bắn tỉa chuyển phấn trắng thành mật tức thì.",
    moTaChiTiet:
      "Bắn trúng hồng tâm giúp White Team chuyển đổi balô tức thời ngay giữa cánh đồng hoa mà không cần bay về tổ.",
  },
  {
    id: "fuzzy-bee-white",
    ten: "Fuzzy Bee",
    hinh: "images/fuzzy-bee.jpg",
    loai: "Mythic White Bee",
    danhMuc: "white",
    isForSale: false,
    tags: ["#fuzzy", "#mythic", "#white", "#pollination"],
    congdung: "Nâng cấp hoa dại thành hoa vàng và hoa sao trên cánh đồng dừa.",
    moTaChiTiet:
      "Nâng cấp chất lượng các bông hoa trắng để Vector Bee quét tam giác gom lượng phấn tối đa.",
  },
  {
    id: "carpenter-bee",
    ten: "Carpenter Bee",
    hinh: "images/music-bee.jpg",
    loai: "Legendary White Bee",
    danhMuc: "white",
    isForSale: false,
    tags: [
      "#carpenter",
      "#legendary",
      "#white",
      "#honey-marks",
      "#pollen-marks",
    ],
    congdung: "Tạo Honey Marks và Pollen Marks hỗ trợ farm đứng yên.",
    moTaChiTiet:
      "Cung cấp các dấu ấn Marks tăng gấp bội mật ong khi bạn đứng trong vòng tròn phong ấn của chú ong này.",
  },
  {
    id: "basic-bee-white",
    ten: "Gifted Basic Bee",
    hinh: "images/basic-bee.png",
    loai: "Common Gifted Bee",
    danhMuc: "white",
    isForSale: false,
    tags: ["#gifted-basic", "#common", "#white", "#x12pollen"],
    congdung: "Hive Bonus: Tăng x1.2 tổng lượng phấn toàn đàn.",
    moTaChiTiet: "Tăng 20% toàn bộ sản lượng phấn thu gom của White Team.",
  },
  {
    id: "lion-bee",
    ten: "Lion Bee",
    hinh: "images/brave-bee.jpg",
    loai: "Legendary White Bee",
    danhMuc: "white",
    isForSale: false,
    tags: ["#lion", "#legendary", "#white", "#su-tu", "#sat-thuong"],
    congdung: "Sức cắn sư tử dũng mãnh, tăng thu hoạch hoa trắng.",
    moTaChiTiet:
      "Chú ong sư tử có sát thương tự nhiên cực cao, tăng mạnh hiệu quả dọn quái và thu hoạch hoa trắng trên cánh đồng nhện và dừa.",
  },
  {
    id: "music-bee-white",
    ten: "Music Bee",
    hinh: "images/music-bee.jpg",
    loai: "Legendary White Bee",
    danhMuc: "white",
    isForSale: false,
    tags: ["#music", "#legendary", "#white", "#melody", "#focus"],
    congdung: "Melody, Focus và Token Link gom phấn nhanh chóng.",
    moTaChiTiet:
      "Cung cấp Melody và Focus liên tục cho các chú ong White Team farm hiệu quả.",
  },
];

// Khóa lưu giỏ hàng trong localStorage (phải trùng khớp hoàn toàn với cart.js)
let CART_STORAGE_KEY = "bss_robux_cart_v2";


// - Lấy chuỗi dữ liệu trong localStorage và chuyển thành Mảng (Array) để Javascript xử lý.
// - Dùng JSON.parse() để chuyển từ Chuỗi JSON -> Mảng các Object sản phẩm.
// - Nếu trong máy chưa có giỏ hàng, trả về mảng rỗng [] để tránh lỗi code.
function getCart() {
  try {
    let raw = localStorage.getItem(CART_STORAGE_KEY); // Lấy chuỗi thô từ trình duyệt
    if (raw) {
      // localStorage chỉ lưu chuỗi, nên cần đổi chuỗi JSON lại thành mảng để xử lý
      return JSON.parse(raw);
    }
    return []; // Giỏ rỗng
  } catch (err) {
    console.error("Lỗi đọc giỏ hàng:", err);
    return [];
  }
}


// -Ghi đè mảng giỏ hàng mới vào localStorage.
// - Dùng JSON.stringify() để chuyển từ Mảng -> Chuỗi văn bản JSON (bắt buộc vì localStorage chỉ nhận chuỗi).
// - Sau khi lưu xong, lập tức gọi updateCartBadge() để cập nhật lại số lượng trên icon Header.
function saveCart(cart) {
  try {
    // Chuyển mảng giỏ hàng thành chuỗi trước khi lưu vào localStorage
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (err) {
    console.error("Lỗi lưu giỏ hàng:", err);
  }
  updateCartBadge(); // Cập nhật ngay số lượng hiển thị trên Menu
}


// -  Đếm tổng số lượng tất cả các món đồ và in lên biểu tượng giỏ hàng Header.
// - Dùng vòng lặp for duyệt qua mảng cart, cộng dồn Number(item.soLuong) vào biến totalCount.
function updateCartBadge() {
  let cart = getCart();
  let totalCount = 0;
  let badges = document.querySelectorAll(".cart-count-badge, #cart-badge");
  let i;

  // Cộng số lượng từng loại sản phẩm, không chỉ đếm số dòng trong giỏ
  for (i = 0; i < cart.length; i++) {
    totalCount += Number(cart[i].soLuong);
  }

  // Cập nhật số hiển thị lên tất cả các badge trên trang
  for (i = 0; i < badges.length; i++) {
    badges[i].textContent = totalCount;
    // Nếu tổng số món > 0 thì hiện badge tròn, bằng 0 thì ẩn đi
    badges[i].style.display = totalCount > 0 ? "inline-flex" : "none";
  }
}


function addToCart(productId, event, quantity, button) {
  // Nếu không truyền số lượng (nút Thêm giỏ ở card), mặc định thêm 1 món
  if (quantity === undefined || quantity === null) {
    quantity = 1;
  }

  if (event) {
    // Nút nằm trong thẻ có liên kết chi tiết; chặn sự kiện để chỉ thêm vào giỏ
    event.preventDefault();
    event.stopPropagation();
  }

  let sp = null;
  let cart = getCart();
  let existing = null;
  let i;

  // Tìm thông tin sản phẩm gốc để lưu đúng tên, hình, loại và giá vào giỏ
  for (i = 0; i < tatCaSanPham.length; i++) {
    if (tatCaSanPham[i].id === productId) {
      sp = tatCaSanPham[i];
      break;
    }
  }

  // Chỉ cho phép thêm vào giỏ nếu sản phẩm tồn tại và có gắn cờ isForSale === true
  if (!sp || !sp.isForSale) {
    return;
  }

  let addButton = button || null;
  if (event && event.currentTarget) {
    addButton = event.currentTarget;
  }

  // Kiểm tra xem sản phẩm đã có trong giỏ chưa để tránh bị trùng dòng
  for (i = 0; i < cart.length; i++) {
    if (cart[i].id === productId) {
      existing = cart[i];
      break;
    }
  }

  if (existing) {
    // Đã có -> Tăng số lượng
    existing.soLuong += quantity;
  } else {
    // Chưa có -> Tạo mới và thêm vào mảng giỏ hàng
    cart.push({
      id: sp.id,
      ten: sp.ten,
      hinh: sp.hinh,
      loai: sp.loai,
      giaRobux: sp.giaRobux,
      soLuong: quantity,
    });
  }

  saveCart(cart);           // Lưu giỏ hàng và đồng bộ badge
  animateCartBadge();       // Hiệu ứng nảy badge
  if (addButton) {
    showAddedButtonFeedback(addButton); // Hiệu ứng đổi chữ trên nút bấm
  }
  showToastNotification(`🐝 Đã thêm <strong>${sp.ten}</strong> vào giỏ hàng!`); // Bật popup góc màn hình
}

// Đồng bộ tên hàm tiếng Việt chuẩn Silver (WEB1044)
window.themgh = addToCart;
window.laygh = getCart;
window.luugh = saveCart;
window.capnhatbadge = updateCartBadge; 


// - Khi người dùng bấm "Thêm giỏ", nút sẽ tạm thời chuyển sang chữ "✓ Đã thêm"
//   và đổi màu trong 1.2 giây rồi tự động trả lại chữ ban đầu.
function showAddedButtonFeedback(button) {
  // Nếu người dùng bấm liên tục nhiều lần, hủy bộ đếm hẹn giờ cũ để không bị giật
  if (button._resetFeedbackTimer) {
    clearTimeout(button._resetFeedbackTimer);
  }

  // Lưu lại chữ gốc của nút (ví dụ: "🛒 Thêm giỏ") vào một biến tạm nếu chưa lưu
  if (!button._originalFeedbackText) {
    button._originalFeedbackText = button.textContent.trim();
  }

  // Đổi chữ trên nút và thêm class CSS để đổi màu nút (xanh lá)
  button.textContent = "✓ Đã thêm";
  button.classList.add("is-added");

  // Hẹn giờ sau 1200ms (1.2 giây) thì tự trả lại trạng thái và chữ ban đầu
  button._resetFeedbackTimer = setTimeout(function () {
    button.textContent = button._originalFeedbackText;
    button.classList.remove("is-added");
  }, 1200);
}


// -  Làm quả cầu đỏ hiển thị số lượng giỏ hàng trên Menu Header nảy lên (hiệu ứng bounce)
//   để người dùng dễ dàng nhận biết giỏ hàng vừa được cộng thêm món.
function animateCartBadge() {
  let badges = document.querySelectorAll(".cart-count-badge, #cart-badge");
  let i;

  for (i = 0; i < badges.length; i++) {
    badges[i].classList.remove("is-bouncing");
    // Lệnh này buộc trình duyệt tính toán lại layout (Reflow/Repaint),
    // giúp animation CSS có thể chạy lại từ đầu ngay cả khi người dùng bấm thêm liên tục
    badges[i].offsetWidth; 
    badges[i].classList.add("is-bouncing");
  }
}


// -  Hiện một popup thông báo nhỏ, đẹp mắt ở góc màn hình: "🐝 Đã thêm Honey vào giỏ hàng!"
//   kèm đường link bấm nhanh "Xem giỏ hàng →", tự biến mất sau 3.2 giây.
function showToastNotification(message) {
  // Tìm xem thẻ thông báo đã có sẵn trong trang chưa
  let toast = document.getElementById("bss-toast-msg");
  if (!toast) {
    // Nếu chưa có thì tự tạo một thẻ div mới và gắn vào cuối thẻ <body>
    toast = document.createElement("div");
    toast.id = "bss-toast-msg";
    toast.className = "bss-toast-msg";
    document.body.appendChild(toast);
  }

  // Đổ nội dung thông báo và nút xem giỏ hàng vào hộp toast
  toast.innerHTML = `
    <div class="toast-content">
      <span>${message}</span>
      <a href="cart.html" class="toast-btn-cart">Xem giỏ hàng →</a>
    </div>
  `;
  // Thêm class "show" để kích hoạt hiệu ứng CSS trượt hiện ra màn hình
  toast.classList.add("show");

  // Hủy bộ đếm thời gian cũ nếu khách bấm thêm món liên tục
  clearTimeout(toast._timeout);
  // Sau 3200ms (3.2 giây), tự động gỡ class "show" để thông báo trượt ẩn đi
  toast._timeout = setTimeout(function () {
    toast.classList.remove("show");
  }, 3200);
}

// ===== 2. RENDER THẺ CARD =====
function renderCardHtml(sp) {
  let tags = sp.tags || [];
  let tagsHtml = "";
  let bottomBarHtml = "";
  let i;

  for (i = 0; i < tags.length; i++) {
    tagsHtml += `<span class="tag-pill" onclick="filterByTag('${tags[i]}', event)">${tags[i]}</span>`;
    if (i < tags.length - 1) {
      tagsHtml += " ";
    }
  }

  // Hàm tạo chuỗi HTML cho một sản phẩm; isForSale quyết định có nút mua hay không.
  if (sp.isForSale) {
    // Vật phẩm bán: Có giá Robux và nút Thêm giỏ
    bottomBarHtml = `
      <div class="item-card-bottom-bar">
        <div class="item-card-robux" title="Giá vật phẩm bằng Robux trong Bee Swarm Simulator">
          <span class="robux-symbol">R$</span>
          <span class="robux-val">${sp.giaRobux}</span>
          <span class="robux-unit">Robux</span>
        </div>

        <div class="item-card-action-btns">
          <button type="button" class="btn-add-to-cart" onclick="addToCart('${sp.id}', event)">
            🛒 Thêm giỏ
          </button>
          <a class="item-card-more" href="item-detail.html?id=${encodeURIComponent(sp.id)}">
            Chi tiết →
          </a>
        </div>
      </div>
    `;
  } else {
    // Ong & Trang bị chỉ xem chi tiết: KHÔNG giá Robux, KHÔNG nút bán
    bottomBarHtml = `
      <div class="item-card-bottom-bar info-only-bottom">
        <a class="btn-view-info-only" href="item-detail.html?id=${encodeURIComponent(sp.id)}">
          🔍 Xem Chi Tiết
        </a>
      </div>
    `;
  }

  return `
    <article class="item-card ${sp.isForSale ? "card-shop" : "card-info"}" data-id="${sp.id}">
      <a class="item-card-link" href="item-detail.html?id=${encodeURIComponent(sp.id)}"
         aria-label="Xem chi tiết ${sp.ten}">
        <img src="${sp.hinh}" alt="${sp.ten}" loading="lazy">
        <h3>${sp.ten}</h3>
        <p class="item-card-type">${sp.loai}</p>
        <p class="item-card-usage">${sp.congdung}</p>
      </a>

      <!-- Thẻ tags phân loại -->
      <div class="item-card-tags">
        ${tagsHtml}
      </div>

      ${bottomBarHtml}
    </article>`;
}


// -  Nhận vào một danh sách các sản phẩm (list), duyệt qua từng phần tử
//   và gọi hàm renderCardHtml() để ghép nối thành một chuỗi HTML dài, sau đó trả về.
// - Nếu danh sách rỗng (không tìm thấy món nào), hiển thị thông báo "Không tìm thấy vật phẩm".
function showAllsp(list) {
  if (!list || list.length === 0) {
    return `<div class="empty-notice"><p>🐝 Không tìm thấy vật phẩm nào khớp với tìm kiếm của bạn.</p></div>`;
  }

  // Ghép từng thẻ HTML thành một chuỗi để gán vào innerHTML của danh sách
  let html = "";
  let i;
  for (i = 0; i < list.length; i++) {
    html += renderCardHtml(list[i]);
  }
  return html;
}


// - Lắng nghe sự kiện người dùng gõ từ khóa tìm kiếm (input) hoặc click vào các tab phân loại (click),
//   tự động lọc ra các sản phẩm thỏa mãn điều kiện và gọi showAllsp() để vẽ lại danh sách.
function setupItemsFilter() {
  let searchInput = document.getElementById("item-search-input");
  let filterTabs = document.querySelectorAll(".item-filter-tab");
  let targetGrid = document.querySelector("[data-item-list]");
  let countEl = document.getElementById("items-count-display");

  if (!targetGrid) {
    return;
  }

  // Giữ riêng danh sách hàng đang bán làm nguồn; mỗi lần lọc đều bắt đầu từ đây.
  let baseList = [];
  let currentCategory = "all";
  let searchKeyword = "";
  let i;

  for (i = 0; i < tatCaSanPham.length; i++) {
    if (tatCaSanPham[i].danhMuc === "vat-pham" && tatCaSanPham[i].isForSale) {
      baseList.push(tatCaSanPham[i]);
    }
  }

  window.filterByTag = function (tag, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (searchInput) {
      searchInput.value = tag.replace("#", "");
      searchKeyword = searchInput.value;
      applyFilter();
    }
  };

  function applyFilter() {
    let result = [];
    let q = searchKeyword.toLowerCase().trim();
    let category = currentCategory.toLowerCase();
    let j;

    for (i = 0; i < baseList.length; i++) {
      let item = baseList[i];
      let matchesCategory = currentCategory === "all";
      let matchesSearch = q === "";

      if (!matchesCategory) {
        if (item.loai.toLowerCase().indexOf(category) !== -1) {
          matchesCategory = true;
        }
        if (item.tags) {
          for (j = 0; j < item.tags.length; j++) {
            if (item.tags[j].indexOf(currentCategory) !== -1) {
              matchesCategory = true;
              break;
            }
          }
        }
      }

      if (!matchesSearch) {
        if (
          item.ten.toLowerCase().indexOf(q) !== -1 ||
          item.loai.toLowerCase().indexOf(q) !== -1 ||
          item.congdung.toLowerCase().indexOf(q) !== -1
        ) {
          matchesSearch = true;
        }
        if (item.tags) {
          for (j = 0; j < item.tags.length; j++) {
            if (item.tags[j].toLowerCase().indexOf(q) !== -1) {
              matchesSearch = true;
              break;
            }
          }
        }
      }

      // Chỉ hiện sản phẩm khớp cả loại đang chọn lẫn từ khóa tìm kiếm.
      if (matchesCategory && matchesSearch) {
        result.push(item);
      }
    }

    targetGrid.innerHTML = showAllsp(result);
    targetGrid.classList.toggle(
      "is-filtered",
      q !== "" || currentCategory !== "all",
    );
    if (countEl) {
      countEl.textContent = "Hiển thị " + result.length + " vật phẩm";
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      searchKeyword = e.target.value;
      applyFilter();
    });
  }

  for (i = 0; i < filterTabs.length; i++) {
    filterTabs[i].addEventListener("click", function () {
      let j;
      for (j = 0; j < filterTabs.length; j++) {
        filterTabs[j].classList.remove("active");
      }
      // this là tab vừa được bấm; lưu loại của tab đó để lọc danh sách.
      this.classList.add("active");
      currentCategory = this.dataset.category || "all";
      applyFilter();
    });
  }

  applyFilter();
}

// ===== 4. ĐỔ DỮ LIỆU CÁC LOẠI ONG (BEES.HTML) =====
function initBeesPage() {
  let beeContainer = document.querySelector("[data-bee-list]");
  if (!beeContainer) {
    return;
  }

  let beeList = [];
  let i;
  for (i = 0; i < tatCaSanPham.length; i++) {
    if (tatCaSanPham[i].danhMuc === "ong") {
      beeList.push(tatCaSanPham[i]);
    }
  }
  beeContainer.innerHTML = showAllsp(beeList);
}

// ===== 5. ĐỔ DỮ LIỆU ĐỘI HÌNH BLUE, RED, WHITE =====
function renderTeamItems(category, equipSelector, beesSelector) {
  let equipContainer = document.querySelector(equipSelector);
  let beesContainer = document.querySelector(beesSelector);
  let teamItems = [];
  let equipItems = [];
  let beeItems = [];
  let i;

  if (!equipContainer && !beesContainer) {
    return;
  }

  for (i = 0; i < tatCaSanPham.length; i++) {
    if (tatCaSanPham[i].danhMuc === category) {
      teamItems.push(tatCaSanPham[i]);
    }
  }

  // Tách dữ liệu cùng đội thành hai danh sách riêng: trang bị/bùa và ong.
  for (i = 0; i < teamItems.length; i++) {
    let item = teamItems[i];
    if (
      item.loai.indexOf("Trang Bị") !== -1 ||
      item.loai.indexOf("Bùa") !== -1
    ) {
      equipItems.push(item);
    }
    if (item.loai.indexOf("Bee") !== -1) {
      beeItems.push(item);
    }
  }

  if (equipContainer) {
    equipContainer.innerHTML = showAllsp(equipItems);
  }
  if (beesContainer) {
    beesContainer.innerHTML = showAllsp(beeItems);
  }
}

function initTeamPage() {
  renderTeamItems("blue", "[data-blue-equip]", "[data-blue-bees]");
  renderTeamItems("red", "[data-red-equip]", "[data-red-bees]");
  renderTeamItems("white", "[data-white-equip]", "[data-white-bees]");
}

// ===== 6. TRANG CHI TIẾT (ITEM-DETAIL.HTML) =====
function getProductIdFromUrl() {
  // Đọc id từ địa chỉ dạng item-detail.html?id=honey mà không dùng thư viện.
  let query = window.location.search.substring(1);
  let params = query.split("&");
  let i;

  for (i = 0; i < params.length; i++) {
    let pair = params[i].split("=");
    if (decodeURIComponent(pair[0]) === "id") {
      if (pair.length > 1) {
        return decodeURIComponent(pair[1]);
      }
      return "";
    }
  }

  return "";
}

function showCT() {
  let ma = getProductIdFromUrl();
  let sp = null;
  let nd = ``;
  let i;

  // Dùng id trên URL để tìm đúng sản phẩm cần hiển thị.
  for (i = 0; i < tatCaSanPham.length; i++) {
    if (tatCaSanPham[i].id === ma) {
      sp = tatCaSanPham[i];
      break;
    }
  }

  if (!sp) {
    nd = `
      <div class="item-not-found">
        <p>Không tìm thấy vật phẩm hoặc ong này. Vui lòng quay lại danh sách để chọn.</p>
        <a href="items.html" class="primary-btn">← Quay lại cửa hàng</a>
      </div>`;
    return nd;
  }

  document.title = `${sp.ten} - Bee Swarm Simulator Wiki`;

  let tags = sp.tags || [];
  let tagsHtml = "";
  let actionBoxHtml = "";

  for (i = 0; i < tags.length; i++) {
    tagsHtml += `<span class="detail-tag-pill">${tags[i]}</span>`;
    if (i < tags.length - 1) {
      tagsHtml += " ";
    }
  }

  if (sp.isForSale) {
    actionBoxHtml = `
      <div class="detail-robux-badge">
        <span class="label">Giá Robux:</span>
        <span class="robux-symbol">R$</span>
        <strong class="price-number">${sp.giaRobux}</strong>
        <span class="robux-note">Robux (Chuẩn Bee Swarm Simulator)</span>
      </div>

      <div class="detail-order-box">
        <div class="detail-qty-row">
          <label for="detail-qty-input">Số lượng:</label>
          <div class="qty-control-box">
            <button type="button" onclick="adjustQty(-1)">-</button>
            <input type="number" id="detail-qty-input" value="1" min="1" max="99">
            <button type="button" onclick="adjustQty(1)">+</button>
          </div>
        </div>

        <div class="detail-actions-row">
          <button type="button" class="btn-detail-add" onclick="addFromDetailPage('${sp.id}', this)">
            🛒 Thêm Vào Giỏ Hàng
          </button>
          <button type="button" class="btn-detail-checkout" onclick="buyNowFromDetailPage('${sp.id}')">
            ⚡ Mua Ngay & Thanh Toán
          </button>
        </div>
      </div>
    `;
  } else {
    let backUrl = "bees.html";
    let backLabel = "Quay lại danh sách Ong";
    if (sp.danhMuc === "blue") {
      backUrl = "blue.html";
      backLabel = "Quay lại Team Blue";
    } else if (sp.danhMuc === "red") {
      backUrl = "red.html";
      backLabel = "Quay lại Team Red";
    } else if (sp.danhMuc === "white") {
      backUrl = "white.html";
      backLabel = "Quay lại Team White";
    }

    let topBack = document.getElementById("detail-top-back-link");
    if (topBack) {
      topBack.innerHTML = `<a class="items-more-link" href="${backUrl}">← ${backLabel}</a>`;
    }

    actionBoxHtml = `
      <div class="wiki-info-badge">
        <span>📖 Mục thông tin tra cứu Wiki • Không mở bán trong shop</span>
      </div>

      <div class="detail-actions-row" style="margin-top: 1.5rem;">
        <a href="${backUrl}" class="btn-wiki-back">
          ← ${backLabel}
        </a>
        <a href="items.html" class="btn-wiki-store">
          🛒 Xem Cửa Hàng Vật Phẩm
        </a>
      </div>
    `;
  }

  nd = `
    <img class="item-detail-image" src="${sp.hinh}" alt="${sp.ten}">
    <div class="item-detail-content">
      <h2>${sp.ten}</h2>
      <p class="item-detail-type">Loại / Độ hiếm: <strong>${sp.loai}</strong></p>

      <div class="detail-tags-wrap">
        ${tagsHtml}
      </div>

      <h3>Công dụng & Kỹ năng nổi bật</h3>
      <p>${sp.congdung}</p>

      <h3>Mô tả chi tiết & Chiến lược</h3>
      <p>${sp.moTaChiTiet || sp.congdung}</p>

      ${actionBoxHtml}
    </div>`;

  return nd;
}


// - delta: +1 (khi bấm +) hoặc -1 (khi bấm -)
// - Dùng Math.max(1, Math.min(99, ...)) để giới hạn số lượng trong khoảng an toàn từ 1 đến 99
function adjustQty(delta) {
  let input = document.getElementById("detail-qty-input");
  if (!input) {
    return;
  }
  let val = parseInt(input.value) || 1;
  // Giới hạn số lượng trong khoảng 1–99 để không nhập số âm hoặc quá lớn
  val = Math.max(1, Math.min(99, val + delta));
  input.value = val;
}


// - Đọc số lượng khách đã chọn trong ô input rồi gọi hàm addToCart()
function addFromDetailPage(id, button) {
  let input = document.getElementById("detail-qty-input");
  let qty = input ? parseInt(input.value) || 1 : 1;
  addToCart(id, null, qty, button);
}


// - Thêm sản phẩm vào giỏ trước, sau đó lập tức chuyển hướng sang cart.html
function buyNowFromDetailPage(id) {
  let input = document.getElementById("detail-qty-input");
  let qty = input ? parseInt(input.value) || 1 : 1;
  addToCart(id, null, qty);
  // Chuyển hướng người dùng sang trang giỏ hàng để tiến hành thanh toán
  window.location.href = "cart.html";
}

// ===== 7. ĐẢM BẢO LINK GIỎ HÀNG TRÊN HEADER =====
function ensureNavCartLink() {
  let nav = document.querySelector(".nav");
  if (nav && !document.querySelector(".nav a[href='cart.html']")) {
    let link = document.createElement("a");
    link.href = "cart.html";
    link.className = "header-cart-link";
    link.innerHTML = `🛒 Giỏ Hàng <span class="cart-count-badge" id="cart-badge">0</span>`;
    nav.appendChild(link);
  }
}

// ===== 8. KHỞI CHẠY TỔNG HỢP =====
document.addEventListener("DOMContentLoaded", function () {
  // Chờ HTML tải xong rồi mới tìm phần tử và đổ dữ liệu vào trang.
  ensureNavCartLink();
  updateCartBadge();

  setupItemsFilter();
  initBeesPage();
  initTeamPage();

  let chiTiet = document.querySelector("[data-item-detail]");
  if (chiTiet) {
    chiTiet.innerHTML = showCT();
  }

  let homeGrid = document.querySelector(".home-items [data-item-list]");
  if (homeGrid) {
    let list = [];
    let i;
    for (i = 0; i < tatCaSanPham.length; i++) {
      if (tatCaSanPham[i].danhMuc === "vat-pham" && tatCaSanPham[i].isForSale) {
        list.push(tatCaSanPham[i]);
      }
    }
    homeGrid.innerHTML = showAllsp(list);
  }
});
