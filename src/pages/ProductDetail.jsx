import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MOCK_API_URL } from '../config'

export default function ProductDetail({ addToCart }) {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(MOCK_API_URL + '/' + id)
      .then(res => {
        if (!res.ok) throw new Error('Error')
        return res.json()
      })
      .then(data => setProduct(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p className="muted">Cargando...</p>
  if (error) return <p className="muted">Error: {error}</p>
  if (!product) return <p className="muted">No encontrado.</p>

  return (
    <div>
      <h3>{product.name}</h3>
      <p className="muted">Precio: ${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  )
}
