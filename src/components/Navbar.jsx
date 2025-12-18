import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ cartCount = 0 }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Productos</Link>
      <Link to="/alta">Alta</Link>
      <Link to="/cart">Carrito</Link>
      <Link to="/protected">Protected</Link>
      <span className="cart-badge">{cartCount}</span>
    </nav>
  );
}
