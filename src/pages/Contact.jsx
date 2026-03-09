import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!form.name) return setError("Nhập tên");
    if (!form.email.includes("@")) return setError("Email sai");
    if (form.message.length < 10) return setError("Nội dung quá ngắn");

    setError("");
    alert("Gửi thành công!");
  };

  return (
    <form className="contact" onSubmit={submit}>
      <input placeholder="Họ tên"
        onChange={e => setForm({ ...form, name: e.target.value })} />

      <input placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })} />

      <textarea placeholder="Nội dung"
        onChange={e => setForm({ ...form, message: e.target.value })} />

      {error && <p className="error">{error}</p>}
      <button>Gửi</button>
    </form>
  );
}
