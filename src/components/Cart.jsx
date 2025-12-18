import React from 'react'

export default function Cart({ cart = [] }) {
  if (!cart.length) return <p className="muted">El carrito está vacío.</p>

  return (
    <div>
      {cart.map((p, i) => {
        const title = p.title ?? p.name ?? 'Sin nombre'
        const price = p.price ?? 0

        return (
          <div key={i} className="card" style={{ marginBottom: 8 }}>
            <strong>{title}</strong>
            <div className="muted">Precio: ${price}</div>
          </div>
        )
      })}
    </div>
  )
}
