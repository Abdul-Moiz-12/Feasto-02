import { NavLink } from 'react-router-dom'

const recentOrders = [
  ['#FEA-1250', 'Ahmad Raza', '2 Items', 'Rs. 1,250', 'Preparing', '10 min ago'],
  ['#FEA-1249', 'Sara Khan', '3 Items', 'Rs. 2,150', 'On Delivery', '25 min ago'],
  ['#FEA-1248', 'Usman Ali', '1 Item', 'Rs. 750', 'Completed', '40 min ago'],
  ['#FEA-1247', 'Hina Batool', '4 Items', 'Rs. 2,890', 'Preparing', '1 hr ago'],
  ['#FEA-1246', 'Bilal Ahmed', '2 Items', 'Rs. 1,050', 'Completed', '1 hr ago'],
]

const sales = [
  ['Burgers', 'Rs. 98,230', '28.4%', 'fa-burger'],
  ['Pizzas', 'Rs. 76,540', '22.1%', 'fa-pizza-slice'],
  ['Chicken', 'Rs. 64,310', '18.6%', 'fa-drumstick-bite'],
  ['Drinks', 'Rs. 42,230', '12.2%', 'fa-glass-water'],
  ['Desserts', 'Rs. 28,920', '8.4%', 'fa-cake-candles'],
  ['Fries', 'Rs. 18,000', '5.2%', 'fa-utensils'],
]

function PanelHeading({ title, link, children }) {
  return <div className="admin-panel-heading"><h3>{title}</h3>{children || <NavLink to={link}>View all</NavLink>}</div>
}

export function AdminDashboard({ menuItems, cart }) {
  const orderCount = 1248 + cart.length
  const stats = [
    { label: 'Total Orders', value: orderCount.toLocaleString(), change: '18.6%', icon: 'fa-bag-shopping', tone: 'red' },
    { label: 'Total Revenue', value: `Rs. ${(345230 + cart.reduce((sum, item) => sum + item.quantity * item.price * 100, 0)).toLocaleString()}`, change: '24.5%', icon: 'fa-chart-line', tone: 'gold' },
    { label: 'Customers', value: (2845 + menuItems.length).toLocaleString(), change: '12.4%', icon: 'fa-users', tone: 'red' },
    { label: 'Menu Items', value: menuItems.length.toString(), change: 'Live catalog', icon: 'fa-utensils', tone: 'gold' },
  ]
  const topSellers = menuItems.slice(0, 5)
  const chartBars = [35, 53, 67, Math.min(96, 70 + menuItems.length * 2), 78, 58, Math.min(94, 72 + cart.length * 4)]

  return (
    <div className="admin-pane">
      <header className="admin-page-heading">
        <div><p className="admin-kicker">Thursday, May 16, 2024</p><h1>Good afternoon, Admin</h1><p>Here&apos;s what&apos;s happening with your restaurant today.</p></div>
        <div className="admin-top-actions"><label className="admin-search"><i className="fa-solid fa-magnifying-glass" aria-hidden="true" /><input type="search" placeholder="Search anything..." aria-label="Search dashboard" /></label><button type="button" className="admin-icon-button" aria-label="Notifications"><i className="fa-solid fa-bell" aria-hidden="true" /><b>5</b></button><div className="admin-avatar" aria-label="Abdul Moiz">AM</div></div>
      </header>

      <section className="admin-stat-grid" aria-label="Restaurant overview">
        {stats.map((stat) => <article className={`admin-stat-card ${stat.tone}`} key={stat.label}><span className="stat-icon"><i className={`fa-solid ${stat.icon}`} aria-hidden="true" /></span><div><p>{stat.label}</p><strong>{stat.value}</strong><small><span><i className="fa-solid fa-arrow-trend-up" aria-hidden="true" /> {stat.change}</span> vs last week</small></div></article>)}
      </section>

      <div className="admin-dashboard-grid">
        <div className="admin-main-column">
          <section className="admin-card revenue-card"><PanelHeading title="Revenue Overview"><select defaultValue="7"><option value="7">Last 7 Days</option><option value="30">Last 30 Days</option></select></PanelHeading><div className="chart-area"><div className="chart-y-axis"><span>Rs. 100K</span><span>Rs. 80K</span><span>Rs. 60K</span><span>Rs. 40K</span><span>Rs. 20K</span><span>Rs. 0</span></div><div className="chart"><div className="chart-grid-lines">{[1, 2, 3, 4, 5].map((line) => <i key={line} />)}</div><div className="chart-bars">{chartBars.map((height, index) => <div className="chart-point" key={height + index} style={{ '--bar-height': `${height}%` }}><span /></div>)}</div><div className="chart-labels">{['May 10', 'May 11', 'May 12', 'May 13', 'May 14', 'May 15', 'May 16'].map((day) => <span key={day}>{day}</span>)}</div></div></div></section>

          <section className="admin-card orders-card"><PanelHeading title="Recent Orders" link="/admin/orders" /><div className="orders-table-wrap"><table className="orders-table"><thead><tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Amount</th><th>Status</th><th>Time</th></tr></thead><tbody>{recentOrders.map((order) => <tr key={order[0]}>{order.map((value, index) => <td key={value}>{index === 4 ? <span className={`status status-${value.toLowerCase().replace(' ', '-')}`}>{value}</span> : value}</td>)}</tr>)}</tbody></table></div><NavLink className="admin-wide-link" to="/admin/orders"><i className="fa-solid fa-arrow-right" aria-hidden="true" /> &nbsp; View all orders</NavLink></section>

          <section className="admin-card sales-card"><PanelHeading title="Sales by Category"><select defaultValue="month"><option value="month">This Month</option><option value="week">This Week</option></select></PanelHeading><div className="sales-grid">{sales.map(([name, amount, percentage, icon]) => <NavLink to="/admin/reports" className="sales-item" key={name}><span className="sales-icon" aria-hidden="true"><i className={`fa-solid ${icon}`} /></span><strong>{name}</strong><b>{amount}</b><small>{percentage}</small><i /></NavLink>)}</div></section>
        </div>

        <aside className="admin-side-column"><section className="admin-card status-card"><PanelHeading title="Order Status"><select defaultValue="today"><option value="today">Today</option><option value="week">This Week</option></select></PanelHeading><div className="donut-wrap"><div className="donut"><strong>1,248</strong><span>Total</span></div><ul><li><i className="dot pending" />Pending <b>320 (25.6%)</b></li><li><i className="dot preparing" />Preparing <b>410 (32.9%)</b></li><li><i className="dot delivery" />On Delivery <b>338 (27.1%)</b></li><li><i className="dot completed" />Completed <b>180 (14.4%)</b></li></ul></div></section>

          <section className="admin-card sellers-card"><PanelHeading title="Top Selling Items" link="/admin/menu" /><ol>{topSellers.map((item, index) => <li key={item.id}><span>{index + 1}</span><img src={item.image} alt="" /><div><strong>{item.name}</strong><small>{324 - index * 36} orders</small></div></li>)}</ol></section>

          <section className="admin-card reviews-card"><PanelHeading title="Recent Reviews" link="/admin/reviews" /><blockquote><div className="review-person"><span>AR</span><strong>Ali Raza</strong><b><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /></b><small>2 hours ago</small></div><p>Amazing food and fast delivery!</p></blockquote><blockquote><div className="review-person"><span>MK</span><strong>Mehwish Khan</strong><b><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-regular fa-star" aria-hidden="true" /></b><small>5 hours ago</small></div><p>Very tasty pizza and good packaging.</p></blockquote><blockquote><div className="review-person"><span>HA</span><strong>Hamza Ali</strong><b><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /><i className="fa-solid fa-star" aria-hidden="true" /></b><small>Yesterday</small></div><p>Best burger in town!</p></blockquote></section></aside>
      </div>
    </div>
  )
}
