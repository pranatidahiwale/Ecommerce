import React, { useEffect, useState } from "react";

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from a sample API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products"); // ✅ sample free products API
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "30px" }}>Loading products...</p>;
  }

  return (
    <section style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "2rem", color: "#0d47a1" }}>
        Our Products
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px"
      }}>
        {products.map((product) => (
          <div key={product.id} style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            background: "#fff",
            textAlign: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}>
            <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px", objectFit: "contain", marginBottom: "10px" }} />
            <h3 style={{ fontSize: "1rem", marginBottom: "10px" }}>{product.title}</h3>
            <p style={{ fontWeight: "bold", marginBottom: "10px" }}>₹{Math.round(product.price * 80)}</p>
            <button
              onClick={() => addToCart({ id: product.id, title: product.title, price: Math.round(product.price * 80), image: product.image })}
              style={{
                padding: "8px 15px",
                background: "#1976d2",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;