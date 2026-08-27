import { NavLink } from 'react-router-dom'

export function Header({ cartCount }) {
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/offers', label: 'Offers' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <NavLink to="/" className="brand" end>
          <span className="brand-mark">F</span>
          <span>Feasto</span>
        </NavLink>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <NavLink to="/cart" className="cart-link">
            <span>Cart</span>
            <strong>{cartCount}</strong>
          </NavLink>
          <NavLink to="/admin/dashboard" className="dashboard-link">
            Dashboard
          </NavLink>
        </div>
      </div>
    </header>
  )
}
