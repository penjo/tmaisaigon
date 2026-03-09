import { TapChi_DATA } from "./TapChidata";

export default function TapChiSlider() {

  const infiniteData = [...TapChi_DATA, ...TapChi_DATA];

  return (
    <div className="magazine-slider">
      <div className="magazine-track">
        {infiniteData.map((item, index) => (
          <div key={index} className="magazine-item">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.img}
                alt={item.title}
                className="magazine-img"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}