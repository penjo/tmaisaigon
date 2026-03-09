import { Link } from "react-router-dom";
import { useState } from "react";
import NavDropdown from "./NavDropdown";
import * as Pages from "../../../pages"

// 1. Định nghĩa dữ liệu Menu ở ngoài Component (để không bị khai báo lại mỗi lần render)
export const MENU_DATA = [
  
  {
    title: "NGÀY MỚI SÀI GÒN",
    items: [
      { label: "Tạp Chí", path: "/tap-chi", component: Pages.TapChi },
      { label: "Giới Thiệu", path: "/gioi-thieu", component: Pages.GioiThieu },
      { label: "Phát Hành", path: "/phat-hanh", component: Pages.PhatHanh },
      { label: "Website", path: "/website",component:Pages.Website },
      { label: "Kết Nối Kinh Doanh", path: "/ket-noi",component:Pages.KNKinhDoanh },
    ]
  },
  {
    title: "TỔ CHỨC SỰ KIỆN",
    items: [
      { label: "Hội Thảo", path: "/hoi-thao",component:Pages.HoiThao },
      { label: "Khai Trương", path: "/khai-truong", component:Pages.KhaiTruong },
    ]
  },
  {
    title: "HOẠT ĐỘNG",
    items: [
      { label: "Trong Nước", path: "/trong-nuoc",component:Pages.TrongNuoc },
      { label: "Quốc Tế", path: "/quoc-te",component:Pages.QuocTe },
    ]
  },
  {
    title: "HỢP TÁC",
    items: [
      { label: "Thương Hiệu", path: "/thuong-hieu",component:Pages.ThuongHieu },
      { label: "Dự Án Hợp Tác", path: "/du-an-hop-tac",component:Pages.DuAn },
      { label: "Đối Tác", path: "/doi-tac",component:Pages.DoiTac },
    ]
  }
];
  // openMenu sẽ lưu title của menu đang mở (ví dụ: "HOẠT ĐỘNG"). Mặc định là null (đóng hết).
export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleToggle = (title) => {
    // Nếu bấm vào cái đang mở thì đóng nó (set null), ngược lại thì mở cái mới
    setOpenMenu(openMenu === title ? null : title);
  };
  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <img 
          src="https://res.cloudinary.com/dcpftn9cy/image/upload/v1764684112/logo_tmaisaigon_yi3gaq.ico" 
          alt="Logo" 
          className="logo" 
        />
      </Link>

      <nav className="navbar-menu">
        <Link to="/" className="nav-link" onClick={() => setOpenMenu(null)}>TRANG CHỦ</Link>

        {MENU_DATA.map((menu, index) => (
          <NavDropdown 
            key={index} 
            title={menu.title} 
            items={menu.items}
            // Truyền trạng thái: Chỉ mở nếu title khớp với menu đang được chọn
            isOpen={openMenu === menu.title} 
            // Truyền hàm điều khiển lên cho Cha
            toggleMenu={() => handleToggle(menu.title)}
            // Khi rời chuột ra khỏi vùng menu thì đóng hết (nếu bạn muốn)
            closeMenu={() => setOpenMenu(null)}
          />
        ))}
      </nav>

      <div className="navbar-actions">
        <button className="theme-toggle">☀️</button>
        <div className="lang-switcher">
          <span className="lang-vi active">VI</span>
          <span className="lang-en">EN</span>
        </div>
      </div>
    </header>
  );
}