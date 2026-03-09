import "../styles/Home.css";
import HeroSlider from "../components/HeroSlider";
import Content1 from "../components/Maincontent/Content1";
import Content2 from "../components/Maincontent/Content2";
import Content3 from "../components/Maincontent/Content3";
import Content4 from "../components/Maincontent/Content4";
import Content5 from "../components/Maincontent/Content5";
import Content6 from "../components/Maincontent/Content6";
export default function Home() {
  return (
    <div className="partner-section" >
      <HeroSlider/>
    <div className="main-content">
      <Content1/>
      <Content2/>
      <Content3/>
      <Content4/>
      <Content5/>
      <Content6/>
      </div>

    </div>
  );
}
