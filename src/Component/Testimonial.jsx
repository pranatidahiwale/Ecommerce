import React from "react";

function Testimonial() {
  const testimonials = [
    { name: "Alice", feedback: "Amazing products and fast delivery!" },
    { name: "Bob", feedback: "Great service and quality!" },
    { name: "Carol", feedback: "Highly recommend this store!" }
  ];

  return (
    <section style={{ padding: "60px 20px", background: "#f0f4f8", textAlign: "center" }}>
      <h2 style={{ marginBottom: "40px" }}>What Our Customers Say</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{ background: "#fff", padding: "20px", borderRadius: "10px", maxWidth: "250px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <p style={{ fontStyle: "italic" }}>"{t.feedback}"</p>
            <p style={{ fontWeight: "bold", marginTop: "10px" }}>- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;