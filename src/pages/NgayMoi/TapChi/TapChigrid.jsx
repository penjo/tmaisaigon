import { TapChi_DATA } from "./TapChidata";

export default function TapChiGrid() {
  return (
    <div className="magazine-grid">
      {TapChi_DATA.map((item) => (
        <div key={item.id} className="magazine-item">
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
  );
}