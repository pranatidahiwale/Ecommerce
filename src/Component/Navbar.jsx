import React from "react";

function Navbar({ cartCount, onNavigate }) {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
      color: "#fff",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
      fontFamily: "Arial, sans-serif",
    }}>
      <h1
        style={{
          margin: 0,
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1.5rem",
          padding: "5px 15px",
          background: "rgba(255,255,255,0.2)",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
        }}
        onClick={() => onNavigate("home")}
      >
        My E-Commerce
      </h1>
      <div>
        <span style={{ marginRight: "20px", cursor: "pointer" }} onClick={() => onNavigate("home")}>Home</span>
        <span style={{ marginRight: "20px", cursor: "pointer" }} onClick={() => onNavigate("products")}>Products</span>
        <span style={{ marginRight: "20px", cursor: "pointer" }} onClick={() => onNavigate("contact")}>Contact</span>
        <span style={{ fontWeight: "bold", cursor: "pointer" }} onClick={() => onNavigate("cart")}>Cart: {cartCount}</span>
      </div>
    </nav>
  );
}

export default Navbar;