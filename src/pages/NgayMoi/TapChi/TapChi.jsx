import { TapChi_DATA } from "./TapChidata";
import "../../../styles/NGAYMOI/TapChi.css"
import TapChiGrid from "./TapChigrid";
import TapChiSlider from "./TapChiSlider";
export default function TapChi() {

  const infiniteData = [...TapChi_DATA, ...TapChi_DATA];

  return (
    <section className="magazine-container">

      <div className="magazine-header">
        <h2 className="magazine-title">TẠP CHÍ</h2>
      </div>

      <TapChiSlider/>

      <TapChiGrid/>

    </section>
  );
}