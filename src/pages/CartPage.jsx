import React from 'react'
import Cart from '../components/Cart'

export default function CartPage({ cart=[] }) {
  return (
    <div>
      <h3>Carrito</h3>
      <Cart cart={cart} />
    </div>
  )
}
