import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import CartPage from './pages/CartPage'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'

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

  const login = () => setIsAuth(true)

  return (
    <Layout cart={cart}>
      <Routes>
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
