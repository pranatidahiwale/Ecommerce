import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section style={{ padding: "60px 20px", background: "#e3f2fd", textAlign: "center" }}>
      <h2 style={{ marginBottom: "30px", color: "#0d47a1" }}>Contact Us</h2>
      {submitted && <p style={{ color: "green", marginBottom: "20px", fontWeight: "bold" }}>Message sent successfully!</p>}
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "15px" }}>
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #1976d2" }} />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #1976d2" }} />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required rows="4" style={{ padding: "10px", borderRadius: "5px", border: "1px solid #1976d2" }} />
        <button type="submit" style={{ padding: "10px 20px", background: "#1976d2", color: "#fff", border: "none", borderRadius: "5px", fontWeight: "bold", cursor: "pointer" }}>Send Message</button>
      </form>
    </section>
  );
}

export default Contact;