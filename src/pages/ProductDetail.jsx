import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MOCK_API_URL } from '../config'


export default function ProductDetail({ addToCart, localProducts = [] }) {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Primero busco en localProducts (los creados por vos)
    const foundLocal = localProducts.find((p) => String(p.id) === String(id))
    if (foundLocal) {
      setProduct(foundLocal)
      setLoading(false)
      return
    }

    // Si no está, lo busco en la API
    setLoading(true)
    fetch(MOCK_API_URL + '/' + id)
      .then((res) => {
        if (!res.ok) throw new Error('Error')
        return res.json()
      })
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id, localProducts])

  if (loading) return <p className="muted">Cargando...</p>
  if (error) return <p className="muted">Error: {error}</p>
  if (!product) return <p className="muted">No encontrado.</p>

  const title = product.title ?? product.name ?? 'Sin nombre'
  const price = product.price ?? 0
  const description = product.description ?? 'Sin descripción'

  return (
    <div>
      <h3>{title}</h3>
      <p className="muted">Precio: ${price}</p>
      <p>{description}</p>
      <button onClick={() => addToCart({ ...product, title, price })}>
        Agregar al carrito
      </button>
    </div>
  )
}
