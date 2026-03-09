import "../../../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* CỘT 1 */}
        <div className="footer-col">
          <h3>TMAI Sài Gòn</h3>
          <p>Công ty TNHH TMAI Sài Gòn</p>
          <p>Website: tmaisaigon.vn</p>
          <p>©2016 Bản quyền thuộc về TMAI Sài Gòn</p>
        </div>

        {/* CỘT 2 */}
        <div className="footer-col">
          <h3>Liên Hệ</h3>
          <p>Văn phòng: HM Town</p>
          <p>Địa chỉ: 412 Nguyễn Thị Minh Khai, P. Bàn Cờ, TPHCM</p>
          <p>Điện thoại: 086.532.7003 - 0901.809.010</p>
          <p>Email: ngaymoisaigon@gmail.com</p>
          <p>Website: ngaymoisaigon.vn</p>
        </div>

        {/* CỘT 3 */}
        <div className="footer-col2 footer-logos">
          <h3>Kết Nối Cùng Chúng Tôi</h3>

          <img
            src="https://res.cloudinary.com/dcpftn9cy/image/upload/v1764684112/logo_tmaisaigon_yi3gaq.ico"
            alt="TMAI"
          />

          <img
            src="https://res.cloudinary.com/dcpftn9cy/image/upload/v1764684257/logotmai_X_56_karl6r.png"
            alt="Ngay Moi Sai Gon"
          />

          <img
            src="https://res.cloudinary.com/dcpftn9cy/image/upload/v1764684257/lonicerasaigon_ugvpfo.png"
            alt="Zonicera"
          />
        </div>

      </div>

      {/* Dòng cuối */}
      <div className="footer-bottom">
        © 2016 TMAI Sài Gòn — Tự hào kết nối doanh nghiệp Việt với quốc tế.
      </div>
    </footer>
  );
}