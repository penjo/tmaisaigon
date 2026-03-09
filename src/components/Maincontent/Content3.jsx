import "../../styles/Content/Content3.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const LINK_BRAND = "/thuong-hieu"
const partnerLogos = [
    { img: "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764324841/bigbowl_vyccih.png", path: LINK_BRAND },
    { img: "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764324841/welead_sfsrgl.png", path: LINK_BRAND },
    { img: "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764324827/cuong_phat_umjjyv.png", path: LINK_BRAND },
    { img: "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764324827/eurohome_om9d0e.png", path: LINK_BRAND },
    { img: "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764324829/ford_uicju1.png", path: LINK_BRAND },
    { img: "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764324828/ic-ambassador_oo97ha.png", path: LINK_BRAND },
    { img: "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764324829/JWMARRIOTT_qirfcs.png", path: LINK_BRAND }
];

export default function Partners() {
    // Nhân đôi mảng để tạo hiệu ứng vô tận
    const infiniteLogos = [...partnerLogos, ...partnerLogos];

    return (
        <section className="partners-section">
            <h2 className="partners-title">THƯƠNG HIỆU HỢP TÁC<span></span></h2>

            <div className="partners-container">
                <div className="partners-track">
                    {infiniteLogos.map((item, index) => (
                        <div key={index} className="partner-card">
                            <Link to={item.path}>
                                <img src={item.img} alt="brand-logo" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}