import React from 'react'

export default function Cart({ cart=[] }) {
  if (!cart.length) return <p className="muted">El carrito está vacío.</p>
  return (
    <div>
      {cart.map((p, i) => (
        <div key={i} className="card" style={{marginBottom:8}}>
          <strong>{p.name}</strong>
          <div className="muted">Precio: ${p.price}</div>
        </div>
      ))}
    </div>
  )
}
