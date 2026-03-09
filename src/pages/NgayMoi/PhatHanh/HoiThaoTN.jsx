import "../../../styles/PHATHANH/HoiThaoTN.css"
export default function HoiThaoTN() {
    // Mảng chứa link ảnh thực tế của bạn
    const anhTrongNuoc = [
        "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335440/release19_pyazxq.png",
        "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335446/release20_gcvcra.png",
        "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335448/release21_rjdix1.png",
        "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335255/release22_epgvo8.png",
        "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335257/release23_tr1yyn.png",
        "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335259/release24_gokqh4.png",
        "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335263/release25_okhtr1.png",
        "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335265/release26_mnffxd.png",
        "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335355/release27_vkpcov.png",
        "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335356/release28_qhz1kn.png",
        "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335360/release29_tdq1uq.png",
        "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764335363/release30_dq2n3q.png"
    ];

    return (
        <div className="trongnuoc-gallery-wrapper">
            <div className="trongnuoc-gallery-container">

                {/* Header với Icon Cờ Việt Nam */}
                <div className="trongnuoc-header-section">
                    <div className="trongnuoc-title-row">
                        <img alt="Cờ Việt Nam" class="trongnuoc-flag-icon" src="https://tmaisaigon.vn/icon/vietnam-flag.png"></img>
                        <h2 className="trongnuoc-main-title">TẠI CÁC HỘI THẢO TRONG NƯỚC, KHÁCH SẠN, NHÀ SÁCH,...</h2>
                    </div>
                    <div className="trongnuoc-yellow-divider"></div>
                </div>

                <hr className="trongnuoc-light-hr" />

                {/* Grid ảnh 3 cột */}
                <div className="trongnuoc-image-grid">
                    {anhTrongNuoc.map((src, index) => (
                        <div key={index} className="trongnuoc-image-card">
                            <div className="trongnuoc-image-inner">
                                <img src={src} alt={`Trong nuoc ${index}`} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}