import "../../styles/Content/Content1.css";
import { Link } from "react-router-dom";
export default function Content1() {
    return (
      <section className="about">
        <h2 className="about-title">
          GIỚI THIỆU
          <span className="title-line"></span>
        </h2>
  
        <div className="about-grid">
  
        <Link to="/gioi-thieu" className="card-link">
      <div className="about-card highlight">
        <div className="card-header">NGÀY THÀNH LẬP</div>
        <div className="date-box">25/02/2014</div>
      </div>
    </Link>

    {/* CARD 2 */}
    <Link to="/gioi-thieu" className="card-link">
      <div className="about-card">
        <div className="card-header">LĨNH VỰC HOẠT ĐỘNG</div>
        <p>
          Truyền Thông, Quảng Cáo, Software, Xúc Tiến Thương Mại,
          Tổ Chức Sự Kiện, Sản Xuất Chương Trình Truyền Hình,
          Ẩm Thực, Sản Xuất Quà Tặng,...
        </p>
      </div>
    </Link>

    {/* CARD 3 */}
    <Link to="/gioi-thieu" className="card-link">
      <div className="about-card">
        <div className="card-header">SỨ MỆNH</div>
        <p>
          Kết nối những giá trị văn hóa, du lịch, kinh doanh giữa
          các doanh nghiệp trong và ngoài nước; đề cao những
          giá trị sống và đóng góp cho cộng đồng.
        </p>
      </div>
    </Link>
  
        </div>
      </section>
    );
  }