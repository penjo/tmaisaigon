import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config/api";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/services`)
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <section className="services">
      <h2>Dịch vụ</h2>

      <div className="service-list">
        {services.map(s => (
          <Link key={s.id} to={`/services/${s.id}`} className="service-card">
            <h3>{s.title}</h3>
            <p>{s.short}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
