import React, { useState } from "react";

export default function AltaProducto({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: crypto.randomUUID(),
      name: name.trim(),
      price: Number(price),
      description: "Producto creado desde Alta",
    };

    onAdd(newProduct);
    setName("");
    setPrice("");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Alta de productos</h2>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10, maxWidth: 320 }}>
        <input
          placeholder="Nombre del producto"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="Precio"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
