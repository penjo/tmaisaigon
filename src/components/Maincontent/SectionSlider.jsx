import { useState } from "react";
import "../../styles/Content/SectionSlider.css";

export default function SectionSlider({ title, tabs, data, captions }) {
  const [activeTab, setActiveTab] = useState(0); // Vị trí tab đang chọn
  const [current, setCurrent] = useState(0);

  // Lấy dữ liệu ảnh dựa trên Tab đang active
  const currentImages = data[activeTab] || [];
  const currentCaptions = captions?.[activeTab] || [];

  const next = () => {
    if (currentImages.length <= 1) return;
    setCurrent((prev) => (prev + 1) % currentImages.length);
  };

  const prev = () => {
    if (currentImages.length <= 1) return;
    setCurrent((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="custom-section">
      <h2 className="section-title">{title}<span></span></h2>

      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={activeTab === index ? "active" : ""}
            onClick={() => { setActiveTab(index); setCurrent(0); }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="section-slider">
        <button className="nav-btn left" onClick={prev}>❮</button>

        <div className="image-container">
          <img
            src={currentImages[current] || ""}
            alt="slider-content"
            className="fade-in"
            key={current}
          />
          {captions && captions[activeTab] && (
            <div className="img-caption">
              {captions[activeTab][current]}
            </div>
          )}
        </div>

        <button className="nav-btn right" onClick={next}>❯</button>
      </div>
    </section>
  );
}