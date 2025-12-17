
import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import CartPage from './pages/CartPage'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import AltaProducto from './pages/AltaProducto'
function ProtectedRoute({ children, isAuth }) {
  if (!isAuth) return <Navigate to='/login' replace />
  return children
}

export default function App() {
  const [cart, setCart] = useState([])
  const [isAuth, setIsAuth] = useState(false)

  const addToCart = (product) => {
    setCart(prev => [...prev, product])
  }
const addProduct = (product) => {
  console.log("Producto creado:", product)
}

  const login = () => setIsAuth(true)

  return (
    <Layout cart={cart}>
      <Routes>
        <Route path="/alta" element={<ProtectedRoute isAuth={isAuth}><AltaProducto onAdd={addProduct} /></ProtectedRoute>}
/>

        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products addToCart={addToCart} />} />
        <Route path='/product/:id' element={<ProductDetail addToCart={addToCart} />} />
        <Route path='/cart' element={<CartPage cart={cart} />} />
        <Route path='/login' element={<Login onLogin={login} />} />
        <Route path='/protected' element={
          <ProtectedRoute isAuth={isAuth}>
            <div style={{padding:20}}>Ruta protegida: contenido privado para el cliente.</div>
          </ProtectedRoute>
        } />
      </Routes>
    </Layout>
  )
}
