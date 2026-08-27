import { Navigate, useParams } from 'react-router-dom'
import { Button } from '../ui/Button'

export function ProductPage({ addToCart, menuItems }) {
  const { productId } = useParams()
  const item = menuItems.find((entry) => entry.id === Number(productId))

  if (!item) {
    return <Navigate to="/menu" replace />
  }

  return (
    <section className="container product-detail">
      <div className="product-visual">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="product-summary">
        <p className="eyebrow small">{item.category}</p>
        <h2>{item.name}</h2>
        <div className="rating-row">
          <span><i className="fa-solid fa-star" aria-hidden="true" /> {item.rating}</span>
          <span className="pill">{item.badge}</span>
        </div>
        <p className="lead">{item.description}</p>

        <div className="customization-box">
          <h3>Customize</h3>
          <div className="option-list">
            <span>Extra cheese</span>
            <span>Spicy sauce</span>
            <span>Gluten-free bun</span>
          </div>
        </div>

        <div className="detail-footer">
          <strong>${item.price.toFixed(2)}</strong>
          <Button variant="primary" onClick={() => addToCart(item)}>
            Add to cart
          </Button>
        </div>
      </div>
    </section>
  )
}
