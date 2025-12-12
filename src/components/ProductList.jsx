import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductList({ products=[], onAdd }) {
  if (!products.length) return <p className="muted">No hay productos.</p>
  return (
    <div className="grid">
      {products.map(p => (
        <div className="card" key={p.id}>
          <h4>{p.name}</h4>
          <p className="muted">${p.price}</p>
          <div style={{display:'flex',gap:8,marginTop:8}}>
            <button onClick={() => onAdd(p)}>Agregar</button>
            <Link to={`/product/${p.id}`} style={{alignSelf:'center'}}>Ver</Link>
          </div>
        </div>
      ))}
    </div>
  )
}
