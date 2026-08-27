import { BrowserRouter, Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { useMemo, useState } from 'react'

import './App.css'

import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HomePage } from './components/pages/HomePage'
import { MenuPage } from './components/pages/MenuPage'
import { ProductPage } from './components/pages/ProductPage'
import { AboutPage, ContactPage, OffersPage } from './components/pages/SecondaryPages'
import { AdminApp } from './components/admin/AdminApp'
import { ScrollMotion } from './components/motion/ScrollMotion'
import { AuthPage } from './components/pages/AuthPage'
import { menuItems as initialMenuItems } from './data/menuData'

function App() {
  const [authUser, setAuthUser] = useState(null)
  const [menuItems, setMenuItems] = useState(initialMenuItems)
  const [cart, setCart] = useState([
    { id: 1, name: 'Truffle Smash Burger', quantity: 1, price: 18.5 },
    { id: 4, name: 'Golden Crispy Fries', quantity: 2, price: 8.5 },
  ])

  const addToCart = (item) => {
    setCart((current) => {
      const existing = current.find((entry) => entry.id === item.id)

      if (existing) {
        return current.map((entry) =>
          entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry,
        )
      }

      return [...current, { id: item.id, name: item.name, quantity: 1, price: item.price }]
    })
  }

  const updateQuantity = (id, delta) => {
    setCart((current) =>
      current
        .map((entry) =>
          entry.id === id ? { ...entry, quantity: Math.max(0, entry.quantity + delta) } : entry,
        )
        .filter((entry) => entry.quantity > 0),
    )
  }

  const removeItem = (id) => setCart((current) => current.filter((entry) => entry.id !== id))

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <BrowserRouter>
      <FeastoApp
        cart={cart}
        cartCount={cartCount}
        addToCart={addToCart}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        menuItems={menuItems}
        setMenuItems={setMenuItems}
        authUser={authUser}
        setAuthUser={setAuthUser}
      />
    </BrowserRouter>
  )
}

function FeastoApp({ cart, cartCount, addToCart, updateQuantity, removeItem, menuItems, setMenuItems, authUser, setAuthUser }) {
  const location = useLocation()

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity * item.price, 0),
    [cart],
  )

  return (
    <div className="feasto-app">
      <Header cartCount={cartCount} />

      <main className="page-shell">
        <Routes>
          <Route index element={<HomePage addToCart={addToCart} />} />
          <Route path="/menu" element={<MenuPage addToCart={addToCart} menuItems={menuItems} />} />
          <Route path="/menu/:productId" element={<ProductPage addToCart={addToCart} menuItems={menuItems} />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} subtotal={subtotal} />} />
          <Route path="/checkout" element={<CheckoutPage subtotal={subtotal} />} />
          <Route path="/order-success" element={<OrderSuccessPage />} />
          <Route path="/login" element={<AuthPage mode="login" onAuthenticated={setAuthUser} />} />
          <Route path="/signup" element={<AuthPage mode="signup" onAuthenticated={setAuthUser} />} />
          <Route path="/profile" element={<ProfilePage authUser={authUser} />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/admin/*" element={<AdminApp menuItems={menuItems} setMenuItems={setMenuItems} cart={cart} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <ScrollMotion />

      {location.pathname.startsWith('/admin') ? null : <Footer />}
    </div>
  )
}

function CartPage({ cart, updateQuantity, removeItem, subtotal }) {
  return (
    <section className="container cart-page">
      <div className="section-heading">
        <h2>Your cart</h2>
      </div>

      <div className="cart-layout">
        <div className="cart-list">
          {cart.length === 0 ? (
            <div className="empty-state">Your cart is empty.</div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)} each</p>
                </div>

                <div className="cart-controls">
                  <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => updateQuantity(item.id, -1)}><i className="fa-solid fa-minus" aria-hidden="true" /></button>
                  <span>{item.quantity}</span>
                  <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => updateQuantity(item.id, 1)}><i className="fa-solid fa-plus" aria-hidden="true" /></button>
                </div>

                <strong>${(item.price * item.quantity).toFixed(2)}</strong>

                <button type="button" className="remove-button" onClick={() => removeItem(item.id)}>
                  <i className="fa-solid fa-trash-can" aria-hidden="true" /> Remove
                </button>
              </div>
            ))
          )}
        </div>

        <aside className="checkout-panel">
          <h3>Order summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <strong>$4.99</strong>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <strong>${(subtotal + 4.99).toFixed(2)}</strong>
          </div>

          <NavLink to="/checkout" className="primary-button button-link">
            Proceed to checkout
          </NavLink>
        </aside>
      </div>
    </section>
  )
}

function CheckoutPage({ subtotal }) {
  return (
    <section className="container simple-page checkout-page">
      <h2>Checkout</h2>

      <div className="checkout-grid">
        <div className="info-card">
          <h3>Delivery details</h3>

          <label>
            Address
            <input type="text" defaultValue="48 Market Avenue, Unit 4" />
          </label>

          <label>
            Payment
            <select defaultValue="card">
              <option value="card">Card</option>
              <option value="cash">Cash on delivery</option>
            </select>
          </label>
        </div>

        <aside className="checkout-panel">
          <h3>Payment summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <strong>$4.99</strong>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <strong>${(subtotal + 4.99).toFixed(2)}</strong>
          </div>

          <NavLink to="/order-success" className="primary-button button-link">
            Place order
          </NavLink>
        </aside>
      </div>
    </section>
  )
}

function OrderSuccessPage() {
  return (
    <section className="container simple-page success-page">
      <div className="success-panel">
        <h2>Order confirmed</h2>
        <p>Your food is on the way and the kitchen is already prepping it.</p>
        <NavLink to="/orders" className="primary-button button-link">
          View order history
        </NavLink>
      </div>
    </section>
  )
}

function ProfilePage({ authUser }) {
  const displayName = authUser?.user_metadata?.full_name || authUser?.email?.split('@')[0] || 'Abdul Moiz'
  const email = authUser?.email || 'abdul@example.com'

  return (
    <section className="container simple-page">
      <h2>My profile</h2>

      <div className="info-grid">
        <div className="info-card">
          <h3>Account</h3>
          <p>{displayName}</p>
          <p>{email}</p>
        </div>

        <div className="info-card">
          <h3>Saved addresses</h3>
          <p>48 Market Avenue, Unit 4</p>
        </div>
      </div>
    </section>
  )
}

function OrdersPage() {
  return (
    <section className="container simple-page">
      <h2>Order history</h2>

      <div className="info-list">
        <div className="info-card order-row">
          <div>
            <strong>#1024</strong>
            <p>Truffle Smash Burger</p>
          </div>
          <span>Delivered</span>
        </div>

        <div className="info-card order-row">
          <div>
            <strong>#1008</strong>
            <p>Firecracker Chicken</p>
          </div>
          <span>In transit</span>
        </div>
      </div>
    </section>
  )
}

export default App
