import { useState,useEffect } from "react";
import "../styles/HeroSlider.css";

const images = [
  "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764334155/Slideshow2_pohjpm.jpg",
  "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764334167/Slideshow5_cek0qg.jpg",
  "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764334164/Slideshow4_iiwzz8.jpg",
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
  
    /* ===== AUTO SLIDE ===== */
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    /* ===== BUTTON ===== */
    const nextSlide = () => {
      setCurrent((prev) => (prev + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrent((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    };
  
  return (
    <div className="hero-slider">

      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <img src={img} alt={`slide-${index}`} />
        </div>
      ))}
      <button className="nav prev" onClick={prevSlide}>
        ❮
      </button>

      <button className="nav next" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
}