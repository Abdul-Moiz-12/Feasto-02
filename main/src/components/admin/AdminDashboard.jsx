import { NavLink } from 'react-router-dom'
import { useMemo, useState } from 'react'

const recentOrders = [
  { id: '#FEA-1250', customer: 'Ahmad Raza', items: '2 Items', amount: 1250, status: 'Preparing', time: '10 min ago' },
  { id: '#FEA-1249', customer: 'Sara Khan', items: '3 Items', amount: 2150, status: 'On Delivery', time: '25 min ago' },
  { id: '#FEA-1248', customer: 'Usman Ali', items: '1 Item', amount: 750, status: 'Completed', time: '40 min ago' },
  { id: '#FEA-1247', customer: 'Hina Batool', items: '4 Items', amount: 2890, status: 'Preparing', time: '1 hr ago' },
  { id: '#FEA-1246', customer: 'Bilal Ahmed', items: '2 Items', amount: 1050, status: 'Completed', time: '1 hr ago' },
]

const categoryIcons = { Burgers: 'fa-burger', Pizza: 'fa-pizza-slice', Chicken: 'fa-drumstick-bite', Fries: 'fa-utensils', Drinks: 'fa-glass-water', Desserts: 'fa-cake-candles', Salads: 'fa-leaf' }
const baseSales = { Burgers: 98230, Pizza: 76540, Chicken: 64310, Drinks: 42230, Desserts: 28920, Fries: 18000, Salads: 15600 }

function PanelHeading({ title, link, children }) {
  return <div className="admin-panel-heading"><h3>{title}</h3>{children || <NavLink to={link}>View all</NavLink>}</div>
}

export function AdminDashboard({ menuItems, cart }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [revenueRange, setRevenueRange] = useState('7')
  const [statusRange, setStatusRange] = useState('today')
  const [salesRange, setSalesRange] = useState('month')
  const [statusFilter, setStatusFilter] = useState('All')
  const orderCount = 1248 + cart.length
  const stats = [
    { label: 'Total Orders', value: orderCount.toLocaleString(), change: '18.6%', icon: 'fa-bag-shopping', tone: 'red' },
    { label: 'Total Revenue', value: `Rs. ${(345230 + cart.reduce((sum, item) => sum + item.quantity * item.price * 100, 0)).toLocaleString()}`, change: '24.5%', icon: 'fa-chart-line', tone: 'gold' },
    { label: 'Customers', value: (2845 + menuItems.length).toLocaleString(), change: '12.4%', icon: 'fa-users', tone: 'red' },
    { label: 'Menu Items', value: menuItems.length.toString(), change: 'Live catalog', icon: 'fa-utensils', tone: 'gold' },
  ]
  const normalizedSearch = searchTerm.trim().toLowerCase()
  const filteredOrders = recentOrders.filter((order) => {
    const matchesSearch = !normalizedSearch || `${order.id} ${order.customer} ${order.status}`.toLowerCase().includes(normalizedSearch)
    return matchesSearch && (statusFilter === 'All' || order.status === statusFilter)
  })
  const topSellers = menuItems.filter((item) => !normalizedSearch || `${item.name} ${item.category}`.toLowerCase().includes(normalizedSearch)).slice(0, 5)
  const chartBars = revenueRange === '30' ? [42, 48, 64, 76, 70, 84, 92] : [35, 53, 67, Math.min(96, 70 + menuItems.length * 2), 78, 58, Math.min(94, 72 + cart.length * 4)]
  const statusOrders = statusRange === 'week' ? 4380 : orderCount
  const statusCounts = { Pending: Math.round(statusOrders * 0.256), Preparing: Math.round(statusOrders * 0.329), 'On Delivery': Math.round(statusOrders * 0.271), Completed: Math.round(statusOrders * 0.144) }
  const sales = useMemo(() => [...new Set([...Object.keys(baseSales), ...menuItems.map((item) => item.category)])].map((category) => { const amount = Math.round((baseSales[category] || 12000) * (salesRange === 'week' ? 0.24 : 1)); return [category, `Rs. ${amount.toLocaleString()}`, `${((amount / 345230) * 100).toFixed(1)}%`, categoryIcons[category] || 'fa-utensils'] }), [menuItems, salesRange])

  return (
    <div className="admin-pane">
      <header className="admin-page-heading">
        <div><p className="admin-kicker">Thursday, May 16, 2024</p><h1>Good afternoon, Admin</h1><p>Here&apos;s what&apos;s happening with your restaurant today.</p></div>
        <div className="admin-top-actions"><label className="admin-search"><i className="fa-solid fa-magnifying-glass" aria-hidden="true" /><input type="search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search orders, items..." aria-label="Search dashboard" /></label><button type="button" className="admin-icon-button" aria-label="Notifications"><i className="fa-solid fa-bell" aria-hidden="true" /><b>5</b></button><div className="admin-avatar" aria-label="Abdul Moiz">AM</div></div>
      </header>

      <section className="admin-stat-grid" aria-label="Restaurant overview">
        {stats.map((stat) => <article className={`admin-stat-card ${stat.tone}`} key={stat.label}><span className="stat-icon"><i className={`fa-solid ${stat.icon}`} aria-hidden="true" /></span><div><p>{stat.label}</p><strong>{stat.value}</strong><small><span><i className="fa-solid fa-arrow-trend-up" aria-hidden="true" /> {stat.change}</span> vs last week</small></div></article>)}
      </section>

      <div className="admin-dashboard-grid">
        <div className="admin-main-column">
          <section className="admin-card revenue-card"><PanelHeading title="Revenue Overview"><select value={revenueRange} onChange={(event) => setRevenueRange(event.target.value)} aria-label="Revenue date range"><option value="7">Last 7 Days</option><option value="30">Last 30 Days</option></select></PanelHeading><div className="chart-area"><div className="chart-y-axis"><span>Rs. 100K</span><span>Rs. 80K</span><span>Rs. 60K</span><span>Rs. 40K</span><span>Rs. 20K</span><span>Rs. 0</span></div><div className="chart"><div className="chart-grid-lines">{[1, 2, 3, 4, 5].map((line) => <i key={line} />)}</div><div className="chart-bars">{chartBars.map((height, index) => <div className="chart-point" key={height + index} style={{ '--bar-height': `${height}%` }} title={`Revenue activity ${height}%`}><span /></div>)}</div><div className="chart-labels">{['May 10', 'May 11', 'May 12', 'May 13', 'May 14', 'May 15', 'May 16'].map((day) => <span key={day}>{day}</span>)}</div></div></div></section>

          <section className="admin-card orders-card"><div className="admin-panel-heading"><h3>Recent Orders</h3><div className="panel-heading-actions"><select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} aria-label="Filter orders by status"><option>All</option><option>Preparing</option><option>On Delivery</option><option>Completed</option></select><NavLink to="/admin/orders">View all</NavLink></div></div><div className="orders-table-wrap"><table className="orders-table"><thead><tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Amount</th><th>Status</th><th>Time</th></tr></thead><tbody>{filteredOrders.map((order) => <tr key={order.id}><td>{order.id}</td><td>{order.customer}</td><td>{order.items}</td><td>Rs. {order.amount.toLocaleString()}</td><td><span className={`status status-${order.status.toLowerCase().replace(' ', '-')}`}>{order.status}</span></td><td>{order.time}</td></tr>)}</tbody></table></div>{filteredOrders.length === 0 ? <p className="dashboard-empty">No orders match your search or status filter.</p> : null}<NavLink className="admin-wide-link" to="/admin/orders"><i className="fa-solid fa-arrow-right" aria-hidden="true" /> &nbsp; View all orders</NavLink></section>

          <section className="admin-card sales-card"><PanelHeading title="Sales by Category"><select value={salesRange} onChange={(event) => setSalesRange(event.target.value)} aria-label="Sales date range"><option value="month">This Month</option><option value="week">This Week</option></select></PanelHeading><div className="sales-grid">{sales.map(([name, amount, percentage, icon]) => <NavLink to={`/menu?category=${name.toLowerCase()}`} className="sales-item" key={name}><span className="sales-icon" aria-hidden="true"><i className={`fa-solid ${icon}`} /></span><strong>{name}</strong><b>{amount}</b><small>{percentage}</small><i /></NavLink>)}</div></section>
        </div>

        <aside className="admin-side-column"><section className="admin-card status-card"><PanelHeading title="Order Status"><select value={statusRange} onChange={(event) => setStatusRange(event.target.value)} aria-label="Order status date range"><option value="today">Today</option><option value="week">This Week</option></select></PanelHeading><div className="donut-wrap"><div className="donut"><strong>{statusOrders.toLocaleString()}</strong><span>Total</span></div><ul>{Object.entries(statusCounts).map(([status, count]) => <li key={status}><i className={`dot ${status.toLowerCase().replace(' ', '-')}`} />{status} <b>{count.toLocaleString()} ({Math.round((count / statusOrders) * 1000) / 10}%)</b></li>)}</ul></div></section>

          <section className="admin-card sellers-card"><PanelHeading title="Top Selling Items" link="/admin/menu" /><ol>{topSellers.map((item, index) => <li key={item.id}><span>{index + 1}</span><img src={item.image} alt="" /><div><NavLink to={`/admin/menu?search=${encodeURIComponent(item.name)}`}><strong>{item.name}</strong></NavLink><small>{324 - index * 36} orders</small></div></li>)}</ol>{topSellers.length === 0 ? <p className="dashboard-empty">No menu items match your search.</p> : null}</section>

          <section className="admin-card reviews-card"><PanelHeading title="Recent Reviews" link="/admin/reviews" /><blockquote><div className="review-person"><span>AR</span><strong>Ali Raza</strong><b><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /></b><small>2 hours ago</small></div><p>Amazing food and fast delivery!</p></blockquote><blockquote><div className="review-person"><span>MK</span><strong>Mehwish Khan</strong><b><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-regular fa-star" aria-hidden="true" /></b><small>5 hours ago</small></div><p>Very tasty pizza and good packaging.</p></blockquote><blockquote><div className="review-person"><span>HA</span><strong>Hamza Ali</strong><b><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /></b><small>Yesterday</small></div><p>Best burger in town!</p></blockquote></section></aside>
      </div>
    </div>
  )
}
