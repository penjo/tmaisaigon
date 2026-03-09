import "../../../styles/WEBSITE/Website.css"
export default function Website() {
  const websites = [
    {
      title: "TMAI Saigon",
      desc: "Trang chính thức của công ty TMAI Sài Gòn – nơi kết nối, truyền thông và phát triển các giải pháp hiện đại.",
      img: "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764589478/tmaisaigon_l0ynwy.png",
      link: "https://tmaisaigon.vn"
    },
    {
      title: "Ngày Mới Sài Gòn",
      desc: "Trang thông tin tổng hợp, kết nối và chia sẻ các giá trị sống và kinh doanh.",
      img: "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764589478/ngaymoisaigon_x6tcyj.png",
      link: "https://ngaymoisaigon.com"
    },
    {
      title: "Lonicera Saigon",
      desc: "Trang dịch vụ cung cấp những sản phẩm về lifestyle và chăm sóc sức khỏe.",
      img: "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764589477/lonicerasaigon_p25zoe.jpg",
      link: "https://lonicerasaigon.com/"
    }
  ];
    return (
      <section className="website-container">

      <div className="website-header">
        <h2 className="website-title">WEBSITE</h2>
      </div>
      
      <div className="web-grid">
        {websites.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noreferrer" className="web-card">
            <div className="web-card-img">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="web-card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
    );
  }
  