import "../../../styles/PHATHANH/HoiThaoQT.css"
export default function HoiThaoQT() {
  const dsHoiThao = [
    "HỘI NGHỊ THƯỢNG ĐỈNH PHỤ NỮ TOÀN CẦU Ở BA LAN, TÂY BAN NHA, ĐỨC,...",
    "INVEST ASEAN 2015, ĐẦU TƯ VIETNAM - JAPAN, DU LỊCH MALAYSIA.",
    "CICON ASEAN 5+ 2025, KẾT NỐI CÔNG NGHỆ CHÂU ÂU.",
    "CÁC DOANH NGHIỆP Ở ANH QUỐC..."
  ];

  const anhHoiThao = [
    'https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335387/release7_hse73q.png',
    'https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335390/release8_idgtwg.png',
    'https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335394/release9_rdc5kx.png',
    'https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335397/release10_fl1rln.png',
    'https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335400/release11_yhcdy8.png',
    'https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335404/release12_sfc8ta.png',
    'https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335409/release13_ch1psk.png',
    'https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335409/release14_paija2.png',
    'https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335417/release15_yuqta7.png',
    'https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335417/release16_oy07hd.png',
    'https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335425/release17_hihnx9.png',
    'https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335440/release18_j9mfb1.png'
  ];

  return (
    <div className="hoithao-gallery-wrapper">
      <div className="hoithao-gallery-container">

        {/* Header */}
        <div className="hoithao-header-section">
          <div className="hoithao-title-row">
            <span className="hoithao-globe-icon">🌎</span>
            <h2 className="hoithao-main-title">TẠI CÁC HỘI THẢO QUỐC TẾ</h2>
          </div>
          <div className="hoithao-yellow-divider"></div>
        </div>

        <hr className="hoithao-light-hr" />

        {/* Khối danh sách chữ (Màu xanh nhạt) */}
        <div className="hoithao-info-box">
          <ul className="hoithao-list">
            {dsHoiThao.map((text, index) => (
              <li key={index}>- {text}</li>
            ))}
          </ul>
        </div>

        {/* Grid ảnh */}
        <div className="hoithao-image-grid">
          {anhHoiThao.map((src, index) => (
            <div key={index} className="hoithao-image-card">
              <div className="hoithao-image-inner">
                <img src={src} alt={`Hoi thao ${index}`} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}