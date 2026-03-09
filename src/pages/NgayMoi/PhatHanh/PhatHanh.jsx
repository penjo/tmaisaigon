import SanBay from "./SanBay";
import HoiThaoQT from "./HoiThaoQT";
import HoiThaoTN from "./HoiThaoTN";
import "../../../styles/PHATHANH/PhatHanh.css"

export default function PhatHanh() {
  return (
    <section className="phathanh-section">

      <div className="phathanh-container">

        {/* Header */}
        <div className="phathanh-header">
          <h2>PHÁT HÀNH</h2>
          <span className="title-line1"></span>
        </div>

        {/* Banner */}
        <div className="phathanh-card">
          <h3>MẠNG LƯỚI PHÁT HÀNH TOÀN DIỆN</h3>
          <p>
            TMAI Sài Gòn không ngừng mở rộng hệ thống phát hành tạp chí, hiện diện tại các sân bay lớn và hội thảo trong - ngoài nước, nhằm lan tỏa giá trị thương hiệu và kết nối cộng đồng doanh nhân Việt Nam với quốc tế.
          </p>
        </div>
      </div>
      <SanBay/>
      <HoiThaoQT/>
      <HoiThaoTN/>

    </section>
  );
}

