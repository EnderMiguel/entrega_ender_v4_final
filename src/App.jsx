import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CartPage from "./pages/CartPage";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import AltaProducto from "./pages/AltaProducto";

function ProtectedRoute({ children, isAuth }) {
  if (!isAuth) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [isAuth, setIsAuth] = useState(false);

  // productos creados desde Alta (local)
  const [localProducts, setLocalProducts] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("isAuth");
    if (saved === "true") setIsAuth(true);
  }, []);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const addProduct = (product) => {
    // guarda el producto local para que aparezca en /products
    setLocalProducts((prev) => [product, ...prev]);
    console.log("Producto creado:", product);
  };

  const login = () => {
    setIsAuth(true);
    localStorage.setItem("isAuth", "true");
  };

  return (
    <Layout cart={cart}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products addToCart={addToCart} localProducts={localProducts} />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />

        <Route path="/cart" element={<CartPage cart={cart} />} />

        <Route path="/login" element={<Login onLogin={login} />} />

        <Route
          path="/alta"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <AltaProducto onAdd={addProduct} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/protected"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <div style={{ padding: 20 }}>
                Ruta protegida: contenido privado para el cliente.
              </div>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
