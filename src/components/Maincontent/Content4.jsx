import "../../styles/Content/Content4.css";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const LINK_DUAN = "/du-an"
const projectData = [
    { img: "https://tmaisaigon.vn/collab_book/KyYeu.png", path: LINK_DUAN },
    { img: "https://tmaisaigon.vn/collab_book/Masterspice.png", path: LINK_DUAN },
    { img: "https://tmaisaigon.vn/collab_book/nhip_song.png", path: LINK_DUAN },
    { img: "https://tmaisaigon.vn/collab_book/vietnhat.png", path: LINK_DUAN },
];

export default function Content4() {
    const [current, setCurrent] = useState(0);
  
    // Tự động chạy sau mỗi 3 giây
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % projectData.length);
      }, 3000); 
  
      return () => clearInterval(timer); // Xóa bộ đếm khi component unmount
    }, []);
  
   

    return (
        <section className="project-section">
            <div className="project-frame">
                <h2 className="project-title">DỰ ÁN HỢP TÁC</h2>

                <div className="project-slider">

                    <div className="project-track">
                        {projectData.map((item, index) => {
                            let diff = index - current;
                            const len = projectData.length;

                            // Logic tính diff cho vòng lặp 4 phần tử
                            if (diff > len / 2) diff -= len;
                            if (diff <= -len / 2) diff += len;
                            return (
                                <div key={index} className={`project-card pos-${diff}`}>
                                    <Link to={item.path}>
                                        <img src={item.img} alt="project" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}