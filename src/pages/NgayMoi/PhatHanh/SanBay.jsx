import "../../../styles/PHATHANH/SanBay.css"
import { useState } from "react";
export default function SanBay() {
    const [activeTab, setActiveTab] = useState('noi-bai');

    const sanbay = [
        { id: 'noi-bai', label: 'NỘI BÀI' },
        { id: 'tan-son-nhat', label: 'TÂN SƠN NHẤT' }
    ];

    // Dữ liệu mẫu (Thay link ảnh của bạn vào đây)
    const galleryData = {
        'noi-bai': [
            'https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335366/release1_vt7sfh.png',
            'https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335369/release2_um9lmd.png',
            'https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335374/release3_cnbnbq.png',
            'https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335377/release4_qfln7n.png',
            'https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335381/release5_fx2su3.png',
            'https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335382/release6_rbz522.png'
        ],
        'tan-son-nhat': [
            'https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335377/release4_qfln7n.png',
            'https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335381/release5_fx2su3.png',
        ]
    };
    return (
        <div className="sanbay-gallery-wrapper">
            <div className="sanbay-gallery-container">

                {/* Header */}
                <div className="sanbay-header-section">
                    <div className="sanbay-title-row">
                        <span className="sanbay-airplane-icon">✈️</span>
                        <h2 className="sanbay-main-title">TẠI CÁC SÂN BAY</h2>
                    </div>

                    <div className="sanbay-yellow-divider"></div>
                </div>

                <hr className="sanbay-light-hr" />

                {/* Tabs */}
                <div className="sanbay-tab-group">
                    {sanbay.map((item) => (
                        <button
                            key={item.id}
                            className={`sanbay-tab-btn ${activeTab === item.id ? "active" : ""
                                }`}
                            onClick={() => setActiveTab(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Grid ảnh */}
                <div className="sanbay-image-grid">
                    {galleryData[activeTab]?.map((src, index) => (
                        <div key={index} className="sanbay-image-card">
                            <div className="sanbay-image-inner">
                                <img src={src} alt={`Sân bay ${index}`} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}