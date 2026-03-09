import "../../../styles/GIOITHIEU/GioiThieu.css"

export default function GioiThieu() {
  return (
    <section className="gioithieu-section">
      <div className="gioithieu-container">

        {/* Header */}
        <div className="gioithieu-header">
          <h2>GIỚI THIỆU</h2>
          <span className="title-line1"></span>
        </div>

        {/* Banner */}
        <div className="gioithieu-card">
          <h3>NGÀY MỚI SAIGON</h3>
          <p>
            Giới thiệu những con người và doanh nghiệp thành công, lan tỏa
            những giá trị sống tích cực, văn hóa đặc sắc và tinh thần
            cống hiến cho cộng đồng.
          </p>
        </div>

        {/* GRID 2 CỘT */}
        <div className="gioithieu-grid">

          {/* SÁNG LẬP */}
          <div className="gioithieu-subcard founder-card">

            <div className="card-icon">👥</div>
            <h2 className="card-title">SÁNG LẬP</h2>

            <div className="founder-info">
              <div className="image-wrapper">
                <img src="https://res.cloudinary.com/dcpftn9cy/image/upload/v1764547171/mai_ex0sjo.jpg" />
              </div>

              <p className="description">
                <strong>Nhà sáng lập:</strong> Nhà báo Hồ Trúc Mai – Nguyên
                Phóng viên Báo Đối ngoại Vietnam Economic News – Bộ Thương Mại.
              </p>
            </div>

            <div className="founder-date">
              Ngày sáng lập: Tháng 11/2014
            </div>

            <div className="first-issue">
              <div className="issue-img-wrapper">
                <img src="https://res.cloudinary.com/dcpftn9cy/image/upload/v1764547169/mag1_mydppo.jpg" />
              </div>

              <p className="description">
                <strong>Bìa số đầu tiên:</strong><br />
                Ông Lý Ngọc Minh - Chủ tịch Công ty Gốm sứ Minh Long I.
              </p>
            </div>

          </div>

          {/* KẾT NỐI */}
          <div className="gioithieu-subcard connect-card">

            <div className="card-icon">🌐</div>
            <h2 className="card-title">KẾT NỐI DOANH NGHIỆP</h2>

            <p className="gioithieu-text">
              Kết nối những giá trị văn hóa, du lịch và kinh doanh giữa các doanh nghiệp trong và ngoài nước. Tạo nên nền tảng hợp tác vững chắc, hướng đến một cộng đồng doanh nghiệp hiện đại, nhân văn và phát triển bền vững.
            </p>

            <div className="connection-flow">

              <div className="connection-item">
                <div className="connection-icon">🏢</div>
                <div className="connection-text">Doanh nghiệp</div>
              </div>

              <div className="connection-arrow">⟷</div>

              <div className="connection-item">
                <div className="connection-icon">✈️</div>
                <div className="connection-text">Du lịch</div>
              </div>

              <div className="connection-arrow">⟷</div>

              <div className="connection-item">
                <div className="connection-icon">🎭</div>
                <div className="connection-text">Văn hóa</div>
              </div>

            </div>

            <div className="feature-list">

              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <div>
                  <h4>Hợp tác Đa phương</h4>
                  <p>Kết nối doanh nghiệp trong & ngoài nước</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🌏</div>
                <div>
                  <h4>Mở rộng Thị trường</h4>
                  <p>Tiếp cận các tổ chức quốc tế</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">💡</div>
                <div>
                  <h4>Phát triển Bền vững</h4>
                  <p>Xây dựng cộng đồng doanh nghiệp hiện đại</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ===== PHẦN THÊM ===== */}
        <div className="gioithieu-purpose-grid">

          {/* NỘI DUNG */}
          <div className="gioithieu-purpose-card">

            <div className="purpose-icon">📝</div>

            <h3 className="purpose-title">
              NỘI DUNG
            </h3>

            <p className="purpose-text">
              Giới thiệu thông tin và tầm nhìn của doanh nghiệp. Đề cao
              những giá trị sống, văn hóa và những đóng góp cho cộng đồng.
            </p>

            <div className="purpose-list blue">

              <div className="purpose-item">
                🎯 Tầm nhìn doanh nghiệp
              </div>

              <div className="purpose-item">
                ✨ Giá trị sống
              </div>

              <div className="purpose-item">
                🤝 Đóng góp cộng đồng
              </div>

            </div>

          </div>


          {/* KHƠI GỢI TIỀM NĂNG */}
          <div className="gioithieu-purpose-card">

            <div className="purpose-icon">💼</div>

            <h3 className="purpose-title">
              KHƠI GỢI TIỀM NĂNG
            </h3>

            <p className="purpose-text">
              Truyền cảm hứng phát triển và chia sẻ giá trị giữa doanh nhân,
              giới tri thức và bạn đọc, khuyến khích sự sáng tạo và kết nối.
            </p>

            <div className="purpose-list gold">

              <div className="purpose-item">
                💡 Truyền cảm hứng
              </div>

              <div className="purpose-item">
                🤝 Kết nối cộng đồng
              </div>

              <div className="purpose-item">
                🚀 Sáng tạo & Phát triển
              </div>

            </div>

          </div>

        </div>
        <div className="gioithieu-magazine-grid">

          {/* ĐỐI TƯỢNG */}
          <div className="gioithieu-mag-card">

            <h3 className="gioithieu-mag-title">
              ĐỐI TƯỢNG ĐỘC GIẢ
            </h3>

            <p className="gioithieu-mag-text">
              Nhà đầu tư, doanh nhân trong và ngoài nước,
              Việt kiều, du khách và giới trẻ.
            </p>

            <div className="gioithieu-tag-list">
              <span className="gioithieu-tag">💼 Doanh nhân</span>
              <span className="gioithieu-tag">💰 Nhà đầu tư</span>
              <span className="gioithieu-tag">🌏 Việt kiều</span>
              <span className="gioithieu-tag">✈️ Du khách</span>
              <span className="gioithieu-tag">🧑‍🎓 Giới trẻ</span>
            </div>

          </div>

          {/* ĐẶC ĐIỂM */}
          <div className="gioithieu-mag-card">

            <h3 className="gioithieu-mag-title">
              ĐẶC ĐIỂM TẠP CHÍ
            </h3>

            <p className="gioithieu-mag-text">
              Tôn vinh những nhân vật thành công,
              lan tỏa giá trị nhân văn.
            </p>

            <div className="gioithieu-highlight-box">
              📖 Song ngữ Anh - Việt
            </div>

            <div className="gioithieu-highlight-box">
              💰 Giá: 56.700đ/cuốn
            </div>

          </div>

          {/* PHÁT HÀNH */}
          <div className="gioithieu-mag-card">

            <h3 className="gioithieu-mag-title">
              PHẠM VI PHÁT HÀNH
            </h3>

            <p className="gioithieu-mag-text">
              Quy mô: <strong>15.000 bản/kỳ</strong>
            </p>

            <p className="gioithieu-mag-text">
              Miền Nam 80% | Miền Bắc 20%
            </p>

            <p className="gioithieu-mag-text">
              Phát hành tại lãnh sự quán, hiệp hội doanh nghiệp,
              khách sạn, sân bay...
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}