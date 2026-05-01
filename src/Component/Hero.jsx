import React from "react";
import HeroImage from "../assets/Ecommercephoto.jpg";

function Hero() {
  return (
    <section style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "80px 20px",
      background: "linear-gradient(135deg, #0d47a1, #1976d2)",
      color: "#fff",
      flexWrap: "wrap",
    }}>
      <div style={{ flex: 1, minWidth: "300px", marginRight: "20px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Welcome to Our E-Commerce Store</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>Discover amazing products at unbeatable prices!</p>
        <button style={{
          padding: "12px 25px",
          fontSize: "1rem",
          background: "#fff",
          color: "#0d47a1",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          cursor: "pointer",
        }}>Shop Now</button>
      </div>
      <div style={{ flex: 1, minWidth: "300px", textAlign: "center" }}>
        <img src={HeroImage} alt="Hero Banner" style={{ maxWidth: "100%", borderRadius: "10px", boxShadow: "0 5px 15px rgba(0,0,0,0.3)" }} />
      </div>
    </section>
  );
}

export default Hero;