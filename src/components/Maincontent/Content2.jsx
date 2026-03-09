import "../../styles/Content/Content2.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const LINK_TAPCHI = "/tap-chi";
const LINK_WEBSITE = "/website";
const magazines = [
    { img: "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764331372/magazine-6_umbejw.jpg", path: LINK_TAPCHI },
    { img: "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764331412/magazine-8_xrop7k.jpg", path: LINK_TAPCHI },
    { img: "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764331425/magazine-14_mlhyu9.jpg", path: LINK_TAPCHI },
    { img: "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764331427/magazine-15_dxdg0w.jpg", path: LINK_TAPCHI },
    { img: "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764331442/magazine-1_jppuds.jpg", path: LINK_TAPCHI },
    { img: "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764331417/magazine-11_pxdbhc.jpg", path: LINK_TAPCHI },
    { img: "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764331416/magazine-10_vhkuav.jpg", path: LINK_TAPCHI }
];

const websiteData = [
    { img: "https://tmaisaigon.vn/websites/ngaymoisaigon.png", path: LINK_WEBSITE },
    { img: "https://tmaisaigon.vn/websites/lonicerasaigon.jpg", path: LINK_WEBSITE },
    { img: "https://tmaisaigon.vn/websites/tmaisaigon.png", path: LINK_WEBSITE },
];
export default function Content2() {
    const [activeTab, setActiveTab] = useState("magazine"); // 'magazine' hoặc 'website'
    const [current, setCurrent] = useState(0);

    const data = activeTab === "magazine" ? magazines : websiteData;

    const next = () => setCurrent((prev) => (prev + 1) % data.length);
    const prev = () => setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));

    return (
        <section className={`magazine ${activeTab}`}>
            <h2 className="mag-title">NGÀY MỚI SÀI GÒN<span></span></h2>

            <div className="tab-buttons">
                <button className={activeTab === "magazine" ? "active" : ""}
                    onClick={() => { setActiveTab("magazine"); setCurrent(0) }}>TẠP CHÍ</button>
                <button className={activeTab === "website" ? "active" : ""}
                    onClick={() => { setActiveTab("website"); setCurrent(0) }}>WEBSITE</button>
            </div>

            <div className="mag-slider">
                <button className="mag-nav left" onClick={prev}>❮</button>

                <div className="mag-track">
                    {data.map((item, index) => {
                        let diff = index - current;
                        if (diff > data.length / 2) diff -= data.length;
                        if (diff < -data.length / 2) diff += data.length;

                        // Thay vì return null, ta xác định xem ảnh có nằm trong vùng hiển thị (độ lệch <= 2) không
                        const isVisible = Math.abs(diff) <= 2;
                        const isInternal = item.path.startsWith("/");
                        const isActive = diff === 0;
                        return (
                            <div key={`${activeTab}-${index}`} className={`mag-card pos-${diff} ${isVisible ? "" : "hidden"}`}>
                                {isActive ? (
                                    isInternal ? (
                                        <Link to={item.path}>
                                            <img src={item.img} alt="" />
                                        </Link>
                                    ) : (
                                        <a href={item.path} target="_blank" rel="noreferrer">
                                            <img src={item.img} alt="" />
                                        </a>
                                    )
                                ) : (
                                    /* 2. Nếu không phải ảnh active, chỉ hiện thẻ img, không có link */
                                    <img src={item.img} alt="" style={{ cursor: "default" }} />
                                )}
                            </div>

                        );
                    })}
                </div>

                <button className="mag-nav right" onClick={next}>❯</button>
            </div>
        </section>
    );
}