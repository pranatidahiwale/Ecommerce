import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import ProductList from "./Component/ProductList";
import Cart from "./Component/Cart";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Testimonial from "./Component/Testimonial";

// Sample product data
const productsData = [
  { id: 1, title: "Smartphone", price: 12000, image: "/src/assets/hero.png" },
  { id: 2, title: "Laptop", price: 45000, image: "/src/assets/hero.png" },
  { id: 3, title: "Headphones", price: 2500, image: "/src/assets/hero.png" },
  { id: 4, title: "Smartwatch", price: 5000, image: "/src/assets/hero.png" },
];

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home"); // 'home', 'products', 'cart', 'contact'

  // Add product to cart
  const addToCart = (product) => setCart([...cart, product]);

  // Remove product from cart by index
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // Handle navigation from Navbar
  const handleNavigate = (targetPage) => setPage(targetPage);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f5f5f5" }}>
      {/* Navbar with cart count and navigation */}
      <Navbar cartCount={cart.length} onNavigate={handleNavigate} />

      {/* Pages */}
      {page === "home" && (
        <>
          <Hero />
          <Testimonial />
        </>
      )}

      {page === "products" && (
        <ProductList products={productsData} addToCart={addToCart} />
      )}

      {page === "cart" && (
        <Cart cart={cart} removeFromCart={removeFromCart} />
      )}

      {page === "contact" && <Contact />}

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}

export default App;
