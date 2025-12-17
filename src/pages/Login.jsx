import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ onLogin }) {
  const navigate = useNavigate()
  const handle = () => {
    onLogin()
   navigate('/alta')
  }
  return (
    <div>
      <h3>Login (simulado)</h3>
      <p className="muted">Haz click para simular autenticación y acceder a rutas protegidas.</p>
      <button onClick={handle}>Iniciar sesión</button>
    </div>
  )
}
