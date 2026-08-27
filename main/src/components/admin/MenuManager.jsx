import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { categories } from '../../data/menuData'

const blankItem = { name: '', category: categories[0], price: '', rating: '4.8', image: '', description: '', badge: 'New' }

export function MenuManager({ menuItems, setMenuItems }) {
  const [form, setForm] = useState(blankItem)
  const [editingId, setEditingId] = useState(null)
  const [search, setSearch] = useState('')

  const visibleItems = useMemo(() => menuItems.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase())), [menuItems, search])

  const updateField = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }))

  const saveItem = (event) => {
    event.preventDefault()
    if (!form.name.trim() || !form.price || !form.description.trim()) return
    const nextItem = { ...form, id: editingId || Math.max(0, ...menuItems.map((item) => item.id)) + 1, price: Number(form.price) / 100, rating: Number(form.rating) }
    setMenuItems((current) => editingId ? current.map((item) => item.id === editingId ? nextItem : item) : [...current, nextItem])
    setForm(blankItem)
    setEditingId(null)
  }

  const editItem = (item) => {
    setEditingId(item.id)
    setForm({ ...item, price: Math.round(item.price * 100).toString(), rating: item.rating.toString() })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const deleteItem = (id) => setMenuItems((current) => current.filter((item) => item.id !== id))

  return (
    <div className="admin-pane menu-manager">
      <header className="admin-page-heading compact-admin-heading"><div><p className="admin-kicker">Catalog management</p><h1>Menu Items</h1><p>Add, update, or remove dishes. Changes are reflected on the customer menu instantly.</p></div><NavLink className="admin-outline-link" to="/menu"><i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /> View customer menu</NavLink></header>

      <form className="admin-card menu-form" onSubmit={saveItem}>
        <div className="admin-panel-heading"><h3>{editingId ? 'Edit menu item' : 'Add a new menu item'}</h3>{editingId ? <button type="button" className="admin-text-button" onClick={() => { setEditingId(null); setForm(blankItem) }}>Cancel edit</button> : <span className="form-required">All fields marked * are required</span>}</div>
        <div className="menu-form-grid"><label>Dish name *<input name="name" value={form.name} onChange={updateField} placeholder="e.g. Classic Smash Burger" required /></label><label>Category *<select name="category" value={form.category} onChange={updateField}>{categories.map((category) => <option key={category}>{category}</option>)}</select></label><label>Price (Rs.) *<input name="price" value={form.price} onChange={updateField} type="number" min="1" step="1" placeholder="799" required /></label><label>Rating<input name="rating" value={form.rating} onChange={updateField} type="number" min="1" max="5" step="0.1" /></label><label>Badge<input name="badge" value={form.badge} onChange={updateField} placeholder="Best seller" /></label><label className="wide-field">Image URL *<input name="image" value={form.image} onChange={updateField} type="url" placeholder="https://images.unsplash.com/..." required /></label><label className="wide-field">Description *<textarea name="description" value={form.description} onChange={updateField} rows="3" placeholder="Describe the ingredients and experience..." required /></label></div><button type="submit" className="primary-button"><i className={`fa-solid ${editingId ? 'fa-check' : 'fa-plus'}`} aria-hidden="true" /> {editingId ? 'Save changes' : 'Add menu item'}</button>
      </form>

      <section className="admin-card catalog-card"><div className="admin-panel-heading"><div><h3>Live catalog <span className="catalog-count">{menuItems.length} items</span></h3></div><label className="catalog-search"><i className="fa-solid fa-magnifying-glass" aria-hidden="true" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search catalog" /></label></div><div className="catalog-table-wrap"><table className="catalog-table"><thead><tr><th>Item</th><th>Category</th><th>Price</th><th>Rating</th><th>Badge</th><th>Actions</th></tr></thead><tbody>{visibleItems.map((item) => <tr key={item.id}><td><div className="catalog-item"><img src={item.image} alt="" /><strong>{item.name}</strong></div></td><td><span className="catalog-category">{item.category}</span></td><td>Rs. {Math.round(item.price * 100)}</td><td><i className="fa-solid fa-star catalog-star" aria-hidden="true" /> {item.rating}</td><td>{item.badge}</td><td><div className="catalog-actions"><button type="button" onClick={() => editItem(item)} aria-label={`Edit ${item.name}`}><i className="fa-solid fa-pen" aria-hidden="true" /></button><button type="button" onClick={() => deleteItem(item.id)} aria-label={`Delete ${item.name}`}><i className="fa-solid fa-trash" aria-hidden="true" /></button></div></td></tr>)}</tbody></table></div>{visibleItems.length === 0 ? <p className="catalog-empty">No menu items match your search.</p> : null}</section>
    </div>
  )
}
