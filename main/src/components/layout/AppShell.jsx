import { NavLink, useLocation } from 'react-router-dom'

export function AppShell({ children, cartCount }) {
  const location = useLocation()

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/offers', label: 'Offers' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <div className="feasto-app">
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

      <main className="page-shell">{children}</main>

      {location.pathname.startsWith('/admin') ? null : (
        <footer className="site-footer">
          <div className="container footer-inner">
            <div>
              <div className="brand footer-brand">
                <span className="brand-mark">F</span>
                <span>Feasto</span>
              </div>
              <p>Fast food, considered.</p>
            </div>
            <div className="footer-links">
              <NavLink to="/menu">Menu</NavLink>
              <NavLink to="/offers">Offers</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}
