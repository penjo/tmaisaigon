import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../config/api";

export default function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/services/${id}`)
      .then(res => res.json())
      .then(data => setService(data));
  }, [id]);

  if (!service) return <p>Loading...</p>;

  return (
    <section className="service-detail">
      <h2>{service.title}</h2>
      <p>{service.detail}</p>
    </section>
  );
}
