import React from 'react'

import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList'
import { MOCK_API_URL } from '../config'

export default function Products({ addToCart }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(MOCK_API_URL)
      .then(res => {
        if (!res.ok) throw new Error('Error en la API')
        return res.json()
      })
      .then(data => setProducts(data))
      .catch(err => setError(err.message || 'Error'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p className="muted">Cargando productos...</p>
  if (error) return <p className="muted">Error: {error}</p>

  return <ProductList products={products} onAdd={addToCart} />
}
