import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductList({ products = [], onAdd }) {
  if (!products.length) return <p className="muted">No hay productos.</p>

  return (
    <div className="grid">
      {products.map((p) => {
        const title = p.title ?? p.name ?? 'Sin nombre'
        const price = p.price ?? 0

        return (
          <div className="card" key={p.id}>
            <h4>{title}</h4>
            <p className="muted">Precio: ${price}</p>

            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
              <button onClick={() => onAdd({ ...p, title, price })}>Agregar</button>
              <Link to={`/product/${p.id}`} style={{ alignSelf: 'center' }}>
                Ver
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
