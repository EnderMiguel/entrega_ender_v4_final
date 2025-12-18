import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

export default function Layout({ cart = [] }) {
  return (
    <div>
      <header>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0 }}>Entrega - Ender</h2>
          <Navbar cartCount={cart.length} />
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>
    </div>
  )
}
