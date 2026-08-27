import { NavLink } from 'react-router-dom'
import { Button } from '../ui/Button'

export function ProductCard({ item, onAddToCart, showDetails = true }) {
  return (
    <article className="product-card">
      <img src={item.image} alt={item.name} />
      <div className="product-info">
        <div className="rating-row">
          <span><i className="fa-solid fa-star" aria-hidden="true" /> {item.rating}</span>
        </div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="card-footer">
          <strong>${item.price.toFixed(2)}</strong>
          <div className="action-row">
            {showDetails ? (
              <NavLink to={`/menu/${item.id}`} className="text-link small">
                View details
              </NavLink>
            ) : null}
            <Button variant="mini" onClick={() => onAddToCart(item)}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
