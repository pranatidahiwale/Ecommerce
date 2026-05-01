import React from "react";

function Cart({ cart, removeFromCart }) {
  return (
    <div style={{
      margin: "20px auto",
      maxWidth: "600px",
      background: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty</p> :
        cart.map((item, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", paddingBottom: "5px", borderBottom: "1px solid #eee" }}>
            <span>{item.title} - ₹{item.price}</span>
            <button onClick={() => removeFromCart(index)} style={{
              background: "#e53935",
              color: "#fff",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer"
            }}>Remove</button>
          </div>
        ))
      }
      {cart.length > 0 && (
        <h3 style={{ textAlign: "right", marginTop: "15px" }}>
          Total: ₹{cart.reduce((sum, item) => sum + Number(item.price), 0)}
        </h3>
      )}
    </div>
  );
}


export default Cart;